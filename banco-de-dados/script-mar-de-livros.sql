/* Mar de Livros */

create database marlivros;

use marlivros;

-- Usuário

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (50),
email varchar(100),
cpf char(11),
senha varchar(50)
);

-- Comentários

create table comentarios(
idComentario int primary key auto_increment,
comentario varchar(200),
dataHora datetime default current_timestamp,
fkUsuario int,
constraint fkUsuario
	foreign key (fkUsuario)
		references usuario(idUsuario)
);

-- Livros

create table livros(
idLivros int primary key auto_increment,
nome varchar(100),
autor varchar(100),
descricao varchar(1000),
isbn char(13),
editora varchar(50),
genero varchar(50),
dtRegistro date default current_timestamp
);

-- Pesquisa

create table pesquisa(
idPesquisa int primary key auto_increment,
genero varchar(50)
);