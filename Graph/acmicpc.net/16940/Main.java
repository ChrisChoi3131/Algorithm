import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/16940/sample.txt";

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int n = Integer.parseInt(br.readLine());
    ArrayList<Integer>[] a = new ArrayList[n];
    int[] parent = new int[n];
    int[] order = new int[n];
    boolean[] check = new boolean[n];
    for (int i = 0; i < n; i++) {
      a[i] = new ArrayList<>();
    }
    StringTokenizer st;
    for (int i = 0; i < n - 1; i++) {
      st = new StringTokenizer(br.readLine());
      int u = Integer.parseInt(st.nextToken()) - 1;
      int v = Integer.parseInt(st.nextToken()) - 1;
      a[u].add(v);
      a[v].add(u);
    }
    st = new StringTokenizer(br.readLine());
    for (int i = 0; i < n; i++) {
      order[i] = Integer.parseInt(st.nextToken()) - 1;
    }
    Queue<Integer> q = new LinkedList<>();
    q.add(0);
    check[0] = true;
    int m = 1;
    for (int i = 0; i < n; i++) {
      if (q.isEmpty()) {
        System.out.println(0);
        System.exit(0);
      }
      int x = q.remove();
      if (x != order[i]) {
        System.out.println(0);
        System.exit(0);
      }
      int cnt = 0;
      for (int y : a[x]) {
        if (check[y] == false) {
          parent[y] = x;
          cnt++;
        }
      }
      for (int j = 0; j < cnt; j++) {
        if (parent[order[m + j]] != x) {
          System.out.println(0);
          System.exit(0);
        }
        q.add(order[m + j]);
        check[order[m + j]] = true;
      }
      m += cnt;
    }
    System.out.println(1);
  }
}