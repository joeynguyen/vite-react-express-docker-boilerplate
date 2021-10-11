# Vite React Express Docker Boilerplate

> Quickly bootstrap a new project with Vite React Express Boilerplate.

This boilerplate is a fork of [lmachens/vite-boilerplate](https://github.com/lmachens/vite-boilerplate), but replaces TypeScript with JavaScript, adds Docker, and removes Storybook.

This boilerplate contains all the tools you need to build a modern web app with Vite, Docker, React, and Express. You can use it to quickly bootstrap your project.

ESLint, stylelint, prettier, husky and lintstaged are configured to give you a solid development experience.

## Installing / Developing

First, [create a repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Now you are ready to go:

```shell
docker-compose build
```

This will install the dependencies required to run the boilerplate.

```shell
docker-compose up
```

Boom! The Docker container will run your server and client in development mode.

The default PORTS are:

- `3001` for the server
- `3000` for the client

You can configure the server port by setting the `PORT` environment variable in `.env`.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 3001) |

## Building

To build the Docker image, run:

```shell
docker build -t vite-react-express .
```

To run the image locally:

```shell
docker run --rm  --name vite-react-express -p 3001:3001 vite-react-express:latest
```

and navigate to `http://localhost:3001`.

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/*` is the client.

## Tests

A test runner is not installed (right now). But ESLint and Prettier are checked on commit and pushed thanks to husky and lintstaged.

## Licensing

MIT
