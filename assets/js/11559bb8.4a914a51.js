"use strict";(self.webpackChunkdoc_modelagem_banco_dados=self.webpackChunkdoc_modelagem_banco_dados||[]).push([[9489],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>b});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return o.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=l(t),c=r,b=p["".concat(s,".").concat(c)]||p[c]||u[c]||n;return t?o.createElement(b,i(i({ref:a},m),{},{components:t})):o.createElement(b,i({ref:a},m))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=c;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<n;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2282:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const n={sidebar_position:1},i="Defini\xe7\xf5es de nomes",d={unversionedId:"padroes-banco-dados/definicao-de-nomes",id:"padroes-banco-dados/definicao-de-nomes",title:"Defini\xe7\xf5es de nomes",description:"Para definir o nome de uma tabela, trigger, view, etc, \xe9 adotado um padr\xe3o de abreviaturas de nome. Como o objetivo \xe9 criar um banco de dados \xfanico com diversos m\xf3dulos ent\xe3o vai ser necess\xe1rio utilizar prefixos abreviados do m\xf3duto que pertence a tabela, view, etc. Isso foi pensado para manter o nome das tabelas em um padr\xe3o \xfanico e n\xe3o passar de um determinado tamanho, claro que isso pode mudar com o tempo, mas \xe9 necess\xe1rio adicionar aqui as mudan\xe7as.",source:"@site/docs/padroes-banco-dados/definicao-de-nomes.md",sourceDirName:"padroes-banco-dados",slug:"/padroes-banco-dados/definicao-de-nomes",permalink:"/modelagem_banco_dados/docs/padroes-banco-dados/definicao-de-nomes",draft:!1,editUrl:"https://github.com/EliLojas/modelagem_banco_dados/blob/main/doc-modelagem_banco_dados/docs/padroes-banco-dados/definicao-de-nomes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Padr\xf5es do Banco de Dados",permalink:"/modelagem_banco_dados/docs/category/padr\xf5es-do-banco-de-dados"},next:{title:"Objetos Existentes do Banco de Dados",permalink:"/modelagem_banco_dados/docs/category/objetos-existentes-do-banco-de-dados"}},s={},l=[{value:"M\xf3dulos Poss\xedveis",id:"m\xf3dulos-poss\xedveis",level:3},{value:"Tipo de Arquivo Poss\xedveis",id:"tipo-de-arquivo-poss\xedveis",level:3},{value:"Nome da Tabela",id:"nome-da-tabela",level:3},{value:"Trigger/Gatilhos",id:"triggergatilhos",level:3},{value:"Abrevia\xe7\xf5es a serem usadas",id:"abrevia\xe7\xf5es-a-serem-usadas",level:4}],m={toc:l},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,o.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defini\xe7\xf5es-de-nomes"},"Defini\xe7\xf5es de nomes"),(0,r.kt)("p",null,"Para definir o nome de uma tabela, trigger, view, etc, \xe9 adotado um padr\xe3o de abreviaturas de nome. Como o objetivo \xe9 criar um banco de dados \xfanico com diversos m\xf3dulos ent\xe3o vai ser necess\xe1rio utilizar prefixos abreviados do m\xf3duto que pertence a tabela, view, etc. Isso foi pensado para manter o nome das tabelas em um padr\xe3o \xfanico e n\xe3o passar de um determinado tamanho, claro que isso pode mudar com o tempo, mas \xe9 necess\xe1rio adicionar aqui as mudan\xe7as."),(0,r.kt)("p",null,"Os nomes devem ser escrito em minusculo e utilizando o padr\xe3o ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Snake_case"},"snake_case"),"."),(0,r.kt)("h3",{id:"m\xf3dulos-poss\xedveis"},"M\xf3dulos Poss\xedveis"),(0,r.kt)("p",null,"O nome das tabela vai conter o m\xf3dulo que a tabela pertence, e os m\xf3dulos poss\xedveis s\xe3o;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AS = Administra\xe7\xe3o do Sistema."),(0,r.kt)("li",{parentName:"ul"},"AE = Administra\xe7\xe3o do Estoque."),(0,r.kt)("li",{parentName:"ul"},"CF = Cliente e Fornecedor."),(0,r.kt)("li",{parentName:"ul"},"RP = Contas a Receber e a Pagar."),(0,r.kt)("li",{parentName:"ul"},"CB = Caixa e Banco.")),(0,r.kt)("h3",{id:"tipo-de-arquivo-poss\xedveis"},"Tipo de Arquivo Poss\xedveis"),(0,r.kt)("p",null,"Para identeificar o tipo de arquivo tamb\xe9m \xe9 usado abrevia\xe7\xe3o para saber se \xe9 uma tabela, view, etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T = Tabela."),(0,r.kt)("li",{parentName:"ul"},"V = View."),(0,r.kt)("li",{parentName:"ul"},"C = Consulta."),(0,r.kt)("li",{parentName:"ul"},"O = Componente."),(0,r.kt)("li",{parentName:"ul"},"P = Programa."),(0,r.kt)("li",{parentName:"ul"},"R = Relat\xf3rio."),(0,r.kt)("li",{parentName:"ul"},"E = Procedure.")),(0,r.kt)("h3",{id:"nome-da-tabela"},"Nome da Tabela"),(0,r.kt)("p",null,"O nome da tabela deve ter um total de 8 caracteres, onde os 2 primeiros d\xedgitos \xe9 a defini\xe7\xe3o de qual m\xf3dulo que pertence a tabela, o 3\xba d\xedgito \xe9 o tipo de arquivo (tabela, componente, consulta, programa, relat\xf3rio), e os 5 \xfaltimos d\xedgitos \xe9 o nome da tabela/tela. Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"astusuar\n| |\u2514 5 Caracteres com o nome da tabela `usuar` (Usu\xe1rio).\n| \u2514 1 Caracter com o tipo de arquivo, que neste caso \xe9 T (Tabela).\n\u2514 2 Caracteres com a sigla do m\xf3dulo que pertente a tabela as (Administra\xe7\xe3o de Sistema).\n")),(0,r.kt)("h3",{id:"triggergatilhos"},"Trigger/Gatilhos"),(0,r.kt)("p",null,"O nome das trigger vai respeitar o padr\xe3o snake_case mas ser\xe1 um pouco diferente do nome de tabelas, pois iremos identificar o objetivo da trigger no nome dela e no final identificar a tabela. Tamb\xe9m vai ser usado abrevia\xe7\xf5es."),(0,r.kt)("p",null,"Primeiro deve ser identificado o momento de excu\xe7\xe3o, ",(0,r.kt)("inlineCode",{parentName:"p"},"BEFORE")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"AFTER"),". Depois identificar se a trigger vai ser executada no evento de ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUCATE"),". Em seguinda uma identifica\xe7\xe3o do objetivo da trigger, se poss\xedvel ou necess\xe1rio, pois ter\xe1 algumas trigger n\xe3o v\xe3o ser padr\xf5es em todas as tabelas. Normalmente as trigger vai ter os nomes semelhantes a ",(0,r.kt)("inlineCode",{parentName:"p"},"aft_u_d_log_astorgan"),", mas vamos detalhar mais abaixo."),(0,r.kt)("h4",{id:"abrevia\xe7\xf5es-a-serem-usadas"},"Abrevia\xe7\xf5es a serem usadas"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,r.kt)("th",{parentName:"tr",align:null},"Abrevia\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BEFORE")),(0,r.kt)("td",{parentName:"tr",align:null},"bef","_")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AFTER")),(0,r.kt)("td",{parentName:"tr",align:null},"aft","_")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSERT")),(0,r.kt)("td",{parentName:"tr",align:null},"i","_")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,r.kt)("td",{parentName:"tr",align:null},"d","_")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE")),(0,r.kt)("td",{parentName:"tr",align:null},"u","_")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUCATE")),(0,r.kt)("td",{parentName:"tr",align:null},"t","_")))))}u.isMDXComponent=!0}}]);