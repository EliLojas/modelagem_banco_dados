---
sidebar_position: 1
---

# Introdução

A ideia é documentar o máximo possível a respeito do banco de dados, dicionários, como formatar o nome do banco de dados, o objetivo das tabelas, etc. Basicamente uma forma de documentar todo o banco de dados.

É utilizado o banco de dados PostgreSQL na versão 15.1 conforme a versão instituída no arquivo `./modelagem_banco_dados/docker-compose.yaml`.

Como você já deve ter percebido estamos utilizando o [Docusaurus 2](https://docusaurus.io/) para criar a documentação e vai ser necessário estudar a respeito, não se desespere pois tem muito coneteúdo disponível a respeito de como usar o *Docusaurus*.

## Iniciando

Já foi criado o projeto de documentação (pasta `doc-modelagem_banco_dados`), então vamos para a parte de executar e criar a documentação.

Para executar/start desta documentação/site basta rodar o comando:
```bash
docker-compose up docusaurus
```

:::info
Lembrando que esse comando irá criar o container apenas para a documentação, caso queira que execute todos os serviços/container presentes no arquivo `docker-compose.yaml` basta executar o comando:
```bash 
docker-compose up
```
:::

Pronto, agora você consegue acessar o site da documentação, basta acessar pelo navegador o link [https:localhost:3000/](http://localhost:3000/modelagem_banco_dados).


## Criar documentação

Agora veja a documentação padrão para criar indo em [Tutorial - Basics](./category/tutorial---basics), ou vá para o site da [docusaurus](https://docusaurus.io/docs).


Tem um execelente vídeo falando a respeito do docusaurus no [Create and deploy a documentation website](https://www.youtube.com/watch?v=UoAD_F8wuQk). É em inglês, mas basta ativar a legenda que está bem descrita e detalhada em português.

:::tip
Pra ir diretamente para documentação do banco de dados pode pular diretamente para [Padrões do Banco de Dados](./category/padrões-do-banco-de-dados).
:::