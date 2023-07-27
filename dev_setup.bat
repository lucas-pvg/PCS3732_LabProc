echo off
cls
echo.
echo CERTIFIQUE-SE QUE TENS O PYTHON 3.10 E O NVM INSTALADO
echo.
echo Se nao tiver, aperte Ctrl+C para sair e instale-o
pause
cd backend
py -m pip install pipenv
pipenv install --dev --python 3.10
pipenv run pre-commit install
pipenv run python manage.py migrate
echo.
echo Crie seu superuser:
echo.
pipenv run python manage.py createsuperuser
echo.
cd ..
nvm install 19.5.0
nvm use 19.5.0
cd frontend
npm install
echo.
echo Feche esse terminal
echo.
echo Execute o comando `npm install` dentro da pasta frontend