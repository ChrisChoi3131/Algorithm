import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/7576/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] dx = { -1, 1, 0, 0 };
        int[] dy = { 0, 0, -1, 1 };
        int M = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        int[][] a = new int[N + 1][M + 1];
        int[][] c = new int[N + 1][M + 1];
        Queue<Pair> q = new LinkedList<Pair>();
        for (int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 1; j <= M; j++) {
                a[i][j] = Integer.parseInt(st.nextToken());
                c[i][j] = -1;
                if (a[i][j] == 1) {
                    q.add(new Pair(i, j));
                    c[i][j] = 0;
                }
            }
        }
        while (!q.isEmpty()) {
            Pair p = q.poll();
            for (int k = 0; k < 4; k++) {
                int x = p.i + dx[k];
                int y = p.j + dy[k];
                if (x > 0 && x <= N && y > 0 && y <= M) {
                    if (c[x][y] == -1 && a[x][y] == 0) {
                        q.add(new Pair(x, y));
                        c[x][y] = c[p.i][p.j] + 1;
                    }
                }
            }
        }
        int ans = 0;
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= M; j++) {
                if (ans < c[i][j]) {
                    ans = c[i][j];
                }
            }
        }
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= M; j++) {
                if (a[i][j] == 0 && c[i][j] == -1) {
                    ans = -1;
                }
            }
        }
        System.out.println(ans);
    }

}

class Pair {
    int i;
    int j;

    public Pair(int i, int j) {
        this.i = i;
        this.j = j;
    }
}
