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

Après avoir cloné le repository, lancer webpack en mode watch

```
npm i
npm run watch
start dist/index.html
```

## Liens utiles

* [botui](https://botui.org/) Framework pour construire le chat
* [webpack](https://webpack.js.org/concepts/) Module Bundler