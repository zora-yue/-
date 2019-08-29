// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(7,12)",
      des: "@csentence(10, 20)",
      day: "@integer(30,365)",
      percentage: "@integer(0,100)",
      'interest|5-20.2-2':100,
      'activity|0-1.1-1':100,
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(3),//解决 auth_icon 不随机
    'goods': mapData(16),
    'banner|2': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1565533039824,1565833039824)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ],
    'user':{
      "err":"@integer(0,1)"
    }
  })
};
