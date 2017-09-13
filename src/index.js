module.exports = function zeros(expression) {

var zeros=0;
var	zeros_of_five=0;
var	zeros_of_two=0;

// Разделение на части
var mass = expression.split('*');

// Выбор по какому факториалу считать
for (var i=0; i<mass.length;i++) {
	var	fact=0;
	for(var j=0;j<mass[i].length;j++) {
			if (mass[i][j]=='!') {
				fact++;
			}
	}
	if (fact==1) {
		rez=factorial_1(parseInt(mass[i]));
	}
	else {
		rez=factorial_2(parseInt(mass[i]));
	}	
}
//Подсчёт пятёрок и двоек в факториале n!
function factorial_1 (mass) {
	for (var i=mass;i>0;i--) {
		if(i%5==0) {
			zeros_of_five++;
			if	((i/5)%5==0){
				zeros_of_five++;
			}
		}
	if(i%2==0){
		zeros_of_two++;
	}

}
}
//Подсчёт пятёрок и двоек в факториале n!!
function factorial_2 (mass) {
	for (var i=mass;i>0;i-=2) {
		if(i%5==0) {
			zeros_of_five++;
			if	((i/5)%5==0){
				zeros_of_five++;
			}
		}
	if(i%2==0){
		zeros_of_two++;
	}
}	
}
// кол-во нулей равно: минимальное количество между двойками и пятёрками
zeros+=Math.min(zeros_of_five,zeros_of_two);
return zeros;
}
