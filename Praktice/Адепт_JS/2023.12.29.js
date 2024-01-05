//Какой вывод будет в консоли при этих условиях?

var i = 10;
var array = [];

while (i--) {
    (function (i) {
        var i = i;
        array.push(function() {
            return i + i;
        });
    })(i);
}    

console.log([
    array[0](),
    array[1](),
])

//будет введено 18, 16