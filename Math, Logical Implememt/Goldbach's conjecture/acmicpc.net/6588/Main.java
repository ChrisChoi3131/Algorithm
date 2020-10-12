import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = 1000000;
        boolean check[] = new boolean[N + 1];
        ArrayList<Integer> prime = new ArrayList<Integer>();

        for (int i = 2; i * i <= N; i++) {
            if (check[i] == true) {
                continue;
            }
            prime.add(i);
            for (int j = i * 2; j <= N; j += i) {
                check[j] = true;
            }
        }
        while (true) {
            int n = Integer.parseInt(br.readLine());
            if (n == 0)
                break;
            for (int i = 1; i < prime.size(); i++) {
                int b = prime.get(i);
                int a = n - b;
                if (check[n - b] == false) {
                    bw.write(n + " = " + b + " + " + a);
                    bw.newLine();
                    break;
                }
            }
        }
        bw.flush();
    }
}