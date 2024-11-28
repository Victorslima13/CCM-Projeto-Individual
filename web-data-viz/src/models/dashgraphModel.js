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
        select tipo, count(idser) as Quantidade, universo as Universo
        from ser where universo = '${universo}'
        group by tipo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function takecatalog() {
    var instrucaoSql = `
select nomeser as nome,
raca,
tipo,
nomeusuario as Criador,
universo,
forca,
constituicao,
destresa,
inteligencia,
sabedoria,
carisma,
pontosvida,
pontosmana,
pontosdef,
nivel,
descfisica,
desccomp,
descmecanica from ser
join usuario on idusuario = fkcriador
join caracteristica on idser = fkser;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dashtake,
    dashbargraph,
    takecatalog
};