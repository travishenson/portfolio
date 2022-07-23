/*! For license information please see component---src-pages-projects-graph-cms-project-slug-tsx-e67bf8e65a4590f2a43e.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[135],{2580:function(e,t,n){n(5743),e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",l="hour",c="day",u="week",o="month",s="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,o),a=n-i<0,l=t.clone().add(r+(a?-1:1),o);return+(-(r+(n-i)/(a?i-l:l-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:d,w:u,d:c,D:f,h:l,m:a,s:i,ms:r,Q:s}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",y={};y[E]=g;var $=function(e){return e instanceof S},w=function e(t,n,r){var i;if(!t)return E;if("string"==typeof t){var a=t.toLowerCase();y[a]&&(i=a),n&&(y[a]=n,i=a);var l=t.split("-");if(!i&&l.length>1)return e(l[0])}else{var c=t.name;y[c]=t,i=c}return!r&&i&&(E=i),i||!r&&E},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},M=b;M.l=w,M.i=$,M.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=w(e.locale,null,!0),this.parse(e)}var p=g.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return x(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<x(e)},p.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!M.u(t)||t,s=M.p(e),h=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,g=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(s){case d:return r?h(1,0):h(31,11);case o:return r?h(1,g):h(0,g+1);case u:var E=this.$locale().weekStart||0,y=(v<E?v+7:v)-E;return h(r?p-y:p+(6-y),g);case c:case f:return m(b+"Hours",0);case l:return m(b+"Minutes",1);case a:return m(b+"Seconds",2);case i:return m(b+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,u=M.p(e),s="set"+(this.$u?"UTC":""),h=(n={},n[c]=s+"Date",n[f]=s+"Date",n[o]=s+"Month",n[d]=s+"FullYear",n[l]=s+"Hours",n[a]=s+"Minutes",n[i]=s+"Seconds",n[r]=s+"Milliseconds",n)[u],m=u===c?this.$D+(t-this.$W):t;if(u===o||u===d){var v=this.clone().set(f,1);v.$d[h](m),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[M.p(e)]()},p.add=function(r,s){var f,h=this;r=Number(r);var m=M.p(s),v=function(e){var t=x(h);return M.w(t.date(t.date()+Math.round(e*r)),h)};if(m===o)return this.set(o,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return v(1);if(m===u)return v(7);var g=(f={},f[a]=t,f[l]=n,f[i]=e,f)[m]||1,p=this.$d.getTime()+r*g;return M.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),a=this.$H,l=this.$m,c=this.$M,u=n.weekdays,o=n.months,s=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},d=function(e){return M.s(a%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:M.s(c+1,2,"0"),MMM:s(n.monthsShort,c,o,3),MMMM:s(o,c),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:s(n.weekdaysMin,this.$W,u,2),ddd:s(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:M.s(a,2,"0"),h:d(1),hh:d(2),a:f(a,l,!0),A:f(a,l,!1),m:String(l),mm:M.s(l,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(e,t){return t||m[e]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,f,h){var m,v=M.p(f),g=x(r),p=(g.utcOffset()-this.utcOffset())*t,b=this-g,E=M.m(this,g);return E=(m={},m[d]=E/12,m[o]=E,m[s]=E/3,m[u]=(b-p)/6048e5,m[c]=(b-p)/864e5,m[l]=b/n,m[a]=b/t,m[i]=b/e,m)[v]||b,h?E:M.a(E)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return y[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),O=S.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",l],["$W",c],["$M",o],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,S,x),e.$i=!0),x},x.locale=w,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=y[E],x.Ls=y,x.p={},x}()},1528:function(e){"use strict";var t=/["'&<>]/;e.exports=function(e){var n,r=""+e,i=t.exec(r);if(!i)return r;var a="",l=0,c=0;for(l=i.index;l<r.length;l++){switch(r.charCodeAt(l)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==l&&(a+=r.substring(c,l)),c=l+1,a+=n}return c!==l?a+r.substring(c,l):a}},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(e,t,n){n(5837)},2276:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r,i=n(4942),a=n(7294),l=n(7059),c=n(5186);function u(e){return void 0!==e.children}function o(e){return void 0!==e.text}!function(e){e[e["heading-one"]=0]="heading-one",e[e["heading-two"]=1]="heading-two",e[e["heading-three"]=2]="heading-three",e[e["heading-four"]=3]="heading-four",e[e["heading-five"]=4]="heading-five",e[e["heading-six"]=5]="heading-six",e[e.table_head=6]="table_head"}(r||(r={}));var s={"heading-one":"h1","heading-two":"h2","heading-three":"h3","heading-four":"h4","heading-five":"h5","heading-six":"h6",class:"class",link:"a",image:"img",iframe:"iframe",video:"video","bulleted-list":"ul","numbered-list":"ol","list-item":"li","list-item-child":"list_item_child",table:"table",table_head:"table_head",table_body:"table_body",table_row:"table_row",table_cell:"table_cell",table_header_cell:"table_header_cell","block-quote":"blockquote",paragraph:"p",bold:"bold",italic:"italic",underline:"underline",code:"code","code-block":"code_block"},d=n(1528),f=n.n(d);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function v(e){var t=e.url;return a.createElement("audio",{style:{display:"block",maxWidth:"100%",height:"auto"},src:t,controls:!0},a.createElement("p",null,"Your browser doesn't support HTML5 audio. Here is a"," ",a.createElement("a",{href:t},"link to the audio")," instead."))}function g(e){var t=e.src,n=e.width,r=e.height,i=e.altText,l=e.title;var c=n&&n>0,u=r&&r>0;return a.createElement("img",Object.assign({loading:"lazy",src:f()(t)},c&&{width:n},u&&{height:r},{alt:i,title:l}))}function p(e){var t=e.src,n=e.width,r=e.height,i=e.title;return a.createElement("video",{src:f()(t),controls:!0,width:n||"100%",height:r||"100%",title:i},a.createElement("p",null,"Your browser doesn't support HTML5 video. Here is a"," ",a.createElement("a",{href:t},"link to the video")," instead."))}function b(e){e.mimeType;return a.createElement(a.Fragment,null)}var E={a:function(e){var t=e.children,n=m(e,["children"]),r=n.href,i=n.rel,l=n.id,c=n.title,u=n.openInNewTab,o=n.className,s={};return i&&(s.rel=i),l&&(s.id=l),c&&(s.title=c),o&&(s.className=o),u&&(s.target="_blank"),a.createElement("a",Object.assign({href:f()(r)},s),t)},class:function(e){var t=e.className,n=e.children;return a.createElement("div",{className:t},n)},video:p,img:g,iframe:function(e){var t=e.url;return a.createElement("div",{style:{position:"relative",overflow:"hidden",width:"100%",paddingTop:"56.25%"}},a.createElement("iframe",{style:{position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",height:"100%"},src:f()(t),loading:"lazy",allow:"fullscreen",frameBorder:"0",referrerPolicy:"no-referrer"}))},blockquote:function(e){var t=e.children;return a.createElement("blockquote",null,t)},ul:function(e){var t=e.children;return a.createElement("ul",null,t)},ol:function(e){var t=e.children;return a.createElement("ol",null,t)},li:function(e){var t=e.children;return a.createElement("li",null,t)},p:function(e){var t=e.children;return a.createElement("p",null,t)},h1:function(e){var t=e.children;return a.createElement("h1",null,t)},h2:function(e){var t=e.children;return a.createElement("h2",null,t)},h3:function(e){var t=e.children;return a.createElement("h3",null,t)},h4:function(e){var t=e.children;return a.createElement("h4",null,t)},h5:function(e){var t=e.children;return a.createElement("h5",null,t)},h6:function(e){var t=e.children;return a.createElement("h6",null,t)},table:function(e){var t=e.children;return a.createElement("table",null,t)},table_head:function(e){var t=e.children;return a.createElement("thead",null,t)},table_body:function(e){var t=e.children;return a.createElement("tbody",null,t)},table_row:function(e){var t=e.children;return a.createElement("tr",null,t)},table_cell:function(e){var t=e.children;return a.createElement("td",null,t)},table_header_cell:function(e){var t=e.children;return a.createElement("th",null,t)},bold:function(e){var t=e.children;return a.createElement("b",null,t)},italic:function(e){var t=e.children;return a.createElement("i",null,t)},underline:function(e){var t=e.children;return a.createElement("u",null,t)},code:function(e){var t=e.children;return a.createElement("code",null,t)},code_block:function(e){var t=e.children;return a.createElement("pre",{style:{whiteSpace:"pre",wordWrap:"break-word",overflowX:"auto",WebkitOverflowScrolling:"touch",fontFamily:"monospace"}},t)},list_item_child:function(e){var t=e.children;return a.createElement(a.Fragment,null,t)},Asset:{audio:function(e){return a.createElement(v,Object.assign({},e,{url:e.url}))},image:function(e){return a.createElement(g,Object.assign({},e,{src:e.url}))},video:function(e){return a.createElement(p,Object.assign({},e,{src:e.url}))},font:b,application:b,model:b,text:b},embed:{},link:{}};function y(e){var t=e.textNode,n=e.renderers,r=e.shouldSerialize,i=t.text,l=t.bold,c=t.italic,u=t.underline,o=t.code,s=r?function(e){if(e.includes("\n")){var t=e.split("\n");return t.map((function(e,n){return a.createElement(a.Fragment,{key:n},e,n===t.length-1?null:a.createElement("br",null))}))}return e}(i):i,d=null==n?void 0:n.bold,f=null==n?void 0:n.italic,h=null==n?void 0:n.underline,m=null==n?void 0:n.code;return l&&d&&(s=a.createElement(d,null,s)),c&&f&&(s=a.createElement(f,null,s)),u&&h&&(s=a.createElement(h,null,s)),o&&m&&(s=a.createElement(m,null,s)),a.createElement(a.Fragment,null,s)}function $(e){var t=e.node,n=e.parent,r=e.renderers,i=e.references;if(o(t)){var l=t.text,c=n&&u(n)&&"code-block"!==n.type;return a.createElement(y,{textNode:h({},t,{text:l}),renderers:r,shouldSerialize:c})}if(u(t))return a.createElement(w,{element:t,renderers:r,references:i});t.type;return a.createElement(a.Fragment,null)}function w(e){var t=e.element,n=e.renderers,i=e.references,l=t.children,c=t.type,d=m(t,["children","type"]),f=d.nodeId,v=d.nodeType;if(c in r&&function(e){var t=e.children;return t.length>1?!(t.filter((function e(t){return!(!o(t)||""===t.text)||!!u(t)&&(t.children=t.children.filter(e)).length})).length>0):""===t[0].text}({children:l}))return a.createElement(a.Fragment,null);var g,p=f&&v,b=p?null==i?void 0:i.filter((function(e){return e.id===f}))[0]:null;if(p&&"Asset"!==v){var E,y,$="link"===c?null==n||null==(E=n.link)?void 0:E[v]:null==n||null==(y=n.embed)?void 0:y[v];if(void 0===$)return console.warn("[@graphcms/rich-text-react-renderer]: No renderer found for custom "+c+" nodeType "+v+"."),a.createElement(a.Fragment,null);g=$}if(p&&"Asset"===v){var w,M=null==n||null==(w=n.Asset)?void 0:w[null==b?void 0:b.mimeType];if(void 0!==M)g=M;else{var S,O=null==b?void 0:b.mimeType.split("/")[0];g=null==n||null==(S=n.Asset)?void 0:S[O]}}var k=p?g:null==n?void 0:n[s[c]],_=h({},d,b);return k?a.createElement(k,Object.assign({},_),a.createElement(x,{content:l,renderers:n,references:i,parent:t})):a.createElement(a.Fragment,null)}function x(e){var t=e.content,n=e.references,r=e.renderers,i=e.parent,l=function(e){return Array.isArray(e)?e:e.children}(t);return a.createElement(a.Fragment,null,l.map((function(e,t){return a.createElement($,{node:e,parent:i||null,renderers:r,references:n,key:t})})))}function M(e){var t=e.content,n=e.renderers,r=e.references,i=h({},null==E?void 0:E.Asset,null==n?void 0:n.Asset),l=h({},E,n,{Asset:i});return a.createElement(x,{content:t,renderers:l,references:r})}var S=n(8150),O=n(9839);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.label,n=e.value;return a.createElement("div",{className:"flex flex-col"},a.createElement("span",{className:"text-xs text-brand-grey-300 uppercase"},t),a.createElement("span",{className:"font-outfit text-[1.44rem] md:text-[1.777rem] -mt-2"},n))},T=function(e){var t,n=_({},e.data.graphCmsProject),r=(0,O.P$)(n.startDate,n.finishDate),i=n.projectImages?null==n?void 0:n.projectImages.map((function(e){return _(_({},(0,l.c)(e)),{},{slug:e.slug,altText:e.altText})})):[];return a.createElement(a.Fragment,null,a.createElement(c.q,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,n.title," | Travis Henson"),a.createElement("link",{rel:"canonical",href:"https://travishenson.com/projects/"+n.slug})),a.createElement(S.Z,{path:e.path,isFullWidth:!0},a.createElement("div",{className:"w-full h-auto min-h-[35vh] bg-brand-black text-brand-grey-100 px-8"},a.createElement("div",{className:"flex w-full h-full max-w-content mx-auto pt-[10vh] pb-[5vh]"},a.createElement("div",{className:"grid grid-cols-1 gap-y-8 sm:grid-cols-2 w-full max-w-text mx-auto"},a.createElement(D,{label:"Project",value:String(n.title)}),a.createElement(D,{label:"Duration",value:String(r.start+" – "+r.finish)}),a.createElement(D,{label:"Role",value:String(n.role)}),a.createElement(D,{label:"Type",value:String(n.projectType)}),a.createElement(D,{label:"Project URL",value:a.createElement("a",{href:n.liveProjectUrl,target:"_blank",rel:"noreferrer",className:"underline underline-offset-2 hover:text-brand-grey-300"},"Visit "+n.title)})))),a.createElement("div",{className:"max-w-content mx-auto pt-8 md:pt-12 px-4"},a.createElement(M,{content:null==n||null===(t=n.content)||void 0===t?void 0:t.raw,renderers:{h4:function(e){var t=e.children;return a.createElement("div",{className:"text-lg max-w-text mx-auto md:mt-12"},a.createElement("h2",null,t))},img:function(e){var t=e.src,n=e.altText;return a.createElement("img",{src:t,alt:n,className:"mx-auto my-12"})},a:function(e){var t=e.children,n=e.href,r=e.openInNewTab;return a.createElement("a",{href:n,className:"underline underline-offset-2 text-brand-grey-100 hover:text-brand-grey-300",target:r?"_blank":"",rel:"noreferrer"},t)},p:function(e){var t=e.children;return a.createElement("p",{className:"mx-auto my-8 text-lg leading-8"},t)},class:function(e){var t=e.className;if("section-break"===t)return a.createElement("div",{className:"h-12"});var n=i.findIndex((function(e){return e.slug===t}));return a.createElement("div",{className:"flex justify-center"},a.createElement(l.G,{image:i[n],alt:i[n].altText,className:"w-full max-w-screen-lg"}))}}}))))}},9839:function(e,t,n){"use strict";n.d(t,{P$:function(){return c},zA:function(){return u},z_:function(){return o}});var r=n(7294),i=n(2580),a=n.n(i),l=n(594),c=function(e,t){var n=String(e),r=String(t);return{start:a()(n).format("MMM YYYY"),finish:t?a()(r).format("MMM YYYY"):"Present"}},u=function(e){var t=String(e);return console.log(t),e?a()(t).format("MMM D, YYYY"):""},o=function(e){var t;switch(e){case"TypeScript":t=r.createElement(l.WZi,{title:"TypeScript"});break;case"React":t=r.createElement(l.pNp,{title:"React.js"});break;case"GraphQL":t=r.createElement(l.dMV,{title:"GraphQL"});break;case"Tailwind":t=r.createElement(l.YnA,{title:"Tailwind CSS"});break;case"Supabase":t=r.createElement(l.MyK,{title:"Supabase"});break;case"Gatsby":t=r.createElement(l.s6Z,{title:"Gatsby"});break;case"Expo":t=r.createElement(l.ipR,{title:"Expo"});break;default:return null}return r.createElement("div",{className:"flex flex-row items-center px-4"},r.createElement("div",{style:{fontSize:"150%",margin:"0 5px"}},t),r.createElement("div",{className:"font-outfit ml-1"},e))}}}]);
//# sourceMappingURL=component---src-pages-projects-graph-cms-project-slug-tsx-e67bf8e65a4590f2a43e.js.map