const readqty = document.querySelectorAll('.read')

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
        pageposition = readqty.length - 1
    } else {
        pageposition--
    }

    showpage()
}

function flippagenext() {
    hidepage()

    if (pageposition === readqty.length - 1) {
        pageposition = 0
    } else {
        pageposition++
    }

    showpage()
}