Package.describe({
  summary: 'A multi-transport async logging library for node.js. "CHILL WINSTON! ... I put it in the logs."'
});

Npm.depends({
    "winston": "0.7.2",
    "winston-mongodb": "0.4.0" 
});

Package.on_use(function (api, where) {
  api.add_files('winston.js', 'server');
});
