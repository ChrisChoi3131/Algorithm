# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
n = int(input())

def gcd(a,b):
  while(b!=0):
    tmpA = a;
    a = tmpB;
    tmpB = b;
    b = tmpA%tmpB;
  return a;

for _ in range(n):
  arr = list(map(int,input().split()))
  ans = 0;
  for i in range(1, len(arr)):
    for j in range(i+1,len(arr)):
      ans+=gcd(arr[i], arr[j]);
  print(ans)