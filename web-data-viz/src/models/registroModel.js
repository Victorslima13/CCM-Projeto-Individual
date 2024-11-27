var database = require("../database/config")

async function registrar(bname, brace, btype, bcreator, buni, bstre, bcons, bdex, bint, bwis, bchar, blp, bmp, bdp, blvl, bpdesc, bcdesc, bmdesc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar():", bname, brace, btype, bcreator, buni, bstre, bcons, bdex, bint, bwis, bchar, blp, bmp, bdp, blvl, bpdesc, bcdesc, bmdesc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSqlser = `
        INSERT INTO ser (nomeser, raca, tipo, fkcriador, dtcriacao, universo) VALUES ('${bname}', '${brace}', '${btype}', '${bcreator}', default, '${buni}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSqlser);
    
    const ser = await database.executar(instrucaoSqlser)
    
    var instrucaoSqlcaracteristica = `
    INSERT INTO caracteristica (fkser, forca, constituicao, destresa, inteligencia, sabedoria, carisma, pontosvida, pontosmana, pontosdef, nivel, descfisica, desccomp, descmecanica) VALUES ('${ser.insertId}', '${bstre}', '${bcons}', '${bdex}', '${bint}', '${bwis}', '${bchar}', '${blp}', '${bmp}', '${bdp}', '${blvl}', '${bpdesc}', '${bcdesc}', '${bmdesc}')
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSqlcaracteristica);
    return database.executar(instrucaoSqlcaracteristica);
}

module.exports = {
    registrar
};