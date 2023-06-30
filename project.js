// const form = document.getElementById("addForm");
// const itemLists = document.getElementById("items");
// const filter = document.getElementById("filter");

// //form submit event

// form.addEventListener("submit", addItems);

// // delete event
// itemLists.addEventListener("click", removeItem);

// filter.addEventListener("keyup", filterItems)
 
// // add items funtion

// function addItems(e){
//  e.preventDefault();
//  // get input value

//   const newItem = document.getElementById("item").value;

//   // create new li element
  
//   const li = document.createElement("li");

//   // add  class
//   li.className = "list-group-item";
  
//   // add text node
//   li.appendChild(document.createTextNode(newItem));

//   // create delete buttton

//  const deleteBtn = document.createElement("button");
 
// //  add class to the new items

// deleteBtn.className = "btn btn-danger btn-sm float-right delete";

// //  append text node

// deleteBtn.appendChild(document.createTextNode("x"));

// // append button to li

// li.appendChild(deleteBtn);

// // append li to list


//   itemLists.appendChild(li);
  
// }
// function removeItem(e){
//    if (e.target.classList.contains("delete")) {
//     if (confirm("Are You Sure ?")){
//       const li = e.target.parentElement;
//       itemLists.removeChild(li);
//     }
//    }
// }
// // filter

// function  filterItems(e){
  
//    const text = e.target.value.toLowerCase();
//     // get list

//     const items = itemLists.getElementsByTagName("li");

//     // convert to array

//     Array.from(items).forEach(function(item){
//      const itemName = item.firstChild.textContent;
//       if (itemName.toLowerCase().indexOf(text)  !=-1){
//         item.style.display = "block";
//       }
//       else{
//         item.style.display = "none";
//       }
//     })
// }



// function getHighOrLow(numbers){

  // split the number into new array
  // const arrayNumber = numbers.split(" ").map(Number);

  // Selecting big number and lower 

  // const max = Math.max.apply(null, arrayNumber);
  // const min = Math.min.apply(null, arrayNumber);

  // return a number and that selected above...

//   return max +" "+ min;
// }
// console.log(getHighOrLow("233 233 234"));


// function additionTwoNumber(num1, num2){
//   return num1 / num2;
// }
// console.log( additionTwoNumber(23, 23))

// function getAbbr(text){

//    const newName = text.split(" ");
 
// }

// reviewing for preparing interview

// how to create the object in javscript

// const student {
//   name ="john",
//   age =18
// };
// const newArray =["a", "b", "c"];
// document.getElementById
// function myFunction(a, b){
//   return a===b;
// }


// console.log(myFunction(2, "2"));

// function valueType(a){
//   return typeof a;
// }
// console.log( typeof "2");

// function myFunction(a){
//   const newString = a.slice(3);
//   return newString;
// }
// console.log(myFunction("helloworld"));

// function
// myFunction
// (
// a, b
// )
// {
// if(a<=100){
//  return b/a;
// }
// return (b/a)*100;
// }
// console.log(myFunction(500, 25))

// function
// myFunction
// (
// a, b, c, d, e, f
// )
// {
// const add = a+b;l
// const sub = add-c;
// const mult = sub*c;
// const div = mult/e;

// return  Math.pow(add-sub*mult/div, f);
// }
// console.log (myFunction(2,3,6,4,2,3));

function
myFunction
(
a, b
)
{
if(b.length ===1){
 return b+a;
}
return a+b;
}
console.log(myFunction("yvan", "xc"))

