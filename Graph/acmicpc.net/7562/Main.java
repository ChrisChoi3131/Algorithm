import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Main {
    static final String inputFilePath = "./Graph/acmicpc.net/7562/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        int[] dx = { -2, -2, -1, -1, 1, 1, 2, 2 };
        int[] dy = { -1, 1, -2, 2, -2, 2, -1, 1 };
        for (int test_case = 0; test_case < T; test_case++) {
            int I = Integer.parseInt(br.readLine());
            int[][] a = new int[I][I];
            int[][] d = new int[I][I];
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            Point sPoint = new Point(x, y);
            st = new StringTokenizer(br.readLine());
            x = Integer.parseInt(st.nextToken());
            y = Integer.parseInt(st.nextToken());
            Point tPoint = new Point(x, y);
            Queue<Point> q = new LinkedList<Point>();
            q.add(sPoint);
            d[sPoint.x][sPoint.y] = 1;
            while (!q.isEmpty()) {
                Point curPoint = q.remove();
                for (int j = 0; j < dx.length; j++) {
                    x = curPoint.x + dx[j];
                    y = curPoint.y + dy[j];
                    if (x >= 0 && x < I && y >= 0 && y < I) {
                        if (d[x][y] == 0) {
                            q.add(new Point(x, y));
                            d[x][y] = d[curPoint.x][curPoint.y] + 1;
                        }
                    }

                }
            }
            System.out.println(d[tPoint.x][tPoint.y] - 1);
        }
    }
}

class Point {
    int x, y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}