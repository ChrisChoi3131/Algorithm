# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
N, B = map(int, input().split())

ans = []


def calc(num, base):
    quotinent = num // base
    reminder = num % base
    ans.append(reminder)
    if(quotinent == 0):
        return
    calc(quotinent, base)


def convertNumToStr(num):
    if num >=10 : 
      return chr(num + 55)
    else :
      return str(num)


calc(N, B)
ans.reverse()
print("".join(convertNumToStr(i) for i in ans))
