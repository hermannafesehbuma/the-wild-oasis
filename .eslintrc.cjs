module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React-specific linting rules
    'plugin:react-hooks/recommended', // Hooks-specific linting rules
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Example custom rules; customize as needed
    'react/prop-types': 'off', // Disable PropTypes validation (useful if not using PropTypes)
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn for unused variables, ignore those starting with _
    'no-console': 'warn', // Warn for console statements in production
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
};
