## O Desafio

Você deve construir uma API que recebe ingredientes como parâmetro de entrada em uma chamada GET e retorna uma lista de receitas. Utilize as APIs públicas da RecipePuppy (http://www.recipepuppy.com/about/api/) e da Giphy (https://developers.giphy.com/docs/) para obter os dados necessários.

A API deve receber como parâmetro um conjunto de ingredientes (máximo 3) e deve retornar os itens utilizados para realizar a busca; e uma lista de receitas.

Cada item lista de receitas deve possuir 4 atributos:

- Título da receitam;
- Lista de ingredientes;
- Link para acessar a receita;
- Link de um gif para a receita.

#### A Estrutura

A API possui apenas um endpoint, que deve respeitar a seguinte chamada:

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

Exemplo:

`http://127.0.0.1/recipes/?i=onion,tomato`

A resposta dessa requisição deve seguir a seguinte estrutura:

```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```

### Requisitos

- Utilizar NodeJS ou Go para criar a aplicação;
- Toda configuração e chaves de acesso (se necessário) devem ser acessadas em um arquivo de ambiente. Sua configuração deve estar documentada no README;
- Para obter o gif no Giphy, utilize o título da receita recebido pelo RecipePuppy;
- Os ingredientes recebidos pelo RecipePuppy são recebidos em String. Organize os ingredientes em um array e ordene esse array por ordem alfabética;
- Se algum dos serviços externos estiver indisponível o projeto deverá informar o usuário dessa indisponibilidade;
- Utilizar Docker para executar o projeto;
