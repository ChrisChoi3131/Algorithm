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
        if(n==1){
            System.out.println(1);
            return;
        }else if(n==2){
            System.out.println(2);
            return;
        }
        
        int d[] = new int[n+1];

        d[1] = 1;
        d[2] = 2;
        for (int i = 3; i <= n; i++) {
            d[i] = (d[i-1] + d[i-2])%10007;
        }
        System.out.println(d[n]);
    }
}