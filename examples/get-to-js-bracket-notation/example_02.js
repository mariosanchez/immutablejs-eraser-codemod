const { Map } = require('immutable');

const obj = Map({
    antihero: 'don draper',
});

console.log(obj.get('antihero'));