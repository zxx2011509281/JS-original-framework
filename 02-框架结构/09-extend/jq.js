/**
 *
 * Created by ChengXiancheng on 2017/3/15.
 */

(function(window){
    var arr=[];
    var push=arr.push;
    var splice=arr.splice;
    var slice=arr.slice;

    //1、选择器函数
    var Sizzle=function(selector){
        return document.querySelectorAll(selector);
    };
    //2、入口函数
    var jQuery=function(selector){
        //返回一个F的实例
        return new jQuery.fn.F(selector);
    };
    jQuery.fn=jQuery.prototype={
        constructor:jQuery,
        F:function(selector){
            //1、清空之前的DOM元素
            splice.call(this,0,this.length);
            //2、通过选择器函数获取元素
            var elements=Sizzle(selector);
            //3、借用push方法将elements中的每一个DOM元素遍历添加到this中
            push.apply(this,elements);
            //4、返回this
            return this;

        }
    };

    //设置F的原型指向jquery的原型
    jQuery.fn.F.prototype=jQuery.fn;

    //extend方法
    jQuery.fn.extend=jQuery.extend=function(){
        var target,sources,
            arg0=arguments[0];

        if(arguments.length==0) return this;
        if(arguments.length==1){
            target=this;
            sources=[arg0];
        }else{
            target=arg0;
            sources=slice.call(arguments,1);
        }

        for (var i = 0; i < sources.length; i++) {
            var source = sources[i];
            for (var key in source) {
                target[key]=source[key];
            }
        }
        return target;
    };

    window.$=window.jQuery=jQuery;

})(window);