(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[2],{70:function(t,n,a){"use strict";a.d(n,"I",(function(){return Rt})),a.d(n,"s",(function(){return Tt})),a.d(n,"D",(function(){return Lt})),a.d(n,"C",(function(){return ln})),a.d(n,"v",(function(){return Jt})),a.d(n,"r",(function(){return Kt})),a.d(n,"q",(function(){return jn})),a.d(n,"j",(function(){return nn})),a.d(n,"k",(function(){return Et})),a.d(n,"h",(function(){return Nt})),a.d(n,"d",(function(){return Wt})),a.d(n,"b",(function(){return Yt})),a.d(n,"P",(function(){return Qt})),a.d(n,"J",(function(){return Zt})),a.d(n,"R",(function(){return Gt})),a.d(n,"Q",(function(){return an})),a.d(n,"t",(function(){return Vt})),a.d(n,"a",(function(){return tn})),a.d(n,"n",(function(){return bn})),a.d(n,"o",(function(){return Ht})),a.d(n,"H",(function(){return $n})),a.d(n,"L",(function(){return Xt})),a.d(n,"gb",(function(){return vn})),a.d(n,"ab",(function(){return In})),a.d(n,"db",(function(){return wn})),a.d(n,"G",(function(){return Mt})),a.d(n,"u",(function(){return At})),a.d(n,"F",(function(){return _n})),a.d(n,"kb",(function(){return qn})),a.d(n,"T",(function(){return kn})),a.d(n,"jb",(function(){return pn})),a.d(n,"S",(function(){return yn})),a.d(n,"c",(function(){return rn})),a.d(n,"K",(function(){return cn})),a.d(n,"hb",(function(){return Sn})),a.d(n,"bb",(function(){return Dn})),a.d(n,"cb",(function(){return Bn})),a.d(n,"eb",(function(){return Pn})),a.d(n,"E",(function(){return Ut})),a.d(n,"i",(function(){return un})),a.d(n,"Y",(function(){return Tn})),a.d(n,"p",(function(){return xt})),a.d(n,"X",(function(){return Ln})),a.d(n,"V",(function(){return Vn})),a.d(n,"W",(function(){return Kn})),a.d(n,"y",(function(){return fn})),a.d(n,"z",(function(){return zt})),a.d(n,"f",(function(){return en})),a.d(n,"N",(function(){return on})),a.d(n,"A",(function(){return On})),a.d(n,"B",(function(){return Ct})),a.d(n,"g",(function(){return dn})),a.d(n,"O",(function(){return mn})),a.d(n,"w",(function(){return hn})),a.d(n,"x",(function(){return Ft})),a.d(n,"e",(function(){return sn})),a.d(n,"M",(function(){return gn})),a.d(n,"l",(function(){return Mn})),a.d(n,"m",(function(){return Fn})),a.d(n,"lb",(function(){return Un})),a.d(n,"fb",(function(){return Hn})),a.d(n,"Z",(function(){return Jn})),a.d(n,"ib",(function(){return An})),a.d(n,"U",(function(){return Rn}));var r=a(107),i=a(30);function u(){var t=Object(r.a)(["\n\tmutation($foto: Upload!){\n\t\tuploadFoto(foto: $foto){\n\t\t\turl\n\t\t}\n\t}\n"]);return u=function(){return t},t}function e(){var t=Object(r.a)(["\n\tmutation($id : ID, $nama : String!,  $tanggal_lahir : String!, $jenis_kelamin : String!, $agama : String!, $tempat_lahir : String!, $alamat : String!, $no_kontak : String!, $email : String! ){\n\t\teditBiodataKaryawan(id:$id, nama:$nama, tanggal_lahir:$tanggal_lahir, jenis_kelamin:$jenis_kelamin, agama:$agama, tempat_lahir:$tempat_lahir, alamat:$alamat, no_kontak:$no_kontak, email:$email){\n\t\t\tid\n\t\t\ttempat_lahir\n\t\t\ttanggal_lahir\n\t\t\tjenis_kelamin\n\t\t\tagama\n\t\t\tnama\n\t\t\talamat \n\t\t\tno_kontak\n\t\t\temail\n\t\t}\n\t}\n"]);return e=function(){return t},t}function d(){var t=Object(r.a)(["\n\tmutation($id : ID, $username : String!, $password : String! ){\n\t\teditAkun(id:$id, username:$username, password:$password){\n\t\t\tid\n\t\t\tusername\n\t\t\tpassword\n\t\t}\n\t}\n"]);return d=function(){return t},t}function s(){var t=Object(r.a)(["\n\tmutation($id : ID, $jumlah_diperbaiki : Int! ){\n\t\tupdateJumlahDiperbaikiInventaris(id:$id, jumlah_diperbaiki:$jumlah_diperbaiki){\n\t\t\tid\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t}\n\t}\n"]);return s=function(){return t},t}function c(){var t=Object(r.a)(["\n\tmutation($id : ID, $jumlah_dipakai : Int! ){\n\t\tupdateJumlahDipakaiInventaris(id:$id, jumlah_dipakai:$jumlah_dipakai,){\n\t\t\tid\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t}\n\t}\n"]);return c=function(){return t},t}function o(){var t=Object(r.a)(["\n\tmutation($id : ID, $status:String!){\n\t\tupdateStatusPemeliharaan(id:$id, status:$status){\n\t\t\tid\n\t\t\tjumlah\n\t\t\tstatus\n\t\t}\n\t}\n"]);return o=function(){return t},t}function m(){var t=Object(r.a)(["\n\tmutation($id : ID, $total_harga : Int! ){\n\t\tupdateTotalHargaPurchaseOrder(id:$id, total_harga:$total_harga){\n\t\t\tid\n\t\t\tstatus\n\t\t\ttotal_harga\n\t\t}\n\t}\n"]);return m=function(){return t},t}function g(){var t=Object(r.a)(["\n\tmutation($id : ID, $jumlah : Int!, $jumlah_diperbaiki: Int! ){\n\t\tupdateRusakInventaris(id:$id, jumlah:$jumlah, jumlah_diperbaiki:$jumlah_diperbaiki){\n\t\t\tid\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t}\n\t}\n"]);return g=function(){return t},t}function b(){var t=Object(r.a)(["\n\tmutation($barang_id : ID, $jumlah : Int! ){\n\t\tupdateJumlahInventaris(barang_id:$barang_id, jumlah:$jumlah,){\n\t\t\tid\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t}\n\t}\n"]);return b=function(){return t},t}function j(){var t=Object(r.a)(["\n\tmutation($id : ID, $jumlah : Int!, $status : String!, $jumlah_diperbaiki:Int!, $jumlah_dipakai:Int! ){\n\t\tupdateInventaris(id:$id, jumlah:$jumlah, status:$status, jumlah_diperbaiki:$jumlah_diperbaiki, jumlah_dipakai:$jumlah_dipakai){\n\t\t\tid\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t}\n\t}\n"]);return j=function(){return t},t}function $(){var t=Object(r.a)(["\n\tmutation($barang_id : ID, $jumlah : Int! ){\n\t\tupdateJumlahPersediaanBarang(barang_id:$barang_id, jumlah:$jumlah){\n\t\t\tid\n\t\t\tjumlah\n\t\t}\n\t} \n"]);return $=function(){return t},t}function l(){var t=Object(r.a)(["\n\tmutation($kode : String, $divisi_id : String! ){\n\t\tupdateDivisiPermintaanBarang(kode:$kode, divisi_id:$divisi_id){\n\t\t\tid\n\t\t}\n\t}\n"]);return l=function(){return t},t}function _(){var t=Object(r.a)(["\n\tmutation($id : ID, $vendor_id : String! ){\n\t\tupdateVendorPurchaseOrder(id:$id, vendor_id:$vendor_id){\n\t\t\tid\n\t\t}\n\t}\n"]);return _=function(){return t},t}function h(){var t=Object(r.a)(["\n\tmutation($purchaseOrder_id: ID, $status : String! ){\n\t\tupdateStatusListItemPurchaseOrder(purchaseOrder_id:$purchaseOrder_id, status:$status){\n\t\t\tstatus\n\t\t}\n\t}\n"]);return h=function(){return t},t}function f(){var t=Object(r.a)(["\n\tmutation( $order_id: ID, $status : String!,){\n\t\tupdateStatusListRequestOnOrder(order_id:$order_id, status:$status ){\n\t\t\tstatus\n\t\t}\n\t}\n"]);return f=function(){return t},t}function O(){var t=Object(r.a)(["\n\tmutation($nama : String!, $status : String!, $order_id: ID){\n\t\tupdateAllStatusListRequest(nama:$nama, status:$status, order_id:$order_id){\n\t\t\tid\n\t\t\tstatus\n\t\t}\n\t}\n"]);return O=function(){return t},t}function k(){var t=Object(r.a)(["\n\tmutation($id : ID, $status : String! ){\n\t\tupdateStatusListRequest(id:$id, status:$status){\n\t\t\tid\n\t\t\tstatus\n\t\t}\n\t}\n"]);return k=function(){return t},t}function p(){var t=Object(r.a)(["\n\tmutation($id : ID, $status : String!){\n\t\tupdateStatusDonePurchaseOrder(id:$id, status:$status){\n\t\t\tid\n\t\t\tstatus\n\t\t}\n\t}\n"]);return p=function(){return t},t}function v(){var t=Object(r.a)(["\n\tmutation($id : ID, $status : String!, $tanggal_setuju : String!){\n\t\tupdateStatusPurchaseOrder(id:$id, status:$status, tanggal_setuju:$tanggal_setuju){\n\t\t\tid\n\t\t\tstatus\n\t\t\ttanggal_setuju\n\t\t}\n\t}\n"]);return v=function(){return t},t}function I(){var t=Object(r.a)(["\n\tmutation($id : ID, $status : String!){\n\t\tupdateStatusDonePermintaanBarang(id:$id, status:$status){\n\t\t\tid\n\t\t\tstatus\n\t\t}\n\t}\n"]);return I=function(){return t},t}function S(){var t=Object(r.a)(["\n\tmutation($id : ID, $status : String!, $tanggal_setuju : String! ){\n\t\tupdateStatusPermintaanBarang(id:$id, status:$status, tanggal_setuju:$tanggal_setuju){\n\t\t\tid\n\t\t\tstatus\n\t\t\ttanggal_setuju\n\t\t}\n\t}\n"]);return S=function(){return t},t}function D(){var t=Object(r.a)(["\n\tmutation($id : ID, $nama : String!, $jenis_usaha: String!, $alamat : String !, $email : String!, $noTlp: String! ){\n\t\tupdateVendor(id:$id, nama:$nama, jenis_usaha:$jenis_usaha, alamat:$alamat, email:$email, noTlp:$noTlp){\n\t\t\tid\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t\talamat\n\t\t\temail\n\t\t\tnoTlp\n\t\t}\n\t}\n"]);return D=function(){return t},t}function w(){var t=Object(r.a)(["\n\tmutation($id : ID, $nama : String!, $jumlah : Int!, $harga : Int!, $sewa : Int!){\n\t\tupdatePeralatan(id:$id, nama:$nama, jumlah:$jumlah, harga:$harga, sewa:$sewa){\n\t\t\tid\n\t\t\tnama\n\t\t\tjumlah\n\t\t\tharga\n\t\t\tsewa\n\t\t}\n\t}\n"]);return w=function(){return t},t}function y(){var t=Object(r.a)(["\n\tmutation($id : ID, $nama_barang : String!, $jenis_barang : String!, $satuan : String !, $harga : Int! ){\n\t\tupdateBarang(id:$id, nama_barang:$nama_barang, jenis_barang:$jenis_barang, satuan:$satuan, harga:$harga){\n\t\t\tid\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tharga\n\t\t}\n\t}\n"]);return y=function(){return t},t}function P(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tpengeluaranBarang(id: $id) {\n\t\t\ttanggal\n\t\t\tkode\n\t\t\tid\n\t\t\takun{\n\t\t\t\tusername\n\t\t\t\tid\n\t\t\t\tkaryawan{\n\t\t\t\t\tnama\n\t\t\t\t\tjabatan\n\t\t\t\t}\n\t\t\t}\n\t\t\tpermintaanBarang{\n\t\t\t\ttanggal\n\t\t\t\tstatus\n\t\t\t\tkode\n\t\t\t\tid\n\t\t\t\ttanggal_setuju\n\t\t\t\tdisetujui{\n\t\t\t\t\tusername\n\t\t\t\t\tkaryawan{\n\t\t\t\t\tnama\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\takun{\n\t\t\t\t\tusername\n\t\t\t\t\tid\n\t\t\t\t\tkaryawan{\n\t\t\t\t\t\tnama\n\t\t\t\t\t\tdivisi{\n\t\t\t\t\t\t\tnama\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tlistRequest{\n\t\t\t\t\tnama_barang\n\t\t\t\t\tjumlah_barang\n\t\t\t\t\tjenis\n\t\t\t\t\tsatuan\n\t\t\t\t\tstatus\n\t\t\t\t\tharga\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return P=function(){return t},t}function B(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tpenerimaanBarang(id: $id) {\n\t\t\ttanggal\n\t\t\tkode\n\t\t\tid\n\t\t\takun{\n\t\t\t\tusername\n\t\t\t\tid\n\t\t\t\tkaryawan{\n\t\t\t\t\tnama\n\t\t\t\t\tjabatan\n\t\t\t\t}\n\t\t\t}\n\t\t\tpurchaseOrder{\n\t\t\t\tkode\n\t\t\t\tid\n\t\t\t\ttanggal\n\t\t\t\tvendor{\n\t\t\t\t\tnama\n\t\t\t\t}\n\t\t\t\tlistItemPurchaseOrder{\n\t\t\t\t\tnama_barang\n\t\t\t\t\tjumlah_barang\n\t\t\t\t\tsatuan\n\t\t\t\t\tharga\n\t\t\t\t\tid\n\t\t\t\t\tjenis\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return B=function(){return t},t}function q(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tpemeliharaan(id: $id) {\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\ttanggal\n\t\t\tid\n\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t\tjabatan\n\t\t\t\tdivisi{\n\t\t\t\t\tnama\n\t\t\t\t}\n\t\t\t}\n\t\t\tinventaris{\n\t\t\t\tjumlah\n\t\t\t\tid \n\t\t\t\tbarang{\n\t\t\t\t\tid\n\t\t\t\t\tnama_barang\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return q=function(){return t},t}function R(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tinventaris(id: $id) {\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t\tid\n\t\t\tbarang{\n\t\t\t\tnama_barang\n\t\t\t\tjenis_barang\n\t\t\t\tsatuan\n\t\t\t\tharga\n\t\t\t\tid\n\t\t\t}\t\n\t\t}\n\t}\n"]);return R=function(){return t},t}function T(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tpersediaanBarang(id: $id) {\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tid\n\t\t\tbarang{\n\t\t\t\tnama_barang\n\t\t\t\tjenis_barang\n\t\t\t\tsatuan\n\t\t\t\tharga\n\t\t\t\tid\n\t\t\t}\t\n\t\t}\n\t}\n"]);return T=function(){return t},t}function L(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tpurchaseOrder(id: $id) {\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\tkode\n\t\t\tid\n\t\t\ttotal_harga\n\t\t\ttanggal_setuju\n\t\t\tvendor{\n\t\t\t\tnama\n\t\t\t\tjenis_usaha\n\t\t\t}\n\t\t\takun{\n\t\t\t\tid\n\t\t\t\tkaryawan{\n\t\t\t\t\tnama\n\t\t\t\t}\n\t\t\t}\n\t\t\tlistItemPurchaseOrder{\n\t\t\t\tnama_barang\n\t\t\t\tjumlah_barang\n\t\t\t\tsatuan\n\t\t\t\tharga\n\t\t\t\tid\n\t\t\t\tjenis\n\t\t\t}\n\t\t}\n\t}\n"]);return L=function(){return t},t}function J(){var t=Object(r.a)(["\n\tquery($id:ID){\n\t\tpermintaanBarang(id: $id) {\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\tkode\n\t\t\tid\n\t\t\ttanggal_setuju\n\t\t\tdivisi{\n\t\t\t\tnama\n\t\t\t\tid\n\t\t\t}\n\t\t\tdisetujui{\n\t\t\t\tusername\n\t\t\t\tkaryawan{\n\t\t\t\t  nama\n\t\t\t\t}\n\t\t\t  }\n\t\t\takun{\n\t\t\t\tusername\n\t\t\t\tid\n\t\t\t\tkaryawan{\n\t\t\t\t\tnama\n\t\t\t\t\tdivisi{\n\t\t\t\t\t\tnama\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tlistRequest{\n\t\t\t\tnama_barang\n\t\t\t\tjumlah_barang\n\t\t\t\tjenis\n\t\t\t\tsatuan\n\t\t\t\tstatus\n\t\t\t\tharga\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);return J=function(){return t},t}function A(){var t=Object(r.a)(["\n\tquery($id: ID){\n\t\tvendor(id: $id) {\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t\talamat\n\t\t\temail\n\t\t\tnoTlp\n\t\t\tid\n\t\t}\n\t}\n"]);return A=function(){return t},t}function H(){var t=Object(r.a)(["\n\tquery($id: ID){\n\t\tperalatan(id: $id) {\n\t\t\tnama\n\t\t\tjumlah\n\t\t\tharga\n\t\t\tsewa\n\t\t\tid\n\t\t}\n\t}\n"]);return H=function(){return t},t}function V(){var t=Object(r.a)(["\n\tquery($id: ID){\n\t\tbarang(id: $id) {\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n"]);return V=function(){return t},t}function K(){var t=Object(r.a)(["\n\tquery($username: String!, $password: String!){\n\t\takun(username: $username, password: $password) {\n\t\t\tusername\n\t\t\tpassword\n\t\t\tid\n\t\t\tkaryawan {\n\t\t\t\tnama\n\t\t\t\ttanggal_lahir\n\t\t\t\tjenis_kelamin\n\t\t\t\tagama\n\t\t\t\ttempat_lahir\n\t\t\t\talamat\n\t\t\t\tno_kontak\n\t\t\t\temail\n\t\t\t\tjabatan\n\t\t\t\tdivisi{\n\t\t\t\t\tnama\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);return K=function(){return t},t}function M(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPemeliharaan(id: $id){\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return M=function(){return t},t}function F(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusInventaris(id: $id){\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return F=function(){return t},t}function U(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPengeluaranBarang(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return U=function(){return t},t}function x(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPenerimaanBarang(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return x=function(){return t},t}function z(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPersediaanBarang(id: $id){\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return z=function(){return t},t}function C(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusManyListItemPurchaseOrder(id: $id){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n"]);return C=function(){return t},t}function E(){var t=Object(r.a)(["\n\tmutation($status:String!, $jumlah: Int!, $tanggal:String!, $karyawan_id: ID!, $inventaris_id: ID!,){\n\t\taddPemeliharaan(status:$status, jumlah:$jumlah, tanggal:$tanggal, karyawan_id: $karyawan_id, inventaris_id: $inventaris_id,){\n\t\t\ttanggal\n\t\t\tid\n\t\t}\n\t}\n"]);return E=function(){return t},t}function G(){var t=Object(r.a)(["\n\tmutation($kode:String!, $tanggal:String!, $akun_id: ID!, $permintaan_id: ID!,){\n\t\taddPengeluaranBarang(kode:$kode, tanggal:$tanggal, akun_id: $akun_id, permintaan_id: $permintaan_id,){\n\t\t\ttanggal\n\t\t\tkode\n\t\t\tid\n\t\t}\n\t}\n"]);return G=function(){return t},t}function N(){var t=Object(r.a)(["\n\tmutation($nama:String!, $jabatan:String!, $alamat:String!, $noHp:String!, $avatar:String!, $divisi_id: ID!,){\n\t\taddKaryawan(nama:$nama, jabatan:$jabatan, alamat:$alamat, noHp:$noHp , avatar:$avatar, divisi_id: $divisi_id,){\n\t\t\tnama\n\t\t\tjabatan\n\t\t\tid\n\t\t}\n\t}\n"]);return N=function(){return t},t}function Q(){var t=Object(r.a)(["\n\tmutation($kode:String!, $tanggal:String!, $akun_id: ID!, $purchase_id: ID!,){\n\t\taddPenerimaanBarang(kode:$kode, tanggal:$tanggal, akun_id: $akun_id, purchase_id: $purchase_id,){\n\t\t\ttanggal\n\t\t\tkode\n\t\t\tid\n\t\t}\n\t}\n"]);return Q=function(){return t},t}function W(){var t=Object(r.a)(["\n\tmutation($jumlah:Int!, $status:String!, $barang_id: ID!, $jumlah_diperbaiki:Int!, $jumlah_dipakai:Int!){\n\t\taddInventaris(jumlah: $jumlah, status:$status, barang_id: $barang_id, jumlah_diperbaiki:$jumlah_diperbaiki, jumlah_dipakai:$jumlah_dipakai){\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tjumlah_diperbaiki\n\t\t\tjumlah_dipakai\n\t\t\tid\n\t\t}\n\t}\n"]);return W=function(){return t},t}function X(){var t=Object(r.a)(["\n\tmutation($jumlah:Int!, $status:String!, $barang_id: ID!){\n\t\taddPersediaanBarang(jumlah: $jumlah, status:$status, barang_id: $barang_id){\n\t\t\tjumlah\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return X=function(){return t},t}function Y(){var t=Object(r.a)(["\n\tmutation($nama_barang:String!, $jumlah_barang:Int!, $satuan:String!, $jenis:String!, $purchaseOrder_id: ID!, $status: String!, $harga: Int!){\n\t\taddListItemPurchaseOrder(nama_barang: $nama_barang, jumlah_barang: $jumlah_barang, satuan:$satuan, jenis:$jenis, purchaseOrder_id: $purchaseOrder_id, status:$status, harga:$harga){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tstatus\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n"]);return Y=function(){return t},t}function Z(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPurchaseOrder(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return Z=function(){return t},t}function tt(){var t=Object(r.a)(["\n\tmutation($kode:String!, $tanggal:String!, $status:String!, $tanggal_setuju:String!, $akun_id:String!, $vendor_id:String!){\n\t\taddPurchaseOrder(kode:$kode, tanggal:$tanggal, status:$status, tanggal_setuju:$tanggal_setuju, akun_id:$akun_id, vendor_id:$vendor_id){\n\t\t\tkode\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\ttanggal_setuju\n\t\t\tid\n\t\t}\n\t}\n"]);return tt=function(){return t},t}function nt(){var t=Object(r.a)(["\n\tmutation($username:String!, $password:String!, $karyawan_id:ID!){\n\t\taddAkun(username: $username, password: $password, karyawan_id:$karyawan_id){\n\t\t\tusername\n\t\t\tpassword\n\t\t\tid\n\t\t}\n\t}\n"]);return nt=function(){return t},t}function at(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusBarang(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return at=function(){return t},t}function rt(){var t=Object(r.a)(["\n\tmutation($nama_barang:String!, $jenis_barang:String!, $satuan:String!, $harga:Int!){\n\t\taddBarang(nama_barang: $nama_barang, jenis_barang: $jenis_barang, satuan:$satuan, harga:$harga){\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n"]);return rt=function(){return t},t}function it(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusListRequest(id: $id){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tid\n\t\t}\n\t}\n"]);return it=function(){return t},t}function ut(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusManyListRequest(id: $id){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tid\n\t\t}\n\t}\n"]);return ut=function(){return t},t}function et(){var t=Object(r.a)(["\n\tmutation($nama_barang:String!, $jumlah_barang:Int!, $satuan:String!, $jenis:String!, $request_id: ID!, $status: String!, $harga: Int!){\n\t\taddListRequest(nama_barang: $nama_barang, jumlah_barang: $jumlah_barang, satuan:$satuan, jenis:$jenis, request_id: $request_id, status:$status, harga:$harga){\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tsatuan\n\t\t\tjenis\n\t\t\tstatus\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n"]);return et=function(){return t},t}function dt(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPermintaanBarang(id: $id){\n\t\t\tstatus\n\t\t\tid\n\t\t}\n\t}\n"]);return dt=function(){return t},t}function st(){var t=Object(r.a)(["\n\tmutation($tanggal:String!, $status:String!, $kode: String!, $divisi_id: String!, $akun_id: String!, $tanggal_setuju: String!, $disetujui_id:String!){\n\t\taddPermintaanBarang(tanggal: $tanggal, status: $status, kode: $kode, divisi_id: $divisi_id, akun_id: $akun_id, tanggal_setuju: $tanggal_setuju, disetujui_id: $disetujui_id){\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\tkode\n\t\t\tid\n\t\t}\n\t}\n"]);return st=function(){return t},t}function ct(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusDivisi(id: $id){\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t}\n"]);return ct=function(){return t},t}function ot(){var t=Object(r.a)(["\n\tmutation($nama:String!){\n\t\taddDivisi(nama: $nama){\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t}\n"]);return ot=function(){return t},t}function mt(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusVendor(id: $id){\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t}\n"]);return mt=function(){return t},t}function gt(){var t=Object(r.a)(["\n\tmutation($nama:String!, $jenis_usaha:String!, $alamat:String!, $email:String!, $noTlp:String!){\n\t\taddVendor(nama: $nama, jenis_usaha: $jenis_usaha, alamat:$alamat, email:$email, noTlp:$noTlp){\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t\talamat\n\t\t\temail\n\t\t\tnoTlp\n\t\t\tid\n\t\t}\n\t}\n"]);return gt=function(){return t},t}function bt(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusAkun(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return bt=function(){return t},t}function jt(){var t=Object(r.a)(["\n\tmutation($id:ID!){\n\t\thapusPeralatan(id: $id){\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t}\n"]);return jt=function(){return t},t}function $t(){var t=Object(r.a)(["\n\tmutation($nama:String!, $jumlah:Int!, $harga:Int!, $sewa:Int!){\n\t\taddPeralatan(nama: $nama, jumlah: $jumlah, harga: $harga, sewa: $sewa){\n\t\t\tnama\n\t\t\tjumlah\n\t\t\tharga\n\t\t\tsewa\n\t\t\tid\n\t\t}\n\t}\n"]);return $t=function(){return t},t}function lt(){var t=Object(r.a)(["\n{\n\tpengeluaranBarangs {\n\t\ttanggal\n\t\tkode\n\t\tid\n\t\takun{\n\t\t\tusername\n\t\t\tid\n\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t\tjabatan\n\t\t\t}\n\t\t}\n\t\tpermintaanBarang{\n\t\t\ttanggal\n\t\t\tstatus\n\t\t\tkode\n\t\t\tid\n\t\t\ttanggal_setuju\n\t\t\tdisetujui{\n\t\t\t\tusername\n\t\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t\t}\n\t\t\t}\n\t\t\takun{\n\t\t\t\tusername\n\t\t\t\tid\n\t\t\t\tkaryawan{\n\t\t\t\t\tnama\n\t\t\t\t\tdivisi{\n\t\t\t\t\t\tnama\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tlistRequest{\n\t\t\t\tnama_barang\n\t\t\t\tjumlah_barang\n\t\t\t\tjenis\n\t\t\t\tsatuan\n\t\t\t\tstatus\n\t\t\t\tharga\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t} \n}\n"]);return lt=function(){return t},t}function _t(){var t=Object(r.a)(["\n{\n\tpenerimaanBarangs {\n\t\tkode\n\t\ttanggal\n\t\tid\n\t\takun{\n\t\t\tusername\n\t\t\tid\n\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t\tjabatan\n\t\t\t}\n\t\t}\n\t\tpurchaseOrder{\n\t\t\tkode\n\t\t\tid\n\t\t\ttanggal\n\t\t\tlistItemPurchaseOrder{\n\t\t\t\tnama_barang\n\t\t\t\tjumlah_barang\n\t\t\t\tsatuan\n\t\t\t\tharga\n\t\t\t\tid\n\t\t\t\tjenis\n\t\t\t}\n\t\t\tvendor{\n\t\t\t\tnama\n\t\t\t}\n\t\t}\n\t}\n}\n"]);return _t=function(){return t},t}function ht(){var t=Object(r.a)(["\n{\n\tallInventaris {\n\t\tjumlah\n\t\tstatus\n\t\tjumlah_diperbaiki\n\t\tjumlah_dipakai\n\t\tid\n\t\tbarang{\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n}\n"]);return ht=function(){return t},t}function ft(){var t=Object(r.a)(["\n{\n\tpersediaanBarangs {\n\t\tjumlah\n\t\tstatus\n\t\tid\n\t\tbarang{\n\t\t\tnama_barang\n\t\t\tjenis_barang\n\t\t\tsatuan\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n}\n"]);return ft=function(){return t},t}function Ot(){var t=Object(r.a)(["\n{\n\tpemeliharaans {\n\t\tjumlah\n\t\tstatus\n\t\ttanggal\n\t\tid\n\t\tkaryawan{\n\t\t\tnama\n\t\t\tjabatan\n\t\t\tdivisi{\n\t\t\t\tnama\n\t\t\t}\n\t\t}\n\t\tinventaris{\n\t\t\tjumlah\n\t\t\tid\n\t\t\tbarang{\n\t\t\t\tnama_barang\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n}\n"]);return Ot=function(){return t},t}function kt(){var t=Object(r.a)(["\n{\n\tpurchaseOrders {\n\t\tkode\n\t\ttanggal\n\t\ttanggal_setuju\n\t\tstatus\n\t\ttotal_harga\n\t\tid\n\t\takun{\n\t\t\tusername\n\t\t\tid\n\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t}\n\t\t}\n\t\tvendor{\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t}\n\t}\n}\n"]);return kt=function(){return t},t}function pt(){var t=Object(r.a)(["\n{\n\tbarangs {\n\t\tnama_barang\n\t\tjenis_barang\n\t\tsatuan\n\t\tharga\n\t\tid\n\t}\n}\n"]);return pt=function(){return t},t}function vt(){var t=Object(r.a)(["\n{\n\tkaryawans {\n\t\tnama\n\t\ttanggal_lahir\n\t\tjenis_kelamin\n\t\tagama\n\t\ttempat_lahir\n\t\talamat\n\t\tno_kontak\n\t\temail\n\t\tjabatan\n\t\tdivisi{\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t\tid\n\t}\n}\n"]);return vt=function(){return t},t}function It(){var t=Object(r.a)(["\n{\n\takuns {\n\t\tusername\n\t\tpassword\n\t\tkaryawan{\n\t\t\tnama\n\t\t\ttanggal_lahir\n\t\t\tjenis_kelamin\n\t\t\tagama\n\t\t\ttempat_lahir\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tjabatan\n\t\t\tid\n\t\t\tdivisi{\n\t\t\t\tnama\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tid\n\t}\n}\n"]);return It=function(){return t},t}function St(){var t=Object(r.a)(["\n{\n\tlistItemPurchaseOrders{\n\t\tnama_barang\n\t\tjumlah_barang\n\t\tsatuan\n\t\tharga\n\t\tid\n\t\tjenis\n\t}\n}\n"]);return St=function(){return t},t}function Dt(){var t=Object(r.a)(["\n{\n\torders {\n\t\tkode\n\t\ttanggal\n\t\tjenis\n\t\tstatus\n\t\tid\n\t\tvendor{\n\t\t\tnama\n\t\t\tjenis_usaha\n\t\t}\n\t}\n}\n"]);return Dt=function(){return t},t}function wt(){var t=Object(r.a)(["\n{\n\tlistrequests {\n\t\tnama_barang\n\t\tjumlah_barang\n\t\tjenis\n\t\tsatuan\n\t\tstatus\n\t\tharga\n\t\tid\n\t\tpermintaanBarang{\n\t\t\tstatus\n\t\t\ttanggal\n\t\t}\n\t}\n}\n"]);return wt=function(){return t},t}function yt(){var t=Object(r.a)(["\n{\n\tpermintaanBarangs {\n\t\ttanggal\n\t\tstatus\n\t\tid\n\t\tkode\n\t\tdivisi{\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t\takun{\n\t\t\tusername\n\t\t\tid\n\t\t\tkaryawan{\n\t\t\t\tnama\n\t\t\t\tdivisi{\n\t\t\t\t\tnama\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tlistRequest{\n\t\t\tnama_barang\n\t\t\tjumlah_barang\n\t\t\tjenis\n\t\t\tsatuan\n\t\t\tstatus\n\t\t\tharga\n\t\t\tid\n\t\t}\n\t}\n}\n"]);return yt=function(){return t},t}function Pt(){var t=Object(r.a)(["\n{\n\tdivisis {\n\t\tnama\n\t\tid\n\t}\n}\n"]);return Pt=function(){return t},t}function Bt(){var t=Object(r.a)(["\n{\n\tperalatans {\n\t\tnama\n\t\tjumlah\n\t\tharga\n\t\tsewa\n\t\tid\n\t}\n}\n"]);return Bt=function(){return t},t}function qt(){var t=Object(r.a)(["\n{\n\tvendors {\n\t\tnama\n\t\tjenis_usaha\n\t\talamat\n\t\temail\n\t\tnoTlp\n\t\tid\n\t}\n}\n"]);return qt=function(){return t},t}var Rt=Object(i.b)(qt()),Tt=(Object(i.b)(Bt()),Object(i.b)(Pt())),Lt=Object(i.b)(yt()),Jt=Object(i.b)(wt()),At=(Object(i.b)(Dt()),Object(i.b)(St())),Ht=Object(i.b)(It()),Vt=Object(i.b)(vt()),Kt=Object(i.b)(pt()),Mt=Object(i.b)(kt()),Ft=Object(i.b)(Ot()),Ut=Object(i.b)(ft()),xt=Object(i.b)(ht()),zt=Object(i.b)(_t()),Ct=Object(i.b)(lt()),Et=(Object(i.b)($t()),Object(i.b)(jt()),Object(i.b)(bt()),Object(i.b)(gt())),Gt=Object(i.b)(mt()),Nt=(Object(i.b)(ot()),Object(i.b)(ct()),Object(i.b)(st())),Qt=Object(i.b)(dt()),Wt=Object(i.b)(et()),Xt=Object(i.b)(ut()),Yt=(Object(i.b)(it()),Object(i.b)(rt())),Zt=Object(i.b)(at()),tn=Object(i.b)(nt()),nn=Object(i.b)(tt()),an=Object(i.b)(Z()),rn=Object(i.b)(Y()),un=Object(i.b)(X()),en=(Object(i.b)(W()),Object(i.b)(Q())),dn=(Object(i.b)(N()),Object(i.b)(G())),sn=Object(i.b)(E()),cn=Object(i.b)(C()),on=(Object(i.b)(z()),Object(i.b)(x())),mn=Object(i.b)(U()),gn=(Object(i.b)(F()),Object(i.b)(M())),bn=Object(i.b)(K()),jn=Object(i.b)(V()),$n=(Object(i.b)(H()),Object(i.b)(A())),ln=Object(i.b)(J()),_n=Object(i.b)(L()),hn=(Object(i.b)(T()),Object(i.b)(R()),Object(i.b)(q())),fn=Object(i.b)(B()),On=Object(i.b)(P()),kn=Object(i.b)(y()),pn=(Object(i.b)(w()),Object(i.b)(D())),vn=Object(i.b)(S()),In=Object(i.b)(I()),Sn=Object(i.b)(v()),Dn=Object(i.b)(p()),wn=Object(i.b)(k()),yn=Object(i.b)(O()),Pn=Object(i.b)(f()),Bn=Object(i.b)(h()),qn=Object(i.b)(_()),Rn=Object(i.b)(l()),Tn=Object(i.b)($()),Ln=(Object(i.b)(j()),Object(i.b)(b())),Jn=Object(i.b)(g()),An=Object(i.b)(m()),Hn=Object(i.b)(o()),Vn=Object(i.b)(c()),Kn=Object(i.b)(s()),Mn=Object(i.b)(d()),Fn=Object(i.b)(e()),Un=Object(i.b)(u())}}]);
//# sourceMappingURL=2.7e05052e.chunk.js.map