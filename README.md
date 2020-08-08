### Implementação para formulários RD Station Marketing: Identifica Estado (UF) pelo DDD digitado no campo telefone.

**Comportamento esperado**:
1. Ao carregar a página esconde o campo de UF;
2. Ao digitar o telefone com DDD e sair do campo (onBlur) seleciona a UF correspondente.

***Landing Pages (JS/jQuery)***
---------------
- Use a edição avançada da landing page;
- Use o campo de UF padrão (já existente na RD);
- Use o campo padrão de telefone;

[rds-uf-ddd-landing_pages.js](./rds-uf-ddd-landing_pages.js)

---------------

***Formulários Integrados (JS/jQuery)***
---------------
- Use o campo de UF padrão (já existente na RD);
- Use o campo padrão de telefone;

[rds-uf-ddd-embedded_forms.js](./rds-uf-ddd-embedded_forms.js)


***Formulários Integrados (Vanilla Javascript - ES6)***
---------------
- Use a edição avançada da landing page;
- Use o campo de UF padrão (já existente na RD);
- Use o campo padrão de telefone;
- Para maior compatibilidade use Gulp/Grunt/Weback)

[rds-uf-ddd-landing_pages-es6.js](./rds-uf-ddd-landing_pages-es6.js)

--------
*fonte dos códigos nacionais (DDD/Estados): http://dados.gov.br/dataset/codigos-nacionais-cn*