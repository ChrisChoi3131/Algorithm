import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/2156/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int a[] = new int[N + 1];
        int d[][] = new int[N + 1][3];
        for (int i = 1; i <= N; i++) {
            a[i] = Integer.parseInt(br.readLine());
        }
        d[1][1] = a[1];
        d[1][2] = a[1];
        for (int i = 2; i <= N; i++) {
            d[i][0] = Math.max(Math.max(d[i - 1][0], d[i - 1][1]), d[i - 1][2]);
            d[i][1] = d[i - 1][0] + a[i];
            d[i][2] = d[i - 1][1] + a[i];
        }
        System.out.println(Math.max(Math.max(d[N][0], d[N][1]), d[N][2]));
    }
}