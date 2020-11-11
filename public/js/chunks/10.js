(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Sde9:function(e,t,r){"use strict";r.r(t);var s=r("nUVr"),o={auth:function(){return{permission:"roles.create"}},head:{title:function(){return{inner:"Create a Role"}}},data:function(){return{form:new s.a({name:"",description:"",level:null,permissions:[]},!0)}},components:{"shared-form":r("d6w0").a},methods:{submit:function(){var e=this;this.form.post("/api/roles").then((function(t){toast("Role successfully created","success"),e.$router.push("/roles")})).catch((function(e){toast(e.response.data.message,"failed")}))}}},n=r("KHd+"),i=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"roles-page"},[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"user-shield"}},[this._v("Create Role")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form,submit:this.submit}})],1)}),[],!1,null,null,null);t.default=i.exports},d6w0:function(e,t,r){"use strict";var s={mixins:[r("udk0").default],props:{role:{type:Object,required:!1},form:{type:Object,required:!0},submit:{required:!0}},computed:{levelHelp:function(){return this.disableSetLevel?"You can not edit your own role's level.":"Enter a number between "+this.$user.role.level+" and 99."},disableSetLevel:function(){return!!this.role&&this.role.id===this.$user.role.id},permissions:{get:function(){return this.form.permissions},set:function(e){this.form.permissions=e}},isOwner:function(){return!!this.role&&(this.role.id&&1===this.role.id)}},methods:{}},o=r("KHd+"),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},["sm"!=e.$mq?r("ui-button",{key:"go-back-btn",attrs:{to:{name:"roles"},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),e.isOwner?e._e():r("ui-button",{key:"save-btn",attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),e.isOwner?r("ui-alert",{attrs:{icon:"info-circle",variant:"info"}},[r("p",[e._v("Owner role information and permissions are not editable.")])]):e._e(),e._v(" "),r("section-card",{attrs:{title:"General Information",description:"General information about this role and what it can manage."}},[r("ui-input-group",{attrs:{id:"roles-name",name:"name",label:"Name",description:"What should this role be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name"),readonly:e.isOwner},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("ui-textarea-group",{attrs:{id:"roles-description",name:"description",label:"Description",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description"),readonly:e.isOwner,rows:2},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("section-card",{attrs:{title:"Access Control",description:"Roles may manage other roles and their associated users with a level equal to or greater than their own. Owners have an ACL of 0."}},[r("ui-input-group",{attrs:{name:"level",label:"Level",disabled:e.disableSetLevel,help:e.levelHelp},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),e._v(" "),e.hasPermissions(e.form.name)?r("section-card",{attrs:{title:"Permissions",description:"Permissions allow you to restrict which areas of the controle panel this user can access."}},[r("ui-table",{key:"permissions-table",ref:"permissions",attrs:{id:"permissions-table",endpoint:"/datatable/permissions","sort-by":"name","no-actions":"","show-page-status":""},scopedSlots:e._u([{key:"name",fn:function(t){return[e.isOwner?r("code",[e._v(e._s(t.record.name))]):r("ui-checkbox",{attrs:{id:"roles-checkbox-"+t.record.name,name:"permissions","native-value":t.record.name},model:{value:e.permissions,callback:function(t){e.permissions=t},expression:"permissions"}},[r("code",[e._v(e._s(t.record.name))])])]}},{key:"description",fn:function(t){return[r("p",[e._v(e._s(t.record.description))])]}}],null,!1,839171431)})],1):e._e()],1)}),[],!1,null,null,null);t.a=n.exports},udk0:function(e,t,r){"use strict";r.r(t),t.default={methods:{isAssignable:function(e,t){return!_.includes(["guest"],e)&&this.$level(t)},isRemovable:function(e,t){return!_.includes(["owner","user","guest"],e)&&this.$level(t)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);