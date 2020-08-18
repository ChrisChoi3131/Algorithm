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
        System.out.println(System.getProperty("user.dir"));
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

    }
}