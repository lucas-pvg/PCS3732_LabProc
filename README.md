# PCS3732_LabProc - Emulador didático de instruções ARM

A proposta desse projeto é desenvolver um simulador de instruções ARM que possibilite o usuário aprender mais sobre algumas categorias de instruções e sobre o funcionamento do ARM como um todo, enquanto pode testar seu conhecimento simulando as instruções aprendidas. O projeto foi desenvolvido em JavaScript e Python, usando React e Django.

A parte visual do projeto e a interface com a qual o usuário interage foi implementada usando React e é o que possibilita que o projeto seja disponibilizado no formato de uma aplicação Web. Já o tratamento dos dados, processamento e simulação das instruções é feito no backend da aplicação, implementado em Django, permitindo que uma lógica que simula as principais funcionalidades do ARM fosse implementada.

Dessa forma, foram escolhidas algumas categorias de instruções para serem simulados, sendo elas instruções aritméticas básicas, instruções de desvio, instruções de operações lógicas e instruções de movimentação de operandos, como MOV e MVN, entre outros.

## Organização do projeto

O projeto está, principalmente, divido entre os diretórios backend e frontend, onde estão armazenados a simulação e processamento das instruções usando Django e a aplicação Web desenvolvida usando React, respectivamente.

Para a aplicação, a divisão de telas foi feita a partir de cada categoria de instrução e ser simulada e outras funcionalidades da aplicação. Dessa forma, temos uma tela dedicada para a descrição e simulação de cada tipo de instrução citada anteriormente, sendo uma para aritméticas, uma para desvios e uma para os demais detalhes da arquitetura. Além disso, temos uma tela principal, uma tela contendo informações sobre os integrantes do grupo e uma tela de quiz, na qual o usuário pode responder uma série de perguntas sobre a arquitetura ARM e receber o resultado do seu desempenho.

## Dependências

-   Python 3.10
-   Django 4.2.x
-   Node 19.5.0

## Configuração automática

-   Para desenvolvedores: `./dev_setup.bat`
-   Para fins de teste: `./test_setup.bat`

## Configuração manual do frontend

### Instalação por .exe

-   Instale o NodeJS pelo website: https://nodejs.org/en/blog/release/v19.5.0
-   Entre na pasta do projeto PCS3732_LabProc/frontend e rode o seguinte comando para instalar as dependências do node: `npm install`
-   Para subir o ambiente entre na pasta emulador-didatico e rode o comando: `npm start`

### Instalação por linha de comando

-   Instale o nvm: https://github.com/coreybutler/nvm-windows/releases
-   Pra confirmar a instalação rode `nvm -v`
-   `nvm install 19.5.0`
-   `nvm use 19.5.0`
-   `cd frontend`
-   `npm install`
-   `npm install react-router-dom`
-   `npm install react-icons`
-   `npm install react-select`
-   `npm start`

## Configuração manual do backend

-   `cd backend/`
-   `py -m pip install pipenv`
-   `pipenv install --python 3.10`
-   `pipenv run python manage.py migrate`
-   `pipenv run python manage.py runserver`
