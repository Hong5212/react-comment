import React, {Component} from 'react'

export default class CommentItem extends Component {
  constructor(props){
    super(props);
    // 修正this指向
    this.delComment = this.delComment.bind(this);
  }
  // 删除评论的方法
  delComment(event){
    // 获取要删除元素的下标
    // console.log(event.target.dataset.index); // undefined
    const {comment, index} = this.props;
    if(window.confirm(`您确定删除${comment.username}的评论吗？`)){
      // 删除指定评论内容
      const {del} = this.props;
      del(index)
    }
  }

  render() {
    // 声明接受属性
    const {comment} = this.props;

    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span>{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}