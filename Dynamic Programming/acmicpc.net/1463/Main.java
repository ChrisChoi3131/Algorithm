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
        int N = Integer.parseInt(br.readLine());
        if(N == 1){
            System.out.println(0);
            return;
        }else if(N ==2 || N == 3){
            System.out.println(1);
            return;
        }
        int D[] = new int[N + 1];
        D[2] = 1;
        D[3] = 1;
        for (int i = 4; i < D.length; i++) {
            if(i%2 ==0){
                if(i%3 ==0){
                    D[i] = Math.min(D[i-1], Math.min(D[i/2], D[i/3]))+1;
                }else{
                    D[i] = Math.min(D[i-1], D[i/2])+1;
                }
            }else{
                if(i%3 ==0){
                    D[i] = Math.min(D[i-1], D[i/3])+1;
                }else{
                    D[i] = D[i-1]+1;
                }                
            }
        }
        System.out.println(D[N]);
    }
}