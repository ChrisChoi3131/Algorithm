import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/*
* not use library version 
*/

public class Main {
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/10828/sample.txt";
    static int stack[];
    static int size = 0;
    static int N = 0;

    public static void main(String[] args) throws Exception {
        stack = new int[10000];
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String inputCmd = st.nextToken();
            if (inputCmd.equals("push")) {
                push(Integer.parseInt(st.nextToken()));
            } else if (inputCmd.equals("pop")) {
                System.out.println(pop());
            } else if (inputCmd.equals("size")) {
                System.out.println(size);
            } else if (inputCmd.equals("empty")) {
                if (size == 0) {
                    System.out.println(1);
                } else {
                    System.out.println(0);
                }
            } else if (inputCmd.equals("top")) {
                if (size == 0) {
                    System.out.println(-1);
                } else {
                    System.out.println(stack[size - 1]);
                }
            }
        }
    }

    static int pop() {
        if (size == 0) {
            return -1;
        }
        int returnValue = stack[size - 1];
        size--;
        return returnValue;
    }

    static void push(int insertValue) {
        stack[size] = insertValue;
        size++;
    }

}
