import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class SET게임 {
    static final String inputFilePath = "./Math, Logical Implememt/Etc/SDS/sample.txt";

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int t = Integer.parseInt(br.readLine());
        for (int test_case = 1; test_case <= t; test_case++) {
            int n = Integer.parseInt(br.readLine());
            String a[][] = new String[n][4];
            for (int i = 0; i < n; i++) {
                String line = br.readLine();
                a[i][0] = String.valueOf(line.charAt(0));
                a[i][1] = String.valueOf(line.charAt(1));
                a[i][2] = String.valueOf(line.charAt(2));
                a[i][3] = String.valueOf(line.charAt(3));
            }
            int ans = 0;
            for (int i = 0; i < n; i++) {
                for (int j = i; j < n; j++) {
                    for (int k = j; k < n; k++) {
                        if (i != j && i != k && j != k) {
                            boolean count = (a[i][0].equals(a[j][0]) && a[i][0].equals(a[k][0])
                                    && a[k][0].equals(a[j][0]))
                                    || (!a[i][0].equals(a[j][0]) && !a[i][0].equals(a[k][0])
                                            && !a[k][0].equals(a[j][0]));
                            boolean color = (a[i][1].equals(a[j][1]) && a[i][1].equals(a[k][1])
                                    && a[k][1].equals(a[j][1]))
                                    || (!a[i][1].equals(a[j][1]) && !a[i][1].equals(a[k][1])
                                            && !a[k][1].equals(a[j][1]));
                            boolean shape = (a[i][2].equals(a[j][2]) && a[i][2].equals(a[k][2])
                                    && a[k][2].equals(a[j][2]))
                                    || (!a[i][2].equals(a[j][2]) && !a[i][2].equals(a[k][2])
                                            && !a[k][2].equals(a[j][2]));
                            boolean shadow = (a[i][3].equals(a[j][3]) && a[i][3].equals(a[k][3])
                                    && a[k][3].equals(a[j][3]))
                                    || (!a[i][3].equals(a[j][3]) && !a[i][3].equals(a[k][3])
                                            && !a[k][3].equals(a[j][3]));
                            if (count && color && shape && shadow) {
                                ans++;
                            }
                        }
                    }
                }
            }
            System.out.println("#" + test_case + " " + ans);
        }

    }
}