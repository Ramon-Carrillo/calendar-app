(function(e){function t(t){for(var a,r,d=t[0],l=t[1],o=t[2],u=0,v=[];u<d.length;u++)r=d[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(v.length)v.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,d=1;d<n.length;d++){var l=n[d];0!==i[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/calendar-app/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var o=0;o<d.length;o++)t(d[o]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e4d":function(e,t,n){},"14d0":function(e,t,n){},"177d":function(e,t,n){"use strict";n("a73a")},"239f":function(e,t,n){},"4ad0":function(e,t,n){"use strict";n("239f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=Object(a["p"])("data-v-73317a20");Object(a["i"])("data-v-73317a20");var c={id:"app"};Object(a["h"])();var r=i((function(e,t,n,i,r,d){var l=Object(a["l"])("CalendarWeek"),o=Object(a["l"])("CalendarEntry");return Object(a["g"])(),Object(a["c"])("div",c,[Object(a["f"])(l),Object(a["f"])(o)])})),d=Object(a["p"])("data-v-4bc2e856");Object(a["i"])("data-v-4bc2e856");var l={id:"calendar-week",class:"container"},o={class:"columns is-mobile"};Object(a["h"])();var s=d((function(e,t,n,i,c,r){var d=Object(a["l"])("CalendarDay");return Object(a["g"])(),Object(a["c"])("div",l,[Object(a["f"])("div",o,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(c.sharedState.data,(function(e){return Object(a["g"])(),Object(a["c"])(d,{key:e.id,day:e},null,8,["day"])})),128))])])})),u=(n("7db0"),n("c740"),n("d81d"),n("a434"),[{id:1,abbvTitle:"Mon",fullTitle:"Monday",events:[{details:"Get Groceries",edit:!1},{details:"Carpool",edit:!1}],active:!0},{id:2,abbvTitle:"Tue",fullTitle:"Tuesday",events:[{details:"Yoga/Gym",edit:!1}],active:!1},{id:3,abbvTitle:"Wed",fullTitle:"Wednesday",events:[{details:"Work social",edit:!1}],active:!1},{id:4,abbvTitle:"Thu",fullTitle:"Thursday",events:[],active:!1},{id:5,abbvTitle:"Fri",fullTitle:"Friday",events:[{details:"Friday dinner/drinks",edit:!1}],active:!1},{id:6,abbvTitle:"Sat",fullTitle:"Saturday",events:[{details:"Chill with the parents",edit:!1}],active:!1},{id:7,abbvTitle:"Sun",fullTitle:"Sunday",events:[{details:"Netflix/Chill",edit:!1}],active:!1}]),v={state:{data:Object(a["j"])(u)},getActiveDay:function(){return this.state.data.find((function(e){return e.active}))},setActiveDay:function(e){this.state.data.map((function(t){t.id===e?t.active=!0:t.active=!1}))},submitEvent:function(e){var t=this.getActiveDay();t.events.push({details:e,edit:!1})},editEvent:function(e,t){this.resetEditOfAllEvents();var n=this.getEventObj(e,t);n.edit=!0},updateEvent:function(e,t,n){var a=this.getEventObj(e,t);a.details=n,a.edit=!1},deleteEvent:function(e,t){var n=this.state.data.find((function(t){return t.id===e})),a=n.events.findIndex((function(e){return e.details===t}));n.events.splice(a,1)},resetEditOfAllEvents:function(){this.state.data.map((function(e){e.events.map((function(e){e.edit=!1}))}))},getEventObj:function(e,t){var n=this.state.data.find((function(t){return t.id===e}));return n.events.find((function(e){return e.details===t}))}},f=Object(a["p"])("data-v-abfca1fe");Object(a["i"])("data-v-abfca1fe");var b={class:"day-banner has-text-white has-text-centered"},p={class:"day-details"},O={class:"day-number"};Object(a["h"])();var j=f((function(e,t,n,i,c,r){var d=Object(a["l"])("CalendarEvent");return Object(a["g"])(),Object(a["c"])("div",{class:"day column",onClick:t[1]||(t[1]=function(e){return r.setActiveDay(n.day.id)})},[Object(a["f"])("div",b,Object(a["m"])(n.day.abbvTitle),1),Object(a["f"])("div",p,[Object(a["f"])("div",O,Object(a["m"])(n.day.id),1),(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(n.day.events,(function(e,t){return Object(a["g"])(),Object(a["c"])(d,{key:t,event:e,day:n.day},null,8,["event","day"])})),128))])])})),y=Object(a["p"])("data-v-294bdc11");Object(a["i"])("data-v-294bdc11");var h={key:0},m={class:"has-text-centered details"},E={class:"has-text-centered icons"},g={key:1},k={class:"has-text-centered icons"};Object(a["h"])();var C=y((function(e,t,n,i,c,r){return Object(a["g"])(),Object(a["c"])("div",{class:"day-event",style:r.getEventBackgroundColor},[n.event.edit?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("div",h,[Object(a["f"])("span",m,Object(a["m"])(n.event.details),1),Object(a["f"])("div",E,[Object(a["f"])("i",{class:"fa fa-pencil-square edit-icon",onClick:t[1]||(t[1]=function(e){return r.editEvent(n.day.id,n.event.details)})}),Object(a["f"])("i",{class:"fa fa-trash-o delete-icon",onClick:t[2]||(t[2]=function(e){return r.deleteEvent(n.day.id,n.event.details)})})])])),n.event.edit?(Object(a["g"])(),Object(a["c"])("div",g,[Object(a["o"])(Object(a["f"])("input",{type:"text",placeholder:n.event.details,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.newEventDetails=e})},null,8,["placeholder"]),[[a["n"],c.newEventDetails]]),Object(a["f"])("div",k,[Object(a["f"])("i",{class:"fa fa-check",onClick:t[4]||(t[4]=function(e){return r.updateEvent(n.day.id,n.event.details,c.newEventDetails)})}," >")])])):Object(a["d"])("",!0)],4)})),T={name:"CalendarEvent",props:["event","day"],data:function(){return{newEventDetails:""}},computed:{getEventBackgroundColor:function(){var e=["#FF9999","#85D6FF","#99FF99"],t=e[Math.floor(Math.random()*e.length)];return"background-color: ".concat(t)}},methods:{editEvent:function(e,t){v.editEvent(e,t)},updateEvent:function(e,t,n){""===n&&(n=t),v.updateEvent(e,t,n),this.newEventDetails=""},deleteEvent:function(e,t){v.deleteEvent(e,t)}}};n("baae");T.render=C,T.__scopeId="data-v-294bdc11";var w=T,D={name:"CalendarDay",props:["day"],methods:{setActiveDay:function(e){v.setActiveDay(e)}},components:{CalendarEvent:w}};n("4ad0");D.render=j,D.__scopeId="data-v-abfca1fe";var x=D,_={name:"CalendarWeek",data:function(){return{sharedState:v.state}},components:{CalendarDay:x}};n("674c");_.render=s,_.__scopeId="data-v-4bc2e856";var A=_,S=Object(a["p"])("data-v-dd2d55a4");Object(a["i"])("data-v-dd2d55a4");var F={id:"calendar-entry"},M={class:"calendar-entry-note"},P={class:"calendar-entry-day"},I=Object(a["e"])(" Day of event: "),W={class:"bold"},G={key:0,style:{color:"red","font-size":"13px"}};Object(a["h"])();var q=S((function(e,t,n,i,c,r){return Object(a["g"])(),Object(a["c"])("div",F,[Object(a["f"])("div",M,[Object(a["o"])(Object(a["f"])("input",{type:"text",placeholder:"New Event","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.inputEntry=e}),required:""},null,512),[[a["n"],c.inputEntry]]),Object(a["f"])("p",P,[I,Object(a["f"])("span",W,Object(a["m"])(r.titleOfActiveDay),1)]),Object(a["f"])("a",{class:"button is-primary is-small is-outlined",onClick:t[2]||(t[2]=function(e){return r.submitEvent(c.inputEntry)})},"Submit")]),c.error?(Object(a["g"])(),Object(a["c"])("p",G," You must type something first! ")):Object(a["d"])("",!0)])})),B={name:"CalendarEntry",data:function(){return{inputEntry:"",error:!1}},computed:{titleOfActiveDay:function(){return v.getActiveDay().fullTitle}},methods:{submitEvent:function(e){if(""===e)return this.error=!0;v.submitEvent(e),this.inputEntry="",this.error=!1}}};n("ccd2");B.render=q,B.__scopeId="data-v-dd2d55a4";var J=B,N={name:"App",components:{CalendarWeek:A,CalendarEntry:J}};n("da21"),n("177d");N.render=r,N.__scopeId="data-v-73317a20";var U=N;Object(a["b"])(U).mount("#app")},"674c":function(e,t,n){"use strict";n("14d0")},a73a:function(e,t,n){},b093:function(e,t,n){},baae:function(e,t,n){"use strict";n("0e4d")},ccd2:function(e,t,n){"use strict";n("f19e")},da21:function(e,t,n){"use strict";n("b093")},f19e:function(e,t,n){}});
//# sourceMappingURL=app.76d6656e.js.map