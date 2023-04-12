# Desafio 12
Nesse desafio a proposta era criar um app que salva usuários do GitHub e os mostra em uma tabela pegando as informações da API do próprio GitHub. Além de promises e assincronismo, nesse desafio foi usado pela primeira vez o local storage do navegador.

Como o foco desse desafio era JavaScript, um problema que não resolvi foi a estética da tabela. Quando a propriedade "border-collapse" é usada para juntar as bordas da tabela, o "border-radius" não funciona corretamente, por isso, alguns cantos da tabela não ficam arredondados.

Me deparei com esse problema no [Projeto final - Food Explorer](https://github.com/sogbog/FoodExplorer_Frontend) na área de pedidos, mas dessa vez não pude deixar sem solução, então descobri que com propriedade "border-spacing" em 0, e usando o seletor "nth-child" é possível contornar esse problema.

Tópico do módulo: **JavaScript antes do framework - Avançando nas promises**
## Screenshots

Página finalizada:
![Página Finalizada](https://i.imgur.com/vhgIzy8.png)
