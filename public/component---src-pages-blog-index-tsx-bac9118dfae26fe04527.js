(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[643],{1231:function(t,e,n){"use strict";var r=n(7294);var i=r.forwardRef((function(t,e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:e},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));e.Z=i},2580:function(t,e,n){n(5743),t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",u="day",o="week",l="month",c="quarter",f="year",h="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),a=n-i<0,s=e.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:f,w:o,d:u,D:h,h:s,m:a,s:i,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=g;var b=function(t){return t instanceof D},w=function t(e,n,r){var i;if(!e)return M;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(i=a),n&&(y[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var u=e.name;y[u]=e,i=u}return!r&&i&&(M=i),i||!r&&M},S=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},x=p;x.l=w,x.i=b,x.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function g(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return x},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return S(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<S(t)},v.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!x.u(e)||e,c=x.p(t),d=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case f:return r?d(1,0):d(31,11);case l:return r?d(1,g):d(0,g+1);case o:var M=this.$locale().weekStart||0,y=($<M?$+7:$)-M;return d(r?v-y:v+(6-y),g);case u:case h:return m(p+"Hours",0);case s:return m(p+"Minutes",1);case a:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,o=x.p(t),c="set"+(this.$u?"UTC":""),d=(n={},n[u]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[f]=c+"FullYear",n[s]=c+"Hours",n[a]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===l||o===f){var $=this.clone().set(h,1);$.$d[d](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[x.p(t)]()},v.add=function(r,c){var h,d=this;r=Number(r);var m=x.p(c),$=function(t){var e=S(d);return x.w(e.date(e.date()+Math.round(t*r)),d)};if(m===l)return this.set(l,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===u)return $(1);if(m===o)return $(7);var g=(h={},h[a]=e,h[s]=n,h[i]=t,h)[m]||1,v=this.$d.getTime()+r*g;return x.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,s=this.$m,u=this.$M,o=n.weekdays,l=n.months,c=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},f=function(t){return x.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:x.s(u+1,2,"0"),MMM:c(n.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:x.s(a,2,"0"),h:f(1),hh:f(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,d){var m,$=x.p(h),g=S(r),v=(g.utcOffset()-this.utcOffset())*e,p=this-g,M=x.m(this,g);return M=(m={},m[f]=M/12,m[l]=M,m[c]=M/3,m[o]=(p-v)/6048e5,m[u]=(p-v)/864e5,m[s]=p/n,m[a]=p/e,m[i]=p/t,m)[$]||p,d?M:x.a(M)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return x.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),E=D.prototype;return S.prototype=E,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",u],["$M",l],["$y",f],["$D",h]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,D,S),t.$i=!0),S},S.locale=w,S.isDayjs=b,S.unix=function(t){return S(1e3*t)},S.en=y[M],S.Ls=y,S.p={},S}()},5837:function(t,e,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(t,e,n){n(5837)},3246:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(2982),i=n(7294),a=n(5186),s=n(9546),u=n(1597),o=n(7059),l=n(1231),c=function(t){var e=t.image,n=t.overview,r=t.publishedAt,a=t.slug,s=t.title,c=(0,o.c)(e);return i.createElement("div",{className:"w-full h-[450px] mt-6 overflow-hidden"},i.createElement("div",{className:"w-full h-full flex flex-col"},i.createElement(u.Link,{to:"/blog/"+a,className:"w-full h-1/2"},i.createElement(o.G,{image:c,alt:s+" featured mockup",className:"w-full h-full object-cover rounded-t-lg"})),i.createElement("div",{className:"flex flex-col flex-1 text-brand-black p-4 bg-brand-grey-100 rounded-b-lg"},i.createElement("p",{className:"text-sm font-outfit text-brand-grey-700"},"Published ",r),i.createElement("div",{className:"flex flex-1 flex-col justify-between"},i.createElement(u.Link,{to:"/blog/"+a,className:"max-w-max hover:text-brand-blue-500 line-clamp-3"},i.createElement("h3",null,s)),i.createElement("p",{className:"flex-1 line-clamp-4"},n),i.createElement(u.Link,{to:"/blog/"+a,className:"group flex h-8 items-center mt-4 max-w-max hover:cursor-pointer hover:text-brand-blue-500"},i.createElement("div",{className:"h-full font-outfit text-base flex items-center"},"View Post"),i.createElement(l.Z,{className:"h-6 mt-0.5 ml-0.5 group-hover:translate-x-1 transition-transform duration-500"}))))))},f=n(9839),h=function(t){var e=t.path,n=t.data,u=(0,r.Z)(n.allGraphCmsBlogPost.nodes);return i.createElement(i.Fragment,null,i.createElement(a.q,null,i.createElement("meta",{charSet:"utf-8"}),i.createElement("title",null,"Blog | Travis Henson"),i.createElement("link",{rel:"canonical",href:"https://travishenson.com/blog"})),i.createElement(s.Z,{path:e,title:"Blog"},i.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},u.map((function(t){var e,n,r,a;return i.createElement(c,Object.assign({},t,{key:t.slug,publishedAt:(0,f.zA)(t.publishedAt),image:null!==(e=null===(n=t.featuredImage)||void 0===n||null===(r=n.localFile)||void 0===r||null===(a=r.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&void 0!==e?e:null}))})))))}},9839:function(t,e,n){"use strict";n.d(e,{P$:function(){return u},zA:function(){return o},z_:function(){return l}});var r=n(7294),i=n(2580),a=n.n(i),s=n(594),u=function(t,e){var n=String(t),r=String(e);return{start:a()(n).format("MMM YYYY"),finish:e?a()(r).format("MMM YYYY"):"Present"}},o=function(t){var e=String(t);return console.log(e),t?a()(e).format("MMM D, YYYY"):""},l=function(t){var e;switch(t){case"TypeScript":e=r.createElement(s.WZi,{title:"TypeScript"});break;case"React":e=r.createElement(s.pNp,{title:"React.js"});break;case"GraphQL":e=r.createElement(s.dMV,{title:"GraphQL"});break;case"Tailwind":e=r.createElement(s.YnA,{title:"Tailwind CSS"});break;case"Supabase":e=r.createElement(s.MyK,{title:"Supabase"});break;case"Gatsby":e=r.createElement(s.s6Z,{title:"Gatsby"});break;case"Expo":e=r.createElement(s.ipR,{title:"Expo"});break;default:return null}return r.createElement("div",{className:"flex flex-row items-center"},r.createElement("div",{style:{fontSize:"150%",margin:"0 5px"}},e),r.createElement("div",{className:"font-outfit text-sm ml-1"},t))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-bac9118dfae26fe04527.js.map