// ============================================================
// BANNER LGPD — script completo para você adaptar
// ============================================================

// 1. Ao carregar a página, verificar se o usuário já consentiu.
//    Se sim, esconder o banner e mostrar o painel de status.
window.addEventListener("load", function () {
    var consentimento = getCookie("consentimento_lgpd");
    if (consentimento) {
        document.getElementById("banner").classList.add("oculto");
        atualizarPainel();
    }
});

// 2. Aceitar todos os cookies (essenciais + análise + marketing)
function aceitarTodos() {
    document.cookie = "consentimento_lgpd=todos; max-age=31536000; path=/";
    document.cookie = "cat_analise=sim; max-age=31536000; path=/";
    document.cookie = "cat_marketing=sim; max-age=31536000; path=/";
    document.getElementById("banner").classList.add("oculto");
    atualizarPainel();
}

// 3. Aceitar apenas os essenciais (sempre ativos)
function aceitarApenasEssenciais() {
    document.cookie = "consentimento_lgpd=essenciais; max-age=31536000; path=/";
    document.cookie = "cat_analise=nao; max-age=31536000; path=/";
    document.cookie = "cat_marketing=nao; max-age=31536000; path=/";
    document.getElementById("banner").classList.add("oculto");
    atualizarPainel();
}

// 4. Salvar a seleção do usuário (customizada)
function salvarSelecao() {
    var analise = document.getElementById("chk-analise").checked ? "sim" : "nao";
    var marketing = document.getElementById("chk-marketing").checked ? "sim" : "nao";

    document.cookie = "consentimento_lgpd=custom; max-age=31536000; path=/";
    document.cookie = "cat_analise=" + analise + "; max-age=31536000; path=/";
    document.cookie = "cat_marketing=" + marketing + "; max-age=31536000; path=/";
    document.getElementById("banner").classList.add("oculto");
    atualizarPainel();
}

// 5. Reabrir o banner para o usuário mudar de ideia
function reabrirPreferencias() {
    document.getElementById("banner").classList.remove("oculto");
}

// 6. Atualizar o painel de status com o estado atual dos cookies
function atualizarPainel() {
    var analise = getCookie("cat_analise") === "sim" ? "Ativo" : "Bloqueado";
    var marketing = getCookie("cat_marketing") === "sim" ? "Ativo" : "Bloqueado";

    document.getElementById("painel-status").innerHTML =
        "<p><strong>Essenciais:</strong> Sempre ativos</p>" +
        "<p><strong>Análise:</strong> " + analise + "</p>" +
        "<p><strong>Marketing:</strong> " + marketing + "</p>";
}

// 7. Função auxiliar para ler um cookie pelo nome
function getCookie(nome) {
    var match = document.cookie.match(new RegExp("(^| )" + nome + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
}