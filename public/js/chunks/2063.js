(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[2063],{3450:function(e){e.exports=function(){var e=[],r=[],t={},a={},o={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function s(e,r){return e===r?r:e===e.toLowerCase()?r.toLowerCase():e===e.toUpperCase()?r.toUpperCase():e[0]===e[0].toUpperCase()?r.charAt(0).toUpperCase()+r.substr(1).toLowerCase():r.toLowerCase()}function n(e,r){return e.replace(/\$(\d{1,2})/g,(function(e,t){return r[t]||""}))}function l(e,r){return e.replace(r[0],(function(t,a){var o=n(r[1],arguments);return s(""===t?e[a-1]:t,o)}))}function m(e,r,a){if(!e.length||t.hasOwnProperty(e))return r;for(var o=a.length;o--;){var i=a[o];if(i[0].test(r))return l(r,i)}return r}function u(e,r,t){return function(a){var o=a.toLowerCase();return r.hasOwnProperty(o)?s(a,o):e.hasOwnProperty(o)?s(a,e[o]):m(o,a,t)}}function c(e,r,t,a){return function(a){var o=a.toLowerCase();return!!r.hasOwnProperty(o)||!e.hasOwnProperty(o)&&m(o,o,t)===o}}function d(e,r,t){return(t?r+" ":"")+(1===r?d.singular(e):d.plural(e))}return d.plural=u(o,a,e),d.isPlural=c(o,a,e),d.singular=u(a,o,r),d.isSingular=c(a,o,r),d.addPluralRule=function(r,t){e.push([i(r),t])},d.addSingularRule=function(e,t){r.push([i(e),t])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},d.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),o[e]=r,a[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},2063:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var a=t(6072);const o={auth:function(){return{permission:"matrices.create"}},head:{title:function(){return{inner:"Create a Matrix"}}},data:function(){return{matrices:[],form:new a.Z({name:"",parent_id:0,handle:"",description:"",type:"collection",sections:[],sidebar:!0,quicklink:!0,icon:"",show_name_field:!0,name_label:"",name_format:"",route:"",template:"",order_by:"name",order_direction:!0,status:!0},!0)}},components:{"shared-form":t(4263).Z},methods:{submit:function(){var e=this;this.form.post("/api/matrices").then((function(r){axios.post("/api/blueprints/".concat(r.data.blueprint.id,"/sections"),{sections:e.form.sections}).then((function(r){e.$store.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully created","success"),e.$router.push("/matrices")})).catch((function(e){toast(e.message,"failed")}))})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,r,t){axios.all([axios.get("/api/matrices")]).then(axios.spread((function(e){t((function(r){r.matrices=e.data.data}))})))}};const i=(0,t(1900).Z)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"matrix-page"},[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"layer-group"}},[e._v("Create Matrix")])],1),e._v(" "),t("shared-form",{attrs:{form:e.form,submit:e.submit,matrices:e.matrices}})],1)}),[],!1,null,null,null).exports},4263:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var a=t(3450),o=t.n(a);const i={data:function(){return{placements:[{label:"Body",value:"body"},{label:"Sidebar",value:"sidebar"}]}},props:{id:{type:Number,required:!1,default:0},form:{type:Object,required:!0},matrix:{type:Object,required:!1},submit:{required:!0},matrices:{required:!0}},computed:{singularReference:function(){return o().singular(this.form.name)},pluralReference:function(){return o()(this.form.name)},isCollection:function(){return"collection"==this.form.type},orderByOptions:function(){var e=[{label:"ID",value:"id"},{label:"Name",value:"name"},{label:"Slug",value:"slug"},{label:"Publish Date",value:"publish_at"},{label:"Created",value:"created_at"},{label:"Last Update",value:"updated_at"}];return _.each(this.form.sections,(function(r){_.each(r.fields,(function(r){null!==r.type.column&&e.push({label:r.name,value:r.handle})}))})),e},parentOptions:function(){var e=this,r=[];return _.each(this.matrices,(function(t){e.id!=t.id&&"single"==t.type&&r.push({label:t.name,value:t.id})})),r.unshift({label:"None",value:0}),r}},watch:{"form.type":function(e){"single"==e?(this.form.show_name_field=!0,this.$store.commit("fieldtypes/setStructure","singles")):this.$store.commit("fieldtypes/setStructure","collections")}},created:function(){this.$store.commit("fieldtypes/setStructure","collections")}};const s=(0,t(1900).Z)(i,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("portal",{attrs:{to:"actions"}},[t("div",{staticClass:"buttons"},["sm"!=e.$mq?t("ui-button",{attrs:{to:{name:"matrices"},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),t("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(r){return r.preventDefault(),e.submit(r)}}},[e._v("Save")])],1)]),e._v(" "),t("portal",{attrs:{to:"sidebar-right"}},[t("sidebar",{attrs:{id:"matrix-sidebar"}},[t("sidebar-section",{attrs:{id:"matrix_panel_status",tabindex:"-1"}},[t("ui-toggle",{attrs:{id:"matrix-status",name:"status",label:"Status",help:e.form.status?"Toggle to disable this matrix.":"Toggle to enable this matrix.","has-error":e.form.errors.has("status"),"error-message":e.form.errors.get("status")},model:{value:e.form.status,callback:function(r){e.$set(e.form,"status",r)},expression:"form.status"}})],1),e._v(" "),t("sidebar-section",{attrs:{id:"matrix_panel_appearance",title:"Appearance",description:"Choose where to show this matrix and how to represent it.",tabindex:"-1"}},[t("ui-toggle",{attrs:{id:"matrix-sidebar-show",name:"sidebar",label:"Show in Sidebar","has-error":e.form.errors.has("sidebar"),"error-message":e.form.errors.get("sidebar")},model:{value:e.form.sidebar,callback:function(r){e.$set(e.form,"sidebar",r)},expression:"form.sidebar"}}),e._v(" "),t("ui-toggle",{attrs:{id:"matrix-quicklink-show",name:"quicklink",label:"Show as Quicklink","has-error":e.form.errors.has("quicklink"),"error-message":e.form.errors.get("quicklink")},model:{value:e.form.quicklink,callback:function(r){e.$set(e.form,"quicklink",r)},expression:"form.quicklink"}}),e._v(" "),t("icon-picker",{attrs:{id:"matrix-icon",name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your matrix.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon")},model:{value:e.form.icon,callback:function(r){e.$set(e.form,"icon",r)},expression:"form.icon"}})],1),e._v(" "),e.matrix?t("status-card",{attrs:{entry:e.matrix,id:"matrix_panel_status_card",tabindex:"-1"}}):e._e()],1)],1),e._v(" "),t("section-card",{attrs:{id:"matrix_panel_general",title:"General Information",description:"General information about your collection and what it manages.",tabindex:"-1"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col w-full lg:w-1/2"},[t("ui-input-group",{attrs:{id:"matrix-name",name:"name",label:"Name",help:"What should this matrix be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),t("div",{staticClass:"col w-full lg:w-1/2"},[t("ui-slug-group",{attrs:{id:"matrix-handle",name:"handle",label:"Handle",help:"A developer-friendly identifier.",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(r){e.$set(e.form,"handle",r)},expression:"form.handle"}})],1)]),e._v(" "),t("ui-textarea-group",{attrs:{id:"matrix-description",name:"description",label:"Description",help:"Give a short description of what this matrix will manage and store.",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(r){e.$set(e.form,"description",r)},expression:"form.description"}}),e._v(" "),0==e.id?t("ui-select-group",{attrs:{id:"matrix-type",name:"type",label:"Type",help:"What type of matrix will this be?",options:[{label:"Collection",value:"collection"},{label:"Single",value:"single"}],"has-error":e.form.errors.has("type"),"error-message":e.form.errors.get("type")},model:{value:e.form.type,callback:function(r){e.$set(e.form,"type",r)},expression:"form.type"}}):e._e(),e._v(" "),e.isCollection?t("ui-select-group",{attrs:{id:"matrix-parent-id",name:"parent_id",label:"Parent Matrix",help:"Should this matrix belong to another?",options:e.parentOptions,"has-error":e.form.errors.has("parent_id"),"error-message":e.form.errors.get("parent_id")},model:{value:e.form.parent_id,callback:function(r){e.$set(e.form,"parent_id",r)},expression:"form.parent_id"}}):e._e()],1),e._v(" "),t("section-card",{attrs:{id:"matrix_panel_customizations",title:"Customizations",description:"Configure the various customizations options.",tabindex:"-1"}},[t("ui-input-group",{attrs:{id:"matrix-name-label",name:"name_label",label:"Name Label",placeholder:"Name",help:"If you'd like, you may customize the label used for your entry names.","has-error":e.form.errors.has("name_label"),"error-message":e.form.errors.get("name_label")},model:{value:e.form.name_label,callback:function(r){e.$set(e.form,"name_label",r)},expression:"form.name_label"}}),e._v(" "),e.isCollection?t("ui-toggle",{attrs:{id:"matrix-show-name-field",name:"show_name_field",label:"Show name field",help:e.form.show_name_field?"Include a name field on this matrix.":"Auto-generate a name using the format in the field below.","true-value":1,"false-value":0},model:{value:e.form.show_name_field,callback:function(r){e.$set(e.form,"show_name_field",r)},expression:"form.show_name_field"}}):e._e(),e._v(" "),e.form.show_name_field?e._e():t("ui-input-group",{attrs:{monospaced:"",id:"matrix-name-format",name:"name_format",label:"Name Format",help:"What format would you like your generated names and slugs to follow?",required:"","has-error":e.form.errors.has("name_format"),"error-message":e.form.errors.get("name_format")},model:{value:e.form.name_format,callback:function(r){e.$set(e.form,"name_format",r)},expression:"form.name_format"}})],1),e._v(" "),e.isCollection?t("section-card",{attrs:{id:"matrix_panel_sort",title:"Default Order",description:"Configure how entries within the collection will be ordered by default.",tabindex:"-1"}},[t("ui-select-group",{attrs:{id:"matrix-order_by",name:"order_by",label:"Order By Column",help:"Should this matrix belong to another?",options:e.orderByOptions,"has-error":e.form.errors.has("parent_id"),"error-message":e.form.errors.get("parent_id")},model:{value:e.form.order_by,callback:function(r){e.$set(e.form,"order_by",r)},expression:"form.order_by"}}),e._v(" "),t("ui-toggle",{attrs:{id:"matrix-order_direction",name:"order_direction",label:"Ascending Order?",help:"Should this collection be sorted in ascending order?","has-error":e.form.errors.has("order_direction"),"error-message":e.form.errors.get("order_direction")},model:{value:e.form.order_direction,callback:function(r){e.$set(e.form,"order_direction",r)},expression:"form.order_direction"}})],1):e._e(),e._v(" "),t("section-card",{attrs:{id:"matrix_panel_routing",title:"Routing",description:"Configure how entries within the collection will be accessed on the frontend.",tabindex:"-1"}},[t("ui-input-group",{attrs:{id:"matrix-route",name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(r){e.$set(e.form,"route",r)},expression:"form.route"}}),e._v(" "),t("ui-input-group",{attrs:{id:"matrix-template",name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(r){e.$set(e.form,"template",r)},expression:"form.template"}})],1),e._v(" "),t("section-card",{attrs:{id:"matrix_panel_blueprint",grid:!1,title:"Blueprint",description:"Create the content blueprint for this matrix by adding panel sections and fields to either the page body or page sidebar.",tabindex:"-1"}},[t("blueprint",[t("blueprint-area",{attrs:{placements:e.placements,area:"body",title:"Body"},model:{value:e.form.sections,callback:function(r){e.$set(e.form,"sections",r)},expression:"form.sections"}}),e._v(" "),t("blueprint-area",{staticClass:"blueprint__col--sidebar",attrs:{placements:e.placements,area:"sidebar",title:"Sidebar"},model:{value:e.form.sections,callback:function(r){e.$set(e.form,"sections",r)},expression:"form.sections"}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);