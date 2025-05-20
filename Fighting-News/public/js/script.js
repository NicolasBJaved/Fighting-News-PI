function verificarLogado() {
    var idUsuarioSession = sessionStorage.ID_USUARIO;
    console.log(idUsuarioSession);
    if (idUsuarioSession != undefined || idUsuarioSession != null) {
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
                    header.style.height = "15%";
                    nav.style.width = "25%";
                    ulNav.innerHTML += `
                            <li><a class="perfilNav" href="perfil.html?id=${resposta[0].idUsuario}">
                                <img id="imagemUsuarioNav" src="${resposta[0].caminhoImagem}" alt="Imagem do Usuário">
                                <h3 id="nomeUsuarioNav">${resposta[0].nome}</h3>
                            </a></li>
                        `
                })
            } else {
                console.log("Erro ao verificar se o usuário está logado: " + resposta.status);
            }
        })
    }

}