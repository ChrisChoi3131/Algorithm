import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Data Structure/Queue/acmicpc.net/1158/sample.txt";

    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        Queue<Integer> queue = new LinkedList<Integer>();
        int n;
        int k;

        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());


        for (int i = 1; i <= n; i++) {
            queue.add(i);
        }
        int index = 0;        
        bw.write("<");
        while(true){
            index++;
            if(queue.size() ==0) break;
            if(index%k!=0){
                queue.add(queue.poll());
            }else{
                bw.write(String.valueOf(queue.poll()));
                if(queue.size()!=0) bw.write(", ");
            }
        }
        bw.write(">");
        bw.flush();
        bw.close();
    }
}