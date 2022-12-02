# Online Store

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto Online Store foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento front-end com ReactJS. 

O projeto foi elaborado com o seguinte time de desenvolvedores: [Larissa Perinoto](https://github.com/larissaperinoto), [Deborah Costa](https://github.com/DeborahCosta), [Wesley Martins](https://github.com/xWesleyMartins), [João Souza](https://github.com/rsajoao) e [Vinicius Ramos](https://github.com/viniramoss).

### Objetivo

A aplicação desenvolvida é uma loja online que permite o usuário pesquisar por produtos, selecionar produtos através de categorias, adicionar produtos ao carrinho e editar produtos que estão no carrinho. Os produtos presentes nesta aplicação foram consumidos da API do Mercado Livre.

### Tecnologias e Ferramentas

<div>
 <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML' />
  <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS3' />
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' alt='JavaScript' />
  <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='ReactJS' />
  <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='React-router' />
  <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
</div>
<br>

O projeto foi desenvolvido em JavaScript utilizando a biblioteca [ReactJS](https://pt-br.reactjs.org/), as rotas da aplicação foram elaboradas com [React Router](https://reactrouter.com/en/main) e o gerênciamento de estada realizado com Context API e Hooks. Para alinhar o código com as boas práticas de desenvolvimento foram utilizadas as ferramentas [ESLint](https://github.com/eslint/eslint) e [StyleLint](https://stylelint.io/).

As rotas utilizadas da API do Mercado Livre foram as seguintes:
- Listagem de categorias de produtos: https://api.mercadolibre.com/sites/MLB/categories
- Busca de um produtos pelo nome: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Busca de produtos pela categoria: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Busca de produtos pelo nome e pela categoria: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
- Detalhes de um produto: https://api.mercadolibre.com/items/$PRODUCT_ID

### Desenvolvimento

O projeto foi desenvolvido através de metodologia ágil utilizando o framework Scrum para gerênciamento do projeto e a metodologia Kanban para acompanhamento de tarefas e acompamento visual das atividades.

### Execução do projeto

<details>
   <summary>Saiba mais</summary> 
  </br>

  Para executar o projeto na sua máquina, inicie fazendo o clone deste repositório com o comando abaixo 

      git clone git@github.com:larissaperinoto/online-store.git

  Utilize o comando abaixo para instalar as dependências após o clone do repositório.

        npm install

  Para iniciar o projeto utilize o comando abaixo.

        npm start
        
</details>
