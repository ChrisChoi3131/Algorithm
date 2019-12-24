import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

class Main {
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/10799/sample.txt";

    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        Stack<Character> s = new Stack<Character>();

        String str = br.readLine();
        int answer = 0;
        char[] charArr = str.toCharArray();
        for (int i=0; i<charArr.length; i++) {
            if(charArr[i] == '('){
                if(charArr[i+1] == '('){
                    s.add(charArr[i]);
                }else if(charArr[i+1] == ')'){
                    answer +=s.size();
                }
            }else if(charArr[i] == ')'){
                if(charArr[i-1] == '('){
                    //pass
                }else if(charArr[i-1] == ')'){
                    s.pop();
                    answer++;
                }
            }
        }
        System.out.println(answer);
    }
}