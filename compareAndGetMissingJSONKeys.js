javascript:

/* MIT License
 * 
 * Copyright (c) 2022 gh0$t
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. */

function nestedLoop2(obj) {
    const res = {};
    var myKey = [];

    function recurse(obj, current) {

        for (const key in obj) {
            let value = obj[key];
            if (value && typeof value === 'object') {
                recurse(value, key);
            } else {
                res[key] = value;
                myKey.push(key);
            }
        }
    }
    recurse(obj);
    return myKey;
}

function flattenObject2(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject2(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

var flatObj1 = flattenObject2(x);
var flatObj2 = flattenObject2(y);
var flattenedJSONArray1 = nestedLoop2(flatObj1);
var flattenedJSONArray2 = nestedLoop2(flatObj2);
console.log('Missing Keys -> ', flattenedJSONArray2.filter((i) => {
    return flattenedJSONArray1.indexOf(i) === -1
}));
