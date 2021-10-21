import sys

# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline

n = int(input())
queue = [];
for _ in range(n):
    cmd = input().split()
    if(cmd[0] == "push"):
        queue.insert(0,cmd[1])
    elif(cmd[0] == "pop"):
        if(len(queue) !=0):
            print(queue.pop());
        else:
            print(-1);
    elif(cmd[0] =="size"):
        print(len(queue))
    elif(cmd[0]=="empty"):
        if(len(queue) !=0):
            print(0)
        else:
            print(1)
    elif(cmd[0]== "front"):
        if(len(queue) !=0):
            print(queue[len(queue)-1]);
        else:
            print(-1)
    elif(cmd[0]== "back"):
        if(len(queue) !=0):
            print(queue[0]);
        else:
            print(-1)    