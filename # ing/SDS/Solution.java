import java.io.*;
import java.util.*;

public class Solution {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing/SDS/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;
  static int n, m;
  static ArrayList<Integer> a[];
  static int d[];
  static int par[];
  static int p[][];
  static int h[];
  static int LOG = 17;

  public static void main(String[] args) throws Exception {
    startTime = System.currentTimeMillis();
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int tc = 1; tc <= t; tc++) {
      st = new StringTokenizer(br.readLine());
      n = Integer.parseInt(st.nextToken());
    }
    EndTime = System.currentTimeMillis();
    // System.out.println("걸린시간 ms : " + (EndTime - startTime));
  }
}
