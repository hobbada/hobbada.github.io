"use strict";(self["webpackChunkteam_generator"]=self["webpackChunkteam_generator"]||[]).push([[319],{4319:(e,a,t)=>{t.r(a),t.d(a,{default:()=>_});var n=t(3673),o=t(2323);function r(e,a,t,r,l,u){const i=(0,n.up)("q-toolbar-title"),g=(0,n.up)("q-toolbar"),p=(0,n.up)("q-btn"),c=(0,n.up)("q-header"),s=(0,n.up)("router-view"),d=(0,n.up)("q-page-container"),m=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(m,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"main-header"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{onClick:e.goHome},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)("Korean"===e.whichLanguage?"밸런스 랜덤 팀짜기":"Random Team Generator"),1)])),_:1},8,["onClick"])])),_:1}),(0,n.Wm)(p,{class:"help-icon",icon:"help",flat:"",round:"",dense:"",onClick:e.goHelp},null,8,["onClick"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s)])),_:1})])),_:1})}const l=(0,n.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var u=t(4260),i=t(3414),g=t(2035),p=t(4554),c=t(2350),s=t(7518),d=t.n(s);d()(l,"components",{QItem:i.Z,QItemSection:g.Z,QIcon:p.Z,QItemLabel:c.Z});const m=(0,n.aZ)({name:"MainLayout",data(){return{language:"korean"}},computed:{whichLanguage(){return"korean"===this.language?"Korean":"English"}},methods:{goHome(){this.$router.push("/")},goHelp(){gtag("event","물음표버튼클릭",{event_category:"버튼클릭",event_label:"물음표",value:"1"}),window.open("https://github.com/hobbada/hobbada.github.io","_blank")}},methods:{getLanguage(){return navigator.language||navigator.userLanguage}},created(){},setup(){}});var h=t(3066),b=t(3812),w=t(9570),f=t(3747),k=t(8240),Z=t(2652),v=t(1762);const Q=(0,u.Z)(m,[["render",r]]),_=Q;d()(m,"components",{QLayout:h.Z,QHeader:b.Z,QToolbar:w.Z,QToolbarTitle:f.Z,QBtn:k.Z,QPageContainer:Z.Z,QFooter:v.Z})}}]);