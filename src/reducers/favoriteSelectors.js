export const filterFavorite = (data) => {
  return Object.keys(data).reduce((res, k) => {
    if (data[k].top) {
      res.push(data[k])
    }
    return res
  }, [])
}

export const filterLike = (keys, data) => keys.map(k => data[k])


