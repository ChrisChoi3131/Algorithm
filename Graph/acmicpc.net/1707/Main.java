import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/1707/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";
    static ArrayList<Integer>[] a;
    static int[] c;
    static final int NOTVISITED = 0;
    static final int RED = 1;
    static final int BLUE = 2;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int K = Integer.parseInt(br.readLine());
        for (int test_case = 0; test_case < K; test_case++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int V = Integer.parseInt(st.nextToken());
            int E = Integer.parseInt(st.nextToken());
            a = new ArrayList[V + 1];
            for (int i = 1; i <= V; i++) {
                a[i] = new ArrayList<Integer>();
            }
            for (int i = 1; i <= E; i++) {
                st = new StringTokenizer(br.readLine());
                int x = Integer.parseInt(st.nextToken());
                int y = Integer.parseInt(st.nextToken());
                a[x].add(y);
                a[y].add(x);
            }
            c = new int[V + 1];
            for (int i = 1; i <= V; i++) {
                if (c[i] == NOTVISITED) {
                    dfs(i);
                }
            }
            if (isBipartitleGraph(V)) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }

        }
    }

    public static void dfs(int v) {
        if (c[v] == NOTVISITED) {
            c[v] = RED;
        }
        for (int i = 0; i < a[v].size(); i++) {
            int child = a[v].get(i);
            if (c[child] == NOTVISITED) {
                if (c[v] == RED) {
                    c[child] = BLUE;
                } else if (c[v] == BLUE) {
                    c[child] = RED;
                }
                dfs(child);
            }
        }
    }

    public static boolean isBipartitleGraph(int V) {
        for (int i = 1; i <= V; i++) {
            for (int j = 0; j < a[i].size(); j++) {
                int child = a[i].get(j);
                if (c[i] == c[child]) {
                    return false;
                }
            }
        }
        return true;
    }
}