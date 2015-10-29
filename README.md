# node-cielo
Cliente para o WebService da Cielo em Node.js

## Instalação
```js
npm install node-cielo
```

## Como utilizar?
```js

var ambienteDeProducao = false; // false para ambiente de testes e true para produção
var cielo = require('node-cielo')(ambienteDeProducao); 

var requestXml = '<?xml version="1.0" encoding="ISO-8859-1"?>\
<requisicao-captura id="3e22bdd0-2017-4756-80b7-35a532e6c973" versao="1.2.1">\
  <tid>10069930690101012005</tid>\
  <dados-ec>\
    <numero>1006993069</numero>\
    <chave>25fbb99741c739dd84d7b06ec78c9bac718838630f30b112d033ce2e621b34f3</chave>\
  </dados-ec>\
  <valor>3880</valor>\
</requisicao-captura>';

cielo.request(requestXml, function(err, responseXml) {
    if (err) throw err;
    console.log(responseXml);
})
```
