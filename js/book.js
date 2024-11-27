const readqty = document.querySelectorAll(".read")

var pageposition = 0

function hidepage() {
    for (var i = 0; i < readqty.length; i++) {
        readqty[i].classList.remove('on')
    }
}

function showpage() {
    readqty[pageposition].classList.add('on')
}

function flippageback() {
    hidepage()

    if (pageposition === 0) {
        document.getElementById("booktitle").style.display = 'flex'
        pageposition = readqty.length - 1
    } else {
        document.getElementById("booktitle").style.display = 'none'
        pageposition--
    }
    
    showpage()
}

function flippagenext() {
    hidepage()
    
    if (pageposition === readqty.length - 1) {
        document.getElementById("booktitle").style.display = 'flex'
        pageposition = 0
    } else {
        document.getElementById("booktitle").style.display = 'none'
        pageposition++
    }

    showpage()
}
