import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int n, m;
  static ArrayList<Integer> a[];
  static int par[];
  static int depth[];
  static int point[][];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    n = Integer.parseInt(br.readLine());
    int root = 1;
    a = new ArrayList[n + 1];

    par = new int[n + 1];
    depth = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    for (int i = 0; i < n - 1; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      a[x].add(y);
      a[y].add(x);
    }
    m = Integer.parseInt(br.readLine());
    point = new int[m + 1][2];
    for (int i = 1; i <= m; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      point[i][0] = x;
      point[i][1] = y;
    }
    dfs(root, 1);
    for (int i = 1; i <= m; i++) {
      System.out.println(lca(point[i][0], point[i][1]));
    }

  }

  static int lca(int x, int y) {
    int xAncDepth = depth[x];
    int yAncDepth = depth[y];
    while (xAncDepth != yAncDepth) {
      if (xAncDepth > yAncDepth) {
        x = par[x];
        xAncDepth--;
      } else {
        y = par[y];
        yAncDepth--;
      }
    }

    while (x != y) {
      x = par[x];
      y = par[y];
      xAncDepth--;
      yAncDepth--;
    }
    return x;
  }

  static void dfs(int cur, int curDepth) {
    if (depth[cur] != 0) {
      return;
    }
    depth[cur] = curDepth;
    for (int i = 0; i < a[cur].size(); i++) {
      int next = a[cur].get(i);
      if (depth[next] == 0) {
        par[next] = cur;
        dfs(next, curDepth + 1);
      }
    }
  }
}