import React from "react"
import PropTypes from "prop-types"


export default class Comment extends React.Component {
    constructor(props){
        super(props)
          this.state = {
            reply: "noreply",
            replydiv: "noreplydiv",
            replytoggle: "reply"
          }
          this.replyclick = this.replyclick.bind(this)
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
      console.log(this.state);
    }

  render () {
    const { current_user } = this.props
    const { reply, replydiv, replytoggle } = this.state
    return (
      <div className = {replydiv}>
        <button onClick = {this.replyclick}>{replytoggle}</button>
        <div className = {reply}>
          <img src = {current_user.picture_url}></img>
          <input placeholder = "reply to this comment"></input>
        </div>
      </div>
    )
   }
 }
