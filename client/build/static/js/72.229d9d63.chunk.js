(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[72],{294:function(e,a,t){"use strict";var l=t(4),s=t(13),n=t(64),r=t(2),c=t.n(r),i=t(14),o=t.n(i),m=t(59),u=t.n(m),d=t(60),f=t(72),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:d.q,transition:o.a.shape(f.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},f.a.defaultProps,{unmountOnExit:!0})};function p(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,i=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,g=e.toggle,p=e.children,b=e.transition,E=e.fade,k=e.innerRef,v=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(d.m)(u()(a,"alert","alert-"+m,{"alert-dismissible":g}),i),O=Object(d.m)(u()("close",t),i),N=Object(n.a)({},f.a.defaultProps,{},b,{baseClass:E?b.baseClass:"",timeout:E?b.timeout:0});return c.a.createElement(f.a,Object(l.a)({},v,N,{tag:o,className:y,in:h,role:"alert",innerRef:k}),g?c.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:g},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}p.propTypes=h,p.defaultProps=g,a.a=p},340:function(e,a,t){"use strict";t.r(a);var l=t(22),s=t(23),n=t(27),r=t(25),c=t(24),i=t(2),o=t.n(i),m=t(65),u=t(66),d=t(67),f=t(63),h=t(68),g=t(294),p=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={visible:!0},s.onDismiss=s.onDismiss.bind(Object(n.a)(s)),s}return Object(s.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(h.a,null,o.a.createElement(g.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),o.a.createElement(g.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),o.a.createElement(g.a,{color:"success"},"This is a success alert \u2014 check it out!"),o.a.createElement(g.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),o.a.createElement(g.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),o.a.createElement(g.a,{color:"info"},"This is a info alert \u2014 check it out!"),o.a.createElement(g.a,{color:"light"},"This is a light alert \u2014 check it out!"),o.a.createElement(g.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null," use ",o.a.createElement("code",null,".alert-link")," to provide links")),o.a.createElement(h.a,null,o.a.createElement(g.a,{color:"primary"},"This is a primary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"secondary"},"This is a secondary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"success"},"This is a success alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"danger"},"This is a danger alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"warning"},"This is a warning alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"info"},"This is a info alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"light"},"This is a light alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(g.a,{color:"dark"},"This is a dark alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"additional content")),o.a.createElement(h.a,null,o.a.createElement(g.a,{color:"success"},o.a.createElement("h4",{className:"alert-heading"},"Well done!"),o.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),o.a.createElement("hr",null),o.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"dismissing")),o.a.createElement(h.a,null,o.a.createElement(g.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(i.Component);a.default=p},63:function(e,a,t){"use strict";var l=t(4),s=t(13),n=t(2),r=t.n(n),c=t(14),i=t.n(c),o=t(59),m=t.n(o),u=t(60),d={tag:u.q,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),i=Object(u.m)(m()(a,"card-header"),t);return r.a.createElement(n,Object(l.a)({},c,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},65:function(e,a,t){"use strict";var l=t(4),s=t(13),n=t(2),r=t.n(n),c=t(14),i=t.n(c),o=t(59),m=t.n(o),u=t(60),d=i.a.oneOfType([i.a.number,i.a.string]),f={tag:u.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,i=e.form,o=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];o.forEach((function(a,t){var l=e[a];if(delete d[a],l){var s=!t;f.push(s?"row-cols-"+l:"row-cols-"+a+"-"+l)}}));var h=Object(u.m)(m()(a,n?"no-gutters":null,i?"form-row":"row",f),t);return r.a.createElement(c,Object(l.a)({},d,{className:h}))};g.propTypes=f,g.defaultProps=h,a.a=g},66:function(e,a,t){"use strict";var l=t(4),s=t(13),n=t(2),r=t.n(n),c=t(14),i=t.n(c),o=t(59),m=t.n(o),u=t(60),d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),h={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(a,l){var s=e[a];if(delete i[a],s||""===s){var n=!l;if(Object(u.k)(s)){var r,c=n?"-":"-"+a+"-",d=p(n,a,s.size);o.push(Object(u.m)(m()(((r={})[d]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var f=p(n,a,s);o.push(f)}}})),o.length||o.push("col");var d=Object(u.m)(m()(a,o),t);return r.a.createElement(c,Object(l.a)({},i,{className:d}))};b.propTypes=h,b.defaultProps=g,a.a=b},72:function(e,a,t){"use strict";var l=t(4),s=t(13),n=t(64),r=t(2),c=t.n(r),i=t(14),o=t.n(i),m=t(59),u=t.n(m),d=t(75),f=t(60),h=Object(n.a)({},d.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:f.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),g=Object(n.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:f.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function p(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,i=e.cssModule,o=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=Object(f.o)(h,f.c),p=Object(f.n)(h,f.c);return c.a.createElement(d.Transition,g,(function(e){var s="entered"===e,d=Object(f.m)(u()(r,t,s&&n),i);return c.a.createElement(a,Object(l.a)({className:d},p,{ref:m}),o)}))}p.propTypes=h,p.defaultProps=g,a.a=p}}]);
//# sourceMappingURL=72.229d9d63.chunk.js.map