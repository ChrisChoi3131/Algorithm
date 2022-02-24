# import sys
# input = sys.stdin.readline

from collections import deque

file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

T = int(input())
num = 1000000009
d = [[0]*4 for _ in range(100001)]
d[1][1], d[2][2], d[3][1], d[3][2], d[3][3] = 1, 1, 1, 1, 1
for i in range(4, len(d)):
    d[i][1] = (d[i-1][2] + d[i-1][3]) % num
    d[i][2] = (d[i-2][1] + d[i-2][3]) % num
    d[i][3] = (d[i-3][1] + d[i-3][2]) % num

for test_case in range(T):
    N = int(input())
    print((d[N][1] + d[N][2] + d[N][3]) % num)
