function printListFromTailToHead(head)
{
    var arry = []
    while(head) {
        arry.unshift(head.val);
        head = head.next;
    }
    return arry
}
