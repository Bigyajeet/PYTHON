#find the greatest among three

num_1=float(input("enter a floating number"))
num_2=float(input("enter a floating number"))
num_3=float(input("enter a floating number"))

greatest=num_1
if num_2>greatest:
    greatest=num_2
    print(greatest)
    
if num_3>greatest:
    greatest=num_3
    print(greatest)
    