import sys

# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

def inner(ps):
    left = []
    for item in ps:
        if(item == "("):
            left.append("(")
        else:
            if(len(left) == 0):
                print("NO")
                return
            else:
                left.pop()
    if(len(left) ==0):
        print("YES")
    else:
        print("NO")


n = int(input())
for _ in range(n):
    ps = list(input().split()[0])
    inner(ps)
