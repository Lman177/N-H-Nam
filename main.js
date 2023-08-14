// // Kiểu dữ liệu
// // Number type
// var a = 1
// var b = 2.5

// console.log(typeof a)

// // String type
// var fullName = 'Hoang nam'

// // Boolean tyoe
// var isSuccess = true

// // Undefined type
// var age

// //Null
// var isNull = null; //nothing

// // Symbol
// var id = Symbol('id'); //unique
// var id2 = Symbol('id'); //unique

// // Function
// var myFunction = function(){
//     alert('Hi, My name is Nam')
// } 
// myFunction();

// // Object types

// var myObject = {
//     name: 'Hoang Nam',
//     age: 18,
//     adress: 'Hanoi'

// }
// console.log('myObject', myObject)

// var myArray = [
//     'Javascript',
//     'Nodejs',
//     ['HTML','CSS']

// ];

//--------------------------------
//TOAN TU SO SANG

/**
 * ===
 * !==
 */

// var a = 1;
// var b = 1; 

// console.log(a==b)

// console.log(Boolean(1)) // true
// console.log(Boolean(['BMW'])) // true
// console.log(Boolean({ name: 'Miu' })) // true
// console.log(!!'hi') // true


// console.log(!!false) // false
// console.log(!!0) // false
// console.log(!!'') // false
// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!NaN) // false

//---------------------------------------------------
//PARAMETER

// function myName(){
//     var myString = ''
//     for (var param of arguments){
//         myString += `${param} - `;
//     }
//     console.log(myString);

// }

// myName('Hoang Nam', 'Minh Pham');

//--------------------------------------------------
//FUNCTION

//1. Declaration Function
//2. Expression function 

// function showMessage(){
//     console.log('Declaration function')
// }
// var showMessage = function(){
//     console.log("Expression function")
// }
//---------------------------------------------
//STRING

// var fullName = 'Hoang Nam la \"siu nhan\"';
// var fullName = 'day la dau \\';
// console.log(fullName)

// var fullName = "Hoang Nam"
// console.log(fullName.length)

// var firstName = "Hoang"
// var lastName = "Nam"

// console.log(`Toi la ${firstName} ${lastName}`)
//-----------------------------------------------------
// var myString = "Cuối tuần này mình còn duy nhất 4 phòng ngay tại phố cổ Hà Nội ";

//1. length
//console.log(myString.length)

//2. Find index
// console.log(myString.indexOf('JS'))
// console.log(myString.indexOf('JS', 6))

//3. Cut String
// console.log(myString.slice(4, 6))

//4. Replace
// console.log(myString.replace('JS', 'Javasc'))
// console.log(myString.replace(/JS/g, 'Javasc'))

//5. Conver to upper and lower case
// console.log(myString.toLowerCase())
// console.log(myString.toUpperCase())

//6. Trim
// console.log(myString.trim().length)

//7. Split
// var languagues = 'Java, Python, Ruby';

// console.log(languagues.split(', '))

//8. get char by index
//  const myString2= 'Son Dang';

//  console.log(myString2.charAt(1))

//-------------------------------------------------------
//NUMBER 

// var age = 18;
// var PI = 3.14;

// console.log(PI.toFixed())

//-----------------------------------------------------
//ARRAY
/**
 * 1. To String
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */
// var languagues = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

//console.log(languagues.toString()) // chuyen array to string

// console.log(languagues.join('- '))

// console.log(languagues.pop()) // Xoa element cuoi mang 
// console.log(languagues.pop()) // Xoa element cuoi mang 
// console.log(languagues.pop()) // Xoa element cuoi mang 
// // va tra ve phan tu da xoa


// console.log(languagues.push('LOL')) // them element cuoi mang 


// console.log(languagues.shift()) //xoa phan tu dau mang 

// console.log(languagues.shift()) // them 1 phan tu vao dau bang 

// languagues.splice(-1)
// Cho mảng: array.slice(start, end)
// Cho chuỗi: string.slice(start, end)

// console.log(languagues)
//-------------------------------------------------------

//OBJECT CONSTRUCTOR

// function User(firstName, lastName, avatar){ //Constructor
//     this.firstName = firstName; // this để mô tả thuộc tính có trong đối tượng từ obj const
//     this.lastName = lastName;
//     this.avatarUrl = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Nam', 'Hoang', 'Avatar')
// var user = new User('Nghia', 'Minh', 'Avatar')

// author.title = 'dep trai nhat vu tru';
// user.comment = 'hoc tai f8';

// console.log(author)
// console.log(user)

