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
  static ArrayList<Integer> a[];

  static int n, k;
  static boolean check[];
  static int group[];
  static LinkedList<int[]> s = new LinkedList<>();

  static void dfs(int start) {
    for (int i = 0; i < n; i++) {
      check[i] = false;
    }
    s.clear();
    int order = -1, i;

    s.addLast(new int[] { start, order });
    check[start] = true;
    group[start] = start;

    while (!s.isEmpty()) {
      int curr = s.getLast()[0];
      for (i = 0; i < a[curr].size(); i++) {
        int child = a[curr].get(i);
        if (!check[child]) {
          check[child] = true;
          group[child] = start;
          s.addLast(new int[] { child, i });
          order = -1;
          break;
        }
      }
      if (i == a[curr].size()) {
        s.removeLast();
      }
    }

  }

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      n = Integer.parseInt(st.nextToken());
      k = Integer.parseInt(st.nextToken());
      a = new ArrayList[n];
      ArrayList<Integer> partyMember = new ArrayList<>();
      check = new boolean[n];
      group = new int[n];
      for (int i = 0; i < n; i++) {
        a[i] = new ArrayList<Integer>();
        group[i] = -1;
      }
      for (int i = 0; i < k; i++) {
        st = new StringTokenizer(br.readLine());
        int x = Integer.parseInt(st.nextToken()) - 1;
        int y = Integer.parseInt(st.nextToken()) - 1;
        a[x].add(y);
        a[y].add(x);
        if (!partyMember.contains(x)) {
          partyMember.add(x);
        }
        if (!partyMember.contains(y)) {
          partyMember.add(y);
        }
      }

      int cntGroups = 0;
      int maxPartyMember = 0;
      for (int i = 0; i < n; i++) {
        if (group[i] == -1 && partyMember.contains(i)) {
          dfs(i);
          cntGroups++;
        }
      }
      int numPartymember[] = new int[n];
      for (int i = 0; i < n; i++) {
        if (group[i] != -1) {
          numPartymember[group[i]]++;
        }
      }
      for (int i = 0; i < n; i++) {
        if (numPartymember[i] > maxPartyMember) {
          maxPartyMember = numPartymember[i];
        }
      }

      System.out.println("#" + test_case + " " + cntGroups + " " + maxPartyMember);
    }
  }
}
