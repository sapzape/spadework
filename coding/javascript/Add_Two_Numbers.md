[shovel coding #2 leetcode - Add Two Numbers]
> 원문 링크 : https://leetcode.com/problems/add-two-numbers/description/
## Description
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
```

## Solution
```
var addTwoNumbers = function(l1, l2) {
    var x = 0, y = 0, i = 0;
    var arr1 = [];
    var arr2 = [];
    
    arr1[0] = [];
    arr1[1] = [];
    
    while(l1) {
        arr1[0].push(l1.val);
        l1 = l1.next;
    }

    while(l2) {
        arr1[1].push(l2.val);
        l2 = l2.next;
    }

    var length = (arr1[0].length > arr1[1].length) ? arr1[0].length : arr1[1].length;
    
    while (i < length) {
        if (arr1[0][i] === undefined) arr1[0][i] = 0;
        if (arr1[1][i] === undefined) arr1[1][i] = 0;
        
        var sum = arr1[0][i] + arr1[1][i] + x;
        x = 0;
        
        y = sum % 10;
        x = parseInt(sum / 10);
        
        arr2.push(y);
        i++;
        
        if ((i >= length) && (x > 0)) {
            length += 1;
        }
    }
    
    return arr2;
};
```
컴퓨터 없이 손으로만 짜보니 너무 힘들었다. 결국 머리 터지고 키보드를 두들겼다. 부끄럽다 저 코드... while이 몇개냐...
해결을 위한 주먹구구식 처리.
신기한건 속도는 나름 나왔다는 것. (your runtime beats 96.01% of javascript submissions.)

## Reference
### Other Solution

```
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}
```
대부분 비슷하게 구현한 것으로 보인다.

## End
오직 머리와 손으로 풀려고 하다보니 어려움이 이만저만 아니다. 결국 컴퓨터의 힘을 빌리게 되지만, 조금씩 하다보면 능숙한 손코딩 / 뇌컴파일링 / 눈디버깅이 되지 않을까?

