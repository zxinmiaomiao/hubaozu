const express = require('express');

const app = express();

app.post('/waws/readdiary', function (req, res) {


        res.send([{
            text: '判断他的日记是否存在挂载的时候去向后端获取数据 判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在',
            time: '2019.04.12',
            id: 1
        }])
 
});
const port = 7000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});
