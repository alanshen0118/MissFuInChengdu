Page({
  data:{
    // text:"这是一个页面"
    num: 1,
    toView: 'item1001',
    scrollTop: 0,
    categories:[
      {
        id:1001,
        category: '锅底',
        status: 'selected',
        goods:[
          {
            id: 88801,
            name: '高汤锅底',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: 'xxx',//描述
            sold: '38',//月售
            rate: '90%',//选择率
            price: '8',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88802,
            name: '老成都经典底',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: 'zzzzzzzzzzzzzzzzz',//描述
            sold: '66',//月售
            rate: '100%',//选择率
            price: '3',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88803,
            name: '椒麻锅底',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: 'ffffffffffffffffffff',//描述
            sold: '88',//月售
            rate: '88',//选择率
            price: '10',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
        ]
      },
      {
        id:1002,
        category: '5元',
        status: 'unselected',
        goods:[
          {
            id: 88804,
            name: '黑毛肚',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '2',//月售
            rate: '50',//选择率
            price: '5',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88805,
            name: '黄喉',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '',//月售
            rate: '',//选择率
            price: '5',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88806,
            name: '芝士丸',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '',//月售
            rate: '',//选择率
            price: '5',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
        ]
      },
      {
        id:1003,
        category: '3元',
        status: 'unselected',
        goods:[
          {
            id: 88807,
            name: '麻辣五花肉',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '',//月售
            rate: '',//选择率
            price: '3',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88808,
            name: '秘制里脊肉',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '',//月售
            rate: '',//选择率
            price: '3',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88809,
            name: '舌尖牛肉',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '',//月售
            rate: '',//选择率
            price: '3',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88810,
            name: '3元商品1',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '5',//月售
            rate: '50',//选择率
            price: '5',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88811,
            name: '3元商品2',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '24',//月售
            rate: '60',//选择率
            price: '5',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
          {
            id: 88812,
            name: '3元商品3',//菜品名
            thumbImgUrl: 'http://www.fuxiaojie.cn/d/file/cpjs/2015-11-01/42a8f1317417776a029a46195e2a91d7.jpg',
            desc: '',//描述
            sold: '12',//月售
            rate: '70',//选择率
            price: '5',//单价
            amount: 0,//数量
            minusStatus: 'disabled'
          },
        ]
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindMinus: function(event) {
    var categories = this.data.categories;
    var goodID = event.target.dataset.goodid;
    for(var i = 0;i < categories.length;i++) {
      var goods = categories[i].goods;
      for(var j = 0;j < goods.length;j++) {
        if(goods[j].id == goodID) {
          goods[j].amount --;
          goods[j].minusStatus = goods[j].amount < 1 ? 'disabled' : 'normal';
          // 将数值与状态写回
          this.setData({
              categories : categories,
          });
          break;
        }
      }
    }
  },
  bindPlus: function(event) {
    var categories = this.data.categories;
    var goodID = event.target.dataset.goodid;
    for(var i = 0;i < categories.length;i++) {
      var goods = categories[i].goods;
      for(var j = 0;j < goods.length;j++) {
        if(goods[j].id == goodID) {
          goods[j].amount ++;
          goods[j].minusStatus = goods[j].amount < 1 ? 'disabled' : 'normal';
          // 将数值与状态写回
          this.setData({
              categories : categories,
          });
          break;
        }
      }
    }
  },
  switchCategory: function(event) {
    var categories = this.data.categories;
    var toView = 'item' + event.target.dataset.categoryid;
    var currentScrollTop = 0;
    var hasFound = false;
    for(var i = 0;i < categories.length;i++) {
      var category = categories[i];
      if(category.id == event.target.dataset.categoryid) {
        category.status = 'selected'
        hasFound = true;
      } else {
        category.status = 'unselected'
      }
      if (!hasFound) {
        currentScrollTop = currentScrollTop + category.goods.length * 104 + 30;
      }
    }
    this.setData(
      {
        categories: categories,
        toView: toView,
        scrollTop: currentScrollTop
      }
    );
  },
  mainTableView_scrollToTop: function(event) {
    console.log(event);
  },
  mainTableView_scrollToBottom: function(event) {
    console.log(event);
  },
  mainTableView_scroll: function(event) {
    console.log(event);
    var categories = this.data.categories;
    var currentScrollTop = 0;
    var currentCategoryId = 0;
    for(var i = 0;i < categories.length;i++) {
      var category = this.data.categories[i];
      currentScrollTop = currentScrollTop + category.goods.length * 104 + 30;
      if(currentScrollTop > event.detail.scrollTop) {
        currentCategoryId = category.id;
        break;
      }
    }
    for(var i = 0;i < categories.length;i++) {
      var category = categories[i];
      if(category.id == currentCategoryId) {
        category.status = 'selected'
      } else {
        category.status = 'unselected'
      }
    }
    this.setData(
      {
        categories: categories,
        scrollTop: event.detail.scrollTop
      }
    );
  },
})