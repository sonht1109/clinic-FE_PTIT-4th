(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[22],{297:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return T}));var a,A,i,c=t(17),l=t(1),s=t(47),r=t(6),o=t(4),d=o.default.div(a||(a=Object(r.a)(["  \n    background: #FFFFFF80;\n    padding: 40px 56px;\n    border-radius: 20px;\n\n"]))),g=o.default.div(A||(A=Object(r.a)([""]))),b=Object(o.default)(d)(i||(i=Object(r.a)(["\n  margin-top: 32px;\n  box-sizing: border-box;\n  .header {\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 24px;\n    color: #333b6a;\n    margin-bottom: 44px;\n    text-transform: uppercase;\n  }\n  .content {\n    max-width: 860px;\n    margin: 0 auto;\n    .title {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: 24px;\n      color: #333b6a;\n\n      .desc {\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 21px;\n        color: #718098;\n        margin-bottom: 20px;\n      }\n    }\n\n    .form {\n      display: flex;\n      flex-wrap: wrap;\n      margin-right: -10px;\n      align-items: flex-start;\n      .avatar-upload_container {\n        width: 33.3333%;\n        .avatar-upload {\n          max-width: 100%;\n          padding-bottom: 0px;\n          position: relative;\n          width: 256px;\n          .desc {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 21px;\n            text-align: center;\n            color: #718098;\n            margin-top: 22px;\n          }\n          .avatar-container {\n            width: 100%;\n            position: relative;\n            padding-bottom: 110%;\n            border-radius: 12px;\n            overflow: hidden;\n            img {\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              object-fit: cover;\n            }\n          }\n          .button-upload {\n            position: absolute;\n            left: 50%;\n            bottom: 24px;\n            transform: translateX(-50%);\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            /* display: flex;\n            justify-content: center;\n            align-items: center; */\n            background: #00cb82;\n            cursor: pointer;\n            transition: all 0.3s;\n            label {\n              cursor: pointer;\n              border-radius: 50%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              top: 0;\n              left: 0;\n              input {\n                display: none;\n              }\n              svg {\n                color: white;\n              }\n            }\n            &:hover {\n              box-shadow: 0px 1px 13px 2px rgb(0, 0, 0, 23%);\n            }\n          }\n        }\n      }\n\n      .handle {\n        width: 66.6667%;\n        display: flex;\n        flex-wrap: wrap;\n        /* margin-right: -10px; */\n        /* margin-left: -10px;  */\n        .handle-item {\n          box-sizing: border-box;\n          padding-right: 10px;\n          padding-left: 10px;\n          width: 50%;\n          margin-bottom: 20px;\n          &.handle-address {\n            width: 100%;\n          }\n        }\n        .button-group {\n          padding-right: 10px;\n          padding-left: 10px;\n          width: 100%;\n          display: flex;\n          justify-content: flex-end;\n          margin-top: 12px;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 1300px) {\n    padding: 30px 15px;\n  }\n  @media only screen and (max-width: 700px) {\n    .content {\n      .form {\n        flex-direction: column;\n        margin-right: 0;\n        .avatar-upload_container {\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          margin-bottom: 30px;\n        }\n        .handle {\n          width: 100%;\n          .button-group {\n            justify-content: center;\n          }\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    .content {\n      .form {\n        flex-direction: column;\n        margin-right: 0;\n        .avatar-upload_container {\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          margin-bottom: 30px;\n        }\n        .handle {\n          width: 100%;\n          .handle-item{\n            width:100%;\n            padding:0;\n            margin-bottom:10px;\n          }\n          .button-group {\n            button{\n              width:110px;\n              font-size:14px;\n              font-weight:400;\n              height:30px;\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),h=t(271),p=t(31),j=t(69),x=t(68),f=t(125),u=t(8),m=t(56),w=t(275),O=t(272),v=t(57),C=t(3),E="USER_GET_INFORMATION",B={info:{}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;return n.type===E?Object(C.a)(Object(C.a)({},e),{},{info:n.value}):Object(C.a)({},e)},Q=t(32),M=t(33),y=t(85),D=t(9),G=function(){return function(e){Object(Q.c)({method:"GET",url:M.a.INFORMATIONS.SINGLE_ACCOUNT,data:null}).then((function(n){console.log("res data events created",n),e({type:E,value:null===n||void 0===n?void 0:n.data})})).catch((function(e){}))}},Y=function(e){return e.UserInformations},N=t(2),R=[{name:"Trang ch\u1ee7"},{name:"Qu\u1ea3n l\xfd th\xf4ng tin"},{name:"Th\xf4ng tin c\xe1 nh\xe2n"}],z=[{value:"none",label:"Kh\xf4ng"},{value:"male",label:"Nam"},{value:"female",label:"N\u1eef"},{value:"other",label:"Kh\xe1c"}],P=[{value:"vi",label:"vi"},{value:"en",label:"en"}],F=[".jpg",".jpeg",".bmp",".gif",".png"];function T(){Object(v.a)("UserInformations",I);var e=Object(D.b)(),n=Object(D.c)(Y).info,t=Object(l.useState)(new Date),a=Object(c.a)(t,2),A=a[0],i=a[1],r=Object(l.useState)(""),o=Object(c.a)(r,2),d=o[0],C=o[1],E=Object(l.useState)(""),B=Object(c.a)(E,2),T=B[0],L=B[1],S=Object(l.useState)(z[0]),H=Object(c.a)(S,2),W=H[0],X=H[1],k=Object(l.useState)(P[0]),V=Object(c.a)(k,2),U=V[0],Z=V[1],q=Object(s.b)(),K=q.register,J=q.handleSubmit;Object(l.useEffect)((function(){if(n.gender&&X(z.filter((function(e){return e.value===n.gender}))[0]),n.language&&Z(P.filter((function(e){return e.value===n.language}))[0]),n.birthday&&i(new Date(n.birthday)),n.avatar){var e="http://localhost:3001/",t=e.replace("/api","");L("".concat(t).concat(n.avatar))}}),[n]);var _=function(e){if(function(e){var n=e.target.value;if(n.length>0){for(var t=!1,a=0;a<F.length;a++){var A=F[a];if(n.substr(n.length-A.length,A.length).toLowerCase()===A.toLowerCase()){t=!0;break}}return t}}(e)){var n=e.target.files[0];!function(e){if(e.files&&e.files[0]){var n=new FileReader;n.onload=function(e){L(e.target.result)},n.readAsDataURL(e.files[0])}}(e.target),C(n),Object(y.a)({name:"Ch\u1ecdn \u1ea3nh th\xe0nh c\xf4ng",icon:"success"})}else Object(y.a)({name:"Ph\u1ea3i l\xe0 file \u1ea3nh (jpg, jpeg, .gif, .png, .bmp)",icon:"error"})};return Object(l.useEffect)((function(){e(G())}),[e]),Object(N.jsx)(x.a,{children:Object(N.jsx)(j.a,{header:"Th\xf4ng tin c\xe1 nh\xe2n",links:R,children:Object(N.jsx)(g,{children:Object(N.jsxs)(b,{children:[Object(N.jsx)("div",{className:"header",children:"Th\xf4ng tin c\xe1 nh\xe2n"}),Object(N.jsxs)("div",{className:"content",children:[Object(N.jsxs)("div",{className:"title",children:["H\u1ed3 s\u01a1",Object(N.jsx)("div",{className:"desc",children:"M\u1ed9t s\u1ed1 th\xf4ng tin c\xf3 th\u1ec3 hi\u1ec3n th\u1ecb cho nh\u1eefng ng\u01b0\u1eddi d\xf9ng kh\xe1c \u0111ang s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Bvote khi b\u1ea1n kh\u1edfi t\u1ea1o s\u1ef1 ki\u1ec7n"})]}),Object(N.jsxs)("div",{className:"form",children:[Object(N.jsx)("div",{className:"avatar-upload_container",children:Object(N.jsxs)("div",{className:"avatar-upload",children:[Object(N.jsx)("div",{className:"avatar-container",children:Object(N.jsx)("img",{src:T||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEYCAYAAACz9yiQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAt6SURBVHgB7d1/UhvnHcfxZ3clIWSGEWlmSjr5w0wP0PYEzQ3qG7Q9QdMT2NyAGzRHcG+QnKDtCbBnOgmTemyVCiFW+6P7XbwYE4IEBvE8z+f9miHYCskISc97n31Wu0rcDQ4P343daPAXlyRfubp+2tz01AHwW1JPnEv/WVXV39N68XLvi51XP/uj1914+MO7py7b+Fvq3Fdbm5kb9jM36KWulyUOgN+Ksm6+Kjedl26el66o629cme9fF4KfjOjXP86aLX79YnuzP94e9VyaMOiBkE1OFvY1qep6/9e7WweX/91Ho/v1f06fp65+sbszZGsPRMRmBUfv5q6o6hd7v3yy391+Mcpty58m7oDBD8Spi0BeVn/tZgLtSD/f5+//48vPRmMGPxAvi8D3704nVZH/ztYE0vbWbPB8PBow+IHI2Ri39T1b5Le/J7b17/U2Dr/8fNMBiF+zGOj+/WbuqpOzndQl/WfDQeYAaLAje3Z4vxr2vk5dmv5ha0gAACX23p40y37frAHUv+1lqQOgw97YZ+/ubQ77Oxb/ADHvx/xTNv2AMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAMAIACCMAgDACAAgjAIAwAgAIIwCAsJ5D1Kq6dnnRfC0ql5dV+91uK8r6o5/rZUnzlbo0Sdywn7pB82XfETcCECEb4PO8csenxcWAX8aCUJRl++fZ2fltbQwGmRttpG5ryEslRjyrEbGBfjwr2q9VBv0q/7/ZWdEGYXKyaGYEmRs/6bezBcSBAETgvgf+dWyGMC0LN50XbQRsRkAIwkcAAmdb6DfHiwcb+Nex2cDlECBcPHuBsgFvA9G2+o/BZgRvjvNmjaF2461eu16A8BCAANngO5rMf7KS/xiOTxdulhdudzxklyBAHOcJjE+Dv+PjfcJqCEBAfB5oRCBMBCAQIQwwIhAeAhAAW/ALZWB1EVjnUQncHQEIgK32h7RVtfs6mT7O0QncDgHwnB1vf6xDfZ+iPTpwRgR8RwA81m5Jm61/qNb9BiXcHgHwmG39Q15Q696iDH8RAE+FvvXvPOT5Cfh0BMBTMQx+wyzAbwTAU/NF6WLBLMBfBMBDoe/7X9VdoAT+IQAemp3Fs/XvHM/i2KWJDQHwUIxbS7suIbsB/iEAnpmveA2/0LQXJ12wG+AbAuCZmAeJzQLgFwLgmZhW/6/KC2YAviEAnqki3kgSAP8QAM8UZbyDhEVA/xAAz8R8MQ0uFOIfAgAIIwCAMAIACCMAnon52vp8boB/CIBn0ojHSC/mXy5QBMAzg17mYpWmvNx8wzPimUEv3qdk2Ofl5hueEc8MevFOk2P+3UJFADwzaLaSMX7Srv1Ow0G8uzehIgCesYES45aSwe8nAuCh7VHfxWY04KXmI54VDw0Hce0G2OG/rc2eg38IgIds8G+P4hkwTP/9RQA8ZQGIZRYwfhLfLk0sCICnYpkF2ODnLcD+IgAeC30W0O77D9n39xkB8JgN/s+3By5UbP39RwA8N9rIgtwVsPvMyr//CEAA2i1pQGfS2X1l4S8MBCAAtiuwuzMMIgJ2H+2+xvh25hgRgEDYvrTvEegGP/v94SAAAfE5Agz+MBGAwPgYAQZ/uAhAgGyg/eoXQy+ODth9sPvC4A8Tx2kCZYtsn20N3CBL3eRk4Yo1f6bY+XsU+s1hSl5CIePZC5wda7eTbabzog3BQ+veohzTuQrKCEAEbPptx93tbbcWgXle3vuMgIEfJwIQEQtB99bh6WnhZk0I5nl15w/l7K5OZIPeZhkM/PgQgEjZrkH3VlybEeRF7eaL0lXNzMA+pPPqDMFW8u2q3XZZcrsysQ38WK9PiA8IgADbeg+bicE2Tzeu4DAgIIwAAMIIACCMAADCCAAgjAAAwggAIIwAAMIIACCMAADCeG9ohOzkH3urf76o2u9FWV3cVlXuxpOD7IQiu9iQnQPQy9L3f7c/O84LiBABCJgNZDvJxwZ63gzy9iSf998fQnt2YP/8RKFeml78mTCEiwAE4upgb8/5L9d7FSC7D/P2FOOPb7ezB222MOyfR8G+IwwEwGPzxflAt+/n0/n1DvhV5UXVfs3OPtzWnoFoMXj/HX4iAB6xAT49LdsLefg84FdxPlMonTtZtLsIFoLRhs0OMi4g6hEC8MguD/p2wETIfsfZWXExQ7AYbA0zYuABAvAIFAb9TeaXfu8uBnyM+OPgUV8j25e3LaEN/pCn9/epi4FdzNRmBHyk+HoRgDWwgd9drRfXsyMa07JoL29uswILAYuHD48APCAG/t3Y43XUfF2+3DkeBo/sA2Dg3w+bFbw5ztvH8vPtDWYED4AA3CN7wb6dLtr9fNwfe1yP3s3bmQBrBPeLANyT49n5R3OxuPdwbH1gdla2EfDhg1FjwKP4idpp6v9ypvtrYoF9O83bWZbtFjAb+DTsVH0C29c/mswZ/I+ge+ztLci4OwJwRzblt/3SdZ+Qgw/ssf/+7bx9LnA3BOAObF/fpqHwgz0X6/ho9BgRgFuyFxovNv/Yc8JM4PYIwC3YwhOD3182E2A95nYIwIq6Y/zw24//zVmXuQUCsCLb8vPC8p8dJnxzfOawGgKwAnsDin0hDN2VlLAcAVjBdM6LKTSs1ayGACxh0362JuFhFrAaArAEU/9wWQRwMwKwBC+icDEDWI4ALGEftIEwFRVHbZYhAEtw6C9cPHfLEQBAGAEAhBEAQBgBAIQRAEAYAQCEEQBAGAEAhBGAJbjsdLgGPV7ey/AILTHayBzCRACW4xFaYjQgAKGyTxDCzQjAEt1HVSMsfIbgagjACuzFRATCwfO1Oj4bcEX2grL1gLf2OYBcI8BL9vHh9jwN2W1bGQG4BVtU2t0ZtleetVNNK84390IvS13azGXThCn/bRGAO7AX2qDHiw3hYw0AEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEEYAAGEEABBGAABhBAAQRgAAYQQAEGYBeFWUtQOg4/2Yn6QuSV7lReUA6Ciq2tV1/a+0+ed380XpAOiYnhaumQO8TN0gP5ielq6q2Q0AVNhGP62zl+nezs6k2QH49nhWOADxm5wsbA3gm70vNl+dHwUokz8fnxYTFgOBuNkYn8wWE1el+/b3NgBWgqp0+0eTuSMCQJxsbNsYb/b3923M220X7wPY2x0dND9ABIAIdYM/X5T7e7tbB93tydUfPDyafd2sDjwfj/rj8ZO+AxAuW9y39T3bxa/K6qPBb5Lr/qPDH06f1q580e+nfxz2M7e12XO9LHG9NHEA/GbH+PNF1a702xG+sqq+S+rsT920/7IbR7SFwCXls2aH4FmSJr9pDhyOHQCv1XX9uvn2KkmSb91sdLC3l0x+7mf/D6/CajPw/ZxiAAAAAElFTkSuQmCC",alt:""})}),Object(N.jsx)("div",{className:"button-upload",children:Object(N.jsxs)("label",{children:[Object(N.jsx)(h.c,{}),Object(N.jsx)("input",{type:"file",onChange:function(e){return _(e)},className:"input-hide"})]})}),Object(N.jsx)("div",{className:"desc",children:"\u1ea2nh h\u1ed3 s\u01a1"})]})}),Object(N.jsxs)("div",{className:"handle",children:[Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"H\u1ecd v\xe0 t\xean",icon:Object(N.jsx)(u.M,{size:16}),children:Object(N.jsx)(f.a.Text,{name:"name",ref:K,placeholder:" ",defaultValue:n.name?n.name:""})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"Date",icon:Object(N.jsx)(u.e,{size:16}),isLabelOnTop:!0,children:Object(N.jsx)(f.a.Date,{placeholder:" ",value:A,onDayChange:function(e){i(e),console.log(e)}})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{isLabelOnTop:!0,label:"Gi\u1edbi t\xednh",icon:Object(N.jsx)(u.M,{size:16}),children:Object(N.jsx)(f.a.Select,{name:"gender",value:W,onChange:X,options:z})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"Email",icon:Object(N.jsx)(m.b,{size:16}),children:Object(N.jsx)(f.a.Text,{placeholder:" ",name:"email",ref:K,defaultValue:n.email?n.email:""})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",icon:Object(N.jsx)(u.A,{size:16}),children:Object(N.jsx)(f.a.Text,{placeholder:" ",ref:K,defaultValue:n.phone?n.phone:void 0})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"Facebook",icon:Object(N.jsx)(u.q,{size:16}),children:Object(N.jsx)(f.a.Text,{placeholder:" ",name:"facebook",ref:K,defaultValue:n.facebook?n.facebook:""})})}),Object(N.jsx)("div",{className:"handle-item handle-address",children:Object(N.jsx)(f.a.Wrapper,{label:"\u0110\u1ecba ch\u1ec9",icon:Object(N.jsx)(w.c,{size:16}),children:Object(N.jsx)(f.a.Text,{placeholder:" ",name:"address",ref:K,defaultValue:n.address?n.address:""})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"C\xf4ng ty",icon:Object(N.jsx)(w.a,{size:16}),children:Object(N.jsx)(f.a.Text,{placeholder:" ",name:"company",ref:K,defaultValue:n.company?n.company:""})})}),Object(N.jsx)("div",{className:"handle-item",children:Object(N.jsx)(f.a.Wrapper,{label:"Ng\xf4n ng\u1eef",isLabelOnTop:!0,icon:Object(N.jsx)(O.a,{size:16}),children:Object(N.jsx)(f.a.Select,{placeholder:" ",value:U,onChange:Z,options:P})})}),Object(N.jsxs)("div",{className:"button-group",children:[Object(N.jsx)("div",{className:"button-wrapper",style:{marginRight:"16px"},children:Object(N.jsx)(p.a,{background:"white",color:"#718098",children:"H\u1ee7y b\u1ecf"})}),Object(N.jsx)("div",{className:"button-wrapper",children:Object(N.jsx)(p.a,{onClick:J((function(n){var t=n.name,a=n.company,i=n.address,c=n.email,l=n.facebook,s=new FormData;s.append("name",t),s.append("company",a),s.append("address",i),s.append("email",c),s.append("birthday",A.toISOString()),s.append("facebook",l),s.append("avatar",d),s.append("language",U.value),s.append("gender",W.value),Object(Q.c)({method:"PUT",url:M.a.USER.USER_INFO,data:s}).then((function(n){console.log(n),localStorage.setItem("infor",JSON.stringify(n.data)),e(G()),Object(y.a)({name:"Update th\xf4ng tin th\xe0nh c\xf4ng",icon:"success"})})).catch((function(e){Object(y.a)({name:e.message,icon:"error"})}))})),children:"C\u1eadp nh\u1eadt"})})]})]})]})]})]})})})})}}}]);