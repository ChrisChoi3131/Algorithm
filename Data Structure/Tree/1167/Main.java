import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/Tree/1167/sample.txt";

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int v = Integer.parseInt(br.readLine());
    int check[][] = new int[v + 1][v + 1];
    int a[][] = new int[v + 1][v + 1];
    for (int i = 0; i < v; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int x = Integer.parseInt(st.nextToken());
      int y = 0;
      int dis = 0;
      while (true) {
        y = Integer.parseInt(st.nextToken());
        if (y != -1) {
          dis = Integer.parseInt(st.nextToken());
          a[x][y] = dis;
          a[y][x] = dis;
        } else {
          break;
        }
      }
    }
    Queue<Integer> q = new LinkedList<Integer>();
    q.add(1);
    while (!q.isEmpty()) {
      int now = q.remove();
      for (int i = 1; i <= a.length; i++) {
        if (a[now][i] != 0 && check[now][i] == 0) {
          check[now][i] = check[now][i] + a[now][i];
        }
      }
    }
    System.out.println();
  }
}