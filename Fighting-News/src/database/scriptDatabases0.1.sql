CREATE DATABASE fightingNews;
USE fightingNews;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL UNIQUE,
	email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    admin TINYINT NOT NULL DEFAULT 0,
    caminhoImagem VARCHAR(500) NOT NULL DEFAULT './imgs/defaultProfile.jpg'
);

CREATE TABLE Noticia(
	idNoticia INT PRIMARY KEY AUTO_INCREMENT,
    tituloNoticia VARCHAR(100) NOT NULL,
    previaNoticia VARCHAR(300) NOT NULL,
    dataPostagem DATE NOT NULL,
    caminhoImagem VARCHAR(500) NOT NULL
);

CREATE TABLE ParagrafoNoticia(
	idParagrafoNoticia INT PRIMARY KEY auto_increment,
	idNoticia INT,
    conteudo VARCHAR(4000) NOT NULL,
    ordem INT NOT NULL,
    FOREIGN KEY(idNoticia) REFERENCES Noticia(idNoticia) ON DELETE CASCADE
);

CREATE TABLE LikeNoticia(
	idNoticia INT,
    idUsuario INT,
    FOREIGN KEY(idNoticia) REFERENCES Noticia(idNoticia) ON DELETE CASCADE,
    FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE,
    PRIMARY KEY(idNoticia, idUsuario)
);

CREATE TABLE Comentario(
	idComentario INT auto_increment,
    idUsuario INT,
    idNoticia INT,
    comentario VARCHAR(400) NOT NULL,
    data DATETIME NOT NULL,
    CONSTRAINT fkUsuario foreign key(idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE,
	CONSTRAINT fkNoticia foreign key(idNoticia) REFERENCES Noticia(idNoticia) ON DELETE CASCADE,
    PRIMARY KEY(idComentario)
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
    CONSTRAINT fkNoticiaDoLutador FOREIGN KEY(idNoticia) REFERENCES Noticia(idNoticia) ON DELETE CASCADE,
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
    foreign key(idNoticia) REFERENCES Noticia(idNoticia) ON DELETE CASCADE,
    FOREIGN KEY(idLuta) REFERENCES Luta(idLuta)
);

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	dataInicio DATETIME NOT NULL,
    dataFim DATETIME NOT NULL
);

CREATE TABLE ResultadoQuiz(
	idUsuario INT,
    idQuiz INT,
    acertos INT,
    FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(idQuiz) REFERENCES Quiz(idQuiz),
    PRIMARY KEY(idUsuario, idQuiz)
);

INSERT INTO Usuario (nome, email, senha, admin, caminhoImagem) VALUES
('João Silva', 'joao@email.com', '123', 0, './imgs/defaultProfile.jpg'),
('Maria Souza', 'maria@email.com', '123', 0, './imgs/defaultProfile.jpg'),
('AdminMaster', 'admin@email.com', 'admin', 1, './imgs/defaultProfile.jpg');

INSERT INTO Categoria (nome, pesoKG) VALUES
('Peso Pena', 66),
('Peso Leve', 70),
('Peso Meio-Médio', 77),
('Peso Pesado', 120);

INSERT INTO Lutador (nome, vitorias, derrotas, empate, nc, idCategoria, caminhoImagem) VALUES
('Jon "Bones" Jones', 28, 1, 0, 0, 4, './imgs/imagens-lutadores/Jon-Jones.png');

INSERT INTO Lutador (nome, vitorias, derrotas, empate, nc, idCategoria, caminhoImagem) VALUES
('Tom Aspinall', 15, 3, 0, 0, 4, './imgs/imagens-lutadores/Tom-Aspinall.png');

INSERT INTO Card (local, data, nome) VALUES
('New York', '2026-06-06', 'UFC 325');

INSERT INTO Luta (idLutador1, idLutador2, idCategoria, idCard, rounds, valendoCinturao, caminhoImagem) VALUES
(1, 2, 4, 1, 5, true, './imgs/imagens-lutas/Jon-Jones-vs-Tom-Aspinall.webp');

INSERT INTO LutaCard (idLuta, idCard) VALUES
(1, 1);

