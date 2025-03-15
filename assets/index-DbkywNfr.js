import{y as ae,r as G,z as Se,A as xe,B as ce,C as ue,D as Z,G as _,H as ge,I as ke,J as X,b as x,K as de,L as Ae,M as Te,E as Ie,N as $e,O as $,P as re,Q as ze,c as F,R as oe,S as se,e as I,f as P,j as U,x as H,w as S,T as Be,U as B,V as O,W as J,g as b,X as Le,F as he,k as Ce,Y as ve,Z as Oe,$ as Me,a0 as ye,o as me,a1 as Fe,a2 as Pe,a3 as M,a4 as qe,a5 as je,a6 as Re,a7 as He,t as Ue,_ as Ve,a8 as _e,u as We,a9 as Ye,h as Ge,i as ee,aa as Je,n as Qe,p as Xe,q as Ze,s as et,v as tt}from"./index-BUOJNwMM.js";import{f as nt,s as ot,E as st,b as dt,c as at}from"./index-DR_6FQwc.js";import{E as rt}from"./index-D8gJjlsW.js";import"./scroll-BlHBa8yx.js";const V="$treeNodeId",Ne=function(t,e){!e||e[V]||Object.defineProperty(e,V,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},fe=function(t,e){return t?e[t]:e[V]},ie=(t,e,n)=>{const s=t.value.currentNode;n();const o=t.value.currentNode;s!==o&&e("current-change",o?o.data:null,o)},le=t=>{let e=!0,n=!0,s=!0;for(let o=0,d=t.length;o<d;o++){const a=t[o];(a.checked!==!0||a.indeterminate)&&(e=!1,a.disabled||(s=!1)),(a.checked!==!1||a.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:s,half:!e&&!n}},Q=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:s}=le(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):s?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const o=t.parent;!o||o.level===0||t.store.checkStrictly||Q(o)},te=function(t,e){const n=t.store.props,s=t.data||{},o=n[e];if(typeof o=="function")return o(s,t);if(typeof o=="string")return s[o];if(typeof o>"u"){const d=s[e];return d===void 0?"":d}};let it=0;class q{constructor(e){this.id=it++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)ae(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const d=te(this,"isLeaf");typeof d=="boolean"&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||Ne(this,this.data),!this.data)return;const s=e.defaultExpandedKeys,o=e.key;o&&s&&s.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Ne(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=te(this,"children")||[];for(let s=0,o=n.length;s<o;s++)this.insertChild({data:n[s]})}get label(){return te(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return te(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(s=>s===e||n&&s.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,s){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof q)){if(!s){const o=this.getChildren(!0);o.includes(e.data)||(typeof n>"u"||n<0?o.push(e.data):o.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=G(new q(e)),e instanceof q&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let s;n&&(s=this.childNodes.indexOf(n)),this.insertChild(e,s)}insertAfter(e,n){let s;n&&(s=this.childNodes.indexOf(n),s!==-1&&(s+=1)),this.insertChild(e,s)}removeChild(e){const n=this.getChildren()||[],s=n.indexOf(e.data);s>-1&&n.splice(s,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let s=0;s<this.childNodes.length;s++)if(this.childNodes[s].data===e){n=this.childNodes[s];break}n&&this.removeChild(n)}expand(e,n){const s=()=>{if(n){let o=this.parent;for(;o.level>0;)o.expanded=!0,o=o.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(o=>{o.canFocus=!0})};this.shouldLoadData()?this.loadData(o=>{Array.isArray(o)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||Q(this),s())}):s()}doCreateChildren(e,n={}){e.forEach(s=>{this.insertChild(Object.assign({data:s},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,s,o){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:a,allWithoutDisable:i}=le(this.childNodes);!this.isLeaf&&!a&&i&&(this.checked=!1,e=!1);const f=()=>{if(n){const g=this.childNodes;for(let r=0,y=g.length;r<y;r++){const N=g[r];o=o||e!==!1;const v=N.disabled?N.checked:o;N.setChecked(v,n,!0,o)}const{half:u,all:l}=le(g);l||(this.checked=l,this.indeterminate=u)}};if(this.shouldLoadData()){this.loadData(()=>{f(),Q(this)},{checked:e!==!1});return}else f()}const d=this.parent;!d||d.level===0||s||Q(d)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const s=this.store.props;let o="children";return s&&(o=s.children||"children"),n[o]===void 0&&(n[o]=null),e&&!n[o]&&(n[o]=[]),n[o]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(d=>d.data),s={},o=[];e.forEach((d,a)=>{const i=d[V];!!i&&n.findIndex(g=>g[V]===i)>=0?s[i]={index:a,data:d}:o.push({index:a,data:d})}),this.store.lazy||n.forEach(d=>{s[d[V]]||this.removeChildByData(d)}),o.forEach(({index:d,data:a})=>{this.insertChild({data:a},d)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const s=d=>{this.childNodes=[],this.doCreateChildren(d,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},o=()=>{this.loading=!1};this.store.load(this,s,o)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const s=n.shift();n.unshift(...s.childNodes),e(s)}}reInitChecked(){this.store.checkStrictly||Q(this)}}class lt{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)ae(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new q({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,s=this.lazy,o=function(d){const a=d.root?d.root.childNodes:d.childNodes;if(a.forEach(i=>{i.visible=n.call(i,e,i.data,i),o(i)}),!d.visible&&a.length){let i=!0;i=!a.some(f=>f.visible),d.root?d.root.visible=i===!1:d.visible=i===!1}e&&d.visible&&!d.isLeaf&&(!s||d.loaded)&&d.expand()};o(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof q)return e;const n=Se(e)?fe(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const s=this.getNode(n);s.parent.insertBefore({data:e},s)}insertAfter(e,n){const s=this.getNode(n);s.parent.insertAfter({data:e},s)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const s=xe(n)?this.root:this.getNode(n);s&&s.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(s=>{const o=n[s];o&&o.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(s=>{this.deregisterNode(s)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const s=[],o=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(i=>{(i.checked||n&&i.indeterminate)&&(!e||e&&i.isLeaf)&&s.push(i.data),o(i)})};return o(this),s}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),n(d)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const s in n)ae(n,s)&&e.push(n[s]);return e}updateChildren(e,n){const s=this.nodesMap[e];if(!s)return;const o=s.childNodes;for(let d=o.length-1;d>=0;d--){const a=o[d];this.remove(a.data)}for(let d=0,a=n.length;d<a;d++){const i=n[d];this.append(i,s.data)}}_setCheckedKeys(e,n=!1,s){const o=this._getAllNodes().sort((f,g)=>f.level-g.level),d=Object.create(null),a=Object.keys(s);o.forEach(f=>f.setChecked(!1,!1));const i=f=>{f.childNodes.forEach(g=>{var u;d[g.data[e]]=!0,(u=g.childNodes)!=null&&u.length&&i(g)})};for(let f=0,g=o.length;f<g;f++){const u=o[f],l=u.data[e].toString();if(!a.includes(l)){u.checked&&!d[l]&&u.setChecked(!1,!1);continue}if(u.childNodes.length&&i(u),u.isLeaf||this.checkStrictly){u.setChecked(!0,!1);continue}if(u.setChecked(!0,!0),n){u.setChecked(!1,!1);const y=function(N){N.childNodes.forEach(m=>{m.isLeaf||m.setChecked(!1,!1),y(m)})};y(u)}}}setCheckedNodes(e,n=!1){const s=this.key,o={};e.forEach(d=>{o[(d||{})[s]]=!0}),this._setCheckedKeys(s,n,o)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const s=this.key,o={};e.forEach(d=>{o[d]=!0}),this._setCheckedKeys(s,n,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const s=this.getNode(n);s&&s.expand(null,this.autoExpandParent)})}setChecked(e,n,s){const o=this.getNode(e);o&&o.setChecked(!!n,s)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const s=e[this.key],o=this.nodesMap[s];this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const s=this.getNode(e);s&&(this.setCurrentNode(s),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const ct=ue({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=Z("tree"),n=_("NodeInstance"),s=_("RootTree");return()=>{const o=t.node,{data:d,store:a}=o;return t.renderContent?t.renderContent(ge,{_self:n,node:o,data:d,store:a}):ke(s.ctx.slots,"default",{node:o,data:d},()=>[ge("span",{class:e.be("node","label")},[o.label])])}}});var ut=ce(ct,[["__file","tree-node-content.vue"]]);function be(t){const e=_("TreeNodeMap",null),n={treeNodeExpand:s=>{t.node!==s&&t.node.collapse()},children:[]};return e&&e.children.push(n),X("TreeNodeMap",n),{broadcastExpanded:s=>{if(t.accordion)for(const o of n.children)o.treeNodeExpand(s)}}}const Ee=Symbol("dragEvents");function ht({props:t,ctx:e,el$:n,dropIndicator$:s,store:o}){const d=Z("tree"),a=x({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return X(Ee,{treeNodeDragStart:({event:u,treeNode:l})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(l.node))return u.preventDefault(),!1;u.dataTransfer.effectAllowed="move";try{u.dataTransfer.setData("text/plain","")}catch{}a.value.draggingNode=l,e.emit("node-drag-start",l.node,u)},treeNodeDragOver:({event:u,treeNode:l})=>{const r=l,y=a.value.dropNode;y&&y.node.id!==r.node.id&&de(y.$el,d.is("drop-inner"));const N=a.value.draggingNode;if(!N||!r)return;let v=!0,m=!0,k=!0,p=!0;typeof t.allowDrop=="function"&&(v=t.allowDrop(N.node,r.node,"prev"),p=m=t.allowDrop(N.node,r.node,"inner"),k=t.allowDrop(N.node,r.node,"next")),u.dataTransfer.dropEffect=m||v||k?"move":"none",(v||m||k)&&(y==null?void 0:y.node.id)!==r.node.id&&(y&&e.emit("node-drag-leave",N.node,y.node,u),e.emit("node-drag-enter",N.node,r.node,u)),v||m||k?a.value.dropNode=r:a.value.dropNode=null,r.node.nextSibling===N.node&&(k=!1),r.node.previousSibling===N.node&&(v=!1),r.node.contains(N.node,!1)&&(m=!1),(N.node===r.node||N.node.contains(r.node))&&(v=!1,m=!1,k=!1);const A=r.$el.querySelector(`.${d.be("node","content")}`).getBoundingClientRect(),T=n.value.getBoundingClientRect();let D;const j=v?m?.25:k?.45:1:-1,R=k?m?.75:v?.55:0:1;let z=-9999;const h=u.clientY-A.top;h<A.height*j?D="before":h>A.height*R?D="after":m?D="inner":D="none";const E=r.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),K=s.value;D==="before"?z=E.top-T.top:D==="after"&&(z=E.bottom-T.top),K.style.top=`${z}px`,K.style.left=`${E.right-T.left}px`,D==="inner"?Ae(r.$el,d.is("drop-inner")):de(r.$el,d.is("drop-inner")),a.value.showDropIndicator=D==="before"||D==="after",a.value.allowDrop=a.value.showDropIndicator||p,a.value.dropType=D,e.emit("node-drag-over",N.node,r.node,u)},treeNodeDragEnd:u=>{const{draggingNode:l,dropType:r,dropNode:y}=a.value;if(u.preventDefault(),u.dataTransfer.dropEffect="move",l&&y){const N={data:l.node.data};r!=="none"&&l.node.remove(),r==="before"?y.node.parent.insertBefore(N,y.node):r==="after"?y.node.parent.insertAfter(N,y.node):r==="inner"&&y.node.insertChild(N),r!=="none"&&(o.value.registerNode(N),o.value.key&&l.node.eachNode(v=>{var m;(m=o.value.nodesMap[v.data[o.value.key]])==null||m.setChecked(v.checked,!o.value.checkStrictly)})),de(y.$el,d.is("drop-inner")),e.emit("node-drag-end",l.node,y.node,r,u),r!=="none"&&e.emit("node-drop",l.node,y.node,r,u)}l&&!y&&e.emit("node-drag-end",l.node,null,r,u),a.value.showDropIndicator=!1,a.value.draggingNode=null,a.value.dropNode=null,a.value.allowDrop=!0}}),{dragState:a}}const ft=ue({name:"ElTreeNode",components:{ElCollapseTransition:Te,ElCheckbox:nt,NodeContent:ut,ElIcon:Ie,Loading:$e},props:{node:{type:q,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=Z("tree"),{broadcastExpanded:s}=be(t),o=_("RootTree"),d=x(!1),a=x(!1),i=x(null),f=x(null),g=x(null),u=_(Ee),l=ve();X("NodeInstance",l),t.node.expanded&&(d.value=!0,a.value=!0);const r=o.props.props.children||"children";$(()=>{const h=t.node.data[r];return h&&[...h]},()=>{t.node.updateChildren()}),$(()=>t.node.indeterminate,h=>{v(t.node.checked,h)}),$(()=>t.node.checked,h=>{v(h,t.node.indeterminate)}),$(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),$(()=>t.node.expanded,h=>{re(()=>d.value=h),h&&(a.value=!0)});const y=h=>fe(o.props.nodeKey,h.data),N=h=>{const E=t.props.class;if(!E)return{};let K;if(Oe(E)){const{data:W}=h;K=E(W,h)}else K=E;return Me(K)?{[K]:!0}:K},v=(h,E)=>{(i.value!==h||f.value!==E)&&o.ctx.emit("check-change",t.node.data,h,E),i.value=h,f.value=E},m=h=>{ie(o.store,o.ctx.emit,()=>o.store.value.setCurrentNode(t.node)),o.currentNode.value=t.node,o.props.expandOnClickNode&&p(),o.props.checkOnClickNode&&!t.node.disabled&&A(null,{target:{checked:!t.node.checked}}),o.ctx.emit("node-click",t.node.data,t.node,l,h)},k=h=>{o.instance.vnode.props.onNodeContextmenu&&(h.stopPropagation(),h.preventDefault()),o.ctx.emit("node-contextmenu",h,t.node.data,t.node,l)},p=()=>{t.node.isLeaf||(d.value?(o.ctx.emit("node-collapse",t.node.data,t.node,l),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,l)))},A=(h,E)=>{t.node.setChecked(E.target.checked,!o.props.checkStrictly),re(()=>{const K=o.store.value;o.ctx.emit("check",t.node.data,{checkedNodes:K.getCheckedNodes(),checkedKeys:K.getCheckedKeys(),halfCheckedNodes:K.getHalfCheckedNodes(),halfCheckedKeys:K.getHalfCheckedKeys()})})};return{ns:n,node$:g,tree:o,expanded:d,childNodeRendered:a,oldChecked:i,oldIndeterminate:f,getNodeKey:y,getNodeClass:N,handleSelectChange:v,handleClick:m,handleContextMenu:k,handleExpandIconClick:p,handleCheckChange:A,handleChildNodeExpand:(h,E,K)=>{s(E),o.ctx.emit("node-expand",h,E,K)},handleDragStart:h=>{o.props.draggable&&u.treeNodeDragStart({event:h,treeNode:t})},handleDragOver:h=>{h.preventDefault(),o.props.draggable&&u.treeNodeDragOver({event:h,treeNode:{$el:g.value,node:t.node}})},handleDrop:h=>{h.preventDefault()},handleDragEnd:h=>{o.props.draggable&&u.treeNodeDragEnd(h)},CaretRight:ze}}}),pt=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],gt=["aria-expanded"];function yt(t,e,n,s,o,d){const a=F("el-icon"),i=F("el-checkbox"),f=F("loading"),g=F("node-content"),u=F("el-tree-node"),l=F("el-collapse-transition");return oe((I(),P("div",{ref:"node$",class:B([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=O((...r)=>t.handleClick&&t.handleClick(...r),["stop"])),onContextmenu:e[2]||(e[2]=(...r)=>t.handleContextMenu&&t.handleContextMenu(...r)),onDragstart:e[3]||(e[3]=O((...r)=>t.handleDragStart&&t.handleDragStart(...r),["stop"])),onDragover:e[4]||(e[4]=O((...r)=>t.handleDragOver&&t.handleDragOver(...r),["stop"])),onDragend:e[5]||(e[5]=O((...r)=>t.handleDragEnd&&t.handleDragEnd(...r),["stop"])),onDrop:e[6]||(e[6]=O((...r)=>t.handleDrop&&t.handleDrop(...r),["stop"]))},[U("div",{class:B(t.ns.be("node","content")),style:Le({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(I(),H(a,{key:0,class:B([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:O(t.handleExpandIconClick,["stop"])},{default:S(()=>[(I(),H(Be(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):J("v-if",!0),t.showCheckbox?(I(),H(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=O(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):J("v-if",!0),t.node.loading?(I(),H(a,{key:2,class:B([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:S(()=>[b(f)]),_:1},8,["class"])):J("v-if",!0),b(g,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),b(l,null,{default:S(()=>[!t.renderAfterExpand||t.childNodeRendered?oe((I(),P("div",{key:0,class:B(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(I(!0),P(he,null,Ce(t.node.childNodes,r=>(I(),H(u,{key:t.getNodeKey(r),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:r,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,gt)),[[se,t.expanded]]):J("v-if",!0)]),_:1})],42,pt)),[[se,t.node.visible]])}var Nt=ce(ft,[["render",yt],["__file","tree-node.vue"]]);function kt({el$:t},e){const n=Z("tree"),s=ye([]),o=ye([]);me(()=>{a()}),Fe(()=>{s.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),$(o,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),Pe(t,"keydown",i=>{const f=i.target;if(!f.className.includes(n.b("node")))return;const g=i.code;s.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const u=s.value.indexOf(f);let l;if([M.up,M.down].includes(g)){if(i.preventDefault(),g===M.up){l=u===-1?0:u!==0?u-1:s.value.length-1;const y=l;for(;!e.value.getNode(s.value[l].dataset.key).canFocus;){if(l--,l===y){l=-1;break}l<0&&(l=s.value.length-1)}}else{l=u===-1?0:u<s.value.length-1?u+1:0;const y=l;for(;!e.value.getNode(s.value[l].dataset.key).canFocus;){if(l++,l===y){l=-1;break}l>=s.value.length&&(l=0)}}l!==-1&&s.value[l].focus()}[M.left,M.right].includes(g)&&(i.preventDefault(),f.click());const r=f.querySelector('[type="checkbox"]');[M.enter,M.space].includes(g)&&r&&(i.preventDefault(),r.click())});const a=()=>{var i;s.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=s.value[0])==null||i.setAttribute("tabindex","0")}}const Ct=ue({name:"ElTree",components:{ElTreeNode:Nt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:qe}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=je(),s=Z("tree"),o=_(ot,null),d=x(new lt({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));d.value.initialize();const a=x(d.value.root),i=x(null),f=x(null),g=x(null),{broadcastExpanded:u}=be(t),{dragState:l}=ht({props:t,ctx:e,el$:f,dropIndicator$:g,store:d});kt({el$:f},d);const r=Re(()=>{const{childNodes:c}=a.value,C=o?o.hasFilteredOptions!==0:!1;return(!c||c.length===0||c.every(({visible:L})=>!L))&&!C});$(()=>t.currentNodeKey,c=>{d.value.setCurrentNodeKey(c)}),$(()=>t.defaultCheckedKeys,c=>{d.value.setDefaultCheckedKey(c)}),$(()=>t.defaultExpandedKeys,c=>{d.value.setDefaultExpandedKeys(c)}),$(()=>t.data,c=>{d.value.setData(c)},{deep:!0}),$(()=>t.checkStrictly,c=>{d.value.checkStrictly=c});const y=c=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");d.value.filter(c)},N=c=>fe(t.nodeKey,c.data),v=c=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const C=d.value.getNode(c);if(!C)return[];const L=[C.data];let Y=C.parent;for(;Y&&Y!==a.value;)L.push(Y.data),Y=Y.parent;return L.reverse()},m=(c,C)=>d.value.getCheckedNodes(c,C),k=c=>d.value.getCheckedKeys(c),p=()=>{const c=d.value.getCurrentNode();return c?c.data:null},A=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const c=p();return c?c[t.nodeKey]:null},T=(c,C)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");d.value.setCheckedNodes(c,C)},D=(c,C)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");d.value.setCheckedKeys(c,C)},j=(c,C,L)=>{d.value.setChecked(c,C,L)},R=()=>d.value.getHalfCheckedNodes(),z=()=>d.value.getHalfCheckedKeys(),h=(c,C=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ie(d,e.emit,()=>d.value.setUserCurrentNode(c,C))},E=(c,C=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ie(d,e.emit,()=>d.value.setCurrentNodeKey(c,C))},K=c=>d.value.getNode(c),W=c=>{d.value.remove(c)},w=(c,C)=>{d.value.append(c,C)},pe=(c,C)=>{d.value.insertBefore(c,C)},De=(c,C)=>{d.value.insertAfter(c,C)},Ke=(c,C,L)=>{u(C),e.emit("node-expand",c,C,L)},we=(c,C)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");d.value.updateChildren(c,C)};return X("RootTree",{ctx:e,props:t,store:d,root:a,currentNode:i,instance:ve()}),X(He,void 0),{ns:s,store:d,root:a,currentNode:i,dragState:l,el$:f,dropIndicator$:g,isEmpty:r,filter:y,getNodeKey:N,getNodePath:v,getCheckedNodes:m,getCheckedKeys:k,getCurrentNode:p,getCurrentKey:A,setCheckedNodes:T,setCheckedKeys:D,setChecked:j,getHalfCheckedNodes:R,getHalfCheckedKeys:z,setCurrentNode:h,setCurrentKey:E,t:n,getNode:K,remove:W,append:w,insertBefore:pe,insertAfter:De,handleNodeExpand:Ke,updateKeyChildren:we}}});function vt(t,e,n,s,o,d){const a=F("el-tree-node");return I(),P("div",{ref:"el$",class:B([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(I(!0),P(he,null,Ce(t.root.childNodes,i=>(I(),H(a,{key:t.getNodeKey(i),node:i,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(I(),P("div",{key:0,class:B(t.ns.e("empty-block"))},[ke(t.$slots,"empty",{},()=>{var i;return[U("span",{class:B(t.ns.e("empty-text"))},Ue((i=t.emptyText)!=null?i:t.t("el.tree.emptyText")),3)]})],2)):J("v-if",!0),oe(U("div",{ref:"dropIndicator$",class:B(t.ns.e("drop-indicator"))},null,2),[[se,t.dragState.showDropIndicator]])],2)}var ne=ce(Ct,[["render",vt],["__file","tree.vue"]]);ne.install=t=>{t.component(ne.name,ne)};const mt=ne,bt=mt,Et={class:"btns"},Dt={class:"pagination-info"},Kt={class:"dialog-footer"},wt={__name:"index",setup(t){me(()=>{_e().then(({data:k})=>{u.value=k.data,console.log(u)}),i()});const e=We(),n=G({list:[],total:0}),s=(k={})=>{l.value=!0,re(()=>{k&&(console.log(k,g),Object.assign(g,{id:k.id,name:k.name}),N.value.setCheckedKeys(k.permission))})},o=G({pageNum:1,pageSize:10}),d=k=>{console.log(`${k} items per page`),o.pageSize=k,i()},a=k=>{console.log(`current page: ${k}`),o.pageNum=k,i()},i=()=>Ye(o).then(({data:k})=>{const{list:p,total:A}=k.data;console.log(p),n.list=p,n.total=A}),f=x(null),g=G({name:"",permissions:"",id:""}),u=x([]),l=x(!1),r=()=>{l.value=!1,f.value.resetFields(),N.value.setCheckedKeys(y)},y=[4,5],N=x(null),v=G({name:[{required:!0,message:"请输入名称",trigger:"blur"}]}),m=async k=>{k&&await k.validate((p,A)=>{if(p){const T=JSON.stringify(N.value.getCheckedKeys());Je({id:g.id,name:g.name,permissions:T}).then(({data:D})=>{console.log(D),r(),i()})}else return console.log("error submit!!",A),!1})};return(k,p)=>{const A=Qe,T=Xe,D=st,j=dt,R=at,z=Ze,h=et,E=bt,K=tt,W=rt;return I(),P(he,null,[b(A,{route:Ge(e)},null,8,["route"]),U("div",Et,[b(T,{icon:"Plus",size:"small",type:"primary",onClick:p[0]||(p[0]=w=>s(null))},{default:S(()=>p[8]||(p[8]=[ee("新增")])),_:1})]),b(j,{data:n.list,stripe:"",style:{width:"100%"}},{default:S(()=>[b(D,{prop:"id",label:"ID"}),b(D,{prop:"name",label:"昵称"}),b(D,{prop:"permissionName",label:"权限",width:"500px"}),b(D,{label:"操作",fixed:"right"},{default:S(w=>[b(T,{type:"primary",size:"small",onClick:pe=>s(w.row)},{default:S(()=>p[9]||(p[9]=[ee(" 编辑 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),U("div",Dt,[b(R,{"current-page":o.pageNum,"onUpdate:currentPage":p[1]||(p[1]=w=>o.pageNum=w),"page-size":o.pageSize,"onUpdate:pageSize":p[2]||(p[2]=w=>o.pageSize=w),size:"small","page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:d,onCurrentChange:a},null,8,["current-page","page-size","total"])]),b(W,{modelValue:l.value,"onUpdate:modelValue":p[7]||(p[7]=w=>l.value=w),"before-close":r,title:"添加权限",width:"500"},{footer:S(()=>[U("div",Kt,[b(T,{onClick:p[5]||(p[5]=w=>l.value=!1)},{default:S(()=>p[10]||(p[10]=[ee("取消")])),_:1}),b(T,{type:"primary",onClick:p[6]||(p[6]=w=>m(f.value))},{default:S(()=>p[11]||(p[11]=[ee(" 提交 ")])),_:1})])]),default:S(()=>[b(K,{ref_key:"formRef",ref:f,model:g,rules:v,"label-width":"80px","label-position":"left"},{default:S(()=>[oe(b(h,{prop:"id"},{default:S(()=>[b(z,{modelValue:g.id,"onUpdate:modelValue":p[3]||(p[3]=w=>g.id=w)},null,8,["modelValue"])]),_:1},512),[[se,!1]]),b(h,{label:"名称",prop:"name"},{default:S(()=>[b(z,{modelValue:g.name,"onUpdate:modelValue":p[4]||(p[4]=w=>g.name=w),placeholder:"请填写权限名称"},null,8,["modelValue"])]),_:1}),b(h,{label:"权限",prop:"permissions"},{default:S(()=>[b(E,{ref_key:"treeRef",ref:N,style:{"max-width":"600px"},data:u.value,"node-key":"id","show-checkbox":"","default-checked-keys":y,"default-expanded-keys":[2]},null,8,["data"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}},It=Ve(wt,[["__scopeId","data-v-9dca0dc4"]]);export{It as default};
