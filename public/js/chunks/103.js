(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{ggRD:function(t,e,r){"use strict";r.r(e),r.d(e,"getBlueprint",(function(){return i}));var n=r("nUVr"),s={data:function(){return{placements:[{label:"Body",value:"body"},{label:"Sidebar",value:"sidebar"}]}},props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},a=r("KHd+");function i(t,e){axios.get("/api/blueprints/"+t).then((function(t){e(null,t.data.data)})).catch((function(t){e(new Error("The requested blueprint could not be found"))}))}var o={auth:function(){return{permission:"blueprints.update"}},head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,resource:null,form:null}},components:{"shared-form":Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form-container",[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},["sm"!=t.$mq?r("ui-button",{attrs:{to:{name:"blueprints"},variant:"secondary"}},[t._v("Go Back")]):t._e(),t._v(" "),r("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),r("portal",{attrs:{to:"sidebar-right"}},[r("sidebar",{attrs:{id:"blueprint-sidebar"}},[t.resource?r("status-card",{attrs:{entry:t.resource,id:"blueprint_panel_status_card",tabindex:"-1"}}):t._e()],1)],1),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("ui-title-group",{attrs:{name:"name",readonly:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("blueprint",[r("blueprint-area",{attrs:{placements:t.placements,area:"body",title:"Body"},model:{value:t.form.sections,callback:function(e){t.$set(t.form,"sections",e)},expression:"form.sections"}}),t._v(" "),r("blueprint-area",{staticClass:"blueprint__col--sidebar",attrs:{placements:t.placements,area:"sidebar",title:"Sidebar"},model:{value:t.form.sections,callback:function(e){t.$set(t.form,"sections",e)},expression:"form.sections"}})],1)],1)])],1)}),[],!1,null,null,null).exports},methods:{submit:function(){var t=this;this.form.patch("/api/blueprints/".concat(this.resource.id)).then((function(){axios.post("/api/blueprints/".concat(t.resource.id,"/sections"),{sections:t.form.sections}).then((function(){toast("Blueprint successfully updated","success"),t.$router.push("/blueprints")})).catch((function(t){toast(t.message,"failed")}))})).catch((function(t){toast(t.response.data.message,"failed")}))}},beforeRouteEnter:function(t,e,r){i(t.params.blueprint,(function(t,e){r(t?function(e){e.$router.push("/blueprints"),toast(t.toString(),"danger")}:function(t){t.resource=e,t.form=new n.a({name:e.name,sections:e.sections},!0),t.$nextTick((function(){t.$emit("updateHead")}))})}))}},u=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"list"}},[this._v("Edit Blueprint")])],1),this._v(" "),this.form?e("shared-form",{attrs:{form:this.form,resource:this.resource}}):this._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);