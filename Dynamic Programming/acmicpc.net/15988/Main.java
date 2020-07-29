import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/15988/sample.txt";
    static final int NUMBER = 1000000009;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        long d[][] = new long[1000001][4];
        d[1][1] = 1;
        d[2][1] = 1;
        d[2][2] = 1;
        d[3][1] = 2;
        d[3][2] = 1;
        d[3][3] = 1;

        for (int i = 4; i < d.length; i++) {
            for (int j = 1; j <= 3; j++) {
                d[i][j] = (d[i - j][1] + d[i - j][2] + d[i - j][3]) % NUMBER;
            }
        }

        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            System.out.println((d[N][1] + d[N][2] + d[N][3]) % NUMBER);
        }
    }
}