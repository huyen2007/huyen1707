var object={
    hoTen:"",
    soDienThoai:"",
    yeucau:"",
    tenMonHang:"",
    giaTien:""

}
$("#btn-1").on("click",function(){
alert("Khách hàng chọn mua nến hương trà")
$("#btn-1").removeClass("btn-success btn bg-main w-100").addClass("btn-info btn bg-main w-100")
$("#btn-2").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
$("#btn-3").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
$("#btn-4").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
$("#btn-5").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
$("#btn-6").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
object.tenMonHang="nến hương trà";
object.giaTien="365.000VND";
})

$("#btn-2").on("click",function(){
    alert ("Khách hàng chọn mua nến hương gỗ trầm")
    $("#btn-2").removeClass("btn-success btn bg-main w-100").addClass("btn-info btn bg-main w-100")
    $("#btn-1").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-3").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-4").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-5").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-6").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    object.tenMonHang="nến hương gỗ trầm";
    object.giaTien="385.000VND";
   })
   $("#btn-3").on("click",function(){
    alert ("Khách hàng chọn mua nến hương diên vĩ")
    $("#btn-3").removeClass("btn-success btn bg-main w-100").addClass("btn-info btn bg-main w-100")
    $("#btn-1").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-2").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-4").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-5").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-6").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
   
    object.tenMonHang="nến hương diên vĩ";
    object.giaTien="335.000VND";
   })
   $("#btn-4").on("click",function(){
    alert ("Khách hàng chọn mua tinh dầu tràm")
    $("#btn-4").removeClass("btn-success btn bg-main w-100").addClass("btn-info btn bg-main w-100")
    $("#btn-1").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-2").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-3").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-5").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-6").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
   
    object.tenMonHang="tinh dầu tràm";
    object.giaTien="365.000VND";
   })
   $("#btn-5").on("click",function(){
    alert ("Khách hàng chọn mua tinh dầu lavender")
    $("#btn-5").removeClass("btn-success btn bg-main w-100").addClass("btn-info btn bg-main w-100")
    $("#btn-1").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-2").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-4").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-3").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-6").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
   
    object.tenMonHang="tinh dầu lavender";
    object.giaTien="335.000VND";
   })
   $("#btn-6").on("click",function(){
    alert("Khách hàng chọn mua xáp thơm")
    $("#btn-6").removeClass("btn-success btn bg-main w-100").addClass("btn-info btn bg-main w-100")
    $("#btn-1").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-2").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-4").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-5").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-3").removeClass("btn-info btn bg-main w-100").addClass("btn-success btn bg-main w-100")
   
    object.tenMonHang="xáp";
    object.giaTien="365.000VND";
   })