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

INSERT INTO usuario (nome, email, cpf, senha) VALUES
('Bruno Martins', 'bruno.martins@email.com', '10120230344', 'senha001'),
('Larissa Costa', 'larissa.costa@email.com', '20230340455', 'senha002'),
('Pedro Henrique', 'pedro.henrique@email.com', '30340450566', 'senha003'),
('Juliana Rocha', 'juliana.rocha@email.com', '40450560677', 'senha004'),
('Gabriel Moraes', 'gabriel.moraes@email.com', '50560670788', 'senha005'),
('Beatriz Cunha', 'beatriz.cunha@email.com', '60670780899', 'senha006'),
('Fernando Dias', 'fernando.dias@email.com', '70780890900', 'senha007'),
('Patrícia Gomes', 'patricia.gomes@email.com', '80890901011', 'senha008'),
('Rafael Batista', 'rafael.batista@email.com', '90901012122', 'senha009'),
('Clara Mendes', 'clara.mendes@email.com', '11223344556', 'senha010'),
('Diego Nunes', 'diego.nunes@email.com', '22334455667', 'senha011'),
('Helena Barros', 'helena.barros@email.com', '33445566778', 'senha012'),
('Igor Carvalho', 'igor.carvalho@email.com', '44556677889', 'senha013'),
('Sofia Ribeiro', 'sofia.ribeiro@email.com', '55667788990', 'senha014'),
('Marcelo Freitas', 'marcelo.freitas@email.com', '66778899001', 'senha015'),
('Alice Teixeira', 'alice.teixeira@email.com', '77889900112', 'senha016'),
('Thiago Ramos', 'thiago.ramos@email.com', '88990011223', 'senha017'),
('Carolina Farias', 'carolina.farias@email.com', '99001122334', 'senha018'),
('Vinícius Lopes', 'vinicius.lopes@email.com', '12312312399', 'senha019'),
('Luiza Assis', 'luiza.assis@email.com', '32132132188', 'senha020');


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

INSERT INTO comentarios (comentario, dataHora, fkUsuario) VALUES
('Um dos livros mais intrigantes que já li, adorei a ideia da identidade reinventada.', '2024-11-22 09:14:22', 4),
('A crítica social do Pirandello sempre pega de jeito, Mattia Pascal é um ótimo exemplo.', '2024-11-22 16:41:03', 12),
('Impressionante como o autor brinca com a noção de liberdade. Me fez pensar bastante.', '2024-11-23 11:03:55', 7),
('O humor irônico desse livro é muito bom. Não esperava rir tanto.', '2024-11-23 22:47:19', 15),
('Gostei da forma como ele retrata a fuga da própria vida. Bem atual.', '2024-11-23 08:55:12', 2),
('A narrativa flui muito bem. Terminei em dois dias.', '2024-11-23 17:44:58', 19),
('A sensação de estar preso a um papel social é tão real quanto desconfortável.', '2024-11-24 10:44:33', 1),
('Pirandello sempre me surpreende. Esse livro é daqueles que ficam na cabeça.', '2024-11-24 23:12:21', 9),
('Mattia Pascal é um personagem tão falho que acaba sendo completamente humano.', '2024-11-25 14:56:01', 20),
('A segunda vida dele parece libertadora, mas é quase uma prisão nova. Genial.', '2024-11-25 19:08:49', 6),
('As reflexões filosóficas deixam tudo mais profundo sem travar a leitura.', '2024-11-25 07:33:14', 13),
('O final me deixou dividida entre tristeza e alívio.', '2024-11-25 21:17:52', 3),
('É interessante ver como a morte social transforma completamente o personagem.', '2024-11-25 12:48:36', 5),
('Recomendo muito esse livro. Não é longo, mas é denso do jeito certo.', '2024-11-26 18:59:27', 17),
('Gostei principalmente do tom melancólico escondido nas entrelinhas.', '2024-11-26 09:21:06', 11),
('A história questiona a própria noção de destino. Adorei isso.', '2024-11-27 16:02:44', 8),
('A construção psicológica do Mattia é impecável.', '2024-11-27 10:13:32', 14),
('É curioso como ele tenta ser livre, mas nunca consegue realmente fugir de si mesmo.', '2024-11-27 18:27:19', 18),
('Leitura rápida, porém cheia de camadas. Excelente.', '2024-11-27 23:40:55', 10),
('Esse livro me fez repensar escolhas que achei que eram sólidas.', '2024-11-28 14:05:11', 16);

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
    desc usuario;

    
select * from comentarios;
select * from livros;
select * from usuario;

-- Selects para comentários na index
select idComentario, comentario from comentarios;

select comentario 
	from comentarios
	order by dataHora desc
	limit 5;

select usuario.nome as NomeUser,
		comentarios.comentario as Comentario
        from comentarios
        join usuario
        on comentarios.fkUsuario = usuario.idUsuario
        order by idComentario desc
        limit 10;
        
-- Selects para comentários na dashboard
select * from comentarios;

select 
	count(idComentario), 
	date(dataHora) as dia 
	from comentarios
    group by dia
    order by dia asc;

-- Selects para KPI's

select count(idComentario) as qtdComentarios from comentarios
	where date(dataHora) = current_date();

select round(avg(qtdPorDia),2) from 
	(select count(*) as 'qtdPorDia', 
		date(dataHora) as 'dia'
        from comentarios
		group by date(dataHora)) 
			as mediaDeComentarios;

        

		
