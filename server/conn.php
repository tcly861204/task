<?php
class Mysql {
    private $_conn=null;
    private $_result;
    public function __construct($_dbhost="localhost",$_dbuser="root",$_dbpass=""){
        $this->connect($_dbhost,$_dbuser,$_dbpass);
        $this->selectDB();
        $this->setChart();
    }
    public function selectDB($_dbName = 'studay'){
        $this->_conn->select_db($_dbName);
    } public function setChart($charset='utf8'){
        $this->_conn->set_charset($charset);
    }
    public function connect($_dbhost,$_dbuser,$_dbpass){
        $this->_conn = new mysqli($_dbhost,$_dbuser,$_dbpass);
        if(mysqli_connect_errno()){
            echo "数据库连接出错：".mysqli_connect_error();
        }
    }
    public function querySelect($_sql){
        $this->_result = $this->_conn->query($_sql);
        $arr=array();
        while(!!$row = $this->_result->fetch_assoc()){
            array_push($arr,$row);
        }
        return $arr;
    }
    public function queryUpdata($_sql){
        $this->_result = $this->_conn->query($_sql);
        if(mysqli_affected_rows($this->_conn)){
            return 1;
        }else{
            return 0;
        }
    }
    //关闭数据库
    public function __destruct(){
        $this->_conn->close();
    }
}
?>