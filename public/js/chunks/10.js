(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MKK0:function(e,s,t){"use strict";t.r(s);var r=t("ke3Z"),i={head:{title:function(){return{inner:"Create a Role"}}},data:function(){return{form:new r.a({label:"",description:"",permissions:[]},!0)}},components:{"shared-form":t("OS/Q").a},methods:{submit:function(){var e=this;this.form.post("/api/roles").then((function(s){toast("Role successfully created","success"),e.$router.push("/roles")})).catch((function(e){toast(e.response.data.message,"failed")}))}},mounted:function(){this.$nextTick((function(){this.form.resetChangeListener()}))}},o=t("KHd+"),n=Object(o.a)(i,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"user-shield"}},[this._v("Create Role")])],1),this._v(" "),s("shared-form",{attrs:{form:this.form,submit:this.submit}})],1)}),[],!1,null,null,null);s.default=n.exports},"OS/Q":function(e,s,t){"use strict";var r={mixins:[t("udk0").default],props:{role:{type:Object,required:!1},form:{type:Object,required:!0},submit:{required:!0}},computed:{permissions:{get:function(){return this.form.permissions},set:function(e){this.form.permissions=e}}},methods:{}},i=t("KHd+"),o=Object(i.a)(r,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[e.role?t("p-definition-list",[t("p-definition",{attrs:{name:"Created At"}},[e._v("\n                    "+e._s(e.$moment(e.role.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),e._v(" "),t("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                    "+e._s(e.$moment(e.role.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):e._e()]},proxy:!0}])},[t("portal",{attrs:{to:"actions"}},[t("div",{staticClass:"buttons"},[t("router-link",{staticClass:"button",attrs:{to:{name:"roles"}}},[e._v("Go Back")]),e._v(" "),t("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(s){return s.preventDefault(),e.submit(s)}}},[e._v("Save")])],1)]),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card__body"},[t("p-title",{attrs:{name:"label",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("label"),"error-message":e.form.errors.get("label")},model:{value:e.form.label,callback:function(s){e.$set(e.form,"label",s)},expression:"form.label"}}),e._v(" "),t("p-textarea",{attrs:{name:"description",label:"Description",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description"),required:"",rows:2},model:{value:e.form.description,callback:function(s){e.$set(e.form,"description",s)},expression:"form.description"}})],1)]),e._v(" "),e.hasPermissions(e.form.name)?t("div",{staticClass:"card"},[t("div",{staticClass:"card__body"},[t("p-table",{key:"permissions_table",ref:"permissions",attrs:{id:"permissions",endpoint:"/datatable/permissions","sort-by":"name","no-actions":""},scopedSlots:e._u([{key:"name",fn:function(s){return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.permissions,expression:"permissions"}],attrs:{type:"checkbox",name:"permissions",id:s.record.name},domProps:{value:s.record.name,checked:Array.isArray(e.permissions)?e._i(e.permissions,s.record.name)>-1:e.permissions},on:{change:function(t){var r=e.permissions,i=t.target,o=!!i.checked;if(Array.isArray(r)){var n=s.record.name,a=e._i(r,n);i.checked?a<0&&(e.permissions=r.concat([n])):a>-1&&(e.permissions=r.slice(0,a).concat(r.slice(a+1)))}else e.permissions=o}}}),e._v(" "),t("code",[e._v(e._s(s.record.name))])]}},{key:"description",fn:function(s){return[t("span",{staticClass:"text-gray-800 text-sm"},[e._v(e._s(s.record.description))])]}}],null,!1,4248727052)})],1)]):e._e()],1)}),[],!1,null,null,null);s.a=o.exports},udk0:function(e,s,t){"use strict";t.r(s),s.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);