(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{102:function(e,t){},105:function(e,t,n){},108:function(e,t,n){},121:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},138:function(e,t,n){},150:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},157:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){},165:function(e,t,n){},167:function(e){e.exports={}},172:function(e,t,n){e.exports=function(){return new Worker(n.p+"telegram.worker.52812a8cb198fce0ad24.js")}},173:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),i=n.n(o),s=n(28),u=n.n(s),l=n(14),p=n(179),d=n(7),m=n(8),b=n(11),h=n(10),f=n(12),O=n(177),g=(n(86),n(16)),j=n(24),v=n(111),y=n(17),E=n(13),w=n.n(E),x=function(e,t){return i.a.createElement("svg",{className:t,focusable:"false"},i.a.createElement("use",{xlinkHref:"#".concat(e)}))},C=n(36),k=n.n(C),T=n(37),N=n.n(T),A=new k.a({id:"logo",use:"logo-usage",viewBox:"0 0 240 240",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" id="logo"><defs><linearGradient id="logo_a" x1=".667" y1=".167" x2=".417" y2=".75"><stop stop-color="#37aee2" offset="0" /><stop stop-color="#1e96c8" offset="1" /></linearGradient><linearGradient id="logo_b" x1=".66" y1=".437" x2=".851" y2=".802"><stop stop-color="#eff7fc" offset="0" /><stop stop-color="#fff" offset="1" /></linearGradient></defs><circle cx="120" cy="120" r="120" fill="url(#logo_a)" /><path fill="#c8daea" d="m98 175c-3.8876 0-3.227-1.4679-4.5678-5.1695L82 132.2059 170 80" /><path fill="#a9c9dd" d="m98 175c3 0 4.3255-1.372 6-3l16-15.558-19.958-12.035" /><path fill="url(#logo_b)" d="m100.04 144.41 48.36 35.729c5.5185 3.0449 9.5014 1.4684 10.876-5.1235l19.685-92.763c2.0154-8.0802-3.0801-11.745-8.3594-9.3482l-115.59 44.571c-7.8901 3.1647-7.8441 7.5666-1.4382 9.528l29.663 9.2583 68.673-43.325c3.2419-1.9659 6.2173-0.90899 3.7752 1.2584" /></symbol>'}),_=(N.a.add(A),A),S=function(e){var t=e.className;return x(_.id,t)},P=(n(105),function(e){var t=e.title,n=w()("rt-logo");return i.a.createElement("div",{className:n()},i.a.createElement(S,{className:n("icon")}),i.a.createElement("div",{className:n("title")},i.a.createElement(y.a,{id:"components.logo.title",defaultMessage:"Telegram"})),t&&i.a.createElement("div",{className:n("subtitle")},t))}),I=(n(108),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"rt-app-loading"},i.a.createElement("div",{className:"rt-app-loading__body"},i.a.createElement(P,{title:i.a.createElement(y.a,{id:"components.app-loading.title",defaultMessage:"a new era of messaging"})})))}}]),t}(o.PureComponent)),D=Object(l.b)(function(e){return{telegram:e.telegram,app:e.app}})(function(e){var t=e.component,n=e.telegram,a=e.app,r=Object(j.a)(e,["component","telegram","app"]),c=t;return i.a.createElement(v.a,Object.assign({},r,{render:function(e){return!n.isReady||a.fetching?i.a.createElement(I,null):i.a.createElement(c,e)}}))}),R=n(40),M=n(174),L={PHONE_NUMBER:"authorizationStateWaitPhoneNumber",CODE:"authorizationStateWaitCode",PASSWORD:"authorizationStateWaitPassword",AUTHORIZED:"authorizationStateReady",LOGGING_OUT:"authorizationStateLoggingOut",LOADING:"authorizationStateWaitEncryptionKey",WAIT_TDLIB:"authorizationStateWaitTdlibParameters",CLOSED:"authorizationStateClosed"},U={UPDATE_CONNECTION_STATE:"updateConnectionState",UPDATE_AUTHORIZATION_STATE:"updateAuthorizationState",UPDATE_OPTION:"updateOption",UPDATE_CHAT_READ_INBOX:"updateChatReadInbox",READY:"ok"},z="connectionStateConnecting",W="connectionStateReady",B=n(21),H=n(3),F=Object(H.createAction)("@@rt/auth/logout/fetching"),G=Object(H.createAction)("@@rt/auth/logout/success"),Z=Object(H.createAction)("@@rt/auth/logout/failure"),Y=Object(H.createAction)("@rt/auth/login/success"),J=Object(H.createAction)("@rt/auth/set-phone-number/fetching",function(e){return function(t){return e({phone:t})}}),X=Object(H.createAction)("@rt/auth/set-phone-number/success"),K=Object(H.createAction)("@rt/auth/set-phone-number/failure"),V=Object(H.createAction)("@rt/auth/set-code/fetching",function(e){return function(t){return e({code:t})}}),$=Object(H.createAction)("@rt/auth/set-code/success"),q=Object(H.createAction)("@rt/auth/set-code/failure"),Q=Object(H.createAction)("@rt/auth/resend-code/fetching"),ee=Object(H.createAction)("@rt/auth/resend-code/success"),te=Object(H.createAction)("@rt/auth/resend-code/failure"),ne=Object(H.createAction)("@rt/auth/check-password/fetching",function(e){return function(t){return e({password:t})}}),ae=Object(H.createAction)("@rt/auth/check-password/success"),re=Object(H.createAction)("@rt/auth/check-password/failure"),ce=n(33),oe=n(30),ie=n.n(oe),se=new k.a({id:"spinner",use:"spinner-usage",viewBox:"0 0 100 100",content:'<symbol class="lds-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" id="spinner"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect></symbol>'}),ue=(N.a.add(se),se),le=function(e){var t=e.className;return x(ue.id,t)},pe=(n(121),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.loading,r=Object(j.a)(t,["className","loading"]),c=w()("rt-button"),o=ie()((e={},Object(ce.a)(e,c.is({loading:Boolean(a)}),!0),Object(ce.a)(e,n,n),e));return i.a.createElement("button",Object.assign({},r,{className:o}),this.props.children,a&&i.a.createElement(le,{className:c("loading-icon")}))}}]),t}(o.PureComponent)),de=(n(124),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.errorMessage,a=e.validate,r=Object(j.a)(e,["name","errorMessage","validate"]),c=w()("rt-input");return i.a.createElement(B.a,{name:t,validate:a},function(e){var t=e.input,a=e.meta,o=a.touched&&a.error;return i.a.createElement("div",{className:c()},i.a.createElement("input",Object.assign({},t,r,{className:c("input")})),o&&i.a.createElement("div",{className:c("error")},n||a.error))})}}]),t}(o.PureComponent)),me=Object(l.b)(function(e){return e.auth},function(e){return Object(g.b)({logout:F},e)})(a=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.logout,a=e.isLoggingOut;return i.a.createElement(pe,{className:"ri-logout-button",onClick:n,loading:a},t||i.a.createElement(y.a,{id:"components.logout-button.title",defaultMessage:"Logout"}))}}]),t}(o.PureComponent))||a,be=(n(126),Object(l.b)(function(e){return e.auth},function(e){return Object(g.b)({setCode:V,resendCode:Q},e)})(r=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t=e.code;t&&n.props.setCode(t)},n.resendCode=function(){n.props.resendCode()},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=w()("rt-code-form");return i.a.createElement(B.b,{onSubmit:this.onSubmit},function(n){var a=n.handleSubmit;return i.a.createElement("form",{onSubmit:a,className:t()},i.a.createElement("h1",{className:"rt-h1"},i.a.createElement(y.a,{id:"components.code-form.title",defaultMessage:"Enter code"})),i.a.createElement("div",{className:t("input")},i.a.createElement(de,{name:"code",type:"number",autoFocus:!0})),i.a.createElement("div",{className:t("actions")},i.a.createElement(pe,{type:"button",onClick:e.resendCode},i.a.createElement(y.a,{id:"components.code-form.resend",defaultMessage:"Resend"})),i.a.createElement(pe,{className:"rt-button--primary",loading:e.props.isFetching},i.a.createElement(y.a,{id:"components.code-form.submit",defaultMessage:"Next"}))),i.a.createElement(me,{title:i.a.createElement(y.a,{id:"components.code-form.logout",defaultMessage:"Use different number?"})}))})}}]),t}(o.PureComponent))||r),he=Object(l.b)(function(e){return e.auth},function(e){return Object(g.b)({checkPassword:ne},e)})(c=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t=e.password;t&&n.props.checkPassword(t)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(B.b,{onSubmit:this.onSubmit},function(e){var t=e.handleSubmit;return i.a.createElement("form",{onSubmit:t,className:"rt-password-form"},i.a.createElement("h1",null,"Enter password"),i.a.createElement(de,{name:"password",type:"password"}),i.a.createElement("button",null,"submit"))})}}]),t}(o.PureComponent))||c,fe=n(67),Oe=n(9),ge=n(74),je="ZZ",ve=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){(0,n.props.onChange)(e.value===je?void 0:e.value)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=w()("rt-phone-number-country-select"),t=this.props,n=t.value,a=t.options,r=t.onBlur,c=t.onFocus,o=a.map(function(e){return Object(Oe.a)({},e,{value:e.value||je})}),s=o.find(function(e){return e.value===n});return i.a.createElement(i.a.Fragment,null,s&&i.a.createElement(s.icon,{value:s.value}),i.a.createElement("div",{className:e()},i.a.createElement(ge.a,{value:s,className:e("select"),options:o,onBlur:r,onFocus:c,onChange:this.onChange})))}}]),t}(o.PureComponent);ve.defaultProps={value:je};n(138);var ye,Ee,we,xe,Ce,ke,Te,Ne=Object(l.b)(function(e){return{country:e.app.countryCode}})(ye=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).ref=i.a.createRef(),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.ref.current&&this.ref.current.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.country,r=w()("rt-phone-number-input");return i.a.createElement(B.a,{name:n},function(t){var n=t.input;return i.a.createElement(fe.a,{ref:e.ref,value:n.value,className:r(),inputClassName:r("input").toString(),international:!1,country:a,onChange:n.onChange,countrySelectComponent:ve})})}}]),t}(o.PureComponent))||ye,Ae=(n(150),Object(l.b)(function(e){return e.auth},function(e){return Object(g.b)({setPhoneNumber:J},e)})(Ee=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t=e.phone;t&&n.props.setPhoneNumber(t)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.isFetching;return i.a.createElement(B.b,{onSubmit:this.onSubmit},function(t){var n=t.handleSubmit;return i.a.createElement("form",{onSubmit:n,className:"rt-phone-form"},i.a.createElement("div",{className:"rt-phone-form__header"},i.a.createElement(P,{title:i.a.createElement(y.a,{id:"components.phone-form.subtitle",defaultMessage:"Welcome to the web application"})})),i.a.createElement("div",{className:"rt-phone-form__body"},i.a.createElement(Ne,{name:"phone"}),i.a.createElement(pe,{className:"rt-phone-form__submit rt-button--primary",loading:e},i.a.createElement(y.a,{id:"components.phone-form.submit",defaultMessage:"Next"}))))})}}]),t}(o.PureComponent))||Ee),_e=(n(153),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=w()("rt-login-form");return i.a.createElement("div",{className:e()},this.renderForm())}},{key:"renderForm",value:function(){var e=this.props.state;switch(e){case L.PHONE_NUMBER:return i.a.createElement(Ae,null);case L.CODE:return i.a.createElement(be,null);case L.PASSWORD:return i.a.createElement(he,null);default:return e}}}]),t}(o.PureComponent)),Se=(n(155),Object(l.b)(function(e){return e.auth})(we=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=w()("rt-login"),t=this.props,n=t.authState;return t.isAuthorized?i.a.createElement(M.a,{to:"/"}):i.a.createElement("div",{className:e()},i.a.createElement(y.a,{id:"common.pages.login.title",defaultMessage:"Telegram | Sign in"},function(e){return i.a.createElement(R.Helmet,null,i.a.createElement("title",null,e))}),i.a.createElement("div",{className:e("body")},i.a.createElement(_e,{state:n})))}}]),t}(o.Component))||we),Pe=n(112),Ie=Object(H.createAction)("@rt/chats/get/fetching",function(e){return function(t){return e({params:t})}}),De=Object(H.createAction)("@rt/chats/get/success",function(e){return function(t){return e({chats:t})}}),Re=Object(H.createAction)("@rt/chats/get/failure"),Me=Object(H.createAction)("@rt/chats/chat-get/fetching",function(e){return function(t){return e({chatId:t})}}),Le=Object(H.createAction)("@rt/chats/chat-get/success",function(e){return function(t){return e({chat:t})}}),Ue=Object(H.createAction)("@rt/chats/chat-get/failure"),ze=n(69),We=function(e){return e.chats},Be=(n(157),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"getContent",value:function(){var e=this.props.message;return e.content.text?e.content.text.text:"not text"}},{key:"render",value:function(){var e=w()("rt-last-message");return i.a.createElement("div",{className:e()},this.getContent())}}]),t}(o.PureComponent)),He=Object(l.b)(function(e,t){return{chat:(n=t.chatId,Object(ze.a)(We,function(e){return e.chats.get(n)}))(e)};var n},function(e){return Object(g.b)({getChat:Me},e)})(xe=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chat,n=e.chatId;t||this.props.getChat(n)}},{key:"render",value:function(){var e=w()("rt-dialog-preview"),t=this.props.chat||{},n=t.title,a=t.unread_count,r=t.last_message;return i.a.createElement("div",{className:e()},i.a.createElement("div",{className:e("photo")}),i.a.createElement("div",{className:e("title")},n),r&&i.a.createElement("div",{className:e("message")},i.a.createElement(Be,{message:r})),a>0&&i.a.createElement("div",{className:e("unread")},a))}}]),t}(o.PureComponent))||xe,Fe=(n(160),Object(l.b)(function(e){return{chats:e.chats}})(Ce=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=w()("rt-chat"),t=this.props.chats.chatIds;return i.a.createElement("div",{className:e()},i.a.createElement("div",{className:e("dialogs")},t.map(function(e){return i.a.createElement(He,{key:e,chatId:e})})),i.a.createElement("div",{className:e("body")}))}}]),t}(o.PureComponent))||Ce),Ge=n(180),Ze=(n(162),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=w()("rt-menu");return i.a.createElement("div",{className:e()},i.a.createElement("div",{className:e("items")},i.a.createElement(Ge.a,{to:"/"},"Chat"),i.a.createElement(Ge.a,{to:"/settings"},"Settings")))}}]),t}(o.PureComponent)),Ye=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=w()("rt-settings");return i.a.createElement("div",{className:e()},i.a.createElement(me,null))}}]),t}(o.PureComponent),Je=(n(165),Object(l.b)(null,function(e){return Object(g.b)({getChats:Ie},e)})(ke=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getChats({limit:25})}},{key:"render",value:function(){var e=w()("rt-messenger");return i.a.createElement("div",{className:e()},i.a.createElement(y.a,{id:"common.pages.messenger.title",defaultMessage:"Telegram"},function(e){return i.a.createElement(R.Helmet,null,i.a.createElement("title",null,e))}),i.a.createElement("div",{className:e("body")},i.a.createElement(Ze,null),i.a.createElement(O.a,null,i.a.createElement(Pe.a,{path:"/",exact:!0,component:Fe}),i.a.createElement(Pe.a,{path:"/settings",exact:!0,component:Ye}))))}}]),t}(o.PureComponent))||ke),Xe=n(178),Ke=Object(l.b)(function(e){return e})(function(e){var t=e.component,n=e.telegram,a=e.auth,r=e.app,c=Object(j.a)(e,["component","telegram","auth","app"]),o=t;return i.a.createElement(v.a,Object.assign({},c,{render:function(e){return!n.isReady||r.fetching||a.isConnecting?i.a.createElement(I,null):a.isAuthorized?i.a.createElement(o,e):i.a.createElement(Xe.a,{to:"/login"})}}))}),Ve=Object(H.createAction)("@rt/app/get-country-code/fetching"),$e=Object(H.createAction)("@rt/app/get-country-code/success",function(e){return function(t){return e({countryCode:t})}}),qe=Object(H.createAction)("@rt/app/get-country-code/failure"),Qe=Object(l.b)(function(e){return e.app},function(e){return Object(g.b)({getCountryCode:Ve},e)},null,{pure:!1})(Te=function(e){function t(e){var n;return Object(d.a)(this,t),n=Object(b.a)(this,Object(h.a)(t).call(this,e)),e.countryCode||e.getCountryCode(),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"rt-app"},i.a.createElement(O.a,null,i.a.createElement(D,{path:"/login",exact:!0,component:Se}),i.a.createElement(Ke,{path:"/",component:Je})))}}]),t}(o.Component))||Te,et=n(75),tt=n(70);Object(y.c)(Object(et.a)(tt));var nt={en:n(167)},at=function(e){return e.children};var rt=Object(l.b)(function(){return{locale:"en",messages:Object(Oe.a)({},nt.en,nt.en)}})(y.b),ct=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ot(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var it=n(71),st=n(41),ut="dddbb8e6acd44fdd6840e15c58a2ff45";var lt={apiId:"664453",apiHash:ut,isLoggerEnabled:!0,useTestDC:!1},pt=Object(Oe.a)({},lt,{isLoggerEnabled:!1}),dt=Object(Oe.a)({},lt);dt=Object(Oe.a)({},pt);var mt={fetching:!1,countryCode:"US"},bt=Object(H.createAction)("@@rt/telegram/send-message/fetching",function(e){return function(t){return e(t)}}),ht=Object(H.createAction)("@@rt/telegram/send-message/failure"),ft=Object(H.createAction)("@@rt/telegram/send-message/success"),Ot=Object(H.createAction)("@rt/telegram/receive-message",function(e){return function(t){return e(t)}}),gt={isAuthorized:!1,isRegistered:!1,isConnecting:!0,isLoggingOut:!1,isFetching:!1,error:null,authState:null},jt={isFetching:!1,chats:new Map,chatIds:[]},vt={isConnecting:!0,isReady:!1,options:{}},yt=Object(g.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(H.getType)(Ve):return Object(Oe.a)({},e,{fetching:!0});case Object(H.getType)($e):var n=t.payload.countryCode.toUpperCase();return Object(Oe.a)({},e,{fetching:!1,countryCode:n||mt.countryCode});case Object(H.getType)(qe):return Object(Oe.a)({},e,{fetching:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(H.getType)(F):return Object(Oe.a)({},e,{isLoggingOut:!0});case Object(H.getType)(G):return Object(Oe.a)({},e,{isLoggingOut:!1,isAuthorized:!1});case Object(H.getType)(Z):return Object(Oe.a)({},e,{isLoggingOut:!1});case Object(H.getType)(Y):return Object(Oe.a)({},e,{isAuthorized:!0});case Object(H.getType)(V):case Object(H.getType)(J):return Object(Oe.a)({},e,{isFetching:!0});case Object(H.getType)($):case Object(H.getType)(X):return Object(Oe.a)({},e,{isFetching:!1});case Object(H.getType)(q):case Object(H.getType)(K):return Object(Oe.a)({},e,{isFetching:!1});case Object(H.getType)(Ot):var n=t.payload.data;if(n["@type"]===U.UPDATE_AUTHORIZATION_STATE)switch(n.authorization_state["@type"]){case L.LOADING:case L.WAIT_TDLIB:return Object(Oe.a)({},e,{isConnecting:!0});case L.AUTHORIZED:return Object(Oe.a)({},e,{isConnecting:!1,isAuthorized:!0});default:return Object(Oe.a)({},e,{isConnecting:!1,authState:n.authorization_state["@type"]})}return e;default:return e}},telegram:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(H.getType)(Ot):var n=t.payload.data;switch(n["@type"]){case U.UPDATE_CONNECTION_STATE:switch(n.state["@type"]){case z:return Object(Oe.a)({},e,{isConnecting:!0});case W:return Object(Oe.a)({},e,{isConnecting:!1});default:return e}case U.READY:return n["@extra"]&&"setTdlibParameters"===n["@extra"]["@type"]?Object(Oe.a)({},e,{isReady:!0}):e;case U.UPDATE_OPTION:var a=e.options;return a[n.name]=n.value.value,Object(Oe.a)({},e,{options:a});default:return e}default:return e}},chats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(H.getType)(Ie):return Object(Oe.a)({},e,{isFetching:!0});case Object(H.getType)(Le):var n=t.payload.chat,a=e.chats;return a.set(n.id,n),Object(Oe.a)({},e,{chats:new Map(a)});case Object(H.getType)(De):return Object(Oe.a)({},e,{chatIds:t.payload.chats});case Object(H.getType)(Ot):var r=t.payload.data;switch(r["@type"]){case U.UPDATE_CHAT_READ_INBOX:var c=e.chats,o=c.get(r.chat_id);if(o){var i=Object(Oe.a)({},o,{unread_count:r.unread_count});c.set(i.id,i),c=new Map(c)}return Object(Oe.a)({},e,{chats:c});default:return e}default:return e}}}),Et=n(6),wt=n.n(Et),xt=n(5),Ct=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,null,[{key:"getCountryCode",value:function(){return fetch("https://ip.nf/me.json").then(function(e){return e.json()}).then(function(e){return e.ip.country_code})}}]),e}(),kt=wt.a.mark(Nt),Tt=wt.a.mark(At);function Nt(){var e;return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ct.getCountryCode();case 3:return e=t.sent,t.next=6,Object(xt.c)($e(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(xt.c)(qe());case 12:case"end":return t.stop()}},kt,this,[[0,8]])}function At(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.d)(Object(H.getType)(Ve),Nt)]);case 2:case"end":return e.stop()}},Tt,this)}var _t,St=n(72),Pt=n.n(St),It=wt.a.mark(zt),Dt=wt.a.mark(Wt),Rt=wt.a.mark(Bt),Mt=wt.a.mark(Gt),Lt=n(172),Ut=new Map;function zt(){var e;return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_t=new Lt,Object(st.b)(function(e){return _t.onmessage=function(t){e(Ot({data:t.data}))},_t.terminate});case 2:return e=t.sent,t.next=5,Object(xt.d)(e,Wt);case 5:case"end":return t.stop()}},It,this)}function Wt(e){var t,n,a;return wt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return(t=e.payload.data)&&t["@extra"]&&(n=t["@extra"].messageId,(a=Ut.get(n))&&("error"===t["@type"]?a.reject(e):a.resolve(e))),r.next=4,Object(xt.c)(e);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}},Dt,this)}function Bt(e){return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(_t){t.next=2;break}throw new Error("Worker is not yet ready");case 2:return t.prev=2,t.next=5,Ht(e.payload);case 5:Object(xt.c)(ft()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),Object(xt.c)(ht());case 11:case"end":return t.stop()}},Rt,this,[[2,8]])}var Ht=function(e){return console.warn("Send message:",e),new Promise(function(t,n){var a=Pt.a.v4();Ut.set(a,{resolve:t,reject:n}),_t.postMessage({type:"send",payload:Object(Oe.a)({},e,{"@extra":{messageId:a}})})})};function Ft(e){switch(e.payload.data["@type"]){case"updateAuthorizationState":e.payload.data.authorization_state["@type"]===L.AUTHORIZED&&_t.postMessage({type:"send",payload:{"@type":"setOption",name:"online",value:{"@type":"optionValueBoolean",value:!0}}})}}function Gt(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)(zt),Object(xt.d)(Object(H.getType)(Ot),Ft),Object(xt.d)(Object(H.getType)(bt),Bt)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},Mt,this)}var Zt=wt.a.mark(qt),Yt=wt.a.mark(Qt),Jt=wt.a.mark(en),Xt=wt.a.mark(tn),Kt=wt.a.mark(nn),Vt=wt.a.mark(an),$t=wt.a.mark(rn);function qt(e){return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.payload.data["@type"],t.next=t.t0===U.UPDATE_AUTHORIZATION_STATE?3:8;break;case 3:if(e.payload.data.authorization_state["@type"]!==L.AUTHORIZED){t.next=7;break}return t.next=7,Object(xt.c)(Y());case 7:return t.abrupt("break",8);case 8:case"end":return t.stop()}},Zt,this)}function Qt(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ht({"@type":"logOut"});case 3:return e.next=5,Object(xt.c)(G());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(xt.c)(Z());case 11:case"end":return e.stop()}},Yt,this,[[0,7]])}function en(e){return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ht({"@type":"setAuthenticationPhoneNumber",phone_number:e.payload.phone});case 3:return t.next=5,Object(xt.c)(X());case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(xt.c)(K());case 11:case"end":return t.stop()}},Jt,this,[[0,7]])}function tn(e){return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ht({"@type":"checkAuthenticationCode",code:e.payload.code});case 3:return t.next=5,Object(xt.c)($());case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(xt.c)(q());case 11:case"end":return t.stop()}},Xt,this,[[0,7]])}function nn(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ht({"@type":"resendAuthenticationCode"});case 3:return e.next=5,Object(xt.c)(ee());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(xt.c)(te());case 11:case"end":return e.stop()}},Kt,this,[[0,7]])}function an(e){return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ht({"@type":"checkAuthenticationPassword",password:e.payload.password});case 3:return t.next=5,Object(xt.c)(ae());case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(xt.c)(re());case 11:case"end":return t.stop()}},Vt,this,[[0,7]])}function rn(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.d)(Object(H.getType)(Ot),qt),Object(xt.d)(Object(H.getType)(J),en),Object(xt.d)(Object(H.getType)(V),tn),Object(xt.d)(Object(H.getType)(Q),nn),Object(xt.d)(Object(H.getType)(ne),an),Object(xt.d)(Object(H.getType)(F),Qt)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},$t,this)}var cn="9223372036854775807",on=wt.a.mark(ln),sn=wt.a.mark(pn),un=wt.a.mark(dn);function ln(e){var t,n,a;return wt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.params,r.prev=1,r.next=4,Ht({"@type":"getChats",limit:t.limit,offset_order:t.offsetOrder||cn,offset_chat_id:t.offsetChatId||0});case 4:return n=r.sent,a=n.payload,r.next=8,Object(xt.c)(De(a.data.chat_ids));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(xt.c)(Re());case 14:case"end":return r.stop()}},on,this,[[1,10]])}function pn(e){var t,n,a;return wt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.chatId,r.prev=1,r.next=4,Ht({"@type":"getChat",chat_id:t});case 4:return n=r.sent,a=n.payload,r.next=8,Object(xt.c)(Le(a.data));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(xt.c)(Ue());case 14:case"end":return r.stop()}},sn,this,[[1,10]])}function dn(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.d)(Object(H.getType)(Ie),ln),Object(xt.d)(Object(H.getType)(Me),pn)]);case 2:case"end":return e.stop()}},un,this)}var mn=wt.a.mark(bn);function bn(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)(At),Object(xt.b)(Gt),Object(xt.b)(rn),Object(xt.b)(dn)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},mn,this)}var hn,fn=Object(it.createLogger)({predicate:function(){return dt.isLoggerEnabled}}),On=Object(st.a)(),gn=document.getElementById("root"),jn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(g.d)(yt,e,Object(g.a)(fn,On));On.run(bn);return t}();hn=Qe,u.a.render(i.a.createElement(l.a,{store:jn},i.a.createElement(rt,{textComponent:at},i.a.createElement(p.a,null,i.a.createElement(hn,null)))),gn),function(){var e="rt-tab-mode";function t(){document.body.classList.remove(e),document.removeEventListener("mousemove",t)}document.addEventListener("keydown",function(n){"Tab"===n.key&&document.body.classList.add(e),document.addEventListener("mousemove",t)})}(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");ct?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ot(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ot(t,e)})}}()},63:function(e,t){},77:function(e,t,n){e.exports=n(173)},86:function(e,t,n){},96:function(e,t){}},[[77,2,1]]]);
//# sourceMappingURL=main.b18a0a49.chunk.js.map