//------------------------------------------------------------
//OBJECT PROTOTYPE
// function User(firstName, lastName, avatar){ //Constructor
//     this.firstName = firstName; // this để mô tả thuộc tính có trong đối tượng từ obj const
//     this.lastName = lastName;
//     this.avatarUrl = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// User.prototype.className = 'F8'  //Tao mot thuoc tinhs o ngoai
// User.prototype.getClassName = fucntion(){
//     return this.className;
// } 

// var author = new User('Nam', 'Hoang', 'Avatar')
// var user = new User('Nghia', 'Minh', 'Avatar')

// author.title = 'dep trai nhat vu tru';
// user.comment = 'hoc tai f8';

// console.log(author.className)
// console.log(user)

//--------------------------------------------------------
//OBJECT DATE

// var date = new Date();
// console.log(date)

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`)

//REF javascript date object mozilla

//-------------------------------------------------------- 
//OBJECT MATH
/**
 * Math.PI
 * Math.round() - làm tròn 
 * Math.abs()  - giá trị tuyệt đối
 * Math.ceil() - chỉ làm tròn tròn trên 4.1 = 5
 * Math.floor() - chỉ làm tròn dưới 4.9 = 4
 * Math.random() - 
 * Math.min()
 * Math.max() - console.log(Math.max(-100, 230, 123, 121));
 */

//console.log(Math.floor(Math.random() *100))

// var random = Math.floor(Math.random() *100)

// // var bonus = [
// //     '10 coin',
// //     '20 coin',
// //     '30 coin',
// //     '40 coin',
// //     '50 coin',
// // ]

// // console.log(bonus[random])

// if (random<50){
//     console.log("chuc mung ban da thanh cong")
// }

//----------------------------------------------
//SWITCH

// var date = 9;

// switch(date){
//     case 2:
//         console.log('Hom nay la thu 2');
//         break;
//     case 3:
//             console.log('Hom nay la thu 3');
//             break;
//     case 4:
//             console.log('Hom nay la thu 4');
//             break;
//     case 5:
//             console.log('Hom nay la thu 5');
//             break;
//     case 6:
//             console.log('Hom nay la thu 6');
//             break;
//     default:
//         console.log('Khong Biet')    
// }

//------------------------------------------------------------------
// Toán tử 3 ngôi - Ternary operator

// var course = {
//     name: 'Java',
//     coins: 250
// }

// // if (course.coin >0 ){
// //     console.log(`${course.coins} Coins`);
// // }
// // else{
// //     console.log('Free');
// // }

// var result = course.coin > 0 ?`${course.coins} Coins`  : 'Free';
// console.log(result);
// 

//function getRandNumbers(min,max, length){
//     arrNumbers = [];

//     for(var i = 0; i < length; i++){  
//         var numRandom = Math.floor(Math.random() * (max - min) + min);
//         arrNumbers.push(numRandom);
//         } 
//         return arrNumbers; 
//     }
// console.log(getRandNumbers(3, 8, 5));

// function getTotal(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// // Expected results
// console.log(getTotal([1, 2, 3])); // Output: 6
// console.log(getTotal([4, 5, -3])); // Output: 6
// console.log(getTotal([4, 5, 3, 5])) // Output: 17

//------------------------------------------------------------
//LOOP

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]

// for (var i = 0; i < myArray.length; i++){
//     for (var j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j])
//     }
    
// }
// for (var i = 0; i < myArray.length; i++){
// console.log(myArray[i])
// }

//------------------------------------------------------------------
/**
 * ARRAY METHOD
 * forEach()
 * every() tra ve boolen
 * some()
 * find()
 * filter()
 * map()
 * reduce() 
 */
// var courses = [
//     {
//         id : 1,
//         name: 'javascript',
//         coin:567
//     },
//     {
//         id: 2,
//         name: 'HTML',
//         coin: 20
//     },
//     {
//         id: 3,
//         name:'CSS',
//         coin: 280
//     },
//     {
//         id: 4,
//         name:"Python",
//         coin: 30, 
//     }
// ];  
    

// course.forEach(function(course, index){
//     console.log(index, course);
// })
//----Every-----
// var isFree = courses.every(function(course, index){
//     console.log(index); // duyet qua tung phan tu chi can 1 phan tu khac 0 => false
//     return course.coin === 0;
// });

// console.log(isFree)
//----Some-----
// var isFree = courses.some(function(course, index){
//     console.log(index); // duyet qua tung phan tu 
//     return course.coin === 0;
// });

// console.log(isFree)
//---Find----
// var course = courses.find(function(course, index){
//     console.log(index); // chi tim duoc 1 doi tuong 
//     return course.name === "Python";
// });

// console.log(course)

//--Filter--
// var Listcourse = courses.filter(function(Listcourse, index){
//     console.log(index); // chi tim duoc nhieu doi tuong 
//     return Listcourse.name === "Python";
// });

// console.log(Listcourse)

// //------Practice-------
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(sports){
//     var sport = sports.filter(function(sport, index){
//         return sport.like > 5
//     });
//     return sport;
// }
// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

//---Array map()-----

// function courseHandler(course, index, originArray){
//     return {
//         id : course._id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray

//     };
// }
// var newCourses = courses.map(courseHandler);

// console.log(newCourses);

//---Reduce()-----

// Cach 1: Dung vong lap tinh tong so coin
// var totalCoin = 0; // bien luu tru

// for (var course of courses){
//     totalCoin += course.coin;
// }
// console.log(totalCoin);

//Cach 2: Dung reduce
// var i = 0
// function coinHandler(accumulator, currentValue, currentIndex, originArray ){
//     i++;
//     total = accumulator + currentValue.coin;
//     console.table({
//         'Luot chay' : i,
//         'Bien Luu tru': accumulator,
//         'gia khoa hoc' : currentValue.coin,
//         'tich tru duoc': total
//     })       
//     console.log(currentValue);
//     return total ; 
// }

// var totalCoin =  courses.reduce(coinHandler, 0); // khoi tao gia tri ban dau cho bien luu tru
// //console.log(totalCoin)


// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(sports){
//     function getgold(accumulator, currentValue){
//         return  accumulator + currentValue.gold;
//     }
//     return sports.reduce(getgold, 0)
// }


// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

// var TotalGold = sports.reduce(function(total, sport){
//     return total + sport.gold;
// }, 0);

// console.log(TotalGold)

// var numbers = [2,4,5,7,9];

// var totalCoin = numbers.reduce(function(total, numbers){
//     return total + numbers;
// });

// console.log(totalCoin);

// *****FLAT - Lam phang mang tu Depth array 

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// }, [])

// console.log(flatArray)

//******* Lay ra cac khoa hoc dua vao mot mang moi

// var topics = [
//     {
//         topic: "Front-End",
//         course:[
//             {
//                 id: 1,
//                 title: "HTLM, CSS"
//             },
//             {
//                 id: 2,
//                 title:"JavaScript"
//             }
//         ]
//     }, 
//     {
//         topic : 'Back End',
//         course:[
//             {
//                 id: 3,
//                 title:'Node JS'
//             },
//             {
//                 id: 4,
//                 title:'Express'
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function(courses, topic){
//     return courses.concat(topic.course);
// }, [])

// console.log(newCourses)

// //-----Practice----
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//   }
// ];

// function calculateRating(arr){
//   var listWatch = arr.filter(function(listWatch){
//     return listWatch['Director'] == 'Christopher Nolan'  
//   });
//   var i = 0;
//   var imdbCal = listWatch.reduce(function(total, score){
//     i++;
//     return total + parseFloat((score["imdbRating"]));
//   }, 0)
//   return imdbCal/i;
// }


// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

//**Khi không có giá trị khơi tạo nó sẽ lấy giá trj của obj đầu tiên làm giá trị khởi tạo */
// Muốn giá trị nhận lại là gì thì biến khởi tạo phải cùng giá trị đó

//----- REDUCE 3-------

// Co gia tri khoi tao
// Array.prototype.reduce2 = function(callback, result){
//   let i = 0;
//   if (arguments.length < 2){ //Nghia la khong truyen initial value
//     i = 1;
//     result = this[0]
//   }
//   for (;i< this.length; i++) {
//     result = callback(result,this[i],i, this);
//   }
//   return result;
// }
// const numbers = [1,2,3,4,5]

// const result = numbers.reduce2((total, number, index, array) => {
//   console.table({total, number, index, array});
//   return total + number;

// },0)

// console.log(result)
//------
// Khong co gia tri khoi tao
 
//Array.prototype.reduce2 = function(callback, result){
//   for (let i = 0; i< this.length; i++){
//     result = callback(result,this[i],i, this);
//   }
//   return result;
// }
// const numbers = [1,2,3,4,5]

// const result = numbers.reduce2((total, number) => {
//   return total + number;
// },0)

// console.log(result)


//------Practice------

// function arrToObj(arr){
//     return arr.reduce(function(obj, value){
//       console.log(value[0])
//       console.log(value[1])
//       obj[value[0]] = value[1];
//       console.table(obj);
//       return obj;
//     },{})
// }
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// //------------Include method------

// // var title = 'Responsive web design';
// // console.log('responsive' in title );    // true
// var course = ['javascript' , 'java', 'PHP']
// console.log(course.includes('Ruby', 0)); // false
// console.log(course.includes('Ruby', -2)); // false 3-2 = 1