import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static final int INF = 1000000000;
  static ArrayList<Edge> a[];
  static boolean c[];
  static int dist[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());
    int start = Integer.parseInt(br.readLine());
    a = (ArrayList<Edge>[]) new ArrayList[n + 1];
    for (int i = 0; i <= n; i++) {
      a[i] = new ArrayList<Edge>();
    }
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int from = Integer.parseInt(st.nextToken());
      int to = Integer.parseInt(st.nextToken());
      int cost = Integer.parseInt(st.nextToken());
      a[from].add(new Edge(to, cost));
    }
    c = new boolean[n + 1];
    dist = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      dist[i] = INF;
    }
    dist[start] = 0;
    PriorityQueue<Edge> pq = new PriorityQueue<Edge>(new Comparator<Edge>() {
      @Override
      public int compare(Edge o1, Edge o2) {
        // return o1.cost - o2.cost;
        if (o1.cost < o2.cost) {
          return -1;
        } else if (o1.cost == o2.cost) {
          if (o1.to < o2.to) {
            return -1;
          } else if (o1.to > o2.to) {
            return 1;
          } else {
            return 0;
          }
        } else {
          return 1;
        }
      }
    });
    pq.offer(new Edge(start, 0));
    while (!pq.isEmpty()) {
      int x = pq.poll().to;
      if (c[x])
        continue;
      c[x] = true;
      for (Edge y : a[x]) {
        if (dist[y.to] > dist[x] + y.cost) {
          dist[y.to] = dist[x] + y.cost;
          pq.offer(new Edge(y.to, dist[y.to]));
        }
      }
    }
    for (int i = 1; i <= n; i++) {
      if (dist[i] == INF) {
        bw.write("INF" + "\n");
      } else {
        bw.write(dist[i] + "\n");
        // System.out.println("INF");
      }
    }
    bw.flush();
  }
}

class Edge {
  int to, cost;

  public Edge(int to, int cost) {
    this.to = to;
    this.cost = cost;
  }
}