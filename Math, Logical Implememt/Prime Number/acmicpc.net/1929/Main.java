import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
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
        int M = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        boolean check[] = new boolean[N+1];
        int n = N;
        check[0] = check[1] = true;
        
        for (int i = 2; i*i <= N; i++) {
            if(check[i] == true){
                continue;
            }
            for (int j = i*i; j <= N; j+=i) {
                check[j] = true;
            }
        }
        for (int i = M; i <= N; i++) {
            if(check[i] == false){
                bw.write(i+"\n");
            }
        }
        bw.flush();
    }
}