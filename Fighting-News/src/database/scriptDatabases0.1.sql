CREATE DATABASE fightingNews;
USE fightingNews;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL UNIQUE,
	email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE Noticia(
	idNoticia INT PRIMARY KEY AUTO_INCREMENT,
    tituloNoticia VARCHAR(100) NOT NULL,
    conteudoNoticia VARCHAR(5000) NOT NULL,
    caminhoImagem VARCHAR(60) NOT NULL,
    visualizacoes INT NOT NULL DEFAULT 0
);

CREATE TABLE Comentario(
	idComentario INT auto_increment,
    idUsuario INT,
    idNoticia INT,
    comentario VARCHAR(400) NOT NULL,
    data DATETIME NOT NULL,
    CONSTRAINT fkUsuario foreign key(idUsuario) REFERENCES Usuario(idUsuario),
	CONSTRAINT fkNoticia foreign key(idNoticia) REFERENCES Noticia(idNoticia),
    PRIMARY KEY(idComentario, idUsuario, idNoticia)
);

CREATE TABLE Categoria(
	idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
	pesoKG INT NOT NULL
);

CREATE TABLE Lutador(
	idLutador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    cartel VARCHAR(8) NOT NULL,
    idCategoria INT,
    CONSTRAINT fkCategoria FOREIGN KEY(idCategoria) REFERENCES Categoria(idCategoria)
);

CREATE TABLE LutadorNoticia(
	idNoticia INT,
    idLutador INT,
    CONSTRAINT fkNoticiaDoLutador FOREIGN KEY(idNoticia) REFERENCES Noticia(idNoticia),
	CONSTRAINT fkLutador FOREIGN KEY(idLutador) REFERENCES Lutador(idLutador),
    PRIMARY KEY(idNoticia, idLutador)
);

SELECT * FROM Usuario;
