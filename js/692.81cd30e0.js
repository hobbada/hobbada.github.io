(self["webpackChunkteam_generator"]=self["webpackChunkteam_generator"]||[]).push([[692],{9692:(M,I,L)=>{"use strict";L.r(I),L.d(I,{default:()=>r});L(71);var t=L(3673),i=L(2323),u=L(6102),y=L.n(u),D=L(3020),j=L.n(D);const a=(0,t._)("img",{src:y(),alt:"팀 아이콘"},null,-1);function w(M,I,L,u,y,D){const w=(0,t.up)("q-toolbar"),g=(0,t.up)("q-header"),N=(0,t.up)("router-view"),e=(0,t.up)("q-page-container"),s=(0,t.up)("q-layout");return(0,t.wg)(),(0,t.j4)(s,{view:"lHh Lpr lFf"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{class:"main_header"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{style:{cursor:"pointer"}},{default:(0,t.w5)((()=>[a,(0,t._)("div",{onClick:I[0]||(I[0]=(...I)=>M.goHome&&M.goHome(...I)),class:"font_medium"},(0,i.zw)("Korean"===M.whichLanguage?"밸런스 랜덤 팀짜기":"Random Team Generator"),1)])),_:1}),(0,t._)("img",{src:j(),alt:"help",onClick:I[1]||(I[1]=(...I)=>M.goHelp&&M.goHelp(...I))})])),_:1}),(0,t.Wm)(e,null,{default:(0,t.w5)((()=>[(0,t.Wm)(N)])),_:1})])),_:1})}const g=(0,t.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var N=L(4260),e=L(3414),s=L(2035),S=L(4554),c=L(2350),o=L(7518),C=L.n(o);C()(g,"components",{QItem:e.Z,QItemSection:s.Z,QIcon:S.Z,QItemLabel:c.Z});const n=(0,t.aZ)({name:"MainLayout",data(){return{language:"korean"}},computed:{whichLanguage(){return"korean"===this.language?"Korean":"English"}},methods:{goHome(){window.location="/"},goHelp(){gtag("event","물음표버튼클릭",{event_category:"버튼클릭",event_label:"물음표",value:"1"}),window.open("https://github.com/hobbada/hobbada.github.io","_blank")},getLanguage(){return navigator.language||navigator.userLanguage}},created(){},setup(){}});var A=L(3066),d=L(3812),m=L(9570),l=L(8240),x=L(2652),z=L(1762);const b=(0,N.Z)(n,[["render",w]]),r=b;C()(n,"components",{QLayout:A.Z,QHeader:d.Z,QToolbar:m.Z,QBtn:l.Z,QPageContainer:x.Z,QFooter:z.Z})},3020:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0i6re466O5XzI3IiBkYXRhLW5hbWU9Iuq3uOujuSAyNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxNiAtMTYpIj4KICAgIDxnIGlkPSLsgqzqsIHtmJVfMiIgZGF0YS1uYW1lPSLsgqzqsIHtmJUgMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE2IDE2KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIxMiIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIxMS41IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0i6re466O5XzEiIGRhdGEtbmFtZT0i6re466O5IDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjU5NiAxNS40MzQpIj4KICAgICAgPGxpbmUgaWQ9IuyEoF8xIiBkYXRhLW5hbWU9IuyEoCAxIiB5Mj0iMC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTcuNDA0IDE3LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNCIvPgogICAgICA8cGF0aCBpZD0i7Yyo7IqkXzEiIGRhdGEtbmFtZT0i7Yyo7IqkIDEiIGQ9Ik0xMjAsNzQuOWEyLjc2NSwyLjc2NSwwLDAsMSwyLjktMi45LDIuODA1LDIuODA1LDAsMCwxLDIuOSwyLjksMy43MTQsMy43MTQsMCwwLDEtMS40MzMsMi42LDMuNDM2LDMuNDM2LDAsMCwwLTEuNDcxLDMuMjA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzQuNSAtNjUuNDM0KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},6102:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMy40MzQiIGhlaWdodD0iMjMuNzI4IiB2aWV3Qm94PSIwIDAgMjMuNDM0IDIzLjcyOCI+CiAgPGcgaWQ9Iuq3uOujuV8yIiBkYXRhLW5hbWU9Iuq3uOujuSAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjAxMiAtODUuMjU5KSI+CiAgICA8cGF0aCBpZD0i7Yyo7IqkXzIiIGRhdGEtbmFtZT0i7Yyo7IqkIDIiIGQ9Ik0xMTAuNjcxLDE4Ny4wODJhMy40NDUsMy40NDUsMCwxLDAtMy40NDUtMy40NDUsMy40NDksMy40NDksMCwwLDAsMy40NDUsMy40NDVtMC01Ljc2NmEyLjMyMSwyLjMyMSwwLDEsMS0yLjMyMSwyLjMyMSwyLjMyNCwyLjMyNCwwLDAsMSwyLjMyMS0yLjMyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4zMyAtODguOTc4KSIvPgogICAgPHBhdGggaWQ9Iu2MqOyKpF8zIiBkYXRhLW5hbWU9Iu2MqOyKpCAzIiBkPSJNMTIuNjI0LDQxMS44NmE0LjU4OSw0LjU4OSwwLDAsMC0zLjI2Ni0xLjM1M0g0LjYxOUE0LjYyNCw0LjYyNCwwLDAsMCwwLDQxNS4xMjZ2NC40MjRhMS4xMTksMS4xMTksMCwwLDAsMS4xMTcsMS4xMTdIMTIuODM5YTEuMTE5LDEuMTE5LDAsMCwwLDEuMTE3LTEuMTEzdjBsLjAyMS00LjQyNXMwLDAsMCwwaDBhNC41ODksNC41ODksMCwwLDAtMS4zNTMtMy4yNjZtLTgtLjIyOUg5LjM1OGEzLjUsMy41LDAsMCwxLDMuNSwzLjQ5NGwtLjAyMSw0LjQxOUgxMS4xMTl2LTQuMzg3YS40NjMuNDYzLDAsMSwwLS45MjUsMHY0LjM4N0gzLjc0MnYtNC4zODdhLjQ2My40NjMsMCwxLDAtLjkyNSwwdjQuMzg3SDEuMTI0di00LjQxOGEzLjUsMy41LDAsMCwxLDMuNS0zLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMS4wMTIgLTMxMS42ODEpIi8+CiAgICA8cGF0aCBpZD0i7Yyo7IqkXzQiIGRhdGEtbmFtZT0i7Yyo7IqkIDQiIGQ9Ik0zOTYuODIxLDYuODlhMy40NDUsMy40NDUsMCwxLDAtMy40NDUtMy40NDUsMy40NDksMy40NDksMCwwLDAsMy40NDUsMy40NDVtMC01Ljc2NkEyLjMyMSwyLjMyMSwwLDEsMSwzOTQuNSwzLjQ0NWEyLjMyNCwyLjMyNCwwLDAsMSwyLjMyMS0yLjMyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2OS4zNjMgODUuMjU5KSIvPgogICAgPHBhdGggaWQ9Iu2MqOyKpF81IiBkYXRhLW5hbWU9Iu2MqOyKpCA1IiBkPSJNMzQyLjk0MSwyMzQuOTM1YTQuNjI0LDQuNjI0LDAsMCwwLTQuNjItNC42MTloLTQuNzM4YTQuNjI4LDQuNjI4LDAsMCwwLTIuOTUzLDEuMDY3LjU2Mi41NjIsMCwxLDAsLjcxOC44NjQsMy41LDMuNSwwLDAsMSwyLjIzNS0uODA4aDQuNzM5YTMuNSwzLjUsMCwwLDEsMy41LDMuNXY0LjQxOWwtMS43MTQsMHYtNC4zOTJhLjQ2My40NjMsMCwxLDAtLjkyNSwwdjQuMzk0bC00Ljc0OC4wMTNhLjU2Mi41NjIsMCwwLDAsMCwxLjEyNGgwbDcuMzkxLS4wMjFoMGExLjExOSwxLjExOSwwLDAsMCwxLjExNC0xLjExN3YtNC40MjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA4LjQ5NCAtMTM3LjQ0NSkiLz4KICA8L2c+Cjwvc3ZnPgo="}}]);