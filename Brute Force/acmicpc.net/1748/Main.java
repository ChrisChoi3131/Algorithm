import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {
    static final String inputFilePath = "./Brute Force/acmicpc.net/1748/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        long answer = 0;
        for (int start = 1, len = 1; start <= N; start *= 10, len++) {
            int end = start * 10 - 1;
            if (end > N) {
                end = N;
            }
            answer += (long) (end - start + 1) * len;
        }
        System.out.println(answer);
    }
}