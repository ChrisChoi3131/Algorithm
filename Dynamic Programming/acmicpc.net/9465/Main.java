import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/9465/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            int a[][] = new int[N + 1][3];
            int d[][] = new int[N + 1][3];
            StringTokenizer line1 = new StringTokenizer(br.readLine());
            StringTokenizer line2 = new StringTokenizer(br.readLine());
            for (int j = 1; j <= N; j++) {
                a[j][1] = Integer.parseInt(line1.nextToken());
                a[j][2] = Integer.parseInt(line2.nextToken());
            }

            d[1][0] = 0;
            d[1][1] = a[1][1];
            d[1][2] = a[1][2];
            for (int j = 2; j <= N; j++) {
                d[j][0] = Math.max(d[j - 1][1], d[j - 1][2]) + a[j][0];
                d[j][1] = Math.max(d[j - 1][0], d[j - 1][2]) + a[j][1];
                d[j][2] = Math.max(d[j - 1][0], d[j - 1][1]) + a[j][2];
            }
            System.out.println(Math.max(Math.max(d[N][0], d[N][1]), d[N][2]));
        }
    }
}