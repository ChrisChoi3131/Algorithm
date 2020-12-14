import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, endTime, timeDiff;
  static StringTokenizer st;
  static int n;
  static int inCnt[];
  static boolean c[];
  static ArrayList<Integer> a[];
  static int costs[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    startTime = System.currentTimeMillis();
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    n = Integer.parseInt(br.readLine());
    endTime = System.currentTimeMillis();
    a = new ArrayList[n + 1];
    for (int i = 1; i <= n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    inCnt = new int[n + 1];
    c = new boolean[n + 1];
    costs = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      st = new StringTokenizer(br.readLine());
      int cost = Integer.parseInt(st.nextToken());
      costs[i] = cost;
      int num = Integer.parseInt(st.nextToken());
      for (int j = 0; j < num; j++) {
        int from = Integer.parseInt(st.nextToken());
        a[from].add(i);
        inCnt[i]++;
      }
    }
    Queue<Integer> q = new LinkedList<Integer>();
    int work[] = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      if (inCnt[i] == 0) {
        q.add(i);
        work[i] = costs[i];
      }
    }
    while (!q.isEmpty()) {
      int cur = q.poll();
      for (int next : a[cur]) {
        inCnt[next]--;
        if (inCnt[next] == 0) {
          q.add(next);
        }
        if (work[next] < work[cur] + costs[next]) {
          work[next] = work[cur] + costs[next];
        }
      }
    }
    int ans = 0;
    for (int i = 1; i <= n; i++) {
      if (work[i] > ans) {
        ans = work[i];
      }
    }
    System.out.println(ans);
  }
}
