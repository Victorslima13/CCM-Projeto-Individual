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
constraint chktiposer check(tipo in('criatura', 'monstro')),
fkcriador int,
constraint fkcriadorser foreign key
(fkcriador) references usuario(idusuario),
dtcriacao datetime default current_timestamp,
fkcaracteristica int,
universo char(3)
);

create table if not exists caracteristica (
idcaracteristica int primary key auto_increment,
forca int,
constituicao int,
destresa int,
inteligencia int,
sabedoria int,
carisma int,
pontosvida int,
pontosdef int,
pontosmana int,
descfisica text,
desccomp text,
descmecanica text
);

alter table ser 
add constraint fkcaracteristicaser foreign key
(fkcaracteristica) references caracteristica(idcaracteristica);

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

insert into usuario values
(default, 'caio', 'caio@email.com', 'senha123');

insert into caracteristica values
(default, 3, 3, 3, 3, 3, 3, 3, 3, 3, null, null, null);

insert into ser values
(default, 'mona', 'rato', 'criatura', 1, default, 1, 'D&D');

insert into curtida values
(1, 1);

select count(idser) as 'Quantidade de Criaturas' 
from ser
where tipo like 'criatura';

select count(idser) as 'Quantidade de monstros' 
from ser
where tipo like 'monstros';

select count(idser) as 'Quantidade por universo'
from ser
group by universo;

select * from usuario;