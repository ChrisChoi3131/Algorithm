# import sys
# input = sys.stdin.readline

file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
T = int(input())

d = [0] * 11
d[0] = 1
for i in range(1, 11):
    if i-1 >= 0:
        d[i] += d[i-1]
    if i-2 >= 0:
        d[i] += d[i-2]
    if i-3 >= 0:
        d[i] += d[i-3]

for i in range(T):
    num = int(input())
    print(d[num])