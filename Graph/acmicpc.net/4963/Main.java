import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/4963/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    static int a[][];
    static boolean c[][];

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        while (true) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int w = Integer.parseInt(st.nextToken());
            int h = Integer.parseInt(st.nextToken());
            if (w == 0 && h == 0) {
                break;
            }
            a = new int[h + 2][w + 2];
            c = new boolean[h + 2][w + 2];
            for (int i = 1; i <= h; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j = 1; j <= w; j++) {
                    a[i][j] = Integer.parseInt(st.nextToken());
                }
            }
            int cnt = 0;
            for (int i = 1; i <= h; i++) {
                for (int j = 1; j <= w; j++) {
                    if (a[i][j] == 1 && c[i][j] == false) {
                        dfs(i, j);
                        cnt++;
                    }
                }
            }
            System.out.println(cnt);
        }
    }

    public static void dfs(int i, int j) {
        if (c[i][j] == false) {
            c[i][j] = true;
        }
        if (a[i - 1][j - 1] == 1 && i > 1 && j > 1) {
            if (c[i - 1][j - 1] == false) {
                dfs(i - 1, j - 1);
            }
        }
        if (a[i - 1][j] == 1 && i > 1) {
            if (c[i - 1][j] == false) {
                dfs(i - 1, j);
            }
        }
        if (j < a[i].length && a[i - 1][j + 1] == 1 && i > 1) {
            if (c[i - 1][j + 1] == false) {
                dfs(i - 1, j + 1);
            }
        }
        if (a[i][j - 1] == 1 && j > 1) {
            if (c[i][j - 1] == false) {
                dfs(i, j - 1);
            }
        }
        if (a[i][j + 1] == 1 && j < a[i].length) {
            if (c[i][j + 1] == false) {
                dfs(i, j + 1);
            }
        }
        if (a[i + 1][j - 1] == 1 && i < a.length && j > 1) {
            if (c[i + 1][j - 1] == false) {
                dfs(i + 1, j - 1);
            }
        }
        if (a[i + 1][j] == 1 && i < a.length) {
            if (c[i + 1][j] == false) {
                dfs(i + 1, j);
            }
        }
        if (a[i + 1][j + 1] == 1 && i < a.length && j < a[i].length) {
            if (c[i + 1][j + 1] == false) {
                dfs(i + 1, j + 1);
            }
        }
    }

}