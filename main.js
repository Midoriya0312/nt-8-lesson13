// function one(some) {
//     return some()
// }

// function hello() {
//     console.log('hello world');
// }

// one(hello)




// function add(x, y, myfunc) {
//     let res = x + y;
//     return myfunc(res);
// }

// function newFunc(some) {
//     return console.log(some);
// }

// add(3, 4, newFunc)



// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//     console.log('hello');
// }

// function myStopFunction() {
//     clearTimeout(myTimeout);
//     console.log();
// }


// let count = 0;

// function logsmth() {
//     count++;
//     console.log(count);
// }




// let time = new Date();

// let sekund = time.getSeconds()


// function logsmth() {
//     sekund++;
//     console.log(sekund);
//     if(sekund > 59) {
//         stopinterval()
//     }
// }

// let inter = setInterval(logsmth, 1000);

// function stopinterval() {
//     clearInterval(inter)
// }





// Homework 

// Calback


// 1


// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();


// 2


// function add(x, y, myfunc) {
//     let res = x + y;
//     return myfunc(res);
// }

// function newFunc(some) {
//     return console.log(some);
// }

// add(3, 4, newFunc)


// 3



// function one(some) {
//     return some()
// }

// function hello() {
//     console.log('hello world');
// }

// one(hello)


// 4



// function myDisplayer(some) {
//     return some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);


// 5


// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }

// greet('Peter');

// 6


// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// function callMe() {
//     console.log('I am callback function');
// }

// greet('Peter', callMe);

// 7

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);




// setTimeout - clearTimeout

// 1

// const myTimeout = setTimeout(myGreeting, 5000);

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }

// 2

// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//     console.log('hello');
// }

// function myStopFunction() {
//     clearTimeout(myTimeout);
//     console.log();
// }


// 3


// let timeout;

// function myFunction() {
//   timeout = setTimeout(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }



// 4


// let count = 0;

// function increaseCount(){
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// clearTimeout(id); 
// console.log('setTimeout is stopped.');


// 5



// setInterval


// 1


// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//     const date = new Date();
//     date.toLocaleTimeString();
// }

// function myStopFunction() {
//     clearInterval(myInterval)

// }


// 2


// let time = new Date();

// let sekund = time.getSeconds()


// function logsmth() {
//     sekund++;
//     console.log(sekund);
//     if(sekund > 59) {
//         stopinterval()
//     }
// }

// let inter = setInterval(logsmth, 1000);

// function stopinterval() {
//     clearInterval(inter)
// }