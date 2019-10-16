export const getNormalizeData = (data, id) => {
  let color
  const nmzData = data.reduce((result, el) => {
    if (!(el.color in result.models)) {
      result.models[el.color] = { params: [], pictures: [] }
    }
    if (el.id === id) {
      color = el.color
    }
    result.models[el.color].params.push({ id: el.id, size: el.size })
    result.models[el.color].pictures = el.pictures
    return result
  }, { models: {}, current: {} })
  for (let k of Object.keys(nmzData.models)) {
    nmzData.models[k].params.sort((a, b) => a.size - b.size)
  }
  nmzData.current = { ...nmzData.models[color].params[0], color: color }
  return nmzData
};

export const getCurrentProduct = (products, id) => {
  const product = products.find(el => el.id === id);
  return product;
};

export const sortMinPrice = (offers) => {
  const sortPrice = offers.sort((a, b) => a.price - b.price);
  return sortPrice
};


// discount: 0
// gender: "unisex"
// id: 97
// limited: false
// model: "Authentic"
// name: "Authentic"
// oldPrice: 0
// pictureModelId: 543
// pictures: []
// price: 4990
// shops: 1
// sizes: [44, 43.5, 43]
// top: false
// trend: false
// vendor: "Vans"

// export const getSortSizes = (data) => data.sort((a, b) => a.size - b.size)

// export const getModelById = (id, models) => {
//   return models.find(el => el.id === id)
// };

// export const findCurrentModel = (img, dataModels) => {
//   for (let k of Object.keys(dataModels)) {
//     let checkColor = dataModels[k].pictures.find(el => el === img)
//     if (checkColor) {
//       const params = dataModels[k].params[0] 
//       return { id: params.id, color: k, size: params.size }
//     } 
//   }
//   return false
// }


// export const filterModelInit = (models, color, size) => {
//   const filteredColor = models.filter(i => i.color === color);
//   const filteredSize = filteredColor.filter(i => i.size === size);
//   return filteredSize[0];
// };


// export const getModel = (models, color) => {
//   let sizes = [];
//   const oneColor = models.filter(i => i.color === color);
//   oneColor.forEach(i => sizes.push(i.size));
//   sizes = [...new Set(sizes)].filter(n => n);
//   const product = {
//     sizes: sizes,
//     pic: oneColor[0].pictures
//   };
//   return product
// };


// 0: {id: 210, size: 41.5, color: "белый", goodId: 97, pictures: Array(5)}
// 1: {id: 213, size: 41, color: "белый", goodId: 97, pictures: Array(5)}
// 2: {id: 217, size: 41, color: "синий", goodId: 97, pictures: Array(5)}
// 3: {id: 222, size: 41.5, color: "черный", goodId: 97, pictures: Array(5)}


//    {id: 97, name: "Authentic", vendor: "Vans", gender: "unisex", model: "Authentic", …}
// 1: {id: 137, name: "Daytona DMX", vendor: "Reebok", gender: "women", model: "Daytona DMX", …}
// 2: {id: 238, name: "InstaPump Fury OG", vendor: "Reebok", gender: "unisex", model: "InstaPump Fury OG", …}
// 3: {id: 268, name: "Aztrek", vendor: "Reebok", gender: "unisex", model: "Aztrek", …}
// 4: {id: 274, name: "3D Opus 98", vendor: "Reebok", gender: "unisex", model: "3D Opus 98", …}
// 5: {id: 324, name: "Suede DIAMOND SUPPLY", vendor: "PUMA", gender: "unisex", model: "Suede DIAMOND SUPPLY", …}
// 6: {id: 345, name: "Authentic 44 DX", vendor: "Vans", gender: "unisex", model: "Authentic 44 DX", …}
// 7: {id: 395, name: "Chuck 70 Hi", vendor: "Converse", gender: "unisex", model: "Chuck 70 Hi", …}
// 8: {id: 407, name: "Zoom Evidence III", vendor: "Nike", gender: "unisex", model: "Zoom Evidence III", …}
// 9: {id: 411, name: "Mega NRGY Heather Knit", vendor: "PUMA", gender: "unisex", model: "Mega NRGY Heather Knit", …}
// 10: {id: 440, name: "Zoku Runner ULTK Multi", vendor: "Reebok", gender: "unisex", model: "Zoku Runner ULTK Multi", …}
// 11: {id: 490, name: "Temper Run", vendor: "adidas", gender: "unisex", model: "Temper Run", …}
// 12: {id: 524, name: "Legacy OG", vendor: "DC SHOES", gender: "women", model: "Legacy OG", …}
// 13: {id: 576, name: "DBreak SP", vendor: "Nike", gender: "unisex", model: "DBreak SP", …}
// 14: {id: 582, name: "Yung-96 Chasm", vendor: "adidas", gender: "unisex", model: "Yung-96 Chasm", …}
// 15: {id: 593, name: "Ozweego", vendor: "adidas", gender: "unisex", model: "Ozweego", …}
// 16: {id: 615, name: "Classic Slip-On", vendor: "Vans", gender: "unisex", model: "Classic Slip-On", …}
// 17: {id: 643, name: "evoKNIT FTB II IT", vendor: "PUMA", gender: "unisex", model: "evoKNIT FTB II IT", …}
// 18: {id: 662, name: "Bold Ni", vendor: "Vans", gender: "women", model: "Bold Ni", …}
// 19: {id: 671, name: "Comfycush Slip", vendor: "Vans", gender: "unisex", model: "Comfycush Slip", …}