import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./# ing/sample.txt";
  static boolean[] check;
  static int[] a;
  static int[] num;

  static int n, m;
  static StringBuilder sb = new StringBuilder();

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    st = new StringTokenizer(br.readLine());
    a = new int[n];
    num = new int[n];
    check = new boolean[n];
    for (int i = 0; i < n; i++) {
      num[i] = Integer.parseInt(st.nextToken());
    }
    Arrays.sort(a);
    go(0);
    System.out.println(sb.toString());
  }

  static void go(int index) {
    if (index == m) {
      for (int i = 0; i < m; i++) {
        sb.append(a[i]);
        if (index <= m - 1) {
          sb.append(" ");
        }
      }
      sb.append("\n");
      return;
    }
    for (int i = 0; i < a.length; i++) {
      if (check[i]) {
        continue;
      }
      check[i] = true;
      a[i] = num[i];
      go(index + 1);
      check[i] = false;
    }
  }
}