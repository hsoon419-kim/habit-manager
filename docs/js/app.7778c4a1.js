(function(e){function t(t){for(var n,r,c=t[0],l=t[1],o=t[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/habit-manager/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[e._l(e.items,(function(t){return[a("v-list-item",{key:t.text,attrs:{link:"",to:t.link}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.text)+" ")])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("router-link",{staticStyle:{color:"white","text-decoration":"none"},attrs:{to:"/"}},[e._v("Habit management")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-information-outline")])],1)],1),a("v-main",[a("router-view")],1)],1)},i=[],r=a("5530"),c=a("2f62"),l={data:function(){return{drawer:null,items:[{icon:"mdi-playlist-check ",text:"Checklist",link:"/checklist"}]}},beforeMount:function(){this.loadData()},methods:Object(r["a"])({},Object(c["b"])({loadData:"LOAD_DATA"}))},o=l,u=a("2877"),d=a("6544"),f=a.n(d),m=a("7496"),p=a("40dc"),b=a("5bc1"),h=a("8336"),j=a("132d"),v=a("8860"),g=a("da13"),T=a("1800"),k=a("5d23"),R=a("f6c4"),_=a("f774"),x=a("2fa4"),y=a("2a7f"),w=Object(u["a"])(o,s,i,!1,null,null,null),E=w.exports;f()(w,{VApp:m["a"],VAppBar:p["a"],VAppBarNavIcon:b["a"],VBtn:h["a"],VIcon:j["a"],VList:v["a"],VListItem:g["a"],VListItemAction:T["a"],VListItemContent:k["a"],VListItemTitle:k["b"],VMain:R["a"],VNavigationDrawer:_["a"],VSpacer:x["a"],VToolbarTitle:y["a"]});var I=a("f309");n["a"].use(I["a"]);var V=new I["a"]({}),S=a("8c4f"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[a("date-picker",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[a("v-alert",{staticStyle:{width:"100%"},attrs:{border:"left","colored-border":"",type:e.sleepRecord.isRecorded?"success":"error",elevation:"2"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex justify-start align-center",attrs:{sm:"4",cols:"12"}},[e._v(" "+e._s(e.sleepInfo.name)+" ")]),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{sm:"4",cols:"12"}},[a("date-picker",{attrs:{label:e.sleepInfo.info.items.startDate},model:{value:e.sleepRecord.items.startDate,callback:function(t){e.$set(e.sleepRecord.items,"startDate",t)},expression:"sleepRecord.items.startDate"}})],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{sm:"4",cols:"12"}},[a("time-picker",{attrs:{label:e.sleepInfo.info.items.startTime},model:{value:e.sleepRecord.items.startTime,callback:function(t){e.$set(e.sleepRecord.items,"startTime",t)},expression:"sleepRecord.items.startTime"}})],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{"offset-sm":"4",sm:"4",cols:"12"}},[a("date-picker",{attrs:{label:e.sleepInfo.info.items.finishDate},model:{value:e.sleepRecord.items.finishDate,callback:function(t){e.$set(e.sleepRecord.items,"finishDate",t)},expression:"sleepRecord.items.finishDate"}})],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{sm:"4",cols:"12"}},[a("time-picker",{attrs:{label:e.sleepInfo.info.items.finishTime},model:{value:e.sleepRecord.items.finishTime,callback:function(t){e.$set(e.sleepRecord.items,"finishTime",t)},expression:"sleepRecord.items.finishTime"}})],1),a("v-col",{staticClass:"d-flex justify-end align-center",attrs:{"offset-sm":"11",sm:"1",offset:"8",cols:"4"}},[a("v-btn",{attrs:{icon:"",color:"blue"},on:{click:e.sleepSaveButtonClicked}},[a("v-icon",[e._v("mdi-floppy")])],1)],1)],1)],1)],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[a("v-alert",{staticStyle:{width:"100%"},attrs:{border:"left","colored-border":"",type:e.weightTrainingRecord.isRecorded?"success":"error",elevation:"2"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex justify-start align-center",attrs:{sm:"4",cols:"12"}},[e._v(" "+e._s(e.weightTrainingInfo.name)+" ")]),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{sm:"4",cols:"12"}},[a("value-input",{attrs:{label:e.weightTrainingInfo.info.items.squat},model:{value:e.weightTrainingRecord.items.squat,callback:function(t){e.$set(e.weightTrainingRecord.items,"squat",t)},expression:"weightTrainingRecord.items.squat"}})],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{sm:"4",cols:"12"}},[a("value-input",{attrs:{label:e.weightTrainingInfo.info.items.pushUp},model:{value:e.weightTrainingRecord.items.pushUp,callback:function(t){e.$set(e.weightTrainingRecord.items,"pushUp",t)},expression:"weightTrainingRecord.items.pushUp"}})],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{"offset-sm":"4",sm:"4",cols:"12"}},[a("value-input",{attrs:{label:e.weightTrainingInfo.info.items.plank},model:{value:e.weightTrainingRecord.items.plank,callback:function(t){e.$set(e.weightTrainingRecord.items,"plank",t)},expression:"weightTrainingRecord.items.plank"}})],1),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{sm:"4",cols:"12"}},[a("value-input",{attrs:{label:e.weightTrainingInfo.info.items.burpeeTest},model:{value:e.weightTrainingRecord.items.burpeeTest,callback:function(t){e.$set(e.weightTrainingRecord.items,"burpeeTest",t)},expression:"weightTrainingRecord.items.burpeeTest"}})],1),a("v-col",{staticClass:"d-flex justify-end align-center",attrs:{"offset-sm":"11",sm:"1",offset:"8",cols:"4"}},[a("v-btn",{attrs:{icon:"",color:"blue"},on:{click:e.weightTrainingSaveButtonClicked}},[a("v-icon",[e._v("mdi-floppy")])],1)],1)],1)],1)],1)],1)],1)},O=[],C=(a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:e.label,"prepend-icon":"mdi-calendar",readonly:""},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}},"v-text-field",s,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1)}),A=[],N={model:{prop:"date",event:"change"},props:{date:{type:String,required:!0},label:{type:String,required:!1,default:"Date"}},data:function(){return{menu:!1,dateValue:null}},watch:{date:function(e){this.dateValue=e},dateValue:function(e){this.$emit("change",e)}},beforeMount:function(){this.dateValue=this.date}},z=N,G=a("2e4b"),P=a("e449"),$=a("8654"),U=Object(u["a"])(z,C,A,!1,null,null,null),W=U.exports;f()(U,{VDatePicker:G["a"],VMenu:P["a"],VTextField:$["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.timeValue,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.timeValue=t},"update:return-value":function(t){e.timeValue=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:e.label,"prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}},"v-text-field",s,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.menu?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.menu.save(e.timeValue)}},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}}):e._e()],1)},L=[],M={model:{prop:"time",event:"change"},props:{time:{type:String,required:!0},label:{type:String,required:!1,default:"Time"}},data:function(){return{menu:!1,timeValue:null}},watch:{time:function(e){this.timeValue=e},timeValue:function(e){this.$emit("change",e)}},beforeMount:function(){this.timeValue=this.time}},F=M,B=a("c964"),H=Object(u["a"])(F,q,L,!1,null,null,null),J=H.exports;f()(H,{VMenu:P["a"],VTextField:$["a"],VTimePicker:B["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",{attrs:{label:e.label},model:{value:e.valueValue,callback:function(t){e.valueValue=t},expression:"valueValue"}})},K=[],Q={model:{prop:"value",event:"change"},props:{value:{required:!0},label:{type:String,required:!1,default:"Value"}},data:function(){return{valueValue:null}},watch:{value:function(e){this.valueValue=e},valueValue:function(e){this.$emit("change",e)}},beforeMount:function(){this.valueValue=this.value}},X=Q,Z=Object(u["a"])(X,Y,K,!1,null,null,null),ee=Z.exports;f()(Z,{VTextField:$["a"]});var te={components:{DatePicker:W,TimePicker:J,ValueInput:ee},data:function(){return{date:null}},computed:Object(r["a"])({},Object(c["c"])({dateFromStore:"GET_DATE",sleepInfo:"GET_SLEEP_INFO",sleepRecord:"GET_SLEEP_RECORD",weightTrainingInfo:"GET_WEIGHT_TRAINING_INFO",weightTrainingRecord:"GET_WEIGHT_TRAINING_RECORD"})),watch:{dateFromStore:function(e){this.date=e},date:function(e){this.setDate(e)}},beforeMount:function(){this.date=this.dateFromStore},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["d"])({setDate:"SET_DATE"})),Object(c["b"])({saveSleepRecord:"SAVE_SLEEP_RECORD",saveWeightTrainingRecord:"SAVE_WEIGHT_TRAINING_RECORD"})),{},{sleepSaveButtonClicked:function(){var e=new Date("".concat(this.sleepRecord.items.startDate," ").concat(this.sleepRecord.items.startTime)),t=new Date("".concat(this.sleepRecord.items.finishDate," ").concat(this.sleepRecord.items.finishTime)),a=Math.round((t-e)/36e5*100)/100;this.sleepRecord.isRecorded=!0,this.sleepRecord.extraItems.sleep=a,this.sleepRecord.extraItems.wakeUp=this.sleepRecord.items.finishTime,this.sleepRecord.goals[0]=a>6,this.sleepRecord.goals[1]=this.sleepRecord.extraItems.wakeUp<="06:30",this.saveSleepRecord(this.sleepRecord)},weightTrainingSaveButtonClicked:function(){this.weightTrainingRecord.isRecorded=!0,this.weightTrainingRecord.goals[0]=!0,this.saveWeightTrainingRecord(this.weightTrainingRecord)}})},ae=te,ne=(a("cf24"),a("0798")),se=a("62ad"),ie=a("a523"),re=a("0fd9"),ce=Object(u["a"])(ae,D,O,!1,null,"51ee8db2",null),le=ce.exports;f()(ce,{VAlert:ne["a"],VBtn:h["a"],VCol:se["a"],VContainer:ie["a"],VIcon:j["a"],VRow:re["a"]}),n["a"].use(S["a"]);var oe=new S["a"]({routes:[{path:"/",redirect:"/checklist"},{path:"/checklist",component:le}]}),ue=(a("7db0"),a("c740"),a("4160"),a("b0c0"),a("159b"),a("7f45")),de=a.n(ue);n["a"].use(c["a"]);var fe=new c["a"].Store({state:{date:de()().tz(de.a.tz.guess()).format("YYYY-MM-DD"),localStorageDataName:"habit-manager-data",default:[{name:"Sleep",info:{items:{startDate:"Start Date",startTime:"Start Time",finishDate:"Finish Date",finishTime:"Finish Time"},extraItems:{sleep:"Sleep",wakeUp:"Wake up"},goals:[{name:"Sleep more than 6 hours"},{name:"Wake up before 06:30"}]},records:[]},{name:"Weight Training",info:{items:{squat:"Squat",pushUp:"Push Up",plank:"Plank",burpeeTest:"Burpee Test"},itemUnits:{squat:"count",pushUp:"count",plank:"time",burpeeTest:"time"},goals:[{name:"Weight training everyday"}]},records:[]}]},getters:{GET_DATE:function(e){return e.date},GET_SLEEP_INFO:function(e){var t=e.habit.findIndex((function(e){return"Sleep"===e.name}));return{name:e.habit[t].name,info:e.habit[t].info}},GET_SLEEP_RECORD:function(e){var t=e.habit.findIndex((function(e){return"Sleep"===e.name})),a=e.habit[t].records.findIndex((function(t){return t.date===e.date}));return-1===a?{date:e.date,isRecorded:!1,items:{startDate:e.date,startTime:"00:00",finishDate:e.date,finishTime:"00:00"},extraItems:{sleep:"00:00",wakeUp:"00:00"},goals:[!1,!1]}:e.habit[t].records[a]},GET_WEIGHT_TRAINING_INFO:function(e){var t=e.habit.findIndex((function(e){return"Weight Training"===e.name}));return{name:e.habit[t].name,info:e.habit[t].info}},GET_WEIGHT_TRAINING_RECORD:function(e){var t=e.habit.findIndex((function(e){return"Weight Training"===e.name})),a=e.habit[t].records.findIndex((function(t){return t.date===e.date}));return-1===a?{date:e.date,isRecorded:!1,items:{squat:0,pushUp:0,plank:0,burpeeTest:0},goals:[!1]}:e.habit[t].records[a]}},mutations:{SET_DATE:function(e,t){e.date=t},SET_DATA:function(e,t){if(null===t)e.habit=e.default;else{var a=t;e.default.forEach((function(e){var n=t.find((function(t){return t.name==e.name}));void 0===n&&a.push(e)})),e.habit=a}},SET_SLEEP_RECORD:function(e,t){var a=e.habit.findIndex((function(e){return"Sleep"===e.name})),n=e.habit[a].records.findIndex((function(t){return t.date===e.date}));-1===n?e.habit[a].records.push(t):e.habit[a].records[n]=t},SET_WEIGHT_TRAINING_RECORD:function(e,t){var a=e.habit.findIndex((function(e){return"Weight Training"===e.name})),n=e.habit[a].records.findIndex((function(t){return t.date===e.date}));-1===n?e.habit[a].records.push(t):e.habit[a].records[n]=t}},actions:{LOAD_DATA:function(e){var t=me(e.state.localStorageDataName);e.commit("SET_DATA",t)},SAVE_SLEEP_RECORD:function(e,t){e.commit("SET_SLEEP_RECORD",t),pe(e.state.localStorageDataName,e.state.habit)},SAVE_WEIGHT_TRAINING_RECORD:function(e,t){e.commit("SET_WEIGHT_TRAINING_RECORD",t),pe(e.state.localStorageDataName,e.state.habit)}}}),me=function(e){return JSON.parse(localStorage.getItem(e))},pe=function(e,t){localStorage.setItem(e,JSON.stringify(t))};n["a"].config.productionTip=!1,new n["a"]({vuetify:V,router:oe,store:fe,render:function(e){return e(E)}}).$mount("#app")},6174:function(e,t,a){},cf24:function(e,t,a){"use strict";a("6174")}});
//# sourceMappingURL=app.7778c4a1.js.map