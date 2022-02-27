# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

N = int(input())
A = list(map(int, input().split(" ")))
d = [1] * N

for i in range(0, N):
    for j in range(0, i):
        if(A[i] > A[j] and d[i] <= d[j]):
            d[i] = d[j] + 1;

print(max(d))