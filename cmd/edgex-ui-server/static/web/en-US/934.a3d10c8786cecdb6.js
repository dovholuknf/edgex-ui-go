"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[934],{7181:(b,h,s)=>{s.d(h,{Y:()=>g});var e=s(6814),l=s(6223),d=s(9919),C=s(6689);const v=[];let _=(()=>{class a{static#e=this.\u0275fac=function(p){return new(p||a)};static#t=this.\u0275mod=C.oAB({type:a});static#i=this.\u0275inj=C.cJS({imports:[d.Bz.forChild(v),d.Bz]})}return a})(),g=(()=>{class a{static#e=this.\u0275fac=function(p){return new(p||a)};static#t=this.\u0275mod=C.oAB({type:a});static#i=this.\u0275inj=C.cJS({imports:[e.ez,l.u5,l.UX,_]})}return a})()},4546:(b,h,s)=>{s.d(h,{P:()=>A});var e=s(6689),l=s(6814),d=s(6223),C=s(9167);function v(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"input",17),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(3);return e.KtG(n.httpMethod=i)})("click",function(i){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onMethodChecked(i,"GET"))}),e.qZA()}if(2&c){const t=e.oxw(2),o=t.$implicit,i=t.index,n=e.oxw();e.hYB("id","get-",o,"-",i,""),e.Q6J("checked",n.isMethodChecked("GET"))("ngModel",n.httpMethod)}}function _(c,m){if(1&c&&(e.TgZ(0,"div",13)(1,"span",14),e.YNc(2,v,1,4,"input",15),e.TgZ(3,"label",16),e._uU(4,"get"),e.qZA()()()),2&c){const t=e.oxw(),o=t.$implicit,i=t.index,n=e.oxw();e.xp6(2),e.Q6J("ngIf",n.isChecked(o.name)),e.xp6(1),e.hYB("for","get-",o,"-",i,"")}}function g(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"input",19),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(3);return e.KtG(n.httpMethod=i)})("click",function(i){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onMethodChecked(i,"PUT"))}),e.qZA()}if(2&c){const t=e.oxw(2),o=t.$implicit,i=t.index,n=e.oxw();e.hYB("id","set-",o,"-",i,""),e.Q6J("checked",n.isMethodChecked("PUT"))("ngModel",n.httpMethod)}}function a(c,m){if(1&c&&(e.TgZ(0,"div",13)(1,"span",14),e.YNc(2,g,1,4,"input",18),e.TgZ(3,"label",16),e._uU(4,"set"),e.qZA()()()),2&c){const t=e.oxw(),o=t.$implicit,i=t.index,n=e.oxw();e.xp6(2),e.Q6J("ngIf",n.isChecked(o.name)),e.xp6(1),e.hYB("for","set-",o,"-",i,"")}}function x(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"input",10),e.NdJ("click",function(i){const r=e.CHM(t).$implicit,f=e.oxw();return e.KtG(f.selectOne(i,r))}),e.qZA()(),e.TgZ(3,"td",11),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"div"),e.YNc(7,_,5,3,"div",12),e.YNc(8,a,5,3,"div",12),e.qZA()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()}if(2&c){const t=m.$implicit,o=e.oxw();e.ekj("table-active",o.isChecked(t.name)),e.xp6(2),e.Q6J("checked",o.isChecked(t.name)),e.xp6(2),e.Oqu(t.name),e.xp6(3),e.Q6J("ngIf",t.get),e.xp6(1),e.Q6J("ngIf",t.set),e.xp6(2),e.Oqu(t.url),e.xp6(2),e.Oqu(t.path)}}let u=(()=>{class c{constructor(t){this.cmdSvc=t,this.singleCoreCmdSelectedEvent=new e.vpe,this.deviceAssociatedCoreCommandsList=[],this.httpMethod="",this.coreCmdMethodEvent=new e.vpe}ngOnInit(){this.cmdSvc.findDeviceAssociatedCommnadsByDeviceName(this.deviceName).subscribe(t=>{this.deviceAssociatedCoreCommandsList=t.deviceCoreCommand.coreCommands})}onMethodChecked(t,o){this.httpMethod=t.target.checked?o:"",this.coreCmdMethodEvent.emit(this.httpMethod)}isChecked(t){return this.coreCmdSelected?.name===t}isMethodChecked(t){return this.httpMethod===t}radioUnchecked(t){return t||!1}selectOne(t,o){this.coreCmdSelected=t.target.checked?o:{},this.singleCoreCmdSelectedEvent.emit(this.coreCmdSelected),this.coreCmdMethodEvent.emit(void 0)}static#e=this.\u0275fac=function(o){return new(o||c)(e.Y36(C.V))};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-device-associated-core-command-list"]],inputs:{deviceName:"deviceName",coreCmdSelected:"coreCmdSelected",httpMethod:"httpMethod"},outputs:{singleCoreCmdSelectedEvent:"singleCoreCmdSelectedEvent",coreCmdMethodEvent:"coreCmdMethodEvent"},decls:24,vars:2,consts:[[1,"card","border-0"],[1,"card-header"],[1,"fa","fa-list","text-danger","mr-2"],[1,"text-info"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","text-truncate"],[1,"thead-light"],["scope","col"],[3,"table-active",4,"ngFor","ngForOf"],["type","checkbox","role","button",3,"checked","click"],[1,"user-select-all"],["class","form-check form-check-inline",4,"ngIf"],[1,"form-check","form-check-inline"],[1,"badge","badge-secondary"],["class","form-check-input align-middle","type","radio","name","cmdMethod","value","GET",3,"id","checked","ngModel","ngModelChange","click",4,"ngIf"],[1,"form-check-label","align-middle",3,"for"],["type","radio","name","cmdMethod","value","GET",1,"form-check-input","align-middle",3,"id","checked","ngModel","ngModelChange","click"],["class","form-check-input align-middle","type","radio","name","cmdMethod","value","PUT",3,"id","checked","ngModel","ngModelChange","click",4,"ngIf"],["type","radio","name","cmdMethod","value","PUT",1,"form-check-input","align-middle",3,"id","checked","ngModel","ngModelChange","click"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.TgZ(3,"span")(4,"span",3),e._uU(5),e.qZA(),e._uU(6," Associated Commands List"),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"table",6)(10,"thead",7)(11,"tr")(12,"th",8),e._uU(13,"#"),e.qZA(),e.TgZ(14,"th",8),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"th",8),e._uU(17,"Method"),e.qZA(),e.TgZ(18,"th",8),e._uU(19,"URL"),e.qZA(),e.TgZ(20,"th",8),e._uU(21,"Path"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,x,13,8,"tr",9),e.qZA()()()()()),2&o&&(e.xp6(5),e.Oqu(i.deviceName),e.xp6(18),e.Q6J("ngForOf",i.deviceAssociatedCoreCommandsList))},dependencies:[l.sg,l.O5,d.Fj,d._,d.JJ,d.On]})}return c})();function p(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"div",24)(3,"input",25),e.NdJ("click",function(i){const r=e.CHM(t).$implicit,f=e.oxw();return e.KtG(f.selectOne(i,r))}),e.qZA()()(),e.TgZ(4,"td",26),e._uU(5),e.qZA(),e.TgZ(6,"td",26),e._uU(7),e.qZA(),e.TgZ(8,"td")(9,"span",27),e.NdJ("click",function(){const n=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.checkOne(n))}),e._uU(10,"coreCommands"),e.qZA()()()}if(2&c){const t=m.$implicit,o=e.oxw();e.ekj("table-active",o.isChecked(t)),e.xp6(3),e.Q6J("checked",o.isChecked(t)),e.xp6(2),e.Oqu(t.deviceName),e.xp6(2),e.Oqu(t.profileName)}}let Z=(()=>{class c{constructor(t){this.cmdSvc=t,this.deviceCoreCmdList=[],this.deviceCoreCmdSelectedEvent=new e.vpe,this.pagination=1,this.pageLimit=5,this.pageOffset=(this.pagination-1)*this.pageLimit}ngOnInit(){this.findAllDeviceCoreCmdsPagination()}findAllDeviceCoreCmdsPagination(){this.cmdSvc.allDeviceCoreCommandsPagination(this.pageOffset,this.pageLimit).subscribe(t=>{this.deviceCoreCmdList=t.deviceCoreCommands})}isChecked(t){return this.deviceCoreCmdSelected?.deviceName===t.deviceName}selectOne(t,o){this.deviceCoreCmdSelected=t.target.checked?o:void 0,this.deviceCoreCmdSelectedEvent.emit(this.deviceCoreCmdSelected)}checkOne(t){this.deviceCoreCmdSelected=t,this.deviceCoreCmdSelectedEvent.emit(this.deviceCoreCmdSelected)}onPageSelected(){this.resetPagination(),this.setPagination(),this.findAllDeviceCoreCmdsPagination()}prePage(){this.setPagination(-1),this.findAllDeviceCoreCmdsPagination()}nextPage(){this.setPagination(1),this.findAllDeviceCoreCmdsPagination()}setPagination(t){1===t?this.pagination+=1:-1===t&&(this.pagination-=1),this.pageOffset=(this.pagination-1)*this.pageLimit}resetPagination(){this.pagination=1}static#e=this.\u0275fac=function(o){return new(o||c)(e.Y36(C.V))};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-device-core-command-list"]],inputs:{deviceCoreCmdSelected:"deviceCoreCmdSelected"},outputs:{deviceCoreCmdSelectedEvent:"deviceCoreCmdSelectedEvent"},decls:41,vars:4,consts:[[1,"card"],[1,"card-header"],[1,"fa","fa-list","text-danger"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","text-truncate"],[1,"thead-light"],["scope","col"],[3,"table-active",4,"ngFor","ngForOf"],[1,"card-footer","text-muted","p-1"],["aria-label","navigation"],[1,"pagination","justify-content-end","m-0"],[1,"page-item","mr-2","mt-1"],[1,"align-middle"],[1,"page-item","mr-2"],["name","pageLimit","id","pageLimit",1,"custom-select",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],[1,"page-item","mr-1"],[1,"page-link","btn",3,"disabled","click"],[1,"fa","fa-angle-double-left"],[1,"page-item"],[1,"fa","fa-angle-double-right"],[1,"form-group","form-check"],["type","checkbox","role","button",1,"form-check-input",3,"checked","click"],[1,"user-select-all"],["role","button",1,"badge","badge-primary",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e._uU(3," Device Core Command List "),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),e._uU(10,"#"),e.qZA(),e.TgZ(11,"th",7),e._uU(12,"Device"),e.qZA(),e.TgZ(13,"th",7),e._uU(14,"DeviceProfile"),e.qZA(),e.TgZ(15,"th",7),e._uU(16,"AssociatedCommands"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,p,11,5,"tr",8),e.qZA()()()(),e.TgZ(19,"div",9)(20,"nav",10)(21,"ul",11)(22,"li",12)(23,"span",13),e._uU(24,"items per page"),e.qZA()(),e.TgZ(25,"li",14)(26,"select",15),e.NdJ("ngModelChange",function(r){return i.pageLimit=r})("ngModelChange",function(){return i.onPageSelected()}),e.TgZ(27,"option",16),e._uU(28,"5"),e.qZA(),e.TgZ(29,"option",17),e._uU(30,"10"),e.qZA(),e.TgZ(31,"option",18),e._uU(32,"20"),e.qZA()()(),e.TgZ(33,"li",19)(34,"button",20),e.NdJ("click",function(){return i.prePage()}),e._UZ(35,"i",21),e._uU(36," Previous"),e.qZA()(),e.TgZ(37,"li",22)(38,"button",20),e.NdJ("click",function(){return i.nextPage()}),e._uU(39,"Next "),e._UZ(40,"i",23),e.qZA()()()()()()),2&o&&(e.xp6(18),e.Q6J("ngForOf",i.deviceCoreCmdList),e.xp6(8),e.Q6J("ngModel",i.pageLimit),e.xp6(8),e.Q6J("disabled",1===i.pagination),e.xp6(4),e.Q6J("disabled",i.pageLimit>i.deviceCoreCmdList.length))},dependencies:[l.sg,d.YN,d.Kr,d.EJ,d.JJ,d.On],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]})}return c})();function M(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"div",9),e.NdJ("click",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.close(i))}),e.qZA()}}function k(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"div",16)(1,"nav",17)(2,"ol",18)(3,"li",19)(4,"a",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.backtoDeviceCoreCommandList())}),e._uU(5,"DeviceCoreCommandList"),e.qZA()(),e.TgZ(6,"li",21),e._uU(7),e.qZA()()()()}if(2&c){const t=e.oxw(2);e.xp6(7),e.Oqu(t.deviceName)}}function T(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"div")(1,"app-device-associated-core-command-list",22),e.NdJ("coreCmdMethodEvent",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onCmdMethodSelected(i))})("singleCoreCmdSelectedEvent",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onCoreCmdSelected(i))}),e.qZA()()}if(2&c){const t=e.oxw(2);e.xp6(1),e.Q6J("coreCmdSelected",t.coreCmdSelected)("deviceName",t.deviceName)("httpMethod",t.httpMethod)}}function S(c,m){if(1&c){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e.YNc(2,k,8,1,"div",12),e.TgZ(3,"div",13)(4,"div")(5,"app-device-core-command-list",14),e.NdJ("deviceCoreCmdSelectedEvent",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.onDeviceCoreCmdSelected(i))}),e.qZA()(),e.YNc(6,T,2,3,"div",15),e.qZA()()()}if(2&c){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",!t.deviceCoreCmdListVisible),e.xp6(2),e.Udp("display",t.deviceCoreCmdListVisible?"":"none"),e.xp6(1),e.Q6J("deviceCoreCmdSelected",t.deviceCoreCmdSelected),e.xp6(1),e.Q6J("ngIf",!t.deviceCoreCmdListVisible)}}let A=(()=>{class c{constructor(){this.visible=!1,this.validate=!1,this.deviceName="",this.httpMethod="",this.commandName="",this.commandPath="",this.commandSelectedEvent=new e.vpe,this.cmdMethodEvent=new e.vpe,this.deviceCoreCmdListVisible=!0,this.coreCmdSelected={}}ngOnInit(){this.deviceCoreCmdSelected={deviceName:this.deviceName},this.coreCmdSelected={name:this.commandName,path:this.commandPath}}onDeviceCoreCmdSelected(t){if(!t)return this.deviceCoreCmdSelected=t,this.httpMethod="",void(this.coreCmdSelected={});this.deviceCoreCmdSelected=t,this.deviceName=this.deviceCoreCmdSelected.deviceName,this.deviceCoreCmdListVisible=!1}onCmdMethodSelected(t){this.httpMethod=t,this.cmdMethodEvent.emit(this.httpMethod)}onCoreCmdSelected(t){this.coreCmdSelected=t,this.commandSelectedEvent.emit(this.coreCmdSelected)}backtoDeviceCoreCommandList(){this.deviceCoreCmdListVisible=!0}toggle(t){t.stopImmediatePropagation(),this.visible=!this.visible}close(t){t.stopPropagation(),this.visible=!1}static#e=this.\u0275fac=function(o){return new(o||c)};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-device-core-command-combo-list"]],inputs:{validate:"validate",deviceName:"deviceName",httpMethod:"httpMethod",commandName:"commandName",commandPath:"commandPath",coreCmdSelected:"coreCmdSelected"},outputs:{commandSelectedEvent:"commandSelectedEvent",cmdMethodEvent:"cmdMethodEvent"},decls:11,vars:7,consts:[["class","cmd-combo-shielder",3,"click",4,"ngIf"],[1,"cmd-combo"],[1,"input-group","has-validation",3,"click"],["type","text","name","coreCmdSelected","readonly","readonly","maxlength","0","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["role","button",1,"input-group-text"],[1,"fa","fa-chevron-down"],["id","validationCoreCmdPathFeedback",1,"invalid-feedback"],["class","cmd-combo-body shadow rounded",4,"ngIf"],[1,"cmd-combo-shielder",3,"click"],[1,"cmd-combo-body","shadow","rounded"],[1,"card"],["class","card-header",4,"ngIf"],[1,"card-body","p-0"],[3,"deviceCoreCmdSelected","deviceCoreCmdSelectedEvent"],[4,"ngIf"],[1,"card-header"],["aria-label","breadcrumb",1,"m-0","p-0"],[1,"breadcrumb","p-0","m-0","bg-light"],[1,"breadcrumb-item","text-primary"],["role","button",3,"click"],["aria-current","page",1,"breadcrumb-item","active"],[3,"coreCmdSelected","deviceName","httpMethod","coreCmdMethodEvent","singleCoreCmdSelectedEvent"]],template:function(o,i){1&o&&(e.YNc(0,M,1,0,"div",0),e.TgZ(1,"div",1)(2,"div",2),e.NdJ("click",function(r){return i.toggle(r)}),e.TgZ(3,"input",3),e.NdJ("ngModelChange",function(r){return i.coreCmdSelected.path=r}),e.qZA(),e.TgZ(4,"div",4)(5,"span",5),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"div",7)(8,"small"),e._uU(9,"the command name and method can't be empty!"),e.qZA()()(),e.YNc(10,S,7,5,"div",8),e.qZA()),2&o&&(e.Q6J("ngIf",i.visible),e.xp6(3),e.ekj("is-invalid",(!i.coreCmdSelected.path||!i.httpMethod)&&i.validate)("is-valid",i.coreCmdSelected.path&&i.httpMethod&&i.validate),e.Q6J("ngModel",i.coreCmdSelected.path),e.xp6(7),e.Q6J("ngIf",i.visible))},dependencies:[l.O5,d.Fj,d.JJ,d.Q7,d.nD,d.On,u,Z],styles:[".cmd-combo[_ngcontent-%COMP%]{position:relative;right:auto}.cmd-combo-shielder[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:101}.cmd-combo-body[_ngcontent-%COMP%]{position:absolute;inset:33px 0 auto;z-index:105;visibility:visible;display:inline-block}"]})}return c})()}}]);