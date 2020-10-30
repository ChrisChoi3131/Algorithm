import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./# ing/sample.txt";
  static boolean[] c = new boolean[10];
  static int[] a = new int[10];
  static StringBuilder sb = new StringBuilder();

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());
    go(0, 1, n, m);
    System.out.println(sb.toString());
  }

  static void go(int index, int start, int n, int m) {
    if (index == m) {
      for (int i = 0; i < m; i++) {
        sb.append(a[i]);
        if (i < m - 1) {
          sb.append(" ");
        }
      }
      sb.append("\n");
      return;
    }
    for (int i = start; i <= n; i++) {
      if (c[i]) {
        continue;
      }
      c[i] = true;
      a[index] = i;
      go(index + 1, i + 1, n, m);
      c[i] = false;
    }
  }
}