var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|100': [{
        'id|+1': 1,
        "text":"@cname"
    }]
})
Mock.mock("/list","post",function(options){
    let {page,pagesize}=JSON.parse(options.body)
    return data.list.slice((page-1)*pagesize ,page*pagesize)
})