const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

const ableTags = [mapTag, setTag, arrayTag, objectTag, boolTag, dateTag, errorTag, numberTag, regexpTag, stringTag, symbolTag];

function deepclone(target, map = new WeakMap()) {
  if (!isObject(target)) return target;
  let cloneObject;
  
  const targetType = getType(target);
  if (deepTag.includes(targetType)) {
    cloneObject = getInit(target);
  } else {
    return cloneOtherType(target, type);
  }
  
  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, cloneObject);
  
  if (targetType === mapTag) {
    target.forEach((value, key) => {
      cloneObject.set(key, deepclone(value, map))
    });
    return cloneObject;
  }
  
  if (targetType === setTag) {
    target.forEach( value => cloneObject.set(deepclone(value, map)))
    return cloneObject;
  }
  
  for (let key in target) {
    cloneObject[key] = deepclone(target[key], map);
  }
  return cloneObject;
}


function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
  return Object.prototype.toString.call(target)
}

function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    case funcTag:
      return cloneFunction(targe);
    default:
      return null;
  }
}

function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}

function cloneReg(target) {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
}

function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}

