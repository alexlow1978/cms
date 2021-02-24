(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[9618],{6625:(e,r,t)=>{var n,i=t(4155);r=e.exports=F,n="object"==typeof i&&i.env&&i.env.NODE_DEBUG&&/\bsemver\b/i.test(i.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var o=Number.MAX_SAFE_INTEGER||9007199254740991,s=r.re=[],a=r.src=[],u=0,c=u++;a[c]="0|[1-9]\\d*";var l=u++;a[l]="[0-9]+";var p=u++;a[p]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var h=u++;a[h]="("+a[c]+")\\.("+a[c]+")\\.("+a[c]+")";var f=u++;a[f]="("+a[l]+")\\.("+a[l]+")\\.("+a[l]+")";var v=u++;a[v]="(?:"+a[c]+"|"+a[p]+")";var m=u++;a[m]="(?:"+a[l]+"|"+a[p]+")";var g=u++;a[g]="(?:-("+a[v]+"(?:\\."+a[v]+")*))";var d=u++;a[d]="(?:-?("+a[m]+"(?:\\."+a[m]+")*))";var w=u++;a[w]="[0-9A-Za-z-]+";var y=u++;a[y]="(?:\\+("+a[w]+"(?:\\."+a[w]+")*))";var _=u++,b="v?"+a[h]+a[g]+"?"+a[y]+"?";a[_]="^"+b+"$";var E="[v=\\s]*"+a[f]+a[d]+"?"+a[y]+"?",j=u++;a[j]="^"+E+"$";var C=u++;a[C]="((?:<|>)?=?)";var k=u++;a[k]=a[l]+"|x|X|\\*";var $=u++;a[$]=a[c]+"|x|X|\\*";var x=u++;a[x]="[v=\\s]*("+a[$]+")(?:\\.("+a[$]+")(?:\\.("+a[$]+")(?:"+a[g]+")?"+a[y]+"?)?)?";var R=u++;a[R]="[v=\\s]*("+a[k]+")(?:\\.("+a[k]+")(?:\\.("+a[k]+")(?:"+a[d]+")?"+a[y]+"?)?)?";var S=u++;a[S]="^"+a[C]+"\\s*"+a[x]+"$";var P=u++;a[P]="^"+a[C]+"\\s*"+a[R]+"$";var T=u++;a[T]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var V=u++;a[V]="(?:~>?)";var I=u++;a[I]="(\\s*)"+a[V]+"\\s+",s[I]=new RegExp(a[I],"g");var M=u++;a[M]="^"+a[V]+a[x]+"$";var A=u++;a[A]="^"+a[V]+a[R]+"$";var N=u++;a[N]="(?:\\^)";var q=u++;a[q]="(\\s*)"+a[N]+"\\s+",s[q]=new RegExp(a[q],"g");var D=u++;a[D]="^"+a[N]+a[x]+"$";var U=u++;a[U]="^"+a[N]+a[R]+"$";var G=u++;a[G]="^"+a[C]+"\\s*("+E+")$|^$";var X=u++;a[X]="^"+a[C]+"\\s*("+b+")$|^$";var Y=u++;a[Y]="(\\s*)"+a[C]+"\\s*("+E+"|"+a[x]+")",s[Y]=new RegExp(a[Y],"g");var Z=u++;a[Z]="^\\s*("+a[x]+")\\s+-\\s+("+a[x]+")\\s*$";var z=u++;a[z]="^\\s*("+a[R]+")\\s+-\\s+("+a[R]+")\\s*$";var O=u++;a[O]="(<|>)?=?\\s*\\*";for(var B=0;B<35;B++)n(B,a[B]),s[B]||(s[B]=new RegExp(a[B]));function L(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof F)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(r.loose?s[j]:s[_]).test(e))return null;try{return new F(e,r)}catch(e){return null}}function F(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof F){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof F))return new F(e,r);n("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?s[j]:s[_]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<o)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}r.parse=L,r.valid=function(e,r){var t=L(e,r);return t?t.version:null},r.clean=function(e,r){var t=L(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null},r.SemVer=F,F.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},F.prototype.toString=function(){return this.version},F.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof F||(e=new F(e,this.options)),this.compareMain(e)||this.comparePre(e)},F.prototype.compareMain=function(e){return e instanceof F||(e=new F(e,this.options)),J(this.major,e.major)||J(this.minor,e.minor)||J(this.patch,e.patch)},F.prototype.comparePre=function(e){if(e instanceof F||(e=new F(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],i=e.prerelease[r];if(n("prerelease compare",r,t,i),void 0===t&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===t)return-1;if(t!==i)return J(t,i)}while(++r)},F.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new F(e,t).inc(r,n).version}catch(e){return null}},r.diff=function(e,r){if(ee(e,r))return null;var t=L(e),n=L(r),i="";if(t.prerelease.length||n.prerelease.length){i="pre";var o="prerelease"}for(var s in t)if(("major"===s||"minor"===s||"patch"===s)&&t[s]!==n[s])return i+s;return o},r.compareIdentifiers=J;var H=/^[0-9]+$/;function J(e,r){var t=H.test(e),n=H.test(r);return t&&n&&(e=+e,r=+r),e===r?0:t&&!n?-1:n&&!t?1:e<r?-1:1}function K(e,r,t){return new F(e,t).compare(new F(r,t))}function Q(e,r,t){return K(e,r,t)>0}function W(e,r,t){return K(e,r,t)<0}function ee(e,r,t){return 0===K(e,r,t)}function re(e,r,t){return 0!==K(e,r,t)}function te(e,r,t){return K(e,r,t)>=0}function ne(e,r,t){return K(e,r,t)<=0}function ie(e,r,t,n){switch(r){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e===t;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return ee(e,t,n);case"!=":return re(e,t,n);case">":return Q(e,t,n);case">=":return te(e,t,n);case"<":return W(e,t,n);case"<=":return ne(e,t,n);default:throw new TypeError("Invalid operator: "+r)}}function oe(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof oe){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof oe))return new oe(e,r);n("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===se?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}r.rcompareIdentifiers=function(e,r){return J(r,e)},r.major=function(e,r){return new F(e,r).major},r.minor=function(e,r){return new F(e,r).minor},r.patch=function(e,r){return new F(e,r).patch},r.compare=K,r.compareLoose=function(e,r){return K(e,r,!0)},r.rcompare=function(e,r,t){return K(r,e,t)},r.sort=function(e,t){return e.sort((function(e,n){return r.compare(e,n,t)}))},r.rsort=function(e,t){return e.sort((function(e,n){return r.rcompare(e,n,t)}))},r.gt=Q,r.lt=W,r.eq=ee,r.neq=re,r.gte=te,r.lte=ne,r.cmp=ie,r.Comparator=oe;var se={};function ae(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ae)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new ae(e.raw,r);if(e instanceof oe)return new ae(e.value,r);if(!(this instanceof ae))return new ae(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function ue(e){return!e||"x"===e.toLowerCase()||"*"===e}function ce(e,r,t,n,i,o,s,a,u,c,l,p,h){return((r=ue(t)?"":ue(n)?">="+t+".0.0":ue(i)?">="+t+"."+n+".0":">="+r)+" "+(a=ue(u)?"":ue(c)?"<"+(+u+1)+".0.0":ue(l)?"<"+u+"."+(+c+1)+".0":p?"<="+u+"."+c+"."+l+"-"+p:"<="+a)).trim()}function le(e,r,t){for(var i=0;i<e.length;i++)if(!e[i].test(r))return!1;if(r.prerelease.length&&!t.includePrerelease){for(i=0;i<e.length;i++)if(n(e[i].semver),e[i].semver!==se&&e[i].semver.prerelease.length>0){var o=e[i].semver;if(o.major===r.major&&o.minor===r.minor&&o.patch===r.patch)return!0}return!1}return!0}function pe(e,r,t){try{r=new ae(r,t)}catch(e){return!1}return r.test(e)}function he(e,r,t,n){var i,o,s,a,u;switch(e=new F(e,n),r=new ae(r,n),t){case">":i=Q,o=ne,s=W,a=">",u=">=";break;case"<":i=W,o=te,s=Q,a="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(pe(e,r,n))return!1;for(var c=0;c<r.set.length;++c){var l=r.set[c],p=null,h=null;if(l.forEach((function(e){e.semver===se&&(e=new oe(">=0.0.0")),p=p||e,h=h||e,i(e.semver,p.semver,n)?p=e:s(e.semver,h.semver,n)&&(h=e)})),p.operator===a||p.operator===u)return!1;if((!h.operator||h.operator===a)&&o(e,h.semver))return!1;if(h.operator===u&&s(e,h.semver))return!1}return!0}oe.prototype.parse=function(e){var r=this.options.loose?s[G]:s[X],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new F(t[2],this.options.loose):this.semver=se},oe.prototype.toString=function(){return this.value},oe.prototype.test=function(e){return n("Comparator.test",e,this.options.loose),this.semver===se||("string"==typeof e&&(e=new F(e,this.options)),ie(e,this.operator,this.semver,this.options))},oe.prototype.intersects=function(e,r){if(!(e instanceof oe))throw new TypeError("a Comparator is required");var t;if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return t=new ae(e.value,r),pe(this.value,t,r);if(""===e.operator)return t=new ae(this.value,r),pe(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=ie(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=ie(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||o&&s||a||u},r.Range=ae,ae.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},ae.prototype.toString=function(){return this.range},ae.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var t=r?s[z]:s[Z];e=e.replace(t,ce),n("hyphen replace",e),e=e.replace(s[Y],"$1$2$3"),n("comparator trim",e,s[Y]),e=(e=(e=e.replace(s[I],"$1~")).replace(s[q],"$1^")).split(/\s+/).join(" ");var i=r?s[G]:s[X],o=e.split(" ").map((function(e){return function(e,r){return n("comp",e,r),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){n("caret",e,r);var t=r.loose?s[U]:s[D];return e.replace(t,(function(r,t,i,o,s){var a;return n("caret",e,r,t,i,o,s),ue(t)?a="":ue(i)?a=">="+t+".0.0 <"+(+t+1)+".0.0":ue(o)?a="0"===t?">="+t+"."+i+".0 <"+t+"."+(+i+1)+".0":">="+t+"."+i+".0 <"+(+t+1)+".0.0":s?(n("replaceCaret pr",s),a="0"===t?"0"===i?">="+t+"."+i+"."+o+"-"+s+" <"+t+"."+i+"."+(+o+1):">="+t+"."+i+"."+o+"-"+s+" <"+t+"."+(+i+1)+".0":">="+t+"."+i+"."+o+"-"+s+" <"+(+t+1)+".0.0"):(n("no pr"),a="0"===t?"0"===i?">="+t+"."+i+"."+o+" <"+t+"."+i+"."+(+o+1):">="+t+"."+i+"."+o+" <"+t+"."+(+i+1)+".0":">="+t+"."+i+"."+o+" <"+(+t+1)+".0.0"),n("caret return",a),a}))}(e,r)})).join(" ")}(e,r),n("caret",e),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){var t=r.loose?s[A]:s[M];return e.replace(t,(function(r,t,i,o,s){var a;return n("tilde",e,r,t,i,o,s),ue(t)?a="":ue(i)?a=">="+t+".0.0 <"+(+t+1)+".0.0":ue(o)?a=">="+t+"."+i+".0 <"+t+"."+(+i+1)+".0":s?(n("replaceTilde pr",s),a=">="+t+"."+i+"."+o+"-"+s+" <"+t+"."+(+i+1)+".0"):a=">="+t+"."+i+"."+o+" <"+t+"."+(+i+1)+".0",n("tilde return",a),a}))}(e,r)})).join(" ")}(e,r),n("tildes",e),e=function(e,r){return n("replaceXRanges",e,r),e.split(/\s+/).map((function(e){return function(e,r){e=e.trim();var t=r.loose?s[P]:s[S];return e.replace(t,(function(r,t,i,o,s,a){n("xRange",e,r,t,i,o,s,a);var u=ue(i),c=u||ue(o),l=c||ue(s);return"="===t&&l&&(t=""),u?r=">"===t||"<"===t?"<0.0.0":"*":t&&l?(c&&(o=0),s=0,">"===t?(t=">=",c?(i=+i+1,o=0,s=0):(o=+o+1,s=0)):"<="===t&&(t="<",c?i=+i+1:o=+o+1),r=t+i+"."+o+"."+s):c?r=">="+i+".0.0 <"+(+i+1)+".0.0":l&&(r=">="+i+"."+o+".0 <"+i+"."+(+o+1)+".0"),n("xRange return",r),r}))}(e,r)})).join(" ")}(e,r),n("xrange",e),e=function(e,r){return n("replaceStars",e,r),e.trim().replace(s[O],"")}(e,r),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(o=o.filter((function(e){return!!e.match(i)}))),o=o.map((function(e){return new oe(e,this.options)}),this)},ae.prototype.intersects=function(e,r){if(!(e instanceof ae))throw new TypeError("a Range is required");return this.set.some((function(t){return t.every((function(t){return e.set.some((function(e){return e.every((function(e){return t.intersects(e,r)}))}))}))}))},r.toComparators=function(e,r){return new ae(e,r).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},ae.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new F(e,this.options));for(var r=0;r<this.set.length;r++)if(le(this.set[r],e,this.options))return!0;return!1},r.satisfies=pe,r.maxSatisfying=function(e,r,t){var n=null,i=null;try{var o=new ae(r,t)}catch(e){return null}return e.forEach((function(e){o.test(e)&&(n&&-1!==i.compare(e)||(i=new F(n=e,t)))})),n},r.minSatisfying=function(e,r,t){var n=null,i=null;try{var o=new ae(r,t)}catch(e){return null}return e.forEach((function(e){o.test(e)&&(n&&1!==i.compare(e)||(i=new F(n=e,t)))})),n},r.minVersion=function(e,r){e=new ae(e,r);var t=new F("0.0.0");if(e.test(t))return t;if(t=new F("0.0.0-0"),e.test(t))return t;t=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var r=new F(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":t&&!Q(t,r)||(t=r);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(t&&e.test(t))return t;return null},r.validRange=function(e,r){try{return new ae(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return he(e,r,"<",t)},r.gtr=function(e,r,t){return he(e,r,">",t)},r.outside=he,r.prerelease=function(e,r){var t=L(e,r);return t&&t.prerelease.length?t.prerelease:null},r.intersects=function(e,r,t){return e=new ae(e,t),r=new ae(r,t),e.intersects(r)},r.coerce=function(e){if(e instanceof F)return e;if("string"!=typeof e)return null;var r=e.match(s[T]);if(null==r)return null;return L(r[1]+"."+(r[2]||"0")+"."+(r[3]||"0"))}},9618:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,getModels:()=>o});var n=t(6625),i=t.n(n);function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;axios.all([axios.get("/api/updates?page=".concat(r))]).then(axios.spread((function(r){e(null,r.data.data,r.data.meta)}))).catch((function(r){e(new Error("The requested resource could not be found"))}))}const s={name:"updates",data:function(){return{version:!1,versions:[],pagination:[]}},methods:{newerVersionAvailable:function(e){return i().gt(_.trimStart(e,"v"),this.$store.state.fusion.version)},changePage:function(e){this.refresh(e)},upgrade:function(e){this.version=e},refresh:function(e){var r=this;o((function(e,t,n){e?toast(e.toString(),"danger"):(r.versions=t,r.pagination=n)}),e)}},beforeRouteEnter:function(e,r,t){o((function(e,r,n){t(e?function(r){return toast(e.toString(),"danger")}:function(e){e.versions=r,e.pagination=n})}))}};const a=(0,t(1900).Z)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"download"}},[e._v("Updates")])],1),e._v(" "),t("portal",{attrs:{to:"actions"}},[t("a",{staticClass:"button",attrs:{href:"https://beta.getfusioncms.com/changelog",target:"_blank"}},[e._v("Changelog")])]),e._v(" "),e._l(e.versions,(function(r,n){return t("div",{key:n,staticClass:"card"},[t("div",{staticClass:"card__header flex items-center justify-between"},[t("h3",{staticClass:"card__title"},[e._v("\n                "+e._s(r.title)+"\n\n                "),t("span",{staticClass:"text-xs block"},[e._v("\n                    Released "+e._s(e.$moment(r.date_published).format("MMM Do, YYYY"))+"\n                ")])]),e._v(" "),t("div",{staticClass:"flex items-center justify-start"},[e.newerVersionAvailable(r.title)?t("ui-button",{directives:[{name:"modal",rawName:"v-modal:updater",arg:"updater"}],on:{click:function(t){return e.upgrade(r)}}},[e._v("\n                    Upgrade to "+e._s(r.title)+"\n                ")]):e._e(),e._v(" "),r._isCurrent?t("ui-button",{attrs:{disabled:""}},[e._v("\n                    Current version\n                ")]):e._e(),e._v(" "),e._l(r.attachments,(function(e,r){return t("a",{key:"attachment-"+n+"-"+r,staticClass:"button button--icon ml-1",attrs:{href:e.url,title:e.mime_type}},[t("fa-icon",{staticClass:"icon",attrs:{icon:"download"}})],1)})),e._v(" "),t("a",{staticClass:"button button--icon ml-1",attrs:{href:"https://github.com/fusioncms/fusioncms/releases/tag/"+r.title,title:"View on Github",target:"_blank"}},[t("fa-icon",{staticClass:"icon",attrs:{icon:"code"}})],1)],2)]),e._v(" "),t("div",{staticClass:"card__body"},[t("p",[e._v(e._s(e.versions.content_text))]),e._v(" "),e._l(r._changelog,(function(r,n){return t("div",{key:n},e._l(r,(function(r,i){return t("div",{key:i,staticClass:"row"},[t("div",{staticClass:"col"},[t("span",{staticClass:"badge"},[e._v(e._s(n))])]),e._v(" "),t("div",{staticClass:"col"},[e._v("\n                        "+e._s(i)+"\n\n                        "),e._l(r,(function(r){return t("a",{key:r,staticClass:"mr-1 text-xs",attrs:{href:"https://github.com/fusioncms/fusioncms/issues/"+r,target:"_blank"}},[e._v("\n                            #"+e._s(r)+"\n                        ")])}))],2)])})),0)}))],2)])})),e._v(" "),e.pagination.total>1?t("div",{staticClass:"mt-6"},[t("ui-pagination",{attrs:{total:e.pagination.last_page,value:e.pagination.current_page},on:{input:function(r){return e.changePage(r)}}})],1):e._e(),e._v(" "),t("portal",{attrs:{to:"modals"}},[t("update-modal",{attrs:{version:e.version}})],1)],2)}),[],!1,null,null,null).exports}}]);