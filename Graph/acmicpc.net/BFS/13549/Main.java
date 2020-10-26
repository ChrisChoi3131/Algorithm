import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/BFS/13549/sample.txt";
  static final int length = 1000000;
  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int k = Integer.parseInt(st.nextToken());
    int[] check = new int[length];
    Arrays.fill(check, -1);
    Queue<Integer> q1 = new LinkedList<Integer>();
    Queue<Integer> q2 = new LinkedList<Integer>();
    q1.add(n);
    check[n] = 0;
    int range = 0;
    for (int i = 0; i < length; i++) {
      if (Math.pow(2, i) * n > k) {
        range = (int) Math.pow(2, i) * n;
        break;
      }
    }
    while (!q1.isEmpty()) {
      int now = q1.remove();
      if (now * 2 < length && (check[now * 2] == -1|| check[now *2] > check[now])) {
        q1.add(now * 2);
        check[now * 2] = check[now];
      }
      if (now - 1 >= 0 && check[now - 1] == -1) {
        q2.add(now - 1);
        check[now - 1] = check[now] + 1;
      }
      if (now + 1 < length && check[now + 1] == -1) {
        q2.add(now + 1);
        check[now + 1] = check[now] + 1;
      }
      if (q1.isEmpty()) {
        q1 = q2;
        q2 = new LinkedList<Integer>();
      }
    }
    System.out.println(check[k]);

  }
}
