export function handleDropDown(e) {
  if(e.currentTarget.querySelector('.list-item-drop-down').style.display === "none"
  && !e.target.classList.contains("checkbox-element")
  && !e.target.classList.contains("drop-down-section")) {

    e.currentTarget.querySelector('.list-item-drop-down').style.display = "flex";

  } else if(e.currentTarget.querySelector('.list-item-drop-down').style.display === "flex"
  && !e.target.classList.contains("checkbox-element")
  && !e.target.classList.contains("drop-down-section")) {

    e.currentTarget.querySelector('.list-item-drop-down').style.display = "none";

  }
}