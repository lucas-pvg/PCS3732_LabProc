# PCS3732_LabProc

 Emulador didático de instruções ARM;

## Configuração do backend

### Automated Installation

-  `./dev_setup.bat`

### Manual Installation

-  `cd backend/`

-  `pipenv install --dev`

-  `pipenv run pre-commit install` 

-  `pipenv run python manage.py migrate`

-  `pipenv run python manage.py createsuperuser`

-  `pipenv run python manage.py runserver`
