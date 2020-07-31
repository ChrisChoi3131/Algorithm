import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/11055/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a[] = new int[N + 1];
        int d[][] = new int[N + 1][2];
        for (int i = 1; i <= N; i++) {
            a[i] = Integer.parseInt(st.nextToken());
        }
        d[1][1] = a[1];
        for (int i = 2; i <= N; i++) {
            d[i][0] = Math.max(d[i - 1][0], d[i - 1][1]);
            int maxValue = 0;
            for (int j = 1; j < i; j++) {
                if (a[j] < a[i] && maxValue < d[j][1]) {
                    maxValue = d[j][1];
                }
            }
            d[i][1] = maxValue + a[i];
        }
        System.out.println(Math.max(d[N][0], d[N][1]));
    }
}