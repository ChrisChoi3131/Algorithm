# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
def go(n):
    if n == 0:
        return
    if n % 2 == 0:
        go(-(n//2))
        print(0,end='')
    else:
        if n > 0:
            go(-(n//2))
        else:
            go((-n+1)//2)
        print(1,end='')
n = int(input())
if n == 0:
    print(0)
else:
    go(n)