```
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var arr1 = s.split('');
    var arr2 = [];
    var max = 0;
    
    // var arr1 = ["a", "b", "c", "a", "b", "c", "b", "b"];
    // var arr1 = ["c", "k", "i", "l", "b", "k", "d"];
    // var arr1 = ["w", "b", "f"];
    // var arr1 = ["p", "w", "w", "k", "e", "w"];
    // var arr1 = ["c", "d", "d"];
    // var arr1 = ["d", "v", "d", "f"];
    // var arr1 = ["b", "p", "f", "b", "h", "m", "i", "p", "x"];
    // var arr1 = ["u", "m", "v", "e", "j", "c", "u", "u", "k"];
    
    for (var i = 0; i < arr1.length; i++) {
        var num = arr2.indexOf(arr1[i]);
        if (arr1[i] == arr1[i+1]) {
            if (arr2.indexOf(arr1[i]) < 0) {
                arr2.push(arr1[i]);
            }
            max = (arr2.length > max) ? arr2.length : max;
            arr2.splice(0, num + 1);
        } else if(arr2.indexOf(arr1[i]) < 0) {
            arr2.push(arr1[i]);
            max = (arr2.length > max) ? arr2.length : max;
        } else {
            arr2.push(arr1[i]);
            arr2.splice(0, num + 1);
            max = (arr2.length > max) ? arr2.length : max;
        }
    }

    return max;
};
```

