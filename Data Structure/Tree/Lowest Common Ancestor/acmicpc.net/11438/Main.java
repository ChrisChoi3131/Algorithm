import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static ArrayList<Integer> a[];
  static int p[][];
  static int par[];
  static int d[];
  static int LOG = 18;
  static int n, m;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    n = Integer.parseInt(br.readLine());
    a = new ArrayList[n + 1];
    for (int i = 1; i <= n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    par = new int[n + 1];
    d = new int[n + 1];
    p = new int[n + 1][LOG + 1];

    for (int i = 0; i < n - 1; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      a[x].add(y);
      a[y].add(x);
    }
    Queue<Integer> q = new LinkedList<Integer>();
    int root = 1;
    q.add(root);
    d[root] = 1;
    while (!q.isEmpty()) {
      int cur = q.poll();
      for (int next : a[cur]) {
        if (d[next] == 0) {
          q.add(next);
          par[next] = cur;
          d[next] = d[cur] + 1;
        }
      }
    }
    for (int i = 1; i <= n; i++) {
      p[i][0] = par[i];
    }
    for (int j = 1; j <= LOG; j++) {
      for (int i = 1; i <= n; i++) {
        p[i][j] = p[p[i][j - 1]][j - 1];
      }
    }
    m = Integer.parseInt(br.readLine());
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      bw.write(lca(x, y) + "\n");
    }
    bw.flush();
  }

  static int lca(int x, int y) {
    if (d[x] < d[y]) {
      int tmp = x;
      x = y;
      y = tmp;
    }

    for (int i = LOG; i >= 0; i--) {
      int diff = d[x] - d[y];
      if (Math.pow(2, i) <= diff) {
        x = p[x][i];
      }
    }

    if (x == y)
      return x;

    for (int i = LOG; i >= 0; i--) {
      if (p[x][i] != p[y][i]) {
        x = p[x][i];
        y = p[y][i];
      }
    }
    return p[x][0];
  }
}