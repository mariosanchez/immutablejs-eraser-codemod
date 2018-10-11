module.exports = function getToStandardJSApi(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const getCalls = root.find(j.CallExpression, {
    callee: {
      property: {
        name: 'get',
      },
    },
  });

  getCalls.replaceWith(p => j.memberExpression(p.value.callee.object, p.value.arguments[0]));
  return root.toSource();
};
