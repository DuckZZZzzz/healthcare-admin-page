import{_ as P,u as j,o as T,r as g,af as Y,e as f,f as $,g as e,h,j as y,w as a,i as p,t as b,d as U,x as E,F as O,ag as q,ah as x,n as A,q as H,s as L,p as R,v as G}from"./index-BUOJNwMM.js";import{E as J,a as K,b as Q,c as W}from"./index-DR_6FQwc.js";import{E as X}from"./index-BdTrpr6O.js";import{E as Z}from"./index-BkpI08W7.js";import"./scroll-BlHBa8yx.js";const ee={class:"form"},te={class:"pagination-info"},oe={__name:"index",setup(ae){const z=j();T(()=>{d()});const s=g({pageNum:1,pageSize:10}),C=n=>{console.log(`${n} items per page`),s.pageSize=n,d()},k=n=>{console.log(`current page: ${n}`),s.pageNum=n,d()},_=g({list:[],total:0}),d=(n={})=>{Y({...s,...n}).then(({data:o})=>{const{list:r,total:c}=o.data;console.log(r,c),_.list=r,_.total=c})},m=g({out_trade_no:""}),v=()=>{d(m)},S=n=>{},F=async n=>{const o=await q({id:n}),{data:r}=o;r.code===1e4?(d(),x.success("操作成功")):x.error("操作失败")};return(n,o)=>{const r=A,c=H,w=L,u=R,N=G,l=J,V=X,B=K,D=Z,I=Q,M=W;return f(),$(O,null,[e(r,{route:h(z)},null,8,["route"]),y("div",ee,[e(N,{inline:!0,model:m},{default:a(()=>[e(w,{prop:"out_trade_no"},{default:a(()=>[e(c,{modelValue:m.out_trade_no,"onUpdate:modelValue":o[0]||(o[0]=t=>m.out_trade_no=t),placeholder:"订单号"},null,8,["modelValue"])]),_:1}),e(w,null,{default:a(()=>[e(u,{type:"primary",onClick:v},{default:a(()=>o[3]||(o[3]=[p("查询")])),_:1})]),_:1})]),_:1},8,["model"])]),e(I,{data:_.list,stripe:"",style:{width:"100%",height:"70%"}},{default:a(()=>[e(l,{prop:"out_trade_no",label:"订单号",width:"150"}),e(l,{prop:"hospital_name",label:"就诊医院",width:"120"}),e(l,{prop:"service_name",label:"服务名称",width:"150"}),e(l,{label:"陪诊师头像",width:"100"},{default:a(t=>{var i;return[e(V,{style:{width:"40px",height:"40px"},src:((i=t.row.companion)==null?void 0:i.avatar)||"images/4.jpeg"},null,8,["src"])]}),_:1}),e(l,{label:"陪诊师手机号",width:"150"},{default:a(t=>{var i;return[p(b(((i=t.row.companion)==null?void 0:i.mobile)||"13097305825"),1)]}),_:1}),e(l,{prop:"price",label:"总价",width:"80"}),e(l,{prop:"paidPrice",label:"已付",width:"80"}),e(l,{label:"下单时间",width:"120"},{default:a(t=>[p(b(h(U)(t.row.order_start_time).format("YYYY-MM-DD")),1)]),_:1}),e(l,{label:"订单状态",width:"80"},{default:a(t=>[e(B,{type:S(t.row.trade_state)},{default:a(()=>[p(b(t.row.trade_state||"已完成"),1)]),_:2},1032,["type"])]),_:1}),e(l,{prop:"service_state",label:"接单状态",width:"80"}),e(l,{prop:"tel",label:"联系人手机号",width:"120"}),e(l,{label:"操作",fixed:"right",width:"100"},{default:a(t=>[t.row.trade_state==="待服务"?(f(),E(D,{key:0,"confirm-button-text":"是","cancel-button-text":"否",icon:n.InfoFilled,"icon-color":"#626AEF",title:"是否确认完成？",onConfirm:i=>F(t.row.out_trade_no)},{reference:a(()=>[e(u,{size:"small",type:"primary",link:""},{default:a(()=>o[4]||(o[4]=[p("确认完成")])),_:1})]),_:2},1032,["icon","onConfirm"])):(f(),E(u,{key:1,type:"primary",link:"",disabled:""},{default:a(()=>o[5]||(o[5]=[p("暂无服务")])),_:1}))]),_:1})]),_:1},8,["data"]),y("div",te,[e(M,{"current-page":s.pageNum,"onUpdate:currentPage":o[1]||(o[1]=t=>s.pageNum=t),"page-size":s.pageSize,"onUpdate:pageSize":o[2]||(o[2]=t=>s.pageSize=t),size:"small","page-sizes":[5,10,15,20],layout:"total, sizes, prev, pager, next, jumper",total:_.total,onSizeChange:C,onCurrentChange:k},null,8,["current-page","page-size","total"])])],64)}}},pe=P(oe,[["__scopeId","data-v-bfc0696d"]]);export{pe as default};
