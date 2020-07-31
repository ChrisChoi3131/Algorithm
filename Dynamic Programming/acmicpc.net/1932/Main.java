import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/1932/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int a[][] = new int[N + 1][N + 1];
        int d[][] = new int[N + 1][N + 1];
        for (int i = 1; i <= N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int idx = 1;
            while (st.hasMoreTokens()) {
                a[i][idx] = Integer.parseInt(st.nextToken());
                idx++;
            }
        }
        d[1][1] = a[1][1];
        for (int i = 2; i <= N; i++) {
            for (int j = 1; j <= i; j++) {
                d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + a[i][j];
            }
        }
        int answer = 0;
        for (int i = 1; i <= N; i++) {
            if (answer < d[N][i]) {
                answer = d[N][i];
            }
        }
        System.out.println(answer);
    }
}