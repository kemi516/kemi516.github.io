import{r as a,y as e,q as t,n as l,o as s,c as i,w as n,i as o,a as d,z as u,g as m,t as r,b as c,e as f,f as h,F as g,A as p,d as v,h as _,j as b,I as k,k as N}from"./index-6ca3bd04.js";import{_ as x}from"./uni-icons.1977744e.js";import{r as C}from"./uni-app.es.8ba74fce.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";const y=w({data(){return{bagshow:!1,bgconten:"",detail:{},favd:this.$store.state.favd||[],options:[{icon:"",text:"购物袋"},{icon:"shop",text:"",info:2,infoBackgroundColor:"#007aff",infoColor:"#f5f5f5"}],sugarName:"",temName:"",value:1,bags:this.$store.state.bags||[]}},onLoad(e){this.favd=this.$store.state.favd,a({url:"http://www.kangliuyong.com:10002/productDetail",data:{appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",pid:e.pid},success:a=>{var e,t;this.detail=a.data.result[0],this.sugarName=null==(e=this.detail.sugar)?void 0:e.split("/")[0],this.temName=null==(t=this.detail.tem)?void 0:t.split("/")[0]}})},methods:{orders(){e({url:"/pages/bag/bag"})},...t(["Xfavs","Xremove","Xorder","Xbags"]),favs(a){this.bgconten="已收藏！",this.bagshow=!0,setTimeout((()=>{this.bagshow=!1}),500),this.fav=!1,console.log("kk",this.favd),this.favd=[...this.favd,a],this.Xfavs(this.favd),console.log("kkk",this.favd)},remove(a){this.bgconten="已取消收藏！",this.bagshow=!0,setTimeout((()=>{this.bagshow=!1}),500),this.fav=!0,console.log("name",a),this.favd=this.favd.filter((e=>e.name!=a)),this.Xremove(a)},reduce(){this.value>1&&this.value--},add(){this.value<6&&this.value++},bag(){let a={value:this.value,name:this.detail.name,enname:this.detail.enname,price:this.detail.price,sugarName:this.sugarName,temName:this.temName,pid:this.pid,small_img:this.detail.small_img,bool:!1,time:(new Date).getTime()};this.bgconten="成功加入购物袋",this.bagshow=!0,setTimeout((()=>{this.bagshow=!1}),500),console.log("bag",this.bags),this.bags=[a,...this.bags],this.Xbags(this.bags)},order(){console.log("order");let a=[{value:this.value,name:this.detail.name,enname:this.detail.enname,price:this.detail.price,sugarName:this.sugarName,temName:this.temName,pid:this.pid,small_img:this.detail.small_img,time:(new Date).getTime()}];this.Xorder(a),l({url:`../order/order?value=${this.value}&name=${this.detail.name}&enname=${this.detail.enname}&price=${this.detail.price}&temName=${this.temName}&sugarName=${this.sugarName}`})}}},[["render",function(a,e,t,l,w,y){const $=o,X=_,j=C(b("uni-icons"),x),z=k;return s(),i($,{class:"box"},{default:n((()=>[d($,{class:"bg",style:u({backgroundImage:`url(${w.detail.large_img})`})},null,8,["style"]),d($,{class:"detail-box"},{default:n((()=>[d($,{class:"detail"},{default:n((()=>[d($,{class:"name"},{default:n((()=>[d($,null,{default:n((()=>[m("p",null,r(w.detail.name),1),m("p",null,r(w.detail.enname),1)])),_:1}),d(X,null,{default:n((()=>[c("￥"+r(w.detail.price),1)])),_:1})])),_:1}),d($,{class:"text"},{default:n((()=>[d(X,null,{default:n((()=>[c(r(w.detail.tem_desc),1)])),_:1}),d($,null,{default:n((()=>{var a,e;return[(s(!0),f(g,null,h(null==(e=null==(a=w.detail)?void 0:a.tem)?void 0:e.split("/"),((a,e)=>(s(),i(X,{onClick:e=>w.temName=a,class:N({act:w.temName==a})},{default:n((()=>[c(r(a||"冷"),1)])),_:2},1032,["onClick","class"])))),256))]})),_:1})])),_:1}),d($,{class:"text"},{default:n((()=>[d(X,null,{default:n((()=>[c(r(w.detail.sugar_desc),1)])),_:1}),d($,null,{default:n((()=>{var a,e;return[(s(!0),f(g,null,h(null==(e=null==(a=w.detail)?void 0:a.sugar)?void 0:e.split("/"),((a,e)=>(s(),i(X,{onClick:e=>w.sugarName=a,class:N({act:w.sugarName==a})},{default:n((()=>[c(r(a||"全糖"),1)])),_:2},1032,["onClick","class"])))),256))]})),_:1})])),_:1}),d($,{class:"num"},{default:n((()=>[d(X,null,{default:n((()=>[c("选择数量")])),_:1}),d($,null,{default:n((()=>[d(j,{"custom-prefix":"iconfont",type:"icon-jianshao",size:"25",color:"gray",onClick:y.reduce},null,8,["onClick"]),d(z,{type:"text",modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=a=>w.value=a),disabled:"true"},null,8,["modelValue"]),m("span",{onClick:e[1]||(e[1]=(...a)=>y.add&&y.add(...a))},"+")])),_:1})])),_:1}),d($,{class:"xiangqing"},{default:n((()=>[d($,null,{default:n((()=>[c("商品详情")])),_:1}),d($,null,{default:n((()=>{var a,e;return[(s(!0),f(g,null,h(null==(e=null==(a=w.detail)?void 0:a.desc)?void 0:e.split("\n"),((a,e)=>(s(),f("p",null,r(e+1)+"."+r(a),1)))),256))]})),_:1})])),_:1})])),_:1})])),_:1}),d($,{class:"foot"},{default:n((()=>[d($,null,{default:n((()=>[d($,{class:"icon",onClick:y.orders},{default:n((()=>[d($,{class:"radio"},{default:n((()=>[c(r(w.bags.length),1)])),_:1}),d(j,{"custom-prefix":"iconfont",type:"icon-gouwudai",size:"20",color:"blue"}),d($,null,{default:n((()=>[c("购物袋")])),_:1})])),_:1},8,["onClick"]),this.favd.map((a=>a.name)).includes(w.detail.name)?(s(),i($,{key:1,class:"icon",onClick:e[3]||(e[3]=p((a=>y.remove(w.detail.name)),["stop"]))},{default:n((()=>[d(j,{"custom-prefix":"iconfont",type:"icon-aixin",size:"20",color:"blue"}),d($,null,{default:n((()=>[c("收藏")])),_:1})])),_:1})):(s(),i($,{key:0,class:"icon",onClick:e[2]||(e[2]=p((a=>y.favs({img:w.detail.small_img,name:w.detail.name,enname:w.detail.enname,price:w.detail.price,id:w.detail.pid})),["stop"]))},{default:n((()=>[d(j,{"custom-prefix":"iconfont",type:"icon-aixin",size:"20"}),d($,null,{default:n((()=>[c("收藏")])),_:1})])),_:1}))])),_:1}),d($,{class:"xiadan"},{default:n((()=>[d($,{onClick:y.bag},{default:n((()=>[c(" 加入购物袋 ")])),_:1},8,["onClick"]),d($,{onClick:y.order},{default:n((()=>[c(" 立即购买 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),w.bagshow?(s(),i($,{key:0,class:"bagShow"},{default:n((()=>[c(r(w.bgconten),1)])),_:1})):v("",!0)])),_:1})}],["__scopeId","data-v-07c233ff"]]);export{y as default};
