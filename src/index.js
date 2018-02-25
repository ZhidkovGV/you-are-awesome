// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {return {property: 'value'}};
const createNotEnumerableProperty = (a) => {
    Object.defineProperty(Object.prototype, a, {enumerable: false, value: 'value'})
    return a
};
const createProtoMagicObject = () => {
    return Function
};
let counter = 0;
const incrementor = () => {
    counter++
    return incrementor
};
incrementor.__proto__.valueOf = function () {
    return counter;
}
coun = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{coun ++; resolve(coun)}, 0);
    })
};
let count = 0
const createIncrementer = () => {
    return {
        next : () => {
            return {value: ++count}
        },
        [Symbol.iterator]: function* () {
            count++
            yield count;
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(param)
        },1200)
    })
};
const getDeepPropertiesCount = (o) => {
    const ok = Object.keys(o)
    return ok.length + (ok.length ? ok.reduce((acc,cv) => {
        return acc + getDeepPropertiesCount(o[cv]);
        },0) : 0);
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {
};
const sortByProto = (arr) => {
    const findProtoCount = (o) => {
        let count = 0;
        let cur = o;
        while (cur.__proto__) {
            count++;
            cur = cur.__proto__
        }
        return count;
    }
    return arr.sort((a,b) => findProtoCount(a) - findProtoCount(b))
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;