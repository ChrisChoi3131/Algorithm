import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Objects;
import java.util.StringTokenizer;

// class Solution {
class OCR {
  static final String inputFilePath = "./Math, Logical Implememt/Etc/SDS/sample.txt";
  static int[][] one = { { 0, 0, 1, 0, 0 }, { 0, 0, 1, 0, 0 }, { 0, 0, 1, 0, 0 }, { 0, 0, 1, 0, 0 },
      { 0, 0, 1, 0, 0 } };
  static int[][] two = { { 1, 1, 1, 1, 1 }, { 0, 0, 0, 0, 1 }, { 1, 1, 1, 1, 1 }, { 1, 0, 0, 0, 0 },
      { 1, 1, 1, 1, 1 } };
  static int[][] three = { { 1, 1, 1, 1, 1 }, { 0, 0, 0, 0, 1 }, { 1, 1, 1, 1, 1 }, { 0, 0, 0, 0, 1 },
      { 1, 1, 1, 1, 1 } };
  static int[][] four = { { 1, 0, 1, 0, 0 }, { 1, 0, 1, 0, 0 }, { 1, 1, 1, 1, 1 }, { 0, 0, 1, 0, 0 },
      { 0, 0, 1, 0, 0 } };
  static int[][] five = { { 1, 1, 1, 1, 1 }, { 1, 0, 0, 0, 0 }, { 1, 1, 1, 1, 1 }, { 0, 0, 0, 0, 1 },
      { 1, 1, 1, 1, 1 } };

  static int[][] rotate(int[][] input) {
    int[][] rotate = new int[5][5];
    for (int i = 0; i < rotate.length; i++) {
      for (int j = 0; j < rotate.length; j++) {
        rotate[i][j] = input[4 - j][i];
      }
    }
    return rotate;
  }

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    int t = Integer.parseInt(br.readLine());
    int[][] input = new int[5][5];
    for (int test_case = 1; test_case <= t; test_case++) {
      for (int i = 0; i < 5; i++) {
        StringTokenizer st = new StringTokenizer(br.readLine());
        input[i][0] = Integer.parseInt(st.nextToken());
        input[i][1] = Integer.parseInt(st.nextToken());
        input[i][2] = Integer.parseInt(st.nextToken());
        input[i][3] = Integer.parseInt(st.nextToken());
        input[i][4] = Integer.parseInt(st.nextToken());
      }
      int[][] rotate = input;
      boolean check = true;
      int ans = 0;
      for (int i = 0; i < 4; i++) {
        rotate = rotate(rotate);
        if (Objects.deepEquals(rotate, one)) {
          ans = 1;
          break;
        } else if (Objects.deepEquals(rotate, two)) {
          ans = 2;
          break;
        } else if (Objects.deepEquals(rotate, three)) {
          ans = 3;
          break;
        } else if (Objects.deepEquals(rotate, four)) {
          ans = 4;
          break;
        } else if (Objects.deepEquals(rotate, five)) {
          ans = 5;
          break;
        } else {
          ans = 0;
        }
      }
      System.out.println("#" + test_case + " " + ans);
    }
  }
}
