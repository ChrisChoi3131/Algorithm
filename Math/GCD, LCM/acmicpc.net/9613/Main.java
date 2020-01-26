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
        int T = Integer.parseInt(br.readLine());
        for (int test_case = 1; test_case <= T; test_case++) {
            ArrayList<Integer> al = new ArrayList<Integer>();
            StringTokenizer st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            while(st.hasMoreTokens()){
                al.add(Integer.parseInt(st.nextToken()));
            }
            long ans = 0;
            for (int i = 0; i < al.size()-1; i++) {
                for (int j = i+1; j < al.size(); j++) {
                    if(i != j){
                        ans+= gdc(al.get(i), al.get(j));
                    }
                }
            }
            System.out.println(ans);
        }        
    }
    static int gdc (int a, int b){
        if(b==0){
            return a;
        }else{
            return gdc(b, a%b);
        }
    }
}