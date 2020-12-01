import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {
  static boolean debugMod = false;
  static final String inputFilePath = "./# ing SDS/sample.txt";
  static long startTime, EndTime, timeDiff;
  static StringTokenizer st;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      st = new StringTokenizer(br.readLine());
      System.out.println("#" + test_case + " ");
    }
  }
}