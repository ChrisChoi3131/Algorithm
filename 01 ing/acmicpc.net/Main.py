# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline


n = int(input())
times = list(map(int, input().split(" ")))
times.sort()
sum = 0
totalTime = 0
for i in range(n):
    sum += times[i]
    totalTime += sum

print(totalTime)
