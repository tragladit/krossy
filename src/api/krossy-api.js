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

}
