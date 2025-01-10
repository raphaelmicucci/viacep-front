# ViaCEP Webservice - Aplicação de Busca de Endereço

Este projeto utiliza a API pública ViaCEP para realizar buscas de endereços através de um **CEP** ou dos campos **Rua**, **Cidade** e **Estado**. A aplicação preenche automaticamente os campos de endereço (rua, bairro, cidade, estado) com base nas informações retornadas pela API.

## Funcionalidades

1. **Busca por CEP**:
   - O usuário informa um **CEP** e o sistema retorna os dados de **rua**, **bairro**, **cidade** e **estado** correspondentes ao CEP fornecido.

2. **Busca por Rua, Cidade e Estado**:
   - O usuário preenche os campos **rua**, **cidade** e **estado**, e o sistema retorna os **CEPs** correspondentes aos dados fornecidos.

## Como Funciona

A aplicação possui dois botões de busca:

1. **Buscar pelo CEP**:
   - Ao clicar no botão "Buscar", a aplicação envia uma requisição à API ViaCEP com o **CEP** informado e preenche os campos de endereço com as informações retornadas.

2. **Buscar pelo Endereço**:
   - Ao clicar no botão "Buscar Endereço", a aplicação envia uma requisição à API ViaCEP com os dados de **rua**, **cidade** e **estado** e exibe os **CEPs** encontrados.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página web.
- **JavaScript**: Lógica para busca e preenchimento dos campos.
- **API ViaCEP**: API pública para busca de endereços.
