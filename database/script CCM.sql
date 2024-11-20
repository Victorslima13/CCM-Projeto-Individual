create database if not exists CCMcatalog;
use CCMcatalog;

create table if not exists usuario(
idusuario int primary key,
nomeususario varchar(45),
email varchar(50),
senha varchar(60)
);

create table if not exists ser(
idser int primary key,
nomeser varchar(45),
raca varchar(45),
tipo char(8),
constraint chktiposer check(tipo in('criatura', 'monstro')),
fkcriador int,
constraint fkcriadorser foreign key
(fkcriador) references usuario(idusuario),
dtcriacao datetime default current_timestamp,
fkcaracteristica int
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

);