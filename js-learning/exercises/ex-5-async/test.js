const assert = require('assert');

const counter = require('./index');
const nums = [];
const delays = [];

const oldSetTimeout = global.setTimeout;
const oldSetInterval = global.setInterval;

global.setTimeout = function (fn, delay) {
    delays.push(delay);
    oldSetTimeout(fn, delay);
};

global.setInterval = function (fn, delay) {
    delays.push(delay);
    oldSetInterval(fn, delay);
};

counter({
    start: 1,
    end: 10,
    delay: 100,
    onIncrement: (num) => {
        nums.push(num);
    },
    callback: () => {
        assert.equal(nums.length, 10);
        assert.equal(delays.filter((d) => d === 100).length, delays.length);
        console.log('tests ok');
    }
});
