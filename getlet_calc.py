import sys

get = float(sys.argv[1]) / 100

# let has to be a function of get
# if it is 1-get, opacity makes no sense
# https://www.desmos.com/calculator/g2unpjrulp

layers = int(sys.argv[2])

total = 0
for i in range(layers):
    total += get * (1.2-get) ** i

print(total)
