(module.exports = function(module, opts) {
  try {
    return require.resolve(module, opts);
  } catch (err) {
    return null;
  }
})
