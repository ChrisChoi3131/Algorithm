import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int inCnt[];
  static int n, m;
  static ArrayList<Integer> a[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    inCnt = new int[n + 1];
    a = new ArrayList[n + 1];
    for (int i = 0; i <= n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      a[x].add(y);
      inCnt[y]++;
    }
    PriorityQueue<Integer> q = new PriorityQueue<Integer>();
    for (int i = 1; i <= n; i++) {
      if (inCnt[i] == 0) {
        q.add(i);
      }
    }
    while (!q.isEmpty()) {
      int curr = q.remove();
      bw.write(curr + " ");
      for (int i = 0; i < a[curr].size(); i++) {
        int next = a[curr].get(i);
        inCnt[next]--;
        if (inCnt[next] == 0)
          q.add(next);
      }
    }
    bw.flush();
  }
}