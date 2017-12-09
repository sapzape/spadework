[shovel coding #7 leetcode - Reverse Integer]
> 원문 링크 : https://leetcode.com/problems/reverse-integer/description/
## Description
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
```
Input: 123
Output:  321
```
Example 2:
```
Input: -123
Output: -321
```
Example 3:
```
Input: 120
Output: 21
```
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## Solution
```
var reverse = function(x) {
    x = x + '';
    var aNum = x.split('');
    var iLength = aNum.length;
    var iReturn = 0;
    var aResult = [];
    
    for (var i = 0, j = iLength - 1; j >= 0; j--) {
        aResult[i++] = aNum[j];
    }
    
    var iNegative = aResult.indexOf('-');
    
    if (iNegative > 0) {
        aResult.splice(iNegative, 1);
        iReturn = aResult.join(''); 
        iReturn *= -1;
    } else {
        iReturn =  aResult.join('');
        iReturn *= 1;
    }

    if (iReturn > 2147483647 || iReturn < -2147483648) return 0;
    
    return iReturn;
};
```

## Reference
### Other Solution

```
    public int reverse(int x) {
        boolean sign = false;
        if (x < 0) {
            sign = true;
            x = -x;
        }
        int ret = 0;
        while (x > 0) {
            int tmp = x % 10;
            ret = ret * 10 + tmp;
            x /= 10;
        }
        if (sign)
            return -ret;
        else
            return ret;
    }
```


## End

