import React from 'react';
import connect from '@vkontakte/vkui-connect-promise';
import { ConfigProvider, TabbarItem, Tabbar, Epic } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import { connect as reduxConnect } from "react-redux";
import HomeView from "../../view/homeView/HomeView";
import SearchView from "../../view/searhView/SearchView";
import TinderView from "../../view/tinderView/TinderView";
import FavoritesView from "../../view/favoritesView/FavoritesView";
import SettingsView from "../../view/settingsView/SettingsView";
import StartView from "../../view/startView/StartView";
import IconHome from "../icon/IconHome";
import IconSearch from "../icon/IconSearch";
import IconKross from '../icon/IconKross';
import IconStarBar from '../icon/IconStarBar';
import IconSetting from '../icon/IconSetting';
import { getUserInfo, isChangeBoolean, onChangeGender, onChooseSizeBySize } from "../../reducers/user";
import ApiService from "../../api/krossy-api";

class App extends React.Component {

  Service = new ApiService();

  constructor(props) {
    super(props);
    this.state = { activeStory: 'welcome' };
    this.initApp();
  }

  initApp = async () => {
    this.props.isLoad(true)
    connect.send("VKWebAppInit", {})
    connect.send("VKWebAppGetUserInfo", {})
      .then(e => {
        this.props.init(e.data)
      })
      .then(() => this.props.isLoad(false))
  }


  goView = () => this.setState({ activeStory: 'homeView' });

  onStoryChange = (e) => this.setState({ activeStory: e.currentTarget.dataset.story });

  render() {

    const { data } = this.props;

    return (
      data.isLoadUserInfo ? null :
        <ConfigProvider isWebView={true}>
          <Epic activeStory={this.state.activeStory}
            tabbar={
              <Tabbar
                className={this.state.activeStory === 'welcome' ? 'main-tabbar-hidden' : 'main-tabbar-show'}
              >
                <TabbarItem
                  onClick={this.onStoryChange} selected={this.state.activeStory === 'homeView'}
                  data-story='homeView'
                >
                  <IconHome active={this.state.activeStory === 'homeView'} />
                </TabbarItem>
                <TabbarItem
                  onClick={this.onStoryChange} selected={this.state.activeStory === 'searchView'}
                  data-story='searchView'
                >
                  <IconSearch active={this.state.activeStory === 'searchView'} />
                </TabbarItem>
                <TabbarItem
                  onClick={this.onStoryChange} selected={this.state.activeStory === 'tinderView'}
                  data-story='tinderView'
                >
                  <IconKross active={this.state.activeStory === 'tinderView'} />
                </TabbarItem>
                <TabbarItem
                  onClick={this.onStoryChange} selected={this.state.activeStory === 'favoritesView'}
                  data-story='favoritesView'
                >
                  <IconStarBar active={this.state.activeStory === 'favoritesView'} />
                </TabbarItem>
                <TabbarItem
                  onClick={this.onStoryChange} selected={this.state.activeStory === 'settingsView'}
                  data-story='settingsView'
                >
                  <IconSetting active={this.state.activeStory === 'settingsView'} />
                </TabbarItem>
              </Tabbar>
            }
          >
            <StartView id='welcome' goView={this.goView} fetchedUser={this.state.fetchedUser} />
            <HomeView id='homeView' />
            <SearchView id='searchView' />
            <TinderView id='tinderView' />
            <FavoritesView id='favoritesView' />
            <SettingsView id='settingsView' />
          </Epic>
        </ConfigProvider>
    );
  }
}

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadUserInfo', bool)),
    init: data => dispatch(getUserInfo(data)),
    gender: value => dispatch(onChangeGender(value)),
    size: size => dispatch(onChooseSizeBySize(size))
  })
)(App);


