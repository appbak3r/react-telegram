export class GeoApiService {
  static getCountryCode() {
    return fetch("https://ip.nf/me.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.ip.country_code;
      });
  }
}
