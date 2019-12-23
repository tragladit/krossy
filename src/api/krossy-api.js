export default class ApiService {

  _apiBase = 'https://krosi.todozzle.com/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  loadSetting = async (id) => {
    const res = await this.getResource(`/settings/${id}`);
    return res;
  };

  saveSetting = async (id, body) => {
    const res = await fetch(`${this._apiBase}/settings/${id}`, {
      method: 'POST',
      body: body
    });
    return res;
  };

  getProducts = async (userId) => {
    const res = await this.getResource(`/shoes?userId=${userId}`);
    return res;
  };

  getModels = async  (goodId, userId) => {
    const res = await this.getResource(`/goods/${goodId}/models?userId=${userId}`);
    return res;
  };

  getOffers = async (goodId) => {
    const res = await this.getResource(`/models/${goodId}/offers`);
    return res;
  }

  getGameModels = async (userId) => {
    const res = await this.getResource(`/game/${userId}`);
    console.log('#krossy-api.ApiService.getGameModels#', res);
  }

  setGame = async (body) => {
    // const res = await fetch(`${this._apiBase}/game/like`, {
    //   method: 'POST',
    //   body: body
    // });
    console.log('#krossy-api.ApiService.setGame#', body);
  };

  setSubscribe = async (productId, body) => {
    try {
      const res = await fetch(`${this._apiBase}/goods/${productId}/subscribe`, {
        method: 'POST',
        body: body
      });
      if (res.ok) {
        return true
      }
      return false
    } catch (err) {
      console.log('#krossy-api.ApiService.setSubscribe#', err)
      return false
    }
  };
}
