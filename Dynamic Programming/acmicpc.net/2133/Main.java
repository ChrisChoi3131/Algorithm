import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/2133/sample.txt";

    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int d[] = new int[N + 1];
        d[0] = 1;
        for (int i = 2; i <= N; i++) {
            d[i] = 3 * d[i - 2];
            for (int j = 4; j <= i; j += 2) {
                d[i] = d[i] + 2 * d[i - j];
            }
        }
        System.out.println(d[N]);
    }
}