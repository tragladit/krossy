export default class ApiService {

  _apiBase = 'https://krosi.todozzle.com/api';

  getResource = async (url) => {
    try {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    } catch (err) {
      console.log('#api.krossy-api.ApiService.getResource#', err)
      return false
    }
  };

  loadSetting = async (id) => {
    try {
      return await this.getResource(`/settings/${id}`);
    } catch (err) {
      console.log('#api.krossy-api.ApiService.loadSetting#', err)
      return false
    }
  };

  saveSetting = async (id, body) => {
    try {
      return await fetch(`${this._apiBase}/settings/${id}`, {
        method: 'POST',
        body: body
      });
    } catch (err) {
      console.log('#api.krossy-api.ApiService.saveSetting#', err)
      return false
    }
  };

  getProducts = async (userId) => {
    try {
      return await this.getResource(`/shoes?userId=${userId}`);
    } catch (err) {
      console.log('#api.krossy-api.ApiService.getProducts#', err)
      return false
    }
  };

  getModels = async  (goodId, userId) => {
    try {
      return await this.getResource(`/goods/${goodId}/models?userId=${userId}`);
    } catch (err) {
      console.log('#api.krossy-api.ApiService.getModels#', err)
      return false
    }
  };

  getOffers = async (goodId) => {
    try {
      return await this.getResource(`/models/${goodId}/offers`);
    } catch (err) {
      console.log('#api.krossy-api.ApiService.getOffers#', err)
      return false
    }
  }

  getGameModel = async (userId) => {
    try {
      return await this.getResource(`/game/${userId}`);
    } catch (err) {
      console.log('#api.krossy-api.ApiService.getGameModel#', err)
      return false
    }
  }

  setGame = async (body) => {
    try {
      const res = await fetch(`${this._apiBase}/game/like`, {
        method: 'POST',
        body: body
      });
      if (!res) {
        console.log('#api.krossy-api.ApiService.setGame# RESPONCE ERROR');
      }
    } catch (err) {
      console.log('#api.krossy-api.ApiService.setGame#', err);
    }
  };

  setSubscribe = async (productId, body) => {
    try {
      return await fetch(`${this._apiBase}/goods/${productId}/subscribe`, {
        method: 'POST',
        body: body
      });
    } catch (err) {
      console.log('#api.krossy-api.ApiService.setSubscribe#', err)
      return false
    }
  };
}
