import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/1697/sample.txt";

    static final int MAX = 1000000;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        int[] check = new int[MAX];

        Queue<Integer> q = new LinkedList<Integer>();
        q.add(n);
        check[n] = 1;
        while (!q.isEmpty()) {
            int now = q.remove();
            int dx = now - 1;
            if (dx >= 0 && (check[dx] == 0)) {
                q.add(dx);
                check[dx] = check[now] + 1;
            }

            dx = now + 1;
            if (dx < MAX && (check[dx] == 0)) {
                q.add(dx);
                check[dx] = check[now] + 1;
            }

            dx = now * 2;
            if (dx < MAX && (check[dx] == 0)) {
                q.add(dx);
                check[dx] = check[now] + 1;
            }

        }
        System.out.println(check[k] - 1);
    }
}