import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

class Main {
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/17413/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String str = br.readLine();
        Stack<Character> s = new Stack<Character>();
        boolean tag = false;

        for (char ch : str.toCharArray()) {
            if (ch == '<') {
                print(bw,s);
                tag = true;
                bw.write(ch);
            } else if (ch == '>') {
                tag = false;
                bw.write(ch);
            } else if (tag) {
                bw.write(ch);
            } else {
                if(ch ==' '){
                    print(bw,s);
                    bw.write(ch);
                }else{
                    s.push(ch);
                } 
            }
        }
        print(bw,s);
        bw.write("\n");
        bw.flush();
    }

    static void print(BufferedWriter bw, Stack<Character> s) throws IOException {
        while(!s.isEmpty()){
            bw.write(s.pop());
        }
    }

}