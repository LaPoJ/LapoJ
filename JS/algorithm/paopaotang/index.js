// 玩家1 玩家2 ...
// object 类
// JSON object 难以完成此job


// 创建玩家类 ES5中没有class关键字  大写首字母的函数 构造函数

//函数可以用来构建类
// 一个函数的首字母是大写进行约束，求别于普通函数
// 运行方式为new，这可以成为构造函数
// 函数是js里面的一等对象，除了基本数据类型之外的都是object，函数是可以被运行的对象
function Player(name) {

	// js函数和其他语言不一样，函数一定会存在一个this，指针，函数运行变会存在
	// console.log(this);
	this.name = name;
	this.enemy = null;

}

Player.prototype.win = function () {
	console.log(this.name + " win");
};

Player.prototype.lose = function () {
	console.log(this.name + " lose");
};

// Player();
// this 指向实例化的对象
//将类实例化，抽闲辅概念，可以new一个新的对象

//上线的过程
var player1 = new Player("Queen");
console.log(player1.name + "上线了");
var player2 = new Player("King");
console.log(player2.name + "上线了");

//成为队手的过程
player1.enemy = player2;
player2.enemy = player1;
console.log(player1.enemy);
console.log(player2.enemy);

//游戏的过程
player1.win();
player2.lose();