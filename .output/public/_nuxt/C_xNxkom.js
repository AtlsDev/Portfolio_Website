import{u as l,d as i,i as p,x as n,y as o,F as m,D as _,E as k,v as r,G as f,H as v,z as y}from"./CQrt7xFJ.js";import{_ as h}from"./DlAUqK2U.js";function C(){const a=l();return{navigateTo(e){a.push({name:e})},replacePath(e){a.replace({name:e})}}}const b=["onClick"],g=i({__name:"default",setup(a){const e=t=>{C().navigateTo(t)},c=p(()=>l().currentRoute.value.name),u=[{key:"me",label:"Me"},{key:"projects",label:"Projects"},{key:"works",label:"Works"},{key:"contact",label:"Contact me"}];return(t,B)=>(r(),n("div",null,[o("header",null,[(r(),n(m,null,_(u,(s,d)=>o("div",{key:d,class:f(["headerButtons",s.key===v(c)?"headerButtonsClick":""]),onClick:x=>e(s.key)},y(s.label),11,b)),64))]),k(t.$slots,"default",{},void 0)]))}}),z=h(g,[["__scopeId","data-v-fc744de3"]]);export{z as default};
