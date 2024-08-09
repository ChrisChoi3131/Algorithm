import sys, collections, math, random, heapq

sys.setrecursionlimit(10**6)
file = open("./01 ing/acmicpc.net/sample.txt", "r")
input = file.readline
# input = sys.stdin.readline

V, E = map(int, input().split())
k = int(input())

graph = [[] for _ in range(V + 1)]
for _ in range(E):
    u, v, w = map(int, input().split())
    graph[u].append((v, w))

dist = [math.inf] * (V + 1)
check = [False] * (V + 1)
dist[k] = 0

pq = [(0, k)]
while pq:
    _, curr = heapq.heappop(pq)
    if check[curr]:
        continue
    check[curr] = True
    for v, w in graph[curr]:
        if dist[v] > dist[curr] + w:
            dist[v] = dist[curr] + w
            heapq.heappush(pq, (dist[v], v))

for i in range(1, V + 1):
    print(dist[i] if dist[i] != math.inf else "INF")
