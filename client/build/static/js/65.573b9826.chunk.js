(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[65],{373:function(e,a,t){"use strict";t.r(a);var s=t(22),r=t(23),n=t(25),l=t(24),c=t(2),o=t.n(c),i=t(65),d=t(66),m=t(67),u=t(63),b=t(68),f=t(73),p=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(i.a,null,o.a.createElement(d.a,{md:"12"},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("i",{className:"fa fa-align-justify"})," Neraca - Februari 2020"),o.a.createElement(b.a,null,o.a.createElement(f.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colspan:"2"},"Aktiva"),o.a.createElement("th",{colspan:"2"},"Utang & Modal"))),o.a.createElement("tbody",null,o.a.createElement("tr",{className:"font-weight-bold"},o.a.createElement("td",{colspan:"2"},"Aset Lancar :"),o.a.createElement("td",{colspan:"2"},"Utang :")),o.a.createElement("tr",null,o.a.createElement("td",null,"Kas"),o.a.createElement("td",{className:"text-right"},"142.000.000"),o.a.createElement("td",null,"Utang Usaha"),o.a.createElement("td",{className:"text-right"},"0")),o.a.createElement("tr",{className:"font-weight-bold"},o.a.createElement("td",{colspan:"2"},"Aset Tetap :"),o.a.createElement("td",{colspan:"2"},"Modal :")),o.a.createElement("tr",null,o.a.createElement("td",null,"Perlengkapan"),o.a.createElement("td",{className:"text-right"},"0"),o.a.createElement("td",null,"Modal Disetor"),o.a.createElement("td",{className:"text-right"},"200.000.000")),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",null,"Laba"),o.a.createElement("td",{className:"text-right"},"- 58.000.000"))),o.a.createElement("tfoot",{className:"font-weight-bold"},o.a.createElement("tr",null,o.a.createElement("td",null,"Total Aset"),o.a.createElement("td",{className:"text-right"},"142.000.000"),o.a.createElement("td",null,"Total Utang dan Modal"),o.a.createElement("td",{className:"text-right"},"142.000.000")))))))))}}]),t}(c.Component);a.default=p},63:function(e,a,t){"use strict";var s=t(4),r=t(13),n=t(2),l=t.n(n),c=t(14),o=t.n(c),i=t(59),d=t.n(i),m=t(60),u={tag:m.q,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),o=Object(m.m)(d()(a,"card-header"),t);return l.a.createElement(n,Object(s.a)({},c,{className:o}))};b.propTypes=u,b.defaultProps={tag:"div"},a.a=b},65:function(e,a,t){"use strict";var s=t(4),r=t(13),n=t(2),l=t.n(n),c=t(14),o=t.n(c),i=t(59),d=t.n(i),m=t(60),u=o.a.oneOfType([o.a.number,o.a.string]),b={tag:m.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},f={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,o=e.form,i=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var s=e[a];if(delete u[a],s){var r=!t;b.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var f=Object(m.m)(d()(a,n?"no-gutters":null,o?"form-row":"row",b),t);return l.a.createElement(c,Object(s.a)({},u,{className:f}))};p.propTypes=b,p.defaultProps=f,a.a=p},66:function(e,a,t){"use strict";var s=t(4),r=t(13),n=t(2),l=t.n(n),c=t(14),o=t.n(c),i=t(59),d=t.n(i),m=t(60),u=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:u,offset:u})]),f={tag:m.q,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,o=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,s){var r=e[a];if(delete o[a],r||""===r){var n=!s;if(Object(m.k)(r)){var l,c=n?"-":"-"+a+"-",u=g(n,a,r.size);i.push(Object(m.m)(d()(((l={})[u]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l)),t))}else{var b=g(n,a,r);i.push(b)}}})),i.length||i.push("col");var u=Object(m.m)(d()(a,i),t);return l.a.createElement(c,Object(s.a)({},o,{className:u}))};v.propTypes=f,v.defaultProps=p,a.a=v},67:function(e,a,t){"use strict";var s=t(4),r=t(13),n=t(2),l=t.n(n),c=t(14),o=t.n(c),i=t(59),d=t.n(i),m=t(60),u={tag:m.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,c=e.body,o=e.inverse,i=e.outline,u=e.tag,b=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.m)(d()(a,"card",!!o&&"text-white",!!c&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return l.a.createElement(u,Object(s.a)({},f,{className:p,ref:b}))};b.propTypes=u,b.defaultProps={tag:"div"},a.a=b},68:function(e,a,t){"use strict";var s=t(4),r=t(13),n=t(2),l=t.n(n),c=t(14),o=t.n(c),i=t(59),d=t.n(i),m=t(60),u={tag:m.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,c=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.m)(d()(a,"card-body"),t);return l.a.createElement(c,Object(s.a)({},o,{className:i,ref:n}))};b.propTypes=u,b.defaultProps={tag:"div"},a.a=b},73:function(e,a,t){"use strict";var s=t(4),r=t(13),n=t(2),l=t.n(n),c=t(14),o=t.n(c),i=t(59),d=t.n(i),m=t(60),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:m.q,responsiveTag:m.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},b=function(e){var a=e.className,t=e.cssModule,n=e.size,c=e.bordered,o=e.borderless,i=e.striped,u=e.dark,b=e.hover,f=e.responsive,p=e.tag,g=e.responsiveTag,v=e.innerRef,E=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(m.m)(d()(a,"table",!!n&&"table-"+n,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!u&&"table-dark",!!b&&"table-hover"),t),N=l.a.createElement(p,Object(s.a)({},E,{ref:v,className:h}));if(f){var j=Object(m.m)(!0===f?"table-responsive":"table-responsive-"+f,t);return l.a.createElement(g,{className:j},N)}return N};b.propTypes=u,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b}}]);
//# sourceMappingURL=65.573b9826.chunk.js.map