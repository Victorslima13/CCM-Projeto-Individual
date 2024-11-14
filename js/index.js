function openslidermenu() {
    var status = document.getElementById("dropmenu").style.width
    var imgstatus = document.getElementById("markselect").style.display
    
    if (status > "0px") {
        document.getElementById("dropmenu").style.width = "0"
        document.getElementById("markselect").style.display = "none"
    } else {
        document.getElementById("dropmenu").style.width = "265px"
        document.getElementById("markselect").style.display = "flex"
    }
}
