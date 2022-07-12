<a href="https://www.npmjs.com/package/cra-template-rezvani"><img alt="Downloads" src="http://img.shields.io/npm/dm/cra-template-rezvani.svg"></a>
[![npm](https://img.shields.io/npm/dt/cra-template-rezvani.svg)](https://www.npmjs.com/package/cra-template-rezvani)
<a href="https://www.npmjs.com/package/cra-template-rezvani"><img alt="npm version" src="https://badge.fury.io/js/cra-template-rezvani.svg"></a>

# rezvani
CRA template which handle versioning eslint and prettier all together and also provide desgin structure system for large scale application.


## What it has

1- setup conventional standard versioning

2- setup eslint with configuration of airbnb

3- setup prettier

4- desgin structure

## How to use:

simply by using this command

```
npx create-react-app [app-name] --template rezvani
```
or with yarn
```
yarn create react-app [app-name] --template rezvani
```


you can replace [app-name] with any name.

### Available Sciprts

```
"release": "standard-version && react-scripts build",
"serve": "npm run build && serve -s build",
"lint": "eslint .",
"lint:fix": "eslint --fix",
"format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```

### For more information

[versioning](https://github.com/conventional-changelog/standard-version)

[eslint](https://github.com/eslint/eslint)

[prettier](https://github.com/prettier/prettier)
