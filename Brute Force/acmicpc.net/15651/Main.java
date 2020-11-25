import java.io.*;
import java.util.*;

class Main {
  static final String inputFilePath = "./# ing/sample.txt";
  static StringTokenizer st;
  static StringBuilder sb;
  static int n, m;
  static boolean c[];
  static int a[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    c = new boolean[n + 1];
    a = new int[m];
    sb = new StringBuilder();
    recur(0);
    System.out.println(sb.toString());
  }

  static void recur(int index) {
    if (index == m) {
      for (int i = 0; i < m; i++) {
        // System.out.print(a[i]);
        sb.append(a[i]);
        if (i != m - 1) {
          // System.out.print(" ");
          sb.append(" ");
        }
      }
      // System.out.println();
      sb.append("\n");
      return;
    }
    for (int i = 1; i <= n; i++) {
      a[index] = i;
      recur(index + 1);
    }
  }
}
