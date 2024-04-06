import sys, collections, math, random
sys.setrecursionlimit(10**6)
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
# input = sys.stdin.readline

def check_sorted(arr, size):
    for i in range(1, size):
        if arr[i-1] > arr[i]: return False
    return True



def bubble_sorted(arr):
    n = len(arr)
    has_swapped = False
    for _ in range(n-1):
        for j in range(n-1):
            if arr[j] > arr[j+1]:
                has_swapped = True
                arr[j], arr[j+1] = arr[j+1], arr[j]
        if has_swapped:
            has_swapped = False
        else:
            break;
    return arr

def insertion_sorted(arr):
    n = len(arr)
    for i in range(n):
        j = i
        while j>0 and arr[j-1] > arr[j]:
            arr[j-1], arr[j]= arr[j], arr[j-1]
            j-=1
    return arr

def selection_sorted(arr):
    for i in range(len(arr)):
        min_num = arr[i]
        min_idx = i
        for j in range(i+1, len(arr)):
            if min_num > arr[j]:
                min_num, min_idx =  arr[j],j
        arr[i], arr[min_idx] = arr[min_idx],arr[i]
    return arr

# arr = [1,2,3,4,5]
arr = []
for i in range(100):
    arr.append(random.randint(0,100))
arr = insertion_sorted(arr)
print(arr, check_sorted(arr , len(arr)))
