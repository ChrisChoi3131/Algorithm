import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/11724/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    static ArrayList<Integer>[] a;
    static boolean[] c;
    public static void dfs(int v) {
        c[v] = true;
        for (int i = 0; i < a[v].size(); i++) {
            int child = a[v].get(i);
            if (c[child] == false) {
                dfs(child);
            }
        }
    }
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        a = new ArrayList[N + 1];
        for (int i = 1; i <= N; i++) {
            a[i] = new ArrayList<Integer>();
        }
        for (int i = 1; i <= M; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            a[x].add(y);
            a[y].add(x);
        }
        c = new boolean[N + 1];
        int answer = 0;
        for (int i = 1; i <= N; i++) {
            if (c[i] == false) {
                dfs(i);
                answer++;
            }
        }
        System.out.println(answer);
    }   
}