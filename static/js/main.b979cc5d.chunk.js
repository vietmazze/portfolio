(this["webpackJsonppnl-ftx"]=this["webpackJsonppnl-ftx"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){e.exports=a(62)},42:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),s=(a(28),a(6)),i=a(1),o=a(3),m=(a(42),a(13));var u=function(){var e=Object(n.useState)({entry:"",stopLoss:"",takeProfit:"",marketPrice:"",percentGain:"",percentLoss:"",amountUSD:"",amount:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({userGain:"",userLoss:"",userLiquidation:""}),u=Object(o.a)(l,2),p=u[0],d=u[1],b=Object(n.useState)({buy:!0,sell:!1}),f=Object(o.a)(b,2),E=f[0],v=f[1],N=function(e,t){var n=t.target.value;c(Object(i.a)(Object(i.a)({},a),{},Object(s.a)({},e,n?parseFloat(n):"")))},j=function(e,t){v("sell"===e?{buy:!1,sell:!0}:{buy:!0,sell:!1})},O=E.buy?"pnl-order-buy":"pnl-order-button",y=E.sell?"pnl-order-sell":" pnl-order-button";Object(n.useEffect)((function(){var e,t,n,r;""!==a.entry&&""!==a.takeProfit&&(n=a.entry,r=a.takeProfit,e=Object(m.round)(Math.abs(n-r)/n*100,2)),""!==a.entry&&""!==a.stopLoss&&(t=function(e,t){return Object(m.round)(Math.abs(e-t)/e*100,2)}(a.entry,a.stopLoss)),c(Object(i.a)(Object(i.a)({},a),{},{percentGain:e?parseFloat(e):"",percentLoss:t?parseFloat(t):""}))}),[a.entry,a.takeProfit,a.stopLoss]),Object(n.useEffect)((function(){var e;""!==a.amount&&""!==a.marketPrice&&(e=function(e,t){return Object(m.round)(e*t,4)}(a.amount,a.marketPrice)),c(Object(i.a)(Object(i.a)({},a),{},{amountUSD:e?parseFloat(e):""}))}),[a.amount,a.marketPrice]),Object(n.useEffect)((function(){var e,t,n,r;""!==a.amountUSD&&""!==a.percentGain&&(n=a.amountUSD,r=a.percentGain,e=Object(m.round)(n*(r/100),3)),""!==a.amountUSD&&""!==a.percentLoss&&(t=function(e,t){return Object(m.round)(e*(t/100),3)}(a.amountUSD,a.percentLoss)),d(Object(i.a)(Object(i.a)({},p),{},{userGain:e?parseFloat(e):"",userLoss:t?parseFloat(t):""}))}),[a.amountUSD,a.percentGain,a.percentLoss]);var g=function(e){c(Object(i.a)(Object(i.a)({},a),{},{amount:parseFloat(e.target.value)}))};return window.addEventListener("pnl-slider-input",g),r.a.createElement("div",null,r.a.createElement("h1",{className:"pnl-title"}," Profit and Loss Calculator"),r.a.createElement("div",{className:"pnl-container"},r.a.createElement("div",{className:"pnl-body"},r.a.createElement("div",{className:"pnl-order"},r.a.createElement("button",{className:O,onClick:function(e){return j("buy")},defaultValue:"Buy"},"Buy"),r.a.createElement("button",{className:y,onClick:function(e){return j("sell")},defaultValue:"Sell"},"Sell")),r.a.createElement("div",{className:"pnl-menu"},r.a.createElement("div",{className:"pnl-grid"},r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Entry"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.entry,onChange:function(e){return N("entry",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Take Profit"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.takeProfit,onChange:function(e){return N("takeProfit",e)}})),E.buy&a.takeProfit<a.marketPrice?r.a.createElement("p",{className:"pnl-warning"}," Should be greater than market"):null,E.sell&a.takeProfit>a.marketPrice?r.a.createElement("p",{className:"pnl-warning"},"Should be lower than market"):null),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Stoploss"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.stopLoss,onChange:function(e){return N("stopLoss",e)}})),E.buy&a.stopLoss>a.marketPrice?r.a.createElement("p",{className:"pnl-warning"}," Should be lower than market"):null,E.sell&a.stopLoss<a.marketPrice?r.a.createElement("p",{className:"pnl-warning"},"Should be greater than market"):null),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Amount"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.amount,onChange:function(e){return N("amount",e)}})))),r.a.createElement("div",{className:"pnl-grid"},r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Market Price"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.currentPrice,onChange:function(e){return N("marketPrice",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"% Gain"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{className:"pnl-input",type:"number",value:a.percentGain,onChange:function(e){return N("percentGain",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"% Loss"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.percentLoss,onChange:function(e){return N("percentLoss",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Amount USD"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.amountUSD,onChange:function(e){return N("amountUSD",e)}}))))),r.a.createElement("div",{className:"pnl-slider"},r.a.createElement("input",{type:"range",min:"0",max:parseFloat(a.marketPrice)>300?"100":"10000",step:parseFloat(a.marketPrice)>300?"0.01":"1",defaultValue:"0",onChange:g,className:"pnl-slider-input"})),r.a.createElement("div",{className:"pnl-summary"},r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Exit PnL"),r.a.createElement("input",{type:"number",className:"pnl-box",defaultValue:p.userGain})),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Stop PnL"),r.a.createElement("input",{type:"number",className:"pnl-box",defaultValue:p.userLoss})),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Liquidation Price"),r.a.createElement("input",{type:"number",className:"pnl-box"}))))))};var p=function(){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null)))},d=(a(44),a(11)),b=["btn--primary","btn--outline","btn--test"],f=["btn--medium","btn--large"],E=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,l=e.buttonSize,s=b.includes(c)?c:b[0],i=f.includes(l)?l:f[0];return r.a.createElement(d.b,{to:"/sign-up",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(i),onClick:n,type:a},t))};a(49);var v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),s=Object(o.a)(l,2),i=s[0],m=s[1],u=function(){return c(!1)},p=function(){window.innerWidth<=960?m(!1):m(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(d.b,{to:"/",className:"navbar-logo",onClick:u},"sashimi",r.a.createElement("i",{className:"fas fa-dragon"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-links",onClick:u},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/pnl",className:"nav-links",onClick:u},"PnL")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/planner",className:"nav-links",onClick:u},"Planner")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/sign-up",className:"nav-links-mobile",onClick:u},"Sign Up"))),i&&r.a.createElement(E,{buttonStyle:"btn--outline"},"SIGN UP")))},N=a(24),j=a.n(N),O=a(34),y=(a(29),function(e){e.quotes;return r.a.createElement("div",{className:"planner-quote-body"},r.a.createElement("h2",{className:"planner-quote-h2"},'"Take OPTIMISTIC bets. Don\'t be PESSIMISTIC. Control your MIND"'))}),g=(a(30),Object(n.createContext)()),k=function(e){var t=Object(n.useState)({currIndex:1}),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({session:120,break:120,mode:"session",time:{currentTime:120,startingTime:120},active:!1,name:"Pomodoro Timer",progress:0}),i=Object(o.a)(s,2),m=i[0],u=i[1];return r.a.createElement(g.Provider,{value:[m,u,c,l]},e.children)},h=(a(51),function(e){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},e.title)))}),S=(a(52),function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"counter"},r.a.createElement("div",{id:"time-left"},function(e){var t=Math.floor(e/60);t<10&&(t="0"+t);var a=Math.floor(e-60*t);return a<10&&(a="0"+a),"".concat(t,":").concat(a)}(e.time.currentTime)),r.a.createElement("span",{className:"counterType",id:"timer-label"},e.mode)))});a(53),a(54);function x(e){return r.a.createElement("button",{id:e.buttonId,className:"Button",onClick:function(){return e.actionClick(e.type)}},e.children)}function C(e){var t=Object(n.useContext)(g),a=Object(o.a)(t,2),c=a[0],l=a[1],m=function(t){var a=c.mode;if(console.log(a),c.mode===e.type){var n,r;if(console.log("same mode"),"decrement"===t&&c[e.type]>60)l(Object(i.a)(Object(i.a)({},c),{},(n={},Object(s.a)(n,e.type,c[e.type]-60),Object(s.a)(n,"time",{currentTime:c[c.mode]-60,startingTime:c[c.mode]-60}),n)));if("increment"===t&&c[e.type]<3600)l(Object(i.a)(Object(i.a)({},c),{},(r={},Object(s.a)(r,e.type,c[e.type]+60),Object(s.a)(r,"time",{currentTime:c[c.mode]+60,startingTime:c[c.mode]+60}),r)))}else{var o,m,u=c.time;if("decrement"===t&&c[e.type]>60)l(Object(i.a)(Object(i.a)({},c),{},(o={},Object(s.a)(o,e.type,c[e.type]-60),Object(s.a)(o,"time",u),o)));if("increment"===t&&c[e.type]<3600)l(Object(i.a)(Object(i.a)({},c),{},(m={},Object(s.a)(m,e.type,c[e.type]+60),Object(s.a)(m,"time",u),m)))}};return r.a.createElement("div",{className:"TimeController"},r.a.createElement("div",{className:"TimeController-button"},r.a.createElement(x,{actionClick:function(){return m("decrement")},className:"controlButton",buttonId:"".concat(e.type,"-decrement")},"-"),r.a.createElement(x,{actionClick:function(){return m("increment")},className:"controlButton",buttonId:"".concat(e.type,"-increment")},"+")),r.a.createElement("div",{className:"wrapperDisplay"},r.a.createElement("span",{id:e.labelId,className:"label"},e.label),r.a.createElement("span",{id:e.lengthId,className:"time"},c[e.type]/60)))}a(55);function P(e){var t=r.a.useContext(g),a=Object(o.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:"ButtonController"},r.a.createElement(x,{buttonId:"reset",type:"reset",actionClick:function(){return console.log(n),c(Object(i.a)(Object(i.a)({},n),{},{session:1500,break:300,mode:"session",time:{currentTime:1500,startingTime:1500},active:!1,name:"Pomodoro Timer",progress:0})),e.myRef.current.pause(),void(e.myRef.current.currentTime=0)}},r.a.createElement("i",{className:"fas fa-undo-alt"})),r.a.createElement(x,{buttonId:"start_stop",type:"play",actionClick:function(){c(Object(i.a)(Object(i.a)({},n),{},{active:!n.active}))}},r.a.createElement("i",{className:"fas ".concat(n.active?"fa-pause":"fa-play")})))}var I=a(25),T=a.n(I);a(56);T.a.initializeApp({apiKey:"AIzaSyCCQmaxvFQGI_YiBCaJFpxZnKmdG-bOG9o",authDomain:"coin-casanova.firebaseapp.com",databaseURL:"https://coin-casanova.firebaseio.com",projectId:"coin-casanova",storageBucket:"coin-casanova.appspot.com",messagingSenderId:"286112267368",appId:"1:286112267368:web:728eec7e7f68e7ba290fdd",measurementId:"G-K5G1D4QD67"});var L=T.a,w=function(){var e=Object(n.useContext)(g),t=Object(o.a)(e,3),a=t[0],c=t[1],l=t[2],s=a.mode,m=a.time,u=a.name,p=(a.active,a.progress,l.currIndex),d=r.a.useRef();return r.a.useEffect((function(){if(a.active&&a.time.currentTime>0){var e=setInterval((function(){c(Object(i.a)(Object(i.a)({},a),{},{time:{startingTime:a.time.startingTime,currentTime:a.time.currentTime-1}}))}),10);return function(){return clearInterval(e)}}0===a.time.currentTime&&(d.current.play(),d.current.currentTime=0,"session"===a.mode&&c(Object(i.a)(Object(i.a)({},a),{},{time:{currentTime:a.break,startingTime:a.break},mode:"break"})),"break"===a.mode&&(c(Object(i.a)(Object(i.a)({},a),{},{time:{currentTime:a.session,startingTime:a.session},mode:"session",progress:a.progress+1,active:!a.active})),L.firestore().collection("planner").doc(p).get().then((function(e){var t=e.data().log;e.ref.update({log:t>=4?0:t+1}),console.log("task progress updated")}))))}),[c,a]),r.a.useEffect((function(){a.playPause&&(d.current.pause(),d.current.currentTime=0)})),r.a.createElement("div",{className:"pomo-container"},r.a.createElement("div",{className:"pomo"},r.a.createElement(h,{title:u}),r.a.createElement("div",null,r.a.createElement(S,{mode:s,time:m})),r.a.createElement(P,{playing:a.active,myRef:d}),r.a.createElement("div",{className:"time-controller-split"},r.a.createElement(C,{durationId:a.session,type:"session",label:"Session",lengthId:"session-length",labelId:"session-label"}),r.a.createElement(C,{durationId:a.break,type:"break",label:"Break",lengthId:"break-length",labelId:"break-label"})),r.a.createElement("audio",{id:"beep",preload:"auto",src:"https://www.soundjay.com/human/sounds/applause-4.mp3",ref:d})))},D=(a(60),function(e){var t=Object(n.useContext)(g),a=Object(o.a)(t,4),c=a[0],l=a[1],s=a[2],m=a[3],u=new Array(4).fill(0).fill(!0,0,null==e.progress?0:e.progress);return r.a.createElement("div",{className:"progress-container"},u.map((function(t,a){return r.a.createElement("button",{key:a,className:"dot ".concat(u[a]?"completed":""),onClick:function(t){return function(e,t){e.preventDefault(),l(Object(i.a)(Object(i.a)({},c),{},{active:!c.active})),m(Object(i.a)(Object(i.a)({},s),{},{currIndex:t}))}(t,e.currIndex)}})})))}),G=function(){var e=Object(n.useContext)(g),t=Object(o.a)(e,3),a=(t[0],t[1],t[2],Object(n.useState)([])),c=Object(o.a)(a,2),l=c[0],s=c[1],m=Object(n.useState)([]),u=Object(o.a)(m,2),p=u[0],d=u[1],b=Object(n.useState)([]),f=Object(o.a)(b,2),E=f[0],v=f[1];function N(){return(N=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.firestore().collection("planner").get().then((function(e){e.forEach((function(e){e.ref.update({log:0,progress:" ",title:e.data().title})}))}));case 2:e.sent,L.firestore().collection("note").get().then((function(e){e.forEach((function(e){e.ref.update({extra:" "})}))})),window.location.reload();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=L.firestore().collection("planner").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));s(t)}));return function(){return e()}}),[]),Object(n.useEffect)((function(){var e=L.firestore().collection("quote").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({author:e.id},e.data())}));v(t)}));return function(){return e()}}),[]),Object(n.useEffect)((function(){var e=L.firestore().collection("note").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));d(t)}));return function(){return e()}}),[]),r.a.createElement("div",{className:"planner"},r.a.createElement("div",{className:"planner-container"},r.a.createElement("div",{className:"planner-body"},r.a.createElement("div",{className:"planner-header"},r.a.createElement("h1",{className:"planner-header-h1"},"Productivity Planner"),r.a.createElement("button",{type:"submit",className:"planner-refresh-btn",onClick:function(e){!function(e){N.apply(this,arguments)}(e)}},"RESET")),r.a.createElement("div",{className:"planner-quote"},r.a.createElement(y,{quotes:E})),r.a.createElement("div",{className:"planner-split"},r.a.createElement("div",{className:"planner-content"},l.map((function(e){return r.a.createElement("div",{className:"planner-items",key:e.id},r.a.createElement("div",{className:"planner-item"},r.a.createElement("textarea",{className:"planner-textarea",type:"text",defaultValue:e.progress,onBlur:function(t){return function(e,t){l.map((function(a){return{id:a.id,log:a.log,progress:a.id===e?t:a.progress,title:a.title}}));L.firestore().collection("planner").doc(e.toString()).get().then((function(e){e.ref.update({progress:t})}))}(e.id,t.target.value)},required:!0}),r.a.createElement("label",{className:"planner-label"},e.title)))}))),r.a.createElement("div",{className:"planner-progress-item"},l.map((function(e){return r.a.createElement("div",{className:"planner-item-buttons",key:e.id},r.a.createElement(D,{progress:e.log,currIndex:e.id}))}))),r.a.createElement("div",{className:"planner-pomodoro"},r.a.createElement(w,null))),p.map((function(e){return r.a.createElement("div",{className:"planner-note",key:e.id},r.a.createElement("textarea",{key:e.id,className:"planner-note-textarea",defaultValue:e.extra,onBlur:function(t){return function(e,t){p.map((function(a){return{id:a.id,extra:a.id===e?t:a.extra}}));L.firestore().collection("note").doc(e).get().then((function(e){e.ref.update({extra:t})}))}(e.id,t.target.value)}}))})))))};var B=function(){return r.a.createElement(G,null)},U=a(4);var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(v,null),r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/",exact:!0,component:p}),r.a.createElement(U.a,{path:"/pnl",exact:!0,component:u}),r.a.createElement(U.a,{path:"/planner",render:function(e){return r.a.createElement(k,null,r.a.createElement(B,e))}}))))},q=a(19),A=Object(q.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),M=A.actions,V=(M.increment,M.decrement,M.incrementByAmount,A.reducer),R=Object(q.a)({reducer:{counter:V}}),z=a(36);l.a.render(r.a.createElement(z.a,{store:R},r.a.createElement(F,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b979cc5d.chunk.js.map