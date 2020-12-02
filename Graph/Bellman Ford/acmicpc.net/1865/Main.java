import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int n, m, w;
  static ArrayList<Edge> list;
  static long dist[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int tc = 0; tc < t; tc++) {
      st = new StringTokenizer(br.readLine());
      n = Integer.parseInt(st.nextToken());
      m = Integer.parseInt(st.nextToken());
      w = Integer.parseInt(st.nextToken());
      list = new ArrayList<Edge>();
      dist = new long[n + 1];
      for (int i = 0; i < m; i++) {
        st = new StringTokenizer(br.readLine());
        int s = Integer.parseInt(st.nextToken());
        int e = Integer.parseInt(st.nextToken());
        int cost = Integer.parseInt(st.nextToken());
        list.add(new Edge(s, e, cost));
        list.add(new Edge(e, s, cost));
      }
      for (int i = 0; i < w; i++) {
        st = new StringTokenizer(br.readLine());
        int s = Integer.parseInt(st.nextToken());
        int e = Integer.parseInt(st.nextToken());
        int cost = Integer.parseInt(st.nextToken());
        list.add(new Edge(s, e, -cost));
      }
      boolean nCycle = false;
      for (int i = 1; i <= n; i++) {
        for (Edge edge : list) {
          int s = edge.s;
          int e = edge.e;
          int cost = edge.cost;
          if (dist[e] > dist[s] + cost) {
            dist[e] = dist[s] + cost;
            if (i == n) {
              nCycle = true;
            }
          }
        }
      }

      if (nCycle)
        System.out.println("YES");
      else
        System.out.println("NO");
    }
  }
}

class Edge {
  int s, e, cost;

  public Edge(int s, int e, int cost) {
    this.s = s;
    this.e = e;
    this.cost = cost;
  }
}