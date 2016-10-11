//index.js
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    imgUrls: [
      'http://www.fuxiaojie.cn/banner/banner1.jpg',
      'http://www.fuxiaojie.cn/banner/banner2.jpg',
      'http://www.fuxiaojie.cn/banner/banner3.jpg'
    ],
    awesomeFoods:[
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
        name: '肥肠粉',
        desc: '其麻辣鲜爽，色红味美，配上特色的拌肥肠既可作为小吃品味'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/ca959678e89a9a83a0d1292d3b965e68.jpg',
        name: '冒花蛤',
        desc: '新鲜蛤蜊采用成都冒菜的做法，做出麻辣海鲜'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/7705749aa3b1df94fe1a74fcf60e37f3.jpg',
        name: '椒麻牛肉',
        desc: '椒麻牛肉以鲜香麻辣，其制作手法特殊，以朝天椒为首上等大红袍花椒为辅，特殊手法集中炒至，付小姐亲手制作，其味道也是把地道的老家味道带到了上海。'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/05371b8ea84abf9f53f54f304a992c5f.jpg',
        name: '夫妻肺片',
        desc: '20世纪30年代在四川成都有一对摆小摊的夫妇，男叫郭朝华，女叫张田政，用心和口条煮熟，然后凉干，切片，再则红油、花椒、芝麻、香油、味精、上等的酱油，搅拌成盘，后被称之“夫妻肺片”'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/c24edc5012f8678fd135c99300ad80ea.jpg',
        name: '猪脚米线',
        desc: '成都米线的一种吃法，鲜香麻辣搭配卤制的猪手，美味极限。”'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/5e51e4abab4744cf9190f243817e025a.jpg',
        name: '自贡冷吃兔',
        desc: '自贡冷吃兔，是四川省自贡市著名的汉族传统美食。今已有百余年历史。四川的自贡、富顺、荣县一带是全国有名的养兔之乡，兔肉供应十分充足；该地区人们也十分喜爱吃兔肉，尤其是喜爱烹饪和品尝一种名为“冷吃兔”的菜”'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/884e45aa0072d147b02aac8598f41cbf.jpg',
        name: '冒鸭血',
        desc: '冒鸭血是成都地区的一道汉族特色小吃，采用猪脑子，拌之以海椒末、花椒粉以及其他佐料，冒煮而成。气味醇厚，入口绵软，香而不腻，油而不肥。”'
      },
      {
        imgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/f31ca249e50fe773016e157b860604c4.jpg',
        name: '冰粉',
        desc: '在重庆，冰粉是一种夏天大街小巷都能吃到的甜品，吃辣串必备解辣神器。而付妈妈则是摊位中的一位，做法与其他不同。因此取名“付氏冰粉””'
      }
    ],
    awesomeFoodIconUrl: 'http://www.fuxiaojie.cn/images/product_jt.png',
    awesomeTitle: '热点菜肴',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1500
  },
  // 事件处理函数
  viewTap: function() {
    console.log(this.data.awesomeFoods)
  }
  
})