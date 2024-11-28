var dashgraphModel = require("../models/dashgraphModel");

function dashtake(req, res) {
    dashgraphModel.dashtake(req, res)
        .then(
            (resultado) => { res.status(200).json(resultado) }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function dashbargraph(req, res) {
    var universo = req.params.universo
    var tipo = req.params.tipo

    dashgraphModel.dashbargraph(universo)
        .then(
            (resultado) => { res.status(200).json(resultado) }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    dashtake,
    dashbargraph
}