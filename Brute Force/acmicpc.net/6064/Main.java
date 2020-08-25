import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Brute Force/acmicpc.net/6064/sample.txt";

    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        for (int test_case = 0; test_case < T; test_case++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int M = Integer.parseInt(st.nextToken());
            int N = Integer.parseInt(st.nextToken());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            boolean isValid = false;
            for (int k = x; k <= (M * N); k += M) {
                if (k % N == y) {
                    System.out.println(k);
                    isValid = true;
                    break;
                }
            }
            if (!isValid) {
                System.out.println(-1);
            }
        }
    }
}