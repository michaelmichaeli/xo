(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{120:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),i=n.n(a),s=n(45),l=n(19),o=(n(120),n(10)),j=n.p+"static/media/logo.33f6a5da.svg",u=n(186),d=n(187),b=n(169),m=n(173),h=n(188),x=n(73),O=n.n(x),f=n(94),p=n.n(f),g=n(74),v=n.n(g),y=n(95),N=n.n(y),w=n(93),k=n.n(w),S=n(51),A=n(56);A.a.initializeApp({apiKey:"AIzaSyASxXnbaJUXVhul4jHBW8m-Xq_k9KOx7mM",authDomain:"xo-game-f3a16.firebaseapp.com",databaseURL:"https://xo-game-f3a16-default-rtdb.europe-west1.firebasedatabase.app",projectId:"xo-game-f3a16",storageBucket:"xo-game-f3a16.appspot.com",messagingSenderId:"845770346317",appId:"1:845770346317:web:211d6ddd42f8055e3ff104"});var C=A.a.firestore(),U=A.a.auth(),R=n(172),T=n(174),L=n(92),I=n.n(L),E=n(2),M=function(e){var t=e.user,n=e.setIsDrawerOpen,r=Object(l.f)(),a=Object(c.useState)([]),i=Object(o.a)(a,2),s=i[0],j=i[1],x=C.collection("rooms/"),O=Object(c.useState)(null),f=Object(o.a)(O,2),p=f[0],g=f[1],v=Boolean(p),y=function(){g(null)},N=Object(c.useState)([]),w=Object(o.a)(N,2),k=w[0],S=w[1];Object(c.useEffect)((function(){var e=[];s&&s.forEach((function(n){n.game.turnUser.uid===t.uid&&n.game.player2&&e.push(n)})),S(e)}),[s,t]),Object(c.useEffect)((function(){x.orderBy("createdAt").onSnapshot((function(e){j(A(e.docs).reverse())}))}),[]);var A=function(e){var t=[];return e.forEach((function(e){var n=e.data();n.id=e.id,t.push(n)})),t};if(s&&t)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){t&&g(e.currentTarget)},children:Object(E.jsx)(R.a,{badgeContent:k.length,color:"primary",children:Object(E.jsx)(I.a,{})})}),Object(E.jsxs)(u.a,{id:"fade-menu",anchorEl:p,keepMounted:!1,open:v,onClose:y,TransitionComponent:m.a,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[k.length?"":"No New Notifications",k.length?"It's Your Turn Against":"",!!k&&k.map((function(e){var c=e.game,a=c.player2,i=c.player1,s=a&&a.uid===t.uid?i:a;return Object(E.jsxs)("div",{children:[Object(E.jsx)(T.a,{variant:"middle"}),Object(E.jsxs)(d.a,{className:"menu-item",onClick:function(){n(!1),r.push("/multiplayer/".concat(e.id)),r.go(),y()},children:[Object(E.jsx)(h.a,{src:s.photoURL,alt:s.photoURL,style:{width:24,height:24,borderRadius:"4px"}}),s.displayName]})]},e.id)}))]})]})},X=function(){var e=Object(l.f)(),t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),x=s[0],f=s[1],g=Object(S.a)(U),y=Object(o.a)(g,1)[0],w=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Boolean(n);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},children:Object(E.jsx)(h.a,{src:y.photoURL,alt:""})}),Object(E.jsx)(u.a,{id:"fade-menu",anchorEl:n,keepMounted:!0,open:i,onClose:function(){r(null)},TransitionComponent:m.a,children:Object(E.jsx)(d.a,{onClick:function(){U.signOut(),a(!1)},children:"Logout"})})]})};return Object(E.jsx)("div",{className:"nav-bar-wrap full",children:Object(E.jsxs)("div",{className:"nav-bar flex align-center",children:[(r||x)&&Object(E.jsx)("div",{className:"screen",onClick:function(){a(!1),f(!1)}}),Object(E.jsxs)(b.a,{onClick:function(){e.push("/")},className:"logo",children:[Object(E.jsx)(h.a,{src:j,alt:""}),Object(E.jsx)("h2",{children:"Tic Tac Toe"})]}),Object(E.jsxs)("ul",{className:"main-nav clean-list flex align-center justify-center ".concat(r?"menu-open":""),children:[Object(E.jsx)("li",{className:"home",children:Object(E.jsxs)(b.a,{onClick:function(){a(!1),e.push("/")},children:[Object(E.jsx)(k.a,{}),"Home"]})}),Object(E.jsx)("li",{className:"ai",children:Object(E.jsxs)(b.a,{onClick:function(){a(!1),e.push("/ai")},children:[Object(E.jsx)(O.a,{}),"Ai Game"]})}),Object(E.jsx)("li",{className:"rooms",children:Object(E.jsxs)(b.a,{onClick:function(){a(!1),e.push("/rooms")},children:[Object(E.jsx)(v.a,{}),"Game Rooms"]})}),Object(E.jsx)("li",{className:"about",children:Object(E.jsxs)(b.a,{onClick:function(){a(!1),e.push("/about")},children:[Object(E.jsx)(p.a,{}),"About"]})}),Object(E.jsx)("li",{className:"user",children:y?Object(E.jsx)(w,{}):Object(E.jsxs)(b.a,{onClick:function(){a(!1),e.push("/rooms")},children:[Object(E.jsx)(N.a,{}),"Sign In"]})}),Object(E.jsx)("li",{className:"notifications",children:y&&Object(E.jsx)(M,{user:y,setIsDrawerOpen:a})})]}),Object(E.jsxs)("div",{className:"nav-icon ".concat(r?"open":""),onClick:function(){return a(!r)},children:[Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{})]})]})})},z=n(96),P=n.n(z),F=n(98),D=n.n(F),B=n(97),W=n.n(B),q=function(){return Object(E.jsxs)("div",{className:"footer flex align-center justify-center full",children:[Object(E.jsx)(P.a,{}),Object(E.jsx)("p",{children:"2021 Designed and developed by Michael Michaeli"}),Object(E.jsx)("a",{href:"https://github.com/michaelmichaeli/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)(W.a,{})}),Object(E.jsx)("a",{href:"https://www.linkedin.com/in/michael-michaeli-a620b9b0/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)(D.a,{})})]})},J=n.p+"static/media/heroimage.6d217b44.svg",Y=function(){var e=Object(c.useRef)(),t=Object(c.useRef)();return Object(E.jsx)("div",{className:"home-page full flex column align-center justify-center",children:Object(E.jsxs)("section",{className:"hero flex column align-center justify-center",children:[Object(E.jsx)("div",{className:"hero-img",children:Object(E.jsx)("img",{src:J,alt:"",onAnimationEnd:function(){e.current.classList.add("animte")}})}),Object(E.jsxs)("div",{className:"content flex column align-center justify-center",children:[Object(E.jsx)("div",{className:"text flex column align-center justify-center",children:Object(E.jsx)("h1",{ref:e,onAnimationEnd:function(){t.current.classList.add("animte")},children:"Play with friends in realtime multiplayer rooms or against Ai"})}),Object(E.jsxs)("section",{ref:t,className:"menu flex wrap",children:[Object(E.jsxs)("a",{href:"#/ai",children:[Object(E.jsx)(O.a,{})," Play Against Ai"]}),Object(E.jsxs)("a",{href:"#/rooms",children:[Object(E.jsx)(v.a,{})," Play With Friends"]})]})]})]})})},V=n(41);function _(e){if(e&&!e.every((function(e){return e.every((function(e){return!e}))})))return e[0][0]&&e[0][0]===e[0][1]&&e[0][0]===e[0][2]?e[0][0]:e[1][0]&&e[1][0]===e[1][1]&&e[1][0]===e[1][2]?e[1][0]:e[2][0]&&e[2][0]===e[2][1]&&e[2][0]===e[2][2]?e[2][0]:e[0][0]&&e[0][0]===e[1][0]&&e[0][0]===e[2][0]?e[0][0]:e[0][1]&&e[0][1]===e[1][1]&&e[0][1]===e[2][1]?e[0][1]:e[0][2]&&e[0][2]===e[1][2]&&e[0][2]===e[2][2]?e[0][2]:e[0][0]&&e[0][0]===e[1][1]&&e[0][0]===e[2][2]?e[0][0]:e[0][2]&&e[0][2]===e[1][1]&&e[0][2]===e[2][0]?e[0][2]:e.every((function(e){return e.every((function(e){return!!e}))}))?"Tie":null}var G={X:-1,O:1,Tie:0};function H(e,t){var n=_(e);if(null!==n)return G[n];if(t){for(var c=-1/0,r=0;r<3;r++)for(var a=0;a<3;a++)if(null===e[r][a]){e[r][a]="O";var i=H(e,!1);e[r][a]=null,c=Math.max(i,c)}return c}for(var s=1/0,l=0;l<3;l++)for(var o=0;o<3;o++)if(null===e[l][o]){e[l][o]="X";var j=H(e,!0);e[l][o]=null,s=Math.min(j,s)}return s}var K=n(33),Q=n.n(K),Z=n(49),$=n.p+"static/media/x.0f781a89.svg",ee=n.p+"static/media/o.f06e24eb.svg",te=function(e){var t=e.index,n=e.value,c=e.handleClick,r=e.winner,a=e.isUserTurn;return Object(E.jsxs)("button",{className:"square ".concat(t.i,"-").concat(t.j," ").concat(r?"win":""),onClick:function(){return c(t)},disabled:!!n||!a,children:["X"===n&&Object(E.jsx)("img",{src:$,alt:"X"}),"O"===n&&Object(E.jsx)("img",{src:ee,alt:"O"})]})},ne=n(175),ce=function(e){var t=e.squares,n=e.handleClick,r=e.winner,a=e.isUserTurn,i=e.winnerUser,s=void 0===i?null:i,l=e.isAiThinking,j=void 0===l?null:l,u=Object(c.useState)(null),d=Object(o.a)(u,2),b=d[0],m=d[1];Object(c.useEffect)((function(){(function(){var e=Object(Z.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=s,!e.t0){e.next=7;break}return e.t1=m,e.next=5,s();case 5:e.t2=e.sent,(0,e.t1)(e.t2);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var h=function(){return Object(E.jsxs)("div",{className:"declaration",children:["Tie"===r&&Object(E.jsx)("h1",{className:"winner",children:"It's a Tie!"}),("X"===r||"O"===r)&&Object(E.jsxs)("div",{className:"winner",children:[Object(E.jsx)("img",{src:"X"===r?$:ee,alt:"X"===r?"X":"O"}),!b&&Object(E.jsx)("h3",{children:"Won!"}),b&&Object(E.jsxs)("h3",{children:[b.displayName," Won!"]})]})]})},x=function(){return Object(E.jsx)("div",{className:"your-turn",children:Object(E.jsx)("h1",{children:"Your Turn"})})};return Object(E.jsxs)("div",{className:"board-wrapper",children:[Object(E.jsx)("div",{className:"board ".concat(r&&"win"),children:t.map((function(e,t){return e.map((function(e,c){return Object(E.jsx)(te,{index:{i:t,j:c},value:e,handleClick:n,winner:r,isUserTurn:a},"".concat(t,"-").concat(c))}))}))}),Object(E.jsx)(h,{}),a&&!r&&Object(E.jsx)(x,{}),j&&Object(E.jsx)("div",{className:"loading",children:Object(E.jsx)(ne.a,{size:"50px",color:"inherit"})})]})},re=n(75),ae=n.n(re),ie=function(e){var t=e.currentPlayer,n=e.currentSymbol,c=e.winner;return Object(E.jsxs)("div",{className:"current-player-preview flex between ".concat(c&&"won"),children:[Object(E.jsx)("div",{className:"symbol",children:Object(E.jsx)("img",{src:"X"===n?$:ee,alt:"X"===n?"X":"O"})}),Object(E.jsxs)("div",{className:"next-player",children:[Object(E.jsx)("p",{className:"next-player",children:"Next Player"}),Object(E.jsx)("p",{className:"display-name",children:null===t||void 0===t?void 0:t.displayName})]})]})},se=n.p+"static/media/robot2.9d668d35.svg",le=function(){var e=Object(c.useState)(Array.from(Array(3),(function(){return new Array(3).fill(null)}))),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),s=i[0],l=i[1],j=_(n),u=function(e){var t=function(e){for(var t,n=-1/0,c=0;c<3;c++)for(var r=0;r<3;r++)if(null===e[c][r]){e[c][r]="O";var a=H(e,!1);e[c][r]=null,a>n&&(n=a,t={i:c,j:r})}return t}(e);e[t.i][t.j]="O",r(e)};return Object(E.jsxs)("div",{className:"ai flex align-center justify-center",children:[Object(E.jsxs)("header",{className:"flex",children:[Object(E.jsx)(ie,{currentPlayer:s?{displayName:"Ai"}:{displayName:"You"},currentSymbol:s?"O":"X",winner:j}),Object(E.jsx)("div",{className:"middle flex column align-center justify-center",children:Object(E.jsx)("h2",{children:"Ai game"})}),Object(E.jsx)("div",{className:"restart ".concat(j&&"won"),onClick:function(){return r(Array.from(Array(3),(function(){return new Array(3).fill(null)}))),void(j=null)},children:Object(E.jsx)("div",{className:"symbol",children:Object(E.jsx)(ae.a,{})})})]}),Object(E.jsx)(ce,{winner:j,squares:n,handleClick:function(e){var t=e.i,c=e.j;if(!(j||n[t][c]||s)){var a=Object(V.a)(n);a[t][c]="X",r(a),_(n)||(l(!0),setTimeout((function(){u(n),l(!1)}),1e3))}},isUserTurn:!s,isAiThinking:s,winnerUser:function(){return{displayName:"Ai"}}}),Object(E.jsx)("img",{className:"robot2",src:se,alt:""})]})},oe=n(32),je=n(99),ue=n(76),de=n.n(ue),be=function(e){var t=e.txt,n=e.createdAt,c=e.isSent,r=e.photoURL,a=c?"sent":"received";return Object(E.jsxs)("div",{className:"wrap flex align-center "+a,children:[!c&&Object(E.jsx)(h.a,{src:r,alt:"avatar"}),Object(E.jsx)("div",{className:"message flex between align-center "+a,children:Object(E.jsx)("p",{children:t})}),Object(E.jsx)("span",{children:de()(n).fromNow()})]})},me=n(100),he=n.n(me),xe=n.p+"static/media/chaticon.29cd576a.svg",Oe=function(e){var t=e.roomId,n=e.user,r=e.messages,a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],l=i[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),d=u[0],b=u[1],m=Object(c.useRef)(),h=C.collection("rooms").doc(t);Object(c.useEffect)((function(){m.current&&m.current.scrollIntoView({behavior:"smooth"})}),[r]);var x=function(){var e=Object(Z.a)(Q.a.mark((function e(t){var c,r,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,h.get();case 5:return c=e.sent.data(),r=Object(oe.a)({},c),a={id:Object(je.makeId)(),txt:s,createdAt:Date.now(),photoURL:n.photoURL,userId:n.uid},r.messages.push(a),e.next=11,h.update(r);case 11:l(""),m.current.scrollIntoView({behavior:"smooth"});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"chat flex column ".concat(d?"":"hide"),children:[Object(E.jsxs)("div",{className:"header",onClick:function(){b(!d),m.current&&m.current.scrollIntoView({behavior:"smooth"})},children:[Object(E.jsx)("img",{src:xe,alt:""}),Object(E.jsx)("p",{children:" Room Chat "}),Object(E.jsx)("svg",{className:"arrow ".concat(!d&&"upsidedown"),width:"10px",height:"10px",viewBox:"0 0 18 10",children:Object(E.jsx)("path",{fill:"black",d:"M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"})})]}),Object(E.jsxs)("main",{className:"flex column",children:[(!r||!r.length)&&Object(E.jsxs)("div",{className:"no-messages",children:[Object(E.jsx)("p",{children:"No Messages Yet"}),Object(E.jsx)("p",{children:"Let The Trash-Talk Begin"})]}),r&&r.map((function(e){return Object(E.jsx)(be,{txt:e.txt,createdAt:e.createdAt,photoURL:e.photoURL,isSent:n.uid===e.userId},e.id)})),Object(E.jsx)("div",{ref:m})]}),Object(E.jsxs)("form",{onSubmit:x,className:"flex",children:[Object(E.jsx)("input",{placeholder:"Aa",value:s,onChange:function(e){return l(e.target.value)}}),Object(E.jsx)("button",{disabled:!s,type:"submit",children:Object(E.jsx)(he.a,{})})]})]})}):null},fe=n(6),pe=n(101),ge=n.n(pe),ve=function(){var e={signInFlow:"popup",signInOptions:[fe.a.auth.GoogleAuthProvider.PROVIDER_ID,fe.a.auth.FacebookAuthProvider.PROVIDER_ID,fe.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return Object(E.jsxs)("div",{className:"login flex column align-center justify-center",children:[Object(E.jsx)("h2",{children:"Please Sign-In"}),Object(E.jsx)(ge.a,{uiConfig:e,firebaseAuth:fe.a.auth()})]})},ye=n(103),Ne=n.n(ye),we=n(176),ke=n(177),Se=n(178),Ae=n(179),Ce=n(180),Ue=n(181),Re=n(182),Te=n(183),Le=n(184),Ie=n(185),Ee=function(e){var t=e.roomId,n="http://localhost:3000/multiplayer/".concat(t),c="Join my game of Tic Tac Toe";return Object(E.jsxs)("div",{className:"share flex column align-center between",children:[Object(E.jsxs)("div",{className:"title flex align-center",children:[Object(E.jsx)(Ne.a,{fontSize:"small"}),Object(E.jsx)("p",{children:"Invite Your Friends"})]}),Object(E.jsxs)("div",{className:"content  flex align-center wrap",children:[Object(E.jsx)(we.a,{url:n,quote:c,className:"share-button",children:Object(E.jsx)(ke.a,{size:"3rem",round:!0})}),Object(E.jsx)(Se.a,{url:n,title:c,className:"share-button",children:Object(E.jsx)(Ae.a,{size:"3rem",round:!0})}),Object(E.jsx)(Ce.a,{url:n,title:c,separator:": ",className:"share-button",children:Object(E.jsx)(Ue.a,{size:"3rem",round:!0})}),Object(E.jsx)(Re.a,{url:n,title:c,windowWidth:750,windowHeight:600,className:"share-button",children:Object(E.jsx)(Te.a,{size:"3rem",round:!0})}),Object(E.jsx)(Le.a,{url:n,subject:c,body:"Check out this cool game: ",className:"share-button",children:Object(E.jsx)(Ie.a,{size:"3rem",round:!0})})]})]})},Me=n(105),Xe=n.n(Me),ze=n.p+"static/media/rocket.607ed6c2.svg",Pe=function(){var e=Object(l.g)().roomId,t=Object(c.useState)(!0),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!0),s=Object(o.a)(i,2),j=s[0],u=s[1],d=Object(S.a)(U),b=Object(o.a)(d,1)[0];U.onAuthStateChanged((function(e){return u(!1)}));var m=Object(c.useState)(null),x=Object(o.a)(m,2),O=x[0],f=x[1],p=Object(c.useState)(!1),g=Object(o.a)(p,2),v=g[0],y=g[1],N=Object(c.useState)(!0),w=Object(o.a)(N,2),k=w[0],A=w[1],R=C.collection("rooms").doc(e);Object(c.useEffect)((function(){R.onSnapshot((function(e){f(e.data()),a(!1)}))}),[]),Object(c.useEffect)((function(){return b&&O&&"hidden"!==document.visibilityState&&L(),document.addEventListener("visibilitychange",(function(){b&&O&&("hidden"===document.visibilityState?T():L())})),function(){document.removeEventListener("visibilitychange",T),document.removeEventListener("visibilitychange",L)}}),[O,b]),Object(c.useEffect)((function(){if(O&&O.onlineUsers.length){var e=O.game,t=e.player1,n=e.player2,c=e.turnUser;y(t.uid===c.uid&&-1===O.onlineUsers.findIndex((function(e){return e.uid===t.uid}))),n&&A(n.uid===c.uid&&-1===O.onlineUsers.findIndex((function(e){return e.uid===n.uid})))}}),[O]);var T=function(){var e=Object(Z.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get();case 2:return(t=e.sent.data()).onlineUsers=t.onlineUsers.filter((function(e){return e.uid!==b.uid})),e.next=6,R.update(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(Z.a)(Q.a.mark((function e(){var t,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get();case 2:if(t=e.sent.data()){e.next=5;break}return e.abrupt("return");case 5:return n={uid:b.uid,displayName:b.displayName,photoURL:b.photoURL},b.uid!==t.game.player1.uid&&(t.game.player2||(t.game.player2=n)),t.onlineUsers.findIndex((function(e){return e.uid===b.uid}))<0&&t.onlineUsers.push(n),e.next=10,R.update(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){if(e&&!e.every((function(e){return e.every((function(e){return!e}))})))return e[0][0]&&e[0][0]===e[0][1]&&e[0][0]===e[0][2]?e[0][0]:e[1][0]&&e[1][0]===e[1][1]&&e[1][0]===e[1][2]?e[1][0]:e[2][0]&&e[2][0]===e[2][1]&&e[2][0]===e[2][2]?e[2][0]:e[0][0]&&e[0][0]===e[1][0]&&e[0][0]===e[2][0]?e[0][0]:e[0][1]&&e[0][1]===e[1][1]&&e[0][1]===e[2][1]?e[0][1]:e[0][2]&&e[0][2]===e[1][2]&&e[0][2]===e[2][2]?e[0][2]:e[0][0]&&e[0][0]===e[1][1]&&e[0][0]===e[2][2]?e[0][0]:e[0][2]&&e[0][2]===e[1][1]&&e[0][2]===e[2][0]?e[0][2]:e.every((function(e){return e.every((function(e){return!!e}))}))?"Tie":null},M=function(){var e=O.game,t=e.player1,n=e.player2;return v&&!k?Object(E.jsxs)("section",{className:"waiting flex column align-center",children:[Object(E.jsx)(ne.a,{color:"inherit"}),Object(E.jsxs)("p",{children:["Waiting for Player 1 (",t.displayName,") to come back"]})]}):k&&!v?Object(E.jsxs)("section",{className:"waiting flex column align-center",children:[Object(E.jsx)(ne.a,{color:"inherit"}),Object(E.jsxs)("p",{children:["Waiting for Player 2 ",n?"(".concat(n.displayName,") to come back"):" to join the room"]})]}):void 0};if(r||j)return Object(E.jsx)("div",{className:"loader-spinner flex column align-center justify-center",children:Object(E.jsx)(ne.a,{size:"100px",color:"inherit"})});if(!O&&!r)return Object(E.jsx)("div",{className:"multiplayer flex column align-center justify-center",children:Object(E.jsxs)("div",{className:"no-room flex column align-center justify-center",children:[Object(E.jsx)("h2",{children:"Oops... Something went wrong"}),Object(E.jsx)("p",{children:"Probably an address typo or this room doesn't exist anymore."}),Object(E.jsxs)("p",{children:["You can create a new game room from the",Object(E.jsx)("a",{href:"#/rooms",children:"Rooms-page."})]})]})});if(!b&&!j)return Object(E.jsx)(ve,{});if(O&&b&&!r&&!j){var X=O.game,z=X.squares,P=X.turnUser,F=X.winner,D=X.player1,B=X.player2,W=O.messages,q=O.creator,J=O.onlineUsers;return Object(E.jsxs)("div",{className:"multiplayer flex column align-center",children:[Object(E.jsxs)("header",{className:"flex between align-center",children:[P&&Object(E.jsx)(ie,{currentPlayer:P,currentSymbol:P.uid===q.uid?"X":"O",winner:F}),Object(E.jsx)("div",{className:"middle flex column align-center justify-center",children:Object(E.jsxs)("h2",{children:[q.displayName,"'s Room"]})}),b.uid===D.uid||B&&b.uid===B.uid?Object(E.jsx)("div",{className:"restart flex  ".concat(F&&"won"),onClick:function(){return function(){if(O.game.winner&&(b.uid===O.game.player1.uid||b.uid===O.game.player2.uid)){var e=Object(oe.a)({},O);e.game.winner=null,e.game.squares=JSON.stringify([["","",""],["","",""],["","",""]]),R.update(e)}}()},children:Object(E.jsx)("div",{className:"symbol",children:Object(E.jsx)(ae.a,{})})}):Object(E.jsx)("div",{className:"restart-dummy-empty"})]}),Object(E.jsx)(ce,{squares:JSON.parse(z),handleClick:function(e){var t=e.i,n=e.j,c=O.game,r=c.squares,a=c.turnUser,i=c.winner,s=c.player1,l=c.player2,o=O.creator;if(!i&&""!==r[t][n]&&a.uid===b.uid&&l){var j=Object(V.a)(JSON.parse(r));j[t][n]=b.uid===o.uid?"X":"O";var u=a.uid===O.game.player1.uid?l:s,d=Object(oe.a)({},O);d.game.winner=I(j),j=JSON.stringify(j),d.game.squares=j,d.game.turnUser=u,R.update(d)}},winner:F,isUserTurn:(null===P||void 0===P?void 0:P.uid)===b.uid,winnerUser:function(){var e=O.game,t=e.winner,n=e.player1,c=e.player2;return t&&"Tie"!==t?"X"===t?n:c:null}}),(v||k)&&Object(E.jsx)(M,{}),Object(E.jsxs)("div",{className:"bottom flex wrap justify-center",children:[Object(E.jsxs)("section",{className:"online-players flex column align-center",children:[Object(E.jsxs)("div",{className:"title flex align-center",children:[Object(E.jsx)(Xe.a,{fontSize:"small"}),Object(E.jsx)("p",{children:"Online Right Now"})]}),Object(E.jsx)("div",{className:"content flex align-center wrap",children:J.map((function(e){return Object(E.jsx)("div",{className:"player flex justify-center align-center",children:Object(E.jsx)(h.a,{src:e.photoURL,alt:e.photoURL,style:{borderRadius:"4px"}})},e.uid)}))})]}),Object(E.jsx)(Ee,{roomId:e})]}),Object(E.jsx)(Oe,{messages:W,roomId:e,user:b}),Object(E.jsx)("img",{className:"rocket",src:ze,alt:""})]})}},Fe=n.p+"static/media/description.0dfd870f.svg",De=(n.p,n.p+"static/media/notifications.ade5b261.svg"),Be=function(){return Object(E.jsxs)("div",{className:"about full flex column align-center justify-center",children:[Object(E.jsx)("header",{children:Object(E.jsx)("h1",{children:"About Tic Tac Toe"})}),Object(E.jsxs)("main",{className:"flex column align-left",children:[Object(E.jsxs)("section",{className:"card-technology flex between",children:[Object(E.jsx)("img",{src:Fe,alt:""}),Object(E.jsxs)("div",{className:"content flex column justify-center",children:[Object(E.jsx)("h2",{children:"Technology"}),Object(E.jsx)("p",{children:"Tic Tac Toe is a responsive serverless React application, using Firebase for real-time database, authentication and state management, SASS for design. User can play against Ai, sign in and log out, open a new game room and join others, send chat messages and get notifications. Developed by Michael Michaeli - Full Stack software developer."}),Object(E.jsx)("a",{href:"https://github.com/michaelmichaeli/xo/",target:"_blank",children:"Code Link"})]})]}),Object(E.jsxs)("section",{className:"card-chat flex between",children:[Object(E.jsxs)("div",{className:"content flex column justify-center",children:[Object(E.jsx)("h2",{children:"Chat"}),Object(E.jsx)("p",{children:"Chat in Multiplayer with your opponent and room visitors"}),Object(E.jsx)("p",{children:"Invite someone to join your game room or join somebody elses game room and chat with them"})]}),Object(E.jsx)("img",{src:xe,alt:""})]}),Object(E.jsxs)("section",{className:"card-notifications flex between",children:[Object(E.jsx)("img",{src:De,alt:""}),Object(E.jsxs)("div",{className:"content flex column justify-center",children:[Object(E.jsx)("h2",{children:"Notifications"}),Object(E.jsx)("p",{children:"When it's your turn to make your move in a game you are participating, Tic Tac Toe will notify and provide a direct link to the game room"})]})]}),Object(E.jsx)("section",{className:"card-code flex between",children:Object(E.jsxs)("div",{className:"content flex column justify-center",children:[Object(E.jsx)("h2",{children:"Code example from Ai algorithm"}),Object(E.jsx)("p",{children:"The minmax function will call itself (recursion) and give heuristic values in each depth of the potential moves to determine what is the 'best score' to the bestMove function that will return the 'Best Move' to the Application. This way the Ai never loses, as shown in this code:"}),Object(E.jsx)("pre",{children:Object(E.jsx)("code",{children:'\nfunction bestMove(cells) {\n\tlet bestScore = -Infinity;\n\tlet move;\n\tfor (let i = 0; i < 3; i++) {\n\t\tfor (let j = 0; j < 3; j++) {\n\t\t\tif (cells[i][j] === null) {\n\t\t\t\tcells[i][j] = "O";\n\t\t\t\tlet score = minimax(cells, false);\n\t\t\t\tcells[i][j] = null;\n\t\t\t\tif (score > bestScore) {\n\t\t\t\t\tbestScore = score;\n\t\t\t\t\tmove = { i, j };\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn move;\n}\n\nconst scores = {\n\tX: -1,\n\tO: 1,\n\tTie: 0,\n};\n\nfunction minimax(cells, isMaximizing) {\n\tlet result = calculateWinner(cells);\n\tif (result !== null) {\n\t\tlet score = scores[result];\n\t\treturn score;\n\t}\n\tif (isMaximizing) {\n\t\tlet bestScore = -Infinity;\n\t\tfor (let i = 0; i < 3; i++) {\n\t\t\tfor (let j = 0; j < 3; j++) {\n\t\t\t\tif (cells[i][j] === null) {\n\t\t\t\t\tcells[i][j] = "O";\n\t\t\t\t\tlet score = minimax(cells, false);\n\t\t\t\t\tcells[i][j] = null;\n\t\t\t\t\tbestScore = Math.max(score, bestScore);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn bestScore;\n\t} else {\n\t\tlet bestScore = Infinity;\n\t\tfor (let i = 0; i < 3; i++) {\n\t\t\tfor (let j = 0; j < 3; j++) {\n\t\t\t\tif (cells[i][j] === null) {\n\t\t\t\t\tcells[i][j] = "X";\n\t\t\t\t\tlet score = minimax(cells, true);\n\t\t\t\t\tcells[i][j] = null;\n\t\t\t\t\tbestScore = Math.min(score, bestScore);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn bestScore;\n\t}\n}\n\n'})})]})})]})]})},We=n(78),qe=n.n(We),Je=n(106),Ye=n.n(Je),Ve=n(107),_e=n.n(Ve),Ge=n(108),He=n.n(Ge),Ke=function(e){var t=e.localRooms,n=(e.goToRoom,e.user),r=e.onDeleteRoom,a=Object(c.useState)({key:"created",descending:!1}),i=Object(o.a)(a,2),s=i[0],l=i[1],j=Object(c.useState)(t),u=Object(o.a)(j,2),d=u[0],m=u[1];Object(c.useEffect)((function(){m(t)}),[t]);var x=Object(c.useState)(null),O=Object(o.a)(x,2),f=O[0],p=O[1],g=function(e){var t=e.room,n=e.user,c=t.game,r=c.player1,a=c.player2,i=c.turnUser,s=i.uid===r.uid?"Your Turn":"Opponents turn";if(r.uid===n.uid&&a)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(qe.a,{}),Object(E.jsx)("p",{children:s})]});if(r.uid===n.uid&&!a)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(qe.a,{}),Object(E.jsx)("p",{children:"Waiting Opponent"})]});if(!a)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Ye.a,{}),Object(E.jsx)("p",{children:"Join"})]});var l=i.uid===a.uid?"Your Turn":"Opponents turn";return a.uid===n.uid?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(qe.a,{}),Object(E.jsx)("p",{children:l})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(_e.a,{}),Object(E.jsx)("p",{children:"Watch Game"})]})},v=function(){return Object(E.jsxs)("div",{className:"delete-modal",children:[Object(E.jsx)("p",{children:"Are your sure you want to remove this room permanently?"}),Object(E.jsx)(b.a,{onClick:function(){console.log(f),r(f),p(null)},children:"Remove"}),Object(E.jsx)(b.a,{onClick:function(){return p(null)},children:"No"})]})};return Object(E.jsxs)(E.Fragment,{children:[f&&Object(E.jsx)("div",{className:"screen",onClick:function(){return p(null)}}),Object(E.jsxs)("section",{className:"rooms-list",children:[Object(E.jsxs)("header",{children:[Object(E.jsxs)("div",{className:"creator flex align-center",onClick:function(){return function(){l((function(e){return"player"===e.key?Object(oe.a)(Object(oe.a)({},e),{},{descending:!e.descending}):{key:"player",descending:!0}}));var e=Object(V.a)(d);e.sort((function(e,t){var n=e.creator.displayName.toUpperCase(),c=t.creator.displayName.toUpperCase();return n<c?-1:n>c?1:0})),e.every((function(e,t){return e.id===d[t].id}))&&e.reverse(),m(e)}()},children:["Player","player"===s.key&&Object(E.jsx)("svg",{className:"arrow ".concat(s.descending&&"upsidedown"),width:"10px",height:"10px",viewBox:"0 0 18 10",children:Object(E.jsx)("path",{fill:"white",d:"M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"})})]}),Object(E.jsxs)("div",{className:"player2 flex align-center",onClick:function(){return function(){l((function(e){return"opponent"===e.key?Object(oe.a)(Object(oe.a)({},e),{},{descending:!e.descending}):{key:"opponent",descending:!0}}));var e=Object(V.a)(d);e.sort((function(e,t){var n,c,r=null===(n=e.game.player2)||void 0===n?void 0:n.displayName.toUpperCase(),a=null===(c=t.game.player2)||void 0===c?void 0:c.displayName.toUpperCase();return r&&a?r<a?-1:r>a?1:0:-2})),e.every((function(e,t){return e.id===d[t].id}))&&e.reverse(),m(e)}()},children:["Opponent","opponent"===s.key&&Object(E.jsx)("svg",{className:"arrow ".concat(s.descending&&"upsidedown"),width:"10px",height:"10px",viewBox:"0 0 18 10",children:Object(E.jsx)("path",{fill:"white",d:"M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"})})]}),Object(E.jsxs)("div",{className:"time flex align-center",onClick:function(){return function(){l((function(e){return"created"===e.key?Object(oe.a)(Object(oe.a)({},e),{},{descending:!e.descending}):{key:"created",descending:!1}}));var e=Object(V.a)(d);e.sort((function(e,t){return e.createdAt.seconds-t.createdAt.seconds})),e.every((function(e,t){return e.id===d[t].id}))&&e.reverse(),m(e)}()},children:["Created","created"===s.key&&Object(E.jsx)("svg",{className:"arrow ".concat(!s.descending&&"upsidedown"),width:"10px",height:"10px",viewBox:"0 0 18 10",children:Object(E.jsx)("path",{fill:"white",d:"M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"})})]}),Object(E.jsx)("div",{children:"Enter"})]}),Object(E.jsx)("main",{children:d.map((function(e){return Object(E.jsxs)("div",{className:"room-row",children:[Object(E.jsxs)("div",{className:"creator flex align-center",children:[Object(E.jsx)(h.a,{src:e.creator.photoURL,alt:e.creator.photoURL,style:{width:24,height:24,borderRadius:"4px"}}),e.creator.uid===n.uid?"You":e.creator.displayName]}),Object(E.jsxs)("div",{className:"player2 flex align-center",children:[e.game.player2&&Object(E.jsx)(h.a,{src:e.game.player2.photoURL,alt:e.game.player2.photoURL,style:{width:24,height:24,borderRadius:"4px"}}),e.game.player2&&e.game.player2.uid===n.uid&&"You",e.game.player2&&e.game.player2.uid!==n.uid&&e.game.player2.displayName,!e.game.player2&&"Waiting..."]}),e.createdAt&&Object(E.jsx)("div",{className:"time flex justify-center align-center",children:de()(1e3*e.createdAt.seconds).fromNow()}),n.uid===e.creator.uid?Object(E.jsx)("button",{className:"trash flex justify-center align-center",onClick:function(){return p(e.id)},children:Object(E.jsx)(He.a,{})}):Object(E.jsx)("div",{className:"trash",children:" "}),Object(E.jsx)("a",{href:"#/multiplayer/".concat(e.id),className:"join flex align-center justify-center",children:Object(E.jsx)(g,{room:e,user:n})})]},e.id)}))}),f&&Object(E.jsx)(v,{})]})]})},Qe=n(109),Ze=n.n(Qe),$e=n.p+"static/media/robot.07611293.svg",et=function(){var e=Object(l.f)(),t=Object(c.useState)(!0),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!0),s=Object(o.a)(i,2),j=s[0],u=s[1],d=Object(S.a)(U),b=Object(o.a)(d,1)[0];U.onAuthStateChanged((function(e){return u(!1)}));var m=Object(c.useState)([]),x=Object(o.a)(m,2),O=x[0],f=x[1],p=C.collection("rooms/");Object(c.useEffect)((function(){p.orderBy("createdAt").onSnapshot((function(e){f(g(e.docs).reverse()),a(!1)}))}),[]);var g=function(e){var t=[];return e.forEach((function(e){var n=e.data();n.id=e.id,t.push(n)})),t},v=function(t){e.push("/multiplayer/".concat(t))};return j?Object(E.jsx)("div",{className:"loader-spinner flex column align-center justify-center",children:Object(E.jsx)(ne.a,{size:"100px",color:"inherit"})}):b||j?Object(E.jsxs)("section",{className:"rooms-container flex column align-center",children:[Object(E.jsxs)("header",{className:"flex align-center",children:[Object(E.jsx)(h.a,{className:"user-photo",src:b.photoURL,alt:b.photoURL,style:{width:64,height:64}}),Object(E.jsx)("h2",{className:"user-name",children:b.displayName})]}),Object(E.jsxs)("div",{className:"rooms flex column justify-center align-center between",children:[!r&&O.length>0&&Object(E.jsx)(Ke,{user:b,goToRoom:v,localRooms:O,onDeleteRoom:function(e){console.log(e),p.doc(e).delete()}}),!r&&(!O||0===O.length)&&Object(E.jsxs)("div",{className:"no-rooms",children:[Object(E.jsx)("p",{children:"Looks like all the game rooms expired."}),Object(E.jsx)("p",{children:"Create a new room and invite your friends."})]}),r&&Object(E.jsx)("div",{className:"loader-spinner flex column align-center justify-center",children:Object(E.jsx)(ne.a,{color:"inherit"})}),Object(E.jsxs)("button",{onClick:function(){var e={uid:b.uid,displayName:b.displayName,photoURL:b.photoURL},t={creator:e,createdAt:A.a.firestore.FieldValue.serverTimestamp(),game:{turnUser:e,player1:e,player2:null,squares:JSON.stringify([["","",""],["","",""],["","",""]]),winner:null},messages:[],onlineUsers:[]};p.add(t).then((function(e){return v(e.id)}))},children:[Object(E.jsx)(Ze.a,{}),"Create New Room"]})]}),Object(E.jsx)("img",{src:$e,alt:"",className:"robot"})]}):Object(E.jsx)(ve,{})};var tt=function(){return Object(E.jsxs)("div",{className:"App main-container",children:[Object(E.jsx)(X,{}),Object(E.jsxs)(l.c,{children:[Object(E.jsx)(l.a,{component:Y,exact:!0,path:"/"}),Object(E.jsx)(l.a,{component:Be,exact:!0,path:"/about"}),Object(E.jsx)(l.a,{component:le,exact:!0,path:"/ai"}),Object(E.jsx)(l.a,{component:et,exact:!0,path:"/rooms"}),Object(E.jsx)(l.a,{component:Pe,exact:!0,path:"/multiplayer/:roomId?"})]}),Object(E.jsx)(q,{})]})},nt=n(29),ct=Object(nt.a)();i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(s.a,{basename:"/xo/",history:ct,children:Object(E.jsx)(tt,{})})}),document.getElementById("root"))},99:function(e,t){e.exports={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}}}},[[141,1,2]]]);
//# sourceMappingURL=main.2a6ddf2a.chunk.js.map