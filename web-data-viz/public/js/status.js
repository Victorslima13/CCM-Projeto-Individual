var barChart = null

function showgraphic() {
    var ctx = document.getElementById("graphchart")

    fetch(`/medidas/ultimas/${idAquario}`, { cache: 'no-store' }).then(function (response) {})

    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Criaturas', 'Monstros', 'Criaturas Monstros'],
            datasets: [{
                label: `Sensor ${sensorSelecionado + 1}`,
                data: [0, 0, 0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", showgraphic);