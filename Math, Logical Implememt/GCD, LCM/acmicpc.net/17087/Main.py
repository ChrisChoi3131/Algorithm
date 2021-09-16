# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
n, s = map(int, input().split())
siblings = list(map(int, input().split()))


def GCD(a, b):
    while(b != 0):
        tmpA = a
        tmpB = b
        a = tmpB
        b = tmpA % tmpB
    return a


distance = []
for i in range(len(siblings)):
    distance.append(abs(siblings[i]-s))
ans = distance[0]
for i in range(1, len(distance)):
    ans = GCD(ans, distance[i])
print(ans)
