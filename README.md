<p align="center">
  <img src="https://github.com/MarceloBonifazio/teste-dev-fullstack/blob/master/repo_files/stack.png">
</p>

Pré Requisitos:

- php v7.4.3
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

Acessar o sistema localmente em http://localhost:8000

<img src="https://github.com/MarceloBonifazio/teste-dev-fullstack/blob/master/repo_files/exp.gif">
