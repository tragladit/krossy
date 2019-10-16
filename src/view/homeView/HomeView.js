import React from 'react';
import HomePanel from "../../panels/homePanel/HomePanel";
import ProductCardPanel from "../../panels/productCardPanel/ProductCardPanel";
import {ScreenSpinner, View} from "@vkontakte/vkui";
import {connect as reduxConnect} from "react-redux";
import { getData, isChangeBoolean } from "../../reducers/user";
import ApiService from "../../api/krossy-api";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'homePanel'
    }
  }

  Service = new ApiService();

  getProducts= () => {
    const {id} = this.props.data.userInfo;
    this.props.isLoad(true);
    this.Service.getProducts(id)
      .then(res => {
        if(res.ok) {
          this.props.products(res.result);
          this.props.isLoad(false);
        }
      })
  };

  componentDidMount() {
    this.getProducts()
  }

  go = (panel) => {
    this.setState({
      activePanel: panel
    })
  };

  render() {
    const {isLoadProducts} = this.props.data;
    return(
      isLoadProducts ? <ScreenSpinner /> :
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <HomePanel id='homePanel'
                   go={this.go}/>
        <ProductCardPanel id='productCardPanel'
                          go={this.go}/>
      </View>
    )
  }
}

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadProducts', bool)),
    products: data => dispatch(getData('products', data))
  })
)(HomeView);
