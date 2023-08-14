// INTRODUCTION
/**
 * 1. Là Hàm
 * 2. Truyền qua đối số
 * 3. Được gọi lại (trong hàm nhận đối số)
 */

//function myFunction(param){
//     param('Hello World!');
// }

// function myCallback(value){
//     console.log('Value: ', value);
// }

// myFunction(myCallback);

// //-- Practice---
// function sumCb(a, b) {
//     return (a + b);
// }
// function subCb(a, b) {
//     return a - b;
// }function multiCb(a, b) {
//     return a * b;
// }function divCb(a, b) {
//     return a / b;
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// // Expected results
// // caculate(1, 2, sumCb) // Output: 3
// // caculate(1, 2, subCb) // Output: -1
// // caculate(1, 2, multiCb) // Output: 2
// // caculate(3, 1, divCb) // Output: 3


// Callbak 2
Array.prototype.map2 = function(callback){ // tu tao function cho map2
    //console.log(this);
    var arrayLength = this.length;
    var output = []
    for (var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i);
        output.push(result); 
    }
    return output;
}
var courses =[
    'Javascript',
    'PHP',
    'Ruby'
];

// courses.map(function(course) {
//     console.log(course);
// });

// var htmls = courses.map(function(course){
//     return <h2>${course}</h2>;
// })

// console.log(htmls.join(''));

//----
var htmls = courses.map2(function(course, index){
    return <h2>${course}</h2>;
});
console.log(htmls.join(''))