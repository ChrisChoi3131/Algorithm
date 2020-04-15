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
        String s = br.readLine();
        StringBuilder sb = new StringBuilder();
        int n = s.length();
        if(n%3 == 1){
            sb.append(s.charAt(0));
        }else if(n%3 == 2) {
            sb.append((s.charAt(0)-'0') *2 + (s.charAt(1)-'0'));
        }
        for (int i = n%3; i < n; i+=3) {
            sb.append((s.charAt(i)-'0') *4  + (s.charAt(i+1)-'0') *2 + (s.charAt(i+2)-'0'));
        }
        System.out.println(sb.toString());
    }
}