//BAI 44
// // length đo độ dài chuỗi
var myString = "Hoc javascript";
// console.log(myString.length)
// //tim vi tri ky tu dau tien
// console.log(myString.indexOf('ja'))
// tim vi tri thu 2
// console.log(myString.indexOf('ja',8))
// tim vi tri cuoi
// console.log(myString.lastIndexOf('ja'))
// phuong thuc tim kiem
// console.log(myString.search('ja'))
// Cat chuoi (batdau, ketthuc)
// console.log(myString.slice(4,6))
// console.log(myString.slice(4))
// console.log(myString.slice(0))
//Ghi de tat ca- replace
// console.log(myString.replace(/ja/g,'java'))
// chuyen doi chuoi thah hoa thuong
// console.log(myString.toUpperCase())
// console.log(myString.toLowerCase())
// loai bo khoang trang 2 dau
// console.log(myString.trim())
// quy doi tu string sang array - split(diem chung)
// cat tung chu cai thi truyen chuoi rong''
var languages = "js, PHP, ruby, c#";
// console.log(languages.split(", "));
// lay ky tu boi 1 index cho truoc
var myString2 = "Nguyen Van Quyet";
// console.log(myString2.charAt(1))//=> g
//BAI 47 number
var age = 20;
var PI = 3.14;
// lam viec voi number
// chuyen so sang chuoi
// var myAge = age.toString();
// console.log(age.toString())
// lam tron so thap phan- toFixed(so cac so lam tron sau dau phay)
// console.log(PI.toFixed());
// ham kiem tra kieu so phan biet NaN
// function isNumber(value) {
//     return Number.isFinite(value)
// }
//MAMG
// cach tao array
var myArray = ["js", "python", "PHP", "ruby", null, undefined, 1, 3, 4];
// console.log(myArray);
// cach phan biet kieu mang
// console.log(Array.isArray(myArray))
// truy xuat mang
// console.log(myArray.length)
var languages = ["js", "PHP", "ruby"];
// chuyen sang chuoi
// console.log(languages.toString());
// chuyen tu array thanh chuoi
// console.log(languages.join(""));
// // tuong tac voi array

// xoa phan tu cuoi mang tra lai phan tu da xoa - pop()
// console.log(languages.pop())
// them phan tu vao cuoi mang
// console.log(languages.push('Dart,'java',.....))
// xoa ptu dau mang va tra ve phan tu da xoa
// console.log(languages.shift())
// them 1 or n ptu vao dau mang
// console.log(languages.unshift('Dart',...))
// xoa cat chen phan tu moi vao mang
// ele.slice (chi muc, so phan tu xoa, chen them)
// languages.slice(1, 1,'Dart')
// noi array
var languages2 = ["Dart", "arr"];
// console.log(languages.concat(languages2))
// cat 1 vai ele cua amn
// (chi MutationRecord, ngung cat )
// console.log(languages.slice(1, 2));
// object
var emailKey = "email";
var myInfo = {
  name: "Quyet",
  age: 18,
  add: "Nam Dinh",
  [emailKey]: "quyet@gmail.com",
  getName: function () {
    return this.name;
  },
};
// console.log(myInfo.getName());
// them value
// myInfo.email = "Quyet@gmail.com";
// lay value
// console.log(myInfo.name);
// xoa value
// delete myInfo.age
// object constructor
// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getname = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }
// var author = new User("Quyet", "Nguyen", "hinh anh");
// var user = new User("vu", "Nguyen", "anh");
// // them thuoc tinh
// author.title = "chi se";
// object prototype : khuon, nguyen mau
// giup them thuoc tinh ben ngoai ham tao
// User.prototype.className = "f8";
// dtg date
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// var hour = date.getHours();
// // math object
// var pi = Math.PI;
// // lam tron so
// var lamtronso = Math.round(1.3);
// var trituyetdoi = Math.abs(4);
// var lamtrontren = Math.ceil(4.1); //5
// var lamtronduoi = Math.floor(5.9);
// var sothapphannhohon1 = Math.random();
// // lay ra so nho nhat min max
// var mmin = Math.min(2, 5, 3, 1, 3);
// if else
// var date = 2;
// if (date === 2) console.log("t2");
// else if (date === 3) console.log("t3");
// switch
// var date = 4;
// switch (date) {
//   case 2:
//     console.log("t2");
//     break;
//   case 3:
//   case 4:
//     console.log("t3");
//     break;
//   default:
//     console.log("no");
// }
// toan tu 3 ngoi
// var a = c > d ? true : false;
// vong lap loop
// for, while, do while lap voi dk dung
// for in lap qua key cua doi tuong
var myInfor = {
  name: "Quyet",
  age: 20,
};
// ->tra ve 1 mang cac key
// console.log(Object.keys(myInfo))
// ->tra ve 1 mang cac value
// console.log(Object.value(myInfo))
// co the su dung voi vong for of
// for (var key in myInfo) {
//   // lay ra gt cua object
//   console.log(myInfo[key]);
// }
var languages = ["js", "php"];
// for (var key in languages) {
//   console.log(languages[key]);
// }
// for of lap qua value cua doi tuong
// for (var value of languages) {
//   console.log(value);
// }
// sd voi object
// for (var key of Object.keys(myInfor)) {
//   console.log(key);
// }
// for (var value of Object.values(myInfor)) {
//   console.log(myInfor[value]);
// }
// while(DK dung)
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// do while
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);
// while(DK dung)
// continue break
// for (var i = 0; i < 10; i++) {
//   // if (i % 2 !== 0) {
//   //   continue;
//   // }-.>> chi in cac so chan
//   console.log(i);
//   // if (i >= 5) {
//   //   break;
//   // }->> 1 - 5
// }
// ham xoa phan tu trung nhau--new Set \
// var a = [1, 2, 3, 4, 2, 3, 1, 3, 4, 2, 3, 4, 5, 2, 3];
// console.log(new Set(a));
// array methods

