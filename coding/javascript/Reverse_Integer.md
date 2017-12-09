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
하드코딩... 이번 문제는 나름 쉬워서 손코딩으로 문제 없었다.
받아온 숫자를 배열로 쪼개 뒤에서부터 저장하여 Integer 형변환을 했다.
그리고, javascrtip에서 overflows, underflows가 문제에서 제시하는 범위와 다른거 같아서 하드하게 넣었다.
물론 그냥 고민 없이 바로 작성했다지만, 다른 사람들의 솔루션을 보니... 수학적 센스가 없는듯...
  

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
저렇게 인자로 받아온 숫자를 깔끔하게 reverse 할 수 있다니...
오늘도 배운다.

## End
어려운 문제로는(Easy가 아니면 다 어려움... ㅋㅋ) 손코딩하기가 힘들어서, 점차 난이도를 올리기로하고
지금은 손코딩과 알고리즘 문제에 친숙해지는 것이 좋겠다는 판단을 하게 되었다.
앞으로는 결과를 내는 것에서 끝내지 말고, 결과를 낸다면 리펙토링까지 한번 도전을...
다른 사람의 솔루션을 이해하는 것도 상당히 도움이 되는 것 같음.
