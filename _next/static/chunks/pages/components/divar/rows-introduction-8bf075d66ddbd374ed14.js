(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{1778:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(7294),o=function(t){var n=r.useRef(t);return r.useEffect((function(){n.current=t})),n},i=function(t,n){void 0===n&&(n=!0);var e=t.target,i=void 0===e?null:e,a=t.eventType,c=t.handler,l=t.options,u=o(l),s=o(c);r.useEffect((function(){var t,e=i&&"current"in i?i.current:i;if(e){var r=!1,o=function(t){r||s.current(t)},c=u.current;return"boolean"!==typeof u.current&&(c=function(){var t=!1,n=function(){};try{var e=Object.defineProperty({},"passive",{get:function(){return t=!0,null}});window.addEventListener("test",n,e),window.removeEventListener("test",n,e)}catch(r){return!1}return t}()?u.current:null===(t=u.current)||void 0===t?void 0:t.capture),n&&e.addEventListener(a,o,c),function(){r=!0,e.removeEventListener(a,o,c)}}}),[i,a,n])}},1296:function(t,n,e){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,u="object"==typeof self&&self&&self.Object===Object&&self,s=l||u||Function("return this")(),p=Object.prototype.toString,d=Math.max,f=Math.min,m=function(){return s.Date.now()};function h(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var e=i.test(t);return e||a.test(t)?c(t.slice(2),e?2:8):o.test(t)?NaN:+t}t.exports=function(t,n,e){var r,o,i,a,c,l,u=0,s=!1,p=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(n){var e=r,i=o;return r=o=void 0,u=n,a=t.apply(i,e)}function y(t){return u=t,c=setTimeout(O,n),s?v(t):a}function k(t){var e=t-l;return void 0===l||e>=n||e<0||p&&t-u>=i}function O(){var t=m();if(k(t))return j(t);c=setTimeout(O,function(t){var e=n-(t-l);return p?f(e,i-(t-u)):e}(t))}function j(t){return c=void 0,b&&r?v(t):(r=o=void 0,a)}function w(){var t=m(),e=k(t);if(r=arguments,o=this,l=t,e){if(void 0===c)return y(l);if(p)return c=setTimeout(O,n),v(l)}return void 0===c&&(c=setTimeout(O,n)),a}return n=g(n)||0,h(e)&&(s=!!e.leading,i=(p="maxWait"in e)?d(g(e.maxWait)||0,n):i,b="trailing"in e?!!e.trailing:b),w.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},w.flush=function(){return void 0===c?a:j(m())},w}},9387:function(t,n,e){"use strict";e.d(n,{Z:function(){return k}});var r=e(5893),o=e(4121),i=e(8347),a=e(6265),c=e(2676),l=e(1827),u=e(4425),s=e(7606),p=e(4184),d=e.n(p),f=e(7294),m=e(6260);function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){(0,a.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var b="AnchorButton",v=(0,u.Z)((function(t){return{root:{position:"relative",marginLeft:t.typography.pxToRem(8),marginRight:t.typography.pxToRem(8)},button:{},anchor:(0,a.Z)({position:"absolute",top:0},t.breakpoints.down("sm"),{top:t.typography.pxToRem(-64)})}}),{name:b}),y=f.memo((function(t){var n=t.className,e=t.anchorId,a=(0,i.Z)(t,["className","anchorId"]),u="".concat(window.location.origin).concat(window.location.pathname,"#").concat(e),p=v(),f=(0,m.Z)(u,{successDuration:1e3}),h=(0,o.Z)(f,2),b=h[0],y=h[1];return(0,r.jsxs)("div",g(g({},a),{},{className:d()(p.root,n),children:[(0,r.jsx)("span",{id:e,className:p.anchor}),(0,r.jsx)(s.Z,{text:"\u0644\u06cc\u0646\u06a9 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u06a9\u067e\u06cc \u0634\u062f!",open:b,placement:"left",children:(0,r.jsx)(l.Z,{className:d()(p.button,"anchor-button"),rootNode:"a",href:"#".concat(e),onClick:function(){y()},variant:"inlined",title:"Anchor link","aria-label":"Anchor link",leadingIcon:(0,r.jsx)(c.Z,{})})})]}))}));y.displayName=b;var k=y},9261:function(t,n,e){"use strict";e.d(n,{Z:function(){return k}});var r=e(5893),o=e(6265),i=e(4121),a=e(8347),c=e(4184),l=e.n(c),u=e(5426),s=e(4451),p=e(4425),d=e(5675),f=e(7294),m=e(8424);function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var b="Image",v=(0,p.Z)((function(t){var n=t.typography.pxToRem;return{root:{margin:0},container:{borderRadius:n(4),overflow:"hidden",border:"1px solid rgba(0, 0, 0, 0.04)",backgroundColor:"rgba(0, 0, 0, 0.02)"},illustration:{"& $container":{border:"none",backgroundColor:"transparent"}},skeleton:{},image:{},caption:{marginTop:n(8)},captionText:{}}}),{name:b}),y=f.memo((function(t){var n=t.className,e=t.caption,c=t.imageProps,p=t.illustration,h=void 0!==p&&p,b=(0,a.Z)(t,["className","caption","imageProps","illustration"]),y=c.src,k=c.width,O=c.height,j=c.className,w=(0,a.Z)(c,["src","width","height","className"]),x=v(),Z=f.useState(!1),T=(0,i.Z)(Z,2),N=T[0],P=T[1],D=k/O;return(0,m.Z)((function(){var t=new window.Image;t.src=y,t.onload=function(){P(!0)}}),[]),(0,r.jsxs)("figure",g(g({className:l()(x.root,n,(0,o.Z)({},x.illustration,h))},b),{},{children:[(0,r.jsx)("div",{className:x.container,children:N?(0,r.jsx)(d.default,g({className:l()(x.image,j),src:y,width:k,height:O,layout:"responsive"},w)):(0,r.jsx)(u.Z,{className:l()(x.skeleton,j),width:"100%",variant:"rectangular",ratio:D})}),e&&(0,r.jsx)("figcaption",{className:x.caption,children:"string"===typeof e?(0,r.jsx)(s.Z,{variant:"caption",rootNode:"span",className:x.captionText,color:"textSecondary",children:e}):e})]}))}));y.displayName=b;var k=y},7341:function(t,n,e){"use strict";e.d(n,{Z:function(){return E}});var r=e(5893),o=e(6265),i=e(5145),a=e(4512),c=e(4425),l=e(9999),u=e(4121),s=e(4451),p=e(9193),d=e(7206),f=e(8424),m=e(1778),h=e(4184),g=e.n(h),b=e(1296),v=e.n(b),y=e(3096),k=e.n(y),O=e(7294);function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?j(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var x="TableOfContents",Z=(0,c.Z)((function(t){var n=t.colors,e=t.direction,r=t.typography,o=r.pxToRem,i=r.fontWeight;return{root:{position:"sticky",top:o(32)},title:{fontWeight:i.medium},list:{margin:[[o(10),0,0,0]],padding:0,listStyle:"none",display:"flex",flexDirection:"column",alignItems:"flex-start"},listItem:w(w({},"rtl"===e?{paddingRight:o(16)}:{paddingLeft:o(16)}),{},{paddingTop:o(4),display:"flex",alignItems:"center",position:"relative",cursor:"pointer","&:not($active):hover, &:not($active):focus":{"& $listItemLinkText":{color:n.text.primary}},"&:before":{content:'""',position:"absolute",right:0,width:o(1),height:o(16),transition:"background-color 360ms ease",backgroundColor:n.transparent}}),listItemLink:{textDecoration:"none",color:"inherit"},listItemLinkText:{color:n.text.secondary,lineHeight:2,transition:"color 360ms ease, font-weight 360ms ease"},active:{"&:before":{backgroundColor:n.primary.origin},"& $listItemLinkText":{color:n.primary.origin,fontWeight:i.medium}}}}),{name:x}),T=O.memo((function(t){var n=t.tableData,e=void 0===n?[]:n,i=Z(),a=O.useState(""),c=(0,u.Z)(a,2),h=c[0],b=c[1],y=O.useState(!1),j=(0,u.Z)(y,2),x=j[0],T=j[1],N=O.useState(!0),P=(0,u.Z)(N,2),D=P[0],I=P[1],E=function(){var t=e.reduce((function(t,n,r){var i=document.getElementById(n.id);if(i){var a,c=(0,p.Z)(i).top,u={start:c,end:document.body.scrollHeight},s=r>0?e[r-1].id:null;return w(w({},t),{},{all:[].concat((0,l.Z)(t.all),[n.id]),section:w(w({},t.section),s?(a={},(0,o.Z)(a,s,w(w({},t.section[s]),{},{end:c})),(0,o.Z)(a,n.id,u),a):(0,o.Z)({},n.id,u))})}return w({},t)}),{all:[],section:{}}),n="",r=t.all,i=void 0===r?[]:r,a=t.section,c=void 0===a?{}:a;i.forEach((function(t,e){var r=(0,d.Z)(e+1,0,i.length-1),o=(0,d.Z)(e-1,0,i.length-1),a=0===e?0:c[i[o]].end,l=e===i.length-1?document.body.scrollHeight:c[i[r]].start;a-4<=window.scrollY&&window.scrollY<=l+4&&(n=t)})),b(n)};return(0,f.Z)((function(){x&&E()}),[x]),(0,m.Z)({target:window,eventType:"load",handler:function(){T(!0)}}),(0,m.Z)({target:window,eventType:"scroll",handler:function(){x&&D?k()(E,250)():x&&!D&&v()((function(){I(!0)}),125)()}},x),(0,r.jsxs)("div",{className:i.root,children:[(0,r.jsx)(s.Z,{rootNode:"strong",variant:"caption",color:"textSecondary",className:i.title,children:"\u0641\u0647\u0631\u0633\u062a \u0645\u062d\u062a\u0648\u0627"}),(0,r.jsx)("ul",{className:i.list,children:e.map((function(t,n){return(0,r.jsx)("li",{className:g()(i.listItem,(0,o.Z)({},i.active,t.id===h)),children:(0,r.jsx)("a",{href:"#".concat(t.id),className:i.listItemLink,onClick:function(){b(t.id),I(!1)},children:(0,r.jsx)(s.Z,{rootNode:"span",variant:"caption",className:i.listItemLinkText,children:t.label})})},"".concat(t.label,"/").concat(n))}))})]})}));T.displayName=x;var N=T,P="WithTableOfContent",D=(0,c.Z)((function(t){return{root:{},tableColumn:(0,o.Z)({},t.breakpoints.down("lg"),{display:"none"})}}),{name:P}),I=function(t){var n=t.children,e=t.tableData,o=D();return(0,r.jsxs)(i.Z,{className:o.root,children:[(0,r.jsx)(a.Z,{all:"12",lg:"9",children:n}),(0,r.jsx)(a.Z,{className:o.tableColumn,all:{size:"2",offset:"1"},children:(0,r.jsx)(N,{tableData:e})})]})};I.displayName=P;var E=I},3257:function(t,n,e){"use strict";e.d(n,{t:function(){return r},z:function(){return o}});var r=["design","design system","sonnat","ui","user interface","design kit","ui kit","\u062f\u06cc\u0632\u0627\u06cc\u0646","\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc","\u062f\u06cc\u0632\u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645","\u0633\u0646\u062a","\u0633\u0646\u0651\u062a"],o="https://sonnat.design"},8620:function(t,n,e){"use strict";e.r(n),e.d(n,{meta:function(){return g},default:function(){return v}});var r=e(6265),o=e(9999),i=e(8347),a=(e(7294),e(3905)),c=e(8286),l=e(9261),u=e(9387),s=e(7341),p=e(9008),d=e(3257),f=e(4217);function m(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?m(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g={title:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0631\u062f\u06cc\u0641\u200c\u0647\u0627",description:"\u0631\u062f\u06cc\u0641\u200c\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u062f\u06cc\u0648\u0627\u0631\u0646\u062f \u06a9\u0647 \u0628\u0646\u0627 \u0628\u0647 \u0646\u06cc\u0627\u0632\u200c\u0647\u0627\u06cc \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0645\u062d\u0635\u0648\u0644 \u062f\u06cc\u0648\u0627\u0631 \u0634\u06a9\u0644 \u06af\u0631\u0641\u062a\u0646\u062f \u0648 \u0628\u0627 \u0645\u0634\u0627\u0631\u06a9\u062a \u0637\u0631\u0627\u062d\u0627\u0646 \u062a\u062c\u0631\u0628\u0647\u0654 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u062a\u06cc\u0645\u200c\u0647\u0627\u06cc \u0645\u062d\u0635\u0648\u0644\u06cc \u0645\u062e\u062a\u0644\u0641 \u0637\u0631\u0627\u062d\u06cc \u0648 \u0628\u0647 \u0633\u0646\u0651\u062a \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u0646\u062f.",getLayout:function(){return function(t){return(0,a.kt)(s.Z,{tableData:[{id:"\u0645\u0639\u0631\u0641\u06cc",label:"\u0645\u0639\u0631\u0641\u06cc"},{id:"\u0641\u0631\u0622\u06cc\u0646\u062f \u0634\u06a9\u0644\u200c\u06af\u06cc\u0631\u06cc",label:"\u0641\u0631\u0622\u06cc\u0646\u062f \u0634\u06a9\u0644\u200c\u06af\u06cc\u0631\u06cc"},{id:"\u0627\u0646\u0648\u0627\u0639 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0631\u062f\u06cc\u0641 \u0648 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0622\u0646\u200c\u0647\u0627",label:"\u0627\u0646\u0648\u0627\u0639 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0631\u062f\u06cc\u0641 \u0648 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0622\u0646\u200c\u0647\u0627"}],mdxType:"WithTableOfContent"},t)}}},b={meta:g};function v(t){var n=t.components,e=(0,i.Z)(t,["components"]);return(0,a.kt)("wrapper",h(h(h({},b),e),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)(p.default,{mdxType:"Head"},(0,f.aT)("".concat(g.title," | \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645 \u0633\u0646\u0651\u062a")),(0,f.u2)(g.description),(0,f.ai)("".concat(d.z,"/components/divar/rows-introduction")),(0,f.hL)([].concat((0,o.Z)(d.t),["divar","rows","intro"]))),(0,a.kt)("h1",null,(0,a.kt)("span",null,g.title),(0,a.kt)(u.Z,{anchorId:"\u0645\u0639\u0631\u0641\u06cc",mdxType:"AnchorButton"})),(0,a.kt)("p",null,g.description),(0,a.kt)("h2",null,(0,a.kt)("span",null,"\u0641\u0631\u0622\u06cc\u0646\u062f \u0634\u06a9\u0644\u200c\u06af\u06cc\u0631\u06cc"),(0,a.kt)(u.Z,{anchorId:"\u0641\u0631\u0622\u06cc\u0646\u062f \u0634\u06a9\u0644\u200c\u06af\u06cc\u0631\u06cc",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"\u0647\u0645\u0627\u0646\u200c\u0637\u0648\u0631 \u06a9\u0647 \u062f\u0631"," ",(0,a.kt)("a",{href:"/introduction",title:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0633\u0646\u0651\u062a"},"\u0645\u0639\u0631\u0641\u06cc \u0633\u0646\u062a")," ","\u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u06cc\u0645\u060c \u0634\u06a9\u0644\u200c\u06af\u06cc\u0631\u06cc \u0633\u0646\u0651\u062a \u0628\u0627 \u0631\u0648\u06cc\u06a9\u0631\u062f\u06cc \u0628\u0631\u0622\u06cc\u0646\u062f\u0647 \u0627\u0646\u062c\u0627\u0645 \u0634\u062f. \u0628\u0647 \u0627\u06cc\u0646 \u0645\u0639\u0646\u06cc \u06a9\u0647 \u0633\u06cc\u0633\u062a\u0645\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u0645\u0648\u062c\u0648\u062f \u062f\u06cc\u0648\u0627\u0631 \u0637\u0631\u0627\u062d\u06cc \u0646\u06a9\u0631\u062f\u06cc\u0645 \u0648 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a \u0628\u0627 \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0627\u0644\u06af\u0648\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u0645\u062d\u0635\u0648\u0644 \u0648 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647\u200c\u0633\u0627\u0632\u06cc \u0622\u0646\u200c\u0647\u0627 \u0637\u0631\u0627\u062d\u06cc \u0648 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u0627\u0628\u062a\u062f\u0627\u06cc\u06cc \u0622\u0646\u200c\u0647\u0627 \u062f\u0631 \u0637\u0648\u0644 \u0632\u0645\u0627\u0646 \u0648 \u0645\u062a\u0646\u0627\u0633\u0628 \u0628\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0646\u06cc\u0627\u0632\u0645\u0646\u062f\u06cc\u200c\u0647\u0627\u06cc \u0645\u062d\u0635\u0648\u0644 \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0634\u062f\u0646\u062f."),(0,a.kt)("h3",null,(0,a.kt)("span",null,"\u0646\u0645\u0648\u0646\u0647\u200c\u0647\u0627\u06cc\u06cc \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u062f\u0631 \u0637\u06cc \u0632\u0645\u0627\u0646"),(0,a.kt)(u.Z,{anchorId:"\u0646\u0645\u0648\u0646\u0647\u200c\u0647\u0627\u06cc\u06cc \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u062f\u0631 \u0637\u06cc \u0632\u0645\u0627\u0646",mdxType:"AnchorButton"})),(0,a.kt)(l.Z,{caption:"\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u062f\u06cc\u0641 \u0627\u062a\u0641\u0627\u0642 \u062f\u0631 \u06a9\u0644\u0627\u06cc\u0646\u062a\u200c\u0647\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0648 \u0622\u06cc\u200c\u0627\u0648\u200c\u0627\u0633",imageProps:{src:"/static/media/rows-intro-changes.svg",alt:"\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u062f\u06cc\u0641 \u0627\u062a\u0641\u0627\u0642 \u062f\u0631 \u06a9\u0644\u0627\u06cc\u0646\u062a\u200c\u0647\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0648 \u0622\u06cc\u200c\u0627\u0648\u200c\u0627\u0633",unoptimized:!0,width:860,height:344},mdxType:"Image"}),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0628\u062a\u062f\u0627 \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627\u06cc \u067e\u0633\u062a\u0686\u06cc \u062f\u0631 \u0686\u062a \u062f\u06cc\u0648\u0627\u0631 \u0637\u0631\u0627\u062d\u06cc \u0634\u062f \u0648 \u0633\u067e\u0633 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0646\u06cc\u0632 \u0645\u062b\u0644 \u0646\u0645\u0627\u06cc\u0634 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0627\u0645\u0644\u0627\u06a9 \u062f\u0631 \u067e\u0646\u0644 \u0622\u0698\u0627\u0646\u0633\u200c\u200c\u0647\u0627\u06cc \u0627\u0645\u0644\u0627\u06a9 \u062f\u06cc\u0648\u0627\u0631\u060c \u0646\u0645\u0627\u06cc\u0634 \u0644\u06cc\u0633\u062a \u0641\u0631\u0648\u0634\u0646\u062f\u06af\u0627\u0646 \u062f\u06cc\u0648\u0627\u0631 \u0648 ... \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0631 \u062a\u0645\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627 \u0646\u0642\u0634\u06cc \u06a9\u064f\u0646\u0634\u200c\u067e\u0630\u06cc\u0631 \u062f\u0627\u0634\u062a \u0648 \u0646\u0645\u0627\u06cc\u0634\u06cc \u0646\u0628\u0648\u062f. \u0627\u0645\u0627 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0644\u06cc\u0633\u062a \u0622\u06af\u0647\u06cc\u200c\u0647\u0627 \u062f\u0631 \xab\u0645\u06cc\u0627\u0646\u200c\u0628\u064f\u0631 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0642\u06cc\u0645\u062a \u0622\u06af\u0647\u06cc\xbb \u067e\u0646\u0644 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u06cc\u0645\u060c \u0646\u06cc\u0627\u0632 \u062c\u062f\u06cc \u0628\u0647 \u062a\u0623\u06a9\u06cc\u062f \u0628\u0635\u0631\u06cc \u0628\u0631 \u06a9\u064f\u0646\u0634\u200c\u067e\u0630\u06cc\u0631 \u0628\u0648\u062f\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u062d\u0633\u0627\u0633 \u0634\u062f."),(0,a.kt)(c.Z,{dotted:!0,spaced:!0,mdxType:"Divider"}),(0,a.kt)(l.Z,{caption:"\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0642\u06cc\u0645\u062a \u062f\u0631 \u0648\u0628",imageProps:{src:"/static/media/rows-intro-changes-2.svg",alt:"\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0642\u06cc\u0645\u062a \u062f\u0631 \u0648\u0628",unoptimized:!0,width:860,height:224},mdxType:"Image"}),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0628\u062a\u062f\u0627 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u06cc\u067e\u060c \u0645\u062f\u0644 \u0648 \u0628\u0631\u0646\u062f \u062e\u0648\u062f\u0631\u0648 \u0637\u0631\u0627\u062d\u06cc \u0634\u062f. \u0627\u0645\u0627 \u0628\u0647 \u0627\u06cc\u0646 \u0646\u062a\u06cc\u062c\u0647 \u0631\u0633\u06cc\u062f\u06cc\u0645 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u06cc\u067e \u0648 \u0645\u062f\u0644 \u0645\u062a\u0645\u0627\u06cc\u0632 \u0627\u0632 \u0628\u0631\u0646\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u0648\u062f. \u0647\u0645\u200c\u0686\u0646\u06cc\u0646 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0637\u0648\u0644\u0627\u0646\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0642\u06cc\u0645\u062a \u062e\u0648\u062f\u0631\u0648\u0647\u0627\u060c \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u062f \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u062f \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0645\u0648\u0631\u062f \u0639\u0644\u0627\u0642\u0647\u200c\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0627\u0644\u0627\u06cc \u0644\u06cc\u0633\u062a \u0646\u06af\u0647\u200c \u062f\u0627\u0631\u062f. \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0631\u0641\u062a\u0627\u0631 \u0648\u0627\u06a9\u0646\u0634\u200c\u06af\u0631\u0627 \u0628\u0647 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u06cc\u0645. \u0628\u0647\u200c\u062a\u0628\u0639 \u0628\u0627 \u06a9\u0645\u200c\u0634\u062f\u0646 \u0639\u0631\u0636 \u0645\u0641\u06cc\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0628\u0631\u06cc\u062f\u0647\u200c\u0634\u062f\u0646 \u0645\u062a\u0646\u200c\u0647\u0627\u060c \u0644\u0627\u0632\u0645 \u0628\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631 \u062f\u0648 \u062e\u0637 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627"),(0,a.kt)("h2",null,(0,a.kt)("span",null,"\u0627\u0646\u0648\u0627\u0639 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0631\u062f\u06cc\u0641 \u0648 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0622\u0646\u200c\u0647\u0627"),(0,a.kt)(u.Z,{anchorId:"\u0627\u0646\u0648\u0627\u0639 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0631\u062f\u06cc\u0641 \u0648 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0622\u0646\u200c\u0647\u0627",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0631\u062f\u06cc\u0641 \u0627\u0632 \u0646\u0638\u0631 \u06a9\u0627\u0631\u0628\u0631\u062f \u0628\u0647 \u06f3 \u062f\u0633\u062a\u0647 \u062a\u0642\u0633\u06cc\u0645 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."),(0,a.kt)("h3",null,(0,a.kt)("span",null,"\u0633\u0627\u062e\u062a\u0646 \u0641\u0631\u0645"),(0,a.kt)(u.Z,{anchorId:"\u0633\u0627\u062e\u062a\u0646 \u0641\u0631\u0645",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0648\u0638\u06cc\u0641\u0647\u0654 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0641\u0631\u0645\u200c\u0647\u0627 \u0648 \u0646\u0645\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631\u06cc\u0627\u0641\u062a\u200c\u0634\u062f\u0647 \u06cc\u0627 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0628\u0631\u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u0646\u062f.",(0,a.kt)("br",null),"\u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0633\u0627\u0632\u0646\u062f\u0647\u0654 \u0641\u0631\u0645 \u0634\u0627\u0645\u0644:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0648\u0636\u0639\u06cc\u062a"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u06a9\u0646\u062a\u0631\u0644"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0627\u0631\u0632\u06cc\u0627\u0628\u06cc")),(0,a.kt)("h3",null,(0,a.kt)("span",null,"\u0631\u0627\u0647\u0628\u0631\u06cc"),(0,a.kt)(u.Z,{anchorId:"\u0631\u0627\u0647\u0628\u0631\u06cc",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0631\u0627\u0647\u0628\u0631\u06cc \u062f\u0631 \u0628\u062e\u0634\u06cc \u0627\u0632 \u0641\u0631\u0627\u06cc\u0646\u062f\u060c \u0627\u0646\u062a\u062e\u0627\u0628 \u0628\u06cc\u0646 \u06af\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u06cc\u06a9 \u0645\u0648\u0636\u0648\u0639\u060c \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u062f\u0631\u0628\u0627\u0631\u0647\u0654 \u06cc\u06a9 \u0645\u0648\u0636\u0648\u0639 \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0635\u0641\u062d\u0627\u062a\u06cc \u0631\u0627 \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f \u06a9\u0647 \u0639\u0646\u0648\u0627\u0646 \u0622\u0646\u200c\u0647\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0628\u06cc\u0634\u062a\u0631\u06cc \u062f\u0627\u0631\u062f.",(0,a.kt)("br",null),"\u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0631\u0627\u0647\u0628\u0631\u06cc \u0634\u0627\u0645\u0644:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0646\u062a\u0627\u06cc\u062c \u062c\u0633\u062a\u062c\u0648 \u0648 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u062c\u0633\u062a\u062c\u0648"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0627\u0645\u062a\u06cc\u0627\u0632 (\u062a\u0639\u0627\u0645\u0644\u06cc)"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0648\u06cc\u0698\u06af\u06cc (\u062a\u0639\u0627\u0645\u0644\u06cc)")),(0,a.kt)("h3",null,(0,a.kt)("span",null,"\u0646\u0645\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a"),(0,a.kt)(u.Z,{anchorId:"\u0646\u0645\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0641\u0642\u0637 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f \u0648 \u06a9\u064f\u0646\u0634\u06cc \u0646\u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u062f\u0631 \u0634\u06a9\u0644\u200c\u06af\u06cc\u0631\u06cc \u0641\u0631\u0645\u200c\u0647\u0627 \u0646\u06cc\u0632 \u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0627\u0631\u0646\u062f\u060c \u0648\u0644\u06cc \u0646\u0647 \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06cc\u0627 \u0627\u0646\u062a\u062e\u0627\u0628\u200c\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u060c \u0628\u0644\u06a9\u0647 \u0628\u0631\u0627\u06cc \u0634\u0641\u0627\u0641\u200c\u06a9\u0631\u062f\u0646 \u0645\u0636\u0645\u0648\u0646 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0641\u0631\u0645 \u06cc\u0627 \u06af\u0631\u0648\u0647\u200c\u0628\u0646\u062f\u06cc \u06a9\u0631\u062f\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631 \u0641\u0631\u0645\u200c.",(0,a.kt)("br",null),"\u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0627\u0645\u0644:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0639\u0646\u0648\u0627\u0646"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0648\u06cc\u0698\u06af\u06cc"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0642\u06cc\u0645\u062a"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u062a\u062e\u0645\u06cc\u0646 \u0642\u06cc\u0645\u062a"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0633\u0646\u062c\u0634"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u0627\u0645\u062a\u06cc\u0627\u0632"),(0,a.kt)("li",null,"\u0631\u062f\u06cc\u0641 \u062f\u0627\u062f\u0647")))}v.isMDXComponent=!0},8577:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divar/rows-introduction",function(){return e(8620)}])}},function(t){t.O(0,[841,433,774,888,179],(function(){return n=8577,t(t.s=n);var n}));var n=t.O();_N_E=n}]);