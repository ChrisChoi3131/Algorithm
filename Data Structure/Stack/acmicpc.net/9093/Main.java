import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

class Main{
    static Stack<Character> stack;
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/9093/sample.txt";
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        stack = new Stack<Character>();        for (int i = 0; i < T; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            while(st.hasMoreTokens()){
                String tmp = st.nextToken();
                for (int j = 0; j < tmp.length(); j++) {
                    stack.add(tmp.charAt(j));
                }
                while(!stack.isEmpty()){
                    bw.write(stack.pop());
                }
                bw.write(" ");
            }
            bw.newLine();;
        }
     bw.flush();   
    }
    
}