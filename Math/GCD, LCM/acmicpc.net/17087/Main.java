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
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int S = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        int arr[] = new int[N];
        int i = 0;
        while (st.hasMoreTokens()) {
            arr[i++] = Math.abs(S - Integer.parseInt(st.nextToken()));
        }
        int min = arr[0];
        for (int j = 0; j < N - 1; j++) {
            int gdc = gdc(arr[j], arr[j + 1]);
            if (min > gdc) {
                min = gdc;
            }
        }
        System.out.println(min);
    }

    static int gdc(int a, int b) {
        if (a % b == 0) {
            return b;
        } else {
            return gdc(b, a % b);
        }
    }

}