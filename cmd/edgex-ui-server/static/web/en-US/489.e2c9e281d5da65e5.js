"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[489],{2489:(P,v,s)=>{s.r(v),s.d(v,{DashboardModule:()=>T});var S=s(6575),u=s(8701),e=s(7822),l=s(2848),h=s(5167),A=s(4458),C=s(5425),_=s(1742),D=s(1315);let f=(()=>{class o{constructor(t,n,i,d,a,r){this.dataService=t,this.metadataSvc=n,this.schedulerSvc=i,this.notiSvc=d,this.systemAgentSvc=a,this.registrySvc=r,this.eventCount=0,this.readingCount=0,this.deviceSvcCount=0,this.deviceSvcStatusLockedCount=0,this.deviceCount=0,this.deviceStatusLockedCount=0,this.deviceProfileCount=0,this.schedulerCount=0,this.notificationCount=0,this.registeredServiceCount=0}ngOnInit(){this.dataService.ping().subscribe(()=>{this.getEventAndReadingCount()}),this.metadataSvc.ping().subscribe(()=>{this.getDeviceServiceCount(),this.getDeviceCount(),this.getDeviceProfileCount()}),this.schedulerSvc.ping().subscribe(()=>{this.getIntervalCount()}),this.notiSvc.ping().subscribe(()=>{this.getNotificationCount()}),this.systemAgentSvc.ping().subscribe(()=>{this.registrySvc.ping().subscribe(()=>{this.getRegisteredServiceCount()})})}getEventAndReadingCount(){this.dataService.eventCount().subscribe(t=>this.eventCount=t.Count),this.dataService.readingCount().subscribe(t=>this.readingCount=t.Count)}getDeviceServiceCount(){this.metadataSvc.allDeviceServices().subscribe(t=>{this.deviceSvcCount=t.services.length,t.services.forEach((n,i)=>{"LOCKED"===n.adminState&&this.deviceSvcStatusLockedCount++})})}getDeviceCount(){this.metadataSvc.allDevices().subscribe(t=>{this.deviceCount=t.devices.length,t.devices.forEach((n,i)=>{"LOCKED"===n.adminState&&this.deviceStatusLockedCount++})})}getDeviceProfileCount(){this.metadataSvc.allDeviceProfolesPagination(0,-1).subscribe(t=>{this.deviceProfileCount=t.profiles.length})}getIntervalCount(){this.schedulerSvc.findAllIntervalsPagination(0,-1).subscribe(t=>{this.schedulerCount=t.intervals.length})}getNotificationCount(){this.notiSvc.findNotificationsByStatusPagination(0,-1,"NEW").subscribe(t=>{this.notificationCount=t.notifications.length})}getRegisteredServiceCount(){this.systemAgentSvc.getRegisteredServiceAll().subscribe(t=>{this.registeredServiceCount=t.length?t.length:0})}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(l.D),e.Y36(h.D),e.Y36(A.G),e.Y36(C.T),e.Y36(_.J),e.Y36(D.r))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-dashboard"]],decls:67,vars:11,consts:function(){let t,n,i,d,a,r,g;return t=" Device Services ",n="Devices",i="Device Profiles",d="Schedulers",a="Notifications",r="Events",g="Readings",[[1,"row"],[1,"col-lg-4"],["role","button","routerLink","/metadata",1,"card"],[1,"card-body"],[1,"card-title"],t,[1,"d-inline"],[1,"badge","badge-info"],[1,"float-right","badge","badge-danger"],[1,"float-right","badge","badge-success","mr-2"],["role","button","routerLink","/metadata/device-center",1,"card"],n,["role","button","routerLink","/metadata/device-profile-center",1,"card"],i,[1,"row","mt-3"],[1,"col-lg-6"],["role","button","routerLink","/scheduler",1,"card"],d,["href","#",1,"card-link","font-weight-bolder","badge","badge-info"],["role","button","routerLink","/notifications",1,"card"],a,["role","button","routerLink","/core-data",1,"card"],r,g]},template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e.SDv(5,5),e.qZA(),e.TgZ(6,"h5",6)(7,"span",7),e._uU(8),e.qZA(),e.TgZ(9,"span",8),e._uU(10),e.qZA(),e.TgZ(11,"span",9),e._uU(12),e.qZA()()()()(),e.TgZ(13,"div",1)(14,"div",10)(15,"div",3)(16,"h5",4),e.SDv(17,11),e.qZA(),e.TgZ(18,"h5",6)(19,"span",7),e._uU(20),e.qZA(),e.TgZ(21,"span",8),e._uU(22),e.qZA(),e.TgZ(23,"span",9),e._uU(24),e.qZA()()()()(),e.TgZ(25,"div",1)(26,"div",12)(27,"div",3)(28,"h5",4),e.SDv(29,13),e.qZA(),e.TgZ(30,"h5",6)(31,"span",7),e._uU(32),e.qZA()()()()()(),e.TgZ(33,"div",14)(34,"div",15)(35,"div",16)(36,"div",3)(37,"h5",4),e.SDv(38,17),e.qZA(),e.TgZ(39,"h5")(40,"a",18),e._uU(41),e.qZA()()()()(),e.TgZ(42,"div",15)(43,"div",19)(44,"div",3)(45,"h5",4),e.SDv(46,20),e.qZA(),e.TgZ(47,"h5")(48,"a",18),e._uU(49),e.qZA()()()()()(),e.TgZ(50,"div",14)(51,"div",15)(52,"div",21)(53,"div",3)(54,"h5",4),e.SDv(55,22),e.qZA(),e.TgZ(56,"h5")(57,"a",18),e._uU(58),e.qZA()()()()(),e.TgZ(59,"div",15)(60,"div",21)(61,"div",3)(62,"h5",4),e.SDv(63,23),e.qZA(),e.TgZ(64,"h5")(65,"a",18),e._uU(66),e.qZA()()()()()()),2&n&&(e.xp6(8),e.hij(" ",i.deviceSvcCount>100?"100+":i.deviceSvcCount," "),e.xp6(2),e.hij("Locked ",i.deviceSvcStatusLockedCount,""),e.xp6(2),e.hij("Unlocked ",i.deviceSvcCount-i.deviceSvcStatusLockedCount,""),e.xp6(8),e.hij(" ",i.deviceCount>100?"100+":i.deviceCount," "),e.xp6(2),e.hij("Locked ",i.deviceStatusLockedCount,""),e.xp6(2),e.hij("Unlocked ",i.deviceCount-i.deviceStatusLockedCount,""),e.xp6(8),e.Oqu(i.deviceProfileCount>100?"100+":i.deviceProfileCount),e.xp6(9),e.Oqu(i.schedulerCount>100?"100+":i.schedulerCount),e.xp6(8),e.Oqu(i.notificationCount>100?"100+":i.notificationCount),e.xp6(9),e.Oqu(i.eventCount),e.xp6(8),e.Oqu(i.readingCount))},dependencies:[u.rH],styles:[".shadow[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:hover{box-shadow:0 .5rem 1rem #00000026!important;border-radius:.25rem!important}\n\n/*# sourceMappingURL=dashboard.component.css.map*/"]})}return o})();const O=[{path:"",canActivate:[s(2560).a],component:f}];let R=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(O),u.Bz]})}return o})(),T=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[S.ez,R]})}return o})()}}]);
//# sourceMappingURL=489.e2c9e281d5da65e5.js.map