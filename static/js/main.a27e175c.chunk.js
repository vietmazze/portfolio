(this["webpackJsonppnl-ftx"]=this["webpackJsonppnl-ftx"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},50:function(e,t,a){e.exports=a(90)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=(a(30),a(24)),i=a.n(s),o=a(1),m=a(46),u=a(3),p=(a(31),function(e){e.quotes;return r.a.createElement("div",{className:"planner-quote-body"},r.a.createElement("h2",{className:"planner-quote-h2"},'"Take OPTIMISTIC bets. Don\'t be PESSIMISTIC. Control your MIND"'))}),d=(a(32),Object(n.createContext)()),b=function(e){var t=Object(n.useState)({currIndex:1}),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({session:1500,break:300,mode:"session",time:{currentTime:1500,startingTime:300},active:!1,name:"Pomodoro Timer",progress:0}),i=Object(u.a)(s,2),o=i[0],m=i[1];return r.a.createElement(d.Provider,{value:[o,m,c,l]},e.children)},f=(a(55),function(e){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},e.title)))}),E=(a(56),function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"counter"},r.a.createElement("div",{id:"time-left"},function(e){var t=Math.floor(e/60);t<10&&(t="0"+t);var a=Math.floor(e-60*t);return a<10&&(a="0"+a),"".concat(t,":").concat(a)}(e.time.currentTime)),r.a.createElement("span",{className:"counterType",id:"timer-label"},e.mode)))}),v=a(7);a(57),a(58);function N(e){return r.a.createElement("button",{id:e.buttonId,className:"Button",onClick:function(){return e.actionClick(e.type)}},e.children)}function j(e){var t=Object(n.useContext)(d),a=Object(u.a)(t,2),c=a[0],l=a[1],s=function(t){var a=c.mode;if(console.log(a),c.mode===e.type){var n,r;if(console.log("same mode"),"decrement"===t&&c[e.type]>60)l(Object(o.a)(Object(o.a)({},c),{},(n={},Object(v.a)(n,e.type,c[e.type]-60),Object(v.a)(n,"time",{currentTime:c[c.mode]-60,startingTime:c[c.mode]-60}),n)));if("increment"===t&&c[e.type]<3600)l(Object(o.a)(Object(o.a)({},c),{},(r={},Object(v.a)(r,e.type,c[e.type]+60),Object(v.a)(r,"time",{currentTime:c[c.mode]+60,startingTime:c[c.mode]+60}),r)))}else{var s,i,m=c.time;if("decrement"===t&&c[e.type]>60)l(Object(o.a)(Object(o.a)({},c),{},(s={},Object(v.a)(s,e.type,c[e.type]-60),Object(v.a)(s,"time",m),s)));if("increment"===t&&c[e.type]<3600)l(Object(o.a)(Object(o.a)({},c),{},(i={},Object(v.a)(i,e.type,c[e.type]+60),Object(v.a)(i,"time",m),i)))}};return r.a.createElement("div",{className:"TimeController"},r.a.createElement("div",{className:"TimeController-button"},r.a.createElement(N,{actionClick:function(){return s("decrement")},className:"controlButton",buttonId:"".concat(e.type,"-decrement")},"-"),r.a.createElement(N,{actionClick:function(){return s("increment")},className:"controlButton",buttonId:"".concat(e.type,"-increment")},"+")),r.a.createElement("div",{className:"wrapperDisplay"},r.a.createElement("span",{id:e.labelId,className:"label"},e.label),r.a.createElement("span",{id:e.lengthId,className:"time"},c[e.type]/60)))}a(59);function O(e){var t=r.a.useContext(d),a=Object(u.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:"ButtonController"},r.a.createElement(N,{buttonId:"reset",type:"reset",actionClick:function(){return console.log(n),c(Object(o.a)(Object(o.a)({},n),{},{session:1500,break:300,mode:"session",time:{currentTime:1500,startingTime:1500},active:!1,name:"Pomodoro Timer",progress:0})),e.myRef.current.pause(),void(e.myRef.current.currentTime=0)}},r.a.createElement("i",{className:"fas fa-undo-alt"})),r.a.createElement(N,{buttonId:"start_stop",type:"play",actionClick:function(){c(Object(o.a)(Object(o.a)({},n),{},{active:!n.active}))}},r.a.createElement("i",{className:"fas ".concat(n.active?"fa-pause":"fa-play")})))}var y=a(25),g=a.n(y);a(60);g.a.initializeApp({apiKey:"AIzaSyCCQmaxvFQGI_YiBCaJFpxZnKmdG-bOG9o",authDomain:"coin-casanova.firebaseapp.com",databaseURL:"https://coin-casanova.firebaseio.com",projectId:"coin-casanova",storageBucket:"coin-casanova.appspot.com",messagingSenderId:"286112267368",appId:"1:286112267368:web:728eec7e7f68e7ba290fdd",measurementId:"G-K5G1D4QD67"});var k=g.a,h=function(){var e=Object(n.useContext)(d),t=Object(u.a)(e,3),a=t[0],c=t[1],l=t[2],s=a.mode,i=a.time,m=a.name,p=(a.active,a.progress,l.currIndex),b=r.a.useRef();return r.a.useEffect((function(){if(a.active&&a.time.currentTime>0){var e=setInterval((function(){c(Object(o.a)(Object(o.a)({},a),{},{time:{startingTime:a.time.startingTime,currentTime:a.time.currentTime-1}}))}),1e3);return function(){return clearInterval(e)}}0===a.time.currentTime&&(b.current.play(),b.current.currentTime=0,"session"===a.mode&&c(Object(o.a)(Object(o.a)({},a),{},{time:{currentTime:a.break,startingTime:a.break},mode:"break"})),"break"===a.mode&&(c(Object(o.a)(Object(o.a)({},a),{},{time:{currentTime:a.session,startingTime:a.session},mode:"session",progress:a.progress+1,active:!a.active})),k.firestore().collection("planner").doc(p).get().then((function(e){var t=e.data().log;e.ref.update({log:t>=4?0:t+1}),console.log("task progress updated")}))))}),[c,a]),r.a.useEffect((function(){a.playPause&&(b.current.pause(),b.current.currentTime=0)})),r.a.createElement("div",{className:"pomo-container"},r.a.createElement("div",{className:"pomo"},r.a.createElement(f,{title:m}),r.a.createElement("div",null,r.a.createElement(E,{mode:s,time:i})),r.a.createElement(O,{playing:a.active,myRef:b}),r.a.createElement("div",{className:"time-controller-split"},r.a.createElement(j,{durationId:a.session,type:"session",label:"Session",lengthId:"session-length",labelId:"session-label"}),r.a.createElement(j,{durationId:a.break,type:"break",label:"Break",lengthId:"break-length",labelId:"break-label"})),r.a.createElement("audio",{id:"beep",preload:"auto",src:"https://www.soundjay.com/human/sounds/applause-4.mp3",ref:b})))},S=(a(63),function(e){var t=Object(n.useContext)(d),a=Object(u.a)(t,4),c=a[0],l=a[1],s=a[2],i=a[3],m=new Array(4).fill(0).fill(!0,0,null==e.progress?0:e.progress);return r.a.createElement("div",{className:"progress-container"},m.map((function(t,a){return r.a.createElement("button",{key:a,className:"dot ".concat(m[a]?"completed":""),onClick:function(t){return function(e,t){e.preventDefault(),l(Object(o.a)(Object(o.a)({},c),{},{active:!c.active})),i(Object(o.a)(Object(o.a)({},s),{},{currIndex:t}))}(t,e.currIndex)}})})))}),x=a(47),C=a.n(x),I=(a(80),function(){var e=Object(n.useContext)(d),t=Object(u.a)(e,3),a=(t[0],t[1],t[2],Object(n.useState)([])),c=Object(u.a)(a,2),l=c[0],s=c[1],b=Object(n.useState)([]),f=Object(u.a)(b,2),E=f[0],v=f[1],N=Object(n.useState)([]),j=Object(u.a)(N,2),O=j[0],y=j[1],g=Object(n.useState)(),x=Object(u.a)(g,2);x[0],x[1];!function(){I.apply(this,arguments)}();function I(){return(I=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("https://geolocation-db.com/json/");case 2:t=e.sent,localStorage.setItem("address",t.data.postal);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=localStorage.getItem("address"),t=k.firestore().collection("33781"==e?"planner":"ngan").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));s(t)}));return function(){return t()}}),[]),Object(n.useEffect)((function(){var e=k.firestore().collection("quote").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({author:e.id},e.data())}));y(t)}));return function(){return e()}}),[]),Object(n.useEffect)((function(){var e=k.firestore().collection("note").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));v(t)}));return function(){return e()}}),[]),r.a.createElement("div",{className:"planner"},r.a.createElement("div",{className:"planner-container"},r.a.createElement("div",{className:"planner-body"},r.a.createElement("div",{className:"planner-header"},r.a.createElement("h1",{className:"planner-header-h1"},"Productivity Planner"),r.a.createElement("button",{type:"submit",className:"planner-refresh-btn",onClick:function(e){k.firestore().collection("planner").get().then((function(e){e.forEach((function(e){e.ref.update({log:0,progress:" ",title:e.data().title})}))})),k.firestore().collection("note").get().then((function(e){e.forEach((function(e){e.ref.update({extra:"Extra notes..."})}))})),window.location.reload()}},"RESET")),r.a.createElement("div",{className:"planner-quote"},r.a.createElement(p,{quotes:O})),r.a.createElement("div",{className:"planner-split"},r.a.createElement("div",{className:"planner-content"},l.map((function(e){return r.a.createElement("div",{className:"planner-items",key:e.id},r.a.createElement("div",{className:"planner-item"},r.a.createElement("textarea",{className:"planner-textarea",type:"text",defaultValue:e.progress,onBlur:function(t){return function(e,t){var a=l.map((function(a){return{id:a.id,log:a.log,progress:a.id===e?t:a.progress,title:a.title}}));localStorage.setItem("planner",a),k.firestore().collection("planner").doc(e.toString()).get().then((function(e){e.ref.update({progress:t})}))}(e.id,t.target.value)},required:!0}),r.a.createElement("label",{className:"planner-label"},e.title)))}))),r.a.createElement("div",{className:"planner-progress-item"},l.map((function(e){return r.a.createElement("div",{className:"planner-item-buttons",key:e.id},r.a.createElement(S,{progress:e.log,currIndex:e.id}))}))),r.a.createElement("div",{className:"planner-pomodoro"},r.a.createElement(h,null))),E.map((function(e){return r.a.createElement("div",{className:"planner-note",key:e.id},r.a.createElement("textarea",{key:e.id,className:"planner-note-textarea",defaultValue:e.extra,onBlur:function(t){return function(e,t){E.map((function(a){return{id:a.id,extra:a.id===e?t:a.extra}}));k.firestore().collection("note").doc(e).get().then((function(e){e.ref.update({extra:t})}))}(e.id,t.target.value)}}))})))))}),P=(a(82),a(14));var T=function(){var e=Object(n.useState)({entry:"",stopLoss:"",takeProfit:"",marketPrice:"",percentGain:"",percentLoss:"",amountUSD:"",amount:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({userGain:"",userLoss:"",userLiquidation:""}),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(n.useState)({buy:!0,sell:!1}),d=Object(u.a)(p,2),b=d[0],f=d[1],E=function(e,t){var n=t.target.value;c(Object(o.a)(Object(o.a)({},a),{},Object(v.a)({},e,n?parseFloat(n):"")))},N=function(e,t){f("sell"===e?{buy:!1,sell:!0}:{buy:!0,sell:!1})},j=b.buy?"pnl-order-buy":"pnl-order-button",O=b.sell?"pnl-order-sell":" pnl-order-button";Object(n.useEffect)((function(){var e,t,n,r;""!==a.entry&&""!==a.takeProfit&&(n=a.entry,r=a.takeProfit,e=Object(P.round)(Math.abs(n-r)/n*100,2)),""!==a.entry&&""!==a.stopLoss&&(t=function(e,t){return Object(P.round)(Math.abs(e-t)/e*100,2)}(a.entry,a.stopLoss)),c(Object(o.a)(Object(o.a)({},a),{},{percentGain:e?parseFloat(e):"",percentLoss:t?parseFloat(t):""}))}),[a.entry,a.takeProfit,a.stopLoss]),Object(n.useEffect)((function(){var e;""!==a.amount&&""!==a.marketPrice&&(e=function(e,t){return Object(P.round)(e*t,4)}(a.amount,a.marketPrice)),c(Object(o.a)(Object(o.a)({},a),{},{amountUSD:e?parseFloat(e):""}))}),[a.amount,a.marketPrice]),Object(n.useEffect)((function(){var e,t,n,r;""!==a.amountUSD&&""!==a.percentGain&&(n=a.amountUSD,r=a.percentGain,e=Object(P.round)(n*(r/100),3)),""!==a.amountUSD&&""!==a.percentLoss&&(t=function(e,t){return Object(P.round)(e*(t/100),3)}(a.amountUSD,a.percentLoss)),m(Object(o.a)(Object(o.a)({},i),{},{userGain:e?parseFloat(e):"",userLoss:t?parseFloat(t):""}))}),[a.amountUSD,a.percentGain,a.percentLoss]);var y=function(e){c(Object(o.a)(Object(o.a)({},a),{},{amount:parseFloat(e.target.value)}))};return window.addEventListener("pnl-slider-input",y),r.a.createElement("div",null,r.a.createElement("h1",{className:"pnl-title"}," Profit and Loss Calculator"),r.a.createElement("div",{className:"pnl-container"},r.a.createElement("div",{className:"pnl-body"},r.a.createElement("div",{className:"pnl-order"},r.a.createElement("button",{className:j,onClick:function(e){return N("buy")},defaultValue:"Buy"},"Buy"),r.a.createElement("button",{className:O,onClick:function(e){return N("sell")},defaultValue:"Sell"},"Sell")),r.a.createElement("div",{className:"pnl-menu"},r.a.createElement("div",{className:"pnl-grid"},r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Entry"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.entry,onChange:function(e){return E("entry",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Take Profit"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.takeProfit,onChange:function(e){return E("takeProfit",e)}})),b.buy&a.takeProfit<a.marketPrice?r.a.createElement("p",{className:"pnl-warning"}," Should be greater than market"):null,b.sell&a.takeProfit>a.marketPrice?r.a.createElement("p",{className:"pnl-warning"},"Should be lower than market"):null),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Stoploss"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.stopLoss,onChange:function(e){return E("stopLoss",e)}})),b.buy&a.stopLoss>a.marketPrice?r.a.createElement("p",{className:"pnl-warning"}," Should be lower than market"):null,b.sell&a.stopLoss<a.marketPrice?r.a.createElement("p",{className:"pnl-warning"},"Should be greater than market"):null),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Amount"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.amount,onChange:function(e){return E("amount",e)}})))),r.a.createElement("div",{className:"pnl-grid"},r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Market Price"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.currentPrice,onChange:function(e){return E("marketPrice",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"% Gain"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{className:"pnl-input",type:"number",value:a.percentGain,onChange:function(e){return E("percentGain",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"% Loss"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.percentLoss,onChange:function(e){return E("percentLoss",e)}}))),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Amount USD"),r.a.createElement("div",{className:"pnl-box"},r.a.createElement("input",{type:"number",className:"pnl-input",value:a.amountUSD,onChange:function(e){return E("amountUSD",e)}}))))),r.a.createElement("div",{className:"pnl-slider"},r.a.createElement("input",{type:"range",min:"0",max:parseFloat(a.marketPrice)>300?"100":"10000",step:parseFloat(a.marketPrice)>300?"0.01":"1",defaultValue:"0",onChange:y,className:"pnl-slider-input"})),r.a.createElement("div",{className:"pnl-summary"},r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Exit PnL"),r.a.createElement("input",{type:"number",className:"pnl-box",defaultValue:i.userGain})),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Stop PnL"),r.a.createElement("input",{type:"number",className:"pnl-box",defaultValue:i.userLoss})),r.a.createElement("div",{className:"pnl-items"},r.a.createElement("label",{className:"pnl-items-title "},"Liquidation Price"),r.a.createElement("input",{type:"number",className:"pnl-box"}))))))};a(83);var L=a(12),w=["btn--primary","btn--outline","btn--test"],D=["btn--medium","btn--large"],G=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,l=e.buttonSize,s=w.includes(c)?c:w[0],i=D.includes(l)?l:D[0];return r.a.createElement(L.b,{to:"/sign-up",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(i),onClick:n,type:a},t))};a(88);var B=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),s=Object(u.a)(l,2),i=s[0],o=s[1],m=function(){return c(!1)},p=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(L.b,{to:"/",className:"navbar-logo",onClick:m},"sashimi",r.a.createElement("i",{className:"fas fa-dragon"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.b,{to:"/",className:"nav-links",onClick:m},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.b,{to:"/pnl",className:"nav-links",onClick:m},"PnL")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.b,{to:"/planner",className:"nav-links",onClick:m},"Planner")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/sign-up",className:"nav-links-mobile",onClick:m},"Sign Up"))),i&&r.a.createElement(G,{buttonStyle:"btn--outline"},"SIGN UP")))};var U=function(){return r.a.createElement(I,null)},F=a(4);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L.a,null,r.a.createElement(B,null),r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",exact:!0,component:T}),r.a.createElement(F.a,{path:"/pnl",exact:!0,component:T}),r.a.createElement(F.a,{path:"/planner",render:function(e){return r.a.createElement(b,null,r.a.createElement(U,e))}}))))},A=a(20),M=Object(A.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),V=M.actions,R=(V.increment,V.decrement,V.incrementByAmount,M.reducer),z=Object(A.a)({reducer:{counter:R}}),J=a(49);l.a.render(r.a.createElement(J.a,{store:z},r.a.createElement(q,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a27e175c.chunk.js.map