export const parseData = (data, metod, val) => {
  if (metod === 'ADD') {
    data.push(val)
    return data
  } else if (metod === 'DEL') {
    return data.filter(el => el !== val)
  } else {
    console.log('#searchSelectors.parseData# Wrong metod')
  }
}

export const toArray = (data) => Object.keys(data).map(k => data[k])

export const filterBrands = (data) => Object.keys(data).filter(el => data[el])

export const normalizeProductsByBrand = (data) => {
  return data.reduce((res, el) => {
    const name = el.vendor.toUpperCase()
    if (!(name in res)) {
      res[name] = []
    }
    res[name].push(el)
    return res
  }, {})
}

export const filterProductsByBrand = (brands, products) => {
  return brands.reduce((res, el) => {
    const name = el.toUpperCase()
    res.push(...products[name])
    return res
  }, [])
}

export const filterDiscount = (data) => data.filter(el => el.discount)

export const filterPrice = (data, start, end) => data.filter(el => el.price >= start && el.price <= end)

export const sortPrice = (metod, data) => (
  data.sort((a, b) => metod === 'ASC' ? a.price - b.price : b.price - a.price)
)


