const express = require('express');

const app = express();

app.post('/waws/readdiary', function (req, res) {


        res.send([{
            text: '判断他的日记是否存在挂载的时候去向后端获取数据 判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在',
            time: '2019.04.12',
            id: 1
        }])
 
});
app.post('/waws/wish/find/friends', function (req, res) {
    res.send([
        {
        img:'123',
        name: 'zhangsan',
        phonenumber:'13111112121'
    },
    {
        img:'1234',
        name: 'lisi',
        phonenumber:'18885347769'
    }
    ]
)
});
app.post('/waws/wish/me/energy', function (req, res) {
    res.send([
        {
        img:'123',
        way: '签到',
        sum:'+1',
        time:'2019-01-01'
    },
    {
        img:'1235',
        way: '许愿',
        sum:'-11',
        time:'2019-01-02'
    }
    ]
)
});
app.post('/waws/wish/status', function (req, res) {
    res.send(
        {
        id:111,
        energysum:1,
    },
    
)
})
const port = 7000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});
