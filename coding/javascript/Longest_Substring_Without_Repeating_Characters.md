[shovel coding #3 leetcode - Longest Substring Without Repeating Characters]
> 원문 링크 : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
## Description
Given a string, find the length of the longest substring
without repeating characters.

Examples:
```
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution
Fail code :
```
var lengthOfLongestSubstring = function(s) {
    var arr1 = s.split('');
    var arr2 = [];
    var start = 0, end = 0, max = 0;

    while (start < arr1.length && end < arr1.length) {
        if (arr2.indexOf(arr1[end]) < 0) {
            arr2.push(arr1[end++]);
            max = Math.max(max, end - start);
        } else {
            delete arr2[start++];
        }
    }
    
    return max;
};
```
성공한 코드와 차이점은 array를 썼다는 점... 모든 테스트 케이스중, 마지막 하나에서 실행 시간 초과로 실패가 발생했다.


Sucess Code :
```
var lengthOfLongestSubstring = function(s) {
    var arr1 = s.split('');
    var arr2 = new Set();
    var start = 0, end = 0, max = 0;

    while (start < arr1.length && end < arr1.length) {
        if (! arr2.has(arr1[end])) {
            arr2.add(arr1[end++]);
            max = Math.max(max, end - start);
        } else {
            arr2.delete(arr1[start++]);
        }
    }
    
    return max;
};
```
확실하게 array보다는 map이던지 set이던지 더 빠른듯.

## Reference
### Other Solution

```
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length(), ans = 0;
        Map<Character, Integer> map = new HashMap<>(); // current index of character
        // try to extend the range [i, j]
        for (int j = 0, i = 0; j < n; j++) {
            if (map.containsKey(s.charAt(j))) {
                i = Math.max(map.get(s.charAt(j)), i);
            }
            ans = Math.max(ans, j - i + 1);
            map.put(s.charAt(j), j + 1);
        }
        return ans;
    }
}
```
처음에 이해를 못했다. (java 코드라서가 아니라...)
손으로 따라 쓰며 이해를 했는데, 역시 정답은 많고 천재들도 많은듯...

## End
혼자 손코딩하다가 머리가 안돌아가서, 키보드에 손이 올라가고... 하지만, 결국 array로 하다가 풀지 못했다.
정답에 근처까지 온 줄 알았지만, 매번 실패... 결국 solution을 보고 이해하여 직접 구현했다.
최초 구현했던 코드도 결국은 접근 방식은 같았지만, 한 끗 차이때문에 해결하지 못하였기에 아쉬움이 있다. (과연 한 끗?)

