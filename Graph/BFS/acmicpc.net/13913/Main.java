import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/BFS/13913/sample.txt";
  static final int MAX = 100001;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int k = Integer.parseInt(st.nextToken());
    Queue<Integer> q = new LinkedList<Integer>();
    int[] check = new int[MAX];
    int[] parent = new int[MAX];
    q.add(n);
    check[n] = 1;
    parent[n] = -1;
    while (!q.isEmpty()) {
      int now = q.remove();
      int dx = now - 1;
      if (dx >= 0) {
        if (check[dx] == 0) {
          q.add(dx);
          check[dx] = check[now] + 1;
          parent[dx] = now;
        }
      }
      dx = now + 1;
      if (dx < MAX) {
        if (check[dx] == 0) {
          q.add(dx);
          check[dx] = check[now] + 1;
          parent[dx] = now;
        }
      }
      dx = 2 * now;
      if (dx < MAX) {
        if (check[dx] == 0) {
          q.add(dx);
          check[dx] = check[now] + 1;
          parent[dx] = now;
        }
      }
    }
    System.out.println(check[k] - 1);
    ArrayList<Integer> ans = new ArrayList<Integer>();
    Queue<Integer> tracker = new LinkedList<Integer>();
    tracker.add(k);
    while (!tracker.isEmpty()) {
      int now = tracker.remove();
      ans.add(now);
      if (now == n) {
        break;
      }
      tracker.add(parent[now]);
    }
    StringBuilder sb = new StringBuilder();
    for (int i = ans.size() - 1; i >= 0; i--) {
      if (i != 0) {
        sb.append(ans.get(i) + " ");
      } else {
        sb.append(ans.get(i));
      }
    }
    System.out.println(sb.toString());
  }
}