(this["webpackJsonpkhmer-qoutes-chrome-extension"]=this["webpackJsonpkhmer-qoutes-chrome-extension"]||[]).push([[0],{132:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(70),c=n.n(r),s=(n(132),n(28)),a=n(121),l=n.n(a),d=n(6),u=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(l.a,{width:"100vw",height:"100vh",options:{background:{color:{value:"white"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#000000"},links:{color:"#000000",distance:150,enable:!0,opacity:.5,width:.5},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"line"},size:{random:!0,value:5}},detectRetina:!0}})})},h=n(72),b=n(71),j=n.n(b),f=(n(299),n(127)),g=function(e){var t=Object(o.useState)(!0),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("isParticle");r("true"===e)}),[]),Object(d.jsx)("div",{style:{padding:5},children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(d.jsx)("div",{children:Object(d.jsx)(f.a,{onChangeComplete:function(e){localStorage.setItem("bgColor","".concat(e.hex)),window.location.reload()}})}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{margin:5},children:Object(d.jsx)("p",{children:"Particle"})}),Object(d.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(d.jsx)("input",{type:"checkbox",checked:i,onChange:function(){window.localStorage.setItem("isParticle","".concat(!i)),r(!i),window.location.reload()}})})]}),Object(d.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(d.jsx)("button",{onClick:function(){localStorage.setItem("bgColor","white"),localStorage.setItem("isParticle","false"),window.location.reload()},children:"Reset"})})]})]})})},p=n(126),v=n.n(p),m=n.p+"static/media/logo-github.bdb19859.svg",x=n.p+"static/media/cog-outline.de75653e.svg";var w=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(),c=Object(s.a)(r,2),a=c[0],l=c[1],b=Object(o.useState)(!1),f=Object(s.a)(b,2),p=f[0],w=f[1];return Object(o.useEffect)((function(){var e=Math.floor(Math.random()*h.length);i(h[e]);var t=setInterval((function(){console.log("This will run every second!");var e=j()().locale("km").format("MMMM Do YYYY, h:mm:ss a");l(e)}),1e3);return function(){return clearInterval(t)}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{isOpen:p,children:Object(d.jsx)(g,{})})}),Object(d.jsx)("div",{style:{position:"fixed",zIndex:-1},children:Object(d.jsx)(u,{})}),Object(d.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(d.jsx)("p",{style:{fontSize:"1.5rem",fontWeight:400,textAlign:"center"},children:Object(d.jsx)("p",{children:null===n||void 0===n?void 0:n.quoteNameKH})}),Object(d.jsx)("p",{style:{fontSize:"1rem",fontWeight:500,textAlign:"center"},children:null===n||void 0===n?void 0:n.author})]}),Object(d.jsx)("div",{style:{position:"absolute",bottom:"1%",right:"1%"},children:Object(d.jsx)("img",{alt:"setting",id:"popup-trigger",onClick:function(){return w(!0)},style:{cursor:"pointer"},src:x,width:30,height:30})}),Object(d.jsx)("div",{style:{position:"absolute",bottom:"1%",left:"1%"},children:Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(d.jsx)("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",marginRight:5},onClick:function(){return window.open("https://github.com/AsurRaa/khmer-quotes-extension","_blank")},children:Object(d.jsx)("img",{alt:"icon",src:m,width:40,height:40})}),Object(d.jsxs)("div",{style:{},children:[Object(d.jsxs)("p",{style:{fontSize:12,padding:0,margin:0},children:["Powered by"," ",Object(d.jsx)("span",{onClick:function(){return window.open("https://asurraa.com","_blank")},style:{fontWeight:"bold",cursor:"pointer"},children:"AsurRaa"})]}),a]})]})})]})},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()},72:function(e){e.exports=JSON.parse('[{"quoteNameEN":"All our dreams can come true, if we have the courage to pursue them.","quoteNameKH":"\u179a\u17b6\u179b\u17cb\u1780\u17d2\u178f\u17b8\u179f\u17bb\u1794\u17b7\u1793\u17d2\u178f\u179a\u1794\u179f\u17cb\u1799\u17be\u1784\u17a2\u17b6\u1785\u1780\u17d2\u179b\u17b6\u1799\u1787\u17b6\u1780\u17b6\u179a\u1796\u17b7\u178f\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u1799\u17be\u1784\u1798\u17b6\u1793\u1797\u17b6\u1796\u1780\u17d2\u179b\u17b6\u17a0\u17b6\u1793\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u178f\u17b6\u1798\u179a\u1780\u1796\u17bd\u1780\u1782\u17c1\u17d4","author":"Walt Disney"},{"quoteNameKH":"\u1791\u17b9\u1780\u179a\u17c6\u1796\u17bb\u17c7\u178a\u178a\u17c2\u179b\u178a\u17c2\u179b\u1792\u17d2\u179c\u17be\u17b1\u17d2\u1799\u178a\u17c6\u17a1\u17bc\u1784\u1791\u1793\u17cb\u1792\u17d2\u179c\u17be\u17b1\u17d2\u1799\u179f\u17ca\u17bb\u178f\u179a\u17b9\u1784\u17d4 \u179c\u17b6\u1787\u17b6\u17a2\u17d2\u179c\u17b8\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1794\u17b6\u1793\u1792\u17d2\u179c\u17be\u17d4 \u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u1780\u17b6\u179b\u17c8\u1791\u17c1\u179f\u17c8\u1791\u17c1","quoteNameEN":"The same boiling water that softens the potato hardens the egg. It\u2019s what you\u2019re made of. Not the circumstances.","author":"Unknown"},{"quoteNameKH":"\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u179b\u17bf\u1793\u1785\u17bc\u179a\u1791\u17c5\u178f\u17c2\u1798\u17d2\u1793\u17b6\u1780\u17cb\u17af\u1784\u17d4 \u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u1792\u17d2\u179c\u17be\u178a\u17c6\u178e\u17be\u179a\u1791\u17c5\u1786\u17d2\u1784\u17b6\u1799\u1785\u17bc\u179a\u1791\u17c5\u1787\u17b6\u1798\u17bd\u1799\u1782\u17d2\u1793\u17b6\u17d4","quoteNameEN":"If you want to go fast, go alone. If you want to go far, go together.","author":"African proverb"}]')}},[[417,1,2]]]);