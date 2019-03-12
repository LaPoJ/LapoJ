<?php
    function upload()
    {
        if (!isset($_FILES['avatar'])) {
            $GLOBALS['message'] = '未知错误';
            return;
        }
               
        $avatar = $_FILES['avatar'];
        // array(1) {
        //     ["img"]=>
        //     array(5) {
        //       ["name"]=>
        //       string(8) "test.txt"
        //       ["type"]=>
        //       string(10) "text/plain"
        //       ["tmp_name"]=>
        //       string(27) "C:\Windows\Temp\php578E.tmp"
        //       ["error"]=>
        //       int(0)
        //       ["size"]=>
        //       int(0)
        //     }
        //   }

        if ($avatar['error'] !== UPLOAD_ERR_OK) {
            $GLOBALS['message'] = '未上传文件';
            echo '111';
            return;
        }

        //接收文件，将文件从临时目录移动到项目文件夹下
        $soure = $avatar['tmp_name'];//源文件

        //创建文件夹uploads
        if (!is_dir('./uploads/')) {
           mkdir('./uploads/');
        }

        $target = './uploads/' . $avatar['name'];//目标文件
       //移动文件
       //目标文件夹必须存在
       $move = move_uploaded_file($soure,$target);

       //判断文件是否移动成功
       if (!$move) {
           $GLOBALS['message'] = '文件上传失败';
           echo '222';
           return;
       }

       //移动文件成功
       $GLOBALS['message'] = '文件上传成功';
    }
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        upload();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>文件上传</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" id="">

        <button>上传</button>
        <?php if (isset($message)): ?>
        <p style="color:hotpink"><?php echo $message; ?></p>
        <?php endif?>
    </form>
</body>
</html>