# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
A, B = list(map(int, input().split(" ")))

a, b = A, B
while b != 0:
    r = a % b
    a = b
    b = r

print(a)
g = a
l = g*(A/g) * (B/g)
print(int(l))
