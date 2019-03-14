- 红包规则
    1：红包函数：
        function hongbao(total, num){ 

        }

运算算法，运算比较复杂， 变量的定义 值的存储空间
- 产生金额规则：
    1：金额的随机性
    2：公平性  total/num
    3：total num总人数
    4：restAmount 余下金额
    5：restNum 剩余人数
    6；arr []

- 红包总额 == 红包金额
    1：n-1人随机，最后一人那余下
    2：for(let i = 0; i < n-1 ; i++){
        }
    3：total - restAmount

- Math 是 js 里面的数学对象    一切皆对象
    Math.radiom();  -- Date Reg NodeList Array Function {}
    1：Maht.ceil()  向上取整
    2：Math.round() 四舍五入
    3：Math.floor() 向下取整

    
    Math.floor(Math.random()*(max - min)) + min