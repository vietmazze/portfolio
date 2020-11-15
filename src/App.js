import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import PnL from "./components/PnL";
import Planner from "./components/pages/Planner";
import Signup from "./components/pages/Signup";
import { TimeProvider } from "./components/plannerComponents/pomodoro/TimerProvider";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PnL} />
          <Route path="/pnl" exact component={PnL} />
          <Route
            path="/planner"
            render={(props) => (
              <TimeProvider>
                <Planner {...props} />
              </TimeProvider>
            )}
          />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
