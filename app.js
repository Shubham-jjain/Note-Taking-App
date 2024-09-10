// selecting input to append in list
let input = document.getElementById("title");
// selecting ul  to append in input.
let list = document.getElementById("list");
//selecting my button for event triggering
let addButtonEl = document.getElementById("add-btn");

addButtonEl.addEventListener("click", function () {
  //extracting the value from input
  let inp = input.value;
  //creating the new element to append the inp
  let li = document.createElement("li");
  //inserting the value into the created li
  li.innerText = inp;
  //appending the selected in ul.
  list.appendChild(li);
  //clear kardo apne inp ko
  //har baar baad mein karna hai nhi in put gayab ho jayega
  input.value = "";
  //remove the list item after clicking on list item.
  li.addEventListener("click",function(){
    li.remove();
  })
});
