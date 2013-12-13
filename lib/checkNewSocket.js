var time = 0;

module.exports = function(req, res, app){

    res.set('Connection', 'close'); //请求应答之后关闭TCP连接，并监听TCP连接关闭事件杀死子进程
    res.send("this is from " + time);
    time++;

}