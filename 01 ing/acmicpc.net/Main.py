import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
s = list(input())
temp = []
status = "char"

for i in range(len(s)):
    if(s[i] == "<"):
        if(len(temp) != 0):
            temp.reverse()
            print("".join(temp), end="<")
            temp = []
        else:
            print("<", end="")
        status = "tag"
    elif(s[i] == ">"):
        print(">", end="")
        status = "char"
    elif(status == "tag"):
        print(s[i], end="")
    else:
        if(s[i] == " "):
            if(len(temp) != 0):
                temp.reverse()
                print("".join(temp), end=" ")
                temp = []
            else:
                print(" ", end="")
        else:
            temp.append(s[i])
if(len(temp) != 0):
    temp.reverse()
    print("".join(temp), end="")
    temp = []
