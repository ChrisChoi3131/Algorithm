import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
	
	static int T;
    static final String inputFilePath = "./Data Structure/Stack/acmicpc.net/9012/sample.txt";
	public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream(inputFilePath));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
		T = Integer.parseInt(br.readLine());
		for (int test_case = 1; test_case <= T; test_case++) {
			Stack<String> stack = new Stack<String>();
			String line = br.readLine();
			boolean isNO = false;
			for (int i = 0; i < line.length(); i++) {
				String tmp = line.substring(i, i+1);
				if("(".equals(tmp)) {
					stack.add(tmp);
				}else if(")".equals(tmp)) {
					if(!stack.isEmpty()) {
						stack.pop();
					}else {
						isNO = true;
						break;
					}
				}
			}
			if(isNO) {
				System.out.println("NO");
			}else if(!stack.isEmpty()) {
				System.out.println("NO");
			}else {
				System.out.println("YES");
			}
		}
	}
}