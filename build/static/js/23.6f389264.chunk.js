(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[23],{298:function(e,n,a){"use strict";a.r(n);for(var c,d=a(17),o=a(70),t=a(1),i=a(68),m=a(57),s=a(6),r=a(4).default.div(c||(c=Object(s.a)(["\n  margin-top: 27px;\n  background: #ffffff80;\n  border-radius: 20px;\n  padding: 44px 56px;\n  .module {\n    .module-header {\n      .title {\n        font-size: 16px;\n        font-weight: 700;\n        line-height: 24px;\n        color: #333b6a;\n      }\n      .desc {\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 21px;\n        color: #718098;\n      }\n    }\n    .module-content {\n      .kyc-completed {\n        padding-top: 100px;\n        padding-bottom: 100px;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        .image-container {\n          max-width: 90%;\n        }\n        .desc {\n          font-size: 14px;\n          font-weight: 400;\n          line-height: 21px;\n          color: #718098;\n          margin-top: 16px;\n          padding: 0 10px;\n          text-align: center;\n        }\n      }\n      .step {\n        margin-top: 44px;\n        justify-content: center;\n        margin-left: -10px;\n        margin-right: -10px;\n        display: none;\n        position: relative;\n        &.active {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        .item {\n          box-sizing: border-box;\n          padding-left: 10px;\n          padding-right: 10px;\n          width: 50%;\n          margin-bottom: 20px;\n          max-width: 403px;\n          &.item-images {\n            width: 33.33%;\n            .choose_img {\n              padding-bottom: 18px;\n              position: relative;\n              .image-container {\n                width: 100%;\n                position: relative;\n                border: 1px solid #dfe9f5;\n                background: #ffffff;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                padding-bottom: 57%;\n                border-radius: 8px;\n                overflow: hidden;\n                img {\n                  position: absolute;\n                  width: 101%;\n                  height:101%;\n                  top: -1px;\n                  left: -1px;\n                  object-fit: cover;\n                  object-position: center;\n                }\n              }\n              .button-upload {\n                position: absolute;\n                left: 50%;\n                bottom: 0px;\n                transform: translateX(-50%);\n                width: 36px;\n                height: 36px;\n                border-radius: 50%;\n                /* display: flex;\n                justify-content: center;\n                align-items: center; */\n                background: #00cb82;\n                cursor: pointer;\n                transition: all 0.3s;\n                label {\n                  cursor: pointer;\n                  border-radius: 50%;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  position: absolute;\n                  width: 100%;\n                  height: 100%;\n                  top: 0;\n                  left: 0;\n                  input {\n                    display: none;\n                  }\n                  svg {\n                    color: white;\n                  }\n                }\n                &:hover {\n                  box-shadow: 0px 1px 13px 2px rgb(0, 0, 0, 23%);\n                }\n              }\n            }\n            .desc {\n              font-size: 12px;\n              font-weight: 400;\n              line-height: 18px;\n              color: #718098;\n              margin-top: 21px;\n              text-align: center;\n            }\n          }\n        }\n      }\n\n      .button-group {\n        margin-top: 65px;\n        display: flex;\n        justify-content: center;\n        button {\n          margin-left: 8px;\n          margin-right: 9px;\n        }\n      }\n    }\n  }\n"]))),l=a(69),u=a(33),h=a(9),g=a(47),b="data:image/png;base64,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",j="data:image/png;base64,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",p=a(8),A=a(125),x=a(275),O=a(56),f=a(272),C=a(31),v=a(271),B=a(85),T=a(32),I="USER_GET_KYC_STATUS_ACCOUNT",S=function(){return function(e){Object(T.c)({method:"GET",url:u.a.USER.USER_INFO,data:null}).then((function(n){e({type:I,payload:{data:null===n||void 0===n?void 0:n.data}})})).catch((function(e){}))}},M=a(3),N={statusAccount:{}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;return n.type===I?Object(M.a)(Object(M.a)({},e),{},{statusAccount:n.payload.data}):Object(M.a)({},e)},L=function(e){return e.UserKyc},R=a(2),P=[{name:"Trang ch\u1ee7"},{name:"Qu\u1ea3n l\xfd th\xf4ng tin"},{name:"X\xe1c minh danh t\xednh (KYC)"}],Y=[{name:"Albania",code:"AL"},{name:"\xc5land Islands",code:"AX"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas (the)",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia (Plurinational State of)",code:"BO"},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory (the)",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cabo Verde",code:"CV"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cayman Islands (the)",code:"KY"},{name:"Central African Republic (the)",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands (the)",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros (the)",code:"KM"},{name:"Congo (the Democratic Republic of the)",code:"CD"},{name:"Congo (the)",code:"CG"},{name:"Cook Islands (the)",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cura\xe7ao",code:"CW"},{name:"Cyprus",code:"CY"},{name:"Czechia",code:"CZ"},{name:"C\xf4te d'Ivoire",code:"CI"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic (the)",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Eswatini",code:"SZ"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (the) [Malvinas]",code:"FK"},{name:"Faroe Islands (the)",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories (the)",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia (the)",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Holy See (the)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran (Islamic Republic of)",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea (the Democratic People's Republic of)",code:"KP"},{name:"Korea (the Republic of)",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People's Democratic Republic (the)",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands (the)",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia (Federated States of)",code:"FM"},{name:"Moldova (the Republic of)",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montenegro",code:"ME"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands (the)",code:"NL"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger (the)",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands (the)",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestine, State of",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines (the)",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Republic of North Macedonia",code:"MK"},{name:"Romania",code:"RO"},{name:"Russian Federation (the)",code:"RU"},{name:"Rwanda",code:"RW"},{name:"R\xe9union",code:"RE"},{name:"Saint Barth\xe9lemy",code:"BL"},{name:"Saint Helena, Ascension and Tristan da Cunha",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Martin (French part)",code:"MF"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia",code:"RS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Sint Maarten (Dutch part)",code:"SX"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"South Sudan",code:"SS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan (the)",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan (Province of China)",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands (the)",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates (the)",code:"AE"},{name:"United Kingdom of Great Britain and Northern Ireland (the)",code:"GB"},{name:"United States Minor Outlying Islands (the)",code:"UM"},{name:"United States of America (the)",code:"US"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela (Bolivarian Republic of)",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands (British)",code:"VG"},{name:"Virgin Islands (U.S.)",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],y=[],k=0;k<Y.length;k++)y.push({value:Y[k].name,label:Y[k].name});var K=[{value:"passport",label:"H\u1ed9 chi\u1ebfu"},{value:"cmnd",label:"CMND"},{value:"gplx",label:"Gi\u1ea5y ph\xe9p l\xe1i xe"},{value:"cccd",label:"C\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n"}],X=[".jpg",".jpeg",".bmp",".gif",".png"];var E=function(e,n,a){if(function(e){var n=e.target.value;if(n.length>0){for(var a=!1,c=0;c<X.length;c++){var d=X[c];if(n.substr(n.length-d.length,d.length).toLowerCase()===d.toLowerCase()){a=!0;break}}return a}}(e)){var c=e.target.files[0];!function(e,n){if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(e){n(e.target.result)},a.readAsDataURL(e.files[0])}}(e.target,a),n(c),Object(B.a)({name:"Ch\u1ecdn \u1ea3nh th\xe0nh c\xf4ng",icon:"success"})}else Object(B.a)({name:"Ph\u1ea3i l\xe0 file \u1ea3nh (jpg, jpeg, .gif, .png, .bmp)",icon:"error"})};function w(e){Object(o.a)(e),Object(m.a)("UserKyc",H);var n=Object(h.b)(),a=Object(h.c)(L).statusAccount,c=Object(t.useState)({value:"",label:"Ch\u1ecdn qu\u1ed1c gia"}),s=Object(d.a)(c,2),I=s[0],M=s[1],N=Object(t.useState)({value:"",label:"Ch\u1ecdn lo\u1ea1i gi\u1ea5y t\u1edd"}),Y=Object(d.a)(N,2),k=Y[0],X=Y[1],w=Object(t.useState)(""),U=Object(d.a)(w,2),G=U[0],V=U[1],Q=Object(t.useState)(""),F=Object(d.a)(Q,2),W=F[0],z=F[1],Z=Object(t.useState)(""),D=Object(d.a)(Z,2),J=D[0],q=D[1],_=Object(t.useState)(""),$=Object(d.a)(_,2),ee=$[0],ne=$[1],ae=Object(t.useState)(""),ce=Object(d.a)(ae,2),de=ce[0],oe=ce[1],te=Object(t.useState)(""),ie=Object(d.a)(te,2),me=ie[0],se=ie[1],re=Object(t.useState)(1),le=Object(d.a)(re,2),ue=le[0],he=le[1],ge=Object(g.b)(),be=ge.register,je=ge.handleSubmit,pe=ge.watch,Ae=pe("name"),xe=pe("idNumber"),Oe=pe("address"),fe=pe("job");return Object(t.useEffect)((function(){n(S())}),[n]),Object(R.jsx)(i.a,{children:Object(R.jsx)(l.a,{header:"Th\xf4ng tin c\xe1 nh\xe2n",links:P,children:Object(R.jsx)(r,{children:Object(R.jsxs)("div",{className:"module",children:[Object(R.jsxs)("div",{className:"module-header",children:[Object(R.jsx)("div",{className:"title",children:"X\xe1c minh danh t\xednh (KYC)"}),!a.kycCompleted&&Object(R.jsx)("div",{className:"desc",children:"Nh\u1eadp v\xe0o c\xe1c th\xf4ng tin theo y\xeau c\u1ea7u \u0111\u1ec3 ho\xe0n t\u1ea5t x\xe1c th\u1ef1c"})]}),a.kycCompleted?Object(R.jsx)("div",{className:"module-content",children:Object(R.jsxs)("div",{className:"kyc-completed",children:[Object(R.jsx)("div",{className:"image-container",children:Object(R.jsx)("img",{src:b,alt:""})}),Object(R.jsx)("div",{className:"desc",children:"B\u1ea1n \u0111\xe3 th\u1ef1c hi\u1ec7n x\xe1c minh danh t\xednh th\xe0nh c\xf4ng!"})]})}):a.infoCompleted?Object(R.jsx)("div",{className:"module-content",children:Object(R.jsxs)("div",{className:"kyc-completed",children:[Object(R.jsx)("div",{className:"image-container",children:Object(R.jsx)("img",{src:b,alt:""})}),Object(R.jsx)("div",{className:"desc",children:"B\u1ea1n \u0111\xe3 g\u1eedi th\xf4ng tin, vui l\xf2ng ch\u1edd x\xe1c nh\u1eadn t\u1eeb ng\u01b0\u1eddi qu\u1ea3n tr\u1ecb!"})]})}):Object(R.jsxs)("form",{className:"module-content",onSubmit:je((function(e){var a=e.name,c=e.idNumber,d=e.address,o=e.job,t=new FormData;t.append("name",a),t.append("idNumber",c),t.append("idType",k.value),t.append("address",d),t.append("country",I.value),t.append("job",o),t.append("imgUrl1",G),t.append("imgUrl2",W),t.append("imgUrl3",J),Object(T.c)({method:"POST",url:u.a.KYC.POST,data:t}).then((function(e){n(S()),Object(B.a)({name:"C\u1eadp nh\u1eadt th\xf4ng tin th\xe0nh c\xf4ng",icon:"success"})})).catch((function(e){Object(B.a)({name:e.message,icon:"error"})}))})),children:[Object(R.jsxs)("div",{className:"step step1 ".concat(1===ue?"active":""),children:[Object(R.jsx)("div",{className:"item",children:Object(R.jsx)(A.a.Wrapper,{label:"H\u1ecd & t\xean trong CMND",icon:Object(R.jsx)(p.M,{size:16}),children:Object(R.jsx)(A.a.Text,{placeholder:" ",name:"name",ref:be({required:!0})})})}),Object(R.jsx)("div",{className:"item",children:Object(R.jsx)(A.a.Wrapper,{isLabelOnTop:!0,label:"Qu\u1ed1c gia",icon:Object(R.jsx)(x.d,{size:16}),children:Object(R.jsx)(A.a.Select,{value:I,onChange:M,options:y})})}),Object(R.jsx)("div",{className:"item",children:Object(R.jsx)(A.a.Wrapper,{label:"\u0110\u1ecba ch\u1ec9",icon:Object(R.jsx)(p.C,{size:16}),children:Object(R.jsx)(A.a.Text,{placeholder:" ",name:"address",ref:be({required:!0})})})}),Object(R.jsx)("div",{className:"item",children:Object(R.jsx)(A.a.Wrapper,{label:"C\xf4ng vi\u1ec7c",icon:Object(R.jsx)(f.c,{size:16}),children:Object(R.jsx)(A.a.Text,{placeholder:" ",name:"job",ref:be({required:!0})})})})]}),Object(R.jsxs)("div",{className:"step step2 ".concat(2===ue?"active":""),children:[Object(R.jsx)("div",{className:"item item2",children:Object(R.jsx)(A.a.Wrapper,{isLabelOnTop:!0,label:"Lo\u1ea1i gi\u1ea5y t\u1edd",icon:Object(R.jsx)(O.a,{size:16}),children:Object(R.jsx)(A.a.Select,{value:k,onChange:X,options:K})})}),Object(R.jsx)("div",{className:"item item2",children:Object(R.jsx)(A.a.Wrapper,{label:"S\u1ed1 CMND",icon:Object(R.jsx)(p.E,{size:16}),children:Object(R.jsx)(A.a.Text,{placeholder:" ",name:"idNumber",ref:be({required:!0})})})})]}),Object(R.jsxs)("div",{className:"step step3 ".concat(3===ue?"active":""),children:[Object(R.jsxs)("div",{className:"item item-images",children:[Object(R.jsxs)("div",{className:"choose_img",children:[Object(R.jsx)("div",{className:"image-container",children:Object(R.jsx)("img",{src:ee||j,alt:""})}),Object(R.jsx)("div",{className:"button-upload",children:Object(R.jsxs)("label",{children:[Object(R.jsx)(v.c,{}),Object(R.jsx)("input",{type:"file",className:"input-hide",onChange:function(e){return E(e,V,ne)}})]})})]}),Object(R.jsx)("div",{className:"desc",children:"T\u1ea3i l\xean \u1ea3nh m\u1eb7t tr\u01b0\u1edbc CMND/CCCD/H\u1ed9 chi\u1ebfu/GPLX"})]}),Object(R.jsxs)("div",{className:"item item-images",children:[Object(R.jsxs)("div",{className:"choose_img",children:[Object(R.jsx)("div",{className:"image-container",children:Object(R.jsx)("img",{src:de||j,alt:""})}),Object(R.jsx)("div",{className:"button-upload",children:Object(R.jsxs)("label",{children:[Object(R.jsx)(v.c,{}),Object(R.jsx)("input",{type:"file",className:"input-hide",onChange:function(e){return E(e,z,oe)}})]})})]}),Object(R.jsx)("div",{className:"desc",children:"T\u1ea3i l\xean \u1ea3nh m\u1eb7t sau CMND/CCCD/H\u1ed9 chi\u1ebfu/GPLX"})]}),Object(R.jsxs)("div",{className:"item item-images",children:[Object(R.jsxs)("div",{className:"choose_img",children:[Object(R.jsx)("div",{className:"image-container",children:Object(R.jsx)("img",{src:me||j,alt:""})}),Object(R.jsx)("div",{className:"button-upload",children:Object(R.jsxs)("label",{children:[Object(R.jsx)(v.c,{}),Object(R.jsx)("input",{type:"file",className:"input-hide",onChange:function(e){return E(e,q,se)}})]})})]}),Object(R.jsx)("div",{className:"desc",children:"T\u1ea3i l\xean \u1ea3nh ch\u1ee5p CMND/CCCD/H\u1ed9 chi\u1ebfu/GPLX bao g\u1ed3m c\u1ea3 khu\xf4n m\u1eb7t, t\u1edd gi\u1ea5y ghi \u201cBVote - ng\xe0y\u201d"})]})]}),Object(R.jsxs)("div",{className:"button-group",children:[1!==ue&&Object(R.jsx)(C.a,{background:"white",color:"#718098",onClick:function(){he(ue-1)},children:"Quay l\u1ea1i"}),3!==ue&&Object(R.jsx)(R.Fragment,{children:1===ue&&Ae&&Oe&&fe&&""!==I.value||2===ue&&xe&&""!==k.value?Object(R.jsx)(C.a,{className:"next",type:"button",onClick:function(){he(ue+1)},children:"Ti\u1ebfp theo"}):""}),3===ue&&Object(R.jsx)(C.a,{className:"next",type:"submit",children:"X\xe1c nh\u1eadn"})]})]})]})})})})}n.default=Object(t.memo)(w)}}]);