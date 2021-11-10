(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[14],{282:function(e,n,t){"use strict";t.d(n,"a",(function(){return A}));var a,i,s=t(3),c=t(1),o=t(278),r=t(6),d=t(67),l=t(31),u=t(4),p=(u.default.div(a||(a=Object(r.a)([""]))),Object(u.default)(d.a)(i||(i=Object(r.a)(["\n  margin-top: 44px;\n  @media (max-width: 991px) {\n    margin-top: 20px;\n  }\n\n  .body {\n    &__input {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 0 -10px 10px;\n      .input-item {\n        margin: 0 10px 10px;\n        flex-basis: calc(50% - 20px);\n        flex-grow: 1;\n      }\n    }\n\n    &__button {\n      margin: 56px -8px -8px auto;\n      width: fit-content;\n      display: flex;\n      flex-wrap: wrap;\n      @media (max-width: 991px) {\n        margin-top: 20px;\n      }\n      & > "," {\n        flex-grow: 1;\n        margin: 0 8px 8px;\n      }\n    }\n  }\n"])),l.a)),m=t(8),b=t(59),j=t(106),f=t(58),h=t(47),x=t(63),O=t(9),v=t(273),g=t(124),w=t(83),M="AdminPermission.status",y="AdminPermission.thead",C=Object(w.a)({title:{id:"".concat("AdminPermission",".title"),defaultMessage:"title"},1:{id:"".concat(M,".1"),defaultMessage:"S\u1eed d\u1ee5ng"},0:{id:"".concat(M,".0"),defaultMessage:"Kh\xf4ng s\u1eed d\u1ee5ng"},add:{id:"".concat(y,".add"),defaultMessage:"Add"},update:{id:"".concat(y,".update"),defaultMessage:"Update"},delete:{id:"".concat(y,".delete"),defaultMessage:"Delete"},view:{id:"".concat(y,".view"),defaultMessage:"View"},verify:{id:"".concat(y,".verify"),defaultMessage:"Verify"},block:{id:"".concat(y,".block"),defaultMessage:"Block"},download:{id:"".concat(y,".download"),defaultMessage:"Download"},export:{id:"".concat(y,".export"),defaultMessage:"Export"},name:{id:"".concat(y,".name"),defaultMessage:"T\xean quy\u1ec1n"}}),P=t(87),k=t(32),q=t(33),T=t(277),N=t(46),_=t(85),S=t(2);function A(e){var n=e.selectedRow,t=e.handleClose,a=Object(x.a)(),i=Object(h.b)({shouldUnregister:!0}),r=i.register,d=i.control,u=i.watch,w=i.errors,M=i.handleSubmit,y=i.setValue,P=Object(O.c)(v.a).permissions,A=Object(O.b)(),R=!(null===n||void 0===n?void 0:n.id);Object(c.useEffect)((function(){n&&(y("name",null===n||void 0===n?void 0:n.name),y("desc",null===n||void 0===n?void 0:n.description),y("status",o.a.filter((function(e){return(null===n||void 0===n?void 0:n.status.toString())===e.value}))[0]))}),[n,y]);var V=Object(c.useMemo)((function(){return o.b.map((function(e){return{name:"#"!==e.name?a.formatMessage(Object(s.a)({},C[e.name])):e.name,colspan:null===e||void 0===e?void 0:e.colspan}}))}),[a]),I=Object(c.useCallback)((function(){return c.Children.toArray(P.map((function(e,t){r({name:"permissions[".concat(t,"].name"),value:e.name}),r({name:"permissions[".concat(t,"].code"),value:Number(e.code)});var a=n?null===n||void 0===n?void 0:n.permissions.filter((function(n){return n.code===e.code}))[0]:null;return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:t+1}),Object(S.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),c.Children.toArray(o.c.map((function(e){var n="permissions[".concat(t,"].options[").concat(e.name,"]");return r({name:n,value:(null===a||void 0===a?void 0:a.options[0][e.name])||!1}),Object(S.jsx)(E,{setValue:y,control:d,name:n})})))]})})))}),[P,r,d,y,n]);return Object(S.jsxs)(p,{children:[Object(S.jsxs)("div",{className:"body__input",children:[Object(S.jsxs)("div",{className:"input-item",children:[Object(S.jsx)(f.a.Text,{inputProps:{name:"name"},wrapperProps:{label:"T\xean nh\xf3m quy\u1ec1n",icon:Object(S.jsx)(m.j,{size:12})},register:r({required:a.formatMessage(Object(s.a)({},b.a.required),{field:"T\xean nh\xf3m quy\u1ec1n"})})}),Object(S.jsx)(j.a,{errors:w,field:"name"})]}),Object(S.jsxs)("div",{className:"input-item",children:[Object(S.jsx)(f.a.Select,{selectProps:{options:o.a},name:"status",wrapperProps:{label:"Tr\u1ea1ng th\xe1i",icon:Object(S.jsx)(m.G,{size:12})},watch:u,control:d,rules:{required:a.formatMessage(Object(s.a)({},b.a.required),{field:"Tr\u1ea1ng th\xe1i"})}}),Object(S.jsx)(j.a,{errors:w,field:"status"})]}),Object(S.jsxs)("div",{className:"input-item",children:[Object(S.jsx)(f.a.Text,{inputProps:{name:"desc"},wrapperProps:{label:"Chi ti\u1ebft",icon:Object(S.jsx)(m.u,{size:12})},register:r({required:a.formatMessage(Object(s.a)({},b.a.required),{field:"Chi ti\u1ebft"})})}),Object(S.jsx)(j.a,{errors:w,field:"desc"})]})]}),Object(S.jsx)("div",{className:"body__table",children:Object(S.jsx)(g.a,{header:V,minWidth:"1000px",children:I()})}),Object(S.jsxs)("div",{className:"body__button",children:[Object(S.jsx)(l.a,{width:"152px",height:"40px",color:"#718098",border:"1px solid#00CB82",background:"white",onClick:function(){t()},children:"Hu\u1ef7 b\u1ecf"}),Object(S.jsx)(l.a,{width:"152px",height:"40px",onClick:M((function(e){(null===e||void 0===e?void 0:e.status)&&(e.status=Number(e.status.value)),(null===e||void 0===e?void 0:e.permissions)&&(e.permissions=e.permissions.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{options:Object.keys(e.options).filter((function(n){return e.options[n]}))})}))),Object(k.b)({method:R?"POST":"PUT",url:(null===n||void 0===n?void 0:n.id)?q.a.PERMISSION.UPDATE(null===n||void 0===n?void 0:n.id):q.a.PERMISSION.CREATE,data:e}).then((function(){A(Object(T.e)()),A(Object(T.f)(null)),t(),Object(_.a)({name:R?"Th\xeam m\u1edbi nh\xf3m quy\u1ec1n th\xe0nh c\xf4ng":"Ch\u1ec9nh s\u1eeda nh\xf3m quy\u1ec1n th\xe0nh c\xf4ng",icon:"success"})})).catch((function(e){Object(N.a)(e)}))})),children:"L\u01b0u"})]})]})}var E=function(e){var n=e.control,t=e.setValue,a=e.name,i=Object(h.c)({control:n,name:a});return Object(S.jsxs)("td",{onClick:function(){t(a,!i)},children:[" ",Object(S.jsx)(P.b,{checked:i})]})}},290:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t(67),i=(t(1),t(282)),s=t(2);function c(e){var n=e.isOpen,t=e.toggleModal,c=e.selectedRow;return Object(s.jsx)(a.b,{title:"Ch\u1ec9nh s\u1eeda nh\xf3m quy\u1ec1n",toggleModal:t,isOpen:n,children:Object(s.jsx)(i.a,{selectedRow:c,handleClose:function(){return t(!1)}})})}}}]);