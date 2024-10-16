//functions added and removed by event listeners


//drop down logic for tasks
export function handleDropDown(e) {
  if(e.currentTarget.querySelector('.list-item-drop-down').style.display === "none"
  && !e.target.classList.contains("checkbox-element")
  && !e.target.classList.contains("drop-down-section")) {

    e.currentTarget.querySelector('.list-item-drop-down').style.display = "grid";
    let targetedTask = e.currentTarget;
    targetedTask.style.height = "200px";

  } else if(e.currentTarget.querySelector('.list-item-drop-down').style.display === "grid"
  && !e.target.classList.contains("checkbox-element")
  && !e.target.classList.contains("drop-down-section")) {

    e.currentTarget.querySelector('.list-item-drop-down').style.display = "none";
    let targetedTask = e.currentTarget;
    targetedTask.style.height = "100px";

  }
}