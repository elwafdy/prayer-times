function dtr(d) { return (d * Math.PI) / 180.0; };
function rtd(r) { return (r * 180.0) / Math.PI; };

function sin(d) { return Math.sin(dtr(d)); };
function cos(d) { return Math.cos(dtr(d)); };
function tan(d) { return Math.tan(dtr(d)); };

function arcsin(d) { return rtd(Math.asin(d)); };
function arccos(d) { return rtd(Math.acos(d)); };
function arctan(d) { return rtd(Math.atan(d)); };

function arccot(x) { return rtd(Math.atan(1/x)); };
function arctan2(y, x) { return rtd(Math.atan2(y, x)); };

function fixAngle(a) { return fix(a, 360); };
function fixHour(a) { return fix(a, 24 ); };

function fix(a, b) { 
  a = a - b* (Math.floor(a/ b));
	return (a < 0) ? a+ b : a;
};

module.exports.dtr      = dtr;
module.exports.rtd      = rtd;
module.exports.sin      = sin;
module.exports.cos      = cos;
module.exports.tan      = tan;
module.exports.arcsin   = arcsin;
module.exports.arccos   = arccos;
module.exports.arctan   = arctan;
module.exports.arccot   = arccot;
module.exports.arctan2  = arctan2;
module.exports.fixAngle = fixAngle;
module.exports.fixHour  = fixHour;
module.exports.fix      = fix;
