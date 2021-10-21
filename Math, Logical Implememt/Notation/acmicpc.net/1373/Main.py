# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

num = list(map(int, input()))
n = len(num)
if(n % 3 == 1):
    print(num[0], end="")
elif(n % 3 == 2):
    tmp = 2 + num[1]
    print(tmp, end="")

for i in range(n % 3, n, 3):
    tmp = num[i] * 4 + num[i+1]*2 + num[i+2]
    print(tmp, end="")
