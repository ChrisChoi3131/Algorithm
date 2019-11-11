import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Data Structure/Queue/acmicpc.net/10845/sample.txt";
    static int n;
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        n = Integer.parseInt(br.readLine());
        int queue[] = new int[99999];
        int begin = 0;
        int end = 0;

        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            if(cmd.equals("push")){
                queue[end] = Integer.parseInt(st.nextToken());
                end++;
            }else if(cmd.equals("pop")){
                int size = end - begin;
                if(size == 0){
                    bw.write(-1+"\n");                    
                }else{
                    bw.write(queue[begin]+"\n");
                    begin++;
                }
            }else if(cmd.equals("size")){
                int size = end - begin;
                bw.write(size+"\n");
            }else if(cmd.equals("empty")){
                int size = end - begin;
                if(size == 0){
                    bw.write(1+"\n");
                }else{
                    bw.write(0+"\n");
                }
            }else if(cmd.equals("front")){
                int size = end - begin;
                if(size == 0){
                    bw.write(-1+"\n");
                }else{
                    bw.write(queue[begin]+"\n");
                }
            }else if(cmd.equals("back")){
                int size = end - begin;
                if(size == 0){
                    bw.write(-1+"\n");
                }else{
                    bw.write(queue[end-1]+"\n");
                }
            }
        }
        bw.flush();
    }
}