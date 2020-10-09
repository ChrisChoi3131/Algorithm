import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/16940/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        ArrayList<Integer> a[] = new ArrayList[n + 1];
        int[] order = new int[n + 1];
        int[] parent = new int[n + 1];
        boolean c[] = new boolean[n + 1];
        for (int i = 1; i <= n; i++) {
            a[i] = new ArrayList<Integer>();
        }
        StringTokenizer st;
        for (int i = 1; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            a[x].add(y);
            a[y].add(x);
        }
        st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= n; i++) {
            order[i] = Integer.parseInt(st.nextToken());
        }
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(1);
        c[1] = true;
        int m = 1;
        for (int i = 1; i <= n; i++) {
            if (q.isEmpty()) {
                System.out.println(0);
                System.exit(0);
            }
            int x = q.remove();
            if (x != order[i]) {
                System.out.println(0);
                System.exit(0);
            }
            int cnt = 0;
            for (int y : a[x]) {
                if (c[y] == false) {
                    parent[y] = x;
                    cnt++;
                }
            }
            for (int j = 0; j < cnt; j++) {
                if (parent[order[m + j + 1]] != x) {
                    System.out.println(0);
                    System.exit(0);
                }
                q.add(order[m + j + 1]);
                c[order[m + j + 1]] = true;
            }
            m += cnt;
        }
        System.out.println(1);
    }
}