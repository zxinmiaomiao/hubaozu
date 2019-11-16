const express = require('express');

const app = express();
//我的心愿list
app.get('/dream/dreamlist', function (req, res) {
    res.send({
        message: "成功",
        code: 200,
        success: true,
        data:
            [
                {
                    "dreamId": 111,
                    "dreamStatus": 2,
                    "dreamContent": "hhhhh",
                    "dreamCreatetime": "2019-04-21 14:57:39",
                    "dreamCost": 5,
                }, {
                    "dreamId": 112,
                    "dreamStatus": 1,
                    "dreamContent": "heeeehhhh",
                    "dreamCreatetime": "2019-04-22 14:57:39",
                    "dreamCost": 6,
                }
            ]
    }
    )
});
//愿望详情
app.post('/dream/dreamdetail', function (req, res) {
    res.send({
        message: "成功",
        code: 200,
        success: true,
        data: {
            "dreamId": 111,
            "dreamStatus": 2,
            "dreamContent": "hhhhh",
            "dreamCreatetime": "2019-04-21 14:57:39",
            "dreamCost": 5,
        }
    }

    )
});
// 写日记利用POST请求发送给后端  后端会返回一个success
app.post('/dream/writediary', function (req, res) {
    res.send({
        "message": "成功",
        "success": true,
        "code": 200,
        "data": null
    }


    )
});
// 日记列表
app.get('/dream/querydiarylist', function (req, res) {
    res.send({
        "message": "成功",
        "code": 200,
        "data":
            [
                {
                    "userId": "10012",
                    "diaryId": "2019041620030500018",
                    "diaryContent": "你好啊哈哈哈123",
                    "createTime": "2019.04.16 20:03:04",
                },
                {
                    "userId": "10012",
                    "diaryId": "2019041615304200017",
                    "diaryContent": "你好啊哈哈哈",
                    "createTime": "2019.04.16 15:30:41",
                }
            ]
    })
});

// 日记详情
app.post('/dream/queryDiarydetail', function (req, res) {
    console.log(req)

    res.send({
        "message": "成功",
        "code": 200,
        "data": {
            "userId": "10012",
            "diaryId": "2019041615304200017",
            "diaryContent": "你好啊哈哈哈",
            "createTime": "2019.04.16 15:30:41",
        }

    })


});
// 短信验证码
app.post("/user/sendmsm", function (req, res) {
    console.log(req)

    res.send({
        "success": true,
        "message": "短信发送成功",
        "data": 1234
    }
    )


});

// 登入验证
app.post("/user/login", function (req, res) {
    console.log(req)

    res.send({
        "success": true,
        "message": null,
        "data": {
            "userId": 2,
            "userName": '喵喵喵',
            "userImage": 'fghjk.png',
            "userPhone": '17878787878',
            "userSex": 1,
            "userBirthday": ' 1995 - 2 - 2',
            "userMoney": '5285',
            "userEnergy": '52',
            "userTreenum": '2',
            "userCreatetime": "2011-11-11 12:12:12"
        }

    })
});
// 登入后  获取用户的头像  余额   名字信息
app.post('/homepage/getUserInfo', function (req, res) {
    console.log(req)
    res.send({
        'success': true,
        "message": "成功",
        "code": 200,
        "data": {
            'userId': 2,
            'userName': '喵喵喵',
            'userImage': 'fghjk.png',
            'userMoney': '12'
        }

    })
});
// 点击余额后  获取到用户的余额  
app.get("/user/mymoney", function (req, res) {
    console.log(req)
    res.send({
        "code": 200,
        "success": true,
        "message": null,
        "data": {
            'myMoney': 50.01,
        }
    }
    )
});
// 充值金额 
app.post("/user/recharge", function (req, res) {
    console.log(req)
    res.send({
        'code': 200,
        "success": true,
        "message": '充值成功',
        "data": null
    }
    )
});
// 余额明细
app.get("/user/balance", function (req, res) {
    res.send({
        "message": "成功",
        "code": 200,
        "data": {
            Balance: [
                {
                    'balanceId': 100,
                    'balanceUserId': 1234,
                    'balanceType': 1,
                    'balanceMoney': 2000,
                    'balanceTime': '2011-11-11 11:11:11',
                },
                {
                    'balanceId': 101,
                    'balanceUserId': 1234,
                    'balanceType': 2,
                    'balanceMoney': 2000,
                    'balanceTime': '2011-11-11 11:11:14',
                }
            ]
        }
    })
});
app.post('/waws/wish/find/friends', function (req, res) {
    res.send([
        {
            img: '123',
            name: 'zhangsan',
            phonenumber: '13111112121'
        },
        {
            img: '1234',
            name: 'lisi',
            phonenumber: '18885347769'
        }
    ]
    )
});
app.post('/waws/wish/me/energy', function (req, res) {
    res.send([
        {
            img: '123',
            way: '签到',
            sum: '+1',
            time: '2019-01-01'
        },
        {
            img: '1235',
            way: '许愿',
            sum: '-11',
            time: '2019-01-02'
        }
    ]
    )
});
app.post('/waws/wish/me/energy', function (req, res) {
    res.send([
        {
            img: '123',
            way: '签到',
            sum: '+1',
            time: '2019-01-01'
        },
        {
            img: '1235',
            way: '许愿',
            sum: '-11',
            time: '2019-01-02'
        }
    ]
    )
});
app.post('/waws/wish/status', function (req, res) {
    res.send(
        {
            id: 111,
            energysum: 1,
        },
    )
});
const port = 7000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});
