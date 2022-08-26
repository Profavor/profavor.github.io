import{Y as E,h as A,L as N,O as P,N as j,K as x,m as S}from"./entry.b2d48240.mjs";function h(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,h),o}var $=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))($||{}),L=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(L||{});function z({visible:e=!0,features:t=0,ourProps:r,theirProps:o,...n}){var u;let l=D(o,r),c=Object.assign(n,{props:l});if(e||t&2&&l.static)return m(c);if(t&1){let i=(u=l.unmount)==null||u?0:1;return h(i,{[0](){return null},[1](){return m({...n,props:{...l,hidden:!0,style:{display:"none"}}})}})}return m(c)}function m({props:e,attrs:t,slots:r,slot:o,name:n}){var u;let{as:l,...c}=F(e,["unmount","static"]),i=(u=r.default)==null?void 0:u.call(r,o),a={};if(l==="template"){if(i=b(i),Object.keys(c).length>0||Object.keys(t).length>0){let[f,...d]=i!=null?i:[];if(!T(f)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(t)).sort((s,p)=>s.localeCompare(p)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));return E(f,Object.assign({},c,a))}return Array.isArray(i)&&i.length===1?i[0]:i}return A(l,Object.assign({},c,a),i)}function b(e){return e.flatMap(t=>t.type===N?b(t.children):[t])}function D(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let o of e)for(let n in o)n.startsWith("on")&&typeof o[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(o=>[o,void 0])));for(let o in r)Object.assign(t,{[o](n,...u){let l=r[o];for(let c of l){if(n!=null&&n.defaultPrevented)return;c(n,...u)}}});return t}function J(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function F(e,t=[]){let r=Object.assign({},e);for(let o of t)o in r&&delete r[o];return r}function T(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let k=0;function M(){return++k}function Q(){return M()}var U=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(U||{});function y(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let g=Symbol("Context");var H=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(H||{});function X(){return I()!==null}function I(){return P(g,null)}function Z(e){j(g,e)}function C(e){if(typeof window>"u")return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=y(e);if(t)return t.ownerDocument}return document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(R||{}),W=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(W||{}),_=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(_||{});function B(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w))}var O=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(O||{});function G(e,t=0){var r;return e===((r=C(e))==null?void 0:r.body)?!1:h(t,{[0](){return e.matches(w)},[1](){let o=e;for(;o!==null;){if(o.matches(w))return!0;o=o.parentElement}return!1}})}function ee(e){e==null||e.focus({preventScroll:!0})}let Y=["textarea","input"].join(",");function q(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Y))!=null?r:!1}function K(e,t=r=>r){return e.slice().sort((r,o)=>{let n=t(r),u=t(o);if(n===null||u===null)return 0;let l=n.compareDocumentPosition(u);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function te(e,t,r=!0){var o;let n=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,u=Array.isArray(e)?r?K(e):e:B(e),l=n.activeElement,c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(l))-1;if(t&4)return Math.max(0,u.indexOf(l))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=t&32?{preventScroll:!0}:{},f=0,d=u.length,s;do{if(f>=d||f+d<=0)return 0;let p=i+f;if(t&16)p=(p+d)%d;else{if(p<0)return 3;if(p>=d)return 1}s=u[p],s==null||s.focus(a),f+=c}while(s!==n.activeElement);return s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),t&6&&q(s)&&s.select(),2}function v(e,t,r){typeof window<"u"&&x(o=>{window.addEventListener(e,t,r),o(()=>window.removeEventListener(e,t,r))})}function ne(e,t,r=S(()=>!0)){function o(n,u){if(!r.value||n.defaultPrevented)return;let l=u(n);if(l===null||!l.ownerDocument.documentElement.contains(l))return;let c=function i(a){return typeof a=="function"?i(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let i of c){if(i===null)continue;let a=i instanceof HTMLElement?i:y(i);if(a!=null&&a.contains(l))return}return!G(l,O.Loose)&&l.tabIndex!==-1&&n.preventDefault(),t(n,l)}v("click",n=>o(n,u=>u.target),!0),v("blur",n=>o(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{J as A,G as F,ee as H,R as L,O as M,W as N,L as O,z as P,$ as R,ne as T,te as a,U as b,Z as c,F as d,C as e,X as f,K as g,H as l,y as o,I as p,Q as t,h as u,v as w};
