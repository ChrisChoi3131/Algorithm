# import sys
# input = sys.stdin.readline
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
def check(row, col):
    for i in range(n):
        if i == row:
            continue
        if a[i][col]:
            return False
    x = row-1
    y = col-1
    while x >= 0 and y >= 0:
        if a[x][y]:
            return False
        x -= 1
        y -= 1
    x = row-1
    y = col+1
    while x >= 0 and y < n:
        if a[x][y]:
            return False
        x -= 1
        y += 1
    return True

def calc(row):
    if row == n:
        global ans
        ans += 1
        return
    for col in range(n):
        a[row][col] = True
        if check(row, col):
            calc(row+1)
        a[row][col] = False


n = int(input())
ans = 0
a = [[False]*n for _ in range(n)]
calc(0)
print(ans)