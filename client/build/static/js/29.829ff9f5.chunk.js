(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[29],{300:function(e,a,t){"use strict";t.r(a);var r=t(85),n=t(22),s=t(23),i=t(25),l=t(24),u=t(2),c=t.n(u),o=t(320),m=t(64),d=t(67),h=t.n(d),p=t(62),b=t(119),g=t(69),f=t(70),j=t(292),v=t(293),O=t(91),E=t(74),y=t(65),P=t(71),_=t(75),k=t(66),I=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={orderItems:[],kode:"",status:"Active",satuan:"",jenis:"",orderid:"",jenis_usaha:""},r}return Object(s.a)(t,[{key:"displayNewPurchaseOrder",value:function(){var e=this,a=this.props.getPurchaseOrdersQuery,t="",r="",n="",s="",i="";return a.purchaseOrders.map((function(e){return t=e.tanggal,r=e.status,n=e.kode,s=e.akun.karyawan.nama,i=e.id})),c.a.createElement("div",null,c.a.createElement(b.a,{className:"form-horizontal"},c.a.createElement(g.a,null,c.a.createElement(f.a,{md:"4"},c.a.createElement(j.a,{row:!0},c.a.createElement(f.a,{md:"4"},c.a.createElement(v.a,{htmlFor:"name"},"Kode Purchase Order")),c.a.createElement(f.a,{md:"8"},c.a.createElement(O.a,{type:"text",name:"kode",id:"kode",value:n,disabled:!0})))),c.a.createElement(f.a,{md:"4"},c.a.createElement(j.a,{row:!0},c.a.createElement(f.a,{md:"4"},c.a.createElement(v.a,{htmlFor:"name"},"Status")),c.a.createElement(f.a,{md:"8"},c.a.createElement(O.a,{type:"text",name:"kode",id:"kode",value:r,disabled:!0}))))),c.a.createElement(g.a,null,c.a.createElement(f.a,{md:"4"},c.a.createElement(j.a,{row:!0},c.a.createElement(f.a,{md:"4"},c.a.createElement(v.a,{htmlFor:"name"},"Dibuat Oleh")),c.a.createElement(f.a,{md:"8"},c.a.createElement(O.a,{type:"text",name:"kode",id:"kode",value:s,disabled:!0})))),c.a.createElement(f.a,{md:"4"},c.a.createElement(j.a,{row:!0},c.a.createElement(f.a,{md:"4"},c.a.createElement(v.a,{htmlFor:"name"},"Tanggal")),c.a.createElement(f.a,{md:"8"},c.a.createElement(O.a,{type:"text",name:"kode",id:"kode",value:t,disabled:!0})))),c.a.createElement(f.a,{md:"4"},c.a.createElement(j.a,{row:!0},c.a.createElement(f.a,{md:"4"},c.a.createElement(v.a,{htmlFor:"name"},"Vendor")),c.a.createElement(f.a,{md:"8"},c.a.createElement(O.a,{type:"select",name:"vendor",id:"vendor",onChange:function(a){return e.updateVendorPurchaseOrder(i,a.target.value)}},c.a.createElement("option",null,"Pilih Vendor"),this.displayVendor())))))))}},{key:"updateVendorPurchaseOrder",value:function(e,a){var t=a.substring(0,24),r=a.substring(25);console.log(t),console.log(r),this.setState({jenis_usaha:r}),this.setState({orderid:e}),this.props.updateVendorPurchaseOrderMutation({variables:{id:e,vendor_id:t},refetchQueries:[{query:p.G}]})}},{key:"displayListPermintaanBarang",value:function(){var e=this,a=[];if(""!==this.state.jenis_usaha){var t=this.props.getListRequestsQuery;return"{}"!==JSON.stringify(t)?t.listrequests.map((function(t){if(t.jenis===e.state.jenis_usaha&&"Active"===t.status){var n=0,s=!1,i=0;if(0===a.length){n=parseInt(t.jumlah_barang)*parseInt(t.harga),n;var l={nama:t.nama_barang,jumlah:t.jumlah_barang,satuan:t.satuan,jenis:t.jenis,harga:n};a.push(l)}else if(a.map((function(e){e.nama===t.nama_barang&&(s=!0,i=parseInt(e.jumlah)+parseInt(t.jumlah_barang))})),!0===s){var u=0;n=parseInt(t.jumlah_barang)*parseInt(t.harga),a.map((function(e){e.nama===t.nama_barang&&(u=n+e.harga)})),n,a=(a=a.map((function(e){return e.nama===t.nama_barang?Object(r.a)(Object(r.a)({},e),{},{jumlah:i}):e}))).map((function(e){return e.nama===t.nama_barang?Object(r.a)(Object(r.a)({},e),{},{harga:u}):e}))}else{n=parseInt(t.jumlah_barang)*parseInt(t.harga),n;var o={nama:t.nama_barang,jumlah:t.jumlah_barang,satuan:t.satuan,jenis:t.jenis,harga:n};a.push(o)}return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.nama_barang),c.a.createElement("td",null,t.satuan),c.a.createElement("td",null,t.jumlah_barang),c.a.createElement("td",null,t.harga),c.a.createElement("td",null,n))}})):c.a.createElement("div",{align:"center"},"Tidak Ada Barang yang Perlu Dibeli")}return c.a.createElement("div",{align:"center"},"Pilih Vendor")}},{key:"displayVendor",value:function(){var e=this.props.getVendorsQuery;return e.loading?c.a.createElement("div",null,"Loading Divisi..."):e.vendors.map((function(e){return c.a.createElement("option",{key:e.id,value:[e.id,e.jenis_usaha]},e.nama)}))}},{key:"onDelete",value:function(){var e=this.props.getPurchaseOrdersQuery,a="";e.purchaseOrders.map((function(e){return a=e.id})),this.props.hapusPurchaseOrderMutation({variables:{id:a},refetchQueries:[{query:p.G}]}),this.props.history.push("/purchaseOrder/purchaseOrder")}},{key:"createListPurchaseOrder",value:function(){var e=this,a=[],t=0;if(""!==this.state.jenis_usaha){var n=this.props.getListRequestsQuery;if("{}"!==JSON.stringify(n)&&n.listrequests.map((function(n){if(n.jenis===e.state.jenis_usaha&&"Active"===n.status){var s=0,i=!1,l=0;if(0===a.length){s=parseInt(n.jumlah_barang)*parseInt(n.harga),t+=s;var u={nama:n.nama_barang,jumlah:n.jumlah_barang,satuan:n.satuan,jenis:n.jenis,harga:s};a.push(u)}else if(a.map((function(e){e.nama===n.nama_barang&&(i=!0,l=parseInt(e.jumlah)+parseInt(n.jumlah_barang))})),!0===i){var c=0;s=parseInt(n.jumlah_barang)*parseInt(n.harga),a.map((function(e){e.nama===n.nama_barang&&(c=s+e.harga)})),t+=s,a=(a=a.map((function(e){return e.nama===n.nama_barang?Object(r.a)(Object(r.a)({},e),{},{jumlah:l}):e}))).map((function(e){return e.nama===n.nama_barang?Object(r.a)(Object(r.a)({},e),{},{harga:c}):e}))}else{s=parseInt(n.jumlah_barang)*parseInt(n.harga),t+=s;var o={nama:n.nama_barang,jumlah:n.jumlah_barang,satuan:n.satuan,jenis:n.jenis,harga:s};a.push(o)}}})),0===a.length)h.a.fire({position:"center",icon:"error",title:"Tidak Ada Daftar Barang",text:"Silahkan Pilih Vendor Lain",showConfirmButton:!0});else{n=this.props.getPurchaseOrdersQuery;var s="";n.purchaseOrders.map((function(e){return s=e.id})),this.props.updateTotalHargaPurchaseOrder({variables:{id:s,total_harga:t},refetchQueries:[{query:p.G}]}),a.map((function(a){return e.props.updateAllStatusListRequest({variables:{nama:a.nama,status:"Proses",order_id:s},refetchQueries:[{query:p.G}]})})),a.map((function(a){return e.props.addListItemPurchaseOrder({variables:{nama_barang:a.nama,jumlah_barang:parseInt(a.jumlah),satuan:a.satuan,jenis:a.jenis,purchaseOrder_id:s,harga:parseInt(a.harga),status:"Waiting"},refetchQueries:[{query:p.G},{query:p.v}]})})),this.props.history.push("/purchaseOrder/purchaseOrder"),h.a.fire({position:"center",icon:"success",title:"Pembelian Barang Berhasil Disimpan",showConfirmButton:!0})}}else h.a.fire({position:"center",icon:"error",title:"Pembelian Barang Gagal",text:"Silahkan Pilih Vendor Lain",showConfirmButton:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(E.a,null,c.a.createElement(y.a,null,"Form Buat Pembelian Barang",c.a.createElement(P.a,{color:"danger",onClick:this.onDelete.bind(this),className:"float-right mb-0"},"Batal")),c.a.createElement(_.a,null,this.displayNewPurchaseOrder(),c.a.createElement("hr",null),c.a.createElement(g.a,{align:"center"},c.a.createElement("h5",null,"Daftar Kebutuhan Barang")),c.a.createElement(k.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},c.a.createElement("thead",{align:"center"},c.a.createElement("tr",null,c.a.createElement("th",null,"Nama Barang"),c.a.createElement("th",null,"Satuan"),c.a.createElement("th",null,"Jumlah"),c.a.createElement("th",null,"Harga"),c.a.createElement("th",null,"Total"))),c.a.createElement("tbody",{align:"center"},this.displayListPermintaanBarang())),c.a.createElement("div",{align:"center"},c.a.createElement(P.a,{onClick:function(a){e.createListPurchaseOrder(a)},color:"primary"},"Submit")))))))}}]),t}(u.Component);a.default=m(Object(o.a)(p.I,{name:"getVendorsQuery"}),Object(o.a)(p.G,{name:"getPurchaseOrdersQuery"}),Object(o.a)(p.v,{name:"getListRequestsQuery"}),Object(o.a)(p.S,{name:"updateAllStatusListRequest"}),Object(o.a)(p.jb,{name:"updateVendorPurchaseOrderMutation"}),Object(o.a)(p.c,{name:"addListItemPurchaseOrder"}),Object(o.a)(p.Q,{name:"hapusPurchaseOrderMutation"}),Object(o.a)(p.hb,{name:"updateTotalHargaPurchaseOrder"}))(I)},65:function(e,a,t){"use strict";var r=t(4),n=t(13),s=t(2),i=t.n(s),l=t(14),u=t.n(l),c=t(59),o=t.n(c),m=t(60),d={tag:m.m,className:u.a.string,cssModule:u.a.object},h=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),u=Object(m.i)(o()(a,"card-header"),t);return i.a.createElement(s,Object(r.a)({},l,{className:u}))};h.propTypes=d,h.defaultProps={tag:"div"},a.a=h},66:function(e,a,t){"use strict";var r=t(4),n=t(13),s=t(2),i=t.n(s),l=t(14),u=t.n(l),c=t(59),o=t.n(c),m=t(60),d={className:u.a.string,cssModule:u.a.object,size:u.a.string,bordered:u.a.bool,borderless:u.a.bool,striped:u.a.bool,dark:u.a.bool,hover:u.a.bool,responsive:u.a.oneOfType([u.a.bool,u.a.string]),tag:m.m,responsiveTag:m.m,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])},h=function(e){var a=e.className,t=e.cssModule,s=e.size,l=e.bordered,u=e.borderless,c=e.striped,d=e.dark,h=e.hover,p=e.responsive,b=e.tag,g=e.responsiveTag,f=e.innerRef,j=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(m.i)(o()(a,"table",!!s&&"table-"+s,!!l&&"table-bordered",!!u&&"table-borderless",!!c&&"table-striped",!!d&&"table-dark",!!h&&"table-hover"),t),O=i.a.createElement(b,Object(r.a)({},j,{ref:f,className:v}));if(p){var E=Object(m.i)(!0===p?"table-responsive":"table-responsive-"+p,t);return i.a.createElement(g,{className:E},O)}return O};h.propTypes=d,h.defaultProps={tag:"table",responsiveTag:"div"},a.a=h},79:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return r}))},85:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(79);function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}}}]);
//# sourceMappingURL=29.829ff9f5.chunk.js.map