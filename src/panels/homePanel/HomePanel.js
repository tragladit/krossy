import React from 'react';
import { Panel, Div, PullToRefresh } from "@vkontakte/vkui";
import ProductCardSmall from '../../components/productCardSmall/ProductCardSmall';
import './HomePanel.css';
// import Advertising from '../../components/advertising/Advertising';
import { platform, IOS } from "@vkontakte/vkui";
import HeaderHome from "../../components/headerHome/HeaderHome";
import { connect as reduxConnect } from "react-redux";
// import {getData, getProducts, getUserInfo, onChangeGender, onChooseSizeBySize} from "../../reducers/user";
import ApiService from "../../api/krossy-api";

const osname = platform();

class HomePanel extends React.Component {

  Service = new ApiService();

  constructor(props) {
    super(props);
    this.state = {
      contextOpened: false,
      fetching: false,
      mode: 'all',
    };

    this.onRefresh = () => {
      const { id } = this.props.data.userInfo;
      this.setState({ fetching: true });
      this.Service.getProducts(id)
        .then(res => {
          if (res.ok) {
            this.props.products(res.result);
            this.setState({ fetching: false })
          }
        })
    }
  }

  toggleContext = () => {
    this.setState({ contextOpened: !this.state.contextOpened });
  };

  select = (e) => {
    const currentMode = e.currentTarget.dataset.mode;
    this.setState({ mode: currentMode });
    requestAnimationFrame(this.toggleContext);
  };

  render() {

    const { contextOpened, mode } = this.state;
    const { data } = this.props;

    return (
      <Panel id={this.props.id}>
        <HeaderHome toggleContext={this.toggleContext}
          select={this.select}
          contextOpened={contextOpened}
          mode={mode} />
        <Div className='all-product-page_wrap'>
          <PullToRefresh onRefresh={this.onRefresh}
            isFetching={this.state.fetching}>
            <div className='all-product-page_content'>
              {
                data.products.map(item => {
                  return <ProductCardSmall
                    key={item.id} formSticker='round' nameSticker='star' goTo='productCardPanel'
                    func={this.props.go} productId={item.id} product={item}
                  />
                })
              }
            </div>
          </PullToRefresh>
        </Div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    data: state.user
  }),
  null
)(HomePanel);
