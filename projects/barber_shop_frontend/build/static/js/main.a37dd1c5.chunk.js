(this.webpackJsonpbarber_shop_frontend=this.webpackJsonpbarber_shop_frontend||[]).push([[0],{105:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(29),c=t.n(r),o=(t(78),t(20)),u=t(26),s=t(6),m=t(41),i=(t(81),t(110)),E=t(111),d=t(63),b=t(112),p=t(115),f=t(11),h=t.n(f),g=t(21),v=t(116),y=t(109),O=t(10),j=t.n(O),S=function(){var e=Object(n.useState)("email"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("password"),o=Object(s.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)("storeworker"),d=Object(s.a)(E,2),b=d[0],p=d[1],f=Object(u.f)(),O=function(){var e=Object(g.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log("here"),j.a.post("/api/login",{email:t,password:m,userType:b}).then((function(e){console.log(e),e.data.true?f.push("/barber-profile"):alert("Wrong Password")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(v.a,{onSubmit:function(e){O(e)}},l.a.createElement(v.a.Group,{onChange:function(e){r(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Email address"),l.a.createElement(v.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(v.a.Group,{onChange:function(e){i(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Label,null,"User Type"),l.a.createElement(v.a.Control,{onChange:function(e){p(e.target.value)},type:"userType",as:"select"},l.a.createElement("option",{value:"storeworker"},"Store Worker"),l.a.createElement("option",{value:"travelworker"},"Travel Worker"))),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit"))))},w=function(){var e=Object(n.useState)("id"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("password"),o=Object(s.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)("storeworker"),d=Object(s.a)(E,2),b=(d[0],d[1],Object(u.f)()),p=function(){var e=Object(g.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),"admin"===t&&"barber"===m?(console.log("Logged In"),b.push("/admin")):alert("Wrong User/Pass");case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(v.a,{onSubmit:function(e){p(e)}},l.a.createElement(v.a.Group,{onChange:function(e){r(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Id"),l.a.createElement(v.a.Control,{type:"id",placeholder:"Enter Id"}),l.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(v.a.Group,{onChange:function(e){i(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit"))))},C=t(120),k=function(e){var a=e.handleBarberClose,t=e.handleBarberScheduleShow,r=Object(n.useState)("firstName"),c=Object(s.a)(r,2),o=c[0],u=c[1],m=Object(n.useState)("lastName"),i=Object(s.a)(m,2),E=i[0],b=i[1],p=Object(n.useState)("email"),f=Object(s.a)(p,2),O=f[0],S=f[1],w=Object(n.useState)("password"),k=Object(s.a)(w,2),T=k[0],B=k[1],N=Object(n.useState)(!1),W=Object(s.a)(N,2),L=W[0],x=W[1],P=function(){var e=Object(g.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),console.log("here"),j.a.post("/api/barber-signup",{firstName:o,lastName:E,email:O,password:T}).then((function(e){e.data.error?x(!0):(a(),t())})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(v.a,{onSubmit:function(e){return P(e)}},L?l.a.createElement("h6",{style:{color:"red"}},"Email Already Taken!!"):"",l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{onChange:function(e){u(e.target.value)},as:d.a,md:"4"},l.a.createElement(v.a.Label,null,"First Name"),l.a.createElement(v.a.Control,{type:"firstName",placeholder:"First Name"})),l.a.createElement(v.a.Group,{onChange:function(e){b(e.target.value)},as:d.a,md:"4"},l.a.createElement(v.a.Label,null,"Last Name"),l.a.createElement(v.a.Control,{type:"lastName",placeholder:"Last Name"}))),l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{onChange:function(e){S(e.target.value)},as:d.a,md:"4",controlId:"formGridEmail"},l.a.createElement(v.a.Label,null,"Email address"),l.a.createElement(v.a.Control,{type:"email",placeholder:"jack@unionBarber.com"}),l.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(v.a.Group,{onChange:function(e){B(e.target.value)},as:d.a,md:"4",controlId:"formGridPassword"},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{type:"password",placeholder:"Password"}))),l.a.createElement(C.a,{now:50}),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))))},T=t(28),B=t.n(T),N=function(){var e=Object(n.useState)("type"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)(25200),b=Object(s.a)(E,2),p=b[0],f=b[1],O=Object(n.useState)(79200),S=Object(s.a)(O,2),w=S[0],k=S[1],T=Object(n.useState)(""),N=Object(s.a)(T,2),W=N[0],L=N[1],x=Object(n.useState)(1),P=Object(s.a)(x,2),G=P[0],F=P[1],I=Object(n.useState)(!1),A=Object(s.a)(I,2),D=A[0],H=A[1],M=Object(n.useState)([]),U=Object(s.a)(M,2),R=U[0],z=U[1],_=Object(u.f)(),J=R.map((function(e){return l.a.createElement("option",{value:e.id},e.Address)})),Y=l.a.createElement(l.a.Fragment,null,"  ",l.a.createElement(v.a.Group,{onChange:function(e){console.log(e.target.value),F(e.target.value)}},l.a.createElement(v.a.Label,null,"Choose Location"),l.a.createElement(v.a.Control,{type:"userType",as:"select"},J)));Object(n.useEffect)((function(){console.log(t),"storeworker"===t?(H(!0),j.a.get("/api/store-locations").then((function(e){z(e.data)}))):H(!1)}),[t]);var q=function(){var e=Object(g.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log(t,m,W),n=(n="").concat(p/3600,"-",w/3600),j.a.post("/api/barber-schedule-init",{barberType:t,days:m,time:n,locationId:G}).then((function(e){_.push("/barber-profile")})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),V=function(e){return e.preventDefault(),console.log(p),console.log(w),new Promise((function(e,a){var t="";t=t.concat(p/3600,"-",w/3600),console.log(t),L(t),e("Done")}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(v.a,{onSubmit:function(){var e=Object(g.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(a);case 2:console.log(W),q(a);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},l.a.createElement(v.a.Group,{onChange:function(e){r(e.target.value)}},l.a.createElement(v.a.Label,{style:{color:"red"}},"What Type of Service do you like to provide ? Choose One Only! ",l.a.createElement("br",null)),l.a.createElement(v.a.Check,{inline:!0,label:"Store Worker",value:"storeworker"}),l.a.createElement(v.a.Check,{inline:!0,label:"Travel Worker",value:"travelworker"})),D?Y:"",l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{onChange:function(e){!function(e){if(m.includes(e.target.value)){var a=m.indexOf(e.target.value),t=m.splice(a,1);i(t)}else{var n=m;n.push(e.target.value),i(n)}}(e)},as:d.a,md:"4",controlId:"formGridEmail"},l.a.createElement(v.a.Label,null,"What Days can you Work ?"),l.a.createElement(v.a.Check,{label:"Monday",value:"Monday"}),l.a.createElement(v.a.Check,{label:"Tuesday",value:"Tuesday"}),l.a.createElement(v.a.Check,{label:"Wednesday",value:"Wednesday"}),l.a.createElement(v.a.Check,{label:"Thursday",value:"Thursday"}),l.a.createElement(v.a.Check,{label:"Friday",value:"Friday"}),l.a.createElement(v.a.Check,{label:"Saturday",value:"Saturday"}),l.a.createElement(v.a.Check,{label:"Sunday",value:"Sunday"})),l.a.createElement(v.a.Group,{as:d.a,md:"4",controlId:"formGridPassword"},l.a.createElement(v.a.Label,null,"What Time can you Work ? ",l.a.createElement("br",null)," NOTE: The Chosen time would apply for all the selected dates ",l.a.createElement("br",null)," (Please Make Sure of that) "),"Starting Time:",l.a.createElement(B.a,{onChange:function(e){console.log(e),f(e),console.log(p)},start:"07:00",end:"22:00",step:60,value:p}),"Ending Time:",l.a.createElement(B.a,{onChange:function(e){console.log(p),console.log(e),k(e),console.log(w)},start:"07:00",end:"22:00",step:60,value:w}))),l.a.createElement(C.a,{now:90}),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))))},W=t(64),L=t.n(W),x=t(65),P=t.n(x),G=t(66),F=t.n(G),I=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],f=o[1],h=Object(n.useState)(!1),g=Object(s.a)(h,2),v=g[0],y=g[1],O=Object(n.useState)(!1),j=Object(s.a)(O,2),C=j[0],T=j[1],B=function(){return y(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"center"},l.a.createElement(i.a,null,l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(d.a,{md:"auto"},l.a.createElement(b.a,{src:F.a})),l.a.createElement(d.a,{md:"auto"},l.a.createElement(b.a,{src:L.a})),l.a.createElement(d.a,{md:"auto"},l.a.createElement(b.a,{src:P.a}))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(m.AwesomeButton,{onPress:function(){return y(!0)},type:"primary"},"Barber Sign Up")),l.a.createElement(d.a,null,l.a.createElement(m.AwesomeButton,{onPress:function(){return T(!0)},type:"primary"},"Admin Login")," "),l.a.createElement(d.a,null,l.a.createElement(m.AwesomeButton,{onPress:function(){return r(!0)},type:"primary"},"Loggin All Users"))))),l.a.createElement(p.a,{size:"lg",show:v,onHide:B},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Barber Sign Up")),l.a.createElement(p.a.Body,null,l.a.createElement(k,{handleBarberScheduleShow:function(){return f(!0)},handleBarberClose:B}))),l.a.createElement(p.a,{size:"lg",show:u,onHide:function(){return f(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Barber Schedule ",l.a.createElement("br",null)," ",l.a.createElement("h6",{style:{color:"red"}},"Everything is Required!! Please Fill Out Carefully"))),l.a.createElement(p.a.Body,null,l.a.createElement(N,null))),l.a.createElement(p.a,{show:C,onHide:function(){return T(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Admin Login")),l.a.createElement(p.a.Body,null,l.a.createElement(w,null))),l.a.createElement(p.a,{show:t,onHide:function(){return r(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Barber Login")),l.a.createElement(p.a.Body,null,l.a.createElement(S,null))))},A=t(113),D=t(119),H=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),o=Object(s.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)(!1),b=Object(s.a)(E,2),f=b[0],h=b[1],g=Object(n.useState)([]),O=Object(s.a)(g,2),S=O[0],w=O[1],C=Object(n.useState)(25200),k=Object(s.a)(C,2),T=k[0],N=k[1],W=Object(n.useState)(79200),L=Object(s.a)(W,2),x=L[0],P=L[1],G=Object(n.useState)(0),F=Object(s.a)(G,2),I=(F[0],F[1]),H=Object(u.f)();Object(n.useEffect)((function(){j.a.get("/api/barber-profile").then((function(e){void 0===e.data[0]?(alert("Wrong Type of User Selected or You do Not have the Permission to be here!!!"),H.push("/")):(r(e.data[0]),i(e.data[0].email))}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Barber Profile Page"),l.a.createElement(A.a,{className:"center"},l.a.createElement(D.a,null,l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,"Your Schedule"),l.a.createElement(D.a.Text,null,"Days Working: ",t.days," ",l.a.createElement("br",null),"Time Working: ",t.times))),l.a.createElement(D.a,null,l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,"Private Info"),l.a.createElement(D.a.Text,null,"Email: ",t.email," ",l.a.createElement("br",null),"First Name: ",t.firstName," ",l.a.createElement("br",null),"Last Name: ",t.lastName," ",l.a.createElement("br",null),"Type of Worker: ",t.locationId?"Store Worker":"Travel Worker"," ",l.a.createElement("br",null),t.locationId?"Store Location: "+t.Address:"Range Mile: "+t.rangeMile))),l.a.createElement(D.a,null,l.a.createElement(D.a.Title,null,"Edit Account"),l.a.createElement(D.a.Body,null,l.a.createElement(y.a,{onClick:function(e){return function(e){e.preventDefault(),j.a.post("/api/delete-account",{email:m}).then((function(e){alert("Account Deleted"),H.push("/")}))}(e)}},"Delete Account")," ",l.a.createElement("br",null),l.a.createElement(y.a,{onClick:function(){return h(!0)}},"Change Schedule"),l.a.createElement(y.a,{onClick:function(e){return function(e){e.preventDefault(),j.a.get("/api/logout").then((function(e){alert("Logout"),H.push("/")}))}(e)}},"Logout")))),l.a.createElement(p.a,{show:f,onHide:function(){return h(!1)}},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Change Schedule")),l.a.createElement(p.a.Body,null,l.a.createElement(v.a,{onSubmit:function(e){alert("Schedule Updated"),function(e){var a="";a=a.concat(T/3600,"-",x/3600),j.a.post("/api/update-schedule",{email:m,days:S,time:a}).then((function(e){}))}()}},l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{onChange:function(e){!function(e){if(S.includes(e.target.value)){var a=S.indexOf(e.target.value),t=S.splice(a,1);w(t)}else{var n=S;n.push(e.target.value),w(n)}}(e)},as:d.a,md:"4",controlId:"formGridEmail"},l.a.createElement(v.a.Label,null,"What Days can you Work ?"),l.a.createElement(v.a.Check,{label:"Monday",value:"Monday"}),l.a.createElement(v.a.Check,{label:"Tuesday",value:"Tuesday"}),l.a.createElement(v.a.Check,{label:"Wednesday",value:"Wednesday"}),l.a.createElement(v.a.Check,{label:"Thursday",value:"Thursday"}),l.a.createElement(v.a.Check,{label:"Friday",value:"Friday"}),l.a.createElement(v.a.Check,{label:"Saturday",value:"Saturday"}),l.a.createElement(v.a.Check,{label:"Sunday",value:"Sunday"}))),l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:d.a,md:"4",controlId:"formGridPassword"},l.a.createElement(v.a.Label,null,"What Time can you Work ? ",l.a.createElement("br",null)," NOTE: The Chosen time would apply for all the selected dates ",l.a.createElement("br",null)," (Please Make Sure of that) "),"Starting Time:",l.a.createElement(B.a,{onChange:function(e){N(e)},start:"07:00",end:"22:00",step:60,value:T}),"Ending Time:",l.a.createElement(B.a,{onChange:function(e){P(e),I("".concat(T/3600,"-",x/3600)),console.log(x)},start:"07:00",end:"22:00",step:60,value:x}))),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))))},M=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=(a[0],a[1],Object(n.useState)()),r=Object(s.a)(t,2),c=(r[0],r[1],Object(n.useState)(!1)),o=Object(s.a)(c,2),m=(o[0],o[1],Object(n.useState)([])),i=Object(s.a)(m,2),E=(i[0],i[1],Object(n.useState)(25200)),d=Object(s.a)(E,2),b=(d[0],d[1],Object(n.useState)(79200)),p=Object(s.a)(b,2),f=(p[0],p[1],Object(n.useState)(0)),h=Object(s.a)(f,2);h[0],h[1],Object(u.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Admin Page"),l.a.createElement(A.a,{className:"center"},l.a.createElement(D.a,null,"Hello")))},U=t(114),R=t(42),z=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(Object(u.g)().name),o=Object(s.a)(c,2),m=o[0],i=(o[1],Object(n.useState)(!1)),E=Object(s.a)(i,2),d=(E[0],E[1]);return Object(n.useEffect)((function(){j.a.post("/api/search-result",{searchValue:m}).then((function(e){console.log(e.data),void 0!=e.data[0]?(r(e.data),d(!0)):alert("Search Result Not Found!!!")}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,null,t.map((function(e){return l.a.createElement(D.a,null,l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,l.a.createElement(R.c,{color:"royalblue",size:25}),e.firstName.charAt(0).toUpperCase()+e.firstName.slice(1)," ",e.lastName.charAt(0).toUpperCase()+e.lastName.slice(1)),l.a.createElement(D.a.Text,null,l.a.createElement(R.b,{color:"royalblue",size:25}),"Contact Info:  ",e.email,l.a.createElement("br",null),l.a.createElement(R.a,{color:"royalblue",size:25}),"Schedule: ",l.a.createElement("br",null),e.days,l.a.createElement("br",null),e.times)))}))))},_=(t(105),t(118)),J=t(117),Y=t(45),q=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(u.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{bg:"light",expand:"lg"},l.a.createElement(_.a.Brand,{href:"/"},"Search Barber"),l.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(J.a,{className:"mr-auto"},l.a.createElement(J.a.Link,{href:"/"},"About")),l.a.createElement(v.a,{onChange:function(e){r(e.target.value)},onSubmit:function(e){c.push("/search-result/".concat(t))},inline:!0},l.a.createElement(Y.default,{type:"text",placeholder:"Search First Name",className:"mr-sm-2"}),l.a.createElement(y.a,{variant:"outline-success"},"Search")))))};var V=function(){return l.a.createElement(o.a,null,l.a.createElement(q,null),l.a.createElement("div",{className:"App center"},l.a.createElement("div",{id:"page-body"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:I,exact:!0}),l.a.createElement(u.a,{path:"/barber-signup",component:k}),l.a.createElement(u.a,{path:"/admin",component:M}),l.a.createElement(u.a,{path:"/search-result/:name",exact:!0,component:z}),l.a.createElement(u.a,{path:"/barber-profile",component:H})))))};t(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,a,t){e.exports=t.p+"static/media/Bar.86a8a2f0.png"},65:function(e,a,t){e.exports=t.p+"static/media/LeftMain.44a964a4.png"},66:function(e,a,t){e.exports=t.p+"static/media/rightMain.d06a6432.png"},73:function(e,a,t){e.exports=t(107)},78:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.a37dd1c5.chunk.js.map