var courses = [
  {
    id: 1,
    name: "js",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "js",
    coin: 310,
  },
];
// forEach: duyet qua tung phan tu cua mang
// courses.forEach(function (course) {
//   console.log(course); //-> in ra tung phan tu cua mang
// });
// courses.forEach(function (course, index) {
//   console.log(index, course); // -> in ra chi so va tung phan tu cua mang
// });

// every(): kiem tra tat ca phan tu phai thoa man dk
// var isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);
// some() kt toi thieu 1 phan tu thoa man dieu  kien
// var isFree = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);
// find() tim kiem-> tra ve 1 phan tu dau tien neu tim thay
// var course = courses.find(function (course, index) {
//   return course.name === "js";
// });
// console.log(course);
// filter tim kiem-> tra ve tat ca phan tu neu tim thay thoa man dieu kien
var listCourse = courses.filter(function (course, index) {
  return course.name === "js";
});
console.log(listCourse);
// map() sd khi muon thay doi ele cua arr
// vd thay doi name + them coinText
// var newCourses = courses.map(function (course, index) {
//   return {
//     id: course.id,
//     name: `Khoa hoc: $(course.name)`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//   };
// });
// reduce(fc,b khoi tao gt ban dau cho bien luu tru) nhận về 1 gt duy nhất sau khi tính toán trên các phần tử của arr
// accumulator bien tich tru
//currentValue gia tri hien tai sau moi lan lap
// tinh tong coin
// function coinHandler(accumulator, currentValue) {
//   return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// vd reduce()
// var totalCoins = courses.reduce(function (total, course) {
//   return total + course.coin;
// }, 0); // 0 ko bat buoc
// console.log(totalCoin);
// BT reduce()
// Flat làm phẳng mảng từ depth arr
// var arr = [1, 2, [3, 5, 6], 5, 6, [7, 9], 6, 7];
// var flatArr = arr.reduce(function (a, b) {
//   return a.concat(b);
// }, []);
// console.log(flatArr);
// lay ra cac khoa hoc dua vao 1 mang moi
// var topics = [
//   {
//     topic: "fontend",
//     courses: [
//       {
//         id: 1,
//         title: "HTML,CSS",
//       },
//       {
//         id: 2,
//         title: "javascript",
//       },
//     ],
//   },
//   {
//     topic: "backend",
//     courses: [
//       {
//         id: 1,
//         title: "PHP",
//       },
//       {
//         id: 2,
//         title: "nodeJS",
//       },
//     ],
//   },
// ];
// var listCourses = topics.reduce(function (a, b) {
//   return a.concat(b.courses);
// }, []);
// console.log(listCourses);
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];
function calculateRating(arr) {
  var listWatch = arr.filter(function (a) {
    return a.Director === "Christopher Nolan";
  });
  var sum = listWatch.reduce(function (a, b) {
    return a + parseFloat(b.imdbRating) / listWatch.length;
  }, 0);
  return sum;
}
// console.log(calculateRating(watchList));
// tao ham reduce2()
Array.prototype.reduce2 = function (a, b) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    b = this[0];
  }
  for (; i < this.length; i++) {
    b = a(b, this[i], i, this);
  }
  return b;
};
var arr = [1, 2, 3, 4, 5, 6];
// console.log(
//   arr.reduce2(function (a, b) {
//     return a + b;
//   }, 0)
// );
// ham include() Array and String
var names = "Nguyen Van Quyet";
console.log(names.includes("Vann"));
var arr = ["js", "PHP", "ruby"];
console.log(arr.includes("PHP"));
