import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/BFS/1261/sample.txt";
  static final int[] dx = {1,0,-1,0};
  static final int[] dy = {0,1,0,-1};
  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int m = Integer.parseInt(st.nextToken());
    int n = Integer.parseInt(st.nextToken());
    int[][] a = new int[n][m];
    int[][] check = new int[n][m];
    for (int i = 0; i < n; i++) {
      Arrays.fill(check[i], -1);
    }
    for (int i = 0; i < n; i++) {
      String line = br.readLine();
      for (int j = 0; j < m; j++) {
        a[i][j] = Integer.parseInt(String.valueOf(line.charAt(j)));
      }
    }
    Queue<Pos> q = new LinkedList<Pos>();
    q.add(new Pos(0, 0));
    check[0][0] = 0;
    while (!q.isEmpty()) {
      Pos point = q.remove();
      for (int i = 0; i < dx.length; i++) {
        int x = point.x + dx[i];
        int y = point.y + dy[i];
        if (x >= 0 && y >= 0 && x < n && y < m) {
          if (a[x][y] == 0) {
            if (check[x][y] == -1 || check[x][y] > check[point.x][point.y]) {
              check[x][y] = check[point.x][point.y];
              q.add(new Pos(x, y));
            }
          } else {
            if (check[x][y] == -1 || check[x][y] > check[point.x][point.y] + 1) {
              check[x][y] = check[point.x][point.y] + 1;
              q.add(new Pos(x, y));
            }
          }
        }
      }
    }
    System.out.println(check[n-1][m-1]);
  }
}

class Pos {
  public Pos(int x, int y) {
    this.x = x;
    this.y = y;
	}
int x;
  int y;
}