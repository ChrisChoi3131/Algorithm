# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
# N, B = map(int, input().split())

#!/usr/bin/python3
def convert(num, base):
    if num == 0:
        return
    convert(num//base, base)
    print(num%base, end=' ')
a, b = map(int, input().split())
n = int(input())
ans = 0
num = list(map(int,input().split()))
for x in num:
    ans = ans * a + x
convert(ans, b)