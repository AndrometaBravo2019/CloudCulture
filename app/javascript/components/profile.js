import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {oneUser} from '../api/api'
import {myFriends} from '../api/api'
import {myFriendsIds} from '../api/api'
import {makeFriends} from '../api/api'
import {sentpendingFriends} from '../api/api'
import {pendingFriends} from '../api/api'
import {goodbyeToYou} from '../api/api'
import {createPost} from '../api/index'

// parts
import Imbar from "./imbar"
import Photos from "./photos"
import ProfileFeed from "./profilefeed"
import CloudPost from "./post"
import ChangeAvatar from './changeAvatar'
import Friendpic from './friendpic'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "",
            friends: [],
            friendsids:[],
            pendingids:[],
            sentpendingids:[],
            blocked: [],
            defaultpic: "data:image/png;base64,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",
            request: {
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:0
            },
            accept:{
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:1
            },
            reject:{
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:2
            },
            block:{
                sender_id: this.props.current_user.id,
                recipient_id: "",
                status:3
            }


        }
         this.handleFriendRequest = this.handleFriendRequest.bind(this);
         this.handleAccept = this.handleAccept.bind(this);
         this.handleReject = this.handleReject.bind(this);
         this.destroyFriendship = this.destroyFriendship.bind(this)
    }

    componentWillMount() {
        let id = this.props.match.params.id
        oneUser(id).then(APIusers => {
            this.setState({user: APIusers});
        })
        myFriends().then(APIfriends => {
            this.setState({friends: APIfriends});
        })
        myFriendsIds().then(APIfriendsids => {
            this.setState({friendsids: APIfriendsids});
        })
        pendingFriends().then(APIpendingids => {
            this.setState({pendingids: APIpendingids});
        })
        sentpendingFriends().then(APIpendingids => {
            this.setState({sentpendingids: APIpendingids});
        })

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
          let id = this.props.match.params.id
          oneUser(id).then(APIusers => {
              this.setState({user: APIusers});
          })
          myFriends().then(APIfriends => {
              this.setState({friends: APIfriends});
          })
          myFriendsIds().then(APIfriendsids => {
              this.setState({friendsids: APIfriendsids});
          })
          pendingFriends().then(APIpendingids => {
              this.setState({pendingids: APIpendingids});
          })
          sentpendingFriends().then(APIpendingids => {
              this.setState({sentpendingids: APIpendingids});
          })
        }
    }

    handleFriendRequest(event){
        let {user, request} = this.state
        let friendrequest = request
        friendrequest.recipient_id = user.id
        request = friendrequest
        this.setState({request: request})
        makeFriends(this.state.request).then(successRequest =>{
            alert("Request Sent")
        })
        window.location.reload()
    }

    handleAccept(event){
        let {user, accept} = this.state
        let friendaccept = accept
        friendaccept.recipient_id = user.id
        accept = friendaccept
        this.setState({accept: accept})
        makeFriends(this.state.accept).then(successRequest =>{
            alert("You Are Now Friends")
        })
        window.location.reload()
    }

    handleReject(event){
        let {user, reject} = this.state
        let friendreject = reject
        friendreject.recipient_id = user.id
        reject = friendreject
        this.setState({reject: reject})
        makeFriends(this.state.reject).then(successRequest =>{
            alert("You Are Now Friends")
        })
        window.location.reload()
    }
    destroyFriendship(){
        let {user} = this.state
        goodbyeToYou(user.id).then(successRequest =>{
            alert("You and this User Are no Longer Friends")
        })
    }


    render(){
        const { users, current_user,
            edit_user, posts
        } = this.props

        const { user, friends,
            friendsids, pendingids,
            sentpendingids, blocked,
            defaultpic
        } = this.state
        const profileAlt = `${user.firstname} ${user.lastname}'s profile picture`

    return (

    <section id="intro" className="intro">
      <div className="overlay">
        <div id ='title'>
          <h1>CLOUD CULTURE</h1>
          <hr/>
        </div>

        {current_user.id == user.id && user.picture_url != defaultpic &&
          <div className = "changeAvatar">
            <ChangeAvatar
              current_user = {current_user}
            />
           <div className = "halfcircle">
              <p>Change Picture</p>
           </div>
          </div>
          ||current_user.id == user.id && user.picture_url == defaultpic &&
            <div className = "changeAvatar">
              <ChangeAvatar
                current_user = {current_user}
              />
             <div className = "halfcircle" >
                <p>Add Picture</p>
             </div>
            </div>
            ||
          <img src = {user.picture_url} className = "profilepic"></img>
        }

        <h3>{user.firstname} {user.lastname} ({user.username})</h3>
        <br/>

        <div className = "buttons">
           <button className = "homebutton">
              <a href = "/map">Map</a>
           </button>
           <br/>
           {!friendsids.includes(user.id) && sentpendingids.includes(user.id)
             && <button onClick = {this.handleAccept} className = "accept">Accept</button>}
           {!friendsids.includes(user.id) && sentpendingids.includes(user.id)
             && <button onClick = {this.handleReject} className = "reject">Reject</button>}
           {friendsids.includes(user.id)
              && <div className = "makeafriend">
                  <button onClick = {this.destroyFriendship} className = "unfriend">
                    UnFriend
                  </button>
                  <br/>
                </div>
            || current_user.id != user.id && !pendingids.includes(user.id)
              && <div className = "makeafriend">
                  <button onClick = {this.handleFriendRequest} className = "friendrequest">
                    Send a friend Request
                  </button>
                </div>
            }
           {current_user.id != user.id
             && <button className = "message">Send a Message</button>}
           {current_user.id == user.id
             && <button className = "edituser">
                  <a href = {edit_user}>Edit Profile</a>
                </button>
            }
        </div>

         <h4>
           About {user.firstname}:<br/>
           '{user.bio}'<br/><br/>
           Current Cloud:<br/>
           {user.lat} / {user.lng}<br/><br/>
           Age: {user.age}<br/><br/>
           Recent Posts:<br/><br/>
         </h4>

         <ProfileFeed
            posts = {posts}
            user = {user}
            current_user = {current_user}
         />

      </div>

    </section>

      )
    }
}

export default Profile;
