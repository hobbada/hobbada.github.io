"use strict";(self["webpackChunkteam_generator"]=self["webpackChunkteam_generator"]||[]).push([[261],{9261:(e,t,l)=>{l.r(t),l.d(t,{default:()=>K});l(71);var o=l(3673),a=l(2323),s=l(8880);const r={for:"check01"},n=["onUpdate:modelValue"],u=["onUpdate:modelValue"],p=["onClick"],m={class:"check_box add_btn_box"},i={for:"check01"},d={class:"group_box"},c={key:0,class:"group_title"},h=["onClick"],g={key:1,class:"group_con"},_=["onClick"],b={class:"group_name add_name"},w=["onClick"],f=(0,o._)("div",{class:"text-h6"},"선택",-1),k=["onClick"],y={class:"team_btn_box"},x={key:0,class:"result_box"},M=(0,o._)("h1",null,"결과",-1),v={class:"team_info"};function G(e,t,l,G,W,C){const I=(0,o.up)("q-item-section"),S=(0,o.up)("q-select"),D=(0,o.up)("q-card-section"),q=(0,o.up)("q-card"),N=(0,o.up)("q-expansion-item"),V=(0,o.up)("q-btn"),U=(0,o.up)("q-card-actions"),Z=(0,o.up)("q-dialog"),z=(0,o.up)("q-page"),T=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(z,{class:"wrap"},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{"expand-separator":"",class:"title_text"},{header:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" 팀인원 ( "+(0,a.zw)(e.people)+" : "+(0,a.zw)(e.people)+" ) ",1)])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(S,{square:"",outlined:"",modelValue:e.people,"onUpdate:modelValue":t[0]||(t[0]=t=>e.people=t),options:e.people_option},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(N,{"expand-separator":"",class:"title_text"},{header:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" 팀수( "+(0,a.zw)(e.teams)+"팀 ) ",1)])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(S,{square:"",outlined:"",modelValue:e.teams,"onUpdate:modelValue":t[1]||(t[1]=t=>e.teams=t),options:e.teams_option},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(N,{"expand-separator":"",class:"title_text"},{header:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" 인원( 전체 : "+(0,a.zw)(e.members.length)+"명 , 이번경기참가 : "+(0,a.zw)(e.playMemberNumber)+"명) ",1)])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{class:"check_section"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.members,((t,l)=>((0,o.wg)(),(0,o.iD)("div",{class:"check_box",key:l},[(0,o._)("label",r,[(0,o.wy)((0,o._)("input",{type:"text",disabled:"","onUpdate:modelValue":e=>t.name=e},null,8,n),[[s.nr,t.name]])]),(0,o.wy)((0,o._)("input",{type:"checkbox",id:"check01","onUpdate:modelValue":e=>t.play=e},null,8,u),[[s.e8,t.play]]),(0,o._)("button",{class:"del_btn",onClick:t=>e.deleteMember(l)},null,8,p)])))),128)),(0,o._)("div",m,[(0,o._)("label",i,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.newMemberName=t)},null,512),[[s.nr,e.newMemberName]])]),(0,o._)("button",{class:"blue_line_btn",onClick:t[3]||(t[3]=(...t)=>e.addMember&&e.addMember(...t))},"추가")])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(N,{"expand-separator":"",class:"title_text"},{header:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" 분리그룹 ("+(0,a.zw)(e.groups.length-1)+" 그룹) ",1)])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{class:"group_section"},{default:(0,o.w5)((()=>[(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.groups,((t,l)=>((0,o.wg)(),(0,o.iD)("div",{class:"group_con_box",key:l},[l>0?((0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("h1",null,"그룹 "+(0,a.zw)(l),1),(0,o._)("button",{class:"del_btn",onClick:t=>e.deleteGroup(l)},null,8,h)])):(0,o.kq)("",!0),l>0?((0,o.wg)(),(0,o.iD)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t,((t,l)=>((0,o.wg)(),(0,o.iD)("div",{class:"group_name",key:l},[(0,o._)("span",null,(0,a.zw)(t.name),1),(0,o._)("button",{class:"del_btn",onClick:l=>e.deleteMemberFromGroup(t)},null,8,_)])))),128)),(0,o._)("div",b,[(0,o._)("button",{class:"add_btn",onClick:t=>e.openAddMemberToGroup(l)},"+",8,w)])])):(0,o.kq)("",!0)])))),128)),(0,o._)("button",{class:"add_btn",onClick:t[4]||(t[4]=(...t)=>e.makeMoreGroup&&e.makeMoreGroup(...t))},"+"),(0,o.Wm)(Z,{modelValue:e.modal,"onUpdate:modelValue":t[5]||(t[5]=t=>e.modal=t),class:"select_dialog_box"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{align:"center",class:"dialog_title_box"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(D,{class:"q-pt-none name_box"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.groups[0],((t,l)=>((0,o.wg)(),(0,o.iD)("div",{class:"name_text_box",key:l},[(0,o._)("span",null,(0,a.zw)(t.name),1),(0,o._)("button",{class:"blue_line_btn",onClick:l=>e.addMemberToGroup(t)},"선택",8,k)])))),128))])),_:1}),(0,o.Wm)(U,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(V,{flat:"",label:"취소",color:"primary"},null,512),[[T]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1}),(0,o._)("div",y,[(0,o._)("button",{class:"blue_line_btn",onClick:t[6]||(t[6]=(...t)=>e.generate&&e.generate(...t))},"팀짜기")]),e.result?((0,o.wg)(),(0,o.iD)("div",x,[M,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.randomMembers,((t,l)=>((0,o.wg)(),(0,o.iD)("div",{class:"result_info_box",key:l},[(0,o._)("h2",null,"팀"+(0,a.zw)(l+1),1),(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.randomMembers[l],((e,t)=>((0,o.wg)(),(0,o.iD)("span",{key:t},(0,a.zw)(e.name),1)))),128))])])))),128))])):(0,o.kq)("",!0)])),_:1})}l(2100);const W=(0,o.aZ)({name:"PageIndex",data(){return{people:3,people_option:[3,4,5,6,7,8,9,10,11],teams:2,teams_option:[2,3,4,5],members:[{name:"이호경",play:!0,group:1},{name:"손창균",play:!0,group:0},{name:"김동현",play:!1,group:0},{name:"정희빈",play:!1,group:0},{name:"구제치",play:!1,group:0},{name:"이윤범",play:!1,group:0},{name:"김인호",play:!1,group:0},{name:"이재성",play:!1,group:0},{name:"정세준",play:!1,group:0},{name:"김문명",play:!1,group:0}],newMemberName:"",playMemberNumber:0,groups:[],modal:!1,selectedGroupIndex:0,result:!1,randomMembers:[]}},watch:{people:{handler(e){this.saveToLocalStorage()},deep:!0},teams:{handler(e){this.saveToLocalStorage()},deep:!0},members:{handler(e){this.saveToLocalStorage(),this.getPlayMemberNumber(),this.sortGroups()},deep:!0}},methods:{deleteMember(e){confirm("삭제하시겠습니까?")&&this.members.splice(e,1)},addMember(){this.newMemberName?(this.members.push({name:this.newMemberName,play:!0,group:0}),this.newMemberName=""):alert("이름을 입력해주세요")},makeMoreGroup(){0!==this.groups[this.groups.length-1].length?this.groups.push([]):alert("전 그룹 멤버를 추가한 후 이용하세요")},deleteGroup(e){confirm("삭제하시겠습니까?")&&(this.groups.splice(e,1),console.log(e),this.members.forEach((t=>{t.group===e?t.group=0:t.group>e&&(t.group=t.group-1)})))},openAddMemberToGroup(e){this.selectedGroupIndex=e,console.log(e),this.modal=!0},addMemberToGroup(e){console.log(e),this.groups[this.selectedGroupIndex].push(e),this.changeGroup(e,this.selectedGroupIndex),this.modal=!1},deleteMemberFromGroup(e){let t=this.groups[this.selectedGroupIndex].indexOf(e);this.groups[this.selectedGroupIndex].splice(t,1),this.changeGroup(e,0)},generate(){if(this.teams*this.people!==this.playMemberNumber)return void alert("필요인원과 참가인원 수를 확인해주세요");this.result=!1,this.randomMembers=[];let e=[],t=[];for(let l of this.groups){let t=[];this.makeRandomArray(l.length).forEach((e=>{t.push(l[e])})),e.push(t)}console.log(e);for(let l of e)for(let e of l)t.push(e);t=this.divideArray(t,this.teams);for(let l=0;l<this.teams;l++)this.randomMembers.push([]);for(let l of t)for(let e=0;e<l.length;e++)this.randomMembers[e].push(l[e]);console.log(this.randomMembers),setTimeout((()=>{this.result=!0,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),100)}),500)},getPlayMemberNumber(){const e=this.members.filter((e=>e.play));this.playMemberNumber=e.length},saveToLocalStorage(){localStorage.setItem("habitat_members",JSON.stringify(this.members)),localStorage.setItem("habitat_people",this.people),localStorage.setItem("habitat_teams",this.teams)},getFromLocalStorage(){const e=localStorage.getItem("habitat_members"),t=localStorage.getItem("habitat_people"),l=localStorage.getItem("habitat_teams");e&&(this.members=JSON.parse(e)),t&&(this.people=parseInt(t)),l&&(this.teams=parseInt(l))},sortGroups(){const e=[];this.members.forEach((t=>{t.play?e[t.group]?e[t.group].push(t):e[t.group]=[t]:t.group=0})),this.groups=e,console.log(e)},changeGroup(e,t){e.group=t,this.sortGroups()},makeRandomArray(e){const t=[];for(let l=0;l<e;l++)t.push(l);return t.sort((()=>Math.random()-.5))},divideArray(e,t){const l=[];while(e.length>0)l.push(e.splice(0,t));return l}},created(){this.getFromLocalStorage()},mounted(){this.sortGroups()}});var C=l(4260),I=l(4379),S=l(762),D=l(2035),q=l(151),N=l(5589),V=l(9545),U=l(5926),Z=l(9367),z=l(8240),T=l(677),Q=l(7518),A=l.n(Q);const H=(0,C.Z)(W,[["render",G]]),K=H;A()(W,"components",{QPage:I.Z,QExpansionItem:S.Z,QItemSection:D.Z,QCard:q.Z,QCardSection:N.Z,QSelect:V.Z,QDialog:U.Z,QCardActions:Z.Z,QBtn:z.Z}),A()(W,"directives",{ClosePopup:T.Z})}}]);