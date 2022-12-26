import axios from 'axios';

export default {
  devServer: {
    port: 3000,
    proxy: 'http://localhost:8080/',
    https: true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
      resolve: {
        symlinks: false
      }
    }
  }
}

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  },
});
