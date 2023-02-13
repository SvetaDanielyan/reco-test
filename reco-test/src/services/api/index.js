import Axios from 'axios';
  // import * as localStorage from '../utils/index';
  // import localStorageKeys from 'utils/constants/localStorageKeys';
  import publicRoutes from 'utils/constants/routes';

  
  export default class ApiBase{
    static axiosInstance;
  
    baseApiUrl;
  
    constructor(baseApiUrl) {
      this.baseApiUrl = baseApiUrl;
    }
  
    static createAxiosInstance() {
      ApiBase.axiosInstance = Axios.create({
        baseURL: process.env.PUBLIC_API_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      ApiBase.addAuthInterceptor();
    }
  
    static addAuthInterceptor() {
      ApiBase.axiosInstance.interceptors.request.use(
        (config) => {
          const accessToken = ApiBase.getAccessTokenAsync();
          // eslint-disable-next-line no-param-reassign
          (config.headers).Authorization = accessToken;
          return config;
        },
        async (error) => {
          return Promise.reject(error);
        }
      );
  
      ApiBase.axiosInstance.interceptors.response.use(
        (config) => {
          return config;
        },
        async (error) => {
          if (
            error.response.status === 401 &&
            !publicRoutes.includes(window.location.pathname)
          ) {
            ApiBase.deleteAccessTokenAsync();
            window.location.href = '/login';
          }
  
          return Promise.reject(error);
        }
      );
    }
  
    static getAccessTokenAsync() {
      // let token = '';
  
      // if (typeof window !== 'undefined') {
      //   const info = localStorage.getItemFromLocalStorage(
      //     localStorageKeys.USER_INFO,
      //     true
      //   );
      //   if (info) token = info?.token;
      // }
  
      return `Bearer token`;   // in real case here need to be the `${}`
    }
  
    static deleteAccessTokenAsync() {
      // localStorage.removeItemFromLocalStorage(localStorageKeys.USER_INFO);
      console.log("in real case need to remove bearer token")   /// not implemented login 
    }
  
    static isError(response) {
      return 'statusCode' in response && 'errorMessage' in response;
    }
  
    static createError(e) {
      return {
        statusCode: e?.code || e?.response?.status,
        errorMessage: (e?.error || e?.response?.data?.error) ?? 'Server Error',
        meta: e?.meta || null,
      };
    }
  
    async getAllAsync(
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.get(`${url}`);
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  
    async getAsync(
      id,
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.get(`${url}/${id}`);
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  
    async postAsync(
      values,
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.post(`${url}`, values);
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  
    async putAllAsync(
      values,
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.put(`${url}`, values);
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  
    async putAsync(
      id,
      values,
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.put(`${url}/${id}`, values);
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  
    async deleteAsync(
      id,
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.delete(`${url}/${id}`);
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  
    async deleteAllAsync(
      values,
      url = this.baseApiUrl
    ) {
      try {
        const { data } = await ApiBase.axiosInstance.delete(`${url}`, {
          data: values,
        });
        return data;
      } catch (e) {
        return ApiBase.createError(e);
      }
    }
  }
  
  ApiBase.createAxiosInstance();
  