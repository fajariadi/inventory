(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[89],{319:function(e,a,t){"use strict";t.r(a);var l=t(22),n=t(23),r=t(29),c=t(25),m=t(24),o=t(2),s=t.n(o),E=t(65),i=t(66),p=t(67),d=t(64),u=t(68),h=t(80),y=t(81),f=t(78),x=t(79),N=t(320),b=t(304),w=t(109),k=t(71),v=t(321),g=t(108),F=t(115),z=t(91),S=t(322),O=t(103),I=t(101),T=t(102),C=t(70),A=t(127),P=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).toggle=n.toggle.bind(Object(r.a)(n)),n.toggleFade=n.toggleFade.bind(Object(r.a)(n)),n.state={collapse:!0,fadeIn:!0,timeout:300},n}return Object(n.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState((function(e){return{fadeIn:!e}}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12",sm:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Credit Card"),s.a.createElement("small",null," Form")),s.a.createElement(u.a,null,s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"name"},"Name"),s.a.createElement(f.a,{type:"text",id:"name",placeholder:"Enter your name",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"ccnumber"},"Credit Card Number"),s.a.createElement(f.a,{type:"text",id:"ccnumber",placeholder:"0000 0000 0000 0000",required:!0})))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"4"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"ccmonth"},"Month"),s.a.createElement(f.a,{type:"select",name:"ccmonth",id:"ccmonth"},s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4"),s.a.createElement("option",{value:"5"},"5"),s.a.createElement("option",{value:"6"},"6"),s.a.createElement("option",{value:"7"},"7"),s.a.createElement("option",{value:"8"},"8"),s.a.createElement("option",{value:"9"},"9"),s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"11"},"11"),s.a.createElement("option",{value:"12"},"12")))),s.a.createElement(i.a,{xs:"4"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"ccyear"},"Year"),s.a.createElement(f.a,{type:"select",name:"ccyear",id:"ccyear"},s.a.createElement("option",null,"2017"),s.a.createElement("option",null,"2018"),s.a.createElement("option",null,"2019"),s.a.createElement("option",null,"2020"),s.a.createElement("option",null,"2021"),s.a.createElement("option",null,"2022"),s.a.createElement("option",null,"2023"),s.a.createElement("option",null,"2024"),s.a.createElement("option",null,"2025"),s.a.createElement("option",null,"2026")))),s.a.createElement(i.a,{xs:"4"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"cvv"},"CVV/CVC"),s.a.createElement(f.a,{type:"text",id:"cvv",placeholder:"123",required:!0}))))))),s.a.createElement(i.a,{xs:"12",sm:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Company"),s.a.createElement("small",null," Form")),s.a.createElement(u.a,null,s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"company"},"Company"),s.a.createElement(f.a,{type:"text",id:"company",placeholder:"Enter your company name"})),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"vat"},"VAT"),s.a.createElement(f.a,{type:"text",id:"vat",placeholder:"DE1234567890"})),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"street"},"Street"),s.a.createElement(f.a,{type:"text",id:"street",placeholder:"Enter street name"})),s.a.createElement(h.a,{row:!0,className:"my-0"},s.a.createElement(i.a,{xs:"8"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"city"},"City"),s.a.createElement(f.a,{type:"text",id:"city",placeholder:"Enter your city"}))),s.a.createElement(i.a,{xs:"4"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"postal-code"},"Postal Code"),s.a.createElement(f.a,{type:"text",id:"postal-code",placeholder:"Postal Code"})))),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"country"},"Country"),s.a.createElement(f.a,{type:"text",id:"country",placeholder:"Country name"})))))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Basic Form")," Elements"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,null,"Static")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement("p",{className:"form-control-static"},"Username"))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"text-input"},"Text Input")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Text"}),s.a.createElement(N.a,{color:"muted"},"This is a help text"))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"email-input"},"Email Input")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"email",id:"email-input",name:"email-input",placeholder:"Enter Email",autoComplete:"email"}),s.a.createElement(N.a,{className:"help-block"},"Please enter your email"))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"password-input"},"Password")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"password",id:"password-input",name:"password-input",placeholder:"Password",autoComplete:"new-password"}),s.a.createElement(N.a,{className:"help-block"},"Please enter a complex password"))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"date-input"},"Date Input ",s.a.createElement(b.a,null,"NEW"))),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"date",id:"date-input",name:"date-input",placeholder:"date"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"disabled-input"},"Disabled Input")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"text",id:"disabled-input",name:"disabled-input",placeholder:"Disabled",disabled:!0}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"textarea-input"},"Textarea")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"select"},"Select")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"select",name:"select",id:"select"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"Option #1"),s.a.createElement("option",{value:"2"},"Option #2"),s.a.createElement("option",{value:"3"},"Option #3")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"selectLg"},"Select Large")),s.a.createElement(i.a,{xs:"12",md:"9",size:"lg"},s.a.createElement(f.a,{type:"select",name:"selectLg",id:"selectLg",bsSize:"lg"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"Option #1"),s.a.createElement("option",{value:"2"},"Option #2"),s.a.createElement("option",{value:"3"},"Option #3")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"selectSm"},"Select Small")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"select",name:"selectSm",id:"SelectLm",bsSize:"sm"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"Option #1"),s.a.createElement("option",{value:"2"},"Option #2"),s.a.createElement("option",{value:"3"},"Option #3"),s.a.createElement("option",{value:"4"},"Option #4"),s.a.createElement("option",{value:"5"},"Option #5")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"disabledSelect"},"Disabled Select")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"select",name:"disabledSelect",id:"disabledSelect",disabled:!0,autoComplete:"name"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"Option #1"),s.a.createElement("option",{value:"2"},"Option #2"),s.a.createElement("option",{value:"3"},"Option #3")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"multiple-select"},"Multiple select")),s.a.createElement(i.a,{md:"9"},s.a.createElement(f.a,{type:"select",name:"multiple-select",id:"multiple-select",multiple:!0},s.a.createElement("option",{value:"1"},"Option #1"),s.a.createElement("option",{value:"2"},"Option #2"),s.a.createElement("option",{value:"3"},"Option #3"),s.a.createElement("option",{value:"4"},"Option #4"),s.a.createElement("option",{value:"5"},"Option #5"),s.a.createElement("option",{value:"6"},"Option #6"),s.a.createElement("option",{value:"7"},"Option #7"),s.a.createElement("option",{value:"8"},"Option #8"),s.a.createElement("option",{value:"9"},"Option #9"),s.a.createElement("option",{value:"10"},"Option #10")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,null,"Radios")),s.a.createElement(i.a,{md:"9"},s.a.createElement(h.a,{check:!0,className:"radio"},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"radio1",name:"radios",value:"option1"}),s.a.createElement(y.a,{check:!0,className:"form-check-label",htmlFor:"radio1"},"Option 1")),s.a.createElement(h.a,{check:!0,className:"radio"},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"radio2",name:"radios",value:"option2"}),s.a.createElement(y.a,{check:!0,className:"form-check-label",htmlFor:"radio2"},"Option 2")),s.a.createElement(h.a,{check:!0,className:"radio"},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"radio3",name:"radios",value:"option3"}),s.a.createElement(y.a,{check:!0,className:"form-check-label",htmlFor:"radio3"},"Option 3")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,null,"Inline Radios")),s.a.createElement(i.a,{md:"9"},s.a.createElement(h.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(y.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"One")),s.a.createElement(h.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(y.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"Two")),s.a.createElement(h.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"radio",id:"inline-radio3",name:"inline-radios",value:"option3"}),s.a.createElement(y.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio3"},"Three")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,null,"Checkboxes")),s.a.createElement(i.a,{md:"9"},s.a.createElement(h.a,{check:!0,className:"checkbox"},s.a.createElement(f.a,{className:"form-check-input",type:"checkbox",id:"checkbox1",name:"checkbox1",value:"option1"}),s.a.createElement(y.a,{check:!0,className:"form-check-label",htmlFor:"checkbox1"},"Option 1")),s.a.createElement(h.a,{check:!0,className:"checkbox"},s.a.createElement(f.a,{className:"form-check-input",type:"checkbox",id:"checkbox2",name:"checkbox2",value:"option2"}),s.a.createElement(y.a,{check:!0,className:"form-check-label",htmlFor:"checkbox2"},"Option 2")),s.a.createElement(h.a,{check:!0,className:"checkbox"},s.a.createElement(f.a,{className:"form-check-input",type:"checkbox",id:"checkbox3",name:"checkbox3",value:"option3"}),s.a.createElement(y.a,{check:!0,className:"form-check-label",htmlFor:"checkbox3"},"Option 3")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,null,"Inline Checkboxes")),s.a.createElement(i.a,{md:"9"},s.a.createElement(h.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"checkbox",id:"inline-checkbox1",name:"inline-checkbox1",value:"option1"}),s.a.createElement(y.a,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox1"},"One")),s.a.createElement(h.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"checkbox",id:"inline-checkbox2",name:"inline-checkbox2",value:"option2"}),s.a.createElement(y.a,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox2"},"Two")),s.a.createElement(h.a,{check:!0,inline:!0},s.a.createElement(f.a,{className:"form-check-input",type:"checkbox",id:"inline-checkbox3",name:"inline-checkbox3",value:"option3"}),s.a.createElement(y.a,{className:"form-check-label",check:!0,htmlFor:"inline-checkbox3"},"Three")))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"file-input"},"File input")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"file",id:"file-input",name:"file-input"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"file-multiple-input"},"Multiple File input")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"file",id:"file-multiple-input",name:"file-multiple-input",multiple:!0}))),s.a.createElement(h.a,{row:!0,hidden:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{className:"custom-file",htmlFor:"custom-file-input"},"Custom file input")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(y.a,{className:"custom-file"},s.a.createElement(f.a,{className:"custom-file",type:"file",id:"custom-file-input",name:"file-input"}),s.a.createElement("span",{className:"custom-file-control"})))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))),s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Inline")," Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",inline:!0},s.a.createElement(h.a,{className:"pr-1"},s.a.createElement(y.a,{htmlFor:"exampleInputName2",className:"pr-1"},"Name"),s.a.createElement(f.a,{type:"text",id:"exampleInputName2",placeholder:"Jane Doe",required:!0})),s.a.createElement(h.a,{className:"pr-1"},s.a.createElement(y.a,{htmlFor:"exampleInputEmail2",className:"pr-1"},"Email"),s.a.createElement(f.a,{type:"email",id:"exampleInputEmail2",placeholder:"jane.doe@example.com",required:!0})))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset")))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Horizontal")," Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"hf-email"},"Email")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"email",id:"hf-email",name:"hf-email",placeholder:"Enter Email...",autoComplete:"email"}),s.a.createElement(N.a,{className:"help-block"},"Please enter your email"))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"3"},s.a.createElement(y.a,{htmlFor:"hf-password"},"Password")),s.a.createElement(i.a,{xs:"12",md:"9"},s.a.createElement(f.a,{type:"password",id:"hf-password",name:"hf-password",placeholder:"Enter Password...",autoComplete:"current-password"}),s.a.createElement(N.a,{className:"help-block"},"Please enter your password"))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))),s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Normal")," Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"nf-email"},"Email"),s.a.createElement(f.a,{type:"email",id:"nf-email",name:"nf-email",placeholder:"Enter Email..",autoComplete:"email"}),s.a.createElement(N.a,{className:"help-block"},"Please enter your email")),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"nf-password"},"Password"),s.a.createElement(f.a,{type:"password",id:"nf-password",name:"nf-password",placeholder:"Enter Password..",autoComplete:"current-password"}),s.a.createElement(N.a,{className:"help-block"},"Please enter your password")))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))),s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Input ",s.a.createElement("strong",null,"Grid")),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"3"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-3"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"4"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-4"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"5"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-5"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"6"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-6"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"7"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-7"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"8"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-8"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"9"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-9"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"10"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-10"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"11"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-11"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{sm:"12"},s.a.createElement(f.a,{type:"text",placeholder:".col-sm-12"}))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-user"})," Login"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))),s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Input ",s.a.createElement("strong",null,"Sizes")),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(y.a,{sm:"5",size:"sm",htmlFor:"input-small"},"Small Input"),s.a.createElement(i.a,{sm:"6"},s.a.createElement(f.a,{bsSize:"sm",type:"text",id:"input-small",name:"input-small",className:"input-sm",placeholder:".form-control-sm"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(y.a,{sm:"5",htmlFor:"input-normal"},"Normal Input"),s.a.createElement(i.a,{sm:"6"},s.a.createElement(f.a,{type:"text",id:"input-normal",name:"input-normal",placeholder:"Normal"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(y.a,{sm:"5",size:"lg",htmlFor:"input-large"},"Large Input"),s.a.createElement(i.a,{sm:"6"},s.a.createElement(f.a,{bsSize:"lg",type:"text",id:"input-large",name:"input-large",className:"input-lg",placeholder:".form-control-lg"}))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12",sm:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Validation feedback")," Form"),s.a.createElement(u.a,null,s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"inputIsValid"},"Input is valid"),s.a.createElement(f.a,{type:"text",valid:!0,id:"inputIsValid"}),s.a.createElement(v.a,{valid:!0},"Cool! Input is valid")),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"inputIsInvalid"},"Input is invalid"),s.a.createElement(f.a,{type:"text",invalid:!0,id:"inputIsInvalid"}),s.a.createElement(v.a,null,"Houston, we have a problem..."))))),s.a.createElement(i.a,{xs:"12",sm:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Validation feedback")," Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{className:"was-validated"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"inputSuccess2i"},"Non-required input"),s.a.createElement(f.a,{type:"text",className:"form-control-success",id:"inputSuccess2i"}),s.a.createElement(v.a,{valid:!0},"Non-required")),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"inputWarning2i"},"Required input"),s.a.createElement(f.a,{type:"text",className:"form-control-warning",id:"inputWarning2i",required:!0}),s.a.createElement(v.a,{className:"help-block"},"Please provide a valid information"),s.a.createElement(v.a,{valid:!0,className:"help-block"},"Input provided"))))))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12",md:"4"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Icon/Text")," Groups"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-user"}))),s.a.createElement(f.a,{type:"text",id:"input1-group1",name:"input1-group1",placeholder:"Username"})))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(f.a,{type:"email",id:"input2-group1",name:"input2-group1",placeholder:"Email"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-envelope-o"})))))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-euro"}))),s.a.createElement(f.a,{type:"text",id:"input3-group1",name:"input3-group1",placeholder:".."}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,".00"))))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"success"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset")))),s.a.createElement(i.a,{xs:"12",md:"4"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Button")," Groups"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(k.a,{type:"button",color:"primary"},s.a.createElement("i",{className:"fa fa-search"})," Search")),s.a.createElement(f.a,{type:"text",id:"input1-group2",name:"input1-group2",placeholder:"Username"})))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(f.a,{type:"email",id:"input2-group2",name:"input2-group2",placeholder:"Email"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(k.a,{type:"button",color:"primary"},"Submit"))))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(k.a,{type:"button",color:"primary"},s.a.createElement("i",{className:"fa fa-facebook"}))),s.a.createElement(f.a,{type:"text",id:"input3-group2",name:"input3-group2",placeholder:"Search"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(k.a,{type:"button",color:"primary"},s.a.createElement("i",{className:"fa fa-twitter"})))))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"success"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset")))),s.a.createElement(i.a,{xs:"12",md:"4"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("strong",null,"Dropdowns")," Groups"),s.a.createElement(u.a,null,s.a.createElement(x.a,{className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(S.a,{addonType:"prepend",isOpen:this.state.first,toggle:function(){e.setState({first:!e.state.first})}},s.a.createElement(O.a,{caret:!0,color:"primary"},"Dropdown"),s.a.createElement(I.a,{className:this.state.first?"show":""},s.a.createElement(T.a,null,"Action"),s.a.createElement(T.a,null,"Another Action"),s.a.createElement(T.a,null,"Something else here"),s.a.createElement(T.a,{divider:!0}),s.a.createElement(T.a,null,"Separated link"))),s.a.createElement(f.a,{type:"text",id:"input1-group3",name:"input1-group3",placeholder:"Username"})))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(f.a,{type:"email",id:"input2-group3",name:"input2-group3",placeholder:"Email"}),s.a.createElement(S.a,{addonType:"append",isOpen:this.state.second,toggle:function(){e.setState({second:!e.state.second})}},s.a.createElement(O.a,{caret:!0,color:"primary"},"Dropdown"),s.a.createElement(I.a,{className:this.state.second?"show":""},s.a.createElement(T.a,null,"Action"),s.a.createElement(T.a,null,"Another Action"),s.a.createElement(T.a,null,"Something else here"),s.a.createElement(T.a,{divider:!0}),s.a.createElement(T.a,null,"Separated link")))))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"12"},s.a.createElement(g.a,null,s.a.createElement(S.a,{addonType:"prepend",isOpen:this.state.third,toggle:function(){e.setState({third:!e.state.third})}},s.a.createElement(O.a,{caret:!0,color:"primary"},"Action"),s.a.createElement(I.a,{className:this.state.third?"show":""},s.a.createElement(T.a,null,"Action"),s.a.createElement(T.a,null,"Another Action"),s.a.createElement(T.a,null,"Something else here"),s.a.createElement(T.a,{divider:!0}),s.a.createElement(T.a,null,"Separated link"))),s.a.createElement(f.a,{type:"text",id:"input3-group3",name:"input3-group3",placeholder:".."}),s.a.createElement(S.a,{addonType:"append",isOpen:this.state.fourth,toggle:function(){e.setState({fourth:!e.state.fourth})}},s.a.createElement(O.a,{caret:!0,color:"primary"},"Dropdown"),s.a.createElement(I.a,{className:this.state.fourth?"show":""},s.a.createElement(T.a,null,"Action"),s.a.createElement(T.a,null,"Another Action"),s.a.createElement(T.a,null,"Something else here"),s.a.createElement(T.a,{divider:!0}),s.a.createElement(T.a,null,"Separated link")))))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"success"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(k.a,{type:"reset",size:"sm",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Use the grid for big devices!",s.a.createElement("small",null,s.a.createElement("code",null,".col-lg-*")," ",s.a.createElement("code",null,".col-md-*")," ",s.a.createElement("code",null,".col-sm-*"))),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"8"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-8"})),s.a.createElement(i.a,{md:"4"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-4"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"7"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-7"})),s.a.createElement(i.a,{md:"5"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-5"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"6"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-6"})),s.a.createElement(i.a,{md:"6"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-6"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"5"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-5"})),s.a.createElement(i.a,{md:"7"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-7"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{md:"4"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-4"})),s.a.createElement(i.a,{md:"8"},s.a.createElement(f.a,{type:"text",placeholder:".col-md-8"}))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},"Action"),s.a.createElement(k.a,{size:"sm",color:"danger"},"Action"),s.a.createElement(k.a,{size:"sm",color:"warning"},"Action"),s.a.createElement(k.a,{size:"sm",color:"info"},"Action"),s.a.createElement(k.a,{size:"sm",color:"success"},"Action")))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Input Grid for small devices!",s.a.createElement("small",null,s.a.createElement("code",null,".col-*"))),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{xs:"4"},s.a.createElement(f.a,{type:"text",placeholder:".col-4"})),s.a.createElement(i.a,{xs:"8"},s.a.createElement(f.a,{type:"text",placeholder:".col-8"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{xs:"5"},s.a.createElement(f.a,{type:"text",placeholder:".col-5"})),s.a.createElement(i.a,{xs:"7"},s.a.createElement(f.a,{type:"text",placeholder:".col-7"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{xs:"6"},s.a.createElement(f.a,{type:"text",placeholder:".col-6"})),s.a.createElement(i.a,{xs:"6"},s.a.createElement(f.a,{type:"text",placeholder:".col-6"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{xs:"7"},s.a.createElement(f.a,{type:"text",placeholder:".col-5"})),s.a.createElement(i.a,{xs:"5"},s.a.createElement(f.a,{type:"text",placeholder:".col-5"}))),s.a.createElement(h.a,{row:!0},s.a.createElement(i.a,{xs:"8"},s.a.createElement(f.a,{type:"text",placeholder:".col-8"})),s.a.createElement(i.a,{xs:"4"},s.a.createElement(f.a,{type:"text",placeholder:".col-4"}))))),s.a.createElement(w.a,null,s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},"Action"),s.a.createElement(k.a,{size:"sm",color:"danger"},"Action"),s.a.createElement(k.a,{size:"sm",color:"warning"},"Action"),s.a.createElement(k.a,{size:"sm",color:"info"},"Action"),s.a.createElement(k.a,{size:"sm",color:"success"},"Action"))))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12",sm:"4"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Example Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post"},s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,"Username")),s.a.createElement(f.a,{type:"email",id:"username3",name:"username3",autoComplete:"name"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-user"}))))),s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,"Email")),s.a.createElement(f.a,{type:"email",id:"email3",name:"email3",autoComplete:"username"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-envelope"}))))),s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,"Password")),s.a.createElement(f.a,{type:"password",id:"password3",name:"password3",autoComplete:"current-password"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-asterisk"}))))),s.a.createElement(h.a,{className:"form-actions"},s.a.createElement(k.a,{type:"submit",size:"sm",color:"primary"},"Submit")))))),s.a.createElement(i.a,{xs:"12",sm:"4"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Example Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post"},s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(f.a,{type:"text",id:"username2",name:"username2",placeholder:"Username",autoComplete:"name"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-user"}))))),s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(f.a,{type:"email",id:"email2",name:"email2",placeholder:"Email",autoComplete:"username"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-envelope"}))))),s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(f.a,{type:"password",id:"password2",name:"password2",placeholder:"Password",autoComplete:"current-password"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-asterisk"}))))),s.a.createElement(h.a,{className:"form-actions"},s.a.createElement(k.a,{type:"submit",size:"sm",color:"secondary"},"Submit")))))),s.a.createElement(i.a,{xs:"12",sm:"4"},s.a.createElement(p.a,null,s.a.createElement(d.a,null,"Example Form"),s.a.createElement(u.a,null,s.a.createElement(x.a,{action:"",method:"post"},s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-user"}))),s.a.createElement(f.a,{type:"text",id:"username1",name:"username1",placeholder:"Username",autoComplete:"name"}))),s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-envelope"}))),s.a.createElement(f.a,{type:"email",id:"email1",name:"email1",placeholder:"Email",autoComplete:"username"}))),s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,s.a.createElement("i",{className:"fa fa-asterisk"}))),s.a.createElement(f.a,{type:"password",id:"password1",name:"password1",placeholder:"Password",autoComplete:"current-password"}))),s.a.createElement(h.a,{className:"form-actions"},s.a.createElement(k.a,{type:"submit",size:"sm",color:"success"},"Submit"))))))),s.a.createElement(E.a,null,s.a.createElement(i.a,{xs:"12"},s.a.createElement(C.a,{timeout:this.state.timeout,in:this.state.fadeIn},s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement("i",{className:"fa fa-edit"}),"Form Elements",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement(k.a,{color:"link",className:"card-header-action btn-setting"},s.a.createElement("i",{className:"icon-settings"})),s.a.createElement(k.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle},s.a.createElement("i",{className:"icon-arrow-up"})),s.a.createElement(k.a,{color:"link",className:"card-header-action btn-close",onClick:this.toggleFade},s.a.createElement("i",{className:"icon-close"})))),s.a.createElement(A.a,{isOpen:this.state.collapse,id:"collapseExample"},s.a.createElement(u.a,null,s.a.createElement(x.a,{className:"form-horizontal"},s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"prependedInput"},"Prepended text"),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,{className:"input-prepend"},s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,"@")),s.a.createElement(f.a,{id:"prependedInput",size:"16",type:"text"})),s.a.createElement("p",{className:"help-block"},"Here's some help text"))),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"appendedInput"},"Appended text"),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,null,s.a.createElement(f.a,{id:"appendedInput",size:"16",type:"text"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,".00"))),s.a.createElement("span",{className:"help-block"},"Here's more help text"))),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"appendedPrependedInput"},"Append and prepend"),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,{className:"input-prepend"},s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(z.a,null,"$")),s.a.createElement(f.a,{id:"appendedPrependedInput",size:"16",type:"text"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(z.a,null,".00"))))),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"appendedInputButton"},"Append with button"),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,null,s.a.createElement(f.a,{id:"appendedInputButton",size:"16",type:"text"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(k.a,{color:"secondary"},"Go!"))))),s.a.createElement(h.a,null,s.a.createElement(y.a,{htmlFor:"appendedInputButtons"},"Two-button append"),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,null,s.a.createElement(f.a,{id:"appendedInputButtons",size:"16",type:"text"}),s.a.createElement(F.a,{addonType:"append"},s.a.createElement(k.a,{color:"secondary"},"Search"),s.a.createElement(k.a,{color:"secondary"},"Options"))))),s.a.createElement("div",{className:"form-actions"},s.a.createElement(k.a,{type:"submit",color:"primary"},"Save changes"),s.a.createElement(k.a,{color:"secondary"},"Cancel"))))))))))}}]),t}(o.Component);a.default=P}}]);
//# sourceMappingURL=89.0f47ef16.chunk.js.map