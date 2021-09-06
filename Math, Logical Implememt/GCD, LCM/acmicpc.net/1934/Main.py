# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
T = int(input())
for i in range(T):
    A, B = list(map(int, input().split(" ")))
    a, b = A, B
    while(b != 0):
        r = a % b
        a = b
        b = r
    g = a
    l = int(g*(A/g)*(B/g))
    print(l)
