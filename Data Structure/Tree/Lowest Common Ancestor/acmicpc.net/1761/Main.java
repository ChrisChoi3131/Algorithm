import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int n, m;
  static ArrayList<Edge> a[];
  static int par[];
  static int depth[];
  static int point[][];
  static boolean check[];
  static int dist[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    n = Integer.parseInt(br.readLine());
    int root = 1;
    a = new ArrayList[n + 1];
    dist = new int[n + 1];
    par = new int[n + 1];
    check = new boolean[n + 1];
    depth = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      a[i] = new ArrayList<Edge>();
    }
    for (int i = 0; i < n - 1; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      int cost = Integer.parseInt(st.nextToken());
      a[x].add(new Edge(y, cost));
      a[y].add(new Edge(x, cost));
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
    Queue<Integer> q = new LinkedList<Integer>();
    depth[root] = 1;
    q.add(root);
    check[root] = true;
    while (!q.isEmpty()) {
      int cur = q.poll();
      for (Edge next : a[cur]) {
        if (!check[next.to]) {
          check[next.to] = true;
          par[next.to] = cur;
          dist[next.to] = dist[cur] + next.cost;
          depth[next.to] = depth[cur] + 1;
          q.add(next.to);
        }
      }
    }

    for (int i = 1; i <= m; i++) {
      System.out.println(lca(point[i][0], point[i][1]));
    }
  }

  static int lca(int x, int y) {
    int xAncDepth = depth[x];
    int yAncDepth = depth[y];
    int ans = dist[x] + dist[y];
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
    return ans -= 2 * dist[x];
  }
}

class Edge {
  int to, cost;

  public Edge(int to, int cost) {
    this.to = to;
    this.cost = cost;
  }
}