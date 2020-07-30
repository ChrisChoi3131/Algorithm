import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/11057/sample.txt";
    static final int MOD = 10007;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int d[][] = new int[N + 1][10];
        for (int i = 0; i < 10; i++) {
            d[1][i] = 1;
        }
        for (int i = 1; i <= N; i++) {
            for (int j = 0; j <= 9; j++) {
                for (int k = 0; k <= j; k++) {
                    d[i][j] = (d[i][j] + d[i - 1][k]) % MOD;
                }
            }
        }
        int answer = 0;
        for (int i = 0; i < 10; i++) {
            answer = (answer + d[N][i]) % MOD;
        }
        System.out.println(answer);

    }
}