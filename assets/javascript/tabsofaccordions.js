var i, tabcontent, tablinks, coll;
coll = document.getElementsByClassName("collapsible");

//function openTab(evt, tabName) {
// tabcontent = document.getElementsByClassName("tab-content");
// for (i = 0; i < tabcontent.length; i++) {
//   tabcontent[i].style.display = "none";
// }
// tablinks = document.getElementsByClassName("tab-links");
// for (i = 0; i < tablinks.length; i++) {
//   tablinks[i].className = tablinks[i].className.replace(" active", "");
// }
//document.getElementById(tabName).style.display = "flex";
//evt.currentTarget.className += " active";
//}

tabcontent = document.getElementsByClassName("tab-content");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tab-links");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

for (i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function (evt) {
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if (evt.currentTarget.innerText === "Cash Out") {
      document.getElementById("cash-out").style.display = "flex";
    }
    if (evt.currentTarget.innerText === "Live Now") {
      document.getElementById("live-now").style.display = "flex";
    }
    if (evt.currentTarget.innerText === "Unsettled") {
      document.getElementById("unsettled").style.display = "flex";
    }
    if (evt.currentTarget.innerText === "Settled") {
      document.getElementById("settled").style.display = "flex";
    }
    if (evt.currentTarget.innerText === "All") {
      document.getElementById("all").style.display = "flex";
    }
    evt.currentTarget.className += " active";
  });
}

function handleParent(e) {
  // console.log(e.currentTarget);
}

function handleButtonChild(e) {
  // e.stopPropagation();
  // console.log(e.currentTarget);
}

function handleTextChild(e) {
  // e.stopPropagation();
  // console.log(e.currentTarget);
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener(
    "click",
    function (e) {
      //console.log(this.children);
      this.classList.toggle("active");
      this.children[1].classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
    true
  );
}

// function handleMouseOver() {
//   this.children[0].setAttribute("src", "./assets/images/user-circle-white.svg");
// }
// function handleMouseOut() {
//   this.children[0].setAttribute("src", "./assets/images/user-circle.svg");
// }
