import sys

# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample2.txt", "r")
input = file.readline

left = list(input().strip())
right = []
n = int(input())
for _ in range(n):
    operation = input().split();
    if(operation[0] == "P"):
        left.append(operation[1]);
    elif(operation[0] == "L" and len(left) !=0):
        right.append(left.pop());
    elif(operation[0] == "D" and len(right) !=0):
        left.append(right.pop());
    elif(operation[0] == "B" and len(left) !=0):
        left.pop();

ans=[]
for i in range(len(left)):
    ans.append(left[i]);
for i in range(len(right)):
    ans.append(right.pop());

print("".join(ans))