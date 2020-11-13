(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(19),l=c.n(r),i=(c(26),c(27),c(3)),o=c(4),j=c(5),b=c.n(j),d=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1],l=Object(s.useState)(!1),j=Object(o.a)(l,2),d=j[0];j[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/dogs").then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[d]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Details about: "}),Object(a.jsxs)("table",{className:"table table-hover col-6 mx-auto",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("tr",{children:["Pet Name: ",e.name," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("tr",{children:["Pet Type: ",e.breed," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("tr",{children:["Description: ",e.favoriteMove," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("tr",{children:["Skill (1): ",e.isLit,"  "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("tr",{children:["Skill (2): ",e.skillTwo,"  "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("tr",{children:["Skill (3): ",e.skillThree,"  "]}),Object(a.jsxs)("td",{children:[Object(a.jsx)(i.a,{to:"/edit/".concat(e._id),children:"edit "}),Object(a.jsx)(i.a,{to:"/details/".concat(e._id),children:"details "}),Object(a.jsx)("br",{})]})]},t)}))})]})]})},h=c(7),u=c(6),O=function(e){var t=e.form,c=e.errors,s=e.handleInputChange,n=e.handleSubmit,r=e.submitValue;return Object(a.jsxs)("form",{className:"col-6 mx-auto",onSubmit:n,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",className:"form-control",value:t.name,onChange:s}),Object(a.jsx)("span",{className:"text-danger",children:c.name?c.name.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"breed",children:"Type:"}),Object(a.jsx)("input",{type:"text",name:"breed",className:"form-control",value:t.breed,onChange:s}),Object(a.jsx)("span",{className:"text-danger",children:c.breed?c.breed.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"favoriteMove",children:"Description:"}),Object(a.jsx)("input",{type:"text",name:"favoriteMove",className:"form-control",value:t.favoriteMove,onChange:s}),Object(a.jsx)("span",{className:"text-danger",children:c.favoriteMove?c.favoriteMove.message:""})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"isLit",children:"Skills:"}),Object(a.jsx)("input",{type:"text",name:"isLit",className:"form-control",checked:t.isLit,value:t.isLit,onChange:s})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"favoriteMove",children:"Skill 2:"}),Object(a.jsx)("input",{type:"text",name:"skillTwo",className:"form-control",value:t.skillTwo,onChange:s})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"favoriteMove",children:"Skill 3:"}),Object(a.jsx)("input",{type:"text",name:"skillThree",className:"form-control",value:t.skillThree,onChange:s})]}),Object(a.jsx)("input",{type:"submit",value:r,className:"btn btn-success"})]})},m=function(e){var t=Object(s.useState)({name:"",breed:"",favoriteMove:"",isLit:"",skillTwo:"",skillThree:""}),c=Object(o.a)(t,2),n=c[0],r=c[1],l=Object(s.useState)({name:"",breed:"",age:""}),j=Object(o.a)(l,2),d=j[0],m=j[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"text-center",children:"Know a pet needing a home?"}),Object(a.jsx)(O,{form:n,handleInputChange:function(e){"checkbox"!==e.target.type?r(Object(u.a)(Object(u.a)({},n),{},Object(h.a)({},e.target.name,e.target.value))):r(Object(u.a)(Object(u.a)({},n),{},{isLit:!n.isLit}))},handleSubmit:function(e){e.preventDefault(),b.a.post("http://localhost:8000/api/dogs/create",n).then((function(e){e.data.results?Object(i.c)("/"):m(e.data)}))},errors:d,submitValue:"Add Pet"})]})},x=function(e){var t=Object(s.useState)(null),c=Object(o.a)(t,2),n=c[0],r=c[1],l=Object(s.useState)(!1),j=Object(o.a)(l,2),d=j[0],h=j[1],u=Object(s.useState)(null),O=Object(o.a)(u,2);O[0],O[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/dogs/".concat(e.id)).then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return n?Object(a.jsxs)("div",{className:"card col-6 mx-auto",children:[Object(a.jsx)(i.a,{to:"/edit/".concat(e.id),children:"Edit"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"card-title",children:["Name: ",n.name]}),Object(a.jsxs)("h4",{className:"card-text",children:["Type: ",n.breed]}),Object(a.jsxs)("p",{className:"card-text",children:["Description: ",n.favoriteMove]}),Object(a.jsxs)("p",{className:"card-text",children:["Skill 1:  ",n.isLit]}),Object(a.jsxs)("p",{className:"card-text",children:["Skill 2:  ",n.skillTwo]}),Object(a.jsxs)("p",{className:"card-text",children:["Skill 3:  ",n.skillThree]}),Object(a.jsxs)("button",{to:"/edit/".concat(n._id),onClick:function(){return e=n._id,n.name,void b.a.delete("http://localhost:8000/api/dogs/destroy/".concat(e)).then((function(e){e.data.results&&h(!d)})).catch((function(e){return console.log(e)}));var e},className:"btn btn-danger",children:[" ","Adopt ".concat(n.name)]})]})]}):Object(a.jsx)("p",{})},f=function(e){var t=Object(s.useState)({name:"",breed:"",favoriteMove:"",isLit:""}),c=Object(o.a)(t,2),n=c[0],r=c[1],l=Object(s.useState)({name:"",breed:"",age:""}),j=Object(o.a)(l,2),d=j[0],m=j[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/dogs/".concat(e.id)).then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"text-center",children:"Edit Dog:"}),Object(a.jsx)(O,{form:n,errors:d,handleInputChange:function(e){r(Object(u.a)(Object(u.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},submitValue:"Edit",handleSubmit:function(t){t.preventDefault(),b.a.put("http://localhost:8000/api/dogs/update/".concat(e.id),n).then((function(e){console.log(e),e.data.results?Object(i.c)("/"):m(e.data)})).catch((function(e){return console.log(e)}))}})]})};var p=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"d-flex justify-content-center flex-column",children:[Object(a.jsx)("h1",{className:"text-center",children:"Pet Shelter"}),Object(a.jsx)("h2",{className:"text-center",children:"These pets are looking for a good home"}),Object(a.jsx)(i.a,{to:"/",children:"Back To Home"}),Object(a.jsx)("br",{}),Object(a.jsx)(i.a,{to:"/new",children:"Add A Pet To The Shelter"}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(i.b,{children:[Object(a.jsx)(d,{path:"/"}),Object(a.jsx)(m,{path:"/new"}),Object(a.jsx)(x,{path:"/details/:id"}),Object(a.jsx)(f,{path:"/edit/:id"})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),v()}},[[51,1,2]]]);
//# sourceMappingURL=main.67d1dcd8.chunk.js.map