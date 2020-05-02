import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";
    static final long mod = 1000000000;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        long d[][] = new long[N + 1][10];
        for (int i = 1; i < 10; i++) {
            d[1][i] = 1;
        }
        for (int i = 2; i <= N; i++) {
            for (int j = 0; j < 10; j++) {
                if (j - 1 >= 0)
                    d[i][j] += d[i - 1][j - 1];
                if (j + 1 <= 9)
                    d[i][j] += d[i - 1][j + 1];
                d[i][j] %= mod;
            }
        }
        long answer = 0;
        for (int i = 0; i < 10; i++) {
            answer += d[N][i];
        }
        answer = answer % mod;
        System.out.println(answer);
    }
}