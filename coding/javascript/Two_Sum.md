[shovel coding #1 leetcode - Two Sum]
> 원문 링크 : https://leetcode.com/problems/two-sum/description/
## Description
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

### Example:
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Solution
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = new Array();

    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                arr = [i, j];
                break;
            }
        }
    }

    return arr;
};
```

## Reference
### Other Solution
Approach #1 (Brute Force) [Accepted]
```
nums[j] == target - nums[i]
```
나는 더해서 Target과 값이 같은지 비교했고,
Solution에서는 Target과 뺀 값과 같은지 비교한다는 차이. 둘이 굳이 다를 것이 있나?

Approach #2 (Two-pass Hash Table) [Accepted]
Hash Table를 사용하였다.
Target - nums[I] 의 값이 hash table에 있는지 체크한다.
```
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], i);
    }
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement) && map.get(complement) != i) {
            return new int[] { i, map.get(complement) };
        }
    }
    throw new IllegalArgumentException("No two sum solution");
}
```
좋은 방법이군...

Approach #3 (One-pass Hash Table) [Accepted]
내 생각에는 참신했다.
```
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");
```
한번의 반복문을 통해 target - num[I]의 값이 있으면 return, 없으면 put. 말 그대로 ‘one-pass’ 할 수 있는 방법이었다.
굳.

## End
아직 손코딩, 뇌컴파일링, 눈디버깅은 나에게 쉽지 않은것 같다.
없는 머리 굴리다가 엉뚱하게 접근하였고 결국은 Brute Force... OTL
나의 뇌 컴파일러는 성능이 좋지않아 결국 컴퓨터의 컴파일러를 통해 오류를 찾게 되었다는...