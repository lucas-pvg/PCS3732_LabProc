# PCS3732_LabProc

 Emulador didático de instruções ARM;

## Configuração do backend

### Automated Installation

-  `./dev_setup.bat`

### Manual Installation

-  `cd backend/`

-  `py -m pip install pipenv`

-  `pipenv install --dev --python 3.10`

-  `pipenv run pre-commit install` 

-  `pipenv run python manage.py migrate`

-  `pipenv run python manage.py createsuperuser`

-  `pipenv run python manage.py runserver`
