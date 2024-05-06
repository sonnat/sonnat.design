(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{1778:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(7294),o=function(t){var n=r.useRef(t);return r.useEffect((function(){n.current=t})),n},i=function(t,n){void 0===n&&(n=!0);var e=t.target,i=void 0===e?null:e,a=t.eventType,l=t.handler,c=t.options,u=o(c),s=o(l);r.useEffect((function(){var t,e=i&&"current"in i?i.current:i;if(e){var r=!1,o=function(t){r||s.current(t)},l=u.current;return"boolean"!==typeof u.current&&(l=function(){var t=!1,n=function(){};try{var e=Object.defineProperty({},"passive",{get:function(){return t=!0,null}});window.addEventListener("test",n,e),window.removeEventListener("test",n,e)}catch(r){return!1}return t}()?u.current:null===(t=u.current)||void 0===t?void 0:t.capture),n&&e.addEventListener(a,o,l),function(){r=!0,e.removeEventListener(a,o,l)}}}),[i,a,n])}},1296:function(t,n,e){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,f=function(){return s.Date.now()};function h(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function k(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var e=i.test(t);return e||a.test(t)?l(t.slice(2),e?2:8):o.test(t)?NaN:+t}t.exports=function(t,n,e){var r,o,i,a,l,c,u=0,s=!1,d=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(n){var e=r,i=o;return r=o=void 0,u=n,a=t.apply(i,e)}function b(t){return u=t,l=setTimeout(x,n),s?y(t):a}function v(t){var e=t-c;return void 0===c||e>=n||e<0||d&&t-u>=i}function x(){var t=f();if(v(t))return O(t);l=setTimeout(x,function(t){var e=n-(t-c);return d?m(e,i-(t-u)):e}(t))}function O(t){return l=void 0,g&&r?y(t):(r=o=void 0,a)}function j(){var t=f(),e=v(t);if(r=arguments,o=this,c=t,e){if(void 0===l)return b(c);if(d)return l=setTimeout(x,n),y(c)}return void 0===l&&(l=setTimeout(x,n)),a}return n=k(n)||0,h(e)&&(s=!!e.leading,i=(d="maxWait"in e)?p(k(e.maxWait)||0,n):i,g="trailing"in e?!!e.trailing:g),j.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=o=l=void 0},j.flush=function(){return void 0===l?a:O(f())},j}},9387:function(t,n,e){"use strict";e.d(n,{Z:function(){return v}});var r=e(5893),o=e(4121),i=e(8347),a=e(6265),l=e(2676),c=e(1827),u=e(4425),s=e(7606),d=e(4184),p=e.n(d),m=e(7294),f=e(6260);function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){(0,a.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g="AnchorButton",y=(0,u.Z)((function(t){return{root:{position:"relative",marginLeft:t.typography.pxToRem(8),marginRight:t.typography.pxToRem(8)},button:{},anchor:(0,a.Z)({position:"absolute",top:0},t.breakpoints.down("sm"),{top:t.typography.pxToRem(-64)})}}),{name:g}),b=m.memo((function(t){var n=t.className,e=t.anchorId,a=(0,i.Z)(t,["className","anchorId"]),u="".concat(window.location.origin).concat(window.location.pathname,"#").concat(e),d=y(),m=(0,f.Z)(u,{successDuration:1e3}),h=(0,o.Z)(m,2),g=h[0],b=h[1];return(0,r.jsxs)("div",k(k({},a),{},{className:p()(d.root,n),children:[(0,r.jsx)("span",{id:e,className:d.anchor}),(0,r.jsx)(s.Z,{text:"\u0644\u06cc\u0646\u06a9 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u06a9\u067e\u06cc \u0634\u062f!",open:g,placement:"left",children:(0,r.jsx)(c.Z,{className:p()(d.button,"anchor-button"),rootNode:"a",href:"#".concat(e),onClick:function(){b()},variant:"inlined",title:"Anchor link","aria-label":"Anchor link",leadingIcon:(0,r.jsx)(l.Z,{})})})]}))}));b.displayName=g;var v=b},9261:function(t,n,e){"use strict";e.d(n,{Z:function(){return v}});var r=e(5893),o=e(6265),i=e(4121),a=e(8347),l=e(4184),c=e.n(l),u=e(5426),s=e(4451),d=e(4425),p=e(5675),m=e(7294),f=e(8424);function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g="Image",y=(0,d.Z)((function(t){var n=t.typography.pxToRem;return{root:{margin:0},container:{borderRadius:n(4),overflow:"hidden",border:"1px solid rgba(0, 0, 0, 0.04)",backgroundColor:"rgba(0, 0, 0, 0.02)"},illustration:{"& $container":{border:"none",backgroundColor:"transparent"}},skeleton:{},image:{},caption:{marginTop:n(8)},captionText:{}}}),{name:g}),b=m.memo((function(t){var n=t.className,e=t.caption,l=t.imageProps,d=t.illustration,h=void 0!==d&&d,g=(0,a.Z)(t,["className","caption","imageProps","illustration"]),b=l.src,v=l.width,x=l.height,O=l.className,j=(0,a.Z)(l,["src","width","height","className"]),Z=y(),w=m.useState(!1),T=(0,i.Z)(w,2),P=T[0],N=T[1],I=v/x;return(0,f.Z)((function(){var t=new window.Image;t.src=b,t.onload=function(){N(!0)}}),[]),(0,r.jsxs)("figure",k(k({className:c()(Z.root,n,(0,o.Z)({},Z.illustration,h))},g),{},{children:[(0,r.jsx)("div",{className:Z.container,children:P?(0,r.jsx)(p.default,k({className:c()(Z.image,O),src:b,width:v,height:x,layout:"responsive"},j)):(0,r.jsx)(u.Z,{className:c()(Z.skeleton,O),width:"100%",variant:"rectangular",ratio:I})}),e&&(0,r.jsx)("figcaption",{className:Z.caption,children:"string"===typeof e?(0,r.jsx)(s.Z,{variant:"caption",rootNode:"span",className:Z.captionText,color:"textSecondary",children:e}):e})]}))}));b.displayName=g;var v=b},7341:function(t,n,e){"use strict";e.d(n,{Z:function(){return D}});var r=e(5893),o=e(6265),i=e(5145),a=e(4512),l=e(4425),c=e(9999),u=e(4121),s=e(4451),d=e(9193),p=e(7206),m=e(8424),f=e(1778),h=e(4184),k=e.n(h),g=e(1296),y=e.n(g),b=e(3096),v=e.n(b),x=e(7294);function O(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?O(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var Z="TableOfContents",w=(0,l.Z)((function(t){var n=t.colors,e=t.direction,r=t.typography,o=r.pxToRem,i=r.fontWeight;return{root:{position:"sticky",top:o(32)},title:{fontWeight:i.medium},list:{margin:[[o(10),0,0,0]],padding:0,listStyle:"none",display:"flex",flexDirection:"column",alignItems:"flex-start"},listItem:j(j({},"rtl"===e?{paddingRight:o(16)}:{paddingLeft:o(16)}),{},{paddingTop:o(4),display:"flex",alignItems:"center",position:"relative",cursor:"pointer","&:not($active):hover, &:not($active):focus":{"& $listItemLinkText":{color:n.text.primary}},"&:before":{content:'""',position:"absolute",right:0,width:o(1),height:o(16),transition:"background-color 360ms ease",backgroundColor:n.transparent}}),listItemLink:{textDecoration:"none",color:"inherit"},listItemLinkText:{color:n.text.secondary,lineHeight:2,transition:"color 360ms ease, font-weight 360ms ease"},active:{"&:before":{backgroundColor:n.primary.origin},"& $listItemLinkText":{color:n.primary.origin,fontWeight:i.medium}}}}),{name:Z}),T=x.memo((function(t){var n=t.tableData,e=void 0===n?[]:n,i=w(),a=x.useState(""),l=(0,u.Z)(a,2),h=l[0],g=l[1],b=x.useState(!1),O=(0,u.Z)(b,2),Z=O[0],T=O[1],P=x.useState(!0),N=(0,u.Z)(P,2),I=N[0],C=N[1],D=function(){var t=e.reduce((function(t,n,r){var i=document.getElementById(n.id);if(i){var a,l=(0,d.Z)(i).top,u={start:l,end:document.body.scrollHeight},s=r>0?e[r-1].id:null;return j(j({},t),{},{all:[].concat((0,c.Z)(t.all),[n.id]),section:j(j({},t.section),s?(a={},(0,o.Z)(a,s,j(j({},t.section[s]),{},{end:l})),(0,o.Z)(a,n.id,u),a):(0,o.Z)({},n.id,u))})}return j({},t)}),{all:[],section:{}}),n="",r=t.all,i=void 0===r?[]:r,a=t.section,l=void 0===a?{}:a;i.forEach((function(t,e){var r=(0,p.Z)(e+1,0,i.length-1),o=(0,p.Z)(e-1,0,i.length-1),a=0===e?0:l[i[o]].end,c=e===i.length-1?document.body.scrollHeight:l[i[r]].start;a-4<=window.scrollY&&window.scrollY<=c+4&&(n=t)})),g(n)};return(0,m.Z)((function(){Z&&D()}),[Z]),(0,f.Z)({target:window,eventType:"load",handler:function(){T(!0)}}),(0,f.Z)({target:window,eventType:"scroll",handler:function(){Z&&I?v()(D,250)():Z&&!I&&y()((function(){C(!0)}),125)()}},Z),(0,r.jsxs)("div",{className:i.root,children:[(0,r.jsx)(s.Z,{rootNode:"strong",variant:"caption",color:"textSecondary",className:i.title,children:"\u0641\u0647\u0631\u0633\u062a \u0645\u062d\u062a\u0648\u0627"}),(0,r.jsx)("ul",{className:i.list,children:e.map((function(t,n){return(0,r.jsx)("li",{className:k()(i.listItem,(0,o.Z)({},i.active,t.id===h)),children:(0,r.jsx)("a",{href:"#".concat(t.id),className:i.listItemLink,onClick:function(){g(t.id),C(!1)},children:(0,r.jsx)(s.Z,{rootNode:"span",variant:"caption",className:i.listItemLinkText,children:t.label})})},"".concat(t.label,"/").concat(n))}))})]})}));T.displayName=Z;var P=T,N="WithTableOfContent",I=(0,l.Z)((function(t){return{root:{},tableColumn:(0,o.Z)({},t.breakpoints.down("lg"),{display:"none"})}}),{name:N}),C=function(t){var n=t.children,e=t.tableData,o=I();return(0,r.jsxs)(i.Z,{className:o.root,children:[(0,r.jsx)(a.Z,{all:"12",lg:"9",children:n}),(0,r.jsx)(a.Z,{className:o.tableColumn,all:{size:"2",offset:"1"},children:(0,r.jsx)(P,{tableData:e})})]})};C.displayName=N;var D=C},3257:function(t,n,e){"use strict";e.d(n,{t:function(){return r},z:function(){return o}});var r=["design","design system","sonnat","ui","user interface","design kit","ui kit","\u062f\u06cc\u0632\u0627\u06cc\u0646","\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc","\u062f\u06cc\u0632\u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645","\u0633\u0646\u062a","\u0633\u0646\u0651\u062a"],o="https://sonnat.design"},5403:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return S},meta:function(){return D}});var r=e(6265),o=e(9999),i=e(8347),a=e(7294),l=e(3905),c=e(5145),u=e(4512),s=e(6156),d=e(2949),p=e(2122),m=e(5697),f=e.n(m),h=e(4184),k=e.n(h),g=e(4425),y=["className","children","codeBlock"],b="Code",v=(0,g.Z)((function(t){var n=t.colors,e=t.darkMode,r=t.direction,o=t.typography,i=o.pxToRem,a=o.fontWeight,l=o.useText,c=o.fontFamily;return{root:(0,p.Z)({},l({fontSize:"0.875em",fontWeight:a.regular,lineHeight:1.5714285714,color:n.text.primary}),{direction:r,fontFamily:c.monospace,borderRadius:i(2),backgroundColor:e?n.pallete.grey[900]:n.pallete.grey[100],display:"inline-block",padding:"0 ".concat(i(4))}),codeBlock:{overflow:"auto",display:"block",textAlign:"left",direction:"ltr",fontSize:"0.875em",padding:i(16),backgroundColor:n.transparent,border:"1px solid ".concat(n.divider),borderRadius:i(4)}}}),{name:"Sonnat".concat(b)}),x=a.forwardRef((function(t,n){var e=t.className,r=t.children,o=t.codeBlock,i=void 0!==o&&o,l=(0,d.Z)(t,y),c=v(),u=i?"pre":"code";return a.createElement(u,(0,p.Z)({ref:n,className:k()(c.root,e,(0,s.Z)({},c.codeBlock,i))},l),r)}));x.displayName=b,x.propTypes={children:f().node,className:f().string,codeBlock:f().bool};var O=x,j=e(9261),Z=e(9387),w=e(7341),T=e(9008),P=e(3257),N=e(4217);function I(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?I(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var D={title:"\u0622\u06cc\u06a9\u0648\u0646",description:"\u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645 \u0633\u0646\u0651\u062a \u062a\u0635\u0627\u0648\u06cc\u0631\u06cc \u06a9\u0648\u0686\u06a9 \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0646\u0645\u0627\u062f\u06cc\u0646\u0650 \u06a9\u0646\u0634\u200c\u0647\u0627\u060c \u0645\u0641\u0647\u0648\u0645 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627 \u0648 \u0634\u0641\u0627\u0641\u200c\u06a9\u0646\u0646\u062f\u0647\u0654 \u0645\u0633\u06cc\u0631 \u0631\u0627\u0647\u0628\u0631\u06cc \u062f\u0631 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0631\u0627\u0628\u0637 \u06a9\u0627\u0631\u0628\u0631 \u06cc\u06a9 \u0645\u062d\u0635\u0648\u0644\u200c\u0627\u0646\u062f. \u0645\u0634\u062a\u0631\u06a9 \u0628\u0648\u062f\u0646 \u0627\u06cc\u0646 \u062a\u0635\u0627\u0648\u06cc\u0631 \u0628\u0627 \u062a\u062c\u0631\u0628\u0647\u0654 \u0645\u062a\u062f\u0627\u0648\u0644 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062f\u0631 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u062f\u06cc\u062c\u06cc\u062a\u0627\u0644\u060c \u062f\u0631\u06a9 \u0627\u0644\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062a\u0639\u0627\u0645\u0644\u06cc \u0631\u0627 \u0622\u0633\u0627\u0646\u200c\u060c \u0644\u0630\u062a\u200c\u0628\u062e\u0634 \u0648 \u062f\u0633\u062a\u0631\u0633\u200c\u067e\u0630\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f.",getLayout:function(){return function(t){return(0,l.kt)(w.Z,{tableData:[{id:"\u0645\u0639\u0631\u0641\u06cc",label:"\u0645\u0639\u0631\u0641\u06cc"},{id:"\u06a9\u0627\u0631\u0628\u0631\u062f",label:"\u06a9\u0627\u0631\u0628\u0631\u062f"},{id:"\u062f\u06cc\u0632\u0627\u06cc\u0646",label:"\u062f\u06cc\u0632\u0627\u06cc\u0646"},{id:"\u0642\u0648\u0627\u0639\u062f \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc",label:"\u0642\u0648\u0627\u0639\u062f \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc"}],mdxType:"WithTableOfContent"},t)}}},E={meta:D};function S(t){var n=t.components,e=(0,i.Z)(t,["components"]);return(0,l.kt)("wrapper",C(C(C({},E),e),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)(T.default,{mdxType:"Head"},(0,N.aT)("".concat(D.title," | \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645 \u0633\u0646\u0651\u062a")),(0,N.u2)(D.description),(0,N.ai)("".concat(P.z,"/foundation/icon")),(0,N.hL)([].concat((0,o.Z)(P.t),["iconography","icon","icons","\u0622\u06cc\u06a9\u0648\u0646","\u0622\u06cc\u06a9\u0648\u0646\u0648\u06af\u0631\u0627\u0641\u06cc"]))),(0,l.kt)("h1",null,(0,l.kt)("span",null,D.title),(0,l.kt)(Z.Z,{anchorId:"\u0645\u0639\u0631\u0641\u06cc",mdxType:"AnchorButton"})),(0,l.kt)("p",null,D.description),(0,l.kt)("h2",null,(0,l.kt)("span",null,"\u06a9\u0627\u0631\u0628\u0631\u062f"),(0,l.kt)(Z.Z,{anchorId:"\u06a9\u0627\u0631\u0628\u0631\u062f",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u0628\u0627 \u0642\u0631\u0627\u0631\u06af\u06cc\u0631\u06cc \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0647 \u0634\u0641\u0627\u0641\u06cc\u062a \u0646\u0642\u0634 \u062a\u0639\u0627\u0645\u0644\u06cc \u0648 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u0622\u0646\u200c\u0647\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. \u062f\u0631 \u062f\u06a9\u0645\u0647\u200c\u0647\u0627\u060c \u062f\u06a9\u0645\u0647\u200c\u0647\u0627\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u062f\u0627\u0631 \u0648 \u062f\u06a9\u0645\u0647 \u0622\u06cc\u06a9\u0648\u0646 \u0627\u0646\u062a\u0638\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u062a\u0639\u0627\u0645\u0644\u06cc\u200c\u0628\u0648\u062f\u0646 \u062a\u0623\u06cc\u06cc\u062f \u0648 \u062f\u0631 \u0641\u06cc\u0644\u062f\u0647\u0627\u06cc \u0648\u0631\u0648\u062f\u06cc\u060c \u062f\u0627\u062f\u0647\u0654 \u0645\u0648\u0631\u062f \u0627\u0646\u062a\u0638\u0627\u0631 \u0645\u062d\u0635\u0648\u0644 \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0634\u0641\u0627\u0641 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. \u0647\u0645\u200c\u0686\u0646\u06cc\u0646 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u0654 \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u062f\u0631 \u0628\u0631\u062f\u06a9\u0631\u0627\u0645\u200c\u0647\u0627\u060c \u0631\u062f\u06cc\u0641\u200c\u0647\u0627 \u0648 \u0641\u06cc\u0644\u062f\u0647\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u0633\u06cc\u0631 \u0631\u0627\u0647\u0628\u0631\u06cc \u0631\u0627 \u067e\u06cc\u0634\u200c\u0628\u06cc\u0646\u06cc\u200c\u067e\u0630\u06cc\u0631 \u0645\u06cc\u200c\u0633\u0627\u0632\u0646\u062f. \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0634\u0646\u0627\u0633 \u062f\u0633\u062a\u0631\u0633\u200c\u067e\u0630\u06cc\u0631\u06cc \u062a\u0623\u06cc\u06cc\u062f \u06a9\u0631\u062f\u0647\u200c \u0627\u0633\u062a\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062f\u0631 \u0641\u0636\u0627\u06cc \u0645\u062e\u062a\u0635 \u0644\u06cc\u0628\u0644\u200c\u0647\u0627 \u06cc\u0627 \u0645\u062a\u0646 \u062f\u06a9\u0645\u0647\u200c\u0647\u0627 \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc \u06a9\u0631\u062f."),(0,l.kt)("h2",null,(0,l.kt)("span",null,"\u062f\u06cc\u0632\u0627\u06cc\u0646"),(0,l.kt)(Z.Z,{anchorId:"\u062f\u06cc\u0632\u0627\u06cc\u0646",mdxType:"AnchorButton"})),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u0645\u0641\u0647\u0648\u0645 \u0646\u0645\u0627\u062f\u06cc\u0646"),(0,l.kt)(Z.Z,{anchorId:"\u0645\u0641\u0647\u0648\u0645 \u0646\u0645\u0627\u062f\u06cc\u0646",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u062f\u06cc\u0632\u0627\u06cc\u0646\u200c \u0633\u06cc\u0633\u062a\u0645 \u0633\u0646\u0651\u062a \u0638\u0627\u0647\u0631\u06cc \u0622\u0634\u0646\u0627\u060c \u0633\u0628\u06a9 \u0648 \u0627\u0646\u0639\u0637\u0627\u0641\u200c\u067e\u0630\u06cc\u0631 \u062f\u0627\u0631\u0646\u062f. \u062f\u0631 \u06af\u0627\u0645 \u0627\u0648\u0644 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u062a\u062c\u0631\u0628\u0647\u0654 \u0645\u0634\u062a\u0631\u06a9 \u0648 \u0641\u0631\u0627\u06af\u06cc\u0631 \u062f\u0631 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u062f\u06cc\u062c\u06cc\u062a\u0627\u0644 \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f. \u062f\u0631 \u06af\u0627\u0645 \u0628\u0639\u062f\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0628\u0627 \u062d\u0641\u0638 \u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u062f\u0631 \u0627\u0633\u062a\u0627\u06cc\u0644 \u0637\u0631\u0627\u062d\u06cc \u0628\u0635\u0631\u06cc\u060c \u0627\u062e\u062a\u0635\u0627\u0631 \u062f\u0631 \u0645\u0641\u0647\u0648\u0645 \u0627\u0631\u0627\u0626\u0647\u200c\u0634\u062f\u0647 \u0648 \u0628\u0627 \u062e\u0648\u0627\u0646\u0627\u06cc\u06cc \u0645\u062a\u0645\u0627\u06cc\u0632 \u0628\u0647 \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."),(0,l.kt)(j.Z,{caption:"\u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",imageProps:{src:"/static/media/iconography-icons.svg",alt:"\u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:510,height:314},mdxType:"Image"}),(0,l.kt)("p",null,"\u0627\u06cc\u0646 \u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0634\u06a9\u0627\u0644 \u0647\u0646\u062f\u0633\u06cc \u0645\u0634\u062e\u0635\u060c \u0686\u06cc\u062f\u0645\u0627\u0646\u06cc \u0628\u0627 \u062d\u062f\u0627\u06a9\u062b\u0631 \u062a\u0642\u0627\u0631\u0646 \u0648 \u062e\u0637\u0648\u0637 \u0645\u0648\u0627\u0632\u06cc \u062a\u0623\u0645\u06cc\u0646 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,l.kt)(j.Z,{caption:"\u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",imageProps:{src:"/static/media/iconography-consistency.svg",alt:"\u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:860,height:220},mdxType:"Image"}),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u0628\u0648\u0645 \u062f\u06cc\u0632\u0627\u06cc\u0646"),(0,l.kt)(Z.Z,{anchorId:"\u0628\u0648\u0645 \u062f\u06cc\u0632\u0627\u06cc\u0646",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0628\u0648\u0645 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u062f\u0631 \u0641\u0636\u0627\u06cc\u06cc \u0645\u0631\u0628\u0639 \u0628\u0627 \u0627\u0628\u0639\u0627\u062f 24dp \u062f\u0631 \u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u062e\u0637\u0648\u0637 \u0648 \u0627\u0634\u06a9\u0627\u0644 \u0647\u0646\u062f\u0633\u06cc \u0633\u0627\u0632\u0646\u062f\u0647\u0654 \u0622\u06cc\u06a9\u0648\u0646 \u0645\u062d\u062f\u0648\u062f \u0628\u0647 \u0622\u0646 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0627\u062c\u0632\u0627\u0621 \u0645\u0639\u0645\u0648\u0644\u0627 \u062f\u0631 \u0645\u062d\u062f\u0648\u062f\u0647\u0654 \u0645\u0631\u0628\u0639\u06cc 22dp \u062f\u0631 \u0645\u0631\u06a9\u0632 \u0628\u0648\u0645 \u0642\u0631\u0627\u0631 \u0645\u06cc \u06af\u06cc\u0631\u0646\u062f \u0648 \u062f\u0631 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9\u0647 \u067e\u06cc\u0686\u06cc\u062f\u06af\u06cc \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0648 \u062a\u0623\u0645\u06cc\u0646 \u062e\u0648\u0627\u0646\u0627\u06cc\u06cc \u0622\u06cc\u06a9\u0648\u0646 \u0641\u0636\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u062f \u0627\u06cc\u0646 \u0645\u062d\u062f\u0648\u062f\u0647 \u0628\u0647 \u0627\u0628\u0639\u0627\u062f 24dp \u062f\u0631 \u06cc\u06a9 \u0628\u0639\u062f \u0627\u0641\u0632\u0627\u06cc\u0634 \u0645\u06cc\u200c\u06cc\u0627\u0628\u062f."),(0,l.kt)(c.Z,{mdxType:"Row"},(0,l.kt)(u.Z,{all:"12",sm:"6",mdxType:"Column"},(0,l.kt)(j.Z,{imageProps:{src:"/static/media/iconography-grids.svg",alt:"\u06af\u0631\u06cc\u062f\u0647\u0627 \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:328,height:328},mdxType:"Image"})),(0,l.kt)(u.Z,{all:"12",sm:"6",mdxType:"Column"},(0,l.kt)(j.Z,{imageProps:{src:"/static/media/iconography-guidelines.svg",alt:"\u06af\u0627\u06cc\u062f\u0644\u0627\u06cc\u0646\u200c\u0647\u0627 \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:328,height:328},mdxType:"Image"}))),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u0634\u06a9\u0644\u200c\u0647\u0627\u06cc \u0647\u0646\u062f\u0633\u06cc"),(0,l.kt)(Z.Z,{anchorId:"\u0634\u06a9\u0644\u200c\u0647\u0627\u06cc \u0647\u0646\u062f\u0633\u06cc",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u062f\u0627\u06cc\u0631\u0647\u060c \u0645\u0631\u0628\u0639\u060c \u0645\u0633\u062a\u0637\u06cc\u0644\u200c \u0627\u0641\u0642\u06cc\u060c \u0639\u0645\u0648\u062f\u06cc \u0648 \u0645\u0648\u0631\u0628 \u0634\u06a9\u0644\u200c\u0647\u0627\u06cc \u0647\u0646\u062f\u0633\u06cc \u0627\u0635\u0644\u06cc\u200c\u0627\u06cc \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0686\u06cc\u062f\u0645\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u0637\u0631\u0627\u062d\u06cc \u0646\u0645\u0627\u062f \u0627\u0646\u062a\u062e\u0627\u0628\u200c\u0634\u062f\u0647 \u0628\u0647\u200c\u06a9\u0627\u0631 \u0645\u06cc\u200c\u0631\u0648\u0646\u062f. \u0628\u0627 \u062d\u0641\u0638 \u0627\u06cc\u0646 \u0634\u06a9\u0644\u200c\u0647\u0627 \u062f\u0631 \u0632\u0645\u06cc\u0646\u0647\u0654 \u0637\u0631\u0627\u062d\u06cc\u060c \u0633\u0627\u062e\u062a\u0627\u0631\u06cc \u0647\u0645\u0627\u0647\u0646\u06af \u0648 \u0627\u0646\u0639\u0637\u0627\u0641\u200c\u067e\u0630\u06cc\u0631 \u062f\u0631 \u0637\u0631\u0627\u062d\u06cc \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0686\u06cc\u062f\u0645\u0627\u0646 \u0627\u062c\u0632\u0627\u0621 \u0622\u06cc\u06a9\u0648\u0646 \u0631\u0627 \u062f\u0631 \u0641\u0636\u0627\u06cc \u0628\u0648\u0645 \u062a\u0646\u0638\u06cc\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f.",(0,l.kt)("br",null),"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0633\u0627\u06cc\u0631 \u0634\u06a9\u0644\u200c\u0647\u0627\u06cc \u0647\u0646\u062f\u0633\u06cc \u0645\u0627\u0646\u0646\u062f \u0645\u062b\u0644\u062b\u060c \u0686\u0647\u0627\u0631\u0636\u0644\u0639\u06cc \u0648 \u0686\u0646\u062f \u0636\u0644\u0639\u06cc\u200c\u0647\u0627\u06cc \u0645\u0646\u062a\u0638\u0645 \u0648 \u062d\u0641\u0638 \u062a\u0642\u0627\u0631\u0646 \u062d\u062f\u0627\u06a9\u062b\u0631\u06cc\u060c \u0627\u062c\u0632\u0627\u0621 \u0622\u06cc\u06a9\u0648\u0646 \u0637\u0631\u0627\u062d\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u062f\u0631 \u0633\u0627\u062e\u062a\u0627\u0631 \u0634\u06a9\u0644\u200c\u0647\u0627\u06cc \u0647\u0646\u062f\u0633\u06cc \u0627\u0635\u0644\u06cc \u06a9\u0646\u0627\u0631 \u0647\u0645 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f."),(0,l.kt)(j.Z,{imageProps:{src:"/static/media/iconography-shapes.svg",alt:"\u0627\u0634\u06a9\u0627\u0644 \u0647\u0646\u062f\u0633\u06cc \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:860,height:724},mdxType:"Image"}),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u0636\u062e\u0627\u0645\u062a \u062e\u0637"),(0,l.kt)(Z.Z,{anchorId:"\u0636\u062e\u0627\u0645\u062a \u062e\u0637",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0636\u062e\u0627\u0645\u062a \u062e\u0637 \u062f\u0631 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0627\u0635\u0644\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 2dp \u0627\u0633\u062a \u0648 \u062f\u0631 \u0637\u0631\u0627\u062d\u06cc\u200c\u0647\u0627\u06cc\u06cc \u0628\u0627 \u0627\u062c\u0632\u0627\u0621 \u067e\u06cc\u0686\u06cc\u062f\u0647 \u0627\u06cc\u0646 \u0636\u062e\u0627\u0645\u062a \u062f\u0631 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u063a\u06cc\u0631 \u0627\u0635\u0644\u06cc \u0628\u0647 1.5dp \u0648 1dp \u06a9\u0627\u0647\u0634 \u0645\u06cc\u200c\u06cc\u0627\u0628\u062f."),(0,l.kt)(j.Z,{imageProps:{src:"/static/media/iconography-strokes.svg",alt:"\u0636\u062e\u0627\u0645\u062a \u062e\u0637\u0648\u0637 \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:860,height:205},mdxType:"Image"}),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u06af\u0648\u0634\u0647\u200c\u0647\u0627"),(0,l.kt)(Z.Z,{anchorId:"\u06af\u0648\u0634\u0647\u200c\u0647\u0627",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0634\u0639\u0627\u0639 \u06af\u0648\u0634\u0647\u200c\u0647\u0627\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u062f\u0631 \u0627\u0646\u062a\u0647\u0627\u06cc \u062e\u0637\u0648\u0637\u06cc \u0628\u0627 \u0632\u0627\u0648\u06cc\u0647\u0654 \u06f9\u06f0 \u062f\u0631\u062c\u0647 \u0648 \u0632\u0648\u0627\u06cc\u0627\u06cc \u0628\u06cc\u0631\u0648\u0646\u06cc \u0634\u06a9\u0644\u200c\u0647\u0627 2dp \u0627\u0633\u062a. \u062f\u0631 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062e\u0637\u0648\u0637 \u0628\u0627 \u0632\u0627\u0648\u06cc\u0647\u200c\u0627\u06cc \u063a\u06cc\u0631 \u0627\u0632 \u06f9\u06f0 \u062f\u0631\u062c\u0647 \u062e\u0645\u06cc\u062f\u0647 \u0634\u062f\u0647 \u06cc\u0627 \u0628\u0627 \u0645\u0646\u062d\u0646\u06cc\u200c\u0647\u0627 \u062a\u0644\u0627\u0642\u06cc \u062f\u0627\u0631\u0646\u062f \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0632\u0648\u0627\u06cc\u0627\u06cc \u062f\u0631\u0648\u0646\u06cc \u0634\u06a9\u0644\u200c\u0647\u0627\u060c \u06af\u0631\u062f\u06cc \u06af\u0648\u0634\u0647\u200c\u0647\u0627 \u0627\u0632 1dp \u062a\u0627 0dp \u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f. \u062a\u0645\u0627\u0645\u06cc \u062e\u0637\u0648\u0637 \u0627\u0637\u0631\u0627\u0641 \u0627\u0634\u06a9\u0627\u0644 \u0628\u0647 \u06af\u0648\u0634\u0647\u0654 \u06a9\u0627\u0645\u0644\u0627 \u06af\u0631\u062f \u0645\u0646\u062a\u0647\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0628\u0647\u200c\u063a\u06cc\u0631 \u0627\u0632 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9\u0647 \u0634\u06a9\u0644 \u06cc\u0627 \u062e\u0637\u06cc \u062f\u06cc\u06af\u0631 \u0628\u0627 \u0632\u0627\u0648\u06cc\u0647\u200c\u0627\u06cc \u063a\u06cc\u0631 \u0627\u0632 \u06f9\u06f0 \u062f\u0631\u062c\u0647 \u0622\u0646 \u0631\u0627 \u0628\u0631\u06cc\u062f\u0647 \u0628\u0627\u0634\u062f."),(0,l.kt)(j.Z,{imageProps:{src:"/static/media/iconography-corners.svg",alt:"\u0636\u062e\u0627\u0645\u062a \u062e\u0637\u0648\u0637 \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:860,height:205},mdxType:"Image"}),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u0627\u0633\u062a\u0627\u06cc\u0644"),(0,l.kt)(Z.Z,{anchorId:"\u0627\u0633\u062a\u0627\u06cc\u0644",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a \u0628\u0627 \u06f2 \u0627\u0633\u062a\u0627\u06cc\u0644 \u062a\u0648\u067e\u0631 \u0648 \u062a\u0648\u062e\u0627\u0644\u06cc \u0637\u0631\u0627\u062d\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u06a9\u0647 \u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0645\u062d\u0644 \u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0631 \u0645\u062d\u0635\u0648\u0644 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0627\u0632 \u0647\u0631 \u062f\u0648\u06cc \u0622\u0646\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."),(0,l.kt)(j.Z,{imageProps:{src:"/static/media/iconography-styles.svg",alt:"\u0627\u0633\u062a\u0627\u06cc\u0644 \u062f\u0631 \u062f\u06cc\u0632\u0627\u06cc\u0646 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a",unoptimized:!0,width:860,height:220},mdxType:"Image"}),(0,l.kt)("h3",null,(0,l.kt)("span",null,"\u0645\u0642\u06cc\u0627\u0633"),(0,l.kt)(Z.Z,{anchorId:"\u0645\u0642\u06cc\u0627\u0633",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u062f\u0631 \u0645\u0642\u06cc\u0627\u0633 24dp \u062f\u0631 \u0645\u062e\u062a\u0635\u0627\u062a \u0635\u062d\u06cc\u062d \u067e\u06cc\u06a9\u0633\u0644\u200c\u0647\u0627\u06cc \u0628\u0648\u0645 \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u062a\u0627 \u06a9\u0627\u0645\u0644\u0627\u064b \u0634\u0641\u0627\u0641 \u0628\u0627\u0634\u0646\u062f. Perfect Pixel \u0628\u0648\u062f\u0646 \u0627\u062c\u0632\u0627\u0621 \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u062f \u062a\u0627 \u062f\u0631 \u0645\u0642\u06cc\u0627\u0633\u200c\u0647\u0627\u06cc \u06a9\u0648\u0686\u06a9\u200c\u062a\u0631 \u0648 \u0628\u0632\u0631\u06af\u200c\u062a\u0631 \u0627\u0632 24dp \u062a\u0627 \u062d\u062f \u0632\u06cc\u0627\u062f\u06cc \u0627\u0632 \u0627\u0639\u0648\u062c\u0627\u062c (Distortion) \u0627\u06cc\u0646 \u0627\u062c\u0632\u0627\u0621 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u0634\u0648\u062f."),(0,l.kt)("table",{layout:"fixed",cols:2},(0,l.kt)("caption",null,"\u0645\u0642\u06cc\u0627\u0633\u200c\u0647\u0627\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u0645\u0642\u06cc\u0627\u0633"),(0,l.kt)("th",null,"\u0646\u0627\u0645 \u0645\u0642\u06cc\u0627\u0633"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"16dp"),(0,l.kt)("td",null,"xxs")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"18dp"),(0,l.kt)("td",null,"xs")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"20dp"),(0,l.kt)("td",null,"sm")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"24dp"),(0,l.kt)("td",null,"md")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"32dp"),(0,l.kt)("td",null,"lg")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"40dp"),(0,l.kt)("td",null,"xlg")))),(0,l.kt)("h2",null,(0,l.kt)("span",null,"\u0642\u0648\u0627\u0639\u062f \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc"),(0,l.kt)(Z.Z,{anchorId:"\u0642\u0648\u0627\u0639\u062f \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"\u0646\u0627\u0645\u200c \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u0646\u0628\u0627\u06cc\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u062f \u0622\u0646\u200c\u0647\u0627 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0627\u0634\u0627\u0631\u0647 \u06a9\u0646\u062f\u060c \u0628\u0644\u06a9\u0647 \u0628\u0627\u06cc\u062f \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u062a\u0648\u0635\u06cc\u0641 \u06a9\u0646\u062f.",(0,l.kt)("br",null),"\u0628\u0631\u0627\u06cc \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627 \u062f\u0631 \u0633\u0646\u0651\u062a \u0627\u0632 \u0641\u0631\u0645\u0648\u0644 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f:"),(0,l.kt)(O,{codeBlock:!0,mdxType:"Code"},"{object-names}-{shape?}-{size?}-{multiple?}-{variant?-number?}-{outlined?}-{thickness?}"),(0,l.kt)("div",{"data-notebox":!0},'\u062a\u0648\u062c\u0647: \u0639\u0644\u0627\u0645\u062a "?" \u0628\u0647 \u0645\u0639\u0646\u06cc \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc \u0648 \u0645\u0648\u0642\u0639\u06cc\u062a\u06cc \u0628\u0648\u062f\u0646 \u06a9\u0644\u06cc\u062f\u0648\u0627\u0698\u0647 \u0627\u0633\u062a.'),(0,l.kt)("table",{layout:"fixed"},(0,l.kt)("caption",null,"\u0642\u0648\u0627\u0639\u062f \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc \u0622\u06cc\u06a9\u0648\u0646\u200c\u0647\u0627\u06cc \u0633\u0646\u0651\u062a"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Keyword"),(0,l.kt)("th",null,"\u06a9\u0627\u0631\u0628\u0631\u062f"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{object-names}")),(0,l.kt)("td",null,'\u062a\u0648\u0635\u06cc\u0641 \u0627\u0632 \u0686\u067e \u0628\u0647 \u0631\u0627\u0633\u062a \u0622\u0628\u062c\u06a9\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u0634\u062f\u0647 \u062f\u0631 \u0622\u06cc\u06a9\u0648\u0646 \u06a9\u0647 \u0628\u06cc\u0646 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 "-" \u0641\u0627\u0635\u0644\u0647\u200c\u06af\u0630\u0627\u0631\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{shapes}")),(0,l.kt)("td",null,"\u062a\u0648\u0635\u06cc\u0641 \u0634\u06a9\u0644 \u067e\u0633\u200c\u0632\u0645\u06cc\u0646\u0647\u0654 \u0622\u06cc\u06a9\u0648\u0646. (square, circle, card and etc.)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{size}")),(0,l.kt)("td",null,"\u062a\u0648\u0635\u06cc\u0641 \u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0622\u06cc\u06a9\u0648\u0646 (small, medium, large and etc.)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{multiple}")),(0,l.kt)("td",null,"\u062a\u0648\u0635\u06cc\u0641 \u062a\u06a9\u0631\u0627\u0631 \u062f\u0631 \u0622\u06cc\u06a9\u0648\u0646. (\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0637\u0631\u062d \u0627\u0635\u0644\u06cc \u062a\u06a9\u0631\u0627\u0631 \u0634\u062f\u0647 \u0628\u0627\u0634\u062f)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{variant-number}")),(0,l.kt)("td",null,"\u06af\u0627\u0647\u06cc \u0686\u0646\u062f\u06cc\u0646 \u0637\u0631\u062d \u0627\u0632 \u06cc\u06a9 \u0622\u06cc\u06a9\u0648\u0646 \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a \u06a9\u0647 \u0628\u0631\u0627\u06cc \u062a\u0645\u0627\u06cc\u0632 \u0628\u06cc\u0646 \u0622\u0646\u200c\u0647\u0627 \u0627\u0632 \u06a9\u0644\u06cc\u062f\u0648\u0627\u0698\u0647\u0654 variant \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0686\u0646\u062f\u06cc\u0646 \u06af\u0648\u0646\u0647\u0654 \u0645\u062e\u062a\u0644\u0641 \u0627\u0632 \u0622\u06cc\u06a9\u0648\u0646 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u060c \u0634\u0645\u0627\u0631\u0647\u0654 \u06af\u0648\u0646\u0647 \u0647\u0645 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0645\u062b\u0627\u0644: *-variant-1, *-variant-2 and etc.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{outlined}")),(0,l.kt)("td",null,'\u062a\u0648\u0635\u06cc\u0641 \u0627\u06cc\u0646\u06a9\u0647 \u0622\u06cc\u06a9\u0648\u0646 \u062e\u0637\u06cc \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a \u06cc\u0627 \u0646\u0647. \u062f\u0631 \u0635\u0648\u0631\u062a \u062e\u0637\u06cc \u0628\u0648\u062f\u0646 \u0622\u06cc\u06a9\u0648\u0646 \u062f\u0631 \u0627\u0646\u062a\u0647\u0627 \u06a9\u0644\u06cc\u062f\u0648\u0627\u0698\u0647\u0654 "o-" \u0646\u0648\u0634\u062a\u0647\u200c \u0645\u06cc\u200c\u0634\u0648\u062f.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(O,{mdxType:"Code"},"{thickness}")),(0,l.kt)("td",null,"\u062a\u0648\u0635\u06cc\u0641 \u0636\u062e\u0627\u0645\u062a \u0622\u06cc\u06a9\u0648\u0646. (thick or thin)")))))}S.isMDXComponent=!0},1177:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundation/icon",function(){return e(5403)}])}},function(t){t.O(0,[841,433,774,888,179],(function(){return n=1177,t(t.s=n);var n}));var n=t.O();_N_E=n}]);