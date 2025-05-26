# 🧁 e-cooks

## 1. Introdução

O projeto **e-cooks** é uma aplicação web de e-commerce focada na venda de e-books de culinária. Ele permite que os usuários naveguem por uma lista de produtos, visualizem detalhes de cada e-book, adicionem itens a uma sacola de compras virtual e simulem o processo de finalização de compra. A interface é projetada para ser intuitiva e amigável.

---

## 2. Principais Funcionalidades

- **Página Inicial (Landing Page)**: Apresenta a proposta do site e um convite para explorar os produtos.

- **Visualização de Produtos**:
  - Listagem de todos os e-books disponíveis na página principal da aplicação (`/app`).
  - Páginas de detalhes individuais para cada produto, exibindo imagem, nome, descrição e preço.

- **Busca de Produtos**:
  - Funcionalidade de busca na página principal que filtra os e-books pelo nome em tempo real, com sugestões.

- **Sacola de Compras**:
  - Adicionar produtos à sacola a partir da página de detalhes do produto.
  - Visualizar os itens na sacola, com suas respectivas quantidades e preços.
  - Aumentar ou diminuir a quantidade de cada item na sacola.
  - Remover itens individualmente da sacola.
  - Calcular e exibir o preço total dos itens na sacola.
  - Limpar todos os itens da sacola ao finalizar a compra.

- **Navegação**:
  - Sistema de rotas para navegar entre as diferentes páginas da aplicação (inicial, produtos, sacola, confirmação de compra).

- **Simulação de Checkout**:
  - Ao finalizar a compra na sacola, o usuário é redirecionado para uma página de confirmação.

---

## 3. Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build e servidor de desenvolvimento rápido para projetos web modernos.
- **React Router DOM**: Para gerenciamento de rotas e navegação.
- **Tailwind CSS**: Framework CSS utility-first para estilização.
  - Integrado ao Vite usando `@tailwindcss/vite` e `@tailwindcss/postcss`.
- **Context API (React)**: Utilizada para gerenciamento do estado global da sacola de compras (`BagContext`).
- **pnpm**: Gerenciador de pacotes rápido e eficiente em disco.

---

## 4. Estrutura do Projeto (Simplificada)

```plaintext
rocket-lab/
├── public/
│   └── (arquivos estáticos como favicon, etc.)
├── src/
│   ├── assets/
│   │   └── (imagens e SVGs do projeto)
│   ├── pages/
│   │   ├── App.tsx
│   │   ├── Bag.tsx
│   │   ├── Fim.tsx
│   │   ├── Landing.tsx
│   │   ├── Product1.tsx, Product2.tsx, Product3.tsx, Product4.tsx
│   ├── BagContext.tsx
│   ├── Router.tsx
│   ├── index.css (estilos globais e importações Tailwind)
│   ├── main.tsx (ponto de entrada da aplicação)
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em sua máquina:

- **Node.js**: Versão 16.x ou superior (que inclui o `npm`, necessário para instalar o `pnpm`).  
  Você pode baixar em: [https://nodejs.org](https://nodejs.org)

- **pnpm**: Gerenciador de pacotes.  
  Se você não o tiver, pode instalá-lo globalmente após instalar o Node.js:

```bash
npm install -g pnpm
```

---

## 6. Instalação e Execução (Para rodar o projeto existente)

Siga os passos abaixo para configurar e rodar o projeto localmente, assumindo que você já possui os arquivos do projeto:

### 🔹 Clone o Repositório (se aplicável)

```bash
git clone <repository-url>
```

Caso tenha recebido os arquivos de outra forma (ex: `.zip`), descompacte-os.

### 🔹 Navegue até o Diretório do Projeto

```bash
cd nome-da-pasta-do-projeto
```

Por exemplo:

```bash
cd rocket-lab
```

### 🔹 Instale as Dependências

```bash
pnpm install
```

### 🔹 Execute a Aplicação em Modo de Desenvolvimento

```bash
pnpm dev
```

Esse comando irá compilar o projeto e iniciá-lo em um servidor local (geralmente em `http://localhost:5173`, conforme configurado pelo Vite).  
O endereço exato será exibido no terminal. Abra-o no navegador.

---

## 7. Nota sobre a Criação Inicial do Projeto (Referência)

> Esta seção é apenas informativa. Para rodar o projeto existente, siga a seção 6.

### 🔹 Instalar o pnpm (caso ainda não tenha)

```bash
npm install -g pnpm
```

### 🔹 Criar projeto com Vite (template React com TypeScript)

```bash
pnpm create vite rocket-lab --template react-ts
```

### 🔹 Navegar até a pasta do projeto

```bash
cd rocket-lab
```

### 🔹 Instalação inicial das dependências

```bash
pnpm install
```

### 🔹 Adicionar dependências específicas

**React Router DOM:**
```bash
pnpm add react-router-dom
```

**Tailwind CSS (dependências de desenvolvimento):**
```bash
pnpm add -D tailwindcss @tailwindcss/vite @tailwindcss/postcss
```

### 🔹 Configurar Tailwind

1. Criar os arquivos de configuração:

```bash
npx tailwindcss init -p
```

2. Configurar os caminhos dos arquivos de template no `tailwind.config.js`.

3. Adicionar as diretivas do Tailwind ao seu CSS principal (`src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 🔹 Rodar a aplicação:

```bash
pnpm dev
```