<?php 
	header('content-type','text/html;charset=utf-8');
	//连接数据库
	$con=mysql_connect('localhost','root','root');
	//选择数据库
	mysql_select_db('users',$con);
	//执行SQL
	$sql = "insert into users values('小小','111','男',1)";
	mysql_query($sql,$con);
	//关闭数据库
	mysql_close($con);
 ?>