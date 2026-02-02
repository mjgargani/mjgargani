# mjgargani's Lab

## Descrição / Description

Portfolio desenvolvido com `ReactJS` (`Vite`) + `TypeScript` ([Saiba como](https://pt.vitejs.dev/guide/)), no ano de 2023. A aplicação é uma interface que consome, modela e armazena em cache, recursos da [API do GitHub](https://docs.github.com/pt/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28).

Portfolio developed with `ReactJS` (`Vite`) + `TypeScript` ([Learn how](https://vitejs.dev/guide/)), in the year 2023. The application is an interface that consumes, models and caches [GitHub API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28) resources.

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
docker run -it --rm -v $(pwd):/app -p 5173:5173 node:22-alpine sh -c "npm --prefix=/app i && npm --prefix=/app run dev -- --host"
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
