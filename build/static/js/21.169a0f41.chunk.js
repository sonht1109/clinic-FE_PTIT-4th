(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[21],{301:function(e,t,n){"use strict";n.r(t);var c,a=n(17),i=n(70),o=n(1),l=n(68),s=n(57),r=n(3),d="CreateEvent/CREATING",j={creating:{data:[],total:0,pagination:{pageNumber:1,pageSize:10},search:{type:"",name:""},reload:!1},currentEvent:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return t.type===d?Object(r.a)(Object(r.a)({},e),{},{creating:Object(r.a)(Object(r.a)({},e.creating),{},{data:t.payload})}):Object(r.a)({},e)},h=n(6),u=n(4).default.div(c||(c=Object(h.a)(["\n    margin-top:32px;\n  .header { \n    font-size: 16px; \n    font-weight: 500;\n    line-height: 24px; \n    color: #333B6A;\n    text-transform: uppercase;\n  }\n  .tools{\n      padding-top:32px;\n      padding-bottom:8px;\n      .tool-item{\n          margin-left: 16px;;\n          .delete{\n            &:after{\n              color:#FF6C6C;\n            }\n            &:hover{\n              border-color: #FF6C6C;\n            }\n          }\n      }\n  }\n  .table-container{\n    tr{\n      &.active{\n        button{\n          background: #00CB82;\n          color:white;\n        }\n      }\n    }\n  }\n"]))),O=n(69),v=n(61),m=n(8),p=n(271),x=n(31),f=n(124),g=n(9),T=function(e){return e.UserEvent},C=n(33),E=n(32),k=function(){return function(e){Object(E.b)({method:"GET",url:C.a.EVENTS.CREATING}).then((function(t){var n=t.data.map((function(e){return{eventId:e.id,eventInfo:{name:e.name,field:e.field,kyc:e.kyc,public:e.public,startTime:e.startTime,endTime:e.endTime},contestantTypes:e.contestantTypes,eventContestant:{limit:e.limit,data_limit:e.data_limit},voteInfo:{voteType:e.vote,configVote:e.configVote,configEvaluate:{evaluateCriteria:e.evaluateCriteria,evaluateTitles:e.evaluateTitles}}}}));e({type:d,payload:n})})).catch((function(e){}))}},N=n(85),y=n(46),S=n(86),F=n(125),I=n(2),z=[{name:"Trang ch\u1ee7"},{name:"S\u1ef1 ki\u1ec7n"},{name:"T\u1ea1o s\u1ef1 ki\u1ec7n"}],A=[{name:"STT"},{name:"M\xe3 s\u1ef1 ki\u1ec7n"},{name:"T\xean s\u1ef1 ki\u1ec7n"},{name:"Ng\xe0y t\u1ea1o"},{name:"Ch\u1ec9nh s\u1eeda",colspan:2}];function B(e){Object(i.a)(e);var t=Object(o.useState)(5),n=Object(a.a)(t,2),c=n[0],r=n[1],d=Object(o.useState)(1),j=Object(a.a)(d,2),h=j[0],B=j[1],w=Object(o.useState)([]),D=Object(a.a)(w,2),G=D[0],V=D[1];Object(s.a)("UserEvent",b);var J=Object(o.useState)(""),L=Object(a.a)(J,2),R=L[0],U=L[1],X=Object(g.c)(T).creating.data;Object(o.useEffect)((function(){if(X.length>0){var e=X.slice(c*(h-1),c*h);V(e)}}),[c,h,X]);var _=G.length>0?null===G||void 0===G?void 0:G.map((function(e,t){return Object(I.jsxs)("tr",{onClick:function(){R===(null===e||void 0===e?void 0:e.eventId)?U(""):U((null===e||void 0===e?void 0:e.eventId)||"")},className:R===(null===e||void 0===e?void 0:e.eventId)?"active":"",children:[Object(I.jsxs)("td",{children:[Object(I.jsx)(F.a.Checkbox,{checked:R===(null===e||void 0===e?void 0:e.eventId)})," "]}),Object(I.jsx)("td",{}),Object(I.jsx)("td",{children:null===e||void 0===e?void 0:e.eventInfo.name}),Object(I.jsx)("td",{children:null===e||void 0===e?void 0:e.eventInfo.startTime}),Object(I.jsx)("td",{children:Object(I.jsx)(x.a,{height:"28px",width:"110px",color:"#718098",background:"#DFE9F5",border:"none",children:"Th\xf4ng tin"})}),Object(I.jsx)("td",{children:Object(I.jsx)(x.a,{height:"28px",width:"110px",color:"#718098",background:"#DFE9F5",border:"none",children:"Giao di\u1ec7n"})})]},t)})):Object(I.jsx)("tr",{children:Object(I.jsx)("td",{colSpan:6,children:"Ch\u01b0a c\xf3 s\u1ef1 ki\u1ec7n"})}),M=Object(g.b)();return Object(o.useEffect)((function(){M(k())}),[]),Object(I.jsx)(l.a,{children:Object(I.jsx)(O.a,{header:"T\u1ea1o s\u1ef1 ki\u1ec7n",links:z,children:Object(I.jsxs)(u,{children:[Object(I.jsx)("div",{className:"header",children:"danh s\xe1ch s\u1ef1 ki\u1ec7n \u0111ang t\u1ea1o"}),Object(I.jsxs)("div",{className:"tools",style:{display:"flex"},children:[Object(I.jsx)("div",{className:"tool-item",children:Object(I.jsx)(v.a,{tooltip:"Th\xeam m\u1edbi",children:Object(I.jsx)(m.B,{size:16,color:"#A6B0CF"})})}),Object(I.jsx)("div",{className:"tool-item",children:Object(I.jsx)(v.a,{className:"delete",tooltip:"X\xf3a",onClick:function(){""===R?Object(N.a)({name:"Ch\u1ecdn s\u1ef1 ki\u1ec7n c\u1ea7n x\xf3a!",icon:"error"}):Object(E.b)({method:"DELETE",url:C.a.EVENTS.DETELE(R)}).then((function(e){200===e.status&&Object(N.a)({name:"X\xf3a s\u1ef1 ki\u1ec7n th\xe0nh c\xf4ng!",icon:"success"}),M(k())})).catch((function(e){return Object(y.a)(e)}))},children:Object(I.jsx)(m.I,{size:16,color:"#A6B0CF"})})}),Object(I.jsx)("div",{className:"tool-item",children:Object(I.jsx)(v.a,{tooltip:"S\u1eeda",children:Object(I.jsx)(p.a,{size:16,color:"#A6B0CF"})})}),Object(I.jsx)("div",{className:"tool-item",children:Object(I.jsx)(v.a,{tooltip:"\u0110\xecnh ch\u1ec9",className:"delete",children:Object(I.jsx)(p.b,{size:16,color:"#A6B0CF"})})})]}),Object(I.jsx)("div",{className:"table-container",children:Object(I.jsxs)(f.a,{header:A,children:[_,X.length>0&&Object(I.jsx)("tr",{children:Object(I.jsx)("td",{colSpan:100,children:Object(I.jsx)(S.a,{handleChangePageSize:function(e){r(e),B(1),U("")},current:h,total:X.length,pageSize:c,onChange:function(e){B(e),U("")}})})})]})})]})})})}t.default=Object(o.memo)(B)}}]);