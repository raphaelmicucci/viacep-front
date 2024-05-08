const inputcep = document.querySelector('#cep');
const inputrua = document.querySelector('#rua');
const inputcidade = document.querySelector('#cidade');
const inputbairro = document.querySelector('#bairro');
const inputuf = document.querySelector('#uf');

inputcep.addEventListener('blur', async function(){
    inputuf.value = '...';
    inputcidade.value = '...';
    inputbairro.value = '...';
    inputrua.value = '...';

    if(inputcep.value == ''){
        alert('campo "cep" vazio');
        return true;
    }
    function preencherform(dados){
        inputuf.value = dados.uf;
        inputcidade.value = dados.localidade;
        inputbairro.value = dados.bairro;
        inputrua.value = dados.logradouro;
    }

    async function buscacep(cep){
       const request = await fetch(`https://viacep.com.br/ws/${cep}/json`);
       return request.json();
   }

   const retorno = await buscacep(inputcep.value);
   preencherform(retorno);
})

inputuf.addEventListener('blur', async function(){
    inputcep.value = '...';
    inputbairro.value = '...';

    if(inputuf.value == ''){
        alert('campo "uf" vazio');
        return true;
    }
    if(inputrua.value == ''){
        alert('campo "rua" vazio');
        return true;
    }
    if(inputuf.value == ''){
        alert('uf vazio');
        return true;
    }

    function preencher(dados){
        const body = document.querySelector("body");

        for(i=0; i < dados.length; i++){
            const h5 = document.createElement('h5');
            h5.innerText = dados[i].cep;
            body.appendChild(h5);
        }       
    }

    async function buscacep(rua, cidade, uf){
       const request = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json`);
       return request.json();
   }

   const retorno = await buscacep(inputrua.value, inputcidade.value, inputuf.value);
   console.log(retorno);
   preencher(retorno);
})


