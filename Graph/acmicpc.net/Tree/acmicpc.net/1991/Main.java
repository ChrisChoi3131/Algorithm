import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/Tree/acmicpc.net/1991/sample.txt";

  static void preorder(Node a[], int p) {
    System.out.print((char) (p + 'A'));
    if (a[p].left != -1) {
      preorder(a, a[p].left);
    }
    if (a[p].right != -1) {
      preorder(a, a[p].right);
    }
  }

  static void inorder(Node a[], int p) {
    if (a[p].left != -1) {
      inorder(a, a[p].left);
    }
    System.out.print((char) (p + 'A'));
    if (a[p].right != -1) {
      inorder(a, a[p].right);
    }
  }

  static void postorder(Node a[], int p) {
    if (a[p].left != -1) {
      postorder(a, a[p].left);
    }
    if (a[p].right != -1) {
      postorder(a, a[p].right);
    }
    System.out.print((char) (p + 'A'));
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

  public Node(int left, int right) {
    this.left = left;
    this.right = right;
  }
}