import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";
    static final long number = 1000000009;
    static final int maxN = 100000;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        long D[][] = new long[maxN + 1][4];
        for (int i = 1; i <= maxN; i++) {
            if (i == 1) {
                D[i][1] = 1;
            } else if (i == 2) {
                D[i][1] = D[i - 1][2] + D[i - 1][3];
                D[i][2] = 1;
            } else if (i == 3) {
                D[i][1] = D[i - 1][2] + D[i - 1][3];
                D[i][2] = D[i - 2][1] + D[i - 2][3];
                D[i][3] = 1;
            } else {
                D[i][1] = (D[i - 1][2] + D[i - 1][3]);
                D[i][2] = (D[i - 2][1] + D[i - 2][3]);
                D[i][3] = (D[i - 3][1] + D[i - 3][2]);
            }
            D[i][1] %= number;
            D[i][2] %= number;
            D[i][3] %= number;
        }
        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            System.out.println((D[N][1] + D[N][2] + D[N][3])%number);
        }
    }
}