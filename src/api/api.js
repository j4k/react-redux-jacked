import RequestFactory from '../utils/requestFactory';

const API_URL = process.env.JS_API_URL;
const API_KEY = process.env.JS_API_KEY;

export default class Client {
  constructor(props) {
    this.api = new RequestFactory({
      baseURI: API_URL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jp-api-key': API_KEY
      },
      credentials: 'same-origin'
    });
  }
}
