const performanceNow = require("performance-now")
const requestAnimationFrame = require("raf")
const meanAverage = require("mean-average")

const measureRefreshRate = ({ sampleCount }) => new Promise(resolve => {
	const times = [performanceNow()]

	const eachFrame = () => {
		times.push(performanceNow())

		if (times.length - 1 < sampleCount) {
			requestAnimationFrame(eachFrame)
		} else {
			const averageTimeDifference = meanAverage(times.map((time, index) => time - times[index - 1]).slice(1))
			resolve(Math.round(1000 / averageTimeDifference))
		}
	}

	requestAnimationFrame(eachFrame)
})

module.exports = async options => {
	options = {
		sampleCount: 50,
		...options
	}

	if (!Number.isInteger(options.sampleCount) || options.sampleCount < 1) {
		throw new TypeError(`${options.sampleCount} is not a positive integer`)
	}

	return measureRefreshRate(options)
}
