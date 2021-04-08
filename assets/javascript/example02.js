var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var content = document.getElementsByClassName("content");
for (let i = 0; i < content.length; i++) {
    content[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tab-links");
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.defaultView.addEventListener("load", function() {
    document.getElementById("defaultOpen").click();
});

for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function(evt) {
        let content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-links");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        if (evt.currentTarget.innerText === "Page 1") {
            document.getElementById("page1").style.display = "block";
        }
        if (evt.currentTarget.innerText === "Page 2") {
            document.getElementById("page2").style.display = "block";
        }
        if (evt.currentTarget.innerText === "Page 3") {
            document.getElementById("page3").style.display = "block";
        }
        if (evt.currentTarget.innerText === "Page 4") {
            document.getElementById("page4").style.display = "block";
        }
        evt.currentTarget.className += " active";
    });
}