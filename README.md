# Assistant-site

Ce projet a pour but d'intégrer un assistant utilisant DialogFlow sur un site web. Ici l'assistant-rh-sogeti

## Intégration

Cloner le repository

```
cd dist
start index.html
```

## Développement

On utilise Webpack pour générer [dist/bundle.js](dist/bundle.js) à partir de [index.js](index.js)

```
npm i
npm run start
```

On utilise Gulp pour générer [botui/build/botui.min.js](botui/build/botui.min.js) à partir de [botui/src/scripts/botui.js](botui/src/scripts/botui.js)

```
cd botui
npm i
gulp watch
```

## Liens utiles

* [botui](https://botui.org/) Framework pour construire le chat
* [webpack](https://webpack.js.org/concepts/) Module Bundler