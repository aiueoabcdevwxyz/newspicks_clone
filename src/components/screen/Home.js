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
  Label,
  Reveal,
} from 'semantic-ui-react';

import { connect } from "react-redux";

import TextareaAutosize from "react-autosize-textarea";
import OutsideClickHandler from 'react-outside-click-handler';
import 'semantic-ui-css/semantic.min.css';
import MaterialUI_Grid from "@material-ui/core/Grid";
import MaterialUI_Paper from '@material-ui/core/Paper';
import MaterialUI_Divider from '@material-ui/core/Divider';
import Scrollable from 'hide-scrollbar-react';

import faker from 'faker';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tweetContent: "",
      isTextAreaClicked: false,
      mouseOnMainNewsNum: null,
      mouseOnMainNewsChevronLeft: false,
      mouseOnMainNewsChevronRight: false,
      curMainNewsIdx: 0,
      mainNewsList: [
        {
          "image": "https://i.imgur.com/4ztWA6i.jpg",
          "title": "新元号 ６原案中４つは 「英弘」「広至」「万和」「万保」",
          "author": "NHKニュース",
          "postedAt": "1時間前",
          "numPicks": 100,
        },
        {
          "image": "https://i.imgur.com/KrGFw3W.jpg",
          "title": "ＥＵ離脱の代替案、またすべて否決　英議会で投票",
          "author": "朝日新聞デジタル",
          "postedAt": "2時間前",
          "numPicks": 200,
        },
        {
          "image": "https://i.imgur.com/Cah36bK.jpg",
          "title": "ソフトバンクは新卒社員数３年で最多、「30年先考え手を打て」と孫氏",
          "author": "Bloomberg",
          "postedAt": "3時間前",
          "numPicks": 300,
        },
        {
          "image": "https://i.imgur.com/awIu7nZ.png",
          "title": "電動バイクで４社が連携へ 国際的な規格づくりの主導権模索か",
          "author": "NHKニュース",
          "postedAt": "4時間前",
          "numPicks": 400,
        },
        {
          "image": "https://i.imgur.com/EYXWOqL.png",
          "title": "レコメンド技術企業買収で、テックリーダーを目指すマクドナルドの戦略",
          "author": "Inc.",
          "postedAt": "5時間前",
          "numPicks": 500,
        },
        {
          "image": "https://i.imgur.com/CPKyPD3.jpg",
          "title": "【ピッカー厳選】ビジネスで使える英語ワンフレーズ100を丸暗記",
          "author": "NewsPicks 編集部",
          "postedAt": "6時間前",
          "numPicks": 600,
        },
        {
          "image": "https://i.imgur.com/cTnzP2M.jpg",
          "title": "【激震】全米で急増。「リサイクル破綻」で泣く人・笑う人",
          "author": "NewsPicks 編集部",
          "postedAt": "7時間前",
          "numPicks": 700,
        },
        {
          "image": "https://i.imgur.com/oOn3zsV.jpg",
          "title": "「4つの世代で構成されるチーム」を上手に率いるための4つの方法",
          "author": "Inc.",
          "postedAt": "8時間前",
          "numPicks": 800,
        },
      ],
    };
  }

  getMainNews1TitleSubstr = (title) => {
    if(title.length < 30) {
      return title;
    }
    return title.substring(0, 30) + "...";
  }

  handleClickMainNewsChevronLeft = () => {
    const { mainNewsList, curMainNewsIdx } = this.state;
    var nextIndex = curMainNewsIdx - 1;
    if(nextIndex < 0) {
      nextIndex = mainNewsList.length - 1;
    }
    this.setState({
      curMainNewsIdx: nextIndex,
    });
  }

  handleClickMainNewsChevronRight = () => {
    const { mainNewsList, curMainNewsIdx } = this.state;
    var nextIndex = curMainNewsIdx + 1;
    if(nextIndex >= mainNewsList.length) {
      nextIndex = 0;
    }
    this.setState({
      curMainNewsIdx: nextIndex,
    });
  }


  mainNews = () => {
    const {
      mouseOnMainNewsNum,
      mouseOnMainNewsChevronLeft,
      mouseOnMainNewsChevronRight,
      mainNewsList,
      curMainNewsIdx,
    } = this.state;
    return (
      <List horizontal style={{marginTop:-13, cursor:"pointer"}}>
        <List.Item
          onMouseEnter={() => this.setState({mouseOnMainNewsNum:0})}
          onMouseLeave={() => this.setState({mouseOnMainNewsNum:null})}
        >
          {mouseOnMainNewsNum===0 &&
            <div style={{
              backgroundColor: "black",
              opacity:0.3,
              //transition: "opacity 0.1s",
              position:"absolute",
              top:'8.25vh',
              width:"55vw",
              height:"55vh",
              zIndex:100,
            }} />
              
          }

          <div style={{
            position:"absolute",
            top:'8.25vh',
            width:"55vw",
            height:"55vh",
          }}>
            <img
              src={mainNewsList[curMainNewsIdx].image}
              style={{
                width:"55vw",
                height:"55vh",
                cursor:"pointer",
              }}
              //onClick={(e) => this.handleImageClick(e, 0)}
            />

            {mouseOnMainNewsNum===0 &&
              <>
                <Icon
                  name="chevron left"
                  style={{
                    position:"absolute",
                    color:mouseOnMainNewsChevronLeft ? "white":"grey",
                    fontSize:40,
                    left:0,
                    top:"45%",
                    zIndex:200,
                    opacity:1.0,
                  }}
                  
                  onMouseEnter={() => this.setState({
                    mouseOnMainNewsChevronLeft:true,
                  })}
                  onMouseLeave={() => this.setState({
                    mouseOnMainNewsChevronLeft:false,
                  })}
                  onClick={() => this.handleClickMainNewsChevronLeft()}
                />
                <Icon
                  name="chevron right"
                  style={{
                    position:"absolute",
                    color:mouseOnMainNewsChevronRight ? "white":"grey",
                    fontSize:40,
                    right:0,
                    top:"45%",
                    zIndex:200,
                    opacity:1.0,
                  }}
                  onMouseEnter={() => this.setState({
                    mouseOnMainNewsChevronRight:true,
                  })}
                  onMouseLeave={() => this.setState({
                    mouseOnMainNewsChevronRight:false,
                  })}
                  onClick={() => this.handleClickMainNewsChevronRight()}
                />
              </>
            }
            
            <Label basic style={{
              position:"absolute", borderRadius:0,
              left:40, top:"45%",
              backgroundColor:"transparent",
              borderColor:"white", color:"white",
              zIndex:3000,
            }}>
              <span style={{fontSize:15}}>
                {mainNewsList[curMainNewsIdx].numPicks}
              </span>
              <span style={{fontSize:10}}>&nbsp; Picks</span>
            </Label>
            <p style={{
              fontFamily:"HiraKakuPro-W6", color:"white",
              position:"absolute", top:"57%",
              fontSize:30, left:40, width:"42.5vw", 
              maxHeight:"15vh", overflow:"hidden",
              //"text-overflow": "ellipsis",
              //whiteSpace: "pre",
              //display: "-webkit-box",
              //"-webkit-line-clamp": 2,
              //"-webkit-box-orient": "vertical"
              zIndex:3000,
            }}>
              {this.getMainNews1TitleSubstr(
                mainNewsList[curMainNewsIdx].title
              )}
            </p>
            <p style={{
              position:"absolute", top:"82.5%", left:40,
              color:"#D3D3D3", zIndex:3000,
            }}>
              {mainNewsList[curMainNewsIdx].author} &nbsp;
              {mainNewsList[curMainNewsIdx].postedAt}
            </p>
            <div style={{
              position:"absolute", bottom:"5%", left:"50%", right:"50%",
              zIndex:3000, display:"flex", justifyContent:"center",

            }}>
              {mainNewsList.map((news,i) => (
                <Icon
                  name="circle"
                  style={{
                    fontSize:9,
                    marginLeft:5,
                    color:i===curMainNewsIdx ? "white":"#A9A9A9"
                  }}
                  onClick={() => this.setState({
                    curMainNewsIdx: i,
                  })}
                />
              ))}
            </div>
          </div>
        </List.Item>
        <List.Item style={{marginLeft:1}}>
          <List vertical>
            <List.Item
              onMouseEnter={() => this.setState({mouseOnMainNewsNum:1})}
              onMouseLeave={() => this.setState({mouseOnMainNewsNum:null})}
            >
              {mouseOnMainNewsNum===1 &&
                <div style={{
                  backgroundColor: "black",
                  opacity:0.3,
                  position:"absolute",
                  top:'8.25vh',
                  left:"72vw",
                  width:"28vw",
                  height:"27.5vh",
                  zIndex:100,
                }} />
              }
              <div style={{
                position:"absolute",
                top:'8.25vh',
                left:"72vw",
              }}>
                <img
                  src="https://i.imgur.com/cTnzP2M.jpg"
                  style={{
                    width:"28vw",
                    height:"27.5vh",
                    cursor:"pointer",
                  }}
                  //onClick={(e) => this.handleImageClick(e, 1)}
                />

                <Label basic style={{
                  position:"absolute", borderRadius:0,
                  left:15, top:"45%",
                  backgroundColor:"transparent",
                  borderColor:"white", color:"white",
                  zIndex:3000,
                  paddingTop:1,
                  paddingBottom:1,
                }}>
                  <span style={{fontSize:10}}>
                    特集
                  </span>
                </Label>
                <p style={{
                  color: "white",
                  position:"absolute",
                  left:65, top:"45.5%",
                  fontSize:10,
                  zIndex:3000,
                }}>
                  イノベーターズ・トーク
                </p>
                <p style={{
                  fontFamily:"HiraKakuPro-W6", color:"white",
                  position:"absolute", top:"57.5%",
                  fontSize:20, left:15, width:"25vw", 
                  maxHeight:"10vh", overflow:"hidden",
                  //"text-overflow": "ellipsis",
                  //whiteSpace: "pre",
                  //display: "-webkit-box",
                  //"-webkit-line-clamp": 2,
                  //"-webkit-box-orient": "vertical"
                  zIndex:3000,
                }}>
                  {this.getMainNews1TitleSubstr(
                    "画家とプログラム開発者に共通する「頭の使い方」"
                  )}
                </p>

              </div>
              
            </List.Item>
            <List.Item
              onMouseEnter={() => this.setState({mouseOnMainNewsNum:2})}
              onMouseLeave={() => this.setState({mouseOnMainNewsNum:null})}
            >
              {mouseOnMainNewsNum===2 &&
                <div style={{
                  backgroundColor: "black",
                  opacity:0.3,
                  position:"absolute",
                  top:'35.75vh',
                  left:"72vw",
                  width:"28vw",
                  height:"27.5vh",
                  zIndex:100,
                }} />
              }
              <div style={{
                position:"absolute",
                top:'35.75vh',
                left:"72vw"
              }}>
                <img
                  src="https://i.imgur.com/EYXWOqL.jpg"
                  style={{
                    width:"28vw",
                    height:"27.5vh",
                    cursor:"pointer",
                  }}
                  //onClick={(e) => this.handleImageClick(e, 2)}
                />

                <Label basic style={{
                  position:"absolute", borderRadius:0,
                  left:15, top:"45%",
                  backgroundColor:"transparent",
                  borderColor:"white", color:"white",
                  zIndex:3000,
                  paddingTop:1,
                  paddingBottom:1,
                }}>
                  <span style={{fontSize:10}}>
                    特集
                  </span>
                </Label>
                <p style={{
                  color: "white",
                  position:"absolute",
                  left:65, top:"45.5%",
                  fontSize:10,
                  zIndex:3000,
                }}>
                  イノベーターズ・ライフ
                </p>
                <p style={{
                  fontFamily:"HiraKakuPro-W6", color:"white",
                  position:"absolute", top:"57.5%",
                  fontSize:20, left:15, width:"25vw", 
                  maxHeight:"10vh", overflow:"hidden",
                  //"text-overflow": "ellipsis",
                  //whiteSpace: "pre",
                  //display: "-webkit-box",
                  //"-webkit-line-clamp": 2,
                  //"-webkit-box-orient": "vertical"
                  zIndex:3000,
                }}>
                  {this.getMainNews1TitleSubstr(
                    "【猪瀬直樹】夏目漱石は“マーケット“を意識していた"
                  )}
                </p>
              </div>
            </List.Item>
          </List>
        </List.Item>
      </List>
    );
  }

  sideBarComment = () => {
    return(
      <>
        <div style={{borderRadius:0, width:"100%", height:"25vh", marginTop:12.5,}} >
          <List horizontal style={{marginLeft:15}}>
            <List.Item>
              <Image
                avatar
                src="http://www.gravatar.com/avatar"
                style={{width:30, height:30, marginTop:-15}}
              />
            </List.Item>
            <List.Item>
              <div style={{fontWeight:"bold", fontSize:12,}}>
                Profile Name
              </div>
              <div style={{color:"grey", fontSize:12}}>
                19m ago
              </div>
            </List.Item>
          </List>
          <div style={{marginLeft:15, marginTop:5, fontSize:12, width:"85%"}}>
            そのうち日本に来なくなるよ
          </div>
          <div style={{marginLeft:15, marginTop:5, fontWeight:"bold", fontSize:12, width:"85%"}}>
            あなたが知らない「移民国家」日本の実像
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:-25}}>
          <MaterialUI_Divider  style={{width:"90%",}} />
        </div>
      </>
    )
  }

  
  styles = {
    hideScroll: {
      '&::-webkit-scrollbar': {
        display:'none'
      },
    },
  }
  

  sideBarComments = () => {
    return(
      <Scrollable
        style={{height:"47vh", marginTop:-13}}
        //className={styles.hideScroll}
      >
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
        {this.sideBarComment()}
      </Scrollable>
    );
  }

  leftHalf = () => {
    return (
      <MaterialUI_Paper
        square={true}
        elevation={0}
        style={{
          //position:"absolute",
          marginTop:"8.25vh",
          height:"91.75vh", width:"17vw",
          backgroundColor:"white",
          overflow:"hidden",
          //display:"flex", justifyContent:"center",
          //flexDirection: "column", alignItems:"flex-start",
          //alignContent:"flex-start",
          //zIndex:500
        }}
        className={styles.hideScroll}
      >
        
        <div style={{borderRadius:0, width:"100%", height:"25vh", marginTop:25}}>
          <List>
            <List.Item style={{display:"flex", justifyContent:"center",}}>
              <Image
                avatar
                src="http://www.gravatar.com/avatar"
                style={{width:50, height:50,}}
              />
            </List.Item>
            <List.Item style={{marginTop:5, display:"flex", justifyContent:"center", fontWeight:"bold"}}>
              Profile Name
            </List.Item>
            <List.Item style={{display:"flex", justifyContent:"center", fontSize:12, color:"grey"}}>
              bio bio bio bio bio bio bio bio
            </List.Item>
          </List>
        </div>

        <MaterialUI_Divider  style={{marginTop:-25, marginBottom:12.5}} />


        <div style={{borderRadius:0, width:"100%", height:"10vh", display:"flex", justifyContent:"center"}}>
          <div>
            <div style={{fontSize:18, display:"flex", justifyContent:"center"}}>
              250
            </div>
            <div style={{fontSize:8, color:"grey",}}>
              フォロー
            </div>
          </div>
          <div style={{marginLeft:60}}>
            <div style={{fontSize:18, display:"flex", justifyContent:"center"}}>
              500
            </div>
            <div style={{fontSize:8, color:"grey",}}>
              フォロワー
            </div>
          </div>
        </div>

        <MaterialUI_Divider  style={{marginTop:-12, marginBottom:12.5}} />

        <div style={{borderRadius:0, width:"100%", height:"10vh", display:"flex", justifyContent:"center"}}>
          <div style={{fontSize:13, fontWeight:"bold", color:"#282828"}}>
            マイニュース
          </div>
          <div style={{marginLeft:70}}>
            <Icon name="chevron right" />
          </div>
        </div>

        <MaterialUI_Divider  style={{marginTop:-25, marginBottom:12.5}} />

        {this.sideBarComments()}

        
      </MaterialUI_Paper>
    );
  }

  rightHalf = () => {
    return (
      <MaterialUI_Paper
        square={true}
        elevation={0}
        style={{
          //position:"absolute",
          marginTop:"8.25vh",
          height:"91.75vh", width:"83vw",
          backgroundColor:"#F5F5F5",
          //display:"flex", justifyContent:"center",
          //flexDirection: "column", alignItems:"flex-start",
          //alignContent:"flex-start",
          //zIndex:500
          overflow:"hidden",
        }}
      >
        {this.mainNews()}
      </MaterialUI_Paper>
    );
  }

  render() {
    return(
      <div style={{display:"flex", justifyContent:"center",}}>
        {this.leftHalf()}
        {this.rightHalf()}
      </div>
    );
  }
}

const styles = {
  hideScroll: {
    '&::-webkit-scrollbar': {
      display:'none'
    },
  },
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Home);