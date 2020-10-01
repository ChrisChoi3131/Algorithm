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
    static final String inputFilePath = "./Graph/acmicpc.net/16947/sample.txt";
    static ArrayList<Integer>[] a;
    static int[] check;
    static int[] dist;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        a = new ArrayList[N];
        check = new int[N];
        dist = new int[N];
        for (int i = 0; i < N; i++) {
            a[i] = new ArrayList<Integer>();
        }
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken()) - 1;
            int y = Integer.parseInt(st.nextToken()) - 1;
            a[x].add(y);
            a[y].add(x);
        }
        go(0, -1);
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < N; i++) {
            if (check[i] == 2) {
                dist[i] = 0;
                q.add(i);
            } else {
                dist[i] = -1;
            }
        }
        while (!q.isEmpty()) {
            int x = q.remove();
            for (int y : a[x]) {
                if (dist[y] == -1) {
                    q.add(y);
                    dist[y] = dist[x] + 1;
                }
            }
        }
        for (int i = 0; i < N; i++) {
            System.out.print(dist[i] + " ");
        }
        System.out.println();
    }

    public static int go(int x, int px) {
        if (check[x] == 1) {
            return x;
        }
        check[x] = 1;
        for (int y : a[x]) {
            if (y == px)
                continue;
            int res = go(y, x);
            if (res == -2)
                return -2;
            if (res >= 0) {
                check[x] = 2;
                if (x == res)
                    return -2;
                else
                    return res;
            }
        }
        return -1;
    }
}