function myfunction() {
    var x = document.getElementById("myTopnav");
    if (x.classname === "topnav"){ 
        x.classname + = "responsive";
    } else {
        x.classname = "topnav";
    }
}