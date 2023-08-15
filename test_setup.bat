echo off
cls
echo.
echo CERTIFIQUE-SE QUE O PYTHON 3.10 E O NVM ESTAO INSTALADOS
echo.
echo Se nao os tiver, aperte Ctrl+C para sair e instale-os nos links referenciados no README
pause
cd backend
py -m pip install pipenv
pipenv install --python 3.10
pipenv run python manage.py migrate
cd ..
nvm install 19.5.0
nvm use 19.5.0
cd frontend
npm install
echo.
echo Feche esse terminal
echo.
echo Execute o comando `npm install` dentro da pasta frontend