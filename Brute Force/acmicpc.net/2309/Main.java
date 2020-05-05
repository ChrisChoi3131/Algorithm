import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.StringTokenizer;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    static final String inputFilePath = "./# format/sample.txt";
    static final int mod = 1000000000;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        ArrayList<Integer> al = new ArrayList<Integer>();
        int sum = 0;
        for (int i = 0; i < 9; i++) {
            al.add(Integer.parseInt(br.readLine()));
            sum += al.get(i);
        }
        int idxI = 0;
        int idxJ = 0;
        outer: for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if(i!=j){
                    int compare = sum;
                    if (compare - al.get(i) - al.get(j) == 100) {
                        idxI = i;
                        idxJ = j;
                        break outer;
                    }
                }
            }
        }
        ArrayList<Integer> answer = new ArrayList<Integer>();        
        for (int i = 0; i < al.size(); i++) {
            if(i!= idxI && i != idxJ)
                answer.add(al.get(i));
        }
        Collections.sort(answer);
        for (int i = 0; i < answer.size(); i++) {
            System.out.println(answer.get(i));
        }
        
    }
}