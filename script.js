let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = function () {
  hideModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    hideModal();
  }
};

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key.toUpperCase() === "ESCAPE") {
    hideModal();
  }
});

let cardButtons = document.getElementsByClassName("showModalBtn");
let modalContent = document.getElementsByClassName("modal-content")[0];

for (let cardButton of cardButtons) {
  cardButton.addEventListener("click", (event) => {
    cloneContent(event.target.parentElement);
    showModal();
  });
}

function cloneContent(target) {
  let children = target.children;

  for (name of target.classList) {
    if (name === "neumorphism") {
      modalContent.classList.add("neumorphism");
    }
  }

  for (child of children) {
    let clone = child.cloneNode(true);
    if (child.className !== "showModalBtn") {
      modalContent.append(clone);
    }
    modalContent.append(closeBtn);
  }
}

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
  resetModal();
}

function resetModal() {
  modalContent.innerHTML = "";
  modalContent.classList.remove("neumorphism");
}
