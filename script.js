const inputbox = document.getElementById("add-task");
const listcontainer = document.getElementById("list");
function addtask() {
  if (inputbox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerText = inputbox.value;
    listcontainer.appendChild(li);
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "delete";
    deletebutton.classList.add("delete-button");
    li.appendChild(deletebutton);
    deletebutton.addEventListener("click", () => {
      listcontainer.removeChild(li);
    });
    inputbox.value = "";
  }
  inputbox.value = "";
}
