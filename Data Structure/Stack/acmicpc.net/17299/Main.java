import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./format/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        Stack<Integer> s = new Stack<Integer>();
        int inputArr[] = new int[N+1];
        int count[] = new int[1000001];
        int answer[] = new int[N+1];
        for (int i = 1; i <= N; i++){
            inputArr[i] = Integer.parseInt(st.nextToken());
            count[inputArr[i]]++;
        }
        for (int i = 1; i <= N; i++){
            if(s.isEmpty()){
                s.push(i);
            }else{
                while(!s.isEmpty() && count[inputArr[s.peek()]] < count[inputArr[i]]){
                    answer[s.pop()] = inputArr[i];
                }
                s.push(i);
            }
        }
        while(!s.isEmpty()){
            answer[s.pop()] = -1;
        }
        for (int i = 1; i <= N; i++) {
            bw.write(answer[i]+" ");
        }
        bw.newLine();
        bw.flush();
    }
}