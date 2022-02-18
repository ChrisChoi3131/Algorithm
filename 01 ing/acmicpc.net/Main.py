# import sys
# input = sys.stdin.readline

file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
N = int(input())

d = [0] * (N+1)

for i in range(2, N+1):
    d[i] = d[i-1]
    if(i % 2 == 0 and d[i] > d[i//2]):
        d[i] = d[i//2]
    if(i % 3 == 0 and d[i] > d[i//3]):
        d[i] = d[i//3]
    d[i] += 1

print(d[N])
