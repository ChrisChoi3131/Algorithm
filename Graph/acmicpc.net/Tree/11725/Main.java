import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/Tree/11725/sample.txt";
  static int parent[];
  static int check[];
  static ArrayList<Integer> a[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int n = Integer.parseInt(br.readLine());
    parent = new int[n + 1];
    check = new int[n + 1];
    a = new ArrayList[n + 1];
    for (int i = 1; i <= n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    for (int i = 1; i < n; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      a[x].add(y);
      a[y].add(x);
    }
    Queue<Integer> q = new LinkedList<Integer>();
    q.add(1);
    check[1] = 1;
    parent[1] = -1;
    while (!q.isEmpty()) {
      int now = q.remove();
      for (int i = 0; i < a[now].size(); i++) {
        int child = a[now].get(i);
        if (check[child] == 0) {
          check[child] = 1;
          q.add(child);
          parent[child] = now;
        }
      }
    }
    for (int i = 2; i <= n; i++) {
      System.out.println(parent[i]);
    }
  }
}

class Node {
  int left, right;

  public Node(int left, int right) {
    this.left = left;
    this.right = right;
  }
}