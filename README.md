# refresh-rate [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/refresh-rate/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/refresh-rate)

Get the monitor refresh rate.

[![NPM Badge](https://nodei.co/npm/refresh-rate.png)](https://npmjs.com/package/refresh-rate)

## Install

```sh
npm install refresh-rate
```

## Usage

```js
const refreshRate = require("refresh-rate");

(async () => {
	console.log(await refreshRate());
	//=> 60

	console.log(await refreshRate({ sampleCount: 120 }));
	//=> 60
})();
```

## API

### refreshRate(options?)

#### options

Type: `object`

##### sampleCount

Type: `number`\
Default: `50`

The amount of frame samples to take before computing the refresh rate.

To compute within ±2 frames of error, 50 samples are sufficient. However, if you can afford to wait a few more seconds, 120-200 samples can be taken for a more accurate reading.
