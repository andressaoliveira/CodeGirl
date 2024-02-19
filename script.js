function getAltura(pagina) {
    console.log("pagina:", pagina)
    let elemento = pagina + "-iframe"
    const iframe = document.getElementById(elemento);
    console.log("iframe:", iframe)

    var altura = iframe.contentWindow.document.getElementById(pagina).scrollHeight;
    console.log("altura " + pagina, altura)
    iframe.height = altura + 5;
}