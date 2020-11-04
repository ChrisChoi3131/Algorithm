import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.StringTokenizer;

class Solution {
  static final String inputFilePath = "./# ing/sample.txt";
  static final long NUMBER = 1000000007;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      int n = Integer.parseInt(br.readLine());
      int a[] = new int[n];
      int d[] = new int[n];
      StringTokenizer st = new StringTokenizer(br.readLine());
      for (int i = 0; i < n; i++) {
        a[i] = Integer.parseInt(st.nextToken());
        d[i] = -1;
      }
      LinkedList<int[]> s = new LinkedList<int[]>();
      s.addLast(new int[] { a[n - 1], n - 1 });
      int currIdx = n - 1;
      while (true) {
        if (currIdx == 0) {
          break;
        }
        currIdx--;
        int top = s.getLast()[0];
        int topIdx = s.getLast()[1];
        if (a[currIdx] < top) {
          s.addLast(new int[] { a[currIdx], currIdx });
        } else {
          d[topIdx] = currIdx;
          s.removeLast();
          while (!s.isEmpty()) {
            top = s.getLast()[0];
            topIdx = s.getLast()[1];
            if (a[currIdx] < top) {
              break;
            } else {
              d[topIdx] = currIdx;
              s.removeLast();
            }
          }
          s.addLast(new int[] { a[currIdx], currIdx });
        }
      }
      long ans = 0;
      for (int i = 0; i < n; i++) {
        ans = (ans + d[i] + 1) % NUMBER;
      }
      System.out.println(ans);
    }
  }
}
