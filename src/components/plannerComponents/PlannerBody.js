import React, { useState, useEffect } from "react";
import "../plannerComponents/plannerBody.css";
import { PlannerQuote } from "./plannerQuote";
import Pomodoro from "./PlannerPomo";
import { Progress } from "./pomodoro/Progress";
import firebase from "../../services/firebase";
import axios from "axios";

const PlannerBody = () => {
  const [planner, setPlanner] = useState([]);
  const [note, setNote] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const onChangeProgress = (currentId, newProgress) => {
    var address = localStorage.getItem("address");
    firebase
      .firestore()
      .collection(address === "33781" ? "planner" : "ngan")
      .doc(currentId.toString())
      .get()
      .then((query) => {
        query.ref.update({ progress: newProgress });
      });
  };

  const onChangePlanner = (currentId, newProgress) => {
    var currPlanner = planner;

    const newPlanner = currPlanner.map((item) => ({
      id: item.id,
      log: item.log,
      progress: item.id === currentId ? newProgress : item.progress,
      title: item.title,
    }));
    setPlanner(newPlanner);
  };

  const onNoteChange = (currentId, newNote) => {
    const activeNote = note.map((item) => ({
      id: item.id,
      extra: item.id === currentId ? newNote : item.extra,
    }));

    firebase
      .firestore()
      .collection("note")
      .doc(String(currentId))
      .get()
      .then((query) => {
        query.ref.update({ extra: newNote });
      });
  };

  async function getAddress() {
    const response = await axios("https://geolocation-db.com/json/");
    localStorage.setItem("address", response.data.postal);
  }

  useEffect(() => {
    getAddress();
    const address = localStorage.getItem("address");
    const unsubscribe = firebase
      .firestore()
      .collection(address === "33781" ? "planner" : "ngan")
      .onSnapshot((snapshot) => {
        const prevPlanner = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlanner(prevPlanner);
      });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("note")
      .onSnapshot((snapshot) => {
        const activeNote = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNote(activeNote);
      });

    return () => unsub();
  }, []);

  function refreshData(e) {
    const unsub = firebase
      .firestore()
      .collection("planner")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          doc.ref.update({
            log: 0,
            progress: " ",
            title: doc.data().title,
          });
        });
      });
    firebase
      .firestore()
      .collection("note")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          doc.ref.update({
            extra: "Extra notes...",
          });
        });
      });
    return () => unsub();
  }

  return (
    <div className="planner">
      <div className="planner-container">
        <div className="planner-body">
          <div className="planner-header">
            <h1 className="planner-header-h1">Productivity Planner</h1>
            <button
              type="submit"
              className="planner-refresh-btn"
              onClick={(e) => {
                refreshData(e);
              }}>
              RESET
            </button>
          </div>
          <div className="planner-quote">
            <PlannerQuote />
          </div>
          <div className="planner-split">
            {/* -- Planner section */}
            <div className="planner-content">
              {planner.map((plan) => (
                <div className="planner-items" key={plan.id}>
                  <div className="planner-item">
                    <textarea
                      className="planner-textarea"
                      type="text"
                      value={plan.progress}
                      onChange={(e) => onChangePlanner(plan.id, e.target.value)}
                      onBlur={(e) => onChangeProgress(plan.id, e.target.value)}
                      required></textarea>
                    <label className="planner-label">{plan.title}</label>
                  </div>
                </div>
              ))}
            </div>

            <div className="planner-progress-item">
              {planner.map((plan) => (
                <div className="planner-item-buttons" key={plan.id}>
                  <Progress progress={plan.log} currIndex={plan.id} />
                </div>
              ))}
            </div>

            <div className="planner-pomodoro">
              <Pomodoro />
            </div>
          </div>
          {note.map((item) => (
            <div className="planner-note" key={item.id}>
              <textarea
                key={item.id}
                className="planner-note-textarea"
                defaultValue={item.extra}
                onBlur={(e) =>
                  onNoteChange(item.id, e.target.value)
                }></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlannerBody;
