module.exports = {
	env: {
	  browser: true,
	  es2021: true,
	  jest: true
	},
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:prettier/recommended',
	  'airbnb'
	],
	parserOptions: {
	  ecmaFeatures: {
		jsx: true
	  },
	  ecmaVersion: 'latest',
	  sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
	  'react/react-in-jsx-scope': 'off',
	  'react/jsx-closing-bracket-location': 'off'
	}
  };
  