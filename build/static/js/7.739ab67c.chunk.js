(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{270:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return l}));var a,i,c,r=t(6),o=t(31),d=t(4),u=d.default.div(a||(a=Object(r.a)(["\n  margin-top: 36px;\n"]))),s=d.default.div(i||(i=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 4px;\n\n  .handle-item {\n    margin: 0 8px 8px;\n  }\n"]))),l=d.default.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  .search {\n    &__title {\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 24px;\n      color: #333b6a;\n      text-transform: uppercase;\n    }\n\n    &__container {\n      margin-left: auto;\n      flex-grow: 1;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-end;\n      align-items: center;\n      & > "," {\n        border: 1px solid #dfe9f5;\n        box-sizing: border-box;\n        border-radius: 0px 6px 6px 0px;\n        height: 40px;\n        width: 160px;\n        @media (max-width: 991px) {\n          border-radius: unset;\n        }\n      }\n    }\n  }\n"])),o.a);n.c=u},273:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e){return e.AdminPermission}},277:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return b})),t.d(n,"d",(function(){return j})),t.d(n,"f",(function(){return O})),t.d(n,"e",(function(){return f}));var a=t(284),i=t(24),c=t(32),r=t(33),o=t(46),d=function(e){var n=e.pageNumber,t=e.pageSize;return function(e){Object(c.b)({method:"GET",url:r.a.PERMISSION.GET_GROUP,params:{pageNumber:n,pageSize:t}}).then((function(n){var t,a;(null===n||void 0===n?void 0:n.data)&&e(s(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data,null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.total))})).catch((function(e){Object(o.a)(e)}))}},u=function(){return function(e){Object(c.b)({method:"GET",url:r.a.PERMISSION.GET_PERMISSION}).then((function(n){(null===n||void 0===n?void 0:n.data)&&e(l(null===n||void 0===n?void 0:n.data))})).catch((function(e){Object(o.a)(e)}))}},s=function(e,n){return Object(i.action)(a.f,{data:e,total:n})},l=function(e){return Object(i.action)(a.g,e)},b=function(e){return Object(i.action)(a.a,e)},j=function(e){return Object(i.action)(a.b,e)},O=function(e){return Object(i.action)(a.e,e)},f=function(){return Object(i.action)(a.c)}},278:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o}));var a=t(48),i=[{name:"#"},{name:"T\xean nh\xf3m quy\u1ec1n"},{name:"Chi ti\u1ebft"},{name:"Tr\u1ea1ng th\xe1i"}],c=[{label:"S\u1eed d\u1ee5ng",value:"1"},{label:"Kh\xf4ng s\u1eed d\u1ee5ng",value:"0"}],r=[{name:"#"},{name:"name"},{name:a.e.ADD},{name:a.e.UPDATE},{name:a.e.DELETE},{name:a.e.VIEW},{name:a.e.VERIFY},{name:a.e.BLOCK},{name:a.e.DOWNLOAD},{name:a.e.EXPORT}],o=[{name:a.e.ADD},{name:a.e.UPDATE},{name:a.e.DELETE},{name:a.e.VIEW},{name:a.e.VERIFY},{name:a.e.BLOCK},{name:a.e.DOWNLOAD},{name:a.e.EXPORT}]},284:function(e,n,t){"use strict";t.d(n,"f",(function(){return a})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return c})),t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return o})),t.d(n,"c",(function(){return d})),t.d(n,"g",(function(){return u}));var a="AdminPermission/SET_DATA",i="AdminPermission/CHANGE_PAGE",c="AdminPermission/CHANGE_PAGE_SIZE",r="AdminPermission/SEARCH",o="AdminPermission/SELECT_ROW",d="AdminPermission/REFETCH",u="AdminPermission/SET_PERMISSIONS"},303:function(e,n,t){"use strict";t.r(n);var a=t(70),i=t(1),c=t(68),r=t(57),o=t(18),d=t(3),u=t(84),s=t(284),l={pageNumber:1,pageSize:u.a,total:0,data:[],selectedRow:null,shouldRefetch:!1,permissions:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s.f:return Object(d.a)(Object(d.a)({},e),{},{data:Object(o.a)(n.payload.data),total:n.payload.total});case s.g:return Object(d.a)(Object(d.a)({},e),{},{permissions:Object(o.a)(n.payload)});case s.a:return Object(d.a)(Object(d.a)({},e),{},{pageNumber:n.payload});case s.b:return Object(d.a)(Object(d.a)({},e),{},{pageSize:n.payload});case s.d:return Object(d.a)(Object(d.a)({},e),{},{status:n.payload.status,keyword:n.payload.keyword});case s.e:return Object(d.a)(Object(d.a)({},e),{},{selectedRow:null!==n.payload?Object(d.a)({},n.payload):null});case s.c:return Object(d.a)(Object(d.a)({},e),{},{shouldRefetch:!e.shouldRefetch});default:return Object(d.a)({},e)}},j=t(69),O=t(270),f=t(61),m=t(48),p=t(71),h=t(8),x=t(9),g=t(273),v=t(126),E=t(2),S=Object(v.a)((function(){return t.e(13).then(t.bind(null,289))})),y=Object(v.a)((function(){return t.e(14).then(t.bind(null,290))}));function A(e){var n=e.code,t=Object(x.c)(g.a).selectedRow,a=Object(p.a)(),i=a.isOpen,c=a.toggleModal,r=Object(p.a)(),o=r.isOpen,d=r.toggleModal;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{children:[Object(E.jsx)(f.a,{tooltip:"Th\xeam m\u1edbi",className:"handle-item",onClick:function(){return c(!0)},permissionCode:n,permissionType:m.e.ADD,children:Object(E.jsx)(h.B,{size:16})}),t&&Object(E.jsx)(f.a,{onClick:function(){return d(!0)},tooltip:"Chi ti\u1ebft",className:"handle-item",permissionCode:n,permissionType:m.e.VIEW,children:Object(E.jsx)(h.o,{size:16})})]}),Object(E.jsx)(S,{isOpen:i,toggleModal:c}),Object(E.jsx)(y,{isOpen:o,toggleModal:d,selectedRow:t})]})}var P=t(124),R=t(277),T=t(278),w=t(86),C=t(87);function N(){var e=Object(x.b)(),n=Object(x.c)(g.a),t=n.data,a=n.pageNumber,c=n.pageSize,r=n.total,o=n.shouldRefetch;return Object(i.useEffect)((function(){e(Object(R.a)({pageNumber:a,pageSize:c}))}),[e,a,c,o]),Object(i.useEffect)((function(){e(Object(R.b)())}),[e]),Object(E.jsx)(P.a,{header:T.d,minWidth:"700px",children:(null===t||void 0===t?void 0:t.length)>0?Object(E.jsxs)(E.Fragment,{children:[i.Children.toArray(t.map((function(e){return Object(E.jsx)(D,{d:e})}))),Object(E.jsx)("tr",{children:Object(E.jsx)("td",{colSpan:100,children:Object(E.jsx)(w.a,{current:a,total:r,pageSize:c,handleChangePageSize:function(n){e(Object(R.d)(n))},onChange:function(n){e(Object(R.c)(n))}})})})]}):Object(E.jsx)("tr",{children:Object(E.jsx)("td",{colSpan:100,children:"Ch\u01b0a c\xf3 d\u1eef li\u1ec7u"})})})}var D=function(e){var n=e.d,t=Object(x.c)(g.a).selectedRow,a=Object(x.b)();return Object(E.jsxs)("tr",{onClick:function(){return a(Object(R.f)(n))},children:[Object(E.jsx)("td",{children:Object(E.jsx)(C.b,{checked:(null===t||void 0===t?void 0:t.id)===(null===n||void 0===n?void 0:n.id)})}),Object(E.jsx)("td",{children:null===n||void 0===n?void 0:n.name}),Object(E.jsx)("td",{children:null===n||void 0===n?void 0:n.description}),Object(E.jsx)("td",{children:(null===n||void 0===n?void 0:n.status)&&1===(null===n||void 0===n?void 0:n.status)?"S\u1eed d\u1ee5ng":"Kh\xf4ng s\u1eed d\u1ee5ng"})]})},I=[{name:"Trang ch\u1ee7"},{name:"Quy\u1ec1n h\u1ea1n"}];function _(e){return Object(a.a)(e),Object(r.a)("AdminPermission",b),Object(E.jsx)(c.a,{children:Object(E.jsx)(j.a,{header:"Quy\u1ec1n h\u1ea1n",links:I,children:Object(E.jsxs)(O.c,{children:[Object(E.jsx)(O.b,{children:Object(E.jsx)("span",{className:"search__title",children:"Quy\u1ec1n h\u1ec7 th\u1ed1ng"})}),Object(E.jsx)(A,{code:"1"}),Object(E.jsx)(N,{})]})})})}n.default=Object(i.memo)(_)}}]);