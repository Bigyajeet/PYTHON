#find the greatest among three

num_1=float(input("enter a floating number"))
num_2=float(input("enter a floating number"))
num_3=float(input("enter a floating number"))

if ((num_1>num_2) and (num_1>num_3)):
    print(num_1,"is greater than num_2 and num_3")
elif ((num_2>num_1) and (num_2>num_3)):
    print(num_2,"is smaller than num_1,num_3")
else:
    print(num_3,"is equal to num_2,num_3")
