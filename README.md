# cra-rezvani
CRA template which handle versioning eslint and prettier all together

## What it has

1- setup conventional standard versioning
2- setup eslint configuration for airbnb
3- setup prettier

## How to use:

simply by using this command

```
npx create-react-app --template rezvani [app-name]
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
