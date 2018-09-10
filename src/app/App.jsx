import React, {Component} from 'react'

import CommentAdd from '../addComment/AddComment.jsx'
import CommentList from "../commentsList/CommentList.jsx";

//定义组件
export default class App extends Component {
  constructor(props){
    super(props);
    // 初始化数据
    this.state = {
      commentsList: [
        {
          username: 'tenlin',
          content: 'React不错'
        },
        {
          username: 'shiyun',
          content: 'React有点难'
        }
      ]
    };
    // 修正this指向
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }

  // 添加评论的方法
  add (comment) {
    // 获取当前的状态
    const {commentsList} = this.state;
    // 将要添加的数据添加进去
    commentsList.unshift(comment);
    // 更新状态
    this.setState({commentsList})
  }

  // 删除评论
  del (index) {
    // 获取当前的状态
    const {commentsList} = this.state;
    // 将要删除对应的数据
    commentsList.splice(index, 1);
    // 更新状态
    this.setState({commentsList})
  }

  render() {
    // 获取评论列表
    const {commentsList} = this.state;

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={this.add}/>
          <CommentList commentsList={commentsList} del={this.del}/>
        </div>
      </div>
    )
  }
}