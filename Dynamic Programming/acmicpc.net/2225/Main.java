import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.StringTokenizer;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";
    static final int mod = 1000000000;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        long d[][] = new long[201][201];
        d[0][0] = 1;

        for (int i = 1; i <= K; i++) {
            for (int j = 0; j <= N; j++) {
                for (int l = 0; l <= j; l++) {
                    d[i][j] += d[i - 1][j - l];
                    d[i][j] %= mod;
                }
            }
        }
        System.out.println(d[K][N]);
    }
}