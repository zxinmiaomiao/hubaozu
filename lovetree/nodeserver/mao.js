const express = require('express');

const app = express();
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
                    "tree_price": "42000.00/株",
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
app.post('/waws/wish/status', function (req, res) {
    res.send(
        {
            id: 111,
            energysum: 1,
        },

    )
});
app.post('/waws/homepage/queryData', function (req, res) {
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
app.post('/waws/order/queryOrder', function (req, res) {
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


