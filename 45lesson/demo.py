class Human:
    def __init__(self, n, a):
        self.name = n
        self.age = a

    def intro(self):
        print("hello, my name is " + self.name + ",I am " + str(self.age) + "years old.")

    def greet(self, other_person):
        print("hello " +other_person.name + " , my name is" + self.name + ".")

    def bye(self, other_person):
        print("bye bye " +other_person.name + ", see you tomorrow")



aaryavrat_obj = Human("Aaryavrat", 58)

evin_obj = Human("Evin", 48)

ankush_obj = Human("Ankush", 21)


print(aaryavrat_obj.age)
print(aaryavrat_obj.intro())
print(aaryavrat_obj.greet(evin_obj))
print(aaryavrat_obj.bye(evin_obj))


print(evin_obj.name)
print(ankush_obj.age)