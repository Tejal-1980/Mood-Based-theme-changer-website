const URL = "https://official-joke-api.appspot.com/random_joke";

const getfacts = async() =>{
  console.log("Fetching Data....");
let response = await fetch(URL); 
console.log(response);
let data=await response.json();
console.log(data[1].text);
};