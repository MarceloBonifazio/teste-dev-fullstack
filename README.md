<p align="center">
  <img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="200">
  <img src="https://www.xpand-it.com/wp-content/uploads/2018/01/React_logo_wordmark.png" width="200">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" width="200">
</p>

Pré Requisitos:

- php v7.4
- node v10.16.3
- mongodb v3.6.3

```bash
$ git clone git@github.com:MarceloBonifazio/teste-dev-fullstack.git <path>
$ cd <path>
$path> composer install | Instala dependencias php
$path> php artisan key:generate
```

Criar .env ou copiar .env.exemple com as configurações do banco, exp:

```
DB_CONNECTION=mongodb
MONGO_DB_HOST=127.0.0.1
MONGO_DB_PORT=27017
MONGO_DB_DATABASE=database
MONGO_DB_USERNAME=null
MONGO_DB_PASSWORD=null
```

```bash
$path> php artisan migrate:roolback | Garante que a base de dados será recriada caso já exista
$path> php artisan migrate --seed
$path> yarn install | Instala dependencias js
$path> yarn run dev | Gera os assets js e css
$path> php artisan serve 
```
