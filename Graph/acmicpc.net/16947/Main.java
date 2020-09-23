import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
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
    }

    public static int go(int x, int px) {
        if (check[x] == 1) {
            return x;
        }
        check[x] = 1;

        return -1;
    }
}