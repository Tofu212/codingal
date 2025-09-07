a = 8000

if a < 400:
    print("a is less than 400")
elif a < 500:
    print("a is less than 500")
elif a < 600:
    print("a is less than 600")
elif a < 700:
    print("a is less than 700")
elif a < 800:
    print("a is less than 800")
elif a < 900:
    print("a is less than 900")
else:
    print("a is more than 900")

b = 40

if b > 0:
    if b > 5:
        if b > 10:
            print("b is greater than 10")
        else:
            print("b is not greater than 10 shit")
    else:
        print("you will never reach deep into if statement bcz you are not even greater than 5")
else:
    print("oh my god you are not even greater than 0")



import datetime

current_time = datetime.datetime.now()

print(current_time)