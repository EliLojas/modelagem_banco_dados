# Modelagem Banco de Dados

A ideia é documentar o máximo possível a respeito do banco de dados, dicionários, como formatar o nome do banco de dados, o objetivo das tabelas, etc. Basicamente uma forma de documentar todo o banco de dados.

É utilizado o banco de dados PostgreSQL na versão 15.1 conforme a versão instituída no arquivo docker-compose.yaml.

<details>

<summary>Índice</summary>

- [Modelagem Banco de Dados](#modelagem-banco-de-dados)
- [Definição dos Nomes](#definição-dos-nomes)
  - [Módulos Possíveis](#módulos-possíveis)
  - [Tipo de Arquivo Possíveis](#tipo-de-arquivo-possíveis)
  - [Nome da Tabela](#nome-da-tabela)

</details>

<br>

# Definição dos Nomes

Para definir o nome de uma tabela, trigger, view, etc, é adotado um padrão de abreviaturas de nome.
Como o objetivo é criar um banco de dados único para diversos módulos então vai ser necessário utilizar prefixos abreviados do móduto que pertence a tabela, view, etc.

## Módulos Possíveis

* AS = Administração do Sistema.
* AE = Administração do Estoque.
* CF = Cliente e Fornecedor.
* RP = Contas a Receber e a Pagar.
* CB = Caixa e Banco.

## Tipo de Arquivo Possíveis
Para identeificar o tipo de arquivo também é usado abreviação para saber se é uma tabela, view, etc.

* T = Tabela.
* V = View.
* C = Consulta.
* O = Componente.
* P = Programa.
* R = Relatório.

## Nome da Tabela 

O nome da tabela deve ter um total de 8 caracteres, onde os 2 primeiros dígitos é a definição de qual módulo que pertence a tabela, o 3º dígito é o tipo de arquivo (tabela, componente, consulta, programa, relatório), e os 5 últimos dígitos é o nome da tabela/tela. Por exemplo:

```text
astusuar
| |└ 5 Caracteres com o nome da tabela `usuar` (Usuário).
| └ 1 Caracter com o tipo de arquivo, que neste caso é T (Tabela).
└ 2 Caracteres com a sigla do módulo que pertente a tabela as (Administração de Sistema).
```

Existe uma forma de usar icones na documentação para uma melhor leitura e visualização, adicionando *tags html* com *class*. Exemplo:

```html
<span class="material-icons">plus_one</span>
```
Com isso irá aparecer o icone equivalente na documentação gerada em html. Para obter mais icones que podem ser usado basta visitar a página da [Google Fonts - Icons](https://fonts.google.com/icons?selected=Material+Icons).


