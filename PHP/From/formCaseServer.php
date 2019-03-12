<?php

     //1.接收表单数据并校验
    //2.持久化（保存文件中或数据库中）
    //3.响应（服务端的响应）


    //接收用户提交的数据，保存到txt文件中
    //1.校验参数的完整性
    if(empty($_POST['username'])){
        //没有提交用户名 或 用户名为空字符串
        $message = '用户名为空';
    }else{
        if(empty($_POST['password'])){
            //没有提交用户名 或 用户名为空字符串
            $message = '密码为空';
        }else{
            if(empty($_POST['confirm'])){
                //没有提交用户名 或 用户名为空字符串
                $message = '请输入确认密码';
            }else{
                //用户名 密码                  
                if($_POST['password'] != $_POST['confirm']){                   
                  //没有提交用户名 或 用户名为空字符串
                     $message = '两次密码不一致';
                 }else{
                     if(!(isset($_POST['agree']) && $_POST['agree']=='on')){
                        $message = "<script>alert('必须同意注册协议！')</script>";

                    }else{
                        $username = $_POST['username'];
                        $password = $_POST['password'];


                        //将数据保存至文件中
                        file_put_contents('users.txt',$username . ' | ' . $password . "\n",  FILE_APPEND);
                        $message = '注册成功';
                    }

                 }
            }
        }
       
    }