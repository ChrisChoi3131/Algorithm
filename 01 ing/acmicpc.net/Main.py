# import sys
# input = sys.stdin.readline

from collections import deque


file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

N = int(input())
p = deque(map(int, input().split(" ")))
p.appendleft(0)
d = [0] * (N+1)

for i in range(1, N+1):
    for j in range(1,i+1):
        if(d[i] < d[i-j] + p[j]):
            d[i] = d[i-j] + p[j]
print(d[N])