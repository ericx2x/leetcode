class LinkedList{

    // Node head; // head of list 
    
     static class Node {
        Node next = null;
        int data;

        public Node( int d) {
            data = d;
        }

        void appendToTail(int d) {
            Node end = new Node(d);
            Node n = this;

            while (n.next != null) {
                n = n.next;
            }
            n.next = end;
        }

        Node deleteNode(Node head, int d){
            Node n = head;

            if(n.data == d){
                return head.next;
            }

            while(n.next != null){
                if(n.next.data == d){
                    n.next = n.next.next;
                    return head;
                }
                n = n.next;
            }
            return head;
        }
    }

    public static void main(String[] args) 
    { 
        Node myList = new Node(1);
        myList.appendToTail(3);
        myList.appendToTail(4);

        System.out.println(myList.data);
        System.out.println(myList.next.data);
        // System.out.println(myList.deleteNode(myList.next, 3).data);
        System.out.println(myList.data);
        System.out.println(myList.next.data);
        // System.out.print(myList.next.data);
        System.out.print("\n");
    }
}