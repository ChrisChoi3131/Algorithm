import java.io.*;
import java.util.*;

public class Main {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int a[];
  static Info tree[];

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());
    int h = (int) Math.ceil(Math.log10(n) / Math.log10(2));
    int tree_size = (int) Math.pow(2, h + 1) - 1;
    a = new int[n + 1];
    tree = new Info[tree_size];
    for (int i = 1; i <= n; i++) {
      a[i] = Integer.parseInt(br.readLine());
    }
    init(1, 1, n);
    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());
      int a = Integer.parseInt(st.nextToken());
      int b = Integer.parseInt(st.nextToken());
      Info result = find(1, 1, n, a, b);
      // bw.write(result.min + " " + result.max + "\n");
      bw.write(result.min + "\n");
      bw.flush();
    }
  }

  static Info init(int node, int start, int end) {
    if (start == end)
      return tree[node] = new Info(a[start], a[start]);
    int mid = (start + end) / 2;
    Info left = init(node * 2, start, mid);
    Info right = init(node * 2 + 1, mid + 1, end);
    long min = 0;
    long max = 0;
    if (left.min < right.min) {
      min = left.min;
    } else {
      min = right.min;
    }
    if (left.max > right.max) {
      max = left.max;
    } else {
      max = right.max;
    }
    return tree[node] = new Info(min, max);
  }

  static Info find(int node, int start, int end, int left, int right) {
    if (end < left || right < start)
      return new Info(Long.MAX_VALUE, Long.MIN_VALUE);

    if (left <= start && end <= right) {
      return tree[node];
    }
    int mid = (start + end) / 2;
    Info leftResult = find(node * 2, start, mid, left, right);
    Info rightResult = find(node * 2 + 1, mid + 1, end, left, right);
    long min = 0;
    long max = 0;
    if (leftResult.min < rightResult.min) {
      min = leftResult.min;
    } else {
      min = rightResult.min;
    }
    if (leftResult.max > rightResult.max) {
      max = leftResult.max;
    } else {
      max = rightResult.max;
    }
    return new Info(min, max);
  }

}

class Info {
  public long min, max;

  public Info(long min, long max) {
    this.min = min;
    this.max = max;
  }
}