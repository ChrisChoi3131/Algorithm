import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static long inf = (long) 1001 * 100000;
  static ArrayList<Edge> bus[];
  static Info dist[];
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
    dist = new Info[n + 1];
    c = new boolean[n + 1];
    for (int i = 1; i <= n; i++) {
      dist[i] = new Info(-1, inf);
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
    dist[from].dis = 0;
    while (true) {
      long min = inf;
      int idx = 0;
      for (int i = 1; i <= n; i++) {
        if (!c[i] && min > dist[i].dis) {
          min = dist[i].dis;
          idx = i;
        }
      }
      c[idx] = true;
      for (Edge curr : bus[idx]) {
        if (!c[curr.e] && dist[curr.e].dis > dist[idx].dis + curr.cost) {
          dist[curr.e].dis = dist[idx].dis + curr.cost;
          dist[curr.e].pIdx = idx;
        }
      }
      if (idx == to) {
        break;
      }
    }

    int x = to;
    Stack<Integer> st = new Stack<Integer>();
    while (x != -1) {
      st.push(x);
      x = dist[x].pIdx;
    }
    bw.write(dist[to].dis + "\n");
    bw.write(st.size() + "\n");
    while (!st.isEmpty()) {
      bw.write(st.pop() + " ");
    }
    bw.newLine();
    bw.flush();
  }
}

class Info {
  int pIdx;
  long dis;

  public Info(int pIdx, long dis) {
    this.pIdx = pIdx;
    this.dis = dis;
  }
}

class Edge {
  int e, cost;

  public Edge(int e, int cost) {
    this.e = e;
    this.cost = cost;
  }
}