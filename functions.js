function zipCheck(zip){
    if (zip > 20000){
        return true;
    }
    else{
        return false;
    }
}


//display main page header using javascript
function displayBanner(){
    var btn = document.getElementById("banner2");
    var ban = document.getElementById("banner");
    btn.style.display="block";
    ban.style.display="block";
}
setTimeout(displayBanner, 5000);

document.getElementById("banner2").onclick = function(){
    var btn = document.getElementById("banner2");
    var ban = document.getElementById("banner");
    btn.style.display="none";
    ban.style.display="none";
}
/*var inputVal = document.getElementById("zipper").value;
console.log("v: " + inputVal);

console.log(zipCheck(inputVal));*/