import sys

# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

n = int(input())

stack = [];
ans = [];
m = 1;
for i in range(n):
    curr=int(input())
    while(len(stack) == 0 or curr > stack[len(stack)-1]):
        stack.append(m);
        ans.append("+");
        m+=1
    if(stack[len(stack)-1] == curr):
        stack.pop();
        ans.append("-");

if(len(stack) == 0):
    print("\n".join(ans));
else:
    print("NO")