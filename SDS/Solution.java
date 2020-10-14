import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Solution {
  static final String inputFilePath = "./SDS/sample copy.txt";
  static int[] dx = { -2, -2, -1, -1, 1, 1, 2, 2 };
  static int[] dy = { -1, 1, -2, 2, -2, 2, -1, 1 };

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int t = Integer.parseInt(br.readLine());
    for (int test_case = 1; test_case <= t; test_case++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      int n = Integer.parseInt(st.nextToken());
      int r = Integer.parseInt(st.nextToken()) - 1;
      int c = Integer.parseInt(st.nextToken()) - 1;
      int u = Integer.parseInt(st.nextToken()) - 1;
      int l = Integer.parseInt(st.nextToken()) - 1;
      int[][] check = new int[n][n];
      Point[][] parent = new Point[n][n];
      Queue<Point> q = new LinkedList<Point>();
      q.add(new Point(r, c));
      check[r][c] = 1;
      while (!q.isEmpty()) {
        Point p = q.remove();
        for (int i = 0; i < dx.length; i++) {
          int x = dx[i] + p.x;
          int y = dy[i] + p.y;
          if (x >= 0 && y >= 0 && x < n && y < n) {
            if (check[x][y] == 0) {
              check[x][y] = check[p.x][p.y] + 1;
              parent[x][y] = new Point(p.x, p.y);
              if (x == u && y == l) {
                break;
              }
              q.add(new Point(x, y));
            }
          }
        }
      }
      Queue<Point> tracker = new LinkedList<Point>();

      tracker.add(new Point(u, l));
      int ans = 0;
      int[] dirCnt = new int[8];
      int dirIdx = -1;
      int preDirIdx = -1;
      while (!tracker.isEmpty()) {
        Point p = tracker.remove();
        if (p.x == r && p.y == c) {
          break;
        }
        int x = parent[p.x][p.y].x - p.x;
        int y = parent[p.x][p.y].y - p.y;
        dirIdx = -1;
        for (int i = 0; i < dirCnt.length; i++) {
          if (dx[i] == x && dy[i] == y) {
            dirIdx = i;
          }
        }
        System.out.println(p.x + " " + p.y);
        System.out.println(x + " " + y);
        if (preDirIdx == dirIdx) {
          dirCnt[dirIdx]++;
          if (dirCnt[dirIdx] == 4) {
            dirCnt[dirIdx] = 1;
          }
          if (dirCnt[dirIdx] == 2 || dirCnt[dirIdx] == 3) {
            ans++;
          }
        } else {
          if (preDirIdx == -1) {
            dirCnt[dirIdx] = 1;
          } else {
            dirCnt[preDirIdx] = 0;
            dirCnt[dirIdx] = 1;
          }
        }
        preDirIdx = dirIdx;
        tracker.add(parent[p.x][p.y]);
      }
      System.out.println("#" + test_case + " " + ans);

    }
  }
}

class Point {
  int x;
  int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

}