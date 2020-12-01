import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int par[];
  static int n, m;
  static PriorityQueue<Edge> pq;

  static void union(int a, int b) {
    int rootA = find(a);
    int rootB = find(b);
    par[rootA] = rootB;
  }

  static int find(int a) {
    if (a == par[a])
      return a;
    else
      return par[a] = find(par[a]);
  }

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    par = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      par[i] = i;
    }
    pq = new PriorityQueue<Edge>(new Comparator<Edge>() {
      @Override
      public int compare(Edge o1, Edge o2) {
        return o1.cost - o2.cost;
      }
    });
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      int cost = Integer.parseInt(st.nextToken());
      pq.add(new Edge(x, y, cost));
    }
    int ans = 0;
    while (!pq.isEmpty()) {
      Edge curr = pq.poll();
      if (find(curr.s) != find(curr.e)) {
        union(curr.s, curr.e);
        ans += curr.cost;
      }
    }
    System.out.println(ans);
  }
}

class Edge {
  int s, e, cost;

  public Edge(int s, int e, int cost) {
    this.cost = cost;
    this.e = e;
    this.s = s;
  }
}