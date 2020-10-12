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
        int T = Integer.parseInt(br.readLine());
        final int N = 1000001;
        boolean check[] = new boolean[N];
        for (int i = 2; i < N; i++) {
            if(check[i] == false){
                for (int j = i+i; j < N; j+=i) {
                    check[j] = true;
                }
            }
        }

        for (int i = 0; i < T; i++) {
            int n = Integer.parseInt(br.readLine());
            int answer  = 0;
            for (int j = 2; j <= n/2; j++) {
                if(!check[j] && !check[n-j]){
                    answer++;
                }
            }
            System.out.println(answer);
        }
    }
}