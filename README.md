# GoReactJS - Módulo 1

GoReactJS - Rocketseat

# Iniciando o projeto

```sh
$ npm init -y
```

# Instalando as dependências do ReactJS

```sh
$ npm install react react-dom
```

# Instalando as dependências do Babel e WebPack para Desenvolvimento (-D)

```sh
$ npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
```

#Configurando o arquivo .babelrc

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

#Configurando o arquivo webpack.config.js

```js
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

# Configurando o arquivo package.json

```js
"scripts": {
    "dev": "webpack --mode development"
},
```

# Executando o código

```sh
$ npm run dev
```

# Instalando a dependência similar ao **nodemon**

```sh
$ npm install -D webpack-dev-server
```

# Adicionando a configuração no Webpack.config.js

```js
devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
```

Arquivo webpack.config.js (completo)

```js
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

# No package.json - alterar a inicialização

```js
"scripts": {
    "dev": "webpack-dev-server --mode development"
  },
```

# Executando o código

```sh
$ npm run dev
```

# Acessando a aplicação

[Acesse o endereço: http://localhost:8080/](http://localhost:8080/)

#Instalando a dependência para fazer a tipagem dentro do código

```sh
$ npm install prop-types
```

#Instalando a dependência definir as PropTypes do Componente

```sh
$ npm install -D @babel/plugin-proposal-class-properties
```

Em seguida, configure o arquivo .babelrc

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

#Instalando a dependência de estilo de CSS

```sh
$ npm install -D style-loader css-loader
```

#Configurando o estilo no arquivo webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.js/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    }
  ];
}
```

#Instalando a dependência de estilo de SASS-Loader

```sh
$ npm install -D sass-loader node-sass
```

#Configurando o SASS no arquivo webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.js/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.scss/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    }
  ];
}
```

# Instalando o Editor Config (VSCode)

--> EditorConfig for VSCode
Em seguida, criar o arquivo: .editorconfig (Na raiz do projeto)

Arquivo editorconfig (Pode gerar com o botão direito --> Generate editorconfig)

```js
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

```

# Instalando o ESLint

```sh
$ npm install -D eslint

```

Em seguida, iniciar o eslint

```sh
$ node_modules/.bin/eslint --init
```

Passo a passo:
1 -> Use a popular style guide
2 -> Airbnb (https://github.com/airbnb/javascript)
3 -> Do you use React? (y/N) y
4 -> What format do you want your config file to be in? JSON

Após isso, ele cria um arquivo na raiz do projeto, chamado .eslintrc.json

Instale a dependência do babel-eslint

```sh
$ npm install -D babel-eslint
```

o Arquivo eslintrc, vai ficar assim:

```json
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
```

#Instalar a extensão eslint

#Instalar o Prettier

```sh
$ npm install -D prettier-eslint
```

em seguida, instalar a extensão do **Prettier Code Formatter** no VSCode

```json
{
  //Define o tema do VSCode
  "workbench.colorTheme": "Dracula",

  // Configura tamanho e família da fonte
  "editor.fontSize": 14,
  "editor.lineHeight": 20,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,

  "workbench.iconTheme": "material-icon-theme",
  "window.zoomLevel": 1,

  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true,

  "emmet.includeLanguages": {
    "nunjucks": "html"
  },
  "git.path": "/usr/bin/git",
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.format.enable": false
}
```
