(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[7032],{3450:function(e){e.exports=function(){var e=[],t=[],a={},s={},r={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function n(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,s){var r=n(t[1],arguments);return o(""===a?e[s-1]:a,r)}))}function u(e,t,s){if(!e.length||a.hasOwnProperty(e))return t;for(var r=s.length;r--;){var i=s[r];if(i[0].test(t))return l(t,i)}return t}function c(e,t,a){return function(s){var r=s.toLowerCase();return t.hasOwnProperty(r)?o(s,r):e.hasOwnProperty(r)?o(s,e[r]):u(r,s,a)}}function m(e,t,a,s){return function(s){var r=s.toLowerCase();return!!t.hasOwnProperty(r)||!e.hasOwnProperty(r)&&u(r,r,a)===r}}function d(e,t,a){return(a?t+" ":"")+(1===t?d.singular(e):d.plural(e))}return d.plural=c(r,s,e),d.isPlural=m(r,s,e),d.singular=c(s,r,t),d.isSingular=m(s,r,t),d.addPluralRule=function(t,a){e.push([i(t),a])},d.addSingularRule=function(e,a){t.push([i(e),a])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},d.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),r[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},7032:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,getTaxonomy:()=>o});var s=a(3450),r=a.n(s),i=a(6072);function o(e,t){axios.get("/api/taxonomies/".concat(e)).then((function(e){var a=e.data.data,s={name:"",slug:"",status:!0};_.forEach(a.blueprint.sections,(function(e){_.forEach(e.fields,(function(e){s[e.handle]=e.default}))})),t(null,a,s)})).catch((function(e){t(new Error("The requested taxonomy could not be found"))}))}const n={auth:function(){return{permission:"terms.create"}},head:{title:function(){return{inner:"Create a "+_.startCase(this.singular)||0}}},data:function(){return{taxonomy:{},form:null,loading:!1}},components:{"shared-form":a(4141).Z},computed:{singular:function(){return this.taxonomy.name?r().singular(this.taxonomy.name):""}},methods:{submit:function(){var e=this;this.loading=!0,this.form.post("/api/taxonomies/".concat(this.taxonomy.id,"/terms")).then((function(t){toast("Term saved successfully","success"),e.$router.push("/taxonomies/".concat(e.taxonomy.id))})).catch((function(t){toast(t.response.data.message,"failed"),e.loading=!1}))}},beforeRouteEnter:function(e,t,a){o(e.params.taxonomy,(function(e,t,s){a(e?function(t){t.$router.push("/taxonomies/"+t.$router.currentRoute.params.taxonomy),toast(e.toString(),"danger")}:function(e){e.taxonomy=t,e.form=new i.Z(s,!0),e.$emit("updateHead")})}))}};const l=(0,a(1900).Z)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"term-page"},[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:e.taxonomy.icon}},[e._v("Create "+e._s(e.singular))])],1),e._v(" "),a("portal",{attrs:{to:"subtitle"}},[e._v(e._s(e.taxonomy.description))]),e._v(" "),e.form?a("shared-form",{attrs:{form:e.form,loading:e.loading,taxonomy:e.taxonomy}}):e._e()],1)}),[],!1,null,null,null).exports},4141:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const s={props:{taxonomy:{type:Object,required:!0},term:{required:!1},form:{type:Object,required:!0},loading:{type:Boolean,required:!1}},data:function(){return{editSlug:!1,slugValue:""}},computed:{sections:function(){var e=[],t=[];return this.taxonomy.blueprint&&(e=_.filter(this.taxonomy.blueprint.sections,(function(e){return"body"==e.placement})),t=_.filter(this.taxonomy.blueprint.sections,(function(e){return"sidebar"==e.placement}))),{body:e,sidebar:t}}},methods:{openEdit:function(){this.slugValue=this.form.slug,this.editSlug=!0,this.slugFocus()},closeEdit:function(){this.slugValue="",this.editSlug=!1,this.editBtnFocus()},saveSlug:function(){""===this.slugValue?this.slugValue=this.form.slug:this.form.slug=this.slugValue,this.closeEdit()},slugFocus:function(){var e=this;this.$nextTick((function(){e.$refs.slug.$el.focus()}))},editBtnFocus:function(){var e=this;this.$nextTick((function(){e.$refs.edit.$el.focus()}))}}};const r=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[e.taxonomy.id?a("ui-button",{attrs:{to:{name:"terms.index",params:{taxonomy:e.taxonomy.id}},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),a("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges||e.loading},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),a("section-card",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{title:"Loading..."}}),e._v(" "),a("portal",{attrs:{to:"sidebar-right"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"! loading"}]},[a("sidebar",{attrs:{id:"term-sidebar"}},[a("sidebar-section",{attrs:{id:"term_panel_status",tabindex:"-1"}},[a("ui-toggle",{attrs:{name:"status",label:"Status",help:e.form.status?"Toggle to disable this term.":"Toggle to enable this term.","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),e._v(" "),e._l(e.sections.sidebar,(function(t){return t.fields.length>0?a("sidebar-section",{key:t.handle,attrs:{id:"term_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return a(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,"has-error":e.form.errors.has(t.handle),"error-message":e.form.errors.get(t.handle)},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})})),1):e._e()})),e._v(" "),e.term?a("status-card",{attrs:{id:"term_panel_status_card",entry:e.term,tabindex:"-1"}}):e._e()],2)],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"! loading"}]},[a("ui-card",{attrs:{id:"term_panel_general",title:"General Information",description:"General information about your term and what it manages.",tabindex:"-1"}},[a("ui-card-body",[a("ui-title-group",{staticClass:"mb-0",attrs:{name:"name",label:"Name",autocomplete:"off",autofocus:"",required:"",readonly:e.editSlug,placeholder:"Name","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),e.form.slug?a("div",{staticClass:"entry-slug"},[e.editSlug?e._e():a("div",{staticClass:"entry-slug__current"},[a("span",{staticClass:"entry-slug__label"},[e._v("Slug:")]),e._v(" "),a("span",{staticClass:"entry-slug__value"},[e._v(e._s(e.form.slug))]),e._v(" "),a("ui-button",{ref:"edit",staticClass:"entry-slug__action",attrs:{size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.openEdit()}}},[e._v("Edit")])],1),e._v(" "),e.editSlug?a("div",{staticClass:"entry-slug__edit"},[e.editSlug?a("label",{staticClass:"entry-slug__label",attrs:{for:"edit-slug"}},[e._v("Slug:")]):e._e(),e._v(" "),a("ui-slug",{ref:"slug",staticClass:"field--xs",attrs:{id:"edit-slug",name:"edit_slug",monospaced:"",autocomplete:"off"},model:{value:e.slugValue,callback:function(t){e.slugValue=t},expression:"slugValue"}}),e._v(" "),a("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"primary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.saveSlug()}}},[e._v("Apply")]),e._v(" "),a("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"secondary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.closeEdit()}}},[e._v("Cancel")])],1):e._e()]):e._e(),e._v(" "),e.term?a("ui-slug",{attrs:{type:"hidden",name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",watch:e.form.name,"has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug")},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}):e._e()],1)],1),e._v(" "),e._l(e.sections.body,(function(t){return t.fields.length>0?a("section-card",{key:t.handle,attrs:{id:"term_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return a(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,errors:e.form.errors},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})})),1):e._e()}))],2)],1)}),[],!1,null,null,null).exports}}]);