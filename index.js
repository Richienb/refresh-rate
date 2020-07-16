const performanceNow = require("performance-now")
const requestAnimationFrame = require("raf")
const meanAverage = require("mean-average")

const itemDifferences = array => array.map((item, index) => item - [array[index - 1]]).slice(1)

const measureRefreshRate = ({ sampleCount }) => new Promise(resolve => {
	const times = [performanceNow()]

	const eachFrame = () => {
		times.push(performanceNow())

		if (times.length - 1 < sampleCount) {
			requestAnimationFrame(eachFrame)
		} else {
			resolve(Math.round(1000 / meanAverage(itemDifferences(times))))
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
