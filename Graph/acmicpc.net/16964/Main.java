import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/16964/sample.txt";
    static ArrayList<Integer> dfs_order = new ArrayList<>();
    static ArrayList<Integer> a[];
    static boolean check[];

    static void dfs(int x) {
        if (check[x])
            return;
        dfs_order.add(x);
        check[x] = true;
        for (int y : a[x]) {
            dfs(y);
        }
    }

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        int[] order = new int[n];
        int[] b = new int[n];
        check = new boolean[n];
        a = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            a[i] = new ArrayList<Integer>();
        }
        StringTokenizer st;
        for (int i = 0; i < n - 1; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken()) - 1;
            int y = Integer.parseInt(st.nextToken()) - 1;
            a[x].add(y);
            a[y].add(x);
        }
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            b[i] = Integer.parseInt(st.nextToken()) - 1;
            order[b[i]] = i;
        }
        for (int i = 0; i < n; i++) {
            Collections.sort(a[i], new Comparator<Integer>() {
                public int compare(Integer u, Integer v) {
                    if (order[u] < order[v]) {
                        return -1;
                    } else if (order[u] == order[v]) {
                        return 0;
                    } else {
                        return 1;
                    }
                }
            });
        }
        dfs(0);
        boolean ok = true;
        for (int i = 0; i < n; i++) {
            if (dfs_order.get(i) != b[i]) {
                ok = false;
            }
        }
        if (ok) {
            System.out.println(1);
        } else {
            System.out.println(0);
        }
        System.out.println();

    }
}