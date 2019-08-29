const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy("/api",{
            target:'http://localhost:3333',
            changeOrigin:true
        })
    );
    app.use(
        proxy("/mock",{
            target:'http://localhost:3333',
            changeOrigin:true
        })
    );
    app.use(
        proxy("/taobao",{
            target:"https://taobao.com",
            changeOrigin:true
        })
    )
}