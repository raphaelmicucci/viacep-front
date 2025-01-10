const inputcep = document.querySelector('#cep');
const inputrua = document.querySelector('#rua');
const inputcidade = document.querySelector('#cidade');
const inputbairro = document.querySelector('#bairro');
const inputuf = document.querySelector('#uf');
const btnBuscar = document.querySelector("#buscar");
const btnBuscarCEP = document.querySelector("#buscar-cep");

function preencherForm(dados){
    inputcep.value = dados.cep;
    inputuf.value = dados.uf;
    inputcidade.value = dados.localidade;
    inputbairro.value = dados.bairro;
    inputrua.value = dados.logradouro;
}

btnBuscarCEP.addEventListener('click', async function(e){
    e.preventDefault();

    inputuf.value = '...';
    inputcidade.value = '...';
    inputbairro.value = '...';
    inputrua.value = '...';

    if(inputcep.value == ''){
        alert('campo "cep" vazio');
        return true;
    }

    async function buscacep(cep){
        try {
            const request = await fetch(`https://viacep.com.br/ws/${cep}/json`);
            if (!request.ok) {
                throw new Error('Falha ao buscar dados do CEP');
            }
            return await request.json();
        } catch (error) {
            console.error(error);
            alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
            return null; 
        }
    }

    const retorno = await buscacep(inputcep.value);
    if (retorno) {
        preencherForm(retorno);
    }
});

btnBuscar.addEventListener('click', async function(e){
    e.preventDefault();

    if(inputrua.value == ''){
        alert('campo "rua" vazio');
        return true;
    }
    if(inputcidade.value == ''){
        alert('campo "cidade" vazio');
        return true;
    }
    if(inputuf.value == ''){
        alert('campo "uf" vazio');
        return true;
    }

    async function buscacep(rua, cidade, uf){
        try {
            const request = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json`);
            if (!request.ok) {
                throw new Error('Falha ao buscar dados do endereço');
            }
            return await request.json();
        } catch (error) {
            console.error(error);
            alert('Erro ao buscar o endereço. Tente novamente mais tarde.');
            return null;
        }
    }

    const retorno = await buscacep(inputrua.value, inputcidade.value, inputuf.value);
    if (retorno && retorno.length > 0) {
        preencherForm(retorno[0]);
    } else {
        alert('Nenhum endereço encontrado para a pesquisa fornecida.');
    }
});
