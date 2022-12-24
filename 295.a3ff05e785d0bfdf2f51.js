"use strict";(self.webpackChunkhts_frontend=self.webpackChunkhts_frontend||[]).push([[295],{77295:(yt,P,s)=>{s.r(P),s.d(P,{CajaModule:()=>qt});var u=s(38583),D=s(63423),t=s(37716),m=s(32789),h=s(11494),Z=s(99692),O=s(15115),f=s(22238),c=s(3679),Y=s(92340),_=s(74945),v=s(5304),J=s(91841),z=s(44578);let w=(()=>{class e{constructor(o,n){this.http=o,this.errorService=n,this.apiUrl=Y.N.SERVER_URL_MANTENIMIENTO}addDescuentosRol(o){return this.http.post(this.apiUrl+"/descuentoroles/guardardescuentoroles",o).pipe((0,_.X)(2),(0,v.K)(this.errorService.handle))}findDescuentosRol(o,n){return this.http.post(this.apiUrl+"/descuentoroles/otentabladescuentoroles",{perfilId:o,hospitalId:n}).pipe((0,_.X)(2),(0,v.K)(this.errorService.handle))}updateDescuentosRol(o){return this.http.post(this.apiUrl+"/descuentoroles/actualizardescuentoroles",o).pipe((0,_.X)(2),(0,v.K)(this.errorService.handle))}deleteDescuentosRol(o){return this.http.post(this.apiUrl+"/descuentoroles/eliminardescuentoroles",{descRoles_Id:o}).pipe((0,_.X)(2),(0,v.K)(this.errorService.handle))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(J.eN),t.LFG(z.T))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var q=s(75863),b=s(93738),g=s(98295),y=s(67441),S=s(72458),x=s(49983),C=s(51095),Q=s(45396);function E(e,i){if(1&e&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.id),t.xp6(1),t.Oqu(o.nombre)}}function F(e,i){1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"mat-slide-toggle",20),t._uU(2," Status "),t.qZA(),t.qZA())}const U=function(e){return{center:e}};function H(e,i){if(1&e&&(t.TgZ(0,"div",21),t.TgZ(1,"div",0),t.TgZ(2,"div",11),t.TgZ(3,"span"),t._uU(4,"Descuento por porcentaje"),t.qZA(),t.qZA(),t.TgZ(5,"div",22),t.TgZ(6,"div",3),t._uU(7,"M\xednimo"),t.TgZ(8,"span",7),t._uU(9,"*"),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",8),t._UZ(11,"input",23),t.TgZ(12,"mat-error"),t._uU(13,"Este valor es obligatorio"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",22),t.TgZ(15,"div",3),t._uU(16,"M\xe1ximo"),t.TgZ(17,"span",7),t._uU(18,"*"),t.qZA(),t.qZA(),t.TgZ(19,"mat-form-field",8),t._UZ(20,"input",24),t.TgZ(21,"mat-error"),t._uU(22,"Este valor es obligatorio"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.Q6J("ngClass",t.VKq(1,U,o.porcentaje))}}function B(e,i){if(1&e&&(t.TgZ(0,"div",21),t.TgZ(1,"div",0),t.TgZ(2,"div",11),t.TgZ(3,"span"),t._uU(4,"Descuento por monto"),t.qZA(),t.qZA(),t.TgZ(5,"div",22),t.TgZ(6,"div",3),t._uU(7,"M\xednimo"),t.TgZ(8,"span",7),t._uU(9,"*"),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",8),t._UZ(11,"input",25),t.TgZ(12,"mat-error"),t._uU(13,"Este valor es obligatorio"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",22),t.TgZ(15,"div",3),t._uU(16,"M\xe1ximo"),t.TgZ(17,"span",7),t._uU(18,"*"),t.qZA(),t.qZA(),t.TgZ(19,"mat-form-field",8),t._UZ(20,"input",26),t.TgZ(21,"mat-error"),t._uU(22,"Este valor es obligatorio"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.Q6J("ngClass",t.VKq(1,U,o.monto))}}const M=function(e){return{select:e}};let k=(()=>{class e{constructor(o,n,a,r,d,l){this.dialogRef=o,this.descuentosRolService=n,this.permisosService=a,this.dialog=r,this.formBuilder=d,this.dataDialog=l,this.isUpdate=!1,this.horizontalPosition="right",this.verticalPosition="top",this.listaRol=[],this.porcentaje=!1,this.monto=!1,this.porcentajeMonto=!1,this.isSelec=!1,this.form=d.group({key:new c.NI("",[c.kI.required,c.kI.maxLength(60)]),rol:new c.NI("",[c.kI.required,c.kI.maxLength(60)]),porMin:new c.NI(""),porMax:new c.NI(""),monMin:new c.NI(""),monMax:new c.NI(""),status:new c.NI("")}),this.permisosService.findRolesByHospByPer(l.idhospital,l.profileId).subscribe(p=>{1===p.estatus&&(this.listaRol=p.informacion.roles)},p=>{}),"update"===l.type&&(this.dataUpdate=l.data,this.isUpdate=!0,this.form.controls.key.setValue(l.data.rolId),this.form.controls.rol.setValue(l.data.rolId),this.form.controls.porMin.setValue(l.data.porcentajeMin),this.form.controls.porMax.setValue(l.data.porcentajeMax),void 0!==l.data.porcentajeMax&&null!=l.data.porcentajeMax&&void 0!==l.data.montoMax&&null!=l.data.montoMax?(this.porcentajeMonto=!0,this.isSelec=!0):void 0!==l.data.porcentajeMax&&null!=l.data.porcentajeMax?(this.isSelec=!0,this.porcentaje=!0):void 0!==l.data.montoMax&&null!=l.data.montoMax&&(this.isSelec=!0,this.monto=!0),this.form.controls.monMin.setValue(l.data.montoMin),this.form.controls.monMax.setValue(l.data.montoMax),this.form.controls.status.setValue(1===l.data.estatus))}selecRol(o){this.form.controls.key.setValue(o)}porcentajeFun(){this.isSelec=!0,this.porcentaje=!0,this.monto=!1,this.porcentajeMonto=!1}montoFun(){this.isSelec=!0,this.porcentaje=!1,this.monto=!0,this.porcentajeMonto=!1}porcentajeMontoFun(){this.isSelec=!0,this.porcentajeMonto=!0,this.monto=!1,this.porcentaje=!1}onNoClick(){let o;o=!0===this.form.value.status?1:0;let n={rolId:this.form.value.key,porcentajeMax:this.form.value.porMax,porcentajeMin:this.form.value.porMin,montoMax:parseInt(this.form.value.monMax),montoMin:parseInt(this.form.value.monMin),estatus:1};this.descuentosRolService.addDescuentosRol(n).subscribe(a=>{1===a.estatus&&this.dialogRef.close(!0)},a=>{this.dialogRef.close(null)})}update(){let o;o=!0===this.form.value.status?1:0,this.dataUpdate.rolId=this.form.value.key,this.dataUpdate.porcentajeMax=this.form.value.porMax,this.dataUpdate.porcentajeMin=this.form.value.porMin,this.dataUpdate.montoMax=parseInt(this.form.value.monMax),this.dataUpdate.montoMin=parseInt(this.form.value.monMin),this.dataUpdate.estatus=o,this.descuentosRolService.updateDescuentosRol(this.dataUpdate).subscribe(n=>{1===n.estatus&&this.dialogRef.close(!0)},n=>{this.dialogRef.close(null)})}cancelar(){this.dialogRef.close(null)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.so),t.Y36(w),t.Y36(q.X),t.Y36(f.uw),t.Y36(c.qu),t.Y36(f.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-descuentos-rol"]],decls:50,vars:18,consts:[[1,"row"],[3,"formGroup"],[1,"col-sm-4"],[1,"label"],["appearance","fill"],["formControlName","rol",3,"valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"obligatorio"],["appearance","outline",1,"clues_bus"],["matInput","","placeholder","Key","autocomplete","off","formControlName","key"],["class","col-sm-4",4,"ngIf"],[1,"col-sm-12"],[1,"content-butons"],[1,"col-sm-4","buton-descuento",3,"ngClass","click"],[1,"row","content-descuentos"],["class","cont-data-des",3,"ngClass",4,"ngIf"],[1,"butons_content"],["mat-raised-button","","color","warn","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit","cdkFocusInitial","",3,"hidden","disabled","click"],[3,"value"],["formControlName","status","value","false",1,"toogle"],[1,"cont-data-des",3,"ngClass"],[1,"col-sm-8"],["matInput","","placeholder","","autocomplete","off","formControlName","porMin"],["matInput","","placeholder","","autocomplete","off","formControlName","porMax"],["matInput","","placeholder","","autocomplete","off","formControlName","monMin"],["matInput","","placeholder","","autocomplete","off","formControlName","monMax"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card-title"),t.TgZ(1,"h2"),t._uU(2,"Descuento por rol"),t.qZA(),t.qZA(),t.TgZ(3,"div",0),t.TgZ(4,"form",1),t.TgZ(5,"div",0),t.TgZ(6,"div",2),t.TgZ(7,"div",3),t._uU(8,"Rol"),t.qZA(),t.TgZ(9,"mat-form-field",4),t.TgZ(10,"mat-label"),t._uU(11,"Seleccione un rol"),t.qZA(),t.TgZ(12,"mat-select",5),t.NdJ("valueChange",function(r){return n.selecRol(r)}),t.TgZ(13,"mat-option"),t._uU(14,"None"),t.qZA(),t.YNc(15,E,2,2,"mat-option",6),t.qZA(),t.TgZ(16,"mat-error"),t._uU(17,"Este valor es obligatorio"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",2),t.TgZ(19,"div",3),t._uU(20,"Key"),t.TgZ(21,"span",7),t._uU(22,"*"),t.qZA(),t.qZA(),t.TgZ(23,"mat-form-field",8),t._UZ(24,"input",9),t.TgZ(25,"mat-error"),t._uU(26,"Este valor es obligatorio"),t.qZA(),t.qZA(),t.qZA(),t.YNc(27,F,3,0,"div",10),t.TgZ(28,"div",11),t.TgZ(29,"div",12),t.TgZ(30,"div",0),t.TgZ(31,"div",13),t.NdJ("click",function(){return n.porcentajeFun()}),t.TgZ(32,"span"),t._uU(33,"Por porcentaje"),t.qZA(),t.qZA(),t.TgZ(34,"div",13),t.NdJ("click",function(){return n.montoFun()}),t.TgZ(35,"span"),t._uU(36,"Por monto"),t.qZA(),t.qZA(),t.TgZ(37,"div",13),t.NdJ("click",function(){return n.porcentajeMontoFun()}),t.TgZ(38,"span"),t._uU(39,"Por porcentaje y monto"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",14),t.YNc(41,H,23,3,"div",15),t.YNc(42,B,23,3,"div",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",16),t.TgZ(44,"button",17),t.NdJ("click",function(){return n.cancelar()}),t._uU(45," Cancelar "),t.qZA(),t.TgZ(46,"button",18),t.NdJ("click",function(){return n.onNoClick()}),t._uU(47," Agregar "),t.qZA(),t.TgZ(48,"button",18),t.NdJ("click",function(){return n.update()}),t._uU(49," Actualizar "),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("formGroup",n.form),t.xp6(11),t.Q6J("ngForOf",n.listaRol),t.xp6(12),t.Q6J("ngIf",n.isUpdate),t.xp6(4),t.Q6J("ngClass",t.VKq(12,M,n.porcentaje)),t.xp6(3),t.Q6J("ngClass",t.VKq(14,M,n.monto)),t.xp6(3),t.Q6J("ngClass",t.VKq(16,M,n.porcentajeMonto)),t.xp6(4),t.Q6J("ngIf",n.porcentaje||n.porcentajeMonto),t.xp6(1),t.Q6J("ngIf",n.monto||n.porcentajeMonto),t.xp6(4),t.Q6J("hidden",n.isUpdate)("disabled",!n.form.valid||!n.isSelec),t.xp6(2),t.Q6J("hidden",!n.isUpdate)("disabled",!n.form.valid||!n.isSelec))},directives:[b.n5,c._Y,c.JL,c.sg,g.KE,g.hX,y.gD,c.JJ,c.u,S.ey,u.sg,g.TO,x.Nt,c.Fj,u.O5,u.mk,C.lW,Q.Rr],styles:["mat-input-element{text-transform:uppercase}.content-butons[_ngcontent-%COMP%]{position:relative;width:50%;left:25%;display:block}.content-butons[_ngcontent-%COMP%]   .buton-descuento[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;position:relative;display:block;height:40px;background-color:#dce4e4;border:solid 1px;border-color:#d0d0d0;border-radius:3px;text-align:center;line-height:20px;cursor:pointer}.content-butons[_ngcontent-%COMP%]   .buton-descuento[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:10px;font-size:11px}.select[_ngcontent-%COMP%]{color:#fff;background-color:#0288d1!important}.content-descuentos[_ngcontent-%COMP%]{margin-top:20px}.cont-data-des[_ngcontent-%COMP%]{width:50%;display:inline-block}.center[_ngcontent-%COMP%]{position:relative;left:calc(50% - 15%)}",'mat-card[_ngcontent-%COMP%]{width:85vw;position:relative;display:block;margin:40px}mat-card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:"Source Sans Pro",Arial,Helvetica,sans-serif;font-size:17px;padding:10px 20px 0 15px;line-height:30px;color:#6e6e6e;font-weight:600;display:inline-block;margin:0;border:0 solid rgba(0,0,0,.12);border-bottom:0;text-transform:uppercase}mat-card-title[_ngcontent-%COMP%]{margin-bottom:20px!important}mat-card-title[_ngcontent-%COMP%]{display:block;margin-bottom:8px;border-bottom:1px solid;border-color:#e4e4e4}mat-card-content[_ngcontent-%COMP%]{width:95%;position:relative;left:2.5%;height:70%}mat-toolbar[_ngcontent-%COMP%]{border-radius:.6rem}.title-hts-menus[_ngcontent-%COMP%]{display:block}.title-hts-menus[_ngcontent-%COMP%]   .content-footer-title[_ngcontent-%COMP%]{position:relative;top:15px;color:#888b8b}.title-hts-menus[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:60%;font-size:.7rem;height:2.5rem;background-color:#fff}.title-hts-menus[_ngcontent-%COMP%]   .content-select[_ngcontent-%COMP%]{top:10px;position:relative;left:10%;width:100%}.title-hts-menus[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:#fff}.title-hts-menus[_ngcontent-%COMP%]   .title-prin-hts[_ngcontent-%COMP%]{top:2px;position:relative;display:block;width:80%;display:inline-block;color:#888b8b;font-size:1.1vw}.title-hts-menus[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:inline-block;position:relative;top:12px;font-size:35px;margin-right:20px;color:#888b8b}.row-roles[_ngcontent-%COMP%]{color:#fff!important;background-color:#3185b9}.row-roles[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff!important}.title[_ngcontent-%COMP%]{background-color:var(--secondary);margin-bottom:0;margin-top:.5rem;padding:.6rem;display:flex;align-items:center;color:var(--white);display:block;border-top-left-radius:9px;border-top-right-radius:9px;height:3vw}.title__text[_ngcontent-%COMP%]{font-size:1vw;font-weight:500;margin-left:20px}.title__icon[_ngcontent-%COMP%]{font-size:1.3rem}.title[_ngcontent-%COMP%]   .conten-icon[_ngcontent-%COMP%]{position:relative;height:1.5rem;display:inline-block;text-align:right;left:0vw}.title[_ngcontent-%COMP%]   .conten-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;cursor:pointer;font-size:1.2vw;top:.3vw}.title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;font-size:1.2vw;top:.3vw;cursor:pointer}.butons_content[_ngcontent-%COMP%]{width:100%;text-align:right;position:relative;margin-top:0}.butons_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}table[_ngcontent-%COMP%]{margin-top:0;width:100%;text-align:left;min-height:10px}  .mat-form-field-wrapper .mat-form-field-flex{background-color:#fff}  .mat-row{height:40px!important;min-height:10px!important;cursor:pointer}  .mat-row td{font-size:.8vw!important}  .mat-row mat-icon{font-size:1.3vw!important}  .mat-row .mat-icon-button{width:2vw;height:2vw}  .mat-header-cell{font-size:.8vw!important}mat-slide-toggle[_ngcontent-%COMP%]{margin-top:2rem;left:0rem;position:relative}  .mat-slide-toggle-label .mat-slide-toggle-bar{width:50px;height:30px;border-radius:30px}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#08a9f98a}  .mat-slide-toggle-label .mat-slide-toggle-thumb{width:35px;height:35px}.obligatorio[_ngcontent-%COMP%]{color:red}mat-dialog-container[_ngcontent-%COMP%]{max-height:90%}  .cdk-overlay-pane{max-height:95vh}  .mat-tab-body{overflow:hidden!important}mat-form-field[_ngcontent-%COMP%]{width:100%}  .warning-snackbar{background:#dda256}  .success-snackbar{background:#35b31c}  .mat-paginator{border-bottom:solid 1px;border-left:solid 1px;border-right:solid 1px;border-color:#578787}  .mat-table{border:solid 1px;border-color:#578787}.noConfig[_ngcontent-%COMP%]{color:#ff000080}.config[_ngcontent-%COMP%]{color:#08e914c4}.search-input[_ngcontent-%COMP%]{width:80%;background-color:#f0f8ff;border-radius:6px;height:1.5vw;border:solid 2px;border-color:#307c9e;color:#000;position:relative;top:.1vw;font-size:.8vw}']}),e})();var V=s(80357),$=s(19238),X=s(77001),T=s(12522),A=s(76627),R=s(11436);function K(e,i){if(1&e&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.hospitalId),t.xp6(1),t.Oqu(o.nombre)}}function L(e,i){if(1&e&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.idPerfil),t.xp6(1),t.Oqu(o.nombre)}}function G(e,i){1&e&&(t.TgZ(0,"th",48),t._uU(1,"key"),t.qZA())}function W(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.descRoles_Id)}}function tt(e,i){1&e&&(t.TgZ(0,"th",50),t._uU(1,"Rol"),t.qZA())}function et(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.nombreRol)}}function ot(e,i){1&e&&(t.TgZ(0,"th",51),t._uU(1,"Porcentaje m\xednimo"),t.qZA())}function nt(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.porcentajeMin)}}function it(e,i){1&e&&(t.TgZ(0,"th",52),t._uU(1,"Porcentaje m\xe1ximo"),t.qZA())}function st(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.porcentajeMax)}}function at(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1,"Monto m\xednimo"),t.qZA())}function rt(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.montoMin)}}function lt(e,i){1&e&&(t.TgZ(0,"th",54),t._uU(1,"Monto m\xe1ximo"),t.qZA())}function ct(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.montoMax)}}function dt(e,i){1&e&&(t.TgZ(0,"th",55),t._uU(1,"Activo"),t.qZA())}function mt(e,i){1&e&&(t.TgZ(0,"mat-icon",58),t._uU(1,"check_circle"),t.qZA())}function pt(e,i){1&e&&(t.TgZ(0,"mat-icon",59),t._uU(1,"cancel"),t.qZA())}function ut(e,i){if(1&e&&(t.TgZ(0,"td",49),t.YNc(1,mt,2,0,"mat-icon",56),t.YNc(2,pt,2,0,"mat-icon",57),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngIf",1===o.estatus),t.xp6(1),t.Q6J("ngIf",0===o.estatus)}}function gt(e,i){1&e&&(t.TgZ(0,"th",60),t._uU(1,"Fecha registro"),t.qZA())}function ht(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.fechaRegistro)}}function ft(e,i){1&e&&(t.TgZ(0,"th",61),t._uU(1,"Usuario registro"),t.qZA())}function _t(e,i){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.usuarioRegistro)}}function vt(e,i){1&e&&t._UZ(0,"th",62)}function Ct(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",49),t.TgZ(1,"button",63),t.TgZ(2,"mat-icon",64),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw(2).editServicios(r)}),t._uU(3,"edit"),t.qZA(),t.qZA(),t.qZA()}}function Zt(e,i){1&e&&t._UZ(0,"th",65)}function bt(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",49),t.TgZ(1,"button",63),t.TgZ(2,"mat-icon",66),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw(2).deleteServicio(r)}),t._uU(3,"delete"),t.qZA(),t.qZA(),t.qZA()}}function xt(e,i){1&e&&t._UZ(0,"tr",67)}function Mt(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"tr",68),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw(2).clickRowRisses(r)}),t.qZA()}if(2&e){const o=i.$implicit,n=t.oxw(2);t.ekj("row-roles",n.clickedRowsRisses.has(o))}}const Tt=function(){return[10,20,30]};function At(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div",14),t.TgZ(1,"div",15),t.TgZ(2,"div",2),t.TgZ(3,"div",16),t.TgZ(4,"span",17),t._uU(5,"Permisos registrados "),t.qZA(),t.qZA(),t.TgZ(6,"div",18),t.TgZ(7,"div",19),t.TgZ(8,"mat-icon",20),t.NdJ("click",function(){return t.CHM(o),t.oxw().addServiceBasic()}),t._uU(9,"add_box"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"table",21),t.NdJ("matSortChange",function(a){return t.CHM(o),t.oxw().announceSortChange(a)}),t.ynx(11,22),t.YNc(12,G,2,0,"th",23),t.YNc(13,W,2,1,"td",24),t.BQk(),t.ynx(14,25),t.YNc(15,tt,2,0,"th",26),t.YNc(16,et,2,1,"td",24),t.BQk(),t.ynx(17,27),t.YNc(18,ot,2,0,"th",28),t.YNc(19,nt,2,1,"td",24),t.BQk(),t.ynx(20,29),t.YNc(21,it,2,0,"th",30),t.YNc(22,st,2,1,"td",24),t.BQk(),t.ynx(23,31),t.YNc(24,at,2,0,"th",32),t.YNc(25,rt,2,1,"td",24),t.BQk(),t.ynx(26,33),t.YNc(27,lt,2,0,"th",34),t.YNc(28,ct,2,1,"td",24),t.BQk(),t.ynx(29,35),t.YNc(30,dt,2,0,"th",36),t.YNc(31,ut,3,2,"td",24),t.BQk(),t.ynx(32,37),t.YNc(33,gt,2,0,"th",38),t.YNc(34,ht,2,1,"td",24),t.BQk(),t.ynx(35,39),t.YNc(36,ft,2,0,"th",40),t.YNc(37,_t,2,1,"td",24),t.BQk(),t.ynx(38,41),t.YNc(39,vt,1,0,"th",42),t.YNc(40,Ct,4,0,"td",24),t.BQk(),t.ynx(41,43),t.YNc(42,Zt,1,0,"th",44),t.YNc(43,bt,4,0,"td",24),t.BQk(),t.YNc(44,xt,1,0,"tr",45),t.YNc(45,Mt,1,2,"tr",46),t.qZA(),t._UZ(46,"mat-paginator",47),t.qZA()}if(2&e){const o=t.oxw();t.xp6(10),t.Q6J("dataSource",o.dataSource),t.xp6(34),t.Q6J("matHeaderRowDef",o.columnas),t.xp6(1),t.Q6J("matRowDefColumns",o.columnas),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,Tt))}}const Rt=[{path:"descuentos-rol",component:(()=>{class e{constructor(o,n,a,r,d,l){this.hospitalService=o,this._liveAnnouncer=n,this.descuentosRolService=a,this.permisosService=r,this._snackBar=d,this.dialog=l,this.hospitals=[],this.grupPreguntas=[],this.columnas=["descRoles_Id","nombreRol","porcentajeMin","porcentajeMax","montoMin","montoMax","estatus","fechaRegistro","usuarioRegistro","edit","delete"],this.dataSource=new m.by,this.clickedRowsRisses=new Set,this.showTable=!1,this.horizontalPosition="right",this.verticalPosition="top",this.listData=[],this.paginator=new t.n_E,this.sort=new t.n_E,this.selected=null,o.getHospitalesActivos().subscribe(p=>{1===p.estatus&&(this.hospitals=p.informacion.hospitales)},p=>{})}ngOnDestroy(){this.dialog&&this.dialog.closeAll()}ngAfterViewInit(){this.sort.changes.subscribe(o=>{this.dataSource.sort=o._results[0]}),this.paginator.changes.subscribe(o=>{this.dataSource.paginator=o._results[0]}),this.paginator.forEach((o,n)=>{0===n&&(this.dataSource.paginator=o)}),this.sort.forEach((o,n)=>{0===n&&(this.dataSource.sort=o)})}announceSortChange(o){this._liveAnnouncer.announce(o.direction?`Sorted ${o.direction}ending`:"Sorting cleared")}selectHospital(o){this.selected=null,this.idhospital=o,this.selectGrupoPregunt={},this.dataSource.data=[],this.grupPreguntas=[],this.showTable=!1,this.permisosService.findPerfilesHospital(this.idhospital).subscribe(n=>{1===n.estatus&&(this.grupPreguntas=n.informacion.perfiles)})}selectPreguntas(o){this.showTable=!0,this.dataSource.data=[],this.profileId=o,this.descuentosRolService.findDescuentosRol(this.profileId,this.idhospital).subscribe(n=>{1===n.estatus&&(this.dataSource.data=n.informacion.ListaDescuentoRoles)})}addServiceBasic(){this.dialog.open(k,{height:"auto",width:"900px",data:{idhospital:this.idhospital,profileId:this.profileId,type:"add"}}).afterClosed().subscribe(a=>{a&&(this.listData=[],this.descuentosRolService.findDescuentosRol(this.profileId,this.idhospital).subscribe(r=>{1===r.estatus&&(this.dataSource.data=r.informacion.ListaDescuentoRoles,this._snackBar.open("Descuento por rol agregado con \xe9xito!!","X",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:3e3,panelClass:["success-snackbar"]}))}))})}editServicios(o){this.dialog.open(k,{height:"auto",width:"900px",data:{idhospital:this.idhospital,profileId:this.profileId,data:o,type:"update"}}).afterClosed().subscribe(r=>{r&&(this.listData=[],this.descuentosRolService.findDescuentosRol(this.profileId,this.idhospital).subscribe(d=>{1===d.estatus&&(this.dataSource.data=d.informacion.ListaDescuentoRoles,this._snackBar.open("Descuento por rol actualizado con \xe9xito!!","X",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:3e3,panelClass:["success-snackbar"]}))}))})}deleteServicio(o){this.dialog.open(O.Q,{height:"auto",width:"500px",data:{colorIco:"naranja",title:"Eliminar elemento",titleTwo:"\xbfSeguro que desea eliminar el Descuento de Rol?"}}).afterClosed().subscribe(r=>{r&&(this.listData=[],this.descuentosRolService.deleteDescuentosRol(o.descRoles_Id).subscribe(d=>{1===d.estatus?this.descuentosRolService.findDescuentosRol(this.profileId,this.idhospital).subscribe(l=>{1===l.estatus&&(this.dataSource.data=l.informacion.ListaDescuentoRoles,this._snackBar.open("Descuento por rol eliminado con \xe9xito!!","X",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:3e3,panelClass:["success-snackbar"]}))}):this.dialog.open(O.Q,{height:"auto",width:"500px",data:{colorIco:"naranja",title:"Advertencia",titleTwo:"No se puede eliminar el Descuento por rol, esta ya se encuentra asociada"}})},d=>{}))})}clickRowRisses(o){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(V.a),t.Y36($.Kd),t.Y36(w),t.Y36(q.X),t.Y36(X.ux),t.Y36(f.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-descuentos-rol"]],viewQuery:function(o,n){if(1&o&&(t.Gf(Z.NW,5),t.Gf(h.YE,5)),2&o){let a;t.iGM(a=t.CRH())&&(n.paginator=a),t.iGM(a=t.CRH())&&(n.sort=a)}},decls:33,vars:4,consts:[[1,"col-sm-12","fotter-descuetos-rol"],[1,"title-hts-menus","descuentos-rol"],[1,"row"],[1,"col-sm-6","content-footer-title"],["aria-hidden","true",1,"fa","fa-fw","fa-lg","fa-hospital-o"],[1,"title-prin-hts"],[1,"col-sm-6"],[1,"content-select"],["appearance","fill"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value","selectionChange","valueChange"],["class","col-sm-12",4,"ngIf"],[3,"value"],[1,"col-sm-12"],[1,"title"],[1,"col-sm-11"],[1,"title__text"],[1,"col-sm-1"],[1,"conten-icon"],["matTooltip","Add",3,"click"],["mat-table","","matSort","",1,"mat-elevation-z4","risses",3,"dataSource","matSortChange"],["matColumnDef","descRoles_Id"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by descRoles_Id",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombreRol"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by nombreRol",4,"matHeaderCellDef"],["matColumnDef","porcentajeMin"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by porcentajeMin",4,"matHeaderCellDef"],["matColumnDef","porcentajeMax"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by porcentajeMax",4,"matHeaderCellDef"],["matColumnDef","montoMin"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by montoMin",4,"matHeaderCellDef"],["matColumnDef","montoMax"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by montoMax",4,"matHeaderCellDef"],["matColumnDef","estatus"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by estatus",4,"matHeaderCellDef"],["matColumnDef","fechaRegistro"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by fechaRegistro",4,"matHeaderCellDef"],["matColumnDef","usuarioRegistro"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by usuarioRegistro",4,"matHeaderCellDef"],["matColumnDef","edit"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by edit",4,"matHeaderCellDef"],["matColumnDef","delete"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by delete",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"row-roles","click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by descRoles_Id"],["mat-cell",""],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by nombreRol"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by porcentajeMin"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by porcentajeMax"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by montoMin"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by montoMax"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by estatus"],["class","config",4,"ngIf"],["class","noConfig",4,"ngIf"],[1,"config"],[1,"noConfig"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by fechaRegistro"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by usuarioRegistro"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by edit"],["mat-icon-button",""],["matTooltip","Editar",3,"click"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by delete"],["matTooltip","Eliminar",3,"click"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-title"),t.TgZ(2,"h2"),t._uU(3,"Descuentos por rol"),t.qZA(),t.qZA(),t.TgZ(4,"mat-toolbar",1),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t._UZ(7,"i",4),t.TgZ(8,"span",5),t._uU(9,"Hospital"),t.qZA(),t.qZA(),t.TgZ(10,"div",3),t._UZ(11,"i",4),t.TgZ(12,"span",5),t._uU(13,"Profile"),t.qZA(),t.qZA(),t.TgZ(14,"div",6),t.TgZ(15,"div",7),t.TgZ(16,"mat-form-field",8),t.TgZ(17,"mat-label"),t._uU(18,"Seleccione un hospital..."),t.qZA(),t.TgZ(19,"mat-select",9),t.NdJ("selectionChange",function(r){return n.selectHospital(r.value)}),t.TgZ(20,"mat-option"),t._uU(21,"None"),t.qZA(),t.YNc(22,K,2,2,"mat-option",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"div",7),t.TgZ(25,"mat-form-field",8),t.TgZ(26,"mat-label"),t._uU(27,"Seleccione una opci\xf3n..."),t.qZA(),t.TgZ(28,"mat-select",11),t.NdJ("selectionChange",function(r){return n.selectPreguntas(r.value)})("valueChange",function(r){return n.selected=r}),t.TgZ(29,"mat-option"),t._uU(30,"None"),t.qZA(),t.YNc(31,L,2,2,"mat-option",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(32,At,47,5,"div",12),t.qZA()),2&o&&(t.xp6(22),t.Q6J("ngForOf",n.hospitals),t.xp6(6),t.Q6J("value",n.selected),t.xp6(3),t.Q6J("ngForOf",n.grupPreguntas),t.xp6(1),t.Q6J("ngIf",n.showTable))},directives:[b.a8,b.n5,T.Ye,g.KE,g.hX,y.gD,S.ey,u.sg,u.O5,A.Hw,R.gM,m.BZ,h.YE,m.w1,m.fO,m.Dz,m.as,m.nj,Z.NW,m.ge,h.nU,m.ev,C.lW,m.XQ,m.Gk],styles:[".fotter-descuetos-rol .content-footer-title{height:50px}  .fotter-descuetos-rol .descuentos-rol{height:100px}.content-select[_ngcontent-%COMP%]{top:0px!important;position:relative;left:0%!important;width:100%}.mat-column-clavePreguntas[_ngcontent-%COMP%]{width:30%;text-align:left;position:relative}.mat-column-descPregunta[_ngcontent-%COMP%]{width:50%;text-align:left;position:relative}.mat-column-estatus[_ngcontent-%COMP%]{width:10%;text-align:left;position:relative}.mat-column-edit[_ngcontent-%COMP%]{width:5%;text-align:left;position:relative}.mat-column-delete[_ngcontent-%COMP%]{width:5%;text-align:left;position:relative}",'mat-card[_ngcontent-%COMP%]{width:85vw;position:relative;display:block;margin:40px}mat-card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:"Source Sans Pro",Arial,Helvetica,sans-serif;font-size:17px;padding:10px 20px 0 15px;line-height:30px;color:#6e6e6e;font-weight:600;display:inline-block;margin:0;border:0 solid rgba(0,0,0,.12);border-bottom:0;text-transform:uppercase}mat-card-title[_ngcontent-%COMP%]{margin-bottom:20px!important}mat-card-title[_ngcontent-%COMP%]{display:block;margin-bottom:8px;border-bottom:1px solid;border-color:#e4e4e4}mat-card-content[_ngcontent-%COMP%]{width:95%;position:relative;left:2.5%;height:70%}mat-toolbar[_ngcontent-%COMP%]{border-radius:.6rem}.title-hts-menus[_ngcontent-%COMP%]{display:block}.title-hts-menus[_ngcontent-%COMP%]   .content-footer-title[_ngcontent-%COMP%]{position:relative;top:15px;color:#888b8b}.title-hts-menus[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:60%;font-size:.7rem;height:2.5rem;background-color:#fff}.title-hts-menus[_ngcontent-%COMP%]   .content-select[_ngcontent-%COMP%]{top:10px;position:relative;left:10%;width:100%}.title-hts-menus[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:#fff}.title-hts-menus[_ngcontent-%COMP%]   .title-prin-hts[_ngcontent-%COMP%]{top:2px;position:relative;display:block;width:80%;display:inline-block;color:#888b8b;font-size:1.1vw}.title-hts-menus[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:inline-block;position:relative;top:12px;font-size:35px;margin-right:20px;color:#888b8b}.row-roles[_ngcontent-%COMP%]{color:#fff!important;background-color:#3185b9}.row-roles[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff!important}.title[_ngcontent-%COMP%]{background-color:var(--secondary);margin-bottom:0;margin-top:.5rem;padding:.6rem;display:flex;align-items:center;color:var(--white);display:block;border-top-left-radius:9px;border-top-right-radius:9px;height:3vw}.title__text[_ngcontent-%COMP%]{font-size:1vw;font-weight:500;margin-left:20px}.title__icon[_ngcontent-%COMP%]{font-size:1.3rem}.title[_ngcontent-%COMP%]   .conten-icon[_ngcontent-%COMP%]{position:relative;height:1.5rem;display:inline-block;text-align:right;left:0vw}.title[_ngcontent-%COMP%]   .conten-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;cursor:pointer;font-size:1.2vw;top:.3vw}.title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;font-size:1.2vw;top:.3vw;cursor:pointer}.butons_content[_ngcontent-%COMP%]{width:100%;text-align:right;position:relative;margin-top:0}.butons_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}table[_ngcontent-%COMP%]{margin-top:0;width:100%;text-align:left;min-height:10px}  .mat-form-field-wrapper .mat-form-field-flex{background-color:#fff}  .mat-row{height:40px!important;min-height:10px!important;cursor:pointer}  .mat-row td{font-size:.8vw!important}  .mat-row mat-icon{font-size:1.3vw!important}  .mat-row .mat-icon-button{width:2vw;height:2vw}  .mat-header-cell{font-size:.8vw!important}mat-slide-toggle[_ngcontent-%COMP%]{margin-top:2rem;left:0rem;position:relative}  .mat-slide-toggle-label .mat-slide-toggle-bar{width:50px;height:30px;border-radius:30px}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#08a9f98a}  .mat-slide-toggle-label .mat-slide-toggle-thumb{width:35px;height:35px}.obligatorio[_ngcontent-%COMP%]{color:red}mat-dialog-container[_ngcontent-%COMP%]{max-height:90%}  .cdk-overlay-pane{max-height:95vh}  .mat-tab-body{overflow:hidden!important}mat-form-field[_ngcontent-%COMP%]{width:100%}  .warning-snackbar{background:#dda256}  .success-snackbar{background:#35b31c}  .mat-paginator{border-bottom:solid 1px;border-left:solid 1px;border-right:solid 1px;border-color:#578787}  .mat-table{border:solid 1px;border-color:#578787}.noConfig[_ngcontent-%COMP%]{color:#ff000080}.config[_ngcontent-%COMP%]{color:#08e914c4}.search-input[_ngcontent-%COMP%]{width:80%;background-color:#f0f8ff;border-radius:6px;height:1.5vw;border:solid 2px;border-color:#307c9e;color:#000;position:relative;top:.1vw;font-size:.8vw}']}),e})()}];let Pt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[D.Bz.forChild(Rt)],D.Bz]}),e})();var N=s(23017),I=s(77746),j=s(33935),Dt=s(31838),Ot=s(7539),wt=s(81829);let qt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,Pt,T.g0,A.Ps,N.SJ,I.ie,x.c,R.AV,C.ot,j.Tx,c.u5,c.UX,Dt.C,T.g0,A.Ps,N.SJ,I.ie,x.c,R.AV,C.ot,j.Tx,h.JX,m.p0,Ot.p9,Z.TU,wt.N]]}),e})()}}]);