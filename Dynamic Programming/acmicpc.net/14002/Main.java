import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.StringTokenizer;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int a[] = new int[N + 1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        int d[] = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            a[i] = Integer.parseInt(st.nextToken());
            d[i] = 1;
        }
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= i; j++) {
                if (d[i] < d[j] + 1 && a[i] > a[j]) {
                    d[i] = d[j] + 1;
                }
            }
        }
        int answer = 0;
        int maxIdx = 0;
        for (int i = 1; i <= N; i++) {
            if (answer < d[i]){
                answer = d[i];
                maxIdx = i;
            }
        }
        System.out.println(answer);
        ArrayList<Integer> al = new ArrayList<Integer>();
        al.add(a[maxIdx]);

        int maxLength = answer - 1;
        for (int i = maxIdx - 1; i > 0; i--) {
            if (d[i] == maxLength) {
                al.add(a[i]);
                maxLength--;
            }
        }
        for (int i = al.size() - 1; i >= 0; i--) {
            System.out.print(al.get(i));
            if (i != 0) {
                System.out.print(" ");
            }
        }
        System.out.println();
    }
}