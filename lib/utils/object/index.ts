import get = require("./get");
import set = require("./set");
import deleteFunc = require("./delete");
import pick = require("./pick");
import keys = require("./keys");
import entries = require("./entries");
import equals = require("./equals");

export = {
	get,
	set,
	"delete": deleteFunc,
	pick,
	keys,
	entries,
	equals
};
