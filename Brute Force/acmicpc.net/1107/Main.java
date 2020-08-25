import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Brute Force/acmicpc.net/1107/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    static boolean brokenBtn[] = new boolean[10];

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < M; i++) {
            brokenBtn[Integer.parseInt(st.nextToken())] = true;
        }
        int ans = N - 100;
        if (ans < 0) {
            ans = -ans;
        }
        for (int i = 0; i <= 1000000; i++) {
            if (possible(i)) {
                if (ans > Math.abs(i - N) + String.valueOf(i).length()) {
                    ans = Math.abs(i - N) + String.valueOf(i).length();
                }
            }
        }
        System.out.println(ans);
    }

    public static boolean possible(int num) {
        if (num == 0) {
            if (brokenBtn[0]) {
                return false;
            } else {
                return true;
            }
        }
        if (brokenBtn[num % 10]) {
            return false;
        } else {
            return possible(num / 10);
        }
    }
}