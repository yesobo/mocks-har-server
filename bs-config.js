var proxy = require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy('/api', {
    target: 'http://localhost:8080', // /sip/test will be sent to http://localhost:8080/api/...
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});


module.exports = {
  server: {
    baseDir: './',
    port: 3000,
    middleware: [jsonPlaceholderProxy],
  },
  startPath: './'
};