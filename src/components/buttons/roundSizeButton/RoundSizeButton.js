import React from 'react';
import './RoundSizeButton.css'
import ApiService from "../../../api/krossy-api";

// GET  /settings/{id}     получение настроек юзера
// POST /settings/{id}  схранение настроек
// GET  /shops   список магазов
// GET /shoes  получение пачки кроссовок
// GET /goods/{id}  получение инфы о конкретных кроссах
// GET /goods/{id}/models   получение моделей конкретных кроссовок
// GET /models/{id}/offers  получение предложений от магазов по конкретной модели

const myId = 169054092
const goodId = 97
const Service = new ApiService();

const RoundSizeButton = ({func, goTo, content, icon, backgroundColor, iconSvg}) => {

  let divStyle = {
    backgroundColor: backgroundColor
  };

  let pic;

  if (icon) {
    pic = <img alt='logo' className='round-size-btn_image' src={icon}/>
  }
  else if (iconSvg) {
    pic = <React.Fragment>{iconSvg}</React.Fragment>
  }
  else {
    pic = content
  }

  // const onPress = (e) => {
  //   const temp = e.currentTarget.dataset.to;
  //   func(temp);
  // };

  const onPress = async () => {
    const clrs = {}
    try {
      const data = await Service.getProducts(myId)
      if (data.ok) {
        for (let d of data.result) {
          const nextData = await Service.getModels(d.id, myId)
          if (nextData.ok) {
            const rdc = nextData.result.reduce((res, el) => {
              if (!(el.color in res)) {
                res[el.color] = el.pictures[0]
                return res
              }
              return res
            }, {})
            clrs[d.id] = rdc
            // const oo = {}
            // oo[d.id] = rdc
            // console.log(oo)
            // debugger
          } else {
            return 'Error nextData'
          }
        } 
        return clrs
      } else {
        return 'Error data'
      }
    } catch (err) {
      console.log('onPress', err) 
    }
    
    // const data1 = await Service.getModels(268, myId)
    // const data2 = await Service.getOffers(3899)  
    // console.log(data1) 
    // console.log(data)
  };

  const pint = (key, value) => parseInt(key)


  const getD = async () => {
    const dd = await onPress()
    // const ddd = dd.reduce((result, el) => {
    //   if (!(el.color in result)) {
    //     result[el.color] = { params: [], pictures: [] }



    // const colors = [ ...new Set(ddd)]
    
    console.log(JSON.stringify(dd))
    

  }

  return (
    <div className='round-size-btn'
         style={divStyle}
         onClick={getD}
         data-to={goTo}>
      {pic}
    </div>
  )
};

export default RoundSizeButton;
