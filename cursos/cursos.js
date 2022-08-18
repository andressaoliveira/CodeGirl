const form = document.getElementById('cadastro');

function limparFormulario() {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputSobrenome').value = '';
    document.getElementById('inputEmail').value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    $('#alerta-cadastrado-sucesso').hide();
    $('#alerta-usuario-existente').hide();

    const contato = JSON.stringify({
        nome: document.getElementById('inputNome').value,
        sobreNome: document.getElementById('inputSobrenome').value,
        email: document.getElementById('inputEmail').value,
        receberNovidades: document.getElementById('checkNovidades').checked
    });

    var requestURL = 'https://localhost:7157/Interessados';
    var request = new XMLHttpRequest();

    request.open("POST", requestURL);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(contato);

    request.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 204) {
            limparFormulario();
            $('#alerta-cadastrado-sucesso').show();
        }
        if (this.status === 500) {
            $('#alerta-usuario-existente').show();
        }
    }
});