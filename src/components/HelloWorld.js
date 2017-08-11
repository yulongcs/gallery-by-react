// es6 总共有6种创建变量的命令
//如下：
//  let 命令 
//  const 命令 
//  var 命令 
//  function 命令
//  import 命令
//  export 命令
//  import {} export{} 导入接口和导出接口的意思，能够很好的实现模块化
import React from 'react'

export class HelloWorld extends React.Component {
    // constructor 就是react的初始化函数
    constructor(props){
        super(props);
    }

    // render就是讲 下面return的模板转换成 HTML语言，把并插入节点，这个例子就是讲先的<h1>标签插入到Main.js的节点下
    render(){
        return <h1>hello word {this.props.name}</h1>
    }
}