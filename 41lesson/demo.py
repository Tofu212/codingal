#def intro(name, age):
#    print(f'Hi I am {name}, ny age is {age}. Who are you?')


#for i in range(0, 100):
#    intro(f'Aaryavrat {i}', 20+i)


def thanos(y):
    y = y * 20
    y = y + 1
    return y

print(thanos(10))

z = thanos(20)
print(z)




def superman(y):
    if y == 50:
        return

    print("Superman Superman I CAN SEE YOUR UNDERWEAR")
    superman(y-10)


superman(100)