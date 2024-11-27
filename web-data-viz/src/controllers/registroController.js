var registroModel = require("../models/registroModel");

function registrar(req, res) {
    var bname = req.body.nomeserServer
    var brace = req.body.racaServer
    var btype = req.body.typeServer
    var bcreator = req.body.userServer
    var buni = req.body.uniServer
    var bstre = req.body.streServer
    var bcons = req.body.consServer
    var bdex = req.body.dexServer
    var bint = req.body.intServer
    var bwis = req.body.wisServer
    var bchar = req.body.charServer
    var blp = req.body.lpServer
    var bmp = req.body.mpServer
    var bdp = req.body.dpServer
    var blvl = req.body.lvlServer
    var bpdesc = req.body.pdescServer
    var bcdesc = req.body.cdescServer
    var bmdesc = req.body.mdescServer

    registroModel.registrar(bname, brace, btype, bcreator, buni, bstre, bcons, bdex, bint, bwis, bchar, blp, bmp, bdp, blvl, bpdesc, bcdesc, bmdesc)
        .then(
            function (resultado) {
                res.json(resultado);

            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao registrar o ser! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

}

module.exports = {
    registrar
}