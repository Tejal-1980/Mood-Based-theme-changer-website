async function hello(){
  console.log("Hello123");
}




// let promise = new Promise((resolve,reject) => {
//   console.log("Hello!! , This is the promise");
//   reject("this cannot be issued");
// });

// function my_function(){ // function defination //

//     console.log("helloo");

// }

// my_function();
// const sum = ( a, b) =>{
//     a+b;
// };
// const mul=( a , b ) =>{
//     a*b ;
// 

// nums=[ 2, 9 ,8 ,7 ,5];
// nums.forEach ((num) => {
//     console.log ( num * num ) ;
// });

// nums=[ 2, 9 ,8 ,7 ,5];
// new_arr = nums.map ((val) => {
//     return val ;
// });
// console.log( new_arr);

// calc_square = nums.map((val) => {
//     return val * 2; 
// });
//    console.log( calc_square ) ;

// ------Ques01------//
// marks = [ 45 , 78 ,98 , 99 ,90 ,  42 ];
// let stud_marks = marks.filter((val) =>{
// return val>= 90 }) ;
// console.log( stud_marks ) ;

//-------Ques02-------//

// let n = prompt(" Enter a number ") ;
// arr=[] ;
// for (let i = 1 ; i <= n ; i++ ) {
// arr[i-1] = i ;
// }
// console.log( arr);
// let sum = arr.reduce((prev , curr) => {
//     return prev + curr;
// })
// console.log( sum );

// let multiply = arr.reduce((prev , curr) => {
//     return prev * curr;
// })
// console.log( multiply);


//----Ques03[ DOM ]-----//

// let h2 = document.querySelector("h2");
// console.dir( h2.innerText); 
// h2.innerText = h2.innerText + " from Apna College Channel  " ; // concatanate // 

//----Ques04 [ DOM ]----//

//  let divs = document.querySelectorAll(" .box");
//  console.log( divs[0]);
// divs[0].innerText=" new value 1 ";
// divs[1].innerText=" new value 2 ";
// divs[2].innerText=" new value 3 ";

// let para = document.querySelector( " para");
// console.log( para.getAttribute("class"))
// let div = document.querySelector(" div ");
// console.log( div );

// let id = div.getAttribute("id");
// console.log( id );
// let div=document.querySelector("div");
// div.style.backgroundColor = "pink";

// let newBtn = document.createElement("button");
// newBtn.innerText=" click me "
// console.log(newBtn);
// let p = document.querySelector(" p ");
// p.after(newBtn);
 //-----ques 5 [ event]-----//
// let modebtn = document.querySelector("#mode");
// currmode= "light"
// modebtn.addEventListener("click" , () => {
//     if (currmode === "light") {
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "#2b2b28"
//     } else {
//         currmode = "light";
//                 document.querySelector("body").style.backgroundColor = "white"

//     }
//     console.log(currmode)
// });

// function hello(){
//   console.log("hellooo!! , this is Tejal ")
// }
// setTimeout(hello ,3000)
  
// setTimeout(()=>{
//   console.log("Hello");
// }, 4000)
// function sum(a,b){
//   console.log(a+b);
// }
// function calculator (a,b,sumcallback){
//   sumcallback(a,b,sum)
  
// }
// calculator(2,9,sum);
