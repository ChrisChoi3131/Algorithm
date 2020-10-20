import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

class Main {
  static final String inputFilePath = "./Graph/acmicpc.net/14226/sample.txt";

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream(inputFilePath));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    int s = Integer.parseInt(br.readLine());
    int[][] d = new int[s + 1][s + 1];
    for (int i=0; i<=s; i++) {
      Arrays.fill(d[i], -1);
  }
    d[1][0] = 0;
    Queue<Pos> q = new LinkedList<Pos>();
    q.add(new Pos(1,0));
    while (!q.isEmpty()) {
      Pos p = q.remove();
      if (d[p.s][p.s] == -1) {
        d[p.s][p.s] = d[p.s][p.c] + 1;
        q.add(new Pos(p.s, p.s));
      }
      if (p.s + p.c <= s && d[p.s + p.c][p.c] == -1) {
        d[p.s + p.c][p.c] = d[p.s][p.c] + 1;
        q.add(new Pos(p.s + p.c, p.c));
      }
      if (p.s - 1 >= 0 && d[p.s - 1][p.c] == -1) {
        d[p.s - 1][p.c] = d[p.s][p.c] + 1;
        q.add(new Pos(p.s - 1, p.c));
      }
    }
    int ans = -1;
    for (int i=0; i<=s; i++) {
        if (d[s][i] != -1) {
            if (ans == -1 || ans > d[s][i]) {
                ans = d[s][i];
            }
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