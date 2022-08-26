import{j as $,k as j,l as C,a as b,t as A,m as O,e as _,h as N}from"./entry.b2d48240.mjs";import{u as T}from"./asyncData.c55bc3b2.mjs";import{h as q,j as P,u as Q}from"./json.efb2057c.mjs";import{w as x}from"./utils.55d1c089.mjs";const f=i=>Array.isArray(i)?i:i?[i]:[],E=["sort","where","only","without"],m=(i,t)=>{const e={...t};for(const r of E)e[r]&&(e[r]=f(e[r]));const a=(r,u=s=>s)=>(...s)=>(e[r]=u(...s),o),o={params:()=>Object.freeze(e),only:a("only",f),without:a("without",f),where:a("where",r=>[...f(e.where),r]),sort:a("sort",r=>[...f(e.sort),...f(r)]),limit:a("limit",r=>parseInt(String(r),10)),skip:a("skip",r=>parseInt(String(r),10)),findOne:()=>i({...e,first:!0}),find:()=>i(e),findSurround:(r,u)=>i({...e,surround:{query:r,...u}}),locale:r=>o.where({_locale:r})};return o},v=i=>{const t=x(`/query/${q(i)}`);return $fetch(t,{method:"GET",responseType:"json",params:{_params:P(i),previewToken:Q("previewToken").value}})};function g(i,...t){if(typeof i=="string"){let e=$(j(C(i,...t)));return e=e.replace(/[-[\]{}()*+.,^$\s]/g,"\\$&"),m(v).where({_path:new RegExp(`^${e}`)})}return m(v,i)}const D=b({props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:e,without:a,where:o,sort:r,limit:u,skip:s,locale:d,find:p}=A(i),h=O(()=>t.value.includes("/_")),{data:y,refresh:c}=await T(`content-query-${q(i)}`,()=>{let n;return t.value?n=g(t.value):n=g(),e.value&&(n=n.only(e.value)),a.value&&(n=n.without(a.value)),o.value&&(n=n.where(o.value)),r.value&&(n=n.sort(r.value)),u.value&&(n=n.limit(u.value)),s.value&&(n=n.skip(s.value)),d.value&&(n=n.where({_locale:d.value})),p.value==="one"?n.findOne():p.value==="surround"?t.value?n.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),n.find()):n.find()},"$4SxX7Zuw4E");return{isPartial:h,data:y,refresh:c}},render(i){var w;const t=_(),{data:e,refresh:a,isPartial:o,path:r,only:u,without:s,where:d,sort:p,limit:h,skip:y,locale:c,find:n}=i,l={path:r,only:u,without:s,where:d,sort:p,limit:h,skip:y,locale:c,find:n};if(l.find==="one"){if(!e&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:l,...this.$attrs});if(e._type&&e._type==="markdown"&&!((w=e==null?void 0:e.body)!=null&&w.children.length))return t.empty({props:l,...this.$attrs})}else if((!e||!e.length)&&t!=null&&t["not-found"])return t["not-found"]({props:l,...this.$attrs});return t!=null&&t.default?t.default({data:e,refresh:a,isPartial:o,props:l,...this.$attrs}):((S,k)=>N("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:S,data:k},null,2)))("default",{data:e,props:l,isPartial:o})}});export{D as default};
