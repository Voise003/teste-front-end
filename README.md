# Teste Técnico Front-End — Econverse

Desenvolvimento de uma página de e-commerce responsiva, baseada no layout disponibilizado no Figma, como parte de um teste técnico para a vaga de Desenvolvedor Front-End Júnior.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- CSS Grid e Flexbox

## Funcionalidades

- Interface de e-commerce baseada no Figma.
- Layout responsivo para desktop, tablet e dispositivos móveis.
- Listagem de produtos consumidos de uma API.
- Carrossel de produtos com navegação.
- Modal para visualização de informações dos produtos.
- Navegação horizontal de categorias e marcas em dispositivos móveis.
- Formulário de newsletter com validação dos campos.
- Componentização da interface utilizando React.

## Estrutura do projeto

O código está organizado em componentes reutilizáveis:

- `Header`: cabeçalho e navegação.
- `HeroBanner`: banner principal.
- `Categories`: categorias de produtos.
- `ProductSection`: listagem e carrossel de produtos.
- `ProductModal`: modal de informações dos produtos.
- `Partners`: banners de parceiros.
- `Brands`: seção de marcas.
- `Newsletter`: formulário de cadastro.
- `Footer`: rodapé institucional.

O projeto também possui diretórios específicos para serviços, tipos TypeScript, estilos e recursos visuais.

## API de produtos

Os produtos são obtidos a partir da API disponibilizada para o teste técnico:

https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

## Como executar o projeto

**Pré-requisito:** Node.js e npm instalados.

Clone o repositório e acesse a pasta do projeto.

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço indicado pelo Vite.

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Responsividade

A interface foi adaptada para diferentes tamanhos de tela utilizando media queries, Flexbox e CSS Grid.

Em dispositivos móveis, os componentes são reorganizados para facilitar a navegação e a leitura.

## Objetivo

Este projeto foi desenvolvido com o objetivo de aplicar conhecimentos de desenvolvimento front-end, integração com API, componentização, estilização responsiva e organização de código.

## Observações

Projeto desenvolvido para fins de avaliação técnica e aprendizado.