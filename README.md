## `react-comment`
### 完成静态页面
- 首先把`class=`替换成`className=`
- 把`style=''`替换成`style={{}}`
- 拆分组建，有`App`、`Comment-Add`、`Comment-List`和`CommentItem`

### 数据的传递

- 在`constructor()`里面定义`state`对象，在`render(){}`里通过`this.state`获取
- 父组件传递数据到子组件，通过标签属性的形式传递，子组件通过`this.props`获取

### `App.jsx`主组件

- 在组件标签里面定义方法的时候要挂载在`this(组件对象)`上，还要在`constructor(){}`里面修正`this`指向，因为自定义的事件，`this`指向是`undefined`

### `CommentList`组件

- 通过`props`属性进行数据传递

