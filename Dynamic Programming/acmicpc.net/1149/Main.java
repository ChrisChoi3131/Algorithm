import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/1149/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int a[][] = new int[N][3];
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            a[i][0] = Integer.parseInt(st.nextToken());
            a[i][1] = Integer.parseInt(st.nextToken());
            a[i][2] = Integer.parseInt(st.nextToken());
        }
        int d[][] = new int[N][3];
        d[0][0] = a[0][0];
        d[0][1] = a[0][1];
        d[0][2] = a[0][2];
        for (int i = 1; i < N; i++) {
            d[i][0] = Math.min(d[i - 1][1], d[i - 1][2]) + a[i][0];
            d[i][1] = Math.min(d[i - 1][0], d[i - 1][2]) + a[i][1];
            d[i][2] = Math.min(d[i - 1][0], d[i - 1][1]) + a[i][2];
        }
        System.out.println(Math.min(Math.min(d[N - 1][0], d[N - 1][1]), d[N - 1][2]));
    }
}