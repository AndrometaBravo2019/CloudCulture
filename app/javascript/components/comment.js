import React from "react"
import PropTypes from "prop-types"

import { createReply } from '../api/api'


export default class Comment extends React.Component {
    constructor(props){
        super(props)
          this.state = {
            reply: "noreply",
            replydiv: "noreplydiv",
            replytoggle: "reply",
            commentString: "",
            comment_id: this.props.comment.id
          }
          this.replyclick = this.replyclick.bind(this)
          this.handleChange = this.handleChange.bind(this);
          this.commentSubmit = this.commentSubmit.bind(this)
    }

    replyclick(){
      const { reply } = this.state
      if(reply == "noreply"){
        const newreply = "reply"
        const newreplydiv = "replydiv"
        const toggler = "close"
        this.setState({reply: newreply, replydiv: newreplydiv, replytoggle: toggler})
      }else{
        const newreply = "noreply"
        const newreplydiv = "noreplydiv"
        const toggler = "reply"
        this.setState({reply: newreply, replydiv: newreplydiv, replytoggle: toggler})
      }
    }

    commentSubmit(){
      const {comment_id, commentString} = this.state
      createReply(comment_id, commentString).then(successPost => {
        alert("Reply Submitted")
      })
    }
    handleChange(event){
      const { commentString } = this.state
      this.setState({commentString: this.commentString.value})
    }

  render () {
    const { current_user, comment } = this.props
    const { reply, replydiv, replytoggle, commentString } = this.state
    return (
      <div className = {replydiv}>
        <button onClick = {this.replyclick}>{replytoggle}</button>
        <div className = {reply}>
          <img src = {current_user.picture_url}></img>
          <form onSubmit = {this.commentSubmit}>
            <input placeholder = "reply to this comment" onChange={this.handleChange} ref={(commentString) => this.commentString = commentString} value = {commentString}/>
          </form>
        </div>
      </div>
    )
   }
 }
