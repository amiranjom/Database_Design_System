(this.webpackJsonpbarber_shop_frontend=this.webpackJsonpbarber_shop_frontend||[]).push([[0],{104:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),o=(t(77),t(31)),u=t(23),m=t(6),i=t(41),s=(t(80),t(109)),d=t(110),E=t(62),b=t(111),p=t(113),h=t(19),f=t.n(h),y=t(26),g=t(114),v=t(108),O=t(15),S=t.n(O),j=function(){var e=Object(n.useState)("email"),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("password"),o=Object(m.a)(c,2),i=o[0],s=o[1],d=Object(n.useState)("storeworker"),E=Object(m.a)(d,2),b=E[0],p=E[1],h=Object(u.f)(),O=function(){var e=Object(y.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log("here"),S.a.post("/api/login",{email:t,password:i,userType:b}).then((function(e){console.log(e),e.data.true?h.push("/barber-profile"):alert("Wrong Password")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(g.a,{onSubmit:function(e){O(e)}},l.a.createElement(g.a.Group,{onChange:function(e){r(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Email address"),l.a.createElement(g.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(g.a.Group,{onChange:function(e){s(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(g.a.Label,null,"Password"),l.a.createElement(g.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,null,"User Type"),l.a.createElement(g.a.Control,{onChange:function(e){p(e.target.value)},type:"userType",as:"select"},l.a.createElement("option",{value:"storeworker"},"Store Worker"),l.a.createElement("option",{value:"travelworker"},"travel Worker"))),l.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit"))))},w=t(117),C=function(e){var a=e.handleBarberClose,t=e.handleBarberScheduleShow,r=Object(n.useState)("firstName"),c=Object(m.a)(r,2),o=c[0],u=c[1],i=Object(n.useState)("lastName"),s=Object(m.a)(i,2),d=s[0],b=s[1],p=Object(n.useState)("email"),h=Object(m.a)(p,2),O=h[0],j=h[1],C=Object(n.useState)("password"),k=Object(m.a)(C,2),T=k[0],B=k[1],W=function(){var e=Object(y.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),console.log("here"),S.a.post("/api/barber-signup",{firstName:o,lastName:d,email:O,password:T}).then((function(e){a(),t(),console.log(e)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(g.a,{onSubmit:function(e){return W(e)}},l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Group,{onChange:function(e){u(e.target.value)},as:E.a,md:"4"},l.a.createElement(g.a.Label,null,"First Name"),l.a.createElement(g.a.Control,{type:"firstName",placeholder:"First Name"})),l.a.createElement(g.a.Group,{onChange:function(e){b(e.target.value)},as:E.a,md:"4"},l.a.createElement(g.a.Label,null,"Last Name"),l.a.createElement(g.a.Control,{type:"lastName",placeholder:"Last Name"}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Group,{onChange:function(e){j(e.target.value)},as:E.a,md:"4",controlId:"formGridEmail"},l.a.createElement(g.a.Label,null,"Email address"),l.a.createElement(g.a.Control,{type:"email",placeholder:"jack@unionBarber.com"}),l.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(g.a.Group,{onChange:function(e){B(e.target.value)},as:E.a,md:"4",controlId:"formGridPassword"},l.a.createElement(g.a.Label,null,"Password"),l.a.createElement(g.a.Control,{type:"password",placeholder:"Password"}))),l.a.createElement(w.a,{now:50}),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")))))},k=t(28),T=t.n(k),B=function(){var e=Object(n.useState)("type"),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),i=o[0],s=o[1],d=Object(n.useState)(25200),b=Object(m.a)(d,2),p=b[0],h=b[1],O=Object(n.useState)(79200),j=Object(m.a)(O,2),C=j[0],k=j[1],B=Object(n.useState)(0),W=Object(m.a)(B,2),L=W[0],N=W[1],P=Object(n.useState)(1),G=Object(m.a)(P,2),x=G[0],F=G[1],A=Object(n.useState)(!1),I=Object(m.a)(A,2),M=I[0],H=I[1],D=Object(n.useState)([]),R=Object(m.a)(D,2),U=R[0],_=R[1],z=Object(u.f)(),J=U.map((function(e){return l.a.createElement("option",{value:e.id},e.Address)})),q=l.a.createElement(l.a.Fragment,null,"  ",l.a.createElement(g.a.Group,{onChange:function(e){console.log(e.target.value),F(e.target.value)}},l.a.createElement(g.a.Label,null,"Choose Location"),l.a.createElement(g.a.Control,{type:"userType",as:"select"},J)));Object(n.useEffect)((function(){console.log(t),"storeworker"===t?(H(!0),S.a.get("/api/store-locations").then((function(e){_(e.data)}))):H(!1)}),[t]);var Y=function(){var e=Object(y.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log(t,i,L),S.a.post("/api/barber-schedule-init",{barberType:t,days:i,timePeriod:L,locationId:x}).then((function(e){console.log(e),z.push("/barber-profile")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(g.a,{onSubmit:function(e){return Y(e)}},l.a.createElement(g.a.Group,{onChange:function(e){r(e.target.value)}},l.a.createElement(g.a.Label,null,"What Type of Service do you like to provide ? Choose One Only! ",l.a.createElement("br",null)),l.a.createElement(g.a.Check,{inline:!0,label:"Store Worker",value:"storeworker"}),l.a.createElement(g.a.Check,{inline:!0,label:"Travel Worker",value:"travelworker"})),M?q:"",l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Group,{onChange:function(e){!function(e){if(i.includes(e.target.value)){var a=i.indexOf(e.target.value),t=i.splice(a,1);s(t)}else{var n=i;n.push(e.target.value),s(n)}}(e)},as:E.a,md:"4",controlId:"formGridEmail"},l.a.createElement(g.a.Label,null,"What Days can you Work ?"),l.a.createElement(g.a.Check,{label:"Monday",value:"Monday"}),l.a.createElement(g.a.Check,{label:"Tuesday",value:"Tuesday"}),l.a.createElement(g.a.Check,{label:"Wednesday",value:"Wednesday"}),l.a.createElement(g.a.Check,{label:"Thursday",value:"Thursday"}),l.a.createElement(g.a.Check,{label:"Friday",value:"Friday"}),l.a.createElement(g.a.Check,{label:"Saturday",value:"Saturday"}),l.a.createElement(g.a.Check,{label:"Sunday",value:"Sunday"})),l.a.createElement(g.a.Group,{as:E.a,md:"4",controlId:"formGridPassword"},l.a.createElement(g.a.Label,null,"What Time can you Work ? ",l.a.createElement("br",null)," NOTE: The Chosen time would apply for all the selected dates ",l.a.createElement("br",null)," (Please Make Sure of that) "),"Starting Time:",l.a.createElement(T.a,{onChange:function(e){h(e)},start:"07:00",end:"22:00",step:60,value:p}),"Ending Time:",l.a.createElement(T.a,{onChange:function(e){!function(e){k(e);N("".concat(p/3600,"-",C/3600))}(e)},start:"07:00",end:"22:00",step:60,value:C}))),l.a.createElement(w.a,{now:90}),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")))))},W=t(63),L=t.n(W),N=t(64),P=t.n(N),G=t(65),x=t.n(G),F=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),u=o[0],h=o[1],f=Object(n.useState)(!1),y=Object(m.a)(f,2),g=y[0],v=y[1],O=Object(n.useState)(!1),S=Object(m.a)(O,2),w=S[0],k=S[1],T=function(){return v(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"center"},l.a.createElement(s.a,null,l.a.createElement(d.a,{className:"justify-content-md-center"},l.a.createElement(E.a,{md:"auto"},l.a.createElement(b.a,{src:x.a})),l.a.createElement(E.a,{md:"auto"},l.a.createElement(b.a,{src:L.a})),l.a.createElement(E.a,{md:"auto"},l.a.createElement(b.a,{src:P.a}))),l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(i.AwesomeButton,{onPress:function(){return v(!0)},type:"primary"},"Barber Sign Up")),l.a.createElement(E.a,null,l.a.createElement(i.AwesomeButton,{onPress:function(){return k(!0)},type:"primary"},"Admin Login")," "),l.a.createElement(E.a,null,l.a.createElement(i.AwesomeButton,{onPress:function(){return r(!0)},type:"primary"},"Loggin All Users"))))),l.a.createElement(p.a,{size:"lg",show:g,onHide:T},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Barber Sign Up")),l.a.createElement(p.a.Body,null,l.a.createElement(C,{handleBarberScheduleShow:function(){return h(!0)},handleBarberClose:T}))),l.a.createElement(p.a,{size:"lg",show:u,onHide:function(){return h(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Barber Schedule ",l.a.createElement("br",null)," ",l.a.createElement("h6",{style:{color:"red"}},"Everything is Required!! Please Fill Out Carefully"))),l.a.createElement(p.a.Body,null,l.a.createElement(B,null))),l.a.createElement(p.a,{show:w,onHide:function(){return k(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Admin Login")),l.a.createElement(p.a.Body,null,l.a.createElement(j,null))),l.a.createElement(p.a,{show:t,onHide:function(){return r(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Barber Login")),l.a.createElement(p.a.Body,null,l.a.createElement(j,null))))},A=t(112),I=t(118),M=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),o=Object(m.a)(c,2),i=o[0],s=o[1],d=Object(n.useState)(!1),b=Object(m.a)(d,2),h=b[0],f=b[1],y=Object(n.useState)([]),O=Object(m.a)(y,2),j=O[0],w=O[1],C=Object(n.useState)(25200),k=Object(m.a)(C,2),B=k[0],W=k[1],L=Object(n.useState)(79200),N=Object(m.a)(L,2),P=N[0],G=N[1],x=Object(n.useState)(0),F=Object(m.a)(x,2),M=F[0],H=F[1],D=Object(u.f)();Object(n.useEffect)((function(){S.a.get("/api/barber-profile").then((function(e){console.log(e.data[0]),r(e.data[0]),s(e.data[0].email)}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Barber Profile Page"),l.a.createElement(A.a,{className:"center"},l.a.createElement(I.a,null,l.a.createElement(I.a.Body,null,l.a.createElement(I.a.Title,null,"Your Schedule"),l.a.createElement(I.a.Text,null,"Days Working: ",t.days," ",l.a.createElement("br",null),"Time Working: ",t.times))),l.a.createElement(I.a,null,l.a.createElement(I.a.Body,null,l.a.createElement(I.a.Title,null,"Private Info"),l.a.createElement(I.a.Text,null,"Email: ",t.email," ",l.a.createElement("br",null),"First Name: ",t.firstName," ",l.a.createElement("br",null),"Last Name: ",t.lastName," ",l.a.createElement("br",null),"Type of Worker: ",t.locationId?"Store Worker":"Travel Worker"," ",l.a.createElement("br",null),t.locationId?"Store Location: "+t.Address:"Range Mile: "+t.rangeMile))),l.a.createElement(I.a,null,l.a.createElement(I.a.Title,null,"Edit Account"),l.a.createElement(I.a.Body,null,l.a.createElement(v.a,{onClick:function(e){return function(e){e.preventDefault(),S.a.post("/api/delete-account",{email:i}).then((function(e){alert("Account Deleted"),D.push("/")}))}(e)}},"Delete Account")," ",l.a.createElement("br",null),l.a.createElement(v.a,{onClick:function(){return f(!0)}},"Change Schedule")))),l.a.createElement(p.a,{show:h,onHide:function(){return f(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Change Schedule")),l.a.createElement(p.a.Body,null,l.a.createElement(g.a,{onSubmit:function(e){alert("Schedule Updated"),S.a.post("/api/update-schedule",{email:i,days:j,timePeriod:M}).then((function(e){}))}},l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Group,{onChange:function(e){!function(e){if(j.includes(e.target.value)){var a=j.indexOf(e.target.value),t=j.splice(a,1);w(t)}else{var n=j;n.push(e.target.value),w(n)}}(e)},as:E.a,md:"4",controlId:"formGridEmail"},l.a.createElement(g.a.Label,null,"What Days can you Work ?"),l.a.createElement(g.a.Check,{label:"Monday",value:"Monday"}),l.a.createElement(g.a.Check,{label:"Tuesday",value:"Tuesday"}),l.a.createElement(g.a.Check,{label:"Wednesday",value:"Wednesday"}),l.a.createElement(g.a.Check,{label:"Thursday",value:"Thursday"}),l.a.createElement(g.a.Check,{label:"Friday",value:"Friday"}),l.a.createElement(g.a.Check,{label:"Saturday",value:"Saturday"}),l.a.createElement(g.a.Check,{label:"Sunday",value:"Sunday"}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Group,{as:E.a,md:"4",controlId:"formGridPassword"},l.a.createElement(g.a.Label,null,"What Time can you Work ? ",l.a.createElement("br",null)," NOTE: The Chosen time would apply for all the selected dates ",l.a.createElement("br",null)," (Please Make Sure of that) "),"Starting Time:",l.a.createElement(T.a,{onChange:function(e){W(e)},start:"07:00",end:"22:00",step:60,value:B}),"Ending Time:",l.a.createElement(T.a,{onChange:function(e){G(e),H("".concat(B/3600,"-",P/3600)),console.log(P)},start:"07:00",end:"22:00",step:60,value:P}))),l.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")))))},H=(t(104),t(116)),D=t(115),R=t(44),U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{bg:"light",expand:"lg"},l.a.createElement(H.a.Brand,{href:"#home"},"Search Barber"),l.a.createElement(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(H.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(D.a,{className:"mr-auto"},l.a.createElement(D.a.Link,{href:"#home"},"About")),l.a.createElement(g.a,{inline:!0},l.a.createElement(R.default,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(v.a,{variant:"outline-success"},"Search")))))};var _=function(){return l.a.createElement(o.a,null,l.a.createElement(U,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"page-body"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:F,exact:!0}),l.a.createElement(u.a,{path:"/barber-signup",component:C}),l.a.createElement(u.a,{path:"/barber-profile",component:M})))))};t(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,a,t){e.exports=t.p+"static/media/Bar.86a8a2f0.png"},64:function(e,a,t){e.exports=t.p+"static/media/LeftMain.44a964a4.png"},65:function(e,a,t){e.exports=t.p+"static/media/rightMain.d06a6432.png"},72:function(e,a,t){e.exports=t(106)},77:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.3721f5c0.chunk.js.map