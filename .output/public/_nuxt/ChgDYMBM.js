import{u as l,d as i,i as p,x as o,y as n,F as _,D as k,E as m,v as r,G as f,H as v,z as h}from"./65RvHgOM.js";import{_ as y}from"./DlAUqK2U.js";function C(){const t=l();return{navigateTo(e){t.push({path:e})},replacePath(e){t.replace({path:e})}}}const b=["onClick"],g=i({__name:"default",setup(t){const e=a=>{C().navigateTo(a)},c=p(()=>l().currentRoute.value.name),u=[{key:"me",label:"Me"},{key:"projects",label:"Projects"},{key:"works",label:"Works"},{key:"contact",label:"Contact me"}];return(a,B)=>(r(),o("div",null,[n("header",null,[(r(),o(_,null,k(u,(s,d)=>n("div",{key:d,class:f(["headerButtons",s.key===v(c)?"headerButtonsClick":""]),onClick:x=>e(s.key)},h(s.label),11,b)),64))]),m(a.$slots,"default",{},void 0)]))}}),z=y(g,[["__scopeId","data-v-fc744de3"]]);export{z as default};
