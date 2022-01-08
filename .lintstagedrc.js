module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
};
