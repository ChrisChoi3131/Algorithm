import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/11722/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a[] = new int[N + 1];
        int d[] = new int[N + 1];
        for (int i = 1; i < N + 1; i++) {
            a[i] = Integer.parseInt(st.nextToken());
        }
        d[N] = 1;
        for (int i = N - 1; i > 0; i--) {
            int max = 0;
            for (int j = i; j < N + 1; j++) {
                if (a[i] > a[j] && max < d[j]) {
                    max = d[j];
                }
            }
            d[i] = max + 1;
        }
        int answer = 0;
        for (int i = 1; i < N + 1; i++) {
            if (answer < d[i]) {
                answer = d[i];
            }
        }
        System.out.println(answer);
    }
}