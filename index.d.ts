declare namespace refreshRate {
	export interface Options {
		/**
		The amount of frame samples to take before computing the refresh rate.

		To compute within ±2 frames of error, 50 samples are sufficient. However, if you can afford to wait a few more seconds, 120-200 samples can be taken for a more accurate reading.
		*/
		sampleCount?: number
	}
}

/**
Get the monitor refresh rate.
@options The options.
@example
```
const refreshRate = require("refresh-rate");

(async () => {
	console.log(await refreshRate());
	//=> 60

	console.log(await refreshRate({ sampleCount: 120 }));
	//=> 60
})();
```
*/
declare function refreshRate(options?: refreshRate.Options): Promise<number>

export = refreshRate
