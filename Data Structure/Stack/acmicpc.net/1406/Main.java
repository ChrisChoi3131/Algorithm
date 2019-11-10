import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/1406/sample.txt";
    static Stack<String> left, right;
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        left = new Stack<String>();
        right = new Stack<String>();
        String inpuString = br.readLine();

        for (int i = 0; i < inpuString.length(); i++) {
            left.add(inpuString.substring(i, i+1));
        }
        
        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();

            if("L".equals(cmd)){
                if(!left.isEmpty()){
                    right.add(left.pop());
                }
            }else if("D".equals(cmd)){
                if(!right.isEmpty()){
                    left.add(right.pop());
                }
            }else if("B".equals(cmd)){
                if(!left.isEmpty()){
                    left.pop();
                }
            }else if("P".equals(cmd)){
                left.add(st.nextToken());
            }
        }
        while(!left.isEmpty()){
            right.add(left.pop());
        }
        while(!right.isEmpty()){
            bw.append(right.pop());
        }
        bw.flush();
    }
}