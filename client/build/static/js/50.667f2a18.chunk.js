(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[50],{102:function(e,t,n){"use strict";var a=n(4),o=n(13),r=n(61),i=n(10),s=n(2),c=n.n(s),l=n(14),p=n.n(l),d=n(59),u=n.n(d),f=n(92),m=n.n(f),b=n(87),h=n.n(b),g=n(19),v=n.n(g),O=n(88),j=n.n(O),y=n(91),x=n.n(y),E=n(90),N=n(93),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,j()(h()(t),"refHandler",(function(e){Object(N.b)(t.props.innerRef,e),Object(N.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){Object(N.b)(this.props.innerRef,null)},n.render=function(){return x()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(N.c)(this.props.children)({ref:this.refHandler})},t}(s.Component);function C(e){return s.createElement(E.b.Consumer,null,(function(t){return s.createElement(k,m()({setReferenceNode:t},e))}))}var w=n(71),T=n(60),M=n(69),I={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:T.q,nav:p.a.bool},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.render=function(){var e,t=this,n=this.props,r=n.className,i=n.color,s=n.cssModule,l=n.caret,p=n.split,d=n.nav,f=n.tag,m=n.innerRef,b=Object(o.a)(n,["className","color","cssModule","caret","split","nav","tag","innerRef"]),h=b["aria-label"]||"Toggle Dropdown",g=Object(T.m)(u()(r,{"dropdown-toggle":l||p,"dropdown-toggle-split":p,"nav-link":d}),s),v=b.children||c.a.createElement("span",{className:"sr-only"},h);return d&&!f?(e="a",b.href="#"):f?e=f:(e=M.a,b.color=i,b.cssModule=s),this.context.inNavbar?c.a.createElement(e,Object(a.a)({},b,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v})):c.a.createElement(C,{innerRef:m},(function(n){var o,r=n.ref;return c.a.createElement(e,Object(a.a)({},b,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:v}))}))},t}(c.a.Component);P.propTypes=I,P.defaultProps={"aria-haspopup":!0,color:"secondary"},P.contextType=w.a;t.a=P},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(64),o=n(4),r=n(61),i=n(10),s=n(2),c=n.n(s),l=n(14),p=n.n(l),d=n(97),u=n(60),f=["defaultOpen"],m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},n.toggle=n.toggle.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},n.render=function(){return c.a.createElement(d.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.n)(this.props,f)))},t}(s.Component);m.propTypes=Object(a.a)({defaultOpen:p.a.bool,onToggle:p.a.func},d.a.propTypes)},178:function(e,t,n){e.exports=n.p+"static/media/sygnet.dba7f081.svg"},314:function(e,t,n){"use strict";n.r(t);var a=n(86),o=n(22),r=n(23),i=n(25),s=n(24),c=n(2),l=n.n(c),p=n(26),d=n(306),u=n(303),f=n(305),m=n(145),b=n(102),h=n(98),g=n(99),v=n(114),O=n(178),j=n.n(O),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={nama:localStorage.getItem("nama"),avatar:localStorage.getItem("avatar")},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props;t.children,Object(a.a)(t,["children"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.l,{className:"d-lg-none",display:"md",mobile:!0}),l.a.createElement(v.e,{full:{width:89,height:25,alt:"AMF-HAQ"},minimized:{src:j.a,width:30,height:30,alt:"CoreUI Logo"}}),l.a.createElement(v.l,{className:"d-md-down-none",display:"lg"}),l.a.createElement(d.a,{className:"ml-auto",navbar:!0},l.a.createElement(u.a,{className:"d-md-down-none"},l.a.createElement(p.NavLink,{to:"#",className:"nav-link"},l.a.createElement("i",{className:"icon-bell"}),l.a.createElement(f.a,{pill:!0,color:"danger"},"5"))),l.a.createElement(m.a,{nav:!0,direction:"down"},l.a.createElement(b.a,{nav:!0},l.a.createElement("img",{src:"../../assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),l.a.createElement(h.a,{right:!0},l.a.createElement(g.a,{header:!0,tag:"div",className:"text-center"},l.a.createElement("strong",null,this.state.nama)),l.a.createElement(p.Link,{to:"/profile/profile"},l.a.createElement(g.a,null,l.a.createElement("i",{className:"fa fa-user"})," Profil")),l.a.createElement(g.a,{onClick:function(t){return e.props.onLogout(t)}},l.a.createElement("i",{className:"fa fa-sign-out"})," Logout")))))}}]),n}(c.Component);y.defaultProps={},t.default=y},64:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}n.d(t,"a",(function(){return o}))},86:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))},98:function(e,t,n){"use strict";var a=n(4),o=n(64),r=n(13),i=n(10),s=n(2),c=n.n(s),l=n(14),p=n.n(l),d=n(59),u=n.n(d),f=n(315),m=n(71),b=n(60),h={tag:b.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},g={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,i=t.cssModule,s=t.right,l=t.tag,p=t.flip,d=t.modifiers,m=t.persist,h=t.positionFixed,O=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),j=Object(b.m)(u()(n,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),i),y=l;if(m||this.context.isOpen&&!this.context.inNavbar){var x=(v[this.context.direction]||"bottom")+"-"+(s?"end":"start"),E=p?d:Object(o.a)({},d,{},g),N=!!h;return c.a.createElement(f.a,{placement:x,modifiers:E,positionFixed:N},(function(t){var n=t.ref,o=t.style,r=t.placement;return c.a.createElement(y,Object(a.a)({tabIndex:"-1",role:"menu",ref:n,style:o},O,{"aria-hidden":!e.context.isOpen,className:j,"x-placement":r}))}))}return c.a.createElement(y,Object(a.a)({tabIndex:"-1",role:"menu"},O,{"aria-hidden":!this.context.isOpen,className:j,"x-placement":O.placement}))},t}(c.a.Component);O.propTypes=h,O.defaultProps={tag:"div",flip:!0},O.contextType=m.a,t.a=O},99:function(e,t,n){"use strict";var a=n(4),o=n(13),r=n(61),i=n(10),s=n(2),c=n.n(s),l=n(14),p=n.n(l),d=n(59),u=n.n(d),f=n(71),m=n(60),b={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:m.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n.getTabIndex=n.getTabIndex.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,n=Object(m.n)(this.props,["toggle"]),r=n.className,i=n.cssModule,s=n.divider,l=n.tag,p=n.header,d=n.active,f=Object(o.a)(n,["className","cssModule","divider","tag","header","active"]),b=Object(m.m)(u()(r,{disabled:f.disabled,"dropdown-item":!s&&!p,active:d,"dropdown-header":p,"dropdown-divider":s}),i);return"button"===l&&(p?l="h6":s?l="div":f.href&&(l="a")),c.a.createElement(l,Object(a.a)({type:"button"===l&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:e,role:t,className:b,onClick:this.onClick}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={tag:"button",toggle:!0},h.contextType=f.a,t.a=h}}]);
//# sourceMappingURL=50.667f2a18.chunk.js.map