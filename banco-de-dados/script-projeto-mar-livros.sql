/* Mar de Livros */

create database marlivros;

use marlivros;

-- Usuário

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (50),
email varchar(100),
cpf char(11),
senha varchar(50),
biosDescricao varchar(200),
biosGenero varchar(50),
biosLivro varchar(50)
);

-- Genero

create table genero(
idGenero int primary key auto_increment,
tipo varchar(45)
);

-- Resultado da Pesquisa
create table resultadoPesquisa(
idResultado int,
fkUsuario int,
fkGenero int,
voto int,
primary key (idResultado, fkUsuario, fkGenero),
	constraint fkUsuario
		foreign key (fkUsuario)
			references usuario(idUsuario),
	constraint fkGenero
		foreign key (fkGenero)
			references genero(idGenero)
);


-- Comentários

create table comentarios(
idComentario int primary key auto_increment,
comentario varchar(200),
dataHora datetime default current_timestamp,
fkUsuario int,
constraint fkUsuarioComentario
	foreign key (fkUsuario)
		references usuario(idUsuario)
);

insert into comentarios (comentario, fkUsuario) values
('Que livro bacana', '1'),
('Que livro demais', '2'),
('Que livro top demais', '1');
insert into comentarios (comentario, fkUsuario, dataHora) values
('Nao gostei desse', '1', '2025-11-15 00:00:00'),
('Este é apenas OK', '2', '2025-11-15 07:45:00');
-- Livros

create table livros(
idLivros int primary key auto_increment,
nome varchar(100) not null,
autor varchar(100) not null,
descricao varchar(1000) not null,
isbn char(13) not null,
editora varchar(50),
genero varchar(50),
dtRegistro datetime default current_timestamp
);


show tables;
	desc comentarios;
	desc livros;
    desc genero;
    desc resultadoPesquisa;
    desc usuario;
    
select * from comentarios;
select * from livros;
select * from genero;
select * from resultadoPesquisa;
select * from usuario;


-- Selects para comentários na index
select idComentario, comentario from comentarios;

create view comentarioChatView as select idComentario, comentario from comentarios;

-- Selects para comentários na dashboard

select 
	count(idComentario), 
	date(dataHora) as dia 
	from comentarios
    group by dia
    order by dia asc limit 7;
		

create view comentarioDashboard as select 
	count(idComentario), 
	date(dataHora) as dia 
	from comentarios
    group by dia
    order by dia asc limit 7;
    
select * from comentarioDashboard;
