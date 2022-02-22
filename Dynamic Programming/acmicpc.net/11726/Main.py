# import sys
# input = sys.stdin.readline

file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
N = int(input())

d = [0] * (N+1);
d[0]  = 1;
d[1]  = 1;
for i in range(2, N+1):
    d[i] = (d[i-1] + d[i-2]) % 10007;

print(d[N])