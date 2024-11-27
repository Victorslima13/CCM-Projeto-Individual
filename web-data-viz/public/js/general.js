function openslidermenu() {
    var status = document.getElementById("dropmenu").style.width
    
    if (status > "0vw") {
        document.getElementById("dropmenu").style.width = "0vw"
        traveller.innerHTML=`<img src="../images/Andarilho menu.png" alt="Viajante fazendo trilha">`
    } else {
        document.getElementById("dropmenu").style.width = "20vw"
        traveller.innerHTML=`<img src="../images/traveller scratched.png" alt="Viajante fazendo trilha">`
    }
}


function opendropmenunews() {
    document.getElementById("linews").classList = "section selected"
    document.getElementById("licomp").classList = "section"
    // document.getElementById("licamp").classList = "section"

    var status = document.getElementById("subsectionsnews").style.display
    
    if (status === 'none') {
        document.getElementById("subsectionsnews").style.display = 'block'
        document.getElementById("subsectionscomp").style.display = 'none'
        // document.getElementById("subsectionscamp").style.display = 'none'
    } else {
        document.getElementById("subsectionsnews").style.display = 'none'
    }
}

function opendropmenucomp() {
    document.getElementById("linews").classList = "section"
    document.getElementById("licomp").classList = "section selected"
    // document.getElementById("licamp").classList = "section"
    
    var status = document.getElementById("subsectionscomp").style.display
    
    if (status === 'none') {
        document.getElementById("subsectionscomp").style.display = 'block'
        document.getElementById("subsectionsnews").style.display = 'none'
        // document.getElementById("subsectionscamp").style.display = 'none'
    } else {
        document.getElementById("subsectionscomp").style.display = 'none'
    }
}

// function opendropmenucamp() {
//     document.getElementById("linews").classList = "section"
//     document.getElementById("licomp").classList = "section"
//     document.getElementById("licamp").classList = "section selected"
    
//     var status = document.getElementById("subsectionscamp").style.display
    
//     if (status === 'none') {
//         document.getElementById("subsectionscamp").style.display = 'block'
//         document.getElementById("subsectionsnews").style.display = 'none'
//         document.getElementById("subsectionscomp").style.display = 'none'
//     } else {
//         document.getElementById("subsectionscamp").style.display = 'none'
//     }
// }