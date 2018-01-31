<?php
header("Content-type: text/html; charset=utf-8");
/*防止非法调用*/
if(!isset($_POST['praise']) || $_POST['praise']!==md5('praiseNums123') || !isset($_POST['type'])){
    exit(json_encode(array("success"=>false,"errcode"=>-1,"errMsg"=>"非法请求")));
}
$_type = $_POST['type'];
include_once('./conn.php');
$_conn = new Mysql();
if($_type==='put'){
    if(!!$_conn->queryUpdata("UPDATE praise SET praiseNum=praiseNum+1 WHERE id=1")){
        $_rows =$_conn->querySelect("SELECT id,praiseNum FROM praise WHERE id=1");
        echo json_encode(array("success"=>true,"pariseNum"=>$_rows[0]["praiseNum"],"errcode"=>0));
    }else{
        echo json_encode(array("success"=>false,"errcode"=>-1,"errMsg"=>"更新失败"));
    };
}else{
    if(!!$_rows =$_conn->querySelect("SELECT id,praiseNum FROM praise WHERE id=1")){
        echo json_encode(array("success"=>true,"pariseNum"=>$_rows[0]["praiseNum"],"errcode"=>0));
    }else{
        echo json_encode(array("success"=>false,"errcode"=>-1,"errMsg"=>"查找失败"));
    }
}
?>