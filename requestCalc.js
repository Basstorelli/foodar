//wait for user to hit request button, then call calc function
document.getElementById("req").addEventListener("click", calc);

function calc(){
    var total=0;
    var g1 = document.getElementsByName("type");
    var g2 = document.getElementsByName("tip");
    for (i = 0; i < g1.length; i++){
        if (g1[i].checked){
            if (i == 0) //if first radio button
                total += 3;
            else if (i == 1)
                total += 5;
            else total += 10;
        }
    }
    for (j = 0; j < g2.length; j++){
        if (g2[j].checked){
            if (j == 0)
                total = (total*1.10);
            else if (j == 1)
                total = (total*1.15);
            else total = (total*1.20);
        }
    }
    document.getElementById("total").innerHTML = "Total: $" + total;
}