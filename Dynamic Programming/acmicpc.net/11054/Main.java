import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Dynamic Programming/acmicpc.net/11054/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a[] = new int[N + 1];
        for (int i = 1; i < a.length; i++) {
            a[i] = Integer.parseInt(st.nextToken());
        }
        int d1[] = new int[N + 1];
        int d2[] = new int[N + 1];
        d1[1] = 1;
        d2[N] = 1;
        for (int i = 2; i < d1.length; i++) {
            int max = 0;
            for (int j = 1; j < i; j++) {
                if (a[i] > a[j] && max < d1[j]) {
                    max = d1[j];
                }
            }
            d1[i] = max + 1;
        }
        for (int i = N - 1; i > 0; i--) {
            int max = 0;
            for (int j = i; j < N + 1; j++) {
                if (a[i] > a[j] && max < d2[j]) {
                    max = d2[j];
                }
            }
            d2[i] = max + 1;
        }
        int answer = 0;
        for (int i = 1; i < d1.length; i++) {
            if (answer < d1[i] + d2[i] - 1) {
                answer = d1[i] + d2[i] - 1;
            }
        }
        System.out.println(answer);
    }
}