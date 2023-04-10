# mjgargani's Lab

![thumbnail](./thumbnail.webp)

> 🌐 [https://gargani.dev/](https://gargani.dev/)

![latest-version](https://img.shields.io/github/package-json/v/mjgargani/mjgargani) ![action-check](https://github.com/mjgargani/mjgargani/actions/workflows/node-ci.yml/badge.svg) ![deploy-check](https://github.com/mjgargani/mjgargani/actions/workflows/static.yml/badge.svg)

![coverage-statements](badges/badge-statements.svg) ![coverage-branches](badges/badge-branches.svg) ![coverage-functions](badges/badge-functions.svg) ![coverage-lines](badges/badge-lines.svg)

## Descrição / Description

Portfolio desenvolvido com `ReactJS` (`Vite`) + `TypeScript` ([Saiba como](https://pt.vitejs.dev/guide/)), no ano de 2023. A aplicação é uma interface que consome, modela e armazena em cache, recursos da [API do GitHub](https://docs.github.com/pt/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28).

Portfolio developed with `ReactJS` (`Vite`) + `TypeScript` ([Learn how](https://vitejs.dev/guide/)), in the year 2023. The application is an interface that consumes, models and caches [GitHub API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28) resources.

> ⚠️ Anteriormente, o projeto usava o [CRA](https://create--react--app-dev.translate.goog/docs/adding-typescript/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=wapp) para desenvolvimento e geração de builds. Porém, o [Vite](https://pt.vitejs.dev/) torna o desenvolvimento muito mais rápido e otimizado, a medida que ultrapassa limitações que os empacotadores tradicionais possuem ([Saiba mais](https://pt.vitejs.dev/guide/why.html)).
>
> ⚠️ Previously, the project used [CRA](https://create-react-app.dev/docs/adding-typescript/) to development and generation of builds. However, [Vite](https://vitejs.dev/) makes development much faster and more optimized, as it overcomes limitations that traditional bundlers have ([Learn more](https://vitejs.dev/guide/why.html)).

> ⭐ O projeto é publicado através do [GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/about-github-pages). O `CI/CD` é feito com o apoio do [GitHub Actions](https://docs.github.com/pt/actions/learn-github-actions/understanding-github-actions).
>
> ⭐ The project is published through [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages). `CI/CD` is powered by [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions).

O projeto também conta com uso de [styled-components](https://styled-components.com/) para criação e estilização dos componentes, o [Marked](https://marked.js.org/) para interpretação de texto no formato `Markdown` e o [React Icons](https://react-icons.github.io/react-icons/).

The project also uses [styled-components](https://styled-components.com/) to create and style components, [Marked](https://marked.js.org/) to interpret text in `Markdown` format and [React Icons](https://react-icons.github.io/react-icons/).

## Como rodar / How to run

> ⚠️ Necessita de um [navegador web](https://www.mozilla.org/pt-BR/firefox/download/thanks/) e do [NodeJS](https://nodejs.org/pt-br/). O projeto foi testado utilizando a versão `18.15.0`.

> ⚠️ Requires a [web browser](https://www.mozilla.org/pt-BR/firefox/download/thanks/) and [NodeJS](https://nodejs.org/en/). The project was tested using version `18.15.0`.

```bash
npm i # Install the packages / Instale os pacotes
```

```bash
npm run dev # Run the `dev` script / Rode o script `dev`
```

Após a compilação ocorrer, use o navegador para acessar o endereço `http://localhost:5173/`.

After compilation takes place, use the browser to access the address `http://localhost:5173/`.

## Rodar com o Docker / Run with Docker

> ⚠️ Necessita do [Docker](https://docs.docker.com/engine/install/) instalado no host para funcionar.

> ⚠️ Requires [Docker](https://docs.docker.com/engine/install/) installed on the host to work.

```bash
docker run -it --rm -v $(pwd):/app -p 5173:5173 node:18.15.0-alpine sh -c "npm --prefix=/app i && npm --prefix=/app run dev -- --host"
```

Após a compilação ocorrer, use o navegador para acessar o endereço `http://localhost:5173/`.

After compilation takes place, use the browser to access the address `http://localhost:5173/`.

## Rodar a build com `nginx` (`Docker-compose`) / Run the build with `nginx` (`Docker-compose`)

### Como rodar / How to run

> ⚠️ Necessita de um [navegador web](https://www.mozilla.org/pt-BR/firefox/download/thanks/) e do [Docker](https://docs.docker.com/engine/install/) instalado no host para funcionar.

> ⚠️ Requires a [web browser](https://www.mozilla.org/pt-BR/firefox/download/thanks/) and [Docker](https://docs.docker.com/engine/install/) installed on the host to work.

```bash
docker compose up -d --build
```

Após iniciar o container, use o navegador para acessar o endereço `http://localhost:8080/`.

After starting the container, use the browser to access the address `http://localhost:8080/`.

### Como parar / How to stop

```bash
docker compose down
```

## Quer ajudar a financiar meus projetos? / Want to help fund my projects?

Desde um café ☕ ou uma breja 🍺, à ração dos meus bixanos 🐱 🐱, qualquer valor pode ajudar!

From a coffee ☕ or a beer 🍺, to my cats' food 🐱 🐱, any amount can help!

🪙 [Acesse meu link do site 'Padrim' / Visit my website link 'Padrim'](https://www.padrim.com.br/mjgargani)
