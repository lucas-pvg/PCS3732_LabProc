# PCS3732_LabProc

Emulador didático de instruções ARM;

## Configuração do frontend

- Instale o NodeJS pelo website: https://nodejs.org/en
- Entre na pasta do projeto PCS3732_LabProc e rode o seguinte comando para instalar as dependências do node: `npm install`
- Para subir o ambiente entre na pasta emulador-didatico e rode o comando: `npm start`

## Configuração do backend

### Automated Installation

- `./dev_setup.bat`

### Manual Installation

- `cd backend/`

- `py -m pip install pipenv`

- `pipenv install --dev --python 3.10`

- `pipenv run pre-commit install`

- `pipenv run python manage.py migrate`

- `pipenv run python manage.py createsuperuser`

- `pipenv run python manage.py runserver`
