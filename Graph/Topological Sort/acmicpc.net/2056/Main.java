import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int inCnt[];
  static int costArr[];
  static int check[];
  static int n;
  static ArrayList<Edge> a[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    n = Integer.parseInt(br.readLine());
    inCnt = new int[n + 1];
    costArr = new int[n + 1];
    check = new int[n + 1];
    a = new ArrayList[n + 1];
    for (int i = 0; i <= n; i++) {
      a[i] = new ArrayList<Edge>();
    }
    for (int i = 1; i <= n; i++) {
      st = new StringTokenizer(br.readLine());
      int cost = Integer.parseInt(st.nextToken());
      int numOfConnected = Integer.parseInt(st.nextToken());
      for (int j = 0; j < numOfConnected; j++) {
        int x = Integer.parseInt(st.nextToken());
        a[x].add(new Edge(x, i, cost));
        inCnt[i]++;
      }
      costArr[i] = cost;
    }
    Queue<Edge> q = new LinkedList<Edge>();
    for (int i = 1; i <= n; i++) {
      if (inCnt[i] == 0) {
        q.offer(new Edge(i, i, costArr[i]));
        check[i] = costArr[i];
      }
    }
    while (!q.isEmpty()) {
      Edge curr = q.poll();
      for (int i = 0; i < a[curr.e].size(); i++) {
        Edge next = a[curr.e].get(i);
        inCnt[next.e]--;
        if (inCnt[next.e] == 0) {
          q.offer(next);
        }
        if (check[next.e] < check[next.s] + next.cost) {
          check[next.e] = check[next.s] + next.cost;
        }
      }
    }
    int ans = 0;
    for (int i = 1; i <= n; i++) {
      if (check[i] > ans)
        ans = check[i];
    }
    System.out.println(ans);
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