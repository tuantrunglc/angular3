"use strict";(self.webpackChunkec=self.webpackChunkec||[]).push([[932],{6932:(q,c,r)=>{r.r(c),r.d(c,{default:()=>y});var d=r(9608),u=r(6910),_=r(5779),f=r(7669),n=r(2673),l=r(7776),U=r(8635),Z=r(2101);let h=(()=>{class e{constructor(t,i){this.http=t,this.applicationConfigService=i}getBeans(){return this.http.get(this.applicationConfigService.getEndpointFor("management/configprops")).pipe((0,l.U)(t=>Object.values(Object.values(t.contexts).map(i=>i.beans).reduce((i,o)=>({...i,...o})))))}getPropertySources(){return this.http.get(this.applicationConfigService.getEndpointFor("management/env")).pipe((0,l.U)(t=>t.propertySources))}static#n=this.\u0275fac=function(i){return new(i||e)(n.LFG(U.eN),n.LFG(Z.y))};static#t=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var C=r(3642),T=r(179),p=r(9207);const g=(e,a)=>a.key;function m(e,a){if(1&e&&(n._uU(0,"\n                "),n.TgZ(1,"div",11),n._uU(2,"\n                  "),n.TgZ(3,"div",12),n._uU(4),n.qZA(),n._uU(5,"\n                  "),n.TgZ(6,"div",13),n._uU(7,"\n                    "),n.TgZ(8,"span",14),n._uU(9),n.ALo(10,"json"),n.qZA(),n._uU(11,"\n                  "),n.qZA(),n._uU(12,"\n                "),n.qZA(),n._uU(13,"\n              ")),2&e){const t=a.$implicit;n.xp6(4),n.Oqu(t.key),n.xp6(5),n.Oqu(n.lcZ(10,2,t.value))}}function A(e,a){if(1&e&&(n._uU(0,"\n          "),n.TgZ(1,"tr"),n._uU(2,"\n            "),n.TgZ(3,"td"),n._uU(4,"\n              "),n.TgZ(5,"span"),n._uU(6),n.qZA(),n._uU(7,"\n            "),n.qZA(),n._uU(8,"\n            "),n.TgZ(9,"td"),n._uU(10,"\n              "),n.SjG(11,m,14,4,null,null,g),n.ALo(13,"keyvalue"),n.qZA(),n._uU(14,"\n          "),n.qZA(),n._uU(15,"\n        ")),2&e){const t=a.$implicit;n.xp6(6),n.Oqu(t.prefix),n.xp6(5),n.wJu(n.lcZ(13,1,t.properties))}}function b(e,a){if(1&e&&(n._uU(0,"\n              "),n.TgZ(1,"tr"),n._uU(2,"\n                "),n.TgZ(3,"td",18),n._uU(4),n.qZA(),n._uU(5,"\n                "),n.TgZ(6,"td",18),n._uU(7,"\n                  "),n.TgZ(8,"span",14),n._uU(9),n.qZA(),n._uU(10,"\n                "),n.qZA(),n._uU(11,"\n              "),n.qZA(),n._uU(12,"\n            ")),2&e){const t=a.$implicit;n.xp6(4),n.Oqu(t.key),n.xp6(5),n.Oqu(t.value.value)}}function v(e,a){if(1&e&&(n._uU(0,"\n      "),n.TgZ(1,"div"),n._uU(2,"\n        "),n.TgZ(3,"h4",15),n._uU(4,"\n          "),n.TgZ(5,"span"),n._uU(6),n.qZA(),n._uU(7,"\n        "),n.qZA(),n._uU(8,"\n\n        "),n.TgZ(9,"table",16),n._uU(10,"\n          "),n.TgZ(11,"thead"),n._uU(12,"\n            "),n.TgZ(13,"tr"),n._uU(14,"\n              "),n.TgZ(15,"th",17),n._uU(16,"Property"),n.qZA(),n._uU(17,"\n              "),n.TgZ(18,"th",9),n._uU(19,"Value"),n.qZA(),n._uU(20,"\n            "),n.qZA(),n._uU(21,"\n          "),n.qZA(),n._uU(22,"\n          "),n.TgZ(23,"tbody"),n._uU(24,"\n            "),n.SjG(25,b,13,2,null,null,g),n.ALo(27,"keyvalue"),n.qZA(),n._uU(28,"\n        "),n.qZA(),n._uU(29,"\n      "),n.qZA(),n._uU(30,"\n    ")),2&e){const t=a.$implicit,i=a.$index;n.xp6(3),n.Q6J("id","property-source-"+i),n.xp6(3),n.Oqu(t.name),n.xp6(3),n.uIk("aria-describedby","property-source-"+i),n.xp6(16),n.wJu(n.lcZ(27,3,t.properties))}}function x(e,a){if(1&e){const t=n.EpF();n._uU(0,"\n  "),n.TgZ(1,"div"),n._uU(2,"\n    "),n.TgZ(3,"h2",0),n._uU(4,"Configuration"),n.qZA(),n._uU(5,"\n\n    "),n.TgZ(6,"span",1),n._uU(7,"Filter (by prefix)"),n.qZA(),n._uU(8,"\n    "),n.TgZ(9,"input",2),n.NdJ("ngModelChange",function(o){n.CHM(t);const s=n.oxw();return n.KtG(s.beansFilter=o)})("ngModelChange",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.filterAndSortBeans())}),n.qZA(),n._uU(10,"\n\n    "),n.TgZ(11,"h3",3),n._uU(12,"Spring configuration"),n.qZA(),n._uU(13,"\n\n    "),n.TgZ(14,"table",4),n._uU(15,"\n      "),n.TgZ(16,"thead"),n._uU(17,"\n        "),n.TgZ(18,"tr",5),n.NdJ("ascendingChange",function(o){n.CHM(t);const s=n.oxw();return n.KtG(s.beansAscending=o)})("sortChange",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.filterAndSortBeans())}),n._uU(19,"\n          "),n.TgZ(20,"th",6),n._uU(21,"\n            "),n.TgZ(22,"span",7),n._uU(23,"Prefix"),n.qZA(),n._uU(24," "),n._UZ(25,"fa-icon",8),n._uU(26,"\n          "),n.qZA(),n._uU(27,"\n          "),n.TgZ(28,"th",9)(29,"span",10),n._uU(30,"Properties"),n.qZA()(),n._uU(31,"\n        "),n.qZA(),n._uU(32,"\n      "),n.qZA(),n._uU(33,"\n      "),n.TgZ(34,"tbody"),n._uU(35,"\n        "),n.SjG(36,A,16,3,null,null,n.ikw),n.qZA(),n._uU(38,"\n    "),n.qZA(),n._uU(39,"\n\n    "),n.SjG(40,v,31,5,null,null,n.ikw),n.qZA(),n._uU(42,"\n")}if(2&e){const t=n.oxw();n.xp6(9),n.Q6J("ngModel",t.beansFilter),n.xp6(9),n.Q6J("ascending",t.beansAscending),n.xp6(18),n.wJu(t.beans),n.xp6(4),n.wJu(t.propertySources)}}let y=(()=>{class e{constructor(t){this.configurationService=t,this.beans=[],this.beansFilter="",this.beansAscending=!0,this.propertySources=[]}ngOnInit(){this.configurationService.getBeans().subscribe(t=>{this.allBeans=t,this.filterAndSortBeans()}),this.configurationService.getPropertySources().subscribe(t=>this.propertySources=t)}filterAndSortBeans(){const t=this.beansAscending?-1:1,i=this.beansAscending?1:-1;this.beans=this.allBeans.filter(o=>!this.beansFilter||o.prefix.toLowerCase().includes(this.beansFilter.toLowerCase())).sort((o,s)=>o.prefix<s.prefix?t:i)}static#n=this.\u0275fac=function(i){return new(i||e)(n.Y36(h))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["jhi-configuration"]],standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[["id","configuration-page-heading","jhiTranslate","configuration.title","data-cy","configurationPageHeading"],["jhiTranslate","configuration.filter"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["id","spring-configuration"],["aria-describedby","spring-configuration",1,"table","table-striped","table-bordered","table-responsive","d-table"],["jhiSort","","predicate","prefix",3,"ascending","ascendingChange","sortChange"],["jhiSortBy","prefix","scope","col",1,"w-40"],["jhiTranslate","configuration.table.prefix"],["icon","sort"],["scope","col",1,"w-60"],["jhiTranslate","configuration.table.properties"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[1,"float-end","bg-secondary","break"],[3,"id"],[1,"table","table-sm","table-striped","table-bordered","table-responsive","d-table"],["scope","col",1,"w-40"],[1,"break"]],template:function(i,o){1&i&&n.YNc(0,x,43,2),2&i&&n.um2(0,o.allBeans?0:-1)},dependencies:[d.Z,C.BN,T.Z,p.Ts,p.Nd,u.u5,u.Fj,u.JJ,u.On,_.Z,f.Z],encapsulation:2})}return e})()}}]);