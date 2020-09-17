import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/2178/sample.txt";
    static int[][] a;
    static int[][] c;
    static int[] dx = { 0, 0, -1, 1 };
    static int[] dy = { 1, -1, 0, 0 };

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        a = new int[N + 1][M + 1];
        c = new int[N + 1][M + 1];
        for (int i = 1; i <= N; i++) {
            String line = br.readLine();
            for (int j = 1; j <= M; j++) {
                a[i][j] = Integer.parseInt(line.substring(j - 1, j));
            }
        }
        bfs(1, 1);
        System.out.println(c[N][M]);
    }

    public static void bfs(int i, int j) {
        Queue<Pair> q = new LinkedList<>();
        c[i][j] = 1;
        q.add(new Pair(i, j));
        while (!q.isEmpty()) {
            Pair p = q.poll();
            for (int k = 0; k < 4; k++) {
                // System.out.println(p.i + dx[k] + " " + (p.j + dy[k]));
                if (p.i + dx[k] > 0 && p.j + dy[k] > 0 && p.i + dx[k] < c.length && p.j + dy[k] < c[0].length
                        && c[p.i + dx[k]][p.j + dy[k]] == 0 && a[p.i + dx[k]][p.j + dy[k]] == 1) {
                    q.add(new Pair(p.i + dx[k], p.j + dy[k]));
                    c[p.i + dx[k]][p.j + dy[k]] = c[p.i][p.j] + 1;
                }
            }
        }

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