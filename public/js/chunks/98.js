(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{uT8l:function(e,t,l){"use strict";l.r(t);var n={name:"us-state-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:null}},computed:{states:function(){return Object.values(this.field.type.data)}},created:function(){var e=_.findIndex(this.states,(function(e){return 1==e.checked}));-1===e||this.states||this.$emit("input",this.states[e].value)}},i=l("KHd+"),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("ui-select-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,value:e.value,options:e.states,placeholder:"Select a state...",filterable:e.field.settings.filterable||!1},on:{input:function(t){return e.$emit("input",t)}}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);