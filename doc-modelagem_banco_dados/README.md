# Documentação da Modelagem de Banco de dados

Este projeto, ou se preferir a pasta `doc-modelagem_banco_dados` é onde vai se concentrar toda a documentação da modelagem do banco de dados. É basicamente um site feito usando [Docusaurus 2](https://docusaurus.io/), que é um gerador de website estático.

Esse projeto foi criado usando *Typescript* e usando *npm*. Também foi criado um `docker-compose.yaml` para executar esse projeto. Lembrando que o arquivo *.yaml* não está na pasta deste projeto de documentação, mas está na pasta raiz do projeto de modelagem do banco de dados.

### Execução

Basta estar na raiz do projeto de modelagem (`./modelagem_banco_dados`) e executar o comando.
> Entenda *raiz* como a pasta do projeto principal e não do projeto de documentação.
```
docker-compose up docusaurus
```

Depois que executar o conteiner abra o navegador e abra a página de [Introdução](http://localhost:3000/modelagem_banco_dados/docs/intro) para entender melhor como excutar e criar documentação.
