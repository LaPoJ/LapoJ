<?php
//不需要进行繁琐的嵌套进行判断，嵌套写法在formCaseServer.php文件中
function judgeUser()
{
    global $message;
    if (empty($_POST['username'])) {
        //没有提交用户名 或 用户名为空字符串
        $message = '用户名为空';
        return;
    }
    if (empty($_POST['password'])) {
        $message = '密码为空';
        return;
    }
    if (empty($_POST['confirm'])) {
        //没有提交用户名 或 用户名为空字符串
        $message = '请输入确认密码';
        return;
    }
    //用户名 密码                  
    if ($_POST['password'] != $_POST['confirm']) {
        //没有提交用户名 或 用户名为空字符串
        $message = '两次密码不一致';
        return;
    }
    if (!(isset($_POST['agree']) && $_POST['agree'] == 'on')) {
        $message = '必须同意注册协议';
        return;
    }

    $username = $_POST['username'];
    $password = $_POST['password'];
    //将数据保存至文件中
    file_put_contents('users.txt', $username . ' | ' . $password . "\n",  FILE_APPEND);
    $message = '注册成功';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    judgeUser();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册</title>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <table border="1">
            <?php if (isset($message)) : ?>
            <tr>
                <th></th>
                <th><?php echo $message ?></th>
            </tr>
            <?php endif ?>
            <tr>
                <td><label for="username">用户名</label></td>
                <td><input type="text" name="username" id="username"></label></td>
            </tr>

            <tr>
                <td><label for="password">密码</label></td>
                <td><input type="password" name="password" id="password"></label></td>
            </tr>
            <tr>
                <td><label for="confirm">确认密码</label></td>
                <td><input type="password" name="confirm" id="confirm"></label></td>
            </tr>
            <tr>
                <td></td>
                <td><label for=""><input type="checkbox" name="agree" id="">同意注册协议</label></td>
            </tr>
            <tr>
                <td></td>
                <td><button>注册</button></td>
            </tr>
        </table>

    </form>
</body>

</html> 