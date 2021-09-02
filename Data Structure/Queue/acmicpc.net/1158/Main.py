from collections import deque
import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
n, m = map(int, input().split())
ans = []
q = deque()
for i in range(n):
    q.appendleft(i+1)

while len(q) != 0:
    for item in range(m):
        if(item == m-1):
            ans.append(str(q.pop()))
        else:
            q.appendleft(q.pop())

print("<" + ", ".join(ans) + ">")
