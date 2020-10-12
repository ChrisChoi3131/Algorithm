import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class 행렬접기 {
  static final String inputFilePath = "./Math, Logical Implememt/Etc/SDS/sample.txt";
  static int[][] a;
  static int r, c;
  static StringBuilder sb;

  static void fold(String dir) {
    int min = Integer.MAX_VALUE;
    int max = Integer.MIN_VALUE;
    if (dir == "r") {
      for (int i = r / 2; i < r; i++) {
        for (int j = 0; j < c; j++) {
          int index = r - i - 1;
          a[index][j] = a[index][j] + a[i][j];
          if (min > a[index][j]) {
            min = a[index][j];
          }
          if (max < a[index][j]) {
            max = a[index][j];
          }
        }
      }
      r = r / 2;
    } else if (dir == "c") {
      for (int i = 0; i < r; i++) {
        for (int j = c / 2; j < c; j++) {
          int index = c - j - 1;
          a[i][index] = a[i][index] + a[i][j];
          if (min > a[i][index]) {
            min = a[i][index];
          }
          if (max < a[i][index]) {
            max = a[i][index];
          }
        }
      }
      c = c / 2;
    }

    sb.append(" " + max + " " + min);
  }

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      r = Integer.parseInt(st.nextToken());
      c = Integer.parseInt(st.nextToken());
      a = new int[r][c];
      int min = Integer.MAX_VALUE;
      int max = Integer.MIN_VALUE;
      for (int i = 0; i < r; i++) {
        st = new StringTokenizer(br.readLine());
        for (int j = 0; j < c; j++) {
          a[i][j] = Integer.parseInt(st.nextToken());
          if (min > a[i][j]) {
            min = a[i][j];
          }
          if (max < a[i][j]) {
            max = a[i][j];
          }
        }
      }
      int cnt = 0;
      sb = new StringBuilder();
      sb.append(max + " " + min);
      while (true) {
        if (r % 2 != 0 && c % 2 != 0) {
          break;
        } else if (r % 2 != 0 || c % 2 != 0) {
          if (r % 2 == 0) {
            fold("r");
            cnt++;
          } else if (c % 2 == 0) {
            fold("c");
            cnt++;
          }
        } else if (r % 2 == 0 && c % 2 == 0) {
          if (r > c) {
            fold("r");
            cnt++;
          } else if (r < c) {
            fold("c");
            cnt++;
          } else {
            fold("c");
            cnt++;
          }
        }
      }
      System.out.println("#" + test_case + " " + cnt + " " + sb.toString());
    }
  }
}
