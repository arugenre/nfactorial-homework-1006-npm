function lightModeOn(){
    const root = document.getElementById("body");
    root.className = "light";
    localStorage.setItem("theme", "light");
}
function darkModeOn(){
    const root = document.getElementById("body");
    root.className = "dark";
    localStorage.setItem("theme", "dark");  
}
function getValue(){
    const theme = localStorage.getItem("theme");
    const root = document.getElementById("body");
    root.className = theme;
    if (theme=="dark"){
        $("#switch").attr("checked", "checked");
    }
}
function check(){
    if($('#switch').is(':checked')){
        darkModeOn();
    } else {
        lightModeOn();
    }
} 
function setCookie() {
    const input = $("#input").val();
    console.log(input);
    document.cookie = `user=${input}; expires=Wed, 15 Jun 2022 00:00:00 GMT`;
}