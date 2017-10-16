webpackJsonp([0],{"/caw":function(t,e,s){"use strict";var n=s("vnjs");e.a={name:"Controls",data:function(){return{initLevel:10,goalLevel:20,useBlessingScrollLevel:null,useMarbleLevel:null,results:[]}},props:{},computed:{tryCount:function(){return this.results.length},normalQuantityTotal:function(){return this.results.map(function(t){return t.normalQuantity}).reduce(function(t,e){return t+e},0)},blessingQuantityTotal:function(){return this.results.map(function(t){return t.blessingQuantity}).reduce(function(t,e){return t+e},0)},marbleQuantityTotal:function(){return this.results.map(function(t){return t.marbleQuantity}).reduce(function(t,e){return t+e},0)}},methods:{execute:function(){var t=this,e=parseInt(this.initLevel,10);this.results=[];!function s(){if(!(e>=t.goalLevel)){var a=t.isUsingBlessingScroll(e),l=t.isUsingMarble(e),r=a?0:Object(n.a)(e).scrollQuantity,i=a?Object(n.a)(e).scrollQuantity:0,o=l?Object(n.a)(e).marbleQuantity:0;e=t.challenge(e,a,l),t.results.push({level:e,blessing:a,marble:l,normalQuantity:r,blessingQuantity:i,marbleQuantity:o}),setTimeout(s,32)}}()},challenge:function(t,e,s){if(this.isSuccess(t)){return t+(e?this.blessingScrollUp():1)}return 10===t||20===t||s?t:t-1},isSuccess:function(t){return Math.random()<Object(n.a)(t).probability},blessingScrollUp:function(){return Math.round(10*Math.random())%3+1},isUsingBlessingScroll:function(t){return!!this.useBlessingScrollLevel&&t>=this.useBlessingScrollLevel},isUsingMarble:function(t){return!!this.useMarbleLevel&&t>=this.useMarbleLevel}}}},"3/E+":function(t,e,s){"use strict";function n(t){s("K2PG")}var a=s("/caw"),l=s("q0Ne"),r=s("VU/8"),i=n,o=r(a.a,l.a,!1,i,"data-v-0eb3ca7e",null);e.a=o.exports},C31i:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"information"},[s("h2",[t._v("参考確率")]),s("table",{staticClass:"table"},[t._m(0),s("tbody",{staticClass:"table-body"},t._l(t.masterData,function(e){return s("tr",{staticClass:"table-tr"},[s("td",{staticClass:"table-td",domProps:{textContent:t._s(e.level)}}),s("td",{staticClass:"table-td",domProps:{textContent:t._s(t.percentFormat(e.probability))}}),s("td",{staticClass:"table-td",domProps:{textContent:t._s(t.numberWithDelimiter(e.adenaQuantity))}}),s("td",{staticClass:"table-td",domProps:{textContent:t._s(e.scrollQuantity)}}),s("td",{staticClass:"table-td",domProps:{textContent:t._s(e.marbleQuantity)}})])}))])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"table-head"},[s("tr",{staticClass:"table-tr"},[s("th",{staticClass:"table-th"},[t._v("強化値")]),s("th",{staticClass:"table-th"},[t._v("確率")]),s("th",{staticClass:"table-th"},[t._v("アデナ")]),s("th",{staticClass:"table-th"},[t._v("スクロール数")]),s("th",{staticClass:"table-th"},[t._v("マーブル数")])])])}],l={render:n,staticRenderFns:a};e.a=l},K2PG:function(t,e){},M93x:function(t,e,s){"use strict";function n(t){s("QXqv")}var a=s("xJD8"),l=s("WrCb"),r=s("VU/8"),i=n,o=r(a.a,l.a,!1,i,null,null);e.a=o.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("M93x");n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:a.a}})},Oh4D:function(t,e,s){"use strict";var n=s("vnjs");e.a={name:"Information",data:function(){return{masterData:n.b}},methods:{percentFormat:function(t){return 100*t+"%"},numberWithDelimiter:function(t){return t.toLocaleString()}}}},QXqv:function(t,e){},WBYr:function(t,e,s){"use strict";function n(t){s("mvIB")}var a=s("Oh4D"),l=s("C31i"),r=s("VU/8"),i=n,o=r(a.a,l.a,!1,i,"data-v-6d7b0c71",null);e.a=o.exports},WrCb:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Controls"),t._v(" "),s("Information")],1)},a=[],l={render:n,staticRenderFns:a};e.a=l},mvIB:function(t,e){},q0Ne:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"controls"}},[s("h1",{staticClass:"section_title"},[t._v("地獄の大強化")]),s("p",{staticClass:"notice"},[t._v("雑に作った")]),s("div",{staticClass:"control"},[s("form",{staticClass:"form",attrs:{action:"#"}},[s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-group-label"},[t._v("初期レベル")]),s("div",{staticClass:"control-group-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.initLevel,expression:"initLevel"}],staticClass:"input",attrs:{type:"number",min:"1",max:"29",required:"required"},domProps:{value:t.initLevel},on:{input:function(e){e.target.composing||(t.initLevel=e.target.value)}}})])]),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-group-label"},[t._v("目標レベル")]),s("div",{staticClass:"control-group-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.goalLevel,expression:"goalLevel"}],staticClass:"input",attrs:{type:"number",min:"2",max:"30",required:"required"},domProps:{value:t.goalLevel},on:{input:function(e){e.target.composing||(t.goalLevel=e.target.value)}}})])]),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-group-label"},[t._v("祝福を使う強化値")]),s("div",{staticClass:"control-group-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.useBlessingScrollLevel,expression:"useBlessingScrollLevel"}],staticClass:"input",attrs:{type:"number",min:"1",max:"30"},domProps:{value:t.useBlessingScrollLevel},on:{input:function(e){e.target.composing||(t.useBlessingScrollLevel=e.target.value)}}})])]),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-group-label"},[t._v("マーブルを使う強化値")]),s("div",{staticClass:"control-group-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.useMarbleLevel,expression:"useMarbleLevel"}],staticClass:"input",attrs:{type:"number",min:"1",max:"30"},domProps:{value:t.useMarbleLevel},on:{input:function(e){e.target.composing||(t.useMarbleLevel=e.target.value)}}})])]),s("div",{staticClass:"control-actions"},[s("button",{staticClass:"btn btn-execute",on:{click:t.execute}},[t._v("しみゅれーと！")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.results.length,expression:"results.length !== 0"}],staticClass:"result"},[s("div",{staticClass:"result-summary"},[s("p",{staticClass:"result-summary-item"},[t._v("強化までにかかった回数"),s("span",{staticClass:"count",domProps:{textContent:t._s(t.tryCount)}}),t._v("回")]),s("p",{staticClass:"result-summary-item"},[t._v("使ったスクロール数"),s("span",{staticClass:"count",domProps:{textContent:t._s(t.normalQuantityTotal)}}),t._v("枚")]),s("p",{staticClass:"result-summary-item"},[t._v("使った祝福スクロール数"),s("span",{staticClass:"count",domProps:{textContent:t._s(t.blessingQuantityTotal)}}),t._v("枚")]),s("p",{staticClass:"result-summary-item"},[t._v("使ったマーブル数"),s("span",{staticClass:"count",domProps:{textContent:t._s(t.marbleQuantityTotal)}}),t._v("個")])]),s("ul",{staticClass:"result-progress"},t._l(t.results,function(e){return s("li",{staticClass:"result-progress-item"},[s("span",{staticClass:"level",domProps:{textContent:t._s(e.level)}})])}))])])},a=[],l={render:n,staticRenderFns:a};e.a=l},vnjs:function(t,e,s){"use strict";function n(t){return a.filter(function(e){return e.level===t})[0]}s.d(e,"b",function(){return a}),e.a=n;var a=[[0,1,3400,1,0],[1,1,3400,1,0],[2,1,3400,1,0],[3,.9,3400,1,1],[4,.8,3400,1,1],[5,.7,16700,2,2],[6,.6,16700,2,2],[7,.5,16700,2,3],[8,.45,16700,2,3],[9,.45,16700,2,4],[10,.45,33400,3,4],[11,.45,33400,3,5],[12,.45,33400,3,5],[13,.4,33400,3,6],[14,.4,33400,3,6],[15,.4,33400,4,7],[16,.4,66700,4,7],[17,.4,66700,4,8],[18,.35,66700,4,8],[19,.35,66700,4,9],[20,.35,66700,5,9],[21,.35,66700,5,10],[22,.35,66700,5,10],[23,.3,66700,5,11],[24,.3,66700,5,11],[25,.3,66700,6,12],[26,.3,1e5,6,12],[27,.3,1e5,6,13],[28,.25,1e5,6,13],[29,.25,1e5,6,14]].map(function(t){return{level:t[0],probability:t[1],adenaQuantity:t[2],scrollQuantity:t[3],marbleQuantity:t[4]}})},xJD8:function(t,e,s){"use strict";var n=s("WBYr"),a=s("3/E+");e.a={name:"app",components:{Information:n.a,Controls:a.a}}}},["NHnr"]);
//# sourceMappingURL=app.8c608a1aac0834ae3d0d.js.map