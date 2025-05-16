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
    dataPostagem DATE NOT NULL,
    caminhoImagem VARCHAR(60) NOT NULL
);

CREATE TABLE LikeNoticia(
	idNoticia INT,
    idUsuario INT,
    FOREIGN KEY(idNoticia) REFERENCES Noticia(idNoticia),
    FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario),
    PRIMARY KEY(idNoticia, idUsuario)
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
    vitorias INT NOT NULL,
    derrotas INT NOT NULL,
    empate INT NOT NULL,
    nc INT NOT NULL,
    idCategoria INT,
	caminhoImagem VARCHAR(60) NOT NULL,
    CONSTRAINT fkCategoria FOREIGN KEY(idCategoria) REFERENCES Categoria(idCategoria)
);

CREATE TABLE LutadorNoticia(
	idNoticia INT,
    idLutador INT,
    CONSTRAINT fkNoticiaDoLutador FOREIGN KEY(idNoticia) REFERENCES Noticia(idNoticia),
	CONSTRAINT fkLutador FOREIGN KEY(idLutador) REFERENCES Lutador(idLutador),
    PRIMARY KEY(idNoticia, idLutador)
);

CREATE TABLE Card(
	idCard INT PRIMARY KEY AUTO_INCREMENT,
    local VARCHAR(45) NOT NULL,
    data DATE NOT NULL,
    nome VARCHAR(70) NOT NULL
);

CREATE TABLE Luta(
	idLuta INT PRIMARY KEY AUTO_INCREMENT,
    idLutador1 INT NOT NULL,
    idLutador2 INT NOT NULL,
    idCategoria INT NOT NULL,
    idCard INT NOT NULL,
    rounds INT NOT NULL CHECK(rounds IN(3,5)),
    valendoCinturao boolean NOT NULL,
    caminhoImagem varchar(100),
    foreign key(idLutador1) REFERENCES Lutador(idLutador),
    foreign key(idLutador2) REFERENCES Lutador(idLutador),
    foreign key(idCategoria) references Categoria(idCategoria),
    foreign key(idCard) REFERENCES Card(idCard)
);

CREATE TABLE LutaCard(
	idLuta INT,
    idCard INT,
    FOREIGN KEY(idLuta) REFERENCES Luta(idLuta),
    FOREIGN KEY(idCard) REFERENCES Card(idCard)
);

CREATE TABLE LutaNoticia(
	idNoticia INT,
    idLuta INT,
    foreign key(idNoticia) REFERENCES Noticia(idNoticia),
    FOREIGN KEY(idLuta) REFERENCES Luta(idLuta)
);

 
