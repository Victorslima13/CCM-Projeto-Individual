function cadastrar() {
    var user = false
    var email = false
    var pasw = false

    var nomeVar = ipt_username.value;
    var emailVar = ipt_useremail.value;
    var senhaVar = ipt_userpasw.value;
    var confirmacaoSenhaVar = ipt_confirmpasw.value;

    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        if (nomeVar == '') {
            div_username.innerHTML = "Nome de usuário inválido."
        }
        if (emailVar == '') {
            div_useremail.innerHTML = "Email inválido."
        }
        if (senhaVar == '') {
            div_userpasw.innerHTML = "Senha inválida."
        }
        if (confirmacaoSenhaVar == '') {
            div_confirmpasw.innerHTML = "Senha não é igual a anterior."
        }

        document.getElementById("signup").classList = "signupstatus reject"
    } else {
        user = true

        var lowerpasw = senhaVar.toLowerCase()
        var upperpasw = senhaVar.toUpperCase()

        if (!emailVar.includes(' ')) {
            if (emailVar.includes('@') && emailVar.includes('.com')) {
                email = true
                div_useremail.innerHTML = ""
            } else {
                div_useremail.innerHTML = "Email inválido."
            }
        } else {
            div_useremail.innerHTML = "Email inválido."
        }

        var characters = [
            "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=",
            "{", "}", "[", "]", "|", "\\", ":", '"', "'", ";", "<", ">", ",", ".", "/", "?", "`"
        ];

        var charincluded = false

        for (let i = 0; i < characters.length && charincluded == false; i++) {
            if (senhaVar.includes(characters[i])) {
                charincluded = true;
            }
        }

        if (charincluded && senhaVar != lowerpasw && senhaVar != upperpasw) {
            div_userpasw.innerHTML = ""
            if (senhaVar == confirmacaoSenhaVar) {
                pasw = true
                div_confirmpasw.innerHTML = ""
            } else {
                div_confirmpasw.innerHTML = "Senha não é igual a anterior."
            }
        } else {
            div_userpasw.innerHTML = "Senha inválida! Deve conter ao menos um caracter maiúsculo, minúsculo e um número."
        }

        if (user && email && pasw) {
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nomeServer: nomeVar,
                    emailServer: emailVar,
                    senhaServer: senhaVar
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);

                    if (resposta.ok) {
                        document.getElementById("signup").classList = "signupstatus accept"

                        setTimeout(() => {
                            window.location = "login.html"
                        }, "2000")
                    } else {
                        if (resposta == '') { }
                        document.getElementById("sigunp").classList = "signupstatus reject"
                        
                        console.log("Houve um erro ao tentar realizar o cadastro!");
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });
        }
    }
}

function entrar() {
    var emailVar = ipt_useremail.value;
    var senhaVar = ipt_userpasw.value;

    if (emailVar == "" || senhaVar == "") {
        div_errorstatus.innerHTML = `Email ou senha inválido.`
        document.getElementById("login").classList = "signupstatus reject"
    } else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                document.getElementById("login").classList = "signupstatus accept"
                div_errorstatus.innerHTML = ``

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.ID_USUARIO = json.id;
                });

                setTimeout(() => {
                    window.location = "novoregistro.html"
                }, "2000")
                
            } else {
                console.log("Houve um erro ao tentar realizar o login!");

                div_errorstatus.innerHTML = `Email ou senha inválido.`
                document.getElementById("login").classList = "signupstatus reject"
            }
        }).catch(function (erro) {
            div_errorstatus.innerHTML = `Email ou senha inválido.`
            document.getElementById("login").classList = "signupstatus reject"
            console.log(erro);
        })

        return false;
    }
}