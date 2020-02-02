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
        int intData[] = {0,1,10,11,100,101,110,111};
        String formatData[] = {"000","001","010","011","100","101","110","111"};
        sb.append(intData[s.charAt(0)-'0']);
        for (int i = 1; i < s.length(); i++) {
            sb.append(formatData[s.charAt(i)-'0']);
        }
        System.out.println(sb.toString());
    }
}