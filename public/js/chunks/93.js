(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"y+Hd":function(t,e,s){"use strict";s.r(e);var r=s("nUVr"),a={name:"login",head:{title:function(){return{inner:"Log In"}}},data:function(){return{form:new r.a({email:"",password:""})}},methods:{submit:function(){var t=this;this.form.post("/login").then((function(e){t.$route.query.redirect?location.href=t.$route.query.redirect:location.href="/"+config.path})).catch((function(t){}))}}},o=s("KHd+"),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-200 mx-auto h-full flex flex-1 flex-col items-center justify-center",staticStyle:{transition:"0.1s"}},[s("div",{staticClass:"w-full max-w-xs",attrs:{id:"login-form"}},[t._m(0),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[t._m(1),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("ui-input-group",{attrs:{name:"email",label:"E-mail",autocomplete:"off","has-error":t.form.errors.has("email"),"error-message":t.form.errors.get("email"),autofocus:"",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("ui-input-group",{attrs:{name:"password",type:"password",label:"Password",autocomplete:"off","has-error":t.form.errors.has("password"),"error-message":t.form.errors.get("password"),autofocus:"",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("ui-button",{staticClass:"w-full",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Login")])],1)])])]),t._v(" "),s("footer",{staticClass:"p-6 text-xs text-gray-600 flex flex-col items-center justify-center leading-loose md:leading-none"},[s("span",[t._v("Built with "),s("fa-icon",{staticClass:"text-danger-200 mx-1",attrs:{icon:["fas","heart"]}}),t._v(" + "),s("fa-icon",{staticClass:"text-gray-600 mx-1",attrs:{icon:["fas","coffee"]}}),t._v(" by the efelle team")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center relative mb-10"},[e("img",{attrs:{src:"/vendor/fusion/img/illustrations/login.svg",alt:"Illustration"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center leading-none mb-6"},[e("span",{staticClass:"mb-3 text-gray-600 text-sm font-bold "},[this._v("Welcome to")]),this._v(" "),e("span",{staticClass:"font-bold text-xxl"},[this._v("FusionCMS")])])}],!1,null,null,null);e.default=i.exports}}]);