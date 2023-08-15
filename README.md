# PCS3732_LabProc

Emulador didático de instruções ARM;

## Configuração automática

-   `./dev_setup.bat`

## Configuração do frontend

### Instalação por .exe

-   Instale o NodeJS pelo website: https://nodejs.org/en/blog/release/v19.5.0
-   Entre na pasta do projeto PCS3732_LabProc/frontend e rode o seguinte comando para instalar as dependências do node: `npm install`
-   Após isso, rode ainda nessa pasta os seguintes comandos:
-   `npm install react-router-dom`
-   `npm install react-icons`
-   `npm install react-select`
-   Para subir o ambiente entre na pasta emulador-didatico e rode o comando: `npm start`

### Instalação por linha de comando

-   Instale o nvm: https://github.com/coreybutler/nvm-windows/releases
-   Pra confirmar a instalação rode `nvm -v`
-   `nvm install 19.5.0`
-   `nvm use 19.5.0`
-   `cd frontend`
-   `npm install`
-   `npm start`

## Configuração do backend

-   `cd backend/`

-   `py -m pip install pipenv`

-   `pipenv install --dev --python 3.10`

-   `pipenv run pre-commit install`

-   `pipenv run python manage.py migrate`

-   `pipenv run python manage.py createsuperuser`

-   `pipenv run python manage.py runserver`
