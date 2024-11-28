document.querySelector('.filter').addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
        myprofile();
    }
});

function myprofile() {
    if (sessionStorage.ID_USUARIO != undefined) {
        var profilecard = document.getElementById("profilecard").style.display
        
        if (profilecard == 'none') {
            document.getElementById('profilecard').style.display = 'flex'
        } else {
            document.getElementById('profilecard').style.display = 'none'
        }
    } else {
        window.location = 'cadastro.html'
    }
}

function updateuserinfo() {
    var profile = sessionStorage.ID_USUARIO

    if (profile == undefined) {
        window.location = 'cadastro.html'
    } else {
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
            user = true
            var pasw = false
            var email = false

            var lowerpasw = paswupd.toLowerCase()
            var upperpasw = paswupd.toUpperCase()

            if (!emailupd.includes(' ')) {
                if (emailupd.includes('@') && emailupd.includes('.com')) {
                    email = true
                    div_emailupderror.innerHTML = ""
                } else {
                    div_emailupderror.innerHTML = "Email inválido."
                }
            } else {
                div_emailupderror.innerHTML = "Email inválido."
            }

            var characters = [
                "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=",
                "{", "}", "[", "]", "|", "\\", ":", '"', "'", ";", "<", ">", ",", ".", "/", "?", "`"
            ];

            var charincluded = false

            for (let i = 0; i < characters.length && charincluded == false; i++) {
                if (paswupd.includes(characters[i])) {
                    charincluded = true;
                }
            }

            if (charincluded && paswupd != lowerpasw && paswupd != upperpasw) {
                div_paswupderror.innerHTML = ""
                if (paswupd == confirmpasw) {
                    pasw = true
                    div_confirmerror.innerHTML = ""
                } else {
                    div_confirmerror.innerHTML = "Senha não é igual a anterior."
                }
            } else {
                div_paswupderror.innerHTML = "Senha inválida! Deve conter ao menos um caracter maiúsculo, minúsculo e um número."
            }

            if (user && email && pasw) {
                fetch("/usuarios/atualizarusuario", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nomeServer: userupd,
                        emailServer: emailupd,
                        senhaServer: paswupd,
                        antigasenhaServer: curpasw,
                        profileServer: profile
                    }),
                })
                    .then(function (resposta) {
                        console.log("resposta: ", resposta);
    
                        if (resposta.ok) {
                            sessionStorage.clear()
                            setTimeout(() => {
                                window.location = "login.html"
                            }, "1000")
                        } else {
                            if (resposta == '') { }
                            console.log("Houve um erro ao tentar atualizar os dados!");
                        }
                    })
                    .catch(function (resposta) {
                        console.log(`#ERRO: ${resposta}`);
                    });
            }
        }
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