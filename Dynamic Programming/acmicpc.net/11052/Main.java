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
        int N = Integer.parseInt(br.readLine());
        int P[] = new int[N+1];
        int D[] = new int[N+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        int idx=1;
        while(st.hasMoreElements()){
            P[idx] = Integer.parseInt(st.nextToken());
            idx++;
        }

        for(int i=1; i<=N; i++){
            for (int j = 1; j <=i; j++) {
                D[i] = Math.max(D[i], D[i-j] + P[j]);
            }
        }
        System.out.println(D[N]);
    }
}