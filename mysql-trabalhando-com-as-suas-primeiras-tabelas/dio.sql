--1

CREATE TABLE pessoas {
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
}

INSERT INTO pessoas (nome, nascimento) VALUES ('Nathaly', '1990-05-22');
INSERT INTO pessoas (nome, nascimento) VALUES ('Pedro', '1995-07-17');
INSERT INTO pessoas (nome, nascimento) VALUES ('Marcela', '2000-04-05');
INSERT INTO pessoas (nome, nascimento) VALUES ('Flavio', '2002-12-01');
INSERT INTO pessoas (nome, nascimento, genero) VALUES('Paula', '1998-10-22', 'F')

UPDATE pessoas SET genero='M' WHERE id=2;
UPDATE pessoas SET genero='F' WHERE id=3;
UPDATE pessoas SET genero='M' WHERE id=4;

SELECT COUNT(id), genero FROM pessoas GROUP BY genero

--2

C:\xampp\mysql\bin>
mysql -u root

show databases;

use dio-msql;

show tables;

CREATE table cursos(id_curso INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(10));

INSERT INTO cursos VALUES ('MySQL');
INSERT INTO cursos VALUES ('HTML');
INSERT INTO cursos VALUES ('CSS');

SELECT * FROM cursos;

update cursos set nome='HTML5' where id_curso=2;

insert into cursos (nome) values ('Contabilidade');
insert into cursos (nome) values ('Economia');

select * from cursos where id_cursos=5;
delete from cursos where id_cursos=5;

alter table cursos add carga_horaria int(2);
update cursos set carga_horaria=20;
update cursos set carga_horaria=40 where id_cursos=2;

EXIT;

drop table usuarios;


drop database test;

SELECT * FROM pessoas JOIN cursos ON pessoas.FK_CURSOS = cursos.id_cursos;

delete TODAS AS TABELAS DO DIO-MySQL

select * from videos join seo on videos.fk_seo = seo.id_seo;

select videos.titulo, seo.categoria from videos join seo on videos.fk_seo = seo.id_seo;

INSERT INTO `videos_playlist`(`fk_videos`, `fk_playlist`) VALUES (2, 1);

SELECT playlist.nome_pl, videos.titulo, autor.nome FROM playlist join videos_playlist on playlist.id_playlist = videos_playlist.fk_playlist join videos ON videos.id_video = videos_playlist.fk_videos join autor on autor.id_autor = videos.fk_autor;

--titulo do video, nome da playlist, autor daa playlist

SELECT autor.nome, playlist.nome_pl, videos.titulo, autor.nome FROM playlist join videos_playlist on playlist.id_playlist = videos_playlist.fk_playlist join videos ON videos.id_video = videos_playlist.fk_videos join autor on autor.id_autor = videos.fk_autor
JOIN playlist ON playlist.fk_autor = autor.id_autor;

--relação das outras playlists
--definir autores das playlists

--3

select * from videos;

--quais videos em quais canais n - n
--relaciona tabela videos_canais com tab videos e tab canais

select * from videos_canais join videos on videos_canais.fk_canal = videos.id_video;
--simplificar nome das tablas
select * from videos_canais as vc join videos as v on vc.fk_canal = v.id_video;

-- adiciona tab canais
select * from videos_canais as vc join videos as v on vc.fk_video = v.id_video
join canais as c on vc.fk_canal = c.id_canal;

-- nome do video, autor, canal
select v.nome_video, v.autor_video, c.nome_canal from videos_canais as vc 
join videos as v on vc.fk_video = v.id_video
join canais as c on vc.fk_canal = c.id_canal;

-- inner join = join => sempre retorna os valores presentes, sem campo NULL

-- alter join => toda a consuçta, inclusive quem não tem valor
-- identifica a consulta q n tera relacionamento


-- right alter join => na direita n tem NULL => abrir mão do relacionamento
select * from videos_canais as vc right outer join videos as v on vc.fk_video = v.id_video

select * from videos as v left outer join videos_canais as vc on v.id_video = vc.fk_video;


--usando union => qnd tem numero de colunas iguais // uniao das consultas
select v.id_video, v.nome_video from videos as v left outer join videos_canais as vc on v.id_video = vc.fk_video
select c.id_canal, c.nome_canal from videos_canais as vc right outer join canais as c on vc.fk_canal = c.id_canal;


--tab canais, cria coluna 4 canal HTML

--video html tem id 5

--videos_canal > insere anal HTML com Paginas html

select * from videos_canais join videos on videos_canais.fk_video = video.id_video
join canais on videos_canais.fk_canal = canais.id_canal -- traz o video de html adicionado

--trazer só os videos do canal php
select * from videos_canais join videos on videos_canais.fk_video = video.id_video
join canais on videos_canais.fk_canal = canais.id_canal
where canais.id_canal = 2;

