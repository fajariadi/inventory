(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[32],{108:function(e,a,t){"use strict";var n=t(4),r=t(13),l=t(2),s=t.n(l),i=t(14),c=t.n(i),m=t(59),o=t.n(m),u=t(60),d={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.m,responsiveTag:u.m,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},g=function(e){var a=e.className,t=e.cssModule,l=e.size,i=e.bordered,c=e.borderless,m=e.striped,d=e.dark,g=e.hover,p=e.responsive,b=e.tag,E=e.responsiveTag,f=e.innerRef,v=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(u.i)(o()(a,"table",!!l&&"table-"+l,!!i&&"table-bordered",!!c&&"table-borderless",!!m&&"table-striped",!!d&&"table-dark",!!g&&"table-hover"),t),y=s.a.createElement(b,Object(n.a)({},v,{ref:f,className:h}));if(p){var j=Object(u.i)(!0===p?"table-responsive":"table-responsive-"+p,t);return s.a.createElement(E,{className:j},y)}return y};g.propTypes=d,g.defaultProps={tag:"table",responsiveTag:"div"},a.a=g},414:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t(24),l=t(26),s=t(25),i=t(2),c=t.n(i),m=t(421),o=t(27),u=t(72),d=t(88),g=t.n(d),p=t(70),b=t(76),E=t(204),f=t(109),v=t(110),h=t(392),y=t(393),j=t(168),k=t(108),O=t(113),B=t(79),N=t(84),P=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={nama:"",purchase_id:"",jumlah:0,modalIsOpen:!1,harga:0,sewa:0},r}return Object(r.a)(t,[{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"displayNewPengeluaranBarang",value:function(){var e=this.props.getPengeluaranBarangsQuery,a="",t="",n="";return e.pengeluaranBarangs.map((function(e){return a=e.tanggal,t=e.kode,n=e.akun.karyawan.nama})),c.a.createElement(b.a,null,c.a.createElement(E.a,{className:"form-horizontal"},c.a.createElement(f.a,null,c.a.createElement(v.a,{md:"4"},c.a.createElement(h.a,{row:!0},c.a.createElement(v.a,{md:"6"},c.a.createElement(y.a,{htmlFor:"name"},"Kode Pengeluaran Barang")),c.a.createElement(v.a,{md:"6"},c.a.createElement(j.a,{type:"text",name:"kode",id:"kode",value:t,disabled:!0})))),c.a.createElement(v.a,{md:"4"},c.a.createElement(h.a,{row:!0},c.a.createElement(v.a,{md:"3"},c.a.createElement(y.a,{htmlFor:"name"},"Tanggal")),c.a.createElement(v.a,{md:"9"},c.a.createElement(j.a,{type:"text",name:"kode",id:"kode",value:a,disabled:!0})))),c.a.createElement(v.a,{md:"4"},c.a.createElement(h.a,{row:!0},c.a.createElement(v.a,{md:"3"},c.a.createElement(y.a,{htmlFor:"name"},"Dikeluarkan Oleh")),c.a.createElement(v.a,{md:"9"},c.a.createElement(j.a,{type:"text",name:"kode",id:"kode",value:n,disabled:!0})))))))}},{key:"displayPermintaanBarangDetail",value:function(){var e=this.props.data.permintaanBarang;if(e)return c.a.createElement(b.a,null,c.a.createElement(E.a,{className:"form-horizontal"},c.a.createElement(f.a,null,c.a.createElement(v.a,{md:"4"},c.a.createElement(h.a,{row:!0},c.a.createElement(v.a,{md:"6"},c.a.createElement(y.a,{htmlFor:"name"},"Kode Permintaan Barang")),c.a.createElement(v.a,{md:"6"},c.a.createElement(j.a,{type:"text",name:"kode",id:"kode",value:e.kode,disabled:!0})))),c.a.createElement(v.a,{md:"4"},c.a.createElement(h.a,{row:!0},c.a.createElement(v.a,{md:"3"},c.a.createElement(y.a,{htmlFor:"name"},"Penerima")),c.a.createElement(v.a,{md:"9"},c.a.createElement(j.a,{type:"text",name:"kode",id:"kode",value:e.akun.karyawan.nama,disabled:!0})))))),c.a.createElement("hr",null),c.a.createElement(k.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},c.a.createElement("thead",{align:"center"},c.a.createElement("tr",null,c.a.createElement("th",null,"Nama Barang"),c.a.createElement("th",null,"Satuan"),c.a.createElement("th",null,"Jumlah"))),c.a.createElement("tbody",{align:"center"},e.listRequest.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.nama_barang),c.a.createElement("td",null,e.satuan),c.a.createElement("td",null,e.jumlah_barang))})))),c.a.createElement("div",{align:"center"},c.a.createElement(o.Link,{to:"/pengeluaranBarang/pengeluaranBarang"},c.a.createElement(O.a,{onClick:this.Submit.bind(this),color:"primary"},"Submit"))))}},{key:"Submit",value:function(){var e=this;this.props.data.permintaanBarang.listRequest.map((function(a){if("Perkakas"!==a.jenis){var t=e.props.getPersediaanBarangsQuery,n=0,r="";t.persediaanBarangs.map((function(e){a.nama_barang===e.barang.nama_barang&&(r=e.barang.id,n=e.jumlah)})),e.props.updateJumlahPersediaanBarang({variables:{barang_id:r,jumlah:parseInt(n)-parseInt(a.jumlah_barang)},refetchQueries:[{query:p.E}]})}else{t=e.props.getAllInventarisQuery;var l="";t.allInventaris.map((function(e){a.nama_barang===e.barang.nama_barang&&(l=e.barang.id)})),e.props.updateJumlahDipakaiInventaris({variables:{barang_id:l,jumlah_dipakai:parseInt(a.jumlah_barang)},refetchQueries:[{query:p.p}]})}})),this.props.updateStatusDonePermintaanBarang({variables:{id:this.props.match.params.id,status:"Done"},refetchQueries:[{query:p.D}]}),g.a.fire({position:"center",icon:"success",title:"Pengeluaran Barang Berhasil Disimpan",showConfirmButton:!0})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(f.a,null,c.a.createElement(v.a,null,c.a.createElement(B.a,null,c.a.createElement(N.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),"Form Pengeluaran Barang",c.a.createElement(o.Link,{to:"/pengeluaranBarang/pengeluaranBarang",className:"float-right mb-0"},c.a.createElement(O.a,{color:"danger"},"Batal"))),this.displayNewPengeluaranBarang(),this.displayPermintaanBarangDetail()))))}}]),t}(i.Component);a.default=u(Object(m.a)(p.C,{options:function(e){return{variables:{id:e.match.params.id}}}}),Object(m.a)(p.B,{name:"getPengeluaranBarangsQuery"}),Object(m.a)(p.D,{name:"getPermintaanBarangsQuery"}),Object(m.a)(p.E,{name:"getPersediaanBarangsQuery"}),Object(m.a)(p.v,{name:"getListRequestsQuery"}),Object(m.a)(p.r,{name:"getBarangsQuery"}),Object(m.a)(p.p,{name:"getAllInventarisQuery"}),Object(m.a)(p.i,{name:"addPersediaanBarang"}),Object(m.a)(p.Y,{name:"updateJumlahPersediaanBarang"}),Object(m.a)(p.V,{name:"updateJumlahDipakaiInventaris"}),Object(m.a)(p.ab,{name:"updateStatusDonePermintaanBarang"}))(P)},76:function(e,a,t){"use strict";var n=t(4),r=t(13),l=t(2),s=t.n(l),i=t(14),c=t.n(i),m=t(59),o=t.n(m),u=t(60),d={tag:u.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,i=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),m=Object(u.i)(o()(a,"card-body"),t);return s.a.createElement(i,Object(n.a)({},c,{className:m,ref:l}))};g.propTypes=d,g.defaultProps={tag:"div"},a.a=g},79:function(e,a,t){"use strict";var n=t(4),r=t(13),l=t(2),s=t.n(l),i=t(14),c=t.n(i),m=t(59),o=t.n(m),u=t(60),d={tag:u.m,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var a=e.className,t=e.cssModule,l=e.color,i=e.body,c=e.inverse,m=e.outline,d=e.tag,g=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.i)(o()(a,"card",!!c&&"text-white",!!i&&"card-body",!!l&&(m?"border":"bg")+"-"+l),t);return s.a.createElement(d,Object(n.a)({},p,{className:b,ref:g}))};g.propTypes=d,g.defaultProps={tag:"div"},a.a=g},84:function(e,a,t){"use strict";var n=t(4),r=t(13),l=t(2),s=t.n(l),i=t(14),c=t.n(i),m=t(59),o=t.n(m),u=t(60),d={tag:u.m,className:c.a.string,cssModule:c.a.object},g=function(e){var a=e.className,t=e.cssModule,l=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.i)(o()(a,"card-header"),t);return s.a.createElement(l,Object(n.a)({},i,{className:c}))};g.propTypes=d,g.defaultProps={tag:"div"},a.a=g}}]);
//# sourceMappingURL=32.afea356f.chunk.js.map