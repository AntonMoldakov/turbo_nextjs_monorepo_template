module.exports = {
  '**/*.(ts|tsx|js)': () => ['yarn format', 'yarn type-check'],
};
