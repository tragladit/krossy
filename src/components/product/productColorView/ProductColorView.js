import React from 'react';
import './ProductColorView.css';

const clrs = {
  "97": {
    "черный": "https://www.basketshop.ru/files/catalog/14600/vee3blk%20(2).JPG",
    "белый": "https://www.basketshop.ru/files/catalog/14600/vee3blk%20(2).JPG"
  },
  "134": {
    "белый": "https://www.basketshop.ru/files/catalog/33631/VD3HW00%20(2).JPG"
  },
  "137": {
    "skull grey/cyan/blk/grey": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV8644_01_standard.jpg?sw=440&sfrm=jpg",
    "white/cobalt/pink/emerald": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV8647_01_standard.jpg?sw=440&sfrm=jpg",
    "chalk/sand stone/sun/navy": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV8645_01_standard.jpg?sw=440&sfrm=jpg",
    "black/blue/shadow/alloy": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV8646_01_standard.jpg?sw=440&sfrm=jpg"
  },
  "268": {
    "белый": "https://www.basketshop.ru/files/catalog/35563/DV3900(8).JPG",
    "cobalt/white/gold/black": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV3900_01_standard.jpg?sw=440&sfrm=jpg",
    "white/stellar pink/gold": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV4276_01_standard.jpg?sw=440&sfrm=jpg"
  },
  "324": {
    "синий": "https://images.puma.net/images/369396/01/sv01/fnd/RUS/w/1000/h/1000/bg/255,255,255",
    "голубой": "https://www.basketshop.ru/files/catalog/36035/36939601%20(7).JPG"
  },
  "345": {
    "чёрный": "https://www.basketshop.ru/files/catalog/35589/VA38ENMR2(3).JPG",
    "коричневый": "https://www.basketshop.ru/files/catalog/35719/VA38ENVL0M%20(4).JPG",
    "камуфляж": "https://www.basketshop.ru/files/catalog/35718/VA38ENVKYM%20(3).JPG",
    "серый": "https://www.basketshop.ru/files/catalog/36650/VA38ENV7JM%20(3).JPG"
  },
  "395": {
    "зелёный": "https://www.basketshop.ru/files/catalog/35863/162052(8).JPG",
    "камуфляж": "https://www.basketshop.ru/files/catalog/35925/163406(7).JPG",
    "чёрный": "https://www.basketshop.ru/files/catalog/35862/162050(8).JPG",
    "синий": "https://www.basketshop.ru/files/catalog/36422/165085(11).JPG"
  },
  "411": {
    "черный": "https://images.puma.net/images/191095/01/sv01/fnd/RUS/w/1000/h/1000/bg/255,255,255"
  },
  "456": {
    "бежевый": "https://www.basketshop.ru/files/catalog/36116/BV1357-200(12).JPG"
  },
  "490": {
    "красный": "https://www.basketshop.ru/files/catalog/35842/G27922(3).JPG"
  },
  "576": {
    "чёрный": "https://www.basketshop.ru/files/catalog/36126/BV7725-001(8).JPG",
    "бежевый": "https://www.basketshop.ru/files/catalog/36125/BV7725-100(2).JPG",
    "белый": "https://www.basketshop.ru/files/catalog/36125/BV7725-100(2).JPG",
    "голубой": "https://www.basketshop.ru/files/catalog/36522/BV7725-400%20(3).JPG",
    "серый": "https://www.basketshop.ru/files/catalog/36523/BV7725-002%20(3).JPG"
  },
  "582": {
    "жёлтый": "https://www.basketshop.ru/files/catalog/36110/EE7228(9).JPG",
    "золотой": "http://production-emea2-adidasgroup.demandware.net/dw/image/v2/BDDV_PRD/on/demandware.static/Sites-adidas-RU-Site/Sites-adidas-products/ru_RU/v1569364730118/zoom/EE7228_00_plp_standard.jpg",
    "белый": "http://production-emea2-adidasgroup.demandware.net/dw/image/v2/BDDV_PRD/on/demandware.static/Sites-adidas-RU-Site/Sites-adidas-products/ru_RU/v1569364730118/zoom/EE7238_00_plp_standard.jpg",
    "мультиколор": "https://www.basketshop.ru/files/catalog/36122/EF1427(9).JPG",
    "серый": "https://www.basketshop.ru/files/catalog/36276/EE7240(2)1.jpg",
    "черный": "http://production-emea2-adidasgroup.demandware.net/dw/image/v2/BDDV_PRD/on/demandware.static/Sites-adidas-RU-Site/Sites-adidas-products/ru_RU/v1569364730118/zoom/EE7239_00_plp_standard.jpg"
  },
  "593": {
    "белый": "https://www.basketshop.ru/files/catalog/36112/EE7009(2).JPG",
    "чёрный": "https://www.basketshop.ru/files/catalog/36115/EE5696(9).JPG",
    "оранжевый": "https://www.basketshop.ru/files/catalog/36114/EE6465(3).JPG",
    "зелёный": "https://www.basketshop.ru/files/catalog/36673/EE6461(11).JPG",
    "красный": "http://production-emea2-adidasgroup.demandware.net/dw/image/v2/BDDV_PRD/on/demandware.static/Sites-adidas-RU-Site/Sites-adidas-products/ru_RU/v1569364730118/zoom/EH0824_00_plp_standard.jpg"
  },
  "595": {
    "малиновый": "https://www.basketshop.ru/files/catalog/33502/159815(3).JPG"
  },
  "615": {
    "мультиколор": "https://www.basketshop.ru/files/catalog/35497/VA38F7VMF%20(2).JPG"
  },
  "618": {
    "чёрный": "https://www.basketshop.ru/files/catalog/35590/VA38FRVP6M(3)1.jpg",
    "белый": "https://www.basketshop.ru/files/catalog/35660/VA38FRVP5M%20(4).JPG",
    "голубой": "https://www.basketshop.ru/files/catalog/35660/VA38FRVP5M%20(4).JPG",
    "оранжевый": "https://www.basketshop.ru/files/catalog/35663/VA38FRVOPM(2).JPG"
  },
  "676": {
    "мультиколор": "https://www.basketshop.ru/files/catalog/36223/AT5405-001(3).JPG"
  },
  "697": {
    "белый": "https://www.basketshop.ru/files/catalog/36224/CK1195-101%20(3).JPG"
  },
  "747": {
    "lime/white/neon red/black": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/CN6953_01_standard.jpg?sw=440&sfrm=jpg",
    "black/cyan/white/red": "https://production-reebok-adidasgroup.demandware.net/dw/image/v2/AAJP_PRD/on/demandware.static/Sites-Reebok-RU-Site/Sites-reebok-products/ru_RU/v1569386294611/zoom/DV6793_01_standard.jpg?sw=440&sfrm=jpg"
  },
  "758": {
    "чёрный": "https://www.basketshop.ru/files/catalog/36127/CJ9218-001(8).JPG"
  }
}

const colors = {
  "белый": "white", "черный": "black", "синий": "blue", "бежевый": "beige", "бирюзовый": "turquoise",
  "бордовый": "burgundy", "голубой": "lightblue", "желтый": "yellow", "зеленый": "green",
  "золотой": "gold", "коралловый": "coral", "коричневый": "brown", "красный": "red",
  "оранжевый": "orange", "розовый": "pink", "серый": "grey", "разноцветный": "multi"
}

const style = { width: '40px', height: '40px' };
const styleSelected = { width: '52px', height: '52px' };

const ProductColorView = ({ color, curColor, setData, pid }) => {

  // const selectedColor = colors[color] ? colors[color] : "multi";
  const img = clrs[pid][color]

  return (
    <div
      data-color={color}  //className={`product-color-view bg_${selectedColor}`}
      onClick={() => setData(color)}
      // style={color === curColor ? styleSelected : style}
    >
      <img
        src={img}
        style={color === curColor ? styleSelected : style}
      />
    </div>
  )
};

export default ProductColorView;