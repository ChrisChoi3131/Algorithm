import java.io.*;
import java.util.*;

class Main {
  static final String inputFilePath = "./# ing/sample.txt";
  static StringTokenizer st;
  static StringBuilder sb;
  static int n;
  static ArrayList<Integer> a[];
  static boolean c[];
  static int parent[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    n = Integer.parseInt(br.readLine());
    a = new ArrayList[n];
    for (int i = 0; i < n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    for (int i = 0; i < n - 1; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken()) - 1;
      int y = Integer.parseInt(st.nextToken()) - 1;
      a[x].add(y);
      a[y].add(x);
    }
    c = new boolean[n];
    parent = new int[n];
    Queue<Integer> q = new LinkedList<Integer>();
    parent[0] = -1;
    q.add(0);
    while (!q.isEmpty()) {
      int node = q.remove();
      for (int i = 0; i < a[node].size(); i++) {
        int child = a[node].get(i);
        if (!c[child]) {
          parent[child] = node;
          c[child] = true;
          q.add(child);
        }
      }
    }
    for (int i = 1; i < n; i++) {
      System.out.println(parent[i] + 1);
    }
  }
}

class Node {
  int x, y;

  Node(int x, int y) {
    this.x = x;
    this.y = y;
  }
}