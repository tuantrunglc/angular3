"use strict";(self.webpackChunkec=self.webpackChunkec||[]).push([[592],{7669:(u,h,e)=>{e.d(h,{Z:()=>C});var s=e(1385),r=e(9927),o=e(3642),d=e(4383),t=e(5779),n=e(2673);let C=(()=>{class a{constructor(i){this.sort=i,this.sortIcon=d.CmM,this.sortAscIcon=d.foy,this.sortDescIcon=d.u9C,this.destroy$=new s.x,i.predicateChange.pipe((0,r.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),i.ascendingChange.pipe((0,r.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let i=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(i=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=i.iconName,this.iconComponent.render()}}static#t=this.\u0275fac=function(c){return new(c||a)(n.Y36(t.Z,1))};static#e=this.\u0275dir=n.lG2({type:a,selectors:[["","jhiSortBy",""]],contentQueries:function(c,_,g){if(1&c&&n.Suo(g,o.BN,5),2&c){let p;n.iGM(p=n.CRH())&&(_.iconComponent=p.first)}},hostBindings:function(c,_){1&c&&n.NdJ("click",function(){return _.onClick()})},inputs:{jhiSortBy:"jhiSortBy"},standalone:!0})}return a})()},5779:(u,h,e)=>{e.d(h,{Z:()=>r});var s=e(2673);let r=(()=>{class o{constructor(){this.predicateChange=new s.vpe,this.ascendingChange=new s.vpe,this.sortChange=new s.vpe}get predicate(){return this._predicate}set predicate(t){this._predicate=t,this.predicateChange.emit(t)}get ascending(){return this._ascending}set ascending(t){this._ascending=t,this.ascendingChange.emit(t)}sort(t){this.ascending=t!==this.predicate||!this.ascending,this.predicate=t,this.predicateChange.emit(t),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275dir=s.lG2({type:o,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"},standalone:!0})}return o})()}}]);