INSERT INTO Noticia (tituloNoticia, previaNoticia, dataPostagem, caminhoImagem) VALUES
('Belal Muhammad define alvo e data para retorno após perder título do UFC', 'No último dia 10 de maio, Belal Muhammad viu seu reinado na divisão dos...',
 '2025-05-25', './imgs/imagens-noticias/belal-muhammad-alfinetada.webp'),
 
('Ex-campeão do UFC ironiza indefinição sobre futuro de Jon Jones: “Quem se importa?”', 'A novela sobre o eventual retorno de Jon Jones ao octógono parece não ter...',
 '2025-05-25', './imgs/imagens-noticias/robert-whittaker-ufc-298-media-day.webp'),
 
('Carlos Prates surge inconsolável após derrota para Ian Garry no UFC; veja',
 'Carlos Prates comoveu fãs e membros da comunidade do MMA ao publicar, em seu...',
 '2025-05-25', './imgs/imagens-noticias/carlos-prates-entrada-capuz-ufc-vegas-100.webp'),
 
('Favorito ao title shot, Movsar Evloev indica que foi preterido pelo UFC', 
'Invicto na carreira e com nove vitórias consecutivas no octógono mais famoso do mundo,...',
 '2025-05-25', './imgs/imagens-noticias/Movsar-Evloev-UFC-Vegas-56.webp'),
 
('Charles Do Bronx cita adaptação de Topuria ao peso-leve como possível vantagem no UFC 317',
 'No dia 28 de junho, na ‘T-Mobile Arena’, em Las Vegas (EUA), Charles Oliveira...', '2025-05-23',
 './imgs/imagens-noticias/charles-do-bronx-entrada-ufc-309-nova-york.webp'),
 
('Jon Jones reage com dureza a Tom Aspinall e tensão aumenta no UFC: “Cale a boca”', 
'A tensão entre Jon Jones e Tom Aspinall ganhou força nos últimos dias. O...', '2025-05-23',
 './imgs/imagens-noticias/jon-jones-ufc-309-1.webp'),
 
('Polêmica! Brasileiro levanta suspeitas de armação após sofrer nocaute relâmpago no MMA',
 'No último fim de semana, o evento Xtreme Combat Championship 2, realizado em Viena,...', '2025-05-23',
 './imgs/imagens-noticias/Burak-Kizilirmak-Delberty-Lamark-xcc2.webp'),
 
('Refém de Jon Jones? Alexander Volkov expressa frustração com situação dos pesos-pesados',
 'A indefinição no topo da divisão dos pesos-pesados do UFC não influencia na carreira apenas dos envolvidos, no caso Jon Jones...',
 '2025-06-01', './imgs/imagens-noticias/volkov-protesto-derrota-ufc-310-dana-white.webp'),

('Arman Tsarukyan abre as portas para duelo com Paddy Pimblett no UFC',
 'Primeiro colocado no ranking peso-leve (70 kg) do UFC, Arman Tsarukyan foi deixado de...',
 '2025-06-01', './imgs/imagens-noticias/arman-tsarukyan-ufc-austin-comemoracao.webp'),

('Preocupa? Merab Dvalishvili sofre lesão às vésperas de luta no UFC 316',
 'Às vésperas da realização do UFC 316, marcado para acontecer no dia 7 de...', '2025-06-01',
 './imgs/imagens-noticias/merab-dvalishvili-comemoracao-ufc-311.webp');

INSERT INTO ParagrafoNoticia (idNoticia, conteudo, ordem) VALUES
(1, '

No último dia 10 de maio, Belal Muhammad viu seu reinado na divisão dos meio-médios (77 kg) chegar ao fim,
 ao ser derrotado pelo australiano Jack Della Maddalena, por pontos, na luta principal do UFC 315, no Canadá.
 Apesar de terem passado apenas duas semanas, o americano de ascendência palestina já tem em mente um alvo e uma
 data definidos para o seu retorno ao octógono, agora como ex-campeão.', 1),
(1, 'Em recente episódio do programa ‘Remember The Show’, Belal descartou ter pressa para competir novamente e deixou claro que,
 apesar de já ter voltado a treinar, vai respeitar o tempo necessário para se
 recuperar completamente – seja fisicamente ou mentalmente. Isso não quer dizer que Muhammad
 não tenha planos para o seu futuro já traçados.', 2),
(1, 'Inclusive, o americano de ascendência palestina deixou o mistério de lado e afirmou que o também ex-campeão Kamaru Usman
 é o seu principal alvo neste momento, caso o nigeriano saia com a vitória sobre Joaquin Buckley no combate marcado para
 o dia 14 de junho, no UFC Atlanta. No melhor dos cenários para Belal, os dois resolveriam suas desavenças em outubro.', 3),
 (1, '“Eu vou ser o cara que conquista o cinturão de novo. Estou a uma luta de conquistar o cinturão.
 Quando eu olho para o cenário da divisão, quando penso em quem poderia ser (meu próximo adversário),
 obviamente, eu acho que vai ser o Kamaru, se ele passar pelo Buckley. Você tem Ian Garry, você tem (Sean) Brady,
 até o Buckley, se ele vencer. Se eles fizerem Jack (Della Maddalena) vs Islam (Makhachev), o próximo (desafiante) vai ter
 que vencer uma (luta). Para mim, o mês dos sonhos seria outubro. Mas não tão longe quanto Abu Dhabi”, declarou Belal.', 4),

(2, 'A novela sobre o eventual retorno de Jon Jones ao octógono parece não ter fim. 
E a indefinição que gira em torno do assunto tem tirado os fãs de MMA do sério. 
Mas a frustração com a situação não está atrelada somente aos torcedores, mas também aos lutadores profissionais.
 Além, claro, de Tom Aspinall – principal interessado no futuro de ‘Bones’ -, Robert Whittaker também analisou o cenário.
 Sem papas na língua, o ex-campeão peso-médio (84 kg) do UFC questionou a relevância do americano na atual conjuntura do Ultimate.', 1),
(2, 'Em recente participação no ‘MMArcade Podcast’, o australiano sinalizou que a demora para definir seu próximo passo pode, 
com o passar do tempo, minimizar a relevância de Jones, apesar de seus feitos inquestionáveis na liga. 
Com uma média de uma luta por temporada nos últimos dois anos e sem perspectiva de voltar à ativa, o americano, 
campeão linear dos pesos-pesados, poderia, inclusive, ter seu cinturão retirado pelo UFC – ao menos no entendimento de Whittaker.', 2),
(2, '“Sinceramente, quem se importa agora? (com o futuro de Jones). Chega. Chega de esperar. Estou farto e honestamente,
 todo mundo enchendo o saco dele e alfinetando e tentando tirá-lo do sério é ainda pior, ao meu ver. Já chega disso também,
 simplesmente chega. Não sei como o Jones ainda detém o título. Sei que já disse há alguns meses: ‘Ninguém vai tirar (o cinturão)
 do Jones, não se pode fazer isso com ele’. Mas cara, qual é, você está de brincadeira agora”, opinou Robert.', 3),
 (2, 'Atual dono do título interino até 120 kg, Aspinall aguarda por uma superluta contra Jon Jones, campeão linear dos pesos-pesados.
 Mas, enquanto Dana White esbanja confiança e garante a realização do confronto sempre que questionado, o americano dá sinais opostos. 
 ‘Bones’ recentemente rebateu críticas dos fãs alegando que já comunicou à alta cúpula do UFC seus planos. Posteriormente, o ‘GOAT’
 do MMA foi flagrado em uma filmagem em que supostamente admitia ter encerrado sua carreira. Desta forma, seu futuro como lutador 
 segue como uma grande incógnita.', 4),

(3, 'Carlos Prates comoveu fãs e membros da comunidade do MMA ao publicar, em seu canal no ‘Youtube’, um vídeo emocionante
 nos bastidores de sua última luta. Visivelmente abalado, o brasileiro aparece inconsolável ao comentar a derrota para
 Ian Machado Garry no UFC Kansas City, resultado que encerrou sua invencibilidade na organização (veja o vídeo abaixo
 ou clique aqui).', 1),
(3, 'A gravação, feita logo após o combate, mostra o lutador lidando com o peso do insucesso em um momento decisivo de sua trajetória.
 Em meio à emoção, ele desabafa sobre a frustração com o desempenho e reconhece a responsabilidade pelo resultado.', 2),
(3, '“Foi mal, Criszinho [treinador de Prates]. Perdi a briga“, lamentou, sem conter os sentimentos.', 3),
(3, '“Durante o momento delicado, o meio-médio (77 kg) recebeu o apoio de dois nomes importantes de sua equipe: Pablo Sucupira,
 líder da Fighting Nerds, e o treinador Flavio Álvaro. Ambos estiveram ao lado do atleta oferecendo suporte emocional e reforçando
 a ideia de que o revés não é individual, mas compartilhado por todo o time. A mensagem foi clara: é hora de aprender juntos com a 
 sensação da derrota.', 4),
 (3, 'Apesar do baque, Prates indicou que pretende seguir em frente e tirar lições da experiência. Ainda não há definição sobre seu 
 retorno ao octógono, mas o episódio serve como lembrete de que os bastidores do MMA envolvem muito mais do que vitórias ou derrotas 
 dentro do cage.', 5),

(4, 'Invicto na carreira e com nove vitórias consecutivas no octógono mais famoso do mundo, Movsar Evloev é visto por
 grande parte da comunidade do MMA como o principal favorito ao próximo ‘title shot’ na divisão dos pesos-penas (66 kg)
 do UFC. Porém, ao que tudo indica, o lutador russo será novamente preterido pela organização.', 1),
(4, 'E quem adiantou essa informação foi o próprio Evloev. Através do seu perfil oficial no ‘X’ (veja abaixo ou clique aqui e aqui),
 o peso-pena russo – número 5 no ranking da divisão no UFC – indicou que, apesar da vontade do atual campeão Alexander Volkanovski, 
 a entidade comandada por Dana White decidiu não escalá-lo como próximo desafiante ao cinturão até 66 kg.', 2),
(4, 'Assim, de acordo com o russo, ele entraria em ação no evento do UFC programado para ser sediado em Abu Dhabi, no dia 26 de julho,
 contra um adversário não confirmado oficialmente. Por outro lado, o campeão Volkanovski, segundo Evloev, colocaria
 seu título em jogo no mês de setembro.', 3),
 (4, '“Se você é um lutador do UFC e acredita que é o melhor do mundo, então, você tem que lutar toda luta que eles joguem para você,
 sem risco, sem recompensa. Vejo vocês em julho, vamos lá! #AbuDhabi Obrigado, campeão (Alexander Volkanovski), 
 por tentar lutar comigo. Eu vou lutar em julho e você luta em setembro. Espero que nós dois ganhemos e possamos nos 
 encontrar em dezembro”, publicou Evloev.', 4),
(4, 'Caso se confirme, esta não será a primeira vez que Movsar é preterido pelo UFC na hora de definir o próximo ganhador
do ‘title shot’ na divisão dos penas. Na última disputa de título na categoria, após o ex-campeão Ilia Topuria vagar o cinturão, 
o Ultimate optou por escalar o veterano Alexander Volkanovski, ex-soberano da classe de peso, e o brasileiro Diego Lopes, 
que vinha em ascensão, mas já havia perdido para o próprio Evloev em sua estreia na organização.', 5),
(4, 'A manifestação do atleta russo nas redes sociais dá ainda mais força para as especulações sobre o interesse do
 UFC em promover uma revanche entre o campeão Alexander Volkanovski e o mexicano Yair Rodriguez, pelo título dos penas,
 na edição de número 320, que deve acontecer no dia 13 de setembro, no México. Outro rumor que parece se confirmar é 
 a escalação de Movsar Evloev como adversário do recém-contratado Aaron Pico, ex-lutador do Bellator, para o card do
 UFC Abu Dhabi, em julho.', 6),

(5, 'No dia 28 de junho, na ‘T-Mobile Arena’, em Las Vegas (EUA), Charles Oliveira e Ilia Topuria lideram o
 UFC 317 em um confronto que coloca em jogo o cinturão vago dos pesos-leves (70 kg). Mesmo ex-campeão e atual número 
 2 do ranking da categoria, ‘Do Bronx’ desponta como franco azarão para o combate. Mas em seu entendimento, o brasileiro
 terá uma espécie de trunfo na manga a seu favor no duelo contra ‘El Matador’: a melhor adaptação à faixa de peso.', 1),
(5, 'Ex-campeão peso-pena (66 kg) do Ultimate, Topuria fará sua primeira luta com 70 kg no octógono mais famoso do mundo.
 Por já ter feito a exata mesma transição na carreira, Charles destaca que requer tempo até o atleta adaptar totalmente seu 
 corpo e armas e uma nova divisão de peso. Desta forma, mais habituado a competir no mais alto nível nos pesos-leves, ‘Do Bronx’
 questionou, inclusive, como será a capacidade de conversão de potência do georgiano radicado na Espanha no card da 
 ‘Semana Internacional da Luta’.', 2),
(5, '“Realmente, na categoria que ele estava, na de baixo, com 66 kg, ele estava colocando a mão e os caras estavam sentindo.
 Mas a gente está falando da categoria mais difícil (leves). Não é porque é a nossa, é porque é real. O peso-leve é a categoria
 mais difícil, pega os 10 primeiros ali, só leão, um mais brabo do que o outro. Do mesmo jeito que ele tem mão pesada,
 eu também tenho mão pesada. Eu sou um verdadeiro peso-leve. Subi de categoria e sei o quanto demorou para eu me adaptar,
 pegar meu ‘timing’, meu físico, trabalhar o corpo”, destacou Charles, em entrevista ao canal 
 ‘Overdogs Brasil com Renato Moicano’', 3),
 (5, 'Na última rodada, os fãs acompanharam uma versão mais cerebral e temperada de Do Bronx no octógono, na revanche contra Michael 
 Chandler. Posteriormente, o brasileiro revelou que estava mais contido porque lutou lesionado contra o americano.
 Sem qualquer tipo de restrição para o embate com Topuria, o faixa-preta previu um verdadeiro ‘choque de carretas’
 com o rival que, assim como ele, possui a agressividade como uma das principais características.', 4),
 (5, '“A gente tem que tomar cuidado, não pode desrespeitar. Ele é um cara que conecta mão, não pode brincar.
 Mas tenho poder de fogo nas mãos e tenho um jiu-jitsu bom. Então vamos jogar, vamos lutar. Estou com muita sede,
 quero me tornar campeão de novo. Vou andar para frente o tempo inteiro. É um casamento (de estilos) bom, porque
 ele é um cara que anda para frente e eu não sei andar para trás, só ando para frente. Então vamos ver na hora que
 se chocar, o que vai acontecer. Não tem para onde correr”, projetou o especialista em jiu-jitsu.', 5),
 (5, 'Apesar dos fãs que fazem a tradicional ‘fezinha’ considerarem Charles zebra, o confronto divide opiniões entre alguns 
 lutadores profissionais. Se por um lado o ex-campeão peso-galo (61 kg) Aljamain Sterling indica que o brasileiro terá uma
 “noite longa” lidando com o poder de fogo de Topuria. Do outro, o top 7 dos pesos-leves Mateusz Gamrot aposta suas fichas
 em Do Bronx, citando a diferença de tamanho entre os dois como uma grande vantagem a seu favor.', 6),

(6, 'A tensão entre Jon Jones e Tom Aspinall ganhou força nos últimos dias. O atual campeão
 linear dos pesos-pesados do UFC respondeu de maneira direta e incisiva as recentes declarações do detentor
 do cinturão interino da categoria.', 1),
(6, 'Durante entrevista ao canal do ex-lutador Demetrious Johnson no ‘Youtube’, Aspinall demonstrou 
frustração com a estagnação da divisão e afirmou que já não faz questão de enfrentar o veterano. 
Segundo ele, seu foco agora é ser reconhecido como o verdadeiro campeão.', 2),
(6, '“Estou inativo há quase um ano e estão me falando para esperar.
 Eu não ligo sobre lutar com Jon Jones, eu só quero ser o campeão linear”, declarou o britânico.', 3),
(6, '‘Bones’ tem sido enigmático em suas aparições recentes e ao comentar sobre seus próximos passos. Apesar disso,
 o atleta parece estar no limite sobre o possível confronto, elevando o tom da discussão pública entre os dois pesos-pesados.
 A réplica de Jones veio por meio das redes sociais, em um comentário publicado na página do ‘Instagram’ da Verdict MMA.', 4),
 (6, '“Cale a boca e faça o que te mandam fazer”, escreveu o americano.', 5),
 (6, 'Aos 37 anos, Jones não sobe ao octógono desde a vitória sobre Stipe Miocic, em novembro de 2024.
 Antes disso, havia conquistado o título ao finalizar Ciryl Gane no UFC 285, em março do ano anterior. 
 Desde então, o lutador parece não ter pressa para retornar, atualmente aproveitando um período na Tailândia.', 6),
 (6, 'Já Aspinall vive momento diferente. Com 32 anos, o inglês conquistou o cinturão interino ao nocautear Sergei Pavlovich
 em novembro de 2023 e o defendeu com sucesso diante de Curtis Blaydes, em julho de 2024, em Londres. Desde então,
 aguarda uma definição sobre a tão esperada unificação dos títulos.', 7),
(6, 'Com a ausência prolongada do campeão linear, cresce a pressão da comunidade do MMA para que o 
UFC tome uma decisão em relação ao futuro da categoria. Enquanto isso, o cenário permanece indefinido —
 alimentado por provocações, incertezas e a expectativa dos fãs por um confronto que finalmente unifique
 os dois cinturões dos pesos pesados.', 8),

(7, 'No último fim de semana, o evento Xtreme Combat Championship 2, realizado em Viena, Áustria,
 teve seu destaque marcado por uma luta controversa entre o turco Burak Kizilirmak e o brasileiro Delberty Lamark.
 O confronto terminou em poucos segundos com um nocaute que rapidamente levantou suspeitas dentro da comunidade do MMA.
 A rapidez do desfecho e as circunstâncias da finalização provocaram questionamentos sobre a legitimidade do resultado.', 1),
(7, 'A luta representava o retorno de Lamark ao octógono após quase seis anos afastado —
 sua última apresentação havia sido em 2018 — e chamou atenção não só pela velocidade do fim, 
 mas também pela maneira como o golpe que derrubou o brasileiro foi desferido. Os comentaristas que narraram o 
 combate elogiaram a técnica do turco, chegando a comparar seu jab a grandes nomes do esporte, como Anderson Silva,
 mas logo surgiram dúvidas quanto à real força do impacto.', 2),
(7, 'Ao analisar os replays, alguns especialistas perceberam que o brasileiro aparentou ter sido atingido de fato,
 mas o momento em que ele se joga no chão, com a cabeça batendo com força contra o solo, levantou suspeitas de uma 
 queda exagerada — ou até mesmo simulada. Essa hipótese ganhou força considerando o histórico recente do atleta europeu:
 sua última vitória também foi considerada duvidosa pelo site especializado ‘Tapology’, que classificou o combate como inelegível
 para figurar nos registros oficiais, alegando falta de competitividade e ausência de padrão internacional.', 3),
 (7, 'Mesmo diante da controvérsia, não há provas concretas de que os lutadores tenham participado de um resultado combinado.
 O portal ‘MMA Fighting’ ressaltou que, embora combates arranjados existam no esporte, são casos raros, e que é fundamental
 analisar essas situações com cautela para evitar julgamentos precipitados.', 4),
 (7, 'O episódio reacende o debate sobre a integridade das competições em níveis menos expressivos do MMA, onde atletas
 menos conhecidos podem estar mais suscetíveis a pressões externas. O esporte continua em expansão global, mas casos como este
 reforçam a necessidade de uma fiscalização rigorosa para preservar a credibilidade e a seriedade da modalidade.', 5),

(8, 'A indefinição no topo da divisão dos pesos-pesados do UFC não influencia na carreira apenas dos envolvidos,
 no caso Jon Jones e Tom Aspinall, mas também atrapalha o planejamento dos rivais. É neste cenário que se encaixa o gigante
 russo Alexander Volkov, top 3 do ranking e mais um indivíduo frustrado com a ‘novela’ que parece travar a 
 categoria mais pesada do Ultimate.', 1),
(8, 'Em recente entrevista ao site ‘ChampionAT’, Volkov deixou clara sua irritação com a demora na realização
 da tão aguardada disputa entre os campeões Jon Jones (linear) e Tom Aspinall (interino), pela unificação do 
 título peso-pesado do UFC. Isso porque o russo entende que o atraso, que estaria sendo motivado por ‘Bones’,
 pode, inclusive, ser um fator determinante para impedir sua chegada no topo.', 2),
(8, '“Como lutador, claro, eu tenho uma opinião negativa sobre o atraso da luta Jones vs Aspinall,
 porque minhas chances de lutar pelo título estão ficando menores, e o tempo está se esgotando. 
 Em outras categorias de peso, há uma verdadeira esteira rolante de lutas. É por isso que estou infeliz.
 Eu teria tido a chance de me testar em uma luta de título há muito tempo se não fosse por Jon Jones“,
 lamentou Volkov.', 3),
 (8, 'Apesar da crítica ao comportamento do campeão linear dos pesados, 
 Volkov o exime de culpa e cobra uma mudança de atitude por parte do UFC. Na visão do gigante de 2m,
 a organização presidida por Dana White é a principal responsável por deixar a situação chegar neste ponto e,
 consequentemente, estagnar o topo da categoria.', 4),
 (8, '“Mas eu posso entendê-lo. O UFC dá a ele esse privilégio, ele se sente o mestre da situação.
 Jon sabe que ele vai ser valioso para o UFC em qualquer caso. E ele tira vantagem disso.
 A questão aqui não é muito sobre Jon Jones, mas sobre o fato do UFC permitir que ele se comporte 
 dessa maneira e mostrar lealdade excessiva a ele. Como resultado, todo mundo está esperando por isso”,
 finalizou o russo.', 5),
  (8, 'A preocupação de Alexander Volkov se justifica. Afinal de contas, aos 36 anos de idade,
  o russo vive seu melhor momento desde que estreou no UFC, em 2016,
  e nunca esteve tão perto de uma disputa de título, que pode nunca chegar pela perda do ‘timing’
  com o atraso provocado por Jon Jones.', 6),
(8, 'Atualmente, o gigante de 2m ocupa a 3ª colocação no ranking, posição que é fruto do retrospecto positivo em suas
 lutas mais recentes – com quatro vitórias em cinco combates disputados. A única derrota sofrida por 
 Volkov neste período ocorreu de forma polêmica, em dezembro, diante de Ciryl Gane, que venceu em uma
 controversa decisão dividida dos juízes.', 7),

(9, 'Primeiro colocado no ranking peso-leve (70 kg) do UFC, Arman Tsarukyan foi deixado de lado da próxima
 disputa pelo título da categoria pela organização. Agora, enquanto aguarda a definição do seu futuro na liga,
 o lutador armênio analisa os nomes de alguns potenciais adversários.', 1),
(9, 'E, ao que parece, um rival em ascensão na divisão dos leves desperta o interesse do líder do ranking.
 Em entrevista ao ‘Red Corner MMA’, Tsarukyan abriu as portas para um possível duelo contra o inglês Paddy Pimblett,
 que recentemente entrou no top 10 da categoria. O armênio, entretanto, condicionou o embate contra ‘The Baddy’ à
 sua realização no verão no hemisfério norte, que neste ano começa em junho.', 2),
(9, '“Ele pareceu muito bom na sua última luta. Agora podemos dizer que ele pode vencer lutadores top 10.
 Ele é o nº 8 ou algo assim, e não vai lutar tão cedo. Talvez ele queira lutar no final do ano,
 mas eu quero lutar neste verão (no hemisfério norte) e depois no final desse ano. Eu aceitaria 
 (uma luta contra Pimblett no verão), porque ele tem um grande nome, ele acabou de vencer Michael Chandler,
 e ele tem uma sequência de seis ou sete vitórias. Ele nunca perdeu no UFC. Faria sentido voltar e ganhar mais fãs
 do Reino Unido”, afirmou Arman.', 3),
 (9, 'Apesar de ocupar a liderança do ranking dos leves no UFC,
 Tsarukyan parece ter perdido prestígio dentro da organização, principalmente depois de ter desistido de desafiar 
 o então campeão Islam Makhachev na véspera da disputa entre eles, que estava marcada para 18 de janeiro deste ano,
 após sofrer uma lesão. Desde então, o armênio vem sendo preterido pela entidade das negociações pelas principais 
 lutas da categoria.', 4),
 (9, 'Prova disso é que, mesmo após Makhachev abdicar do cinturão e subir para os meio-médios (77 kg),
 Tsarukyan não foi escalado para a disputa pelo título vago dos leves, sendo preterido por Charles Do Bronx
 e Ilia Topuria, que duelarão no próximo dia 28 de junho, no UFC 317. Outro sinal claro de que o armênio já 
 não goza do mesmo prestígio na organização é o fato do próprio cogitar enfrentar um oponente muitos degraus abaixo no ranking.', 5),

(10, 'Às vésperas da realização do UFC 316, marcado para acontecer no dia 7 de junho, em Newark (EUA), 
um imprevisto de última hora deve ter ligado o sinal amarelo na sala de comando da organização.
 Isso porque, ao que parece, o campeão peso-galo (61 kg) Merab Dvalishvili – um dos protagonistas
 da luta principal do evento – sofreu uma lesão no dedo do pé, durante os treinamentos de preparação 
 para sua defesa de título contra Sean O’Malley.', 1),
(10, 'O receio dos fãs – e provavelmente dos dirigentes do Ultimate – é que a contusão sofrida por 
Merab possa impedi-lo de competir e transformá-lo em um desfalque de peso para o show que será promovido 
daqui a duas semanas. E pelas imagens do local machucado, compartilhadas pelo próprio 
lutador georgiano através da ferramenta ‘stories’ do seu perfil no ‘Instagram’, a preocupação se justifica.', 2),
(10, 'No vídeo reproduzido por Dvalishvili nas suas redes sociais, é possível ver
 o dedinho do pé direito do campeão bastante roxo. Enquanto os companheiros de equipe olhavam
 assustados para a possível fratura, o georgiano – visivelmente tranquilo com a situação – 
 brincou dizendo que iria “cortar” o dedo para poder lutar no UFC 316.', 3),
 (10, 'Resta saber se a possível lesão sofrida por Merab Dvalishvili vai obrigar o
 UFC a cancelar a aguardada revanche entre o georgiano e Sean O’Malley. No primeiro embate entre os dois,
 em setembro do ano passado, ‘The Machine’ levou a melhor na decisão unânime dos juízes
 e se sagrou campeão peso-galo do Ultimate.', 4),
 (10, 'Caso a saída do campeão do UFC 316, de fato, se confirme, a organização teria pouco tempo para pensar em uma
 substituição de última hora. Uma opção – levando em conta os pesos-galos presentes no card do evento – 
 seria promover Mario Bautista ou Patchy Mix para duelar contra Sean O’Malley na vaga de Merab Dvalishvili, 
 talvez com um cinturão interino em disputa ou apenas para manter o astro americano no show.', 5);

INSERT INTO LikeNoticia (idNoticia, idUsuario) VALUES
(8, 1),
(8, 2);

INSERT INTO LikeNoticia (idNoticia, idUsuario) VALUES
(6, 1),
(6, 2),
(6, 3);

INSERT INTO LutadorNoticia (idNoticia, idLutador) VALUES
(8, 1),
(6, 1);

INSERT INTO LutaNoticia (idNoticia, idLuta) VALUES
(8, 1),
(6, 1);

INSERT INTO Quiz (dataInicio, dataFim) 
VALUES (NOW(), '2026-01-01');

INSERT INTO ResultadoQuiz (idUsuario, idQuiz, acertos) 
VALUES 
(1, 1, 9),
(2, 1, 7);


