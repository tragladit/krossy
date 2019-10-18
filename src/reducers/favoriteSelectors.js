export const filterFavorite = (data) => {
  return Object.keys(data).reduce((res, k) => {
    if (data[k].top) {
      res.push(data[k])
    }
    return res
  }, [])
}


