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
app.get('/homepage/treetype', function (req, res) {
    res.send({
        'success': true,
        "message": "成功",
        "code": 200,
        "data": {
            "treeList": [
                {
                    "tree_id": "1234",
                    "tree_name": "杉树",
                    "tree_price": "999",
                    "tree_age": "20",
                    "tree_type_id": 1,
                    "tree_thumbnail": "",
                    "tree_publisher": "安徽省九华镇人民政府",
                },
                {
                    "tree_id": "222",
                    "tree_name": "银杏",
                    "tree_price": "42000",
                    "tree_age": "820年",
                    "tree_type_id": 1,
                    "tree_thumbnail": "",
                    "tree_publisher": "安徽省九华镇人民政府",
                },

            ],
        }

    },

    )
});
app.get('/treedetail', function (req, res) {
    console.log(req.query.treeId)
    res.send({
        'success': true,
        "message": "成功",
        "code": 200,
        "data": {
            "tree_id": "1234",
            "tree_name": "杉树",
            "tree_price": "999",
            "tree_age": "20",
            "tree_type_id": 1,
            "tree_publisher": "安徽省九华镇人民政府",
            "tree_detail_img": "dfghj.png",
            "tree_detail_desc": "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
        }
    },
    )
});
app.get('/order/sureOrder', function (req, res) {
    console.log(req.query.treeId)

    res.send({
        "success": true,
        "message": null,
        "data": {
            "treeId": 1,
            "treeName": "金钱松",
            "treePrice": 99,
            "treeTypeId": 3,
            "tree_thumbnail": "http://img.timewoods.com/news_1904161928500000.png",
            "tree_publisher": "安徽人民政府",
            "tree_age": 300
        }

    },
    )


});
app.get('/order/treeOrder', function (req, res) {
    res.send({
        "success": true,
        "message": "下单成功",
        "Code": 201,
        "data": {

        }
    },
    )

});
//以上  是全的部分






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
    res.send([{
        text: '判断他的日记是否存在挂载的时候去向后端获取数据 判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在',
        time: '2019.04.12',
        id: 1
    }])

});
// 好友查找
app.post('/dream/friends', function (req, res) {
    res.send([

        {
            message: "成功",
            code: 200,
            success: true,
            data: [
                {
                    userId: "10025",
                    userName: "w945312",
                    userImage: "1904161928500000.png",
                    userPhone: "17612341627",
                }
            ]
        },
        {
            message: "成功",
            code: 200,
            success: true,
            data: [
                {
                    userId: "10026",
                    userName: "w945313",
                    userImage: "1904161928500000.png",
                    userPhone: "17612341628",
                }
            ]
        },

    ]
    )
});
// 个人信息查询
app.get('/dream/me', function (req, res) {
    res.send([
        {
            success: true,
            message: "成功",
            code: 200,
            data: {
                userId: 1861,
                userName: "哈哈哈",
                userImage: 'ghjkhgfghjk.png',
                userPhone: '17825151515',
                userSex: 1,
                userBirthday: "1996-04-21 14:57:39",
                userMoney: 300,
                userEnergy: 21,
                userTreenum: 15,
                userCreatetime: "2019-04-21 14:57:39",
                daynum: 12
            }
        }

    ]
    )
});
// 个人能量查询
app.post('/dream/energy/list', function (req, res) {
    res.send([
        // {
        //     img: '123',
        //     way: '签到',
        //     sum: '+1',
        //     time: '2019-01-01'
        // },
        {
            message: "成功",
            success: true,
            code: 200,
            data: [
                {
                    type: 1,
                    energyNum: -2,
                    createTime: '2019-04-21 14:57:39',
                },
                {
                    type: 2,
                    energyNum: 2,
                    createTime: "2019-05-21 14:57:39",
                }
            
            ]
        }
            
    ]
)
});
// 能否许愿状态查询
app.post('/waws/wish/status', function (req, res) {
    res.send(
        {
            id: 111,
            energysum: 1,
        },

    )
});
app.post('/homepage/queryData', function (req, res) {
    res.send(
        {
            "success": true,
            "message": "成功",
            "code": 200,
            "data": {
                prpularList: [
                    {
                        tree_id: 1,
                        tree_name: "杉树",
                        tree_price: 999,
                        tree_age: 20,
                        tree_type_id: 1,
                        tree_publisher: 'XXX政府',
                    },
                    {
                        tree_id: 2,
                        tree_name: "香蕉树",
                        tree_price: 888,
                        tree_age: 2,
                        tree_type_id: 1,
                        tree_publisher: 'XXX政府',
                    }
                ],
                ecologyList: [
                    {
                        tree_id: 1234,
                        tree_name: "杉树",
                        tree_price: 999,
                        tree_age: 20,
                        tree_type_id: 4,
                        tree_publisher: 'XXX政府',
                    }
                ],
                ancientList: [
                    {
                        tree_id: 1234,
                        tree_name: "杉树",
                        tree_price: 999,
                        tree_age: 20,
                        tree_type_id: 3,
                        tree_publisher: 'XXX政府',
                    }
                ]
            }
        }

    )
});
app.post('/order/queryOrder', function (req, res) {
    res.send(
        {
            success: true,
            message: "成功",
            code: 200,
            data: {
                treeList: {
                    message: "成功",
                    code: 200,
                    data: {
                        myTreeList: [
                            {
                                orderId: 1001,
                                orderCode: '0x0fjiisdifjma',
                                userId: 15,
                                treeId: 1,
                                treeName: '杉树',
                                treeTypeId: 1,
                                orderCreateTime: '2011-11-11 11:11:11',
                                orderEndTime: '2011-11-11 11:11:11',
                                orderTreenum: 1,
                                orderAccount: 33.21
                            },
                            {
                                orderId: 1002,
                                orderCode: '0x0fjiisdifjma',
                                userId: 15,
                                treeId: 1,
                                treeName: '杉树',
                                treeTypeId: 1,
                                orderCreateTime: '2011-11-11 11:11:11',
                                orderEndTime: '2011-11-11 11:11:11',
                                orderTreenum: 1,
                                orderAccount: 33.21
                            },
                        ],

                    }
                }
            }
        }
    )
});
const port = 7000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});


