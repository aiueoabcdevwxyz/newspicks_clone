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
import faker from 'faker';

import 'semantic-ui-css/semantic.min.css';



class MainHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  trigger = (
    <>
      <span style={{color:"white",}}>
        <Image
          avatar
          src={faker.internet.avatar()}
          style={{marginTop:-2.5, marginRight:10}}
        />
      </span>
      <div style={{color:"white", display:"inline",}}>
        {faker.name.findName()}
      </div>
    </>
  );


  render() {
    const { activeItem } = this.state;

    return(
      <div style={{
        borderRadius:0,
        position: "fixed", zIndex:5000,
        width:"100vw",
        height:50,
        backgroundColor:"#00008B",
        display:"inline-block",
        overflow:"hidden",
        "box-shadow": "0px 2.5px 10px 0.5px #282828"
      }}>
     
        <div style={{color:"white", display:"inline-block"}}>
          <Icon
            name="sidebar"
            style={{fontSize:40, marginTop:17, marginLeft:20}}
          />
        </div>
        


        
        <div style={{marginTop:-49.5, marginLeft:90}}>
          <div className="ui search" style={{display:"inline-block"}} >
            <div className="ui icon input">
              <i className="search icon" style={{color:"white", display:"inline-block"}} />
              <input
                style={styles.input}
                className="prompt"
                type="text"
                placeholder="検索する"
              />
            </div>
            <div className="results"></div>
          </div>
        </div>

       


        <Image
          src="https://i.imgur.com/JE27JYh.png"
          style={{
            position:"absolute",
            left:"45.5%",
            top: "25%",
            "-ms-transform": "translateY(-50%)",
            "transform": "translateY(-50%)",
            height:25,
            width:"auto",
            marginTop:13,
            display:"inline-block"
          }}
        />

        <div style={{
          color:"white",
          display:"inline-block",
          float:"right",
          marginRight:30,
          marginTop:-26.5
        }}>
          <Icon
            name="add"
            style={{fontSize:25,}}
          />
        </div>

        <div style={{
          color:"white",
          display:"inline-block",
          float:"right",
          marginRight:90,
          marginTop:-26.5
        }}>
          <Icon
            name="bell outline"
            style={{fontSize:25,}}
          />
        </div>
        
        <Dropdown
          trigger={this.trigger}
          pointing='top right'
          icon={
            <Icon
              name="dropdown"
              style={{color:"white",}}
            />
          }
          style={{
            marginTop:-28,
            display:"inline-block",
            float:"right",
            marginRight:155,
            //zIndex:9000
          }}
        >
          <Dropdown.Menu
            style={{
              width:200,
              cursor:"pointer",
              position:"absolute",
              zIndex:9000
            }}
          >
          
            <Dropdown.Item
              content='マイピックス'
              style={{marginTop:6.5}}
            />
            <Dropdown.Item
              content='ユーザーを探す'
            />
            <Dropdown.Divider />
            
            <Dropdown.Item
              content='プレミアムについて'
              style={{marginTop:6.5}}
            />
            <Dropdown.Item
              content='アカデミアについて'
            />
            <Dropdown.Divider />

            <Dropdown.Item
              content='設定'
              style={{marginTop:6.5}}
            />
            <Dropdown.Item
              content='問い合わせ'
            />
            <Dropdown.Item
              content='ログアウト'
              style={{marginBottom:6.5}}
            />
          </Dropdown.Menu>
        </Dropdown>
          


    
      </div>   

      
    );
  }
}

const styles = {
  input: {
    //top: "50%",
    //"-ms-transform": "translateY(-50%)",
    //"transform": "translateY(-50%)",
    width:"25vw",
    backgroundColor:"#2F4F4F",
    color:"white",
    height:35,
    borderColor:"transparent",
    '::-webkit-input-placeholder': {
      color: "white"
    },
    'input::placeholder': {
      color: "white"
    }
  },
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MainHeader);