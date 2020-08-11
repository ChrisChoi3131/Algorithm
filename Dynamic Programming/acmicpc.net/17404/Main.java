import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/17404/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int a[][] = new int[N + 1][3];
        int d[][] = new int[N + 1][3];
        for (int i = 1; i <= N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            a[i][0] = Integer.parseInt(st.nextToken());
            a[i][1] = Integer.parseInt(st.nextToken());
            a[i][2] = Integer.parseInt(st.nextToken());
        }
        int answer = Integer.MAX_VALUE;
        for (int j = 0; j <= 2; j++) {
            if (j == 0) {
                d[1][0] = a[1][j];
                d[1][1] = 99999;
                d[1][2] = 99999;
            } else if (j == 1) {
                d[1][0] = 99999;
                d[1][1] = a[1][j];
                d[1][2] = 99999;
            } else if (j == 2) {
                d[1][0] = 99999;
                d[1][1] = 99999;
                d[1][2] = a[1][j];
            }

            for (int i = 2; i <= N; i++) {
                d[i][0] = Math.min(d[i - 1][1], d[i - 1][2]) + a[i][0];
                d[i][1] = Math.min(d[i - 1][0], d[i - 1][2]) + a[i][1];
                d[i][2] = Math.min(d[i - 1][0], d[i - 1][1]) + a[i][2];
            }
            int minValue = 0;
            if (j == 0) {
                minValue = Math.min(d[N][1], d[N][2]);
            } else if (j == 1) {
                minValue = Math.min(d[N][0], d[N][2]);
            } else if (j == 2) {
                minValue = Math.min(d[N][0], d[N][1]);
            }

            if (answer > minValue) {
                answer = minValue;
            }
        }
        System.out.println(answer);
    }
}