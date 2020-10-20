import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/BFS/14226/sample.txt";

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int n = Integer.parseInt(br.readLine());
    int d[][] = new int[n + 1][n + 1];
    for (int i = 0; i <= n; i++) {
      Arrays.fill(d[i], -1);
    }
    Queue<Pos> q = new LinkedList<Pos>();
    d[1][0] = 0;
    q.add(new Pos(1, 0));
    while (!q.isEmpty()) {
      Pos p = q.remove();
      int s = p.s;
      int c = p.c;
      if (d[s][s] == -1) {
        d[s][s] = d[s][c] + 1;
        q.add(new Pos(s, s));
      }
      if (s + c <= n && d[s + c][c] == -1) {
        d[s + c][c] = d[s][c] + 1;
        q.add(new Pos(s + c, c));
      }
      if (s - 1 >= 0 && d[s - 1][c] == -1) {
        d[s - 1][c] = d[s][c] + 1;
        q.add(new Pos(s - 1, c));
      }
    }
    int ans = Integer.MAX_VALUE;
    for (int i = 0; i <= n; i++) {
      if (d[n][i] < ans && d[n][i] >= 1) {
        ans = d[n][i];
      }
    }
    System.out.println(ans);
  }
}

class Pos {
  int s;
  int c;

  public Pos(int s, int c) {
    this.s = s;
    this.c = c;
  }
}