import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Solution {
  static final String inputFilePath = "./# ing/sample.txt";
  static int ans0 = 0;
  static int ans1 = 0;
  static int a[][];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      ans0 = 0;
      ans1 = 0;
      int n = Integer.parseInt(br.readLine());
      a = new int[n + 1][n + 1];
      for (int i = 1; i <= n; i++) {
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int j = 1; j <= n; j++) {
          a[i][j] = Integer.parseInt(st.nextToken());
        }
      }
      recur(1, n, 1, n);
      System.out.println("#" + test_case + " " + ans0 + " " + ans1);
    }
  }

  static void recur(int hStart, int hEnd, int wStart, int wEnd) {
    System.out.println(hStart + " " + hEnd + " " + wStart + " " + wEnd);
    if (hStart >= hEnd || wStart >= wEnd) {
      if (ans0 == a[hStart][wStart]) {
        ans0++;
      } else {
        ans1++;
      }
      return;
    }
    boolean check = false;
    for (int i = hStart; i <= hEnd; i++) {
      for (int j = wStart; j <= wEnd; j++) {
        if (a[hStart][wStart] != a[i][j]) {
          recur(hStart, hEnd / 2, wStart, wEnd / 2);
          recur(hStart, hEnd / 2, wEnd / 2 + 1, wEnd);
          recur(hEnd / 2 + 1, hEnd, wStart, wEnd / 2);
          recur(hEnd / 2 + 1, hEnd, wEnd / 2 + 1, wEnd);
          check = true;
          break;
        }
      }
    }
    if (!check) {
      if (ans0 == a[hStart][hEnd]) {
        ans0++;
      } else {
        ans1++;
      }
    }
  }
}
