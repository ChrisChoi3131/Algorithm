import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

class Solution {
  static final String inputFilePath = "./# ing/sample.txt";

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int n = Integer.parseInt(st.nextToken());
      int m = Integer.parseInt(st.nextToken());
      ArrayList<Integer> a = new ArrayList<Integer>();
      ArrayList<Integer> b = new ArrayList<Integer>();
      st = new StringTokenizer(br.readLine());
      for (int i = 0; i < n; i++) {
        a.add(Integer.parseInt(st.nextToken()));
      }
      st = new StringTokenizer(br.readLine());
      for (int i = 0; i < m; i++) {
        b.add(Integer.parseInt(st.nextToken()));
      }
      int ans = 0;
      while (!a.isEmpty() && !b.isEmpty()) {
        int min = Integer.MAX_VALUE;
        int aIdx = -1;
        int bIdx = -1;
        for (int i = 0; i < a.size(); i++) {
          for (int j = 0; j < b.size(); j++) {
            int value = Math.abs(a.get(i) - b.get(j));
            if (min > value) {
              min = value;
              aIdx = i;
              bIdx = j;
            }
          }
        }
        ans += min;
        a.remove(aIdx);
        b.remove(bIdx);
      }
      System.out.println("#" + test_case + " " + ans);
    }
  }
}
