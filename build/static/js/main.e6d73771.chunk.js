(this["webpackJsonpreact-jwt-template"]=this["webpackJsonpreact-jwt-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),s=a(11),i=a(1),c=(a(28),a(6)),u=a(7),m=a(9),h=a(8),p=function(e){var t=e.user,a=e.handleLogout;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:" ",className:"nav-link"},"Welcome, ",t.name)),r.a.createElement("li",null,r.a.createElement("a",{href:"/users",className:"nav-link"},"Users")),r.a.createElement("li",null,r.a.createElement("a",{href:" ",className:"nav-link",onClick:a},"Log Out"))))):r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:"/login",className:"nav-link"},"Log In")),r.a.createElement("li",null,r.a.createElement("a",{href:"/users",className:"nav-link"},"Users")),r.a.createElement("li",null,r.a.createElement("a",{href:"/signup",className:"nav-link"},"Sign Up"))))))},f=a(10),g=a.n(f),d=a(13),v=a(15);function E(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var b={setToken:function(e){localStorage.setItem("token",e)},getToken:E,getUserFromToken:function(){var e=E();return e?JSON.parse(atob(e.split(".")[1])).user:null},removeToken:function(){localStorage.removeItem("token")}};var w={signup:function(e){return fetch("/api/auth/signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return console.log(e,"<-- response object"),e.json()})).then((function(e){if(e.token)return e;throw console.log(e,"<-- the error"),new Error("".concat(e.err))})).then((function(e){var t=e.token;b.setToken(t)}))},getUser:function(){return b.getUserFromToken()},logout:function(){b.removeToken()},login:function(e){return fetch("/api/auth/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return b.setToken(t)}))}},y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(t){e.props.updateMessage(""),e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(d.a)(g.a.mark((function t(a){var n,r,o,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,r=n.history,o=n.updateMessage,l=n.handleSignupOrLogin,a.preventDefault(),t.prev=2,t.next=5,w.signup(e.state);case 5:l(),r.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),o(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"isFormInvalid",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password,r=e.passwordConf;return!(t&&a&&n===r)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password,o=e.passwordConf;return r.a.createElement("div",null,r.a.createElement("h3",null,"Sign Up"),r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",id:"name",value:t,name:"name",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",autoComplete:"off",id:"email",value:a,name:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"password",autoComplete:"off",id:"password",value:n,name:"password",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",autoComplete:"off",id:"confirm",value:o,name:"passwordConf",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"confirm"},"Confirm Password"),r.a.createElement("button",{disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(s.b,{to:"/"},"Cancel")))}}]),a}(n.Component),k=(a(35),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.updateMessage=function(t){e.setState({message:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(y,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),a}(n.Component)),O=(a(36),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(d.a)(g.a.mark((function t(a){var n,r,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,r=n.history,o=n.handleSignupOrLogin,a.preventDefault(),t.prev=2,t.next=5,w.login(e.state);case 5:o(),r.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),alert("Invalid Credentials!");case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.pw;return r.a.createElement("main",{className:"Login"},r.a.createElement("h3",null,"Log In"),r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",id:"email",value:t,name:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"password",autoComplete:"off",id:"password",value:a,name:"pw",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("button",{className:"btn green"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(s.b,{className:"btn red",to:"/"},"Cancel")))}}]),a}(n.Component));var C=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/",{headers:{Authorization:"Bearer "+b.getToken()}},{mode:"cors"}).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello. This is a list of all the users."),this.state.users.map((function(e){return r.a.createElement("p",null,e.name)})))}}]),a}(n.Component),j=(a(37),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:w.getUser()},e.handleLogout=function(){w.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:w.getUser()})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{user:t,handleLogout:this.handleLogout}),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement("main",null,r.a.createElement("h1",null,"Welcome. This is an authorization template."))}}),r.a.createElement(i.b,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement(k,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(i.b,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement(O,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(i.b,{exact:!0,path:"/users",render:function(){return t?r.a.createElement(C,null):r.a.createElement(i.a,{to:"/login"})}}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.b,{render:function(e){var t=e.history;return r.a.createElement(j,{history:t})}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e6d73771.chunk.js.map