# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
n = int(input())
arr = list(map(int, input().split(" ")))

f = [0]*1000001;
s = [0];
ans = [0] * n;
for i in range(n):
    f[arr[i]] +=1

for i in range(1, n):
    while s and f[arr[s[-1]]] <f[arr[i]]:
        ans[s.pop()] = arr[i]
    s.append(i);

while s:
    ans[s.pop()] = -1
print(" ".join(map(str, ans)))