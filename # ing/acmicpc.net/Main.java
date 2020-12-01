import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/acmicpc.net/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int p[];
  static int cnt[];
  static boolean visited[];
  static ArrayList<Integer> a[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());
    a = new ArrayList[n + 1];
    cnt = new int[n + 1];
    for (int i = 1; i <= n; i++) {
      a[i] = new ArrayList<Integer>();
    }
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = Integer.parseInt(st.nextToken());
      a[x].add(y);
    }
    for (int i = 1; i <= n; i++) {
      visited = new boolean[n + 1];
      bfs(i);
    }
    int ans = 0;
    for (int i = 1; i <= n; i++) {
      if (cnt[i] == n - 1)
        ans++;
    }
    System.out.println(ans);
  }

  static void bfs(int node) {
    Queue<Integer> q = new LinkedList<Integer>();
    q.add(node);
    visited[node] = true;
    int count = 0;
    while (!q.isEmpty()) {
      int now = q.remove();
      for (int i = 0; i < a[now].size(); i++) {
        int child = a[now].get(i);
        if (!visited[child]) {
          cnt[child]++;
          count++;
          q.add(child);
          visited[child] = true;
        }
      }
    }
    cnt[node] += count;
  }

}