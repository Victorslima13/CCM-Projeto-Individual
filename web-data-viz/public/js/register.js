function register() {
    var bname = false
    var btype = false
    var uni = false
    var atrib = false

    var beingname = ipt_beingname.value
    var creature = ipt_creature.checked
    var monster = ipt_monster.checked

    if (beingname != '' && (creature || monster)) {
        bname = true
        btype = true

        if (creature) {
            var beingtype = 'criatura'
        }

        if (monster) {
            var beingtype = 'monstro'
        }

        if (creature && monster) {
            var beingtype = '2'
        }
    }

    var race = ipt_beingrace.value

    var chkdnd = ipt_DnD.checked
    var chkt20 = ipt_t20.checked
    var chkop = ipt_Order.checked

    if (chkdnd) {
        uni = true

        var beinguni = 'D&D'

        var stre = ipt_strengthdnd.value
        var cons = ipt_constdnd.value
        var dex = ipt_dextrydnd.value
        var int = ipt_inteldnd.value
        var wis = ipt_wisdomdnd.value
        var char = ipt_charisdnd.value
        var lp = ipt_dndlifepoint.value
        var mp = ipt_dndmanapoint.value
        var dp = ipt_dnddefpoint.value
        var lvl = ipt_dndlevel.value

        if (stre != ' ' && cons != ' ' && dex != ' ' && int != ' ' && wis != ' ' && char != ' ' && lp != ' ' && mp != ' ' && dp != ' ' && lvl != ' ') {
            atrib = true
        }
    } else if (chkt20) {
        uni = true

        var beinguni = 'T20'

        var stre = ipt_strengtht20.value
        var cons = ipt_constt20.value
        var dex = ipt_dextryt20.value
        var int = ipt_intelt20.value
        var wis = ipt_wisdomt20.value
        var char = ipt_charist20.value
        var lp = ipt_t20lifepoint.value
        var mp = ipt_t20manapoint.value
        var dp = ipt_t20defpoint.value
        var lvl = ipt_t20level.value

        if (stre != ' ' && cons != ' ' && dex != ' ' && int != ' ' && wis != ' ' && char != ' ' && lp != ' ' && mp != ' ' && dp != ' ' && lvl != ' ') {
            atrib = true
        }
    } else if (chkop) {
        uni = true

        var beinguni = 'OP'

        var wis = 0
        var mp = 0

        var stre = ipt_strengthop.value
        var dex = ipt_agiop.value
        var int = ipt_intelop.value
        var cons = ipt_vigop.value
        var char = ipt_preop.value
        var lp = ipt_oplifepoint.value
        var dp = ipt_opdefpoint.value
        var lvl = ipt_oplevel.value

        if (stre != ' ' && dex != ' ' && int != ' ' && cons != ' ' && char != ' ' && lp != ' ' && dp != ' ' && lvl != ' ') {
            atrib = true
        }
    }

    var phisdesc = div_phisdesc.value
    var compdesc = div_compdesc.value
    var mecandesc = div_mecandesc.value

    if (phisdesc = '') { phisdesc = null }
    if (compdesc = '') { compdesc = null }
    if (mecandesc = '') { mecandesc = null }

    if (sessionStorage.ID_USUARIO == 0 || sessionStorage.ID_USUARIO == ' ') {
        bname = false
        btype = false
        uni = false
        atrib = false
    }

    if (bname && btype && uni && atrib) {
        var creator = sessionStorage.ID_USUARIO

        fetch("/registro/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userServer: creator,
                nomeserServer: beingname,
                racaServer: race,
                typeServer: beingtype,
                uniServer: beinguni,
                streServer: stre,
                consServer: cons,
                dexServer: dex,
                intServer: int,
                wisServer: wis,
                charServer: char,
                lpServer: lp,
                mpServer: mp,
                dpServer: dp,
                lvlServer: lvl,
                pdescServer: phisdesc,
                cdescServer: compdesc,
                mdescServer: mecandesc
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                document.getElementById("register").classList = "registerstatus accept"
                div_errorstatus.innerHTML = ``

                console.log(resposta);
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    setTimeout(() => {
                        window.location = "novoregistro.html"
                    }, "2000")
                    
                });
                
            } else {
                console.log("Houve um erro ao tentar realizar o login!");
                
                resposta.text().then(texto => {
                    console.error(texto);
                });
                
                document.getElementById("register").classList = "signupstatus reject"
                div_errorstatus.innerHTML = `Preencha todos os campos obrigatórios.`
            }
        }).catch(function (erro) {
            console.log(erro);
        })
    } else {
        div_errorstatus.innerHTML = `Prencha todos os campos obrigatórios.`
        document.getElementById("register").classList = "registerstatus reject"
    }
}

function chkdnd() {
    ipt_DnD.checked = true
    ipt_t20.checked = false
    ipt_Order.checked = false

    document.getElementById('div_dnd').style.display = 'flex'
    document.getElementById('div_t20').style.display = 'none'
    document.getElementById('div_order').style.display = 'none'
}

function chkt20() {
    ipt_DnD.checked = false
    ipt_t20.checked = true
    ipt_Order.checked = false

    document.getElementById('div_dnd').style.display = 'none'
    document.getElementById('div_t20').style.display = 'flex'
    document.getElementById('div_order').style.display = 'none'
}

function chkop() {
    ipt_DnD.checked = false
    ipt_t20.checked = false
    ipt_Order.checked = true

    document.getElementById('div_dnd').style.display = 'none'
    document.getElementById('div_t20').style.display = 'none'
    document.getElementById('div_order').style.display = 'flex'
}