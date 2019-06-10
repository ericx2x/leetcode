public class trees {

    public static void main(String[] args) {
        Node myNode = new Node();
        Tree myTree = new Tree();
        myNode.children = new Node[20];
        System.out.println(myNode.children);
    }

}

class Node {
 public String name;
 public Node[] children;
}


class Tree {
 public Node root;
}