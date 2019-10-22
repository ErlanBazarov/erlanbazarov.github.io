var stylesht = document.getElementById("stylesht");
var themebutton = document.getElementById("themebutton");

if(localStorage.getItem("themeStyle")==null){
localStorage.setItem("themeStyle", "styles.css");
}
stylesht.setAttribute("href",localStorage.getItem("themeStyle"));

themebutton.addEventListener("click", changetheme);
function changetheme (){
    if(localStorage.getItem("themeStyle")=="styles.css"){
        localStorage.setItem("themeStyle", "styles2.css")
        stylesht.setAttribute("href",localStorage.getItem("themeStyle"));
        }
    else{
        localStorage.setItem("themeStyle", "styles.css")
        stylesht.setAttribute("href",localStorage.getItem("themeStyle"));  
    }
}