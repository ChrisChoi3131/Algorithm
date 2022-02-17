# import sys
# input = sys.stdin.readline

file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
# N, B = map(int, input().split())

n = int(input())
i = 2
while i*i <= n:
    while n % i == 0:
        print(i)
        n //= i
    i+=1                    

if(n > 1):
    print(int(n))
