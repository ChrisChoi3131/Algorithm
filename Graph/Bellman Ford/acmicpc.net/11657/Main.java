import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int n, m;
  static long dist[];
  static ArrayList<Edge> a;
  static int MAX = 100000000;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    dist = new long[n + 1];
    for (int i = 2; i <= n; i++) {
      dist[i] = MAX;
    }
    a = new ArrayList<Edge>();
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      int c = Integer.parseInt(st.nextToken());
      a.add(new Edge(x, y, c));
    }
    boolean nCycle = false;
    for (int i = 1; i <= n; i++) {
      for (Edge curr : a) {
        int from = curr.from;
        int to = curr.to;
        int cost = curr.cost;
        if (dist[from] != MAX && dist[to] > dist[from] + cost) {
          dist[to] = dist[from] + cost;
          if (i == n) {
            nCycle = true;
          }
        }
      }
    }

    if (nCycle) {
      System.out.println(-1);
    } else {
      for (int i = 2; i <= n; i++) {
        if (dist[i] == MAX) {
          dist[i] = -1;
        }
        System.out.println(dist[i]);
      }
    }
  }
}

class Edge {
  int from, to, cost;

  public Edge(int from, int to, int cost) {
    this.from = from;
    this.to = to;
    this.cost = cost;
  }
}