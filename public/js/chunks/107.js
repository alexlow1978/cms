(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{eoyn:function(t,e,a){"use strict";a.r(e);var s={head:{title:function(){return{inner:"Theme"}}},data:function(){return{themes:[],confirmModal:!1,uploadForm:null}},methods:{setAsActive:function(t){var e=this;axios.patch("/api/theme/".concat(t)).then((function(){_.each(e.themes,(function(e){e.active=e.namespace===t})),toast("Active theme has been set","success")}))},refresh:function(){axios.all([axios.get("/api/themes")]).then(axios.spread(function(t){this.themes=t.data.data,this.uploadForm=null,this.confirmModal=!1}.bind(this)))},submitUpload:function(){var t=this;axios.post("/api/themes",this.uploadForm).then((function(e){toast("Theme successfully uploaded!","success"),t.confirmModal=!1,t.$refs.upload.remove(),t.refresh()}))},confirmUpload:function(){this.confirmModal=!0},cancelUpload:function(){this.confirmModal=!1,this.$refs.upload.remove()},verifyUpload:function(t){var e=this;void 0!==t&&(this.uploadForm=new FormData,this.uploadForm.append("_method","POST"),this.uploadForm.append("file-upload",t),axios.post("/api/themes/verify",this.uploadForm).then((function(t){e.submitUpload()})).catch((function(t){"A Theme with matching name already exists."==t.response.data.errors["file-upload"][0]?e.confirmUpload():(toast(t.response.data.message,"failed"),e.$refs.upload.remove(),e.$refs.upload.setError(t.response.data.errors["file-upload"][0]))})))}},beforeRouteEnter:function(t,e,a){a((function(t){t.refresh()}))}},o=a("KHd+"),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"palette"}},[t._v("Theme")])],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("p-upload",{ref:"upload",attrs:{name:"file-upload",accept:"zip",multiple:!1},on:{input:t.verifyUpload}})],1)]),t._v(" "),a("div",{staticClass:"row"},t._l(t.themes,(function(e){return a("div",{key:e.name,staticClass:"col mb-6 md:w-1/2 xl:w-1/4"},[a("div",{staticClass:"card"},[a("img",{staticClass:"w-full rounded-t shadow",attrs:{src:e.preview,alt:e.name}}),t._v(" "),a("div",{staticClass:"card__body"},[a("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"text-gray-800 text-base"},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"w-full border-t-2 border-gray-200 pt-3"},[e.active?a("p",{staticClass:"text-center"},[t._v("Currently Active")]):a("p-button",{staticClass:"w-full",on:{click:function(a){return t.setAsActive(e.namespace)}}},[t._v("Set as active")])],1)])])])})),0),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button",attrs:{to:{name:"themes.settings"}}},[t._v("Go Back")])],1),t._v(" "),a("p-modal",{key:"confirm_modal",attrs:{name:"confirm",title:"Confirm override"},model:{value:t.confirmModal,callback:function(e){t.confirmModal=e},expression:"confirmModal"}},[a("p",[t._v("Are you sure you want to override this theme? The existing theme will be discarded.")]),t._v(" "),a("template",{slot:"footer"},[a("p-button",{staticClass:"button button--primary",attrs:{type:"button"},on:{click:t.submitUpload}},[t._v("Yes, please!")]),t._v(" "),a("p-button",{staticClass:"mr-3",attrs:{type:"button"},on:{click:t.cancelUpload}},[t._v("Leave and Discard Changes")])],1)],2)],1)}),[],!1,null,null,null);e.default=i.exports}}]);