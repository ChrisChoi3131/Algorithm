# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

check = [False] * 1000001
primes = []
for i in range(2, 1000001):
    if(check[i] == False):
        primes.append(i)
        j = i+i
        while(j <= 1000000):
            check[j] = True
            j+=i;
t = int(input())
for _ in range(t):
    n = int(input())
    ans = 0
    for aPrime in primes:
        if(n-aPrime >= 2 and n >= 2 * aPrime):
            if(check[n-aPrime] == False):
                ans += 1
        else:
            break
    print(ans)
