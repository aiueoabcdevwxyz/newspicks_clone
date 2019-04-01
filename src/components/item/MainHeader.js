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
  Popup,
  Input,
} from 'semantic-ui-react';




import { connect } from "react-redux";

import 'semantic-ui-css/semantic.min.css';



class MainHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return(
      <Menu
        icon='labeled'
        borderless
        style={{
          height:47.5,
          display:"flex",
          justifyContent:"center",
          position: "fixed", zIndex:1000,
        }}
      >
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <div style={{display:"inline", marginTop:2.5}}>
            <Icon name='home' />
            <span style={{marginLeft:5}}>
              Home
            </span>
          </div>
        </Menu.Item>

        <Menu.Item
          name='moments'
          active={activeItem === 'moments'}
          onClick={this.handleItemClick}
        >
          <div style={{display:"inline", marginTop:2.5}}>
            <Icon name='lightning' />
            <span style={{marginLeft:5}}>
              Moments
            </span>
          </div>
        </Menu.Item>

        <Menu.Item
          name='notifications'
          active={activeItem === 'notifications'}
          onClick={this.handleItemClick}
        >
          <div style={{display:"inline", marginTop:2.5}}>
            <Icon name='bell' />
            <span style={{marginLeft:5}}>
              Notifications
            </span>
          </div>
        </Menu.Item>

        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          <div style={{display:"inline", marginTop:2.5}}>
            <Icon name='mail' />
            <span style={{marginLeft:5}}>
              Messages
            </span>
          </div>
        </Menu.Item>

        <div style={{
          fontSize:20,
          marginTop:12.5,
          position:"absolute",
          left:"49%"
        }}>
          <Icon
            name='twitter'
            color='blue'
          />
        </div>
        
        <Menu.Item style={{marginLeft:320}}>
          <div className="ui search" style={{marginTop:-9}}>
            <div className="ui icon input">
              <input style={{width:235}} className="prompt" type="text" placeholder="Search Twitter" />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </Menu.Item>

        <Image
          avatar
          src="http://www.gravatar.com/avatar"
          style={{width:38.5, height:38.5, marginTop:3.5}}
        />

        <Button
          //onClick={() => this.setTweetModal()}
          style={{borderRadius:20, height:38.5, marginTop:3.5, marginLeft:12.5}}
          primary
          content="Tweet"
        />
      </Menu>    
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MainHeader);