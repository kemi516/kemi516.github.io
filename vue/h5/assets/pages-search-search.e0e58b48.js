import{r as s,n as a,C as l,o as e,c as t,w as o,i,a as u,b as h,g as n,e as c,f as r,F as d,d as f,I as m,h as g,t as p}from"./index-6ca3bd04.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const _=y({data:()=>({value:"",search:null,history:JSON.parse(localStorage.getItem("history"))||[],shows:!1}),onLoad(){},methods:{focus(){console.log("123"),this.search=[],this.value=""},change(a){this.value=a,s({url:"http://www.kangliuyong.com:10002/search",data:{appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",name:this.value},success:s=>{this.search=s.data.result,this.shows=""==this.search,console.log(this.shows)}}),this.history.length?(this.history=[...new Set([this.value,...this.history])],localStorage.setItem("history",JSON.stringify(this.history))):(this.history=[this.value],localStorage.setItem("history",JSON.stringify(this.history)))},detail(s){a({url:`../detail/detail?pid=${s}`})},huitui(){l()}}},[["render",function(s,a,l,y,_,v){const k=m,w=g,C=i;return e(),t(C,{class:"box"},{default:o((()=>{var s,l;return[u(C,{class:"uni-form-item uni-column"},{default:o((()=>[u(k,{class:"uni-input",placeholder:"请输入",onConfirm:a[0]||(a[0]=s=>v.change(_.value)),modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=s=>_.value=s),onFocus:a[2]||(a[2]=s=>v.focus())},null,8,["modelValue"]),u(w,{onClick:v.huitui},{default:o((()=>[h("取消")])),_:1},8,["onClick"])])),_:1}),(null==(s=_.search)?void 0:s.length)||_.shows?f("",!0):(e(),t(C,{key:0,class:"history"},{default:o((()=>[n("p",null,"历史记录"),u(C,null,{default:o((()=>[(e(!0),c(d,null,r(_.history,(s=>(e(),t(C,{onClick:a=>v.change(s)},{default:o((()=>[h(p(s),1)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})),_.shows?(e(),t(C,{key:1,class:"nones"},{default:o((()=>[h(" 暂无相关商品 ")])),_:1})):f("",!0),(null==(l=_.search)?void 0:l.length)?(e(),t(C,{key:2,class:"search"},{default:o((()=>[(e(!0),c(d,null,r(_.search,(s=>(e(),t(C,{class:"search-box",onClick:a=>v.detail(s.pid)},{default:o((()=>[u(C,{class:""},{default:o((()=>[n("img",{src:s.smallImg,alt:""},null,8,["src"]),u(C,{class:""},{default:o((()=>[n("p",null,p(s.name),1),n("p",null,p(s.enname),1)])),_:2},1024)])),_:2},1024),u(C,{class:"text"},{default:o((()=>[h(" ￥"+p(s.price),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256)),u(C,{class:"bottom"},{default:o((()=>[h("到底啦！")])),_:1})])),_:1})):f("",!0)]})),_:1})}],["__scopeId","data-v-cbc2436c"]]);export{_ as default};
