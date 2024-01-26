
function alerttemp(){
    alert("This page says Loading weather report...")
}
function acceptCookie(){
    var cookie = document.querySelector(".cookie");
    
    cookie.remove();
}

function temp(temp){
    var tempsMax = document.querySelectorAll(".forecast-day-temp-max");
    var tempsMin = document.querySelectorAll(".forecast-day-temp-min");
    if(temp == 0){
        for(let tempMax of tempsMax){
            tempMax.innerHTML = tempMax.getAttribute("temp")+"°";
        }
        for(let tempMin of tempsMin){
            tempMin.innerHTML = tempMin.getAttribute("temp")+"°"; 
        }
    }else if(temp == 1){
        for(let tempMax of tempsMax){
            let x = parseInt((parseInt(tempMax.getAttribute("temp"))*1.8)+32)+"°";
            tempMax.innerHTML = x ;
        }
        for(let tempMin of tempsMin){
            let x = parseInt((parseInt(tempMin.getAttribute("temp"))*1.8)+32)+"°";
            tempMin.innerHTML = x ;
        }
    }

}