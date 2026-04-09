# Binary Search Trees

Projeto de estrutura de dados desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees), com foco em implementação e manipulação de uma árvore binária de busca.

## Objetivo do Projeto

O objetivo principal foi praticar:
- Construção de uma BST balanceada a partir de um array
- Inserção, busca e remoção de valores
- Percursos da árvore com callbacks
- Cálculo de altura e profundidade
- Validação de balanceamento e rebalanceamento da árvore

## O que é?

Uma implementação da classe `Tree` em JavaScript com métodos para criar e operar em uma Binary Search Tree.

A árvore inicial é montada a partir de um array, removendo duplicados, ordenando os valores e construindo uma BST balanceada. O arquivo de demonstração inclui uma função `prettyPrint` para visualizar a estrutura no terminal.

## Como usar

1. Entre na pasta do projeto:
   `cd Javascript/top-binary-search-trees`
2. Execute o arquivo de demonstração:
   `node index.js`

## Funcionalidades

- **`constructor(arr)`**: cria a árvore a partir de um array de números
- **`includes(value)`**: verifica se um valor existe na árvore
- **`insert(value)`**: insere um novo valor na BST
- **`deleteItem(value)`**: remove um valor da árvore
- **`levelOrderForEach(callback)`**: percorre a árvore em largura
- **`inOrderForEach(callback)`**: percurso inorder
- **`preOrderForEach(callback)`**: percurso preorder
- **`postOrderForEach(callback)`**: percurso postorder
- **`height(value)`**: retorna a altura do nó informado
- **`depth(value)`**: retorna a profundidade do nó informado
- **`isBalanced()`**: verifica se a árvore está balanceada
- **`rebalance()`**: rebalanceia a árvore atual

## Estrutura de Arquivos

- `Tree.js`: implementação da classe `Tree` e dos algoritmos da BST
- `index.js`: script de demonstração com criação da árvore e chamadas dos métodos

## Tecnologias Utilizadas

- JavaScript (ES Modules)

---

Projeto desenvolvido seguindo: [The Odin Project - Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
