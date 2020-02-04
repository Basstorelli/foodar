

document.getElementById("zipcheck").addEventListener("click", zipCheck);
function zipCheck(){
    var zip = document.getElementById("zipinput").value;
    if (zip > 20000){
        document.getElementById("zipresponse").innerHTML="Sorry, we are unable to reach that area.";
    }
    else{
        document.getElementById("zipresponse").innerHTML="You are within range of Foodar services!";
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
