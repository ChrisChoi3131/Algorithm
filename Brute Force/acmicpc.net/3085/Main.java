import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {
    // static final String inputFilePath = "./˝˝˝˝˝˝
    // Structure/Stack/acmicpc.net/1406/sample.txt";
    // static final int mod = 1000000000;
    static final String inputFilePath = "./# format/sample.txt";

    static String a[][];
    static int N;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        N = Integer.parseInt(br.readLine());
        a = new String[N][N];

        for (int i = 0; i < N; i++) {
            String line = br.readLine();
            for (int j = 0; j < a.length; j++) {
                a[i][j] = line.substring(j, j + 1);
            }
        }
        int max = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                String tmp = "";
                if (j != N - 1) {
                    tmp = a[i][j];
                    a[i][j] = a[i][j + 1];
                    a[i][j + 1] = tmp;
                    if (max < countCandy(i, j)) {
                        max = countCandy(i, j);
                    }
                    if (max < countCandy(i, j + 1)) {
                        max = countCandy(i, j + 1);
                    }
                    tmp = a[i][j];
                    a[i][j] = a[i][j + 1];
                    a[i][j + 1] = tmp;
                }
                if (i != N - 1) {
                    tmp = a[i][j];
                    a[i][j] = a[i + 1][j];
                    a[i + 1][j] = tmp;
                    if (max < countCandy(i, j)) {
                        max = countCandy(i, j);
                    }
                    if (max < countCandy(i + 1, j)) {
                        max = countCandy(i + 1, j);
                    }
                    tmp = a[i][j];
                    a[i][j] = a[i + 1][j];
                    a[i + 1][j] = tmp;
                }
                if (max < countCandy(i, j)) {
                    max = countCandy(i, j);
                }
            }
        }
        System.out.println(max);
    }

    static int countCandy(int row, int col) {
        int yCount = 0;
        int cCount = 0;
        int pCount = 0;
        int zCount = 0;
        if (a[row][0].equals("Y")) {
            yCount++;
        } else if (a[row][0].equals("C")) {
            cCount++;
        } else if (a[row][0].equals("P")) {
            pCount++;
        } else if (a[row][0].equals("Z")) {
            zCount++;
        }
        int rowCount[] = new int[4];
        for (int i = 1; i < N; i++) {
            if (!a[row][i].equals(a[row][i - 1])) {
                yCount = 0;
                cCount = 0;
                pCount = 0;
                zCount = 0;
            }
            if (a[row][i].equals("Y")) {
                yCount++;
                if (rowCount[0] < yCount) {
                    rowCount[0] = yCount;
                }
            } else if (a[row][i].equals("C")) {
                cCount++;
                if (rowCount[1] < cCount) {
                    rowCount[1] = cCount;
                }
            } else if (a[row][i].equals("P")) {
                pCount++;
                if (rowCount[2] < pCount) {
                    rowCount[2] = pCount;
                }
            } else if (a[row][i].equals("Z")) {
                zCount++;
                if (rowCount[3] < zCount) {
                    rowCount[3] = zCount;
                }
            }
        }
        int rowMax = Math.max(Math.max(rowCount[0], rowCount[1]), Math.max(rowCount[2], rowCount[3]));

        yCount = 0;
        cCount = 0;
        pCount = 0;
        zCount = 0;
        if (a[0][col].equals("Y")) {
            yCount++;
        } else if (a[0][col].equals("C")) {
            cCount++;
        } else if (a[0][col].equals("P")) {
            pCount++;
        } else if (a[0][col].equals("Z")) {
            zCount++;
        }
        int colCount[] = new int[4];
        for (int i = 1; i < N; i++) {
            if (!a[i][col].equals(a[i - 1][col])) {
                yCount = 0;
                cCount = 0;
                pCount = 0;
                zCount = 0;
            }
            if (a[i][col].equals("Y")) {
                yCount++;
                if (colCount[0] < yCount) {
                    colCount[0] = yCount;
                }
            } else if (a[i][col].equals("C")) {
                cCount++;
                if (colCount[1] < cCount) {
                    colCount[1] = cCount;
                }
            } else if (a[i][col].equals("P")) {
                pCount++;
                if (colCount[2] < pCount) {
                    colCount[2] = pCount;
                }
            } else if (a[i][col].equals("Z")) {
                zCount++;
                if (colCount[3] < zCount) {
                    colCount[3] = zCount;
                }
            }
        }
        int colMax = Math.max(Math.max(colCount[0], colCount[1]), Math.max(colCount[2], colCount[3]));
        return Math.max(rowMax, colMax);
    }
}