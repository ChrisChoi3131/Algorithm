# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
n = int(input())
a = list(map(int, input().split()))
ans = [0]*n
s = [0]

for i in range(1, n):
    while s and a[s[-1]] < a[i]:
        ans[s.pop()] = a[i]
    s.append(i)

while s:
    ans[s.pop()] = -1

print(" ".join(map(str, ans)))