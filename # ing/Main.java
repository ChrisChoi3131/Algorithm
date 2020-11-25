import java.io.*;
import java.util.*;

class Main {
  static final String inputFilePath = "./# ing/sample.txt";
  static StringTokenizer st;
  static StringBuilder sb;
  static int n, m;
  static boolean visited[];
  static int a[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    visited = new boolean[n + 1];
    a = new int[m];
    sb = new StringBuilder();
    recur(0);

    System.out.println(sb.toString());
  }

  static void recur(int index) {
    if (index == m) {
      for (int i = 0; i < m; i++) {
        if (i == 0) {
          sb.append(a[i]);
        } else {
          sb.append(" " + a[i]);
        }
      }
      sb.append("\n");
      return;
    }
    for (int i = 1; i <= n; i++) {
      if (visited[i] == true) {
        continue;
      }
      visited[i] = true;
      a[index] = i;
      recur(index + 1);
      visited[i] = false;
    }
  }
}