import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        if (n == 0) {
            System.out.println(0);
        } else {
            go(n);
            System.out.println();
        }

    }

    public static void go(int n) {
        if (n == 0) {
            return;
        }
        if (n % 2 == 0) {
            go(n / -2);
            System.out.print(0);
        } else {
            if (n > 0) {
                go(n / -2);
                System.out.print(1);
            } else if (n < 0) {
                go((n - 1) / -2);
                System.out.print(1);
            }
        }
    }
}