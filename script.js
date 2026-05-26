// ===========================
// SITE LAMBO SPEED - SCRIPT
// ===========================

window.onload = function () {

    // ===========================
    // ENTER PARA PESQUISAR
    // ===========================
    const pesquisa = document.getElementById("pesquisa");

    if (pesquisa) {
        pesquisa.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                pesquisar();
            }
        });
    }

    // ===========================
    // VERIFICAR USUÁRIO LOGADO
    // ===========================
    verificarUsuario();

};

// ===========================
// PESQUISAR
// ===========================

function pesquisar() {

    let campoPesquisa = document.getElementById("pesquisa");

    if (!campoPesquisa) return;

    let busca = campoPesquisa.value
        .toLowerCase()
        .trim();

    // Campo vazio
    if (busca === "") {
        alert("Digite algo para pesquisar!");
        return;
    }

    // ======================
    // MODELOS
    // ======================
    if (
        busca.includes("huracan") ||
        busca.includes("aventador") ||
        busca.includes("urus") ||
        busca.includes("revuelto") ||
        busca.includes("modelo") ||
        busca.includes("modelos") ||
        busca.includes("carro") ||
        busca.includes("lamborghini")
    ) {
        window.location.href = "modelo.html";
    }

    // ======================
    // GALERIA
    // ======================
    else if (
        busca.includes("foto") ||
        busca.includes("fotos") ||
        busca.includes("imagem") ||
        busca.includes("imagens") ||
        busca.includes("galeria")
    ) {
        window.location.href = "galeria.html";
    }

    // ======================
    // CONTATO
    // ======================
    else if (
        busca.includes("contato") ||
        busca.includes("telefone") ||
        busca.includes("email") ||
        busca.includes("suporte")
    ) {
        window.location.href = "contato.html";
    }

    // ======================
    // LOGIN
    // ======================
    else if (
        busca.includes("login") ||
        busca.includes("entrar") ||
        busca.includes("conta")
    ) {
        window.location.href = "login.html";
    }

    // ======================
    // HOME
    // ======================
    else if (
        busca.includes("inicio") ||
        busca.includes("início") ||
        busca.includes("home")
    ) {
        window.location.href = "index.html";
    }

    // ======================
    // NÃO ENCONTROU
    // ======================
    else {
        alert("Nenhum resultado encontrado!");
    }
}

// ===========================
// DOWNLOAD DE IMAGEM
// ===========================

function baixarImagem(caminhoImagem, nomeArquivo = "lamborghini.jpg") {

    let link = document.createElement("a");

    link.href = caminhoImagem;
    link.download = nomeArquivo;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

// ===========================
// CADASTRAR (SIGN-IN)
// ===========================

function cadastrar() {

    let nome = document.getElementById("nome")?.value.trim();
    let email = document.getElementById("emailCadastro")?.value.trim();
    let senha = document.getElementById("senhaCadastro")?.value.trim();

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    // Pegar usuários existentes
    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar se email já existe
    let usuarioExiste = usuarios.find(
        usuario => usuario.email === email
    );

    if (usuarioExiste) {
        alert("Esse email já está cadastrado!");
        return;
    }

    // Criar usuário
    let novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Salvar
    usuarios.push(novoUsuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Conta criada com sucesso!");

    window.location.href = "login.html";
}

// ===========================
// LOGIN
// ===========================

function login() {

    let email = document.getElementById("email")?.value.trim();
    let senha = document.getElementById("senha")?.value.trim();

    if (!email || !senha) {
        alert("Preencha email e senha!");
        return;
    }

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioEncontrado = usuarios.find(
        usuario =>
            usuario.email === email &&
            usuario.senha === senha
    );

    if (!usuarioEncontrado) {
        alert("Email ou senha incorretos!");
        return;
    }

    // Salvar sessão
    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioEncontrado)
    );

    alert("Login realizado com sucesso!");

    window.location.href = "index.html";
}

// ===========================
// VERIFICAR USUÁRIO
// ===========================

function verificarUsuario() {

    let nomeUsuario =
        document.getElementById("nomeUsuario");

    let usuarioLogado =
        JSON.parse(
            localStorage.getItem("usuarioLogado")
        );

    if (nomeUsuario && usuarioLogado) {
        nomeUsuario.innerHTML =
            "👤 " + usuarioLogado.nome;
    }
}

// ===========================
// LOGOUT
// ===========================

function logout() {

    let confirmar = confirm(
        "Deseja realmente sair da conta?"
    );

    if (confirmar) {

        localStorage.removeItem(
            "usuarioLogado"
        );

        alert("Logout realizado!");

        window.location.href =
            "login.html";
    }
}

// ===========================
// PROTEGER PÁGINA
// ===========================

function verificarLogin() {

    let usuarioLogado =
        localStorage.getItem(
            "usuarioLogado"
        );

    if (!usuarioLogado) {

        alert(
            "Você precisa fazer login!"
        );

        window.location.href =
            "login.html";
    }
}