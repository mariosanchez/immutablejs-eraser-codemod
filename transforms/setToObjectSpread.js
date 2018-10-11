module.exports = function getToStandardJSApi(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const setCalls = root.find(j.VariableDeclaration).find(j.CallExpression, {
    callee: {
      property: {
        name: 'set',
      },
    },
  });

  setCalls.replaceWith(p => j.objectExpression([
    j.spreadProperty(j.identifier(p.value.callee.object.name)),
    j.spreadProperty(
      j.objectExpression([j.objectProperty(p.value.arguments[0], p.value.arguments[1])]),
    ),
  ]));

  return root.toSource();
};
