import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/BFS/13549/sample.txt";
  static final int length = 100001;
  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int k = Integer.parseInt(st.nextToken());
    int[] check = new int[length];

    Queue<Integer> q = new LinkedList<Integer>();
    q.add(n);
    check[n] = 1;
    while (!q.isEmpty()) {
      int now = q.remove();
      if (2 * now < length && check[2 * now] == 0) {
        check[2 * now] = check[now];
        q.add(2 * now);
      }
      if (now - 1 >= 0 && now +1 < length) {
        if (check[now - 1] == 0) {
          check[now - 1] = check[now] + 1;
          q.add(now - 1);
        }
        if (check[now + 1] == 0) {
          check[now + 1] = check[now] + 1;
          q.add(now + 1);
        }
      }
      if (now == k) {
        break;
      }
    }
    System.out.println(check[k]-1);
  }
}