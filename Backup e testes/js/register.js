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
        btype= true
    }
    
    var race = ipt_beingrace.value
    
    var chkdnd = ipt_DnD.checked
    var chkt20 = ipt_t20.checked
    var chkop = ipt_Order.checked
    
    if (chkdnd) {
        uni = true

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
        
        if (stre == ' ' && cons == ' ' && dex == ' ' && int == ' ' && wis == ' ' && char == ' ' && lp == ' ' && mp == ' ' && dp == ' ' && lvl == ' ') {
            atrib = true
        }
    } else if (chkop) {
        uni = true
        
        var stre = ipt_strengthop.value
        var agi = ipt_agiop.value
        var int = ipt_intelop.value
        var vig = ipt_vigop.value
        var pre = ipt_preop.value
        var lp = ipt_oplifepoint.value
        var dp = ipt_opdefpoint.value
        var vd = ipt_oplevel.value
        
        if (stre != ' ' && agi != ' ' && int != ' ' && vig != ' ' && pre != ' ' && lp != ' ' && dp != ' ' && vd != ' ') {
            atrib = true
        }
    }

    if (bname && btype && uni && atrib) {
        document.getElementById("register").classList = "registerstatus accept"
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