(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),i=n(13),s=n(35),l=n(30),u=n(14),d=n(33),b=n(32),j=n(37),h=n.n(j),m=n(2),f={header:{minHeight:80}},O=function(){return Object(m.jsx)("header",{style:f.header,children:Object(m.jsx)("h1",{children:"HW-03-phonebook"})})},p=(n(61),function(e){var t=e.children;return Object(m.jsx)("div",{className:"Container",children:t})}),x=function(e){var t=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(p,{children:t})]})},v=(n(62),function(e){var t=e.title,n=e.children;return Object(m.jsxs)("div",{className:"Section",children:[Object(m.jsx)("h2",{children:t}),n]})}),y=n(11),C=n(94),g=n(99),S=n(98),k=n(96),A=(n(63),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(y.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(C.a,{variant:"outlined",children:[Object(m.jsx)(g.a,{color:"secondary",htmlFor:"component-outlined-name",children:"Name"}),Object(m.jsx)(S.a,{type:"text",id:"component-outlined-name",name:"name",color:"secondary",value:this.state.name,onChange:this.handleChange,inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},required:!0,label:"Name"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)(C.a,{variant:"outlined",children:[Object(m.jsx)(g.a,{color:"secondary",htmlFor:"component-outlined-number",children:"Number"}),Object(m.jsx)(S.a,{type:"tel",id:"component-outlined-number",name:"number",color:"secondary",value:this.state.number,onChange:this.handleChange,inputProps:{pattern:"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"},required:!0,label:"Number"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(k.a,{type:"submit",variant:"outlined",color:"secondary",children:"Add contact"})]})}}]),n}(a.Component)),F=n(97),w=n(41),N=n.n(w),D=(n(68),function(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteContact;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("span",{children:[n,": "]}),Object(m.jsx)("span",{children:a}),Object(m.jsx)(F.a,{"aria-label":"delete",onClick:function(){return c(t)},children:Object(m.jsx)(N.a,{})})]})}),H=(n(73),function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsx)("li",{children:Object(m.jsx)(D,{id:t,name:a,number:c,onDeleteContact:n})},t)}))})}),J=(n(74),function(e){var t=e.filter,n=e.onChange;return Object(m.jsxs)(C.a,{variant:"outlined",children:[Object(m.jsx)(g.a,{color:"secondary",htmlFor:"component-outlined-filter",children:"Find contacts by name"}),Object(m.jsx)(S.a,{type:"text",id:"component-outlined-filter",color:"secondary",value:t,onChange:n,label:"Find contacts by name"})]})}),z=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addEntry=function(t){var n=e.state.contacts,a=t.name,c=t.number,r={id:h.a.generate(),name:a,number:c};n.some((function(e){return e.name===a}))?alert("".concat(a," is already in contacts.")):e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{contacts:[r].concat(Object(i.a)(e.contacts))})}))},e.filterHandler=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.getFilteredContacts();return Object(m.jsxs)(x,{children:[Object(m.jsx)(v,{title:"Phonebook",children:Object(m.jsx)(A,{onSubmit:this.addEntry})}),Object(m.jsxs)(v,{title:"Contacts",children:[Object(m.jsx)(J,{value:this.state.filter,onChange:this.filterHandler}),Object(m.jsx)(H,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(75),n(76);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f2e14dd2.chunk.js.map