(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[82],{355:function(t,n,a){"use strict";a.r(n);var e=a(22),r=a(23),u=a(25),i=a(24),l=a(2),m=a.n(l),s=a(26),c=a(382),o=a(74),d=a(70),b=a(69),g=a(65),j=a(66),E=a(67),f=a(63),h=a(68),v=a(85),p=a(83),O=a(84),$=a(77),_=a(73),y=a(103),k=a(100),q=a(101),S=function(t){Object(u.a)(a,t);var n=Object(i.a)(a);function a(t){var r;return Object(e.a)(this,a),(r=n.call(this,t)).state={orderItems:[],kode:"",status:"Active",satuan:"",jenis:"",vendor_id:""},r}return Object(r.a)(a,[{key:"displayVendor",value:function(){var t=this.props.getVendorsQuery;return t.loading?m.a.createElement("div",null,"Loading Divisi..."):t.vendors.map((function(t){return m.a.createElement("option",{key:t.id,value:t.id},t.nama)}))}},{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"displayListRequest",value:function(){var t=this.props.getListRequestsQuery;return t.loading?m.a.createElement("div",null,"Loading Divisi..."):t.listrequests.map((function(t){return m.a.createElement("tr",null,m.a.createElement("td",{key:t.id},t.nama_barang),m.a.createElement("td",{key:t.id},t.jumlah_barang),m.a.createElement("td",{key:t.id},t.satuan),m.a.createElement("td",{key:t.id},t.jenis),m.a.createElement("td",{key:t.id},m.a.createElement(b.a,{size:"sm"},"ADD")))}))}},{key:"submitRequest",value:function(t){var n=this,a=this.props.getRequestsQuery,e="";a.requests.map((function(t){return e=t.id,console.log(e)})),this.state.requestItems.map((function(t){return n.props.addListRequestMutation({variables:{nama_barang:t.nama,jumlah_barang:parseInt(t.jumlah),satuan:t.satuan,jenis:t.jenis,request_id:e}})}))}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(g.a,null,m.a.createElement(j.a,null,m.a.createElement(E.a,null,m.a.createElement(f.a,null,"Form Create Order",m.a.createElement(s.Link,{to:"/order/listOrder",className:"float-right mb-0"},m.a.createElement(b.a,{label:!0,color:"danger"},"Batal"))),m.a.createElement(h.a,null,m.a.createElement(v.a,{onSubmit:function(n){t.addItem(n)}},m.a.createElement(g.a,{form:!0},m.a.createElement(j.a,{md:"4","mr-3":!0},m.a.createElement(p.a,{row:!0},m.a.createElement(O.a,{for:"exampleEmail",sm:4},"Kode Order"),m.a.createElement(j.a,{sm:8},m.a.createElement($.a,{type:"text",name:"kode",id:"kode"}))),m.a.createElement(p.a,{row:!0},m.a.createElement(O.a,{for:"exampleEmail",sm:4},"Tanggal Order"),m.a.createElement(j.a,{sm:8},m.a.createElement($.a,{type:"text",name:"tanggal",id:"tanggal"})))),m.a.createElement(j.a,{md:"4"},m.a.createElement(p.a,{row:!0},m.a.createElement(O.a,{htmlFor:"name",sm:4},"Vendor"),m.a.createElement(j.a,{sm:8},m.a.createElement($.a,{type:"select",name:"vendor",id:"vendor"},m.a.createElement("option",null,"Pilih Vendor"),this.displayVendor())))),m.a.createElement(j.a,null,m.a.createElement(p.a,{row:!0},m.a.createElement(O.a,{htmlFor:"name",sm:4},"Status Order"),m.a.createElement(j.a,{sm:8},m.a.createElement($.a,{type:"text",name:"status",id:"status"})))))),m.a.createElement("hr",null),m.a.createElement(g.a,null,m.a.createElement(j.a,null,m.a.createElement("h5",null,"Daftar Barang Order")),m.a.createElement(j.a,null,m.a.createElement(b.a,{onClick:this.toggleModal.bind(this),label:!0,color:"success",size:"sm",className:"float-right mb-0"},"Pilih Barang"))),m.a.createElement("br",null),m.a.createElement(_.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Nama Barang"),m.a.createElement("th",null,"Jumlah"),m.a.createElement("th",null,"Satuan"),m.a.createElement("th",null,"Jenis Barang"),m.a.createElement("th",null,"Aksi"))),m.a.createElement("tbody",null,this.state.orderItems.map((function(t){return m.a.createElement("tr",null,m.a.createElement("td",null,t.nama),m.a.createElement("td",null,t.jumlah),m.a.createElement("td",null,t.satuan),m.a.createElement("td",null,t.jenis))})))),m.a.createElement(b.a,{onClick:function(n){t.submitRequest(n)},color:"primary"},"Submit"))))),m.a.createElement(y.a,{isOpen:this.state.modalIsOpen},m.a.createElement(k.a,null,"Form Tambah Barang"),m.a.createElement(q.a,null,m.a.createElement(v.a,{onSubmit:function(n){t.addItem(n)}},m.a.createElement(p.a,null,m.a.createElement(O.a,{htmlFor:"name"},"Nama Barang"),m.a.createElement($.a,{type:"select",name:"nama",onChange:function(n){return t.setState({nama:n.target.value})},id:"nama",required:!0},m.a.createElement("option",null,"Nama Barang"))),m.a.createElement(p.a,null,m.a.createElement(O.a,{htmlFor:"name"},"Jenis Barang"),m.a.createElement($.a,{type:"select",id:"jenis",onChange:function(n){return t.setState({jenis:n.target.value})},required:!0},m.a.createElement("option",null,"Jenis"),m.a.createElement("option",{value:"Bahan Alam"},"Bahan Alam"),m.a.createElement("option",{value:"Besi"},"Besi"),m.a.createElement("option",{value:"Cat"},"Cat"),m.a.createElement("option",{value:"Kayu"},"Kayu"),m.a.createElement("option",{value:"Keramik"},"Keramik"),m.a.createElement("option",{value:"Material"},"Material"))),m.a.createElement(p.a,null,m.a.createElement(O.a,{htmlFor:"name"},"Satuan"),m.a.createElement($.a,{type:"select",name:"satuan",id:"satuan",onChange:function(n){return t.setState({satuan:n.target.value})}},m.a.createElement("option",null,"Satuan"),m.a.createElement("option",{value:"Kg"},"Kg"),m.a.createElement("option",{value:"Buah"},"Buah"),m.a.createElement("option",{value:"Meter"},"Meter"),m.a.createElement("option",{value:"Lembar"},"Lembar"),m.a.createElement("option",{value:"Liter"},"Liter"),m.a.createElement("option",{value:"Sak"},"Sak"),m.a.createElement("option",{value:"m3"},"m3"))),m.a.createElement(p.a,null,m.a.createElement(O.a,{htmlFor:"name"},"Jumlah Barang"),m.a.createElement($.a,{type:"number",id:"jumlah",onChange:function(n){return t.setState({jumlah:n.target.value})},placeholder:"Jumlah Barang",required:!0})),m.a.createElement(b.a,{type:"submit",color:"primary"},"Tambah"),m.a.createElement(b.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),a}(l.Component);n.default=o(Object(c.a)(d.q,{name:"getVendorsQuery"}),Object(c.a)(d.n,{name:"getOrdersQuery"}),Object(c.a)(d.m,{name:"getListRequestsQuery"}),Object(c.a)(d.f,{name:"addRequestMutation"}),Object(c.a)(d.e,{name:"addListRequestMutation"}))(S)},70:function(t,n,a){"use strict";a.d(n,"q",(function(){return S})),a.d(n,"i",(function(){return I})),a.d(n,"k",(function(){return w})),a.d(n,"p",(function(){return B})),a.d(n,"o",(function(){return H})),a.d(n,"m",(function(){return D})),a.d(n,"n",(function(){return L})),a.d(n,"j",(function(){return R})),a.d(n,"d",(function(){return J})),a.d(n,"b",(function(){return M})),a.d(n,"g",(function(){return F})),a.d(n,"f",(function(){return K})),a.d(n,"e",(function(){return N})),a.d(n,"c",(function(){return x})),a.d(n,"r",(function(){return A})),a.d(n,"t",(function(){return V})),a.d(n,"l",(function(){return C})),a.d(n,"a",(function(){return z})),a.d(n,"h",(function(){return T})),a.d(n,"s",(function(){return Q}));var e=a(78),r=a(30);function u(){var t=Object(e.a)(["\n\tquery($id:ID){\n\t\trequest(id: $id) {\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\tid\n\t\t\tdivisi{\n\t\t\t\tnama\n\t\t\t}\n\t\t\tlistRequest{\n\t\t\t\tnama_barang\n\t\t\t\tjumlah_barang\n\t\t\t\tjenis\n\t\t\t\tsatuan\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);return u=function(){return t},t}function i(){var t=Object(e.a)(["\n\tquery($id: ID){\n\t\tbarang(id: $id) {\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tid\n\t\t}\n\t}\n"]);return i=function(){return t},t}function l(){var t=Object(e.a)(["\n\tquery($username: String!, $password: String!){\n\t\takun(username: $username, password: $password) {\n\t\t\tusername\n\t\t\tpassword\n\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t\tjabatan\n\t\t\t\talamat\n\t\t\t\tnoHp\n\t\t\t\tavatar\n\t\t\t\tid\n\t\t\t\tdivisi{\n\t\t\t\t\tnama\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tid\n\t\t}\n\t}\n"]);return l=function(){return t},t}function m(){var t=Object(e.a)(["\n\tmutation($username:String!, $password:String!, $karyawan_id:ID!){\n\t\taddAkun(username: $username, password: $password, karyawan_id:$karyawan_id){\n\t\t\tusername\n\t\t\tpassword\n\t\t\tid\n\t\t}\n\t}\n"]);return m=function(){return t},t}function s(){var t=Object(e.a)(["\n\tmutation($nama_barang:String!, $jenis_barang:String!, $satuan:String!){\n\t\taddBarang(nama_barang: $nama_barang, jenis_barang: $jenis_barang, satuan:$satuan){\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tid\n\t\t}\n\t}\n"]);return s=function(){return t},t}function c(){var t=Object(e.a)(["\n\tmutation($id:ID!){\n\t\thapusListRequest(id: $id){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tid\n\t\t}\n\t}\n"]);return c=function(){return t},t}function o(){var t=Object(e.a)(["\n\tmutation($id:ID!){\n\t\thapusManyListRequest(id: $id){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tid\n\t\t}\n\t}\n"]);return o=function(){return t},t}function d(){var t=Object(e.a)(["\n\tmutation($nama_barang:String!, $jumlah_barang:Int!, $satuan:String!, $jenis:String!, $request_id: ID!){\n\t\taddListRequest(nama_barang: $nama_barang, jumlah_barang: $jumlah_barang, satuan:$satuan, jenis:$jenis, request_id: $request_id){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tid\n\t\t}\n\t}\n"]);return d=function(){return t},t}function b(){var t=Object(e.a)(["\n\tmutation($id:ID!){\n\t\thapusRequest(id: $id){\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return b=function(){return t},t}function g(){var t=Object(e.a)(["\n\tmutation($tanggal:String!, $status:String!, $divisi_id: ID!){\n\t\taddRequest(tanggal: $tanggal, status: $status, divisi_id: $divisi_id){\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return g=function(){return t},t}function j(){var t=Object(e.a)(["\n\tmutation($id:ID!){\n\t\thapusDivisi(id: $id){\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t}\n"]);return j=function(){return t},t}function E(){var t=Object(e.a)(["\n\tmutation($nama:String!){\n\t\taddDivisi(nama: $nama){\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t}\n"]);return E=function(){return t},t}function f(){var t=Object(e.a)(["\n\tmutation($nama:String!, $jenis_usaha:String!){\n\t\taddVendor(nama: $nama, jenis_usaha: $jenis_usaha){\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t\tid\n\t\t}\n\t}\n"]);return f=function(){return t},t}function h(){var t=Object(e.a)(["\n\tmutation($nama:String!, $jumlah:Int!){\n\t\taddAlat(nama: $nama, jumlah: $jumlah){\n\t\t\tnama\n\t\t\tjumlah\n\t\t\tid\n\t\t}\n\t}\n"]);return h=function(){return t},t}function v(){var t=Object(e.a)(["\n{\n\tkaryawans {\n\t\tnama\n\t\tjabatan\n\t\talamat\n\t\tnoHp\n\t\tavatar\n\t\tdivisi{\n\t\t\tnama\n\t\t}\n\t\tid\n\t}\n}\n"]);return v=function(){return t},t}function p(){var t=Object(e.a)(["\n{\n\tbarangs {\n\t\tnama_barang\n\t\tjenis_barang\n\t\tsatuan\n\t\tid\n\t}\n}\n"]);return p=function(){return t},t}function O(){var t=Object(e.a)(["\n{\n\torders {\n\t\tkode\n\t\ttanggal\n\t\tjenis\n\t\tstatus\n\t\tid\n\t\tvendor{\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t}\n\t}\n}\n"]);return O=function(){return t},t}function $(){var t=Object(e.a)(["\n{\n\tlistrequests {\n\t\tnama_barang\n\t\tjumlah_barang\n\t\tjenis\n\t\tsatuan\n\t\tid\n\t\trequest{\n\t\t\tstatus\n\t\t\ttanggal\n\t\t\tdivisi{\n\t\t\t\tnama\n\t\t\t}\n\t\t}\n\t}\n}\n"]);return $=function(){return t},t}function _(){var t=Object(e.a)(["\n{\n\trequests {\n\t\ttanggal\n\t\tstatus\n\t\tid\n\t\tdivisi{\n\t\t\tnama\n\t\t}\n\t}\n}\n"]);return _=function(){return t},t}function y(){var t=Object(e.a)(["\n{\n\tdivisis {\n\t\tnama\n\t\tid\n\t}\n}\n"]);return y=function(){return t},t}function k(){var t=Object(e.a)(["\n{\n\talats {\n\t\tnama\n\t\tjumlah\n\t\tid\n\t}\n}\n"]);return k=function(){return t},t}function q(){var t=Object(e.a)(["\n{\n\tvendors {\n\t\tnama\n\t\tjenis_usaha\n\t\tid\n\t}\n}\n"]);return q=function(){return t},t}var S=Object(r.b)(q()),I=Object(r.b)(k()),w=Object(r.b)(y()),B=Object(r.b)(_()),D=Object(r.b)($()),L=Object(r.b)(O()),R=Object(r.b)(p()),C=Object(r.b)(v()),M=Object(r.b)(h()),F=Object(r.b)(f()),J=Object(r.b)(E()),A=Object(r.b)(j()),K=Object(r.b)(g()),V=Object(r.b)(b()),N=Object(r.b)(d()),Q=Object(r.b)(o()),x=(Object(r.b)(c()),Object(r.b)(s())),z=Object(r.b)(m()),T=Object(r.b)(l()),H=(Object(r.b)(i()),Object(r.b)(u()))}}]);
//# sourceMappingURL=82.2e1f2e1d.chunk.js.map