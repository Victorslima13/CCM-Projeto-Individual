create database if not exists CCMcatalog;
use CCMcatalog;
-- DROP DATABASE CCMcatalog;
create table if not exists usuario(
idusuario int primary key auto_increment,
nomeusuario varchar(45),
email varchar(50) UNIQUE,
senha varchar(60)
);

create table if not exists ser(
idser int primary key auto_increment,
nomeser varchar(45),
raca varchar(45),
tipo char(8),
constraint chktiposer check(tipo in('criatura', 'monstro', '2')),
fkcriador int,
constraint fkcriadorser foreign key
(fkcriador) references usuario(idusuario),
dtcriacao datetime default current_timestamp,
universo char(3)
);

create table if not exists caracteristica (
idcaracteristica int primary key auto_increment,
fkser int not null,
constraint fkcaracteristicaser foreign key
(fkser) references ser(idser),
forca int,
constituicao int,
destresa int,
inteligencia int,
sabedoria int,
carisma int,
pontosvida int,
pontosmana int,
pontosdef int,
nivel int,
descfisica text,
desccomp text,
descmecanica text
);

create table curtida(
cpkusuario int,
cpkser int,
constraint fkusuariocurtida foreign key
(cpkusuario) references usuario (idusuario),
constraint fksercurtida foreign key
(cpkser) references ser (idser),
constraint cpkusuarioser primary key
(cpkusuario, cpkser)
);

 select count(idser) as Quantidade, universo as Universo
    from ser where universo = 'D&D' and tipo = 'monstro';

select max(idser) as qtdseres, universo 
from ser
group by universo; 

select count(idser), universo
from ser where universo = 'D&D' and tipo = 'criatura';

select count(idser), universo
from ser where universo = 'D&D' and tipo = 'monstro';

select count(idser), universo
from ser where universo = 'D&D' and tipo = '2';

select count(idser) as 'Quantidade de Criaturas' 
from ser
where tipo like 'criatura';

select count(idser) as 'Quantidade de monstros' 
from ser
where tipo like 'monstros';

select count(idser) as 'Quantidade por universo'
from ser
group by universo;


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

desc usuario;

select * from usuario;
select * from ser;