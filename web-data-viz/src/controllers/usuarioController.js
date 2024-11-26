var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(
            function (lista) {
                console.log(`\nResultados encontrados: ${lista.length}`);
                console.log(`Resultados: ${JSON.stringify(lista)}`); // transforma JSON em String

                res.json({
                    id: lista[0].idusuario,
                    email: lista[0].email
                })
            }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );

            }

                function cadastrar(req, res) {
                var nome = req.body.nomeServer;
                var email = req.body.emailServer;
                var senha = req.body.senhaServer;

                // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
                usuarioModel.cadastrar(nome, email, senha)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao realizar o cadastro! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
            }

                module.exports = {
                autenticar,
                cadastrar
            }