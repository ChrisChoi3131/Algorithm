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
      int tmp = Integer.parseInt(st.nextToken());
      al.add(tmp);
    }
    Collections.sort(al);
    go(0, 0);
    st = new StringTokenizer(sb.toString(), "\\");
    ArrayList<String> strAl = new ArrayList<String>();
    while (st.hasMoreTokens()) {
      String line = st.nextToken();
      strAl.add(line);
    }
    ArrayList<String> ansAl = new ArrayList<String>();
    for (int i = 0; i < strAl.size(); i++) {
      if (!ansAl.contains(strAl.get(i))) {
        ansAl.add(strAl.get(i));
      }
    }
    for (int i = 0; i < ansAl.size(); i++) {
      System.out.println(ansAl.get(i));
    }
  }

  static void go(int index, int start) {
    if (index == m) {
      for (int i = 0; i < m; i++) {
        sb.append(a[i]);

        // System.out.print(a[i]);
        if (i < m - 1) {
          sb.append(" ");
          // System.out.print(" ");
        }
      }
      sb.append("\\");
      // System.out.println();
      return;
    }
    for (int i = 0; i < al.size(); i++) {
      if (c[i]) {
        continue;
      }
      c[i] = true;
      a[index] = al.get(i);
      go(index + 1, start);
      c[i] = false;
    }
  }
}