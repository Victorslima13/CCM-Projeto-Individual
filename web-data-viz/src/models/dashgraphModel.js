var database = require("../database/config")

function dashtake() {
    var instrucaoSql = `
        select max(idser) as qtdseres, universo 
        from ser
        group by universo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dashbargraph(universo) {
    var instrucaoSql = `
        select count(idser) as Quantidade, universo as Universo
        from ser where universo = '${universo}'
        group by tipo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dashtake,
    dashbargraph
};