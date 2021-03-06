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
  static ArrayList<Integer> al = new ArrayList<Integer>();
  static int n, m;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());
    st = new StringTokenizer(br.readLine());
    for (int i = 0; i < n; i++) {
      al.add(Integer.parseInt(st.nextToken()));
    }
    Collections.sort(al);
    go(0);
    System.out.println(sb.toString());
  }

  static void go(int index) {
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

    for (int i = 0; i < al.size(); i++) {
      if (c[i]) {
        continue;
      }
      c[i] = true;
      a[index] = al.get(i);
      go(index + 1);
      c[i] = false;
    }
  }

}