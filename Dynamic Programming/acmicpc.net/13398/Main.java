import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/13398/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a[] = new int[N + 1];
        int d1[] = new int[N + 1];
        int d2[] = new int[N + 1];
        for (int i = 1; i < N + 1; i++) {
            a[i] = Integer.parseInt(st.nextToken());
        }
        for (int i = 1; i < N + 1; i++) {
            d1[i] = Math.max(a[i], d1[i - 1] + a[i]);
        }
        for (int i = N; i > 0; i--) {
            d2[i] = a[i];
            if (i < N) {
                d2[i] = Math.max(a[i], d2[i + 1] + a[i]);
            }
        }
        int answer = d1[1];
        for (int i = 1; i < N + 1; i++) {
            if (answer < d1[i]) {
                answer = d1[i];
            }
        }
        for (int i = 1; i < N; i++) {
            if (answer < d1[i - 1] + d2[i + 1]) {
                answer = d1[i - 1] + d2[i + 1];
            }
        }

        System.out.println(answer);
    }
}