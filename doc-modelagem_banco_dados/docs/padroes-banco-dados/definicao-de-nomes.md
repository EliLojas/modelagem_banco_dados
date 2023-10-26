---
sidebar_position: 1
---

# Definições de nomes

Para definir o nome de uma tabela, trigger, view, etc, é adotado um padrão de abreviaturas de nome. Como o objetivo é criar um banco de dados único com diversos módulos então vai ser necessário utilizar prefixos abreviados do móduto que pertence a tabela, view, etc. Isso foi pensado para manter o nome das tabelas em um padrão único e não passar de um determinado tamanho, claro que isso pode mudar com o tempo, mas é necessário adicionar aqui as mudanças.

Os nomes devem ser escrito em minusculo e utilizando o padrão [snake_case](https://developer.mozilla.org/en-US/docs/Glossary/Snake_case).

### Módulos Possíveis

O nome das tabela vai conter o módulo que a tabela pertence, e os módulos possíveis são;

- AS = Administração do Sistema.
- AE = Administração do Estoque.
- CF = Cliente e Fornecedor.
- RP = Contas a Receber e a Pagar.
- CB = Caixa e Banco.

### Tipo de Arquivo Possíveis

Para identeificar o tipo de arquivo também é usado abreviação para saber se é uma tabela, view, etc.

- T = Tabela.
- V = View.
- C = Consulta.
- O = Componente.
- P = Programa.
- R = Relatório.
- E = Procedure.

### Nome da Tabela

O nome da tabela deve ter um total de 8 caracteres, onde os 2 primeiros dígitos é a definição de qual módulo que pertence a tabela, o 3º dígito é o tipo de arquivo (tabela, componente, consulta, programa, relatório), e os 5 últimos dígitos é o nome da tabela/tela. Por exemplo:

```text
astusuar
| |└ 5 Caracteres com o nome da tabela `usuar` (Usuário).
| └ 1 Caracter com o tipo de arquivo, que neste caso é T (Tabela).
└ 2 Caracteres com a sigla do módulo que pertente a tabela as (Administração de Sistema).
```

### Trigger/Gatilhos

O nome das trigger vai respeitar o padrão snake_case mas será um pouco diferente do nome de tabelas, pois iremos identificar o objetivo da trigger no nome dela e no final identificar a tabela. Também vai ser usado abreviações.

Primeiro deve ser identificado o momento de excução, `BEFORE` e `AFTER`. Depois identificar se a trigger vai ser executada no evento de `INSERT`, `DELETE`, `UPDATE` ou `TRUCATE`. Em seguinda uma identificação do objetivo da trigger, se possível ou necessário, pois terá algumas trigger não vão ser padrões em todas as tabelas. Normalmente as trigger vai ter os nomes semelhantes a `aft_u_d_log_astorgan`, mas vamos detalhar mais abaixo.

#### Abreviações a serem usadas

| Descrição | Abreviação |
| --------- | ---------- |
| `BEFORE`  | bef\_      |
| `AFTER`   | aft\_      |
| `INSERT`  | i\_        |
| `DELETE`  | d\_        |
| `UPDATE`  | u\_        |
| `TRUCATE` | t\_        |
