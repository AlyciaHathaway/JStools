# event.js
针对事件处理函数在标准浏览器和IE中的不同方法来做兼容。 BindEvent解决了参数传递不同，this指向不同的问题,并且可以采用removeEvent解除事件绑定。 对跨浏览器处理event对象做了完整的兼容，包括对象的获取(getEvent),目标元素的获取(getTarget),取消默认事件(preventDefault),阻止冒泡(stopPaprogation)

