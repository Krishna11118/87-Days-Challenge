/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        ListNode i=head;
        int n=0;
        //Calculate Size of LinkedList
        while(i!=null)
        { 
           
            n++;
            i=i.next;
        }
        if(n==0)
        return head;
        k=k%n;
        if(n==0 || n==1 ||k==0 || k==n)
        return head;

        //Breaking at point n-k      
         n=n-k-1;
         i=head;
         while(n>0)
        {  
          // System.out.println(i.val);
           i=i.next;
           
           n--;
        }
         ListNode j=i.next;
         ListNode o=i.next;
         i.next=null;
         k--;
        //Joining lists
        while(k>0 && j.next !=null)
        {
             // System.out.println(j.val);
              j=j.next;
        
            k--;
        }
        
    
        j.next=head;
        
        return o;
    }
}