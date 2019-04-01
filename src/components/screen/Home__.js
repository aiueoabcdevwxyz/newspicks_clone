import React from "react";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Card,
  Icon,
  Search,
  Button,
  Form,
  Modal,
  Popup
} from 'semantic-ui-react';

import { connect } from "react-redux";

import MainHeader from "../item/MainHeader";
import TextareaAutosize from "react-autosize-textarea";
import OutsideClickHandler from 'react-outside-click-handler';
import 'semantic-ui-css/semantic.min.css';



class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tweetContent: "",
      isTextAreaClicked: false,
    };
  }

  profileCard = () => {
    return (
      <Card style={{width:280}}>
        <Image
          src="https://i.imgur.com/CPKyPD3.jpg"
          style={{height:100}}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }

  tweet = () => {
    return (
      <Segment>
        <span>
          <Image
            avatar
            src="http://www.gravatar.com/avatar"
            style={{width:45, height:45,}}
          />
          <span style={{position:"absolute", top:8}}>
            <span style={{marginLeft:5, fontWeight:"bold"}}>
              profilename
            </span>
            <span style={{marginLeft:5, color:"grey"}}>
              @username
            </span>
            <span style={{color:"grey"}}>
              ・19m
            </span>
          </span>
        </span>
        <div style={{marginLeft:54, marginTop:-32.5}}>
          paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          bbbb
          ccccccccc
        </div>
      </Segment>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClickTextArea = () => {
    this.setState({
      isTextAreaClicked: true
    });
  }

  handleClickOutsideOfTextArea = () => {
    const { tweetContent } = this.state;
    if(tweetContent.length === 0) {
      this.setState({
        isTextAreaClicked: false
      });
    }
  }

  tweetForm = () => {
    const { tweetContent, isTextAreaClicked } = this.state;
    return (
      <Segment>
      <OutsideClickHandler
        onOutsideClick={
          () => this.handleClickOutsideOfTextArea()
        }
      >
        <Image
          avatar
          src="http://www.gravatar.com/avatar"
          style={{width:35, height:35,}}
        />
        <Form style={{display:"inline", marginLeft:14}}>
          <TextareaAutosize
            style={{resize:"none", width:517}}
            rows={isTextAreaClicked ? 4:1}
            placeholder="What's happening?"
            onClick={() => this.handleClickTextArea()}
            name="tweetContent"
            value={tweetContent}
            onChange={this.handleChange}
          />
        </Form>
        
      </OutsideClickHandler>
      </Segment>
    );
  }

  tweets = () => {
    return (
      <Segment.Group style={{width:600}}>
        {this.tweetForm()}
        {this.tweet()}
        {this.tweet()}
        {this.tweet()}
        {this.tweet()}
      </Segment.Group>
    );
  }

  cards = () => {
    return (
      <Segment.Group style={{width:280}}>
        <Segment>Left</Segment>
        <Segment>Middle</Segment>
        <Segment>Right</Segment>
      </Segment.Group>
    );
  }

  render() {
    return(
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          {this.profileCard()}
        </div>
        <div style={{marginLeft:13}}>
          {this.tweets()}
        </div>
        <div style={{marginLeft:12.5}}>
          {this.cards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Home);