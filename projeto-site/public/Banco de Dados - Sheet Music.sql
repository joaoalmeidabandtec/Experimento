create database SheetMusic;
use sheetmusic;

create table Usuario (
	ID_Usuario int primary key auto_increment,
    Nome_Usuario varchar(50),
    Idade int,
    Email varchar(100),
    Instrumento varchar(30),
    Senha varchar(40)
);

insert into usuario value
(null, 'João Vitor', 20, 'joao.v.m.a@bandtec.com.br', 'Violino', '12099violino');

select* from usuario;