# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

N = int(input())
d = [[0] * 10 for _ in range(N+1)]
d[1] = [1 for _ in range(10)]
d[1][0] = 0
MOD = 1000000000

for i in range(2, N+1):
    for j in range(0, 10):
        if(j == 0):
            d[i][j] = d[i-1][1]
        elif(j==9):
            d[i][j] = d[i-1][8]
        else:
            d[i][j] = d[i-1][j-1] + d[i-1][j+1]
        d[i][j] %= MOD
print(sum(d[N])%MOD)
