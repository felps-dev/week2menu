# Configuração inicial

### Tenha certeza de ter o último Python instalado

Com o CD dentro da pasta `backend` crie um Virtual Env: `python -m venv env`  
Depois disso entre nele com o comando(windows): `env\scripts\activate`
Crie uma cópia do arquivo `env_template` com o nome `.env` e preencha com as informações do seu banco de dados  
Crie o banco de dados especificado no `.env`
Após isso, no terminal com o `env\Scripts\Activate` executado e o `(env)` aparecendo, execute: `python manage.py migrate` para realizer os migrations iniciais.  
Após, inicialize a fixture com o comando `py manage.py loaddata ini.json`
Estará pronto o ambiente, para iniciar a api basta executar: `py manage.py runserver` ou, especificando a porta com `py manage.py runserver 0.0.0.0:3000` (Exemplo com porta 3000).

### Endpoints

- `/api/vendors` GET, POST, PATCH, PUT, DELETE - Crud de Vendors
- `/api/vendors/<pk>/products` Retorna os produtos de Vendors, pelo `<pk>` do mesmo.
- `/api/products` GET, POST, PATCH, PUT, DELETE - Crud de Produts
