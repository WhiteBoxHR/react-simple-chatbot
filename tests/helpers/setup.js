/* eslint-disable */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const dom = new JSDOM('', { url: 'http://localhost' });
const exposedProperties = ['window', 'navigator', 'document'];
const storage = {};

global.document = dom.window.document;
global.window = dom.window;
global.localStorage = {
  getItem(key) {
    return storage[key];
  },
  setItem(key, item) {
    storage[key] = item;
  },
};
Object.keys(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window[property];
  }
});

Object.defineProperty(global, 'navigator', {
  value: { userAgent: 'node.js' },
  writable: true,
});
