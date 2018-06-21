let Tools;

/**
 * calculate the second array is added by numbers which are in the first array
 * @param  {[arr]} Array [description]
 * @param  {[con]} Array [description]
*/
Tools.getContent = (arr, con) => {
	let result = [], i = 0, len = arr.length;
	for(; i< len; i++) {
		let v = arr[i], j = 0, rLen = result.length;
		result.push({vl: v, ar: [v]});
		if(rLen) {
			for(; j< rLen; j++) {
				result.push({vl: v+result[j].vl, ar: result[j].ar.concat(v)});
			}
		}
	}
	if(i === len) {
		return result.filter(x => x.vl == con);
	}
}

/**
 * accurately judging the type of the object
 * @param  {[arg]} Any [description]
*/
Tools.typeCheck = (arg) => {
	return Object.prototype.toString.call(arg).slice(8,-1)
};

// Taken from Underscore.js
Tools.isObject = (obj) => {
	return obj === Object(obj);
}

Tools.isArray = (obj) => {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

Tools.isDate = (obj) => {
	return Object.prototype.toString.call(obj) === '[object Date]';
}

Tools.isRegExp = (obj) => {
	return Object.prototype.toString.call(obj) === '[object RegExp]';
}

Tools.isBoolean = (obj) => {
	return Object.prototype.toString.call(obj) === '[object Boolean]';
}

/**
 * use css in console.log
 * @param  {[value]} Any [description]
 * @param  {[arg]} String [description]
*/
Tools.consoleLog = (value,style) => {
  let consoleStyle = new Object();
  const defaultStyle = "text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:24px";
  
  consoleStyle = defaultStyle;
  
  if(Tools.typeCheck(style) == 'String') {
    consoleStyle = style.length == 0 ? defaultStyle : style;
  }
  
  return console.log(
    "%c Console: %s",
    consoleStyle,
    value
  )
};

export default Tools;