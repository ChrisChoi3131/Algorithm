import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/Tree/acmicpc.net/1991/sample.txt";

  static void preorder(Node[] a, int x) {
    if (x == -1) {
      return;
    }
    System.out.print((char) (x + 'A'));
    preorder(a, a[x].left);
    preorder(a, a[x].right);
  }

  static void inorder(Node[] a, int x) {
    if (x == -1) {
      return;
    }
    inorder(a, a[x].left);
    System.out.print((char) (x + 'A'));
    inorder(a, a[x].right);
  }

  static void postorder(Node[] a, int x) {
    if (x == -1) {
      return;
    }
    postorder(a, a[x].left);
    postorder(a, a[x].right);
    System.out.print((char) (x + 'A'));
  }

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int n = Integer.parseInt(br.readLine());
    Node a[] = new Node[26];
    for (int i = 0; i < n; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int x = st.nextToken().charAt(0) - 'A';
      char y = st.nextToken().charAt(0);
      char z = st.nextToken().charAt(0);
      int left = -1;
      int right = -1;
      if (y != '.') {
        left = y - 'A';
      }
      if (z != '.') {
        right = z - 'A';
      }
      a[x] = new Node(left, right);
    }
    preorder(a, 0);
    System.out.println();
    inorder(a, 0);
    System.out.println();
    postorder(a, 0);
    System.out.println();
  }
}

class Node {
  int left, right;

  Node(int left, int right) {
    this.left = left;
    this.right = right;
  }
}