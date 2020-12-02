import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static long inf = (long) 1001 * 100000;
  static ArrayList<Edge> bus[];
  static long dist[];
  static boolean c[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int n = Integer.parseInt(br.readLine());
    int m = Integer.parseInt(br.readLine());
    bus = new ArrayList[n + 1];
    for (int i = 0; i <= n; i++) {
      bus[i] = new ArrayList<Edge>();
    }
    dist = new long[n + 1];
    c = new boolean[n + 1];
    for (int i = 1; i <= n; i++) {
      dist[i] = inf;
    }
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int s = Integer.parseInt(st.nextToken());
      int e = Integer.parseInt(st.nextToken());
      int cost = Integer.parseInt(st.nextToken());
      bus[s].add(new Edge(e, cost));
    }
    st = new StringTokenizer(br.readLine());
    int from = Integer.parseInt(st.nextToken());
    int to = Integer.parseInt(st.nextToken());
    dist[from] = 0;
    while (true) {
      long min = inf;
      int idx = 0;
      for (int i = 1; i <= n; i++) {
        if (!c[i] && min > dist[i]) {
          min = dist[i];
          idx = i;
        }
      }
      c[idx] = true;

      for (Edge curr : bus[idx]) {
        if (!c[curr.e] && dist[curr.e] > dist[idx] + curr.cost) {
          dist[curr.e] = dist[idx] + curr.cost;
        }
      }
      if (idx == to) {
        break;
      }
    }
    System.out.println(dist[to]);
  }
}

class Edge {
  int e, cost;

  public Edge(int e, int cost) {
    this.e = e;
    this.cost = cost;
  }
}