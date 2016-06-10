import 'whatwg-fetch';
import camelCaseObject from './camelCaseObject';

const methods = [
  'get',
  'head',
  'post',
  'put',
  'del',
  'options',
  'patch'
];

/**
 * This auth env var should only be set on animals
 */
const BASIC_AUTH = process.env.JS_BASIC_AUTH;

const headers = (process.env.NODE_ENV !== 'production' && BASIC_AUTH) ? { 'Authorization': 'Basic ' + BASIC_AUTH } : {};

export default class RequestFactory {

  constructor(opts) {

    this.opts = opts || {};

    this.headers = Object.assign({}, headers, opts.headers);

    methods.forEach(method => this[method] = this._setup(method));
  }

  _setup(method) {

    return (url, options = {}, callback) => {

      const opts = {
          headers: this.headers,
          ...options,
        method: method === 'del' ? 'DELETE' : method.toUpperCase()
      };

      let response;

      const request = fetch(this.opts.baseURI + url, opts)
        .then(res => {
        // set original response
        response = res;
      return res;
    })
    .then(res => {

      let body;

      if (!res.ok) {
        return res.json().then( err => {throw err;});
      }

      if (opts.headers['Content-Type'] !== 'application/json'
        && opts.headers['Accept'] !== 'application/json') {
        body = res.text();
      } else {
        try {
          body = res.json();
        } catch (err) {
          const message = 'Failed to parse JSON body: ' + err.message;
          if (callback) {
            return callback(message);
          }
        }

        return body;
      }})
    .then(body =>
      callback ? callback(null, response, camelCaseObject(body)) : camelCaseObject(body)
    )
    .catch(err => {
      if (!response || !response.statusText) {
        if (callback) return callback(err, response || null);
        throw err;
      }

      if (callback)
        return callback(err, response, response.statusText);
      throw err;
    });

    return request;

    }
  }
}
