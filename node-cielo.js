var https = require('https')
var iconv = require('iconv-lite');

module.exports = function (ambienteDeProducao) {


    var options = {
        hostname: 'ecommerce.cielo.com.br',
        port: 443,
        path: '/servicos/ecommwsec.do',
        secureProtocol: 'TLSv1_method',
        encoding: 'utf-8',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'text/xml',
            'Accept-Charset': 'utf-8',
            'Content-Length': 0
        },
        method: 'POST'
    };
    
    console.log(options);

    if (ambienteDeProducao || false) {
        options.hostname = 'ecommerce.cielo.com.br';
    }

    return {
        request : function (xml, callback) {
            var postData = 'mensagem=' + xml;
            options.headers['Content-Length'] = Buffer.byteLength(postData);
            var req = https.request(options, function(res) {
                res.on('data', function(chunk) {
                    var data = iconv.decode(chunk, 'iso-8859-1');
                    callback(null, data)
                });
            });
            req.write(postData);
            req.on('error', function(e) {
                callback(e);
            });
            req.end();
        }
    }
}
