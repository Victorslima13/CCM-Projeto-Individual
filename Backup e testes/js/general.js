document.querySelector('.filter').addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
        myprofile();
    }
});

function myprofile() {
    var profile = sessionStorage.ID_USUARIO

    if (profile == undefined) {
        window.location = 'cadastro.html'
    } else {
        var profile = document.getElementById("profilecard").style.display

        if (profile == 'none') {
            document.getElementById('profilecard').style.display = 'flex'
        } else {
            document.getElementById('profilecard').style.display = 'none'
        }
    }
}

function updateuserinfo() {
    var userupd = ipt_usernameupd.value
    var emailupd = ipt_useremailupd.value
    var curpasw = ipt_curruserpasw.value
    var paswupd = ipt_userpaswupd.value
    var confirmpasw = ipt_confirmpaswupd.value

    if (
        userupd == "" ||
        emailupd == "" ||
        curpasw == "" ||
        paswupd == "" ||
        confirmpasw == ""
    ) {
        if (userupd == '') {
            div_userupderror.innerHTML = "Nome de usuário inválido."
        }
        if (emailupd == '') {
            div_emailupderror.innerHTML = "Email inválido."
        }
        if (curpasw == '') {
            div_curpaswerror.innerHTML = "Senha inválida."
        }
        if (paswupd == '') {
            div_paswupderror.innerHTML = "Senha inválida."
        }
        if (confirmpasw == '') {
            div_confirmerror.innerHTML = "Senha não é igual a anterior."
        }
    } else {
        
    }
}

function pagelocate() {
    window.location = 'novoregistro.html'
}

function logout() {
    sessionStorage.clear
    
    window.location = 'index.html'
}

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