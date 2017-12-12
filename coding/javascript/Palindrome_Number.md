[shovel coding #9 leetcode - Submission Details]
> 원문 링크 : https://leetcode.com/problems/palindrome-number/description/
## Description
Determine whether an integer is a palindrome. Do this without extra space.

## Solution
```
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    x += '';
    var reverse_x = x.split('').reverse().join('');
    
    if (x === reverse_x) return true;
    return false;
};
```
뭐든 배열로 쪼개는 병 걸린듯...
인자가 마이너스이거나, 0으로 끝나면 바로 return 시켰음. (뒤가 0인데, 앞이 0인 숫자는 없으니... ex. 01110 -> ?)


## Reference
### Other Solution

```
public class Solution {
    public bool IsPalindrome(int x) {
        // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome, 
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        
        int revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }
        
        // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123, 
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
        return x == revertedNumber || x == revertedNumber/10;
    }
}
```
역으로 저렇게 변환할 수 있다니... 난 생각이 짧은 듯. 흑흑.

```
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    var num = 0;
    while (x > num) {
        num = num * 10 + x % 10;
        x /= 10;
    }
    
    return x == num || x == num/10;
};
```
javascript로 바꿔봤는데, 아무래도 타입의 자유로움(?) 덕분에 저렇게 나누고 나머지 더하고 하는데 값이 정상적으로 나오지 않는다.
뭐 추가적으로 처리를 하면 가능하겠지만, 간단한 문제였으니 그냥 넘김.

## End
.
