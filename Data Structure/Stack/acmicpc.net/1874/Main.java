import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Stack;

class Main {
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/1874/sample.txt";
    static int size = 0;
    static int N = 0;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        N = Integer.parseInt(br.readLine());
        int currIdx = 1;
        Stack<Integer> stack = new Stack<Integer>();
        ArrayList<String> answer = new ArrayList<String>();

        boolean isNO = false;
        for (int i = 1; i <= N; i++) {
            int target = Integer.parseInt(br.readLine());
            while(true){
                if(stack.size()== 0){
                    stack.add(currIdx);
                    currIdx++;
                    answer.add("+");
                }

                if(stack.peek() != target && currIdx <= target){
                    stack.add(currIdx);
                    currIdx++;
                    answer.add("+");
                }else if(stack.peek() != target && currIdx > target){
                    isNO = true;
                    break;
                }else if(stack.peek()==target){
                    stack.pop();
                    answer.add("-");
                    break;
                }else{

                }
            }
        }
        if(isNO){
            System.out.println("NO");
        }else{
            for (int i = 0; i < answer.size(); i++) {
                bw.append(answer.get(i));
                bw.newLine();
            }
            bw.flush();
        }
    }
}
