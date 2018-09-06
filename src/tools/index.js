let Tools = new Object();

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
 * 
 * @param  {any} errorNum [description]
 * @param  {number} number [description]
*/
Tools.getUndefinedToNumber = (errorNum, number) => {
	return typeof(errorNum) === 'undefined' || isNaN(errorNum) ? number : errorNum;
}

Tools.getValueDiffToAbsPecent = (val, diff) => {
	return Math.abs(val - diff) / 100;
}

// 针对字符串的切片
Tools.strChunk = (str, chunk) => {
	const res = [];
	const len = str.length;
	for (let i = 0; i < len; i += chunk) {
		res.push(str.slice(i, i + chunk));
	}
	return res;
};

Tools.getHourAndMinToFormart = (h, m) => {
	let hour = isNaN(h) ? '--' : Number(h);
	let min = isNaN(m) ? '--' : Number(m);

	hour = hour < 10 ? `0${hour}` : hour;
	min = min < 10 ? `0${min}` : min;

	return ` ${hour}:${min}`;
}

// 字符串
Tools.getValueToFullStr = val => {
	const res = val;

	if(isNaN(Number(res)) && typeof(res) === undefined) {
		return '--'
	};

	return Number(res) < 10 ? `0${res}` : res;
}

Tools.isValueInRange = (val, range) => {
	const checkVal = Tools.isNumber(val) ? val : -1;
	const checkRange = 
		Tools.isArray(range) 
			? range.length == 2
				? range 
					: [0, 0]
					 	: [0, 0];

	const flag = checkRange.filter((data, index) => {
		return index == 0 ? checkVal >= data : checkVal <= data 
	}).length == checkRange.length;

	return flag;
}

/**
 * accurately judging the type of the object
 * @param  {[arg]} Any [description]
*/
Tools.typeCheck = (obj) => {
	return Object.prototype.toString.call(obj).slice(8,-1)
};

Tools.isObject = (obj) => {
	return obj === Object(obj);
}

Tools.isArray = (obj) => {
	return Tools.typeCheck(obj) === 'Array';
}

Tools.isDate = (obj) => {
	return Tools.typeCheck(obj) === 'Date';
}

Tools.isNumber = (obj) => {
	return Tools.typeCheck(obj) === 'Number';
}

Tools.isRegExp = (obj) => {
	return Tools.typeCheck(obj) === 'RegExp';
}

Tools.isBoolean = (obj) => {
	return Tools.typeCheck(obj) === 'Boolean';
}

/**
 * use css in console.log
 * @param  {[value]} Any [description]
 * @param  {[arg]} String [description]
*/
Tools.consoleLog = (value, style) => {
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