(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(3),n=c(41),i=c.n(n),r=c(16),j=c(8),o=(c(31),c(14)),l=c(45).a.initializeApp({apiKey:"AIzaSyDAN7TumQvGjvAwDi8yGDBx7_slKbiZESU",authDomain:"picpanoproject.firebaseapp.com",projectId:"picpanoproject",storageBucket:"picpanoproject.appspot.com",messagingSenderId:"969284120672",appId:"1:969284120672:web:3f6b5b3f47eacdb5025305"});var b=function(){return Object(s.jsx)("footer",{className:"footer-section",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"social",children:[Object(s.jsx)("h3",{children:"FOLLOW ME"}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/swaraj-patil-profile/",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),Object(s.jsx)("a",{href:"https://www.instagram.com/itz_rocking_sp/",children:Object(s.jsx)("i",{className:"fab fa-instagram"})}),Object(s.jsx)("a",{href:"https://twitter.com/iamswaraj_patil",children:Object(s.jsx)("i",{className:"fab fa-twitter"})}),Object(s.jsx)("a",{href:"https://github.com/Swaraj-Patil",children:Object(s.jsx)("i",{className:"fab fa-github"})})]}),Object(s.jsx)("div",{className:"copyrights",children:Object(s.jsxs)("span",{children:["Created By ",Object(s.jsx)("a",{href:"https://swaraj-patil.github.io/portfolio/",children:"Swaraj Patil"})," | ",Object(s.jsx)("span",{className:"far fa-copyright"})," 2021 All rights reserved"]})})]})})},h=function(e){var t=e.email,c=e.setEmail,a=e.password,n=e.setPassword,i=e.handleLogin,r=e.handleSignup,j=e.hasAccount,o=e.setHasAccount,l=e.emailError,h=e.passwordError;return Object(s.jsxs)("div",{children:[Object(s.jsx)("section",{className:"login",children:Object(s.jsxs)("div",{className:"loginContainer",children:[Object(s.jsx)("label",{children:"Username"}),Object(s.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return c(e.target.value)}}),Object(s.jsx)("p",{className:"ErrorMsg",children:l}),Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(s.jsx)("p",{className:"ErrorMsg",children:h}),Object(s.jsx)("div",{className:"btnContainer",children:j?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{onClick:i,children:"Sign in"}),Object(s.jsxs)("p",{children:["Don't have an account? ",Object(s.jsx)("span",{onClick:function(){return o(!j)},children:"Sign up"})]})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{onClick:r,children:"Sign up"}),Object(s.jsxs)("p",{children:["Have an account? ",Object(s.jsx)("span",{onClick:function(){return o(!j)},children:"Sign in"})]})]})})]})}),Object(s.jsx)(b,{})]})},u=c.p+"static/media/logo2.532cb799.jpg";var d=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"max-width",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("a",{href:"index.html",children:Object(s.jsx)("img",{src:u,alt:"Logo"})})}),Object(s.jsxs)("ul",{className:"menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)(r.c,{to:"/",className:"menu-btn",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.c,{to:"/images",className:"menu-btn",children:"Images"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.c,{to:"/posts",className:"menu-btn",children:"Posts"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.c,{to:"/albums",className:"menu-btn",children:"Albums"})})]})]})})})},p=c(30),O=c.n(p),m=c(43),x="6QfKJksP4XV5bwLS2AjeDbDGFbrIefs3YV7UHFmz";var f=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"apod-title",children:"Astronomy Picture of the Day - Nasa"}),Object(s.jsxs)("div",{className:"nasaPhoto",children:[Object(s.jsx)("img",{src:c.url,alt:c.title}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:c.title}),Object(s.jsx)("p",{className:"date",children:c.date}),Object(s.jsx)("p",{className:"explanation",children:c.explanation})]})]})]}):Object(s.jsx)("div",{})},g=function(e){var t=e.handleLogout;return Object(s.jsx)(r.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"space-top"}),Object(s.jsx)("button",{className:"logout-btn",onClick:t,children:"Signout"}),Object(s.jsx)(f,{}),Object(s.jsx)(b,{})]})})};var v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),j=r[0],b=r[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),p=d[0],O=d[1],m=Object(a.useState)(""),x=Object(o.a)(m,2),f=x[0],v=x[1],N=Object(a.useState)(""),w=Object(o.a)(N,2),S=w[0],y=w[1],k=Object(a.useState)(!1),A=Object(o.a)(k,2),P=A[0],C=A[1],E=function(){v(""),y("")},D=function(){l.auth().onAuthStateChanged((function(e){e?(b(""),O(""),n(e)):n("")}))};return Object(a.useEffect)((function(){D()}),[]),Object(s.jsx)("div",{children:c?Object(s.jsx)(g,{handleLogout:function(){return l.auth().signOut()}}):Object(s.jsx)(h,{email:j,setEmail:b,password:p,setPassword:O,handleLogin:function(){E(),l.auth().signInWithEmailAndPassword(j,p).catch((function(e){switch(e.code){case"auth/invalid-email":console.log("A");break;case"auth/user-disabled":console.log("a");break;case"auth/user-not-found":v(e.message);break;case"auth/wrong-password":y(e.message)}}))},handleSignup:function(){E(),l.auth().createUserWithEmailAndPassword(j,p).catch((function(e){switch(e.code){case"auth/email-already-in-use":console.log("A");break;case"auth/invalid-email":v(e.message);break;case"auth/weak-password":y(e.message)}}))},hasAccount:P,setHasAccount:C,emailError:f,passwordError:S})})},N=c(44),w=c.n(N),S=c.p+"static/media/cover2.986be3cf.jpg",y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)("6CDcNm6_GbqyVqejLDt_48nwczJtnwZ75p_8f_nQPD0"),r=Object(o.a)(i,2),j=r[0],l=(r[1],Object(a.useState)([])),h=Object(o.a)(l,2),u=h[0],p=h[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"space-top"}),Object(s.jsxs)("div",{className:"imagesPage",children:[Object(s.jsx)("img",{className:"cover",src:S,alt:"Cover"}),Object(s.jsx)("h1",{children:"UNSPLASH STOCK IMAGES"}),Object(s.jsxs)("div",{className:"search-box",children:[Object(s.jsx)("input",{className:"search-text",onChange:function(e){n(e.target.value)},type:"text",name:"photo",placeholder:"Search Something..."}),Object(s.jsx)("a",{className:"search-btn",onClick:function(e){console.log(c);var t="https://api.unsplash.com/search/photos?page=1&query="+c+"&client_id="+j;w.a.get(t).then((function(e){console.log(e),p(e.data.results)}))},children:Object(s.jsx)("i",{className:"fas fa-search"})})]}),Object(s.jsx)("div",{className:"result-container",children:u.map((function(e){return Object(s.jsx)("img",{className:"single-image",src:e.urls.small})}))})]}),Object(s.jsx)(b,{})]})},k=c(21),A=c(22),P=c(24),C=c(23),E=function(e){Object(P.a)(c,e);var t=Object(C.a)(c);function c(e){var s;return Object(k.a)(this,c),(s=t.call(this,e)).state={posts:[],comments:[]},s}return Object(A.a)(c,[{key:"componentWillMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t})})),fetch("https://jsonplaceholder.typicode.com/comments").then((function(e){return e.json()})).then((function(t){return e.setState({comments:t})}))}},{key:"render",value:function(){var e=this.state.posts.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"posts",children:[Object(s.jsx)("h3",{className:"title",children:e.title}),Object(s.jsx)("p",{className:"body",children:e.body})]})},e.id)}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"space-top"}),Object(s.jsxs)("div",{className:"postsPage",children:[Object(s.jsx)("h1",{className:"header",children:"Posts from jsonplaceholder:"}),e]}),Object(s.jsx)(b,{})]})}}]),c}(a.Component),D=function(e){Object(P.a)(c,e);var t=Object(C.a)(c);function c(e){var s;return Object(k.a)(this,c),(s=t.call(this,e)).state={albums:[]},s}return Object(A.a)(c,[{key:"componentWillMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/albums").then((function(e){return e.json()})).then((function(t){return e.setState({albums:t})}))}},{key:"render",value:function(){var e=this.state.albums.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"posts",children:Object(s.jsx)("h3",{className:"title",children:e.title})})},e.id)}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"space-top"}),Object(s.jsxs)("div",{className:"postsPage",children:[Object(s.jsx)("h1",{className:"header",children:"Albums from jsonplaceholder:"}),e]}),Object(s.jsx)(b,{})]})}}]),c}(a.Component),F=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"Error 404: Page not found!"})})};var L=function(){return Object(s.jsx)(r.b,{className:"App",children:Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{exact:!0,path:"/",component:v}),Object(s.jsx)(j.b,{exact:!0,path:"/picpano/#/images",component:y}),Object(s.jsx)(j.b,{exact:!0,path:"/picpano/#/Posts",component:E}),Object(s.jsx)(j.b,{exact:!0,path:"/picpano/#/Albums",component:D}),Object(s.jsx)(j.b,{exact:!0,path:"/404",component:F}),Object(s.jsx)(j.a,{to:"/404"})]})})};i.a.render(Object(s.jsx)(L,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.db644e63.chunk.js.map