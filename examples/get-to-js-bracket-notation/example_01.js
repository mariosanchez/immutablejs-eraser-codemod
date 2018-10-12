const { fromJS, Map } = require('immutable');

const obj = fromJS({
    hero: 'vegeta',
});

console.log(obj.get('hero'));
