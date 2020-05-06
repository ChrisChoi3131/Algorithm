import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    // static final int mod = 1000000000;
    static final String inputFilePath = "./# format/sample.txt";

    static String a[][];
    static int N;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int E = Integer.parseInt(st.nextToken());
        int S = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int idx = 0;
        int e = 0;
        int s = 0;
        int m = 0;
        while (true) {
            e++;
            s++;
            m++;
            if (e % 16 == 0)
                e = 1;

            if (s % 29 == 0)
                s = 1;
            if (m % 20 == 0)
                m = 1;
            idx++;
            if (e == E && s == S && m == M) {
                break;
            }
        }
        System.out.println(idx);
    }
}