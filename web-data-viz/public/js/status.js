var vetorqtycreature = []
var vetorqtymonster = []
var vetorqtycretmonst = []
var vetoruni = []
var biggestuni = ''
var lowestuni = ''
var beingqtydnd = 0
var beingqtyt20 = 0
var beingqtyop = 0

function pulldata() {
    dashbargraph('D&D');

    dashbargraph('T20');

    dashbargraph('OP');
}

function dashbargraph(universo) {
    fetch(`/dashgraph/dashbargraph/${universo}`, {
        method: 'GET'
    }).then((res) => res.json())
        .then((json) => {
            console.log(json)

            for (var i = 0; i < json.length; i++) {
                if (json[i].tipo == 'criatura') {
                    vetorqtycreature.push(json[i].Quantidade)
                }
                if (json[i].tipo == 'monstro') {
                    vetorqtymonster.push(json[i].Quantidade)
                }
                if (json[i].tipo == '2') {
                    vetorqtycretmonst.push(json[i].Quantidade)
                }
                if (json[i].Universo == 'D&D') {
                    beingqtydnd += json[i].Quantidade
                }
                if (json[i].Universo == 'T20') {
                    beingqtyt20 += json[i].Quantidade
                }
                if (json[i].Universo == 'OP') {
                    beingqtyop += json[i].Quantidade
                }

                if (beingqtydnd > beingqtyt20 && beingqtydnd > beingqtyop) {
                    biggestuni = 'D&D'
                } else if (beingqtydnd < beingqtyt20 && beingqtydnd < beingqtyop) {
                    lowestuni = 'D&D'
                }
                if (beingqtyt20 > beingqtydnd && beingqtyt20 > beingqtyop) {
                    biggestuni = 'T20'
                } else if (beingqtyt20 < beingqtydnd && beingqtyt20 < beingqtyop) {
                    lowestuni = 'T20'
                }
                if (beingqtyop > beingqtydnd && beingqtyop > beingqtyt20) {
                    biggestuni = 'OP'
                } else if (beingqtyop < beingqtydnd && beingqtyop < beingqtyt20) {
                    lowestuni = 'OP'
                }
            }

            higheruni.innerHTML = `<br>${biggestuni}`
            loweruni.innerHTML = `<br>${lowestuni}`

            console.warn(vetorqtycreature, vetorqtymonster, vetorqtycretmonst)
            showgraph(vetorqtycreature, vetorqtymonster, vetorqtycretmonst)
        })
        .catch((error) => {
            console.log(error)
        })
}

function showgraph(vetorqtycreature, vetorqtymonster, vetorqtycretmonst) {
    const graficoCriaturas = document.getElementById('graphqtychart');
    const graficoCreatUni = document.getElementById('graphunichart');

    new Chart(graficoCriaturas, {
        type: 'bar',
        data: {
            labels: ['D&D', 'T20', 'OP'],
            datasets: [{
                label: 'Quantidade',
                backgroundColor: ['#AFFB3C'],
                borderColor: ['#AFFB3C'],
                data: [beingqtydnd, beingqtyt20, beingqtyop],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: 'Quantidade de Seres Registrados:',
                    color: '#000000',
                    display: true
                },
                legend: {
                    position: 'top',
                    labels: {
                        boxHeight: 3
                    }
                }
            }
        }
    })

    new Chart(graficoCreatUni, {
        type: 'bar',
        data: {
            labels: ['D&D', 'T20', 'OP'],
            datasets: [{
                label: 'Criatura',
                backgroundColor: ['#79BAEC'],
                borderColor: ['#79BAEC'],
                data: vetorqtycreature,
                borderWidth: 1
            },
            {
                label: 'Monstro',
                backgroundColor: ['#FF0000'],
                borderColor: ['#FF0000'],
                data: vetorqtymonster,
                borderWidth: 1
            },
            {
                label: 'Criaturas Monstro',
                backgroundColor: ['#C21645'],
                borderColor: ['#C21645'],
                data: vetorqtycretmonst,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: 'Tipos de seres por Universo:',
                    color: '#000000',
                    display: true
                },
                legend: {
                    position: 'top',
                    labels: {
                        boxHeight: 3
                    }
                }
            }
        }
    })
}

function takecatalog() {
    fetch(`/dashgraph/takecatalog`, {
        method: 'GET'
    }).then((res) => res.json())
        .then((json) => {
            console.log(json)
            var msg = `
            <ul class="bookcontent">
                <li>
                    <div class="read on">
                        <div class="bookcover"></div>
                    </div>
                </li>
            `
            for (var i = 0; i < json.length; i++) {
                msg += `
                <li>
                <div class="read">
                    <div class="pageleft">
                        <div class="pagetext">
                        </div>
                    </div>
                    <div class="pageright">
                        <div class="pagetext">
                        </div>
                    </div>
                </div>
            </li>
                `
            }

            msg += `</ul>`

            div_bookcontent.innerHTML = msg
        })
        .catch((error) => {
            console.log(error)
        })
}

takecatalog()