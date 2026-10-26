# Feedback - Aula 03

Miguel, o seu servidor.js tem require('none:sqlite'), com 'none' no lugar de 'node', isso quebra o servidor assim que ele sobe. Além disso a rota GET /treinos/:id ainda usa treinos.find, uma variável que nem existe mais no seu código. Preciso lançar a nota até sexta-feira, corrige o nome do módulo pra node:sqlite e termina a migração dessa rota pro banco.
