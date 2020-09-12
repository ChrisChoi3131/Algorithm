import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/2667/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    static int[][] d;
    static int[][] a;
    static int N;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        N = Integer.parseInt(br.readLine());
        a = new int[N][N];
        d = new int[N][N];
        for (int i = 0; i < N; i++) {
            String line = br.readLine();
            for (int j = 0; j < N; j++) {
                a[i][j] = Integer.parseInt(line.substring(j, j + 1));
            }
        }
        int cnt = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (a[i][j] == 1 & d[i][j] == 0) {
                    dfs(i, j, ++cnt);
                }
            }
        }
        System.out.println(cnt);
        int[] ans = new int[cnt + 1];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (d[i][j] != 0) {
                    ans[d[i][j]]++;
                }
            }
        }
        Arrays.sort(ans);
        for (int i = 1; i < ans.length; i++) {
            System.out.println(ans[i]);
        }
    }

    public static void dfs(int i, int j, int cnt) {
        if (d[i][j] == 0) {
            d[i][j] = cnt;
        }
        if (i < N - 1 && a[i + 1][j] == 1 && d[i + 1][j] == 0) {
            dfs(i + 1, j, cnt);
        }
        if (j < N - 1 && a[i][j + 1] == 1 && d[i][j + 1] == 0) {
            dfs(i, j + 1, cnt);
        }
        if (i > 0 && a[i - 1][j] == 1 && d[i - 1][j] == 0) {
            dfs(i - 1, j, cnt);
        }
        if (j > 0 && a[i][j - 1] == 1 && d[i][j - 1] == 0) {
            dfs(i, j - 1, cnt);
        }
    }
}