const { REACT_APP_ENVIRONMENT } = process.env;

const settings = {
  development: {
    apiUrl: 'http://localhost:8001'
  },
  production: {
    apiUrl: 'https://login-page-api-s7xesiemfq-nw.a.run.app'
  }
};

export const ROOT_URL = settings[REACT_APP_ENVIRONMENT].apiUrl;