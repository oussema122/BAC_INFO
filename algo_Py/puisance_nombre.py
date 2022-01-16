def puis(n):
    if n == 0 :
        return 1
    else:
        return n*puis(n-1)
print(puis(5))