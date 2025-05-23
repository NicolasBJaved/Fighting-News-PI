function verificarLogado() {
    var idUsuarioSession = sessionStorage.ID_USUARIO;
    console.log("ID USUARIO:" + idUsuarioSession)
    console.log(idUsuarioSession);
    if (idUsuarioSession == null || idUsuarioSession == "" || idUsuarioSession == undefined || idUsuarioSession == "null") {
        console.log("ENTROU AQ")
        header.style.height = "8%";
        nav.style.width = "18%";
    } else {
        fetch("/usuarios/verificarLogado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                idUsuarioServer: idUsuarioSession,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    var admin = sessionStorage.USUARIO_ADMIN;

                    if (!admin) {
                        header.style.height = "12%";
                        nav.style.width = "25%";
                        ulNav.innerHTML = `
                        <li><a href="index.html">Home</a></li>
                        <li><a href="cadastro.html">Cadastro</a></li>
                        <li><a href="quiz.html">Quiz</a></li>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a class="perfilNav" href="perfil.html?id=${resposta[0].idUsuario}">
                            <img id="imagemUsuarioNav" src="${resposta[0].caminhoImagem}" alt="Imagem do Usuário">
                            <h3 id="nomeUsuarioNav">${resposta[0].nome}</h3>
                        </a></li>
                    `
                    }else{
                        header.style.height = "12%";
                        nav.style.width = "30%";
                        ulNav.innerHTML = `
                        <li><a href="index.html">Home</a></li>
                        <li><a href="cadastro.html">Cadastro</a></li>
                        <li><a href="quiz.html">Quiz</a></li>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="adicionarNoticia.html">Adicionar noticias</a></li>
                        <li><a class="perfilNav" href="perfil.html?id=${resposta[0].idUsuario}">
                            <img id="imagemUsuarioNav" src="${resposta[0].caminhoImagem}" alt="Imagem do Usuário">
                            <h3 id="nomeUsuarioNav">${resposta[0].nome}</h3>
                        </a></li>
                    `
                    }

                })
            } else {
                console.log("Erro ao verificar se o usuário está logado: " + resposta.status);
            }
        })
    }

}