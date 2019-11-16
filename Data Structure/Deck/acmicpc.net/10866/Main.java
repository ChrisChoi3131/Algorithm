import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.StringTokenizer;

// ArrayList version 

class Main {
    static final String inputFilePath = "./Data Structure/Deck/acmicpc.net/10866/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        ArrayList<Integer> deque = new ArrayList<Integer>();
        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            if (cmd.equals("push_front")) {
                int X = Integer.parseInt(st.nextToken());
                deque.add(0, X);
            } else if (cmd.equals("push_back")) {
                int X = Integer.parseInt(st.nextToken());
                deque.add(X);
            } else if (cmd.equals("pop_front")) {
                if(!deque.isEmpty()){
                    bw.write(deque.get(0)+"\n");
                    deque.remove(0);
                }else{
                    bw.write(-1+"\n");
                }
            } else if (cmd.equals("pop_back")) {
                if(!deque.isEmpty()){
                    bw.write(deque.get(deque.size()-1)+"\n");
                    deque.remove(deque.size()-1);
                }else{
                    bw.write(-1+"\n");
                }
            } else if (cmd.equals("front")) {
                if(!deque.isEmpty()){
                    bw.write(deque.get(0)+"\n");
                }else{
                    bw.write(-1+"\n");
                }
            } else if (cmd.equals("back")) {
                if(!deque.isEmpty()){
                    bw.write(deque.get(deque.size()-1)+"\n");
                }else{
                    bw.write(-1+"\n");
                }
            } else if (cmd.equals("size")) {
                bw.write(deque.size()+"\n");
            } else if (cmd.equals("empty")) {
                if(!deque.isEmpty()){
                    bw.write(0+"\n");
                }else{
                    bw.write(1+"\n");
                }
            }
        }
        bw.flush();

    }
}