const test = require("ava")
const refreshRate = require(".")

test("main", async t => {
	t.is(typeof await refreshRate(), "number")
})
