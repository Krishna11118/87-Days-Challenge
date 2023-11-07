
var removeNthFromEnd = function (head, n) {
    
    const dummy = new ListNode(0, head);
    let fast = dummy,
        slow = dummy;
    while (n--) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;f

};