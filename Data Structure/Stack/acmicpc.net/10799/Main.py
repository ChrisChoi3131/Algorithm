import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
s = list(input())

stack = []
ans = 0
for i in range(len(s)):
    if(s[i] == "("):
        stack.append(i)
    else:
        if(stack[len(stack)-1]+1 == i):
            ans += len(stack)-1
        else:
            ans += 1
        stack.pop()
print(ans)
