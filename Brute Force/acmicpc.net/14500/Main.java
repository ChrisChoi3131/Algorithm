import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Brute Force/acmicpc.net/14500/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int a[][] = new int[N][M];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                a[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        int ans = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (j + 3 < M) {
                    int temp = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i][j + 3];
                    if (ans < temp) {
                        ans = temp;
                    }
                }
                if (i + 3 < N) {
                    int temp = a[i][j] + a[i + 1][j] + a[i + 2][j] + a[i + 3][j];
                    if (ans < temp) {
                        ans = temp;
                    }
                }
                if (i + 1 < N && j + 1 < M) {
                    int temp = a[i][j] + a[i][j + 1] + a[i + 1][j] + a[i + 1][j + 1];
                    if (ans < temp) {
                        ans = temp;
                    }
                }
                if (i + 2 < N && j + 1 < M) {// 5
                    int temp = a[i][j] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 2][j + 1];
                    int temp2 = a[i][j + 1] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 2][j];
                    if (ans < Math.max(temp, temp2)) {
                        ans = Math.max(temp, temp2);
                    }
                }
                if (i + 1 < N && j + 2 < M) {// 7
                    int temp = a[i + 1][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i][j + 2];
                    int temp2 = a[i][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i + 1][j + 2];
                    if (ans < Math.max(temp, temp2)) {
                        ans = Math.max(temp, temp2);
                    }
                }
                if (i + 2 < N && j + 1 < M) {// 5
                    int temp1 = a[i][j] + a[i + 1][j] + a[i + 2][j] + a[i + 2][j + 1];
                    int temp2 = a[i][j + 1] + a[i + 1][j + 1] + a[i + 2][j + 1] + a[i + 2][j];
                    int temp3 = a[i][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i + 2][j + 1];
                    int temp4 = a[i][j] + a[i][j + 1] + a[i + 1][j] + a[i + 2][j];
                    if (ans < Math.max(Math.max(temp1, temp2), Math.max(temp3, temp4))) {
                        ans = Math.max(Math.max(temp1, temp2), Math.max(temp3, temp4));
                    }
                }
                if (i + 1 < N && j + 2 < M) {// 5
                    int temp1 = a[i][j] + a[i + 1][j] + a[i][j + 1] + a[i][j + 2];
                    int temp2 = a[i][j] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 1][j + 2];
                    int temp3 = a[i + 1][j] + a[i + 1][j + 1] + a[i + 1][j + 2] + a[i][j + 2];
                    int temp4 = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 2];
                    if (ans < Math.max(Math.max(temp1, temp2), Math.max(temp3, temp4))) {
                        ans = Math.max(Math.max(temp1, temp2), Math.max(temp3, temp4));
                    }
                }
                if (i + 2 < N && j + 1 < M) {// 5
                    int temp1 = a[i][j] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 2][j];
                    int temp2 = a[i][j + 1] + a[i + 1][j + 1] + a[i + 1][j] + a[i + 2][j + 1];
                    if (ans < Math.max(temp1, temp2)) {
                        ans = Math.max(temp1, temp2);
                    }
                }
                if (i + 1 < N && j + 2 < M) {// 5
                    int temp1 = a[i][j + 1] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 1][j + 2];
                    int temp2 = a[i][j] + a[i + 1][j + 1] + a[i][j + 1] + a[i][j + 2];
                    if (ans < Math.max(temp1, temp2)) {
                        ans = Math.max(temp1, temp2);
                    }
                }
            }
        }
        System.out.println(ans);
    }
}