# Configuração do TypeScript

1. Inicializar um projeto Node.js! (npm init)
2. Instalar o TypeScript
    2.1. Instalação global: `npm install  -g (nome do pacote)`
    2.2. Instalação local (dentro do projeto): `npm install (nome do pacote)`
3. Utilizar o TypeScript instalado para transpilar o código(converter .ts para .js)! `npx tsc (caminho do arquivo que deseja transpilar) --watch`
    3.1. --watch ajuda a transpilar remotamente sem precisar que o dev fique atualizando manualmente!!
4.  outDir: possibilita criar uma pasta para armazenar o arquivo .js que foi criado atraves da transpilação

5. strict: true (significa que o typescript irá fazer toda checagem de tipagem se houver um erro ele irá acusar).

6. noEmitonError: true (significa que se houver algum erro no typescript a transpilação não irá ocorrer).