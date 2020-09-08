import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/1260/sample.txt";
    // static final int mod = 1000000000;
    // static final String inputFilePath = "./# format/sample.txt";

    static ArrayList<Integer>[] a;
    static boolean[] c;

    public static void dfs(int v) {
        c[v] = true;
        System.out.print(v + " ");
        for (int i = 0; i < a[v].size(); i++) {
            int tmp = a[v].get(i);
            if (c[tmp] == false) {
                dfs(tmp);
            }
        }
    }

    public static void bfs(int v) {
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(v);
        c[v] = true;

        while (!q.isEmpty()) {
            int x = q.remove();
            System.out.print(x + " ");
            for (int y : a[x]) {
                if (c[y] == false) {
                    q.add(y);
                    c[y] = true;
                }
            }
        }

        q.poll();
    }

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());
        a = (ArrayList<Integer>[]) new ArrayList[N + 1];
        for (int i = 1; i < N + 1; i++) {
            a[i] = new ArrayList<Integer>();
        }
        for (int i = 1; i < M + 1; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            a[x].add(y);
            a[y].add(x);
        }
        for (int i = 1; i < N + 1; i++) {
            Collections.sort(a[i]);
        }
        c = new boolean[N + 1];
        dfs(V);
        System.out.println();
        c = new boolean[N + 1];
        bfs(V);
        System.out.println();
    }

}