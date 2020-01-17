import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

class Main {
    // static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/1406/sample.txt";
    // static final String inputFilePath = "./format/sample.txt";
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        Stack<Integer> stack = new Stack<Integer>();
        int arr[] = new int[N];
        int answer[] = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        for (int i = 0; i < N; i++) {
            if(!stack.empty()){
                while(true){
                    int b = arr[stack.peek()];
                    if(arr[i] > b){
                        answer[stack.peek()] = arr[i];
                        stack.pop();
                    }else if(arr[i] <= b){
                        stack.push(i);
                        break;
                    }
                    if(stack.empty()){
                        stack.push(i);
                        break;
                    }
                }
            }else{
                stack.push(i);
            }
        }

        while(!stack.isEmpty()){
            answer[stack.pop()] = -1;
        }
        for (int i = 0; i < arr.length; i++) {
            bw.append(String.valueOf(answer[i]));
            if(i!=arr.length-1){
                bw.append(" ");
            }
        }
        bw.flush();
    }
}