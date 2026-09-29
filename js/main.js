

document.querySelectorAll(".ahmed").forEach(function (sasa){
    sasa.onclick=function(event){
        document.querySelector("#demo").style.color=sasa.dataset.colorr;
    }
})



document.querySelector("#myform").addEventListener("submit", function (event) {
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");

    if (works == "") {
        alert("enter your data")
        event.preventDefault();

    } else {
        var myli = document.createElement("li");
        myli.innerHTML = works;
        result.append(myli);
        document.querySelector("#works").value = "";
        event.preventDefault();
    }


})



