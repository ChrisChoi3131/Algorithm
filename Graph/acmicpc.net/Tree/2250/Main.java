import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/Tree/2250/sample.txt";
  static Node a[];

  static void inorder(int x, int depth) {
    if (x == -1)
      return;
    inorder(a[x].left, depth);
    System.out.print(x + 1 + " ");
    inorder(a[x].right, depth);
  }

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int n = Integer.parseInt(br.readLine());
    a = new Node[n];
    for (int i = 0; i < n; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken()) - 1;
      int y = Integer.parseInt(st.nextToken()) - 1;
      int z = Integer.parseInt(st.nextToken()) - 1;
      if (y == -2) {
        y = -1;
      }
      if (z == -2) {
        z = -1;
      }
      a[x] = new Node(y, z);
    }
    inorder(0, 1);
  }
}

class Node {
  int left, right;
  public int order, depth;

  public Node(int left, int right) {
    this.left = left;
    this.right = right;
  }
}