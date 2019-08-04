import React from "react"
import PropTypes from "prop-types"
import { Container, Form} from 'react-bootstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button} from 'reactstrap';

import {createPost} from '../api/index'
import {allTagNames} from '../api/api'

class CloudPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        form:{
           user_id: this.props.current_user.id,
           lat: '',
           lng: '',
           poststring: '',
           post_status: '',
        },
           formoverlay: "formoverlay",
           tag_id: "",
           tagdropdownOpen: false,
           statusdropdownOpen: false,
           tagnames: [],
          }
          this.handleNewPost = this.handleNewPost.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleIdChange = this.handleIdChange.bind(this);
          this.tagtoggle = this.tagtoggle.bind(this);
          this.statustoggle = this.statustoggle.bind(this);
          this.tagselect = this.tagselect.bind(this);
          this.statusselect = this.statusselect.bind(this);

      }

      handleNewPost(){
        createPost(this.state.form, this.state.tag_id).then(successPost => {
            alert("Post Submitted")
        })
      }

      handleChange(event){
        const {form, formoverlay} = this.state
        form[event.target.name] = event.target.value
        this.setState({form})
        if (form.post_status != 1 || form.post_status != 2 || form.post_status != 3){
          this.setState({formoverlay: "nodisp"})
        }
      }
      handleIdChange(event){
        this.setState({ tag_id: this.tag_id.value })
      }

      tagtoggle() {
        this.setState(prevState => ({
          tagdropdownOpen: !prevState.tagdropdownOpen
        }));
      }
      statustoggle() {
        this.setState(prevState => ({
          statusdropdownOpen: !prevState.statusdropdownOpen
        }));
      }

      tagselect(event) {
        this.setState({
          tagdropdownOpen: !this.state.tagdropdownOpen,
          tag_id: event.target.value
        });
      }
      statusselect(event) {
        const {post_status} = this.state.form
        this.setState({
          statusdropdownOpen: !this.state.statusdropdownOpen,
          post_status: this.post_status.value
        });
      }


      componentWillMount() {
          allTagNames().then(APItagnames => {
              this.setState({tagnames: APItagnames});
          }
      )}

      render() {
        let {tagnames, formoverlay} = this.state
        let dropitems = tagnames.map((tag, index)=>{
          return(
            <DropdownItem
              onChange = {this.handleIdChange}
              ref={(tag_id) => this.tag_id = tag_id}
              onClick = {this.tagselect}
              value = {tag.id}>
              {tag.tag}
            </DropdownItem>
          )
      });
      return (
        <Container>
          <div className = "post">
            <center>
              <form id="postfeed" >
                <p>
                  <font color = 'orange'>Please tell us about your project!</font>
                </p>
                <div className = "statusholder">
                  <div className={formoverlay}>
                    <div className="text">Set Your Availability</div>
                  </div>
                  <Form.Control  as="select" ref={post_status => this.post_status = post_status} onChange={this.handleChange} name = "post_status" className = "poststatus">
                    <option> </option>
                    <option value = "1">Available</option>
                    <option value = "2">Working</option>
                    <option value = "3">Busy</option>
                  </Form.Control>
                </div>
                <br/>

                <textarea
                  type='text'
                  name='poststring'
                  onChange={this.handleChange}
                  value={this.state.form.poststring}
                  ref={(poststring) => this.poststring = poststring}
                  placeholder=" post content ..."
                />

                <br/>
                <br/>
                <div className = "postBase">
                  <Dropdown as={ButtonGroup} isOpen={this.state.tagdropdownOpen} toggle={this.tagtoggle} onClick = {this.tagselect} className = "tagselecter">
                    <Button variant="success" disabled >Tags</Button>
                    <DropdownToggle split variant="success" id="dropdown-split-basic" />
                    <DropdownMenu>
                      <DropdownItem
                           href="/createtag">
                           ⇥ Create a Tag ⇤
                       </DropdownItem>
                      {dropitems}
                    </DropdownMenu>
                  </Dropdown>

                  <button
                    type="submit"
                    onClick={this.handleNewPost}
                    className="btn btn-secondary btn-sm">CREATE POST
                  </button>
                </div>

                <br/>

              </form>
            </center>
          </div>
        </Container>
      )
    }
}

export default CloudPost
