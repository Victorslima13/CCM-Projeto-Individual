function signup() {
    var user = false
    var email = false
    var pasw = false

    var username = ipt_username.value
    var useremail = ipt_useremail.value
    var userpasw = ipt_userpasw.value
    var confirmpasw = ipt_confirmpasw.value

    if (username != ' ') {
        var lowername = username.toLowerCase()
        var uppername = username.toUpperCase()

        if (username != lowername && username != uppername) {
            user = true
        }
    }

    if (!useremail.includes(' ')) {
        if (useremail.includes('@') && useremail.includes('.com')) {
            email = true
        }
    }

    if (userpasw != ' ' && confirmpasw != ' ') {
        if (`!@#$%^&*()_+-={}[]|\\:"';<>,./?`.includes(userpasw)) { }
        if (userpasw == confirmpasw) {
            pasw = true
        }
    }

    if (document.getElementById("signup").classList == "signupstatus") {
        if (user && email && pasw) {
            document.getElementById("signup").classList = "signupstatus accept"
            
            setTimeout(() => {
                window.location = "login.html"
            }, "2000")
        } else {
            document.getElementById("signup").classList = "signupstatus reject"

            if (!user) {
                div_username.innerHTML = "Nome de usuário inválido."
            }
            if (!email) {
                div_useremail.innerHTML = "Email inválido."
            }
            if (!pasw) {
                if (`!@#$%^&*()_+-={}[]|\\:"';<>,./?`.includes(userpasw)) {
                    div_userpasw.innerHTML = "Senha inválida! Deve conter ao menos um caracter maiúsculo, minúsculo e um número."
                }
                
                if (userpasw != confirmpasw) {
                    div_confirmpasw.innerHTML = "Senha não é igual a anterior."
                }
            }
        }
    }
}

function login() {
    var email = false
    var pasw = false
    
    var useremail = ipt_useremail.value
    var userpasw = ipt_userpasw.value
    
    if (useremail != ' ' && userpasw != ' ') {
        email = true
        pasw = true

        document.getElementById("login").classList = "signupstatus accept"
        div_errorstatus.innerHTML = ``

        setTimeout(() => {
            window.location = "novoregistro.html"
        }, "2000")
    } else {
        div_errorstatus.innerHTML = `Email ou senha inválido.`
        document.getElementById("login").classList = "signupstatus reject"
    }
}