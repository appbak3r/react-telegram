# React Telegram

React Telegram is a web client for [Telegram](https://telegram.org)

## Getting started

This section provides a short intro to React Telegram

### Installation

Check out this repository and run next command inside repository directory. Application requires Node.JS and npm installed.

```
npm install
```

### Configuration

In order to start project you have to specify next environment variables

First obtain your `api_id` and `api_hash` from [https://my.telegram.org](https://my.telegram.org)

| Variable name                    | Description       | Example                     |
| -------------------------------- | :---------------- | :-------------------------- |
| REACT_APP_TELEGRAM_API_ID        | TDLib api_id      | `12345`                     |
| REACT_APP_TELEGRAM_API_HASH      | TDLib api_hash    | `kl3jf9429489dedkdkalsdlss` |
| REACT_APP_TELEGRAM_PRODUCTION_DC | Use production dc | `true`                      |

### Development

To start project in development mode simply run `npm start`

Project was bootstrapped with Creact React App.

### TDLib WASM Build instructions

Set Docker RAM at least 8gb

```
docker build ./tdlib -f ./tdlib/Dockerfile.wasm
docker create <IMAGE_ID>
docker cp <CONTAINER_ID>:/td/build/td_wasm.js ./public
docker cp <CONTAINER_ID>:/td/build/td_wasm.wasm ./public
```
