<?php

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        var_dump($_POST);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" >

        <!-- 单选框 -->
        性别
       <label for=""><input type="radio" name="gender" value="male" id="man">男</label>
        <label for=""><input type="radio" name="gender" value="famale" id="woman">女</label>
        <br>
        <!-- checkbox 如果没有选中则不会提交，如果选中提交 on -->
        <label><input type="checkbox" name="agree" value="true">同意协议</label>
        <br>

        <!-- 复选框 -->
        <label for=""><input type="checkbox" name="funs[]" value="foot">足球</label>
        <label for=""><input type="checkbox" name="funs[]" value="basket">篮球</label>
        <label for=""><input type="checkbox" name="funs[]" value="earth">地球</label>
        
        <br>
        <!-- 下拉框 -->
        <!-- select也是表单元素，不设置value值时提交文本内容，否则提交value值 -->
        <select name="status">
            <option>激活</option>
            <option>未激活</option>
            <option>待激活</option>
        </select>

        <br>
            <input type="file" >
        <br>
        <button>提交</button>

    </form>
</body>
</html>