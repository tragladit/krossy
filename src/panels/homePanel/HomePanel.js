import React from 'react';
import { Panel, Div, PullToRefresh } from "@vkontakte/vkui";
import ProductCardSmall from '../../components/productCardSmall/ProductCardSmall';
import './HomePanel.css';
import HeaderHome from "../../components/headerHome/HeaderHome";
import { connect as reduxConnect } from "react-redux";
import ApiService from "../../api/krossy-api";
import {
  filterModeProducts, getSettingsSizes, getNormalizeProducts
} from '../../reducers/selectors';
import { isChangeBoolean, getData } from '../../reducers/user';
import InfoCard from '../../components/infoCard/InfoCard';

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
      debugger
      const { id } = this.props.data.userInfo;
      this.setState({ fetching: true });
      this.Service.getProducts(id)
        .then(res => {
          if (res.ok) {
            const normilizeProducts = getNormalizeProducts(res.result)
            this.props.products(normilizeProducts);
            this.setState({ fetching: false })
          }
        })
    }
  }

  checkSettings = async () => {
    const { userInfo, gender, sizeChart, isSaveSetting } = this.props.data
    if (!isSaveSetting) {
      try {
        const sizes = getSettingsSizes(sizeChart)
        const form = new FormData()
        form.append("gender", gender)
        form.append("size", sizes)
        form.append("bdate", userInfo.bdate)
        const saveSettings = await this.Service.saveSetting(userInfo.id, form)
        if (saveSettings.ok) {
          this.props.isSave(true)
          this.props.isLoad(true)
          const getProducts = await this.Service.getProducts(userInfo.id)
          if (getProducts.ok) {
            const normilizeProducts = getNormalizeProducts(getProducts.result)
            this.props.products(normilizeProducts)
            this.props.isLoad(false)
          }
        }
      } catch (err) {
        console.log('#HomePanel.checkSettings#', err)
      }
    }
  }

  componentDidMount() {
    this.checkSettings()
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

    let products = data.products

    if (mode !== 'all') {
      products = filterModeProducts(mode, products)
    }

    return (
      <Panel id={this.props.id}>
        <HeaderHome
          toggleContext={this.toggleContext} select={this.select}
          contextOpened={contextOpened} mode={mode}
        />
        {
          Object.keys(products).length ?
            <Div className='all-product-page_wrap'>
              <PullToRefresh onRefresh={this.onRefresh}
                isFetching={this.state.fetching}>
                <div className='all-product-page_content'>
                  {
                    Object.keys(products).map(k => {
                      return <ProductCardSmall
                        key={k} formSticker='round' nameSticker='star' goTo='productCardPanel'
                        func={this.props.go} prodId={k} product={products[k]}
                      />
                    })
                  }
                </div>
              </PullToRefresh>
            </Div> : 
            <InfoCard text='Ничего не найдено' />
        }
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isSave: bool => dispatch(isChangeBoolean('isSaveSetting', bool)),
    isLoad: bool => dispatch(isChangeBoolean('isLoadProducts', bool)),
    products: data => dispatch(getData('products', data))
  })
)(HomePanel);
