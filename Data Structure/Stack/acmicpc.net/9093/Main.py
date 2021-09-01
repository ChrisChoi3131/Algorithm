import sys

# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

n = int(input())
stack = []
for _ in range(n):
    s = input().split()
    ans = "";
    for item in s:
        ans+=item[::-1] + " ";
    print(ans)

file.close()
