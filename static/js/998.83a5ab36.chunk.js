"use strict";(self.webpackChunkproject_web_chat=self.webpackChunkproject_web_chat||[]).push([[998],{4998:function(e,a,t){t.r(a);var n=t(885),s=t(2791),c=t(7612),o=t(2592),i=t(4569),l=t.n(i),r=t(184);a.default=function(e){var a=e.list,t=100/Math.ceil(Math.sqrt(a.length)),i=(0,s.useState)(!1),d=(0,n.Z)(i,2),m=d[0],u=d[1],h=(0,s.useState)(""),g=(0,n.Z)(h,2),b=g[0],f=g[1];return(0,r.jsxs)("div",{className:"childMessage__listImg",children:[a.map((function(e,a){return-1!==e.indexOf("image")?(0,r.jsx)("img",{onClick:function(){return function(e){f(e),u(!0)}(e)},className:"messageImage__fit",src:e,alt:"",width:"".concat(t,"%"),height:"".concat(t,"%")},a):(0,r.jsx)("video",{controls:!0,src:e,alt:"",width:"".concat(t,"%"),height:"".concat(t,"%")},a)})),(0,r.jsxs)(c.Z,{size:"lg",centered:!0,show:m,onHide:function(){return u(!1)},className:"ImageMessage__modal-body",children:[(0,r.jsxs)(c.Z.Header,{className:"ImageMessage__modal-header",children:[(0,r.jsx)("div",{className:"flex-grow-1",children:(0,r.jsx)("i",{className:"bi bi-arrow-down-square ImageMessage__modalbtn-download",onClick:function(){l()({url:b,method:"GET",responseType:"blob"}).then((function(e){var a=window.URL.createObjectURL(new Blob([e.data])),t=document.createElement("a");t.href=a,t.setAttribute("download",(new Date).getTime()+".png"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)})).catch((function(e){return console.log(e)}))}})}),(0,r.jsx)("i",{className:"bi bi-x-lg ImageMessage__modalbtn-cancel",onClick:function(){f(""),u(!1)}})]}),(0,r.jsx)(o.Z,{src:b})]})]})}}}]);
//# sourceMappingURL=998.83a5ab36.chunk.js.map