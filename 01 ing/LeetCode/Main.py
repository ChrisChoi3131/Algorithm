import sys

# input = sys.stdin.readline
file = open("./01 ing/LeetCode/sample.txt", "r")
input = file.readline

n = int(input())
stack = []
for _ in range(n):
    s = input().split()
    cmd = s[0]
    if(cmd == "push"):
        stack.append(s[1])
    elif(cmd == "pop" and len(stack) == 0):
        print(-1)
    elif(cmd == "pop" and len(stack) != 0):
        print(stack.pop())
    elif(cmd == "size"):
        print(len(stack))
    elif(cmd == "empty" and len(stack) == 0):
        print(1)
    elif(cmd == "empty" and len(stack) != 0):
        print(0)
    elif(cmd == "top" and len(stack) == 0):
        print(-1)
    elif(cmd == "top" and len(stack) != 0):
        print(stack[len(stack)-1])

file.close()
