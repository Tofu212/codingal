class Animal:
    def __init__ (self, name, species):
        self.name = name
        self.species = species

    def make_sound(self, sound):
        return f"{self.name} the {self.species} says {sound}"

class Dog(Animal):
    def __init__ (self, name):
        super().__init__(name, "dog")

    def bark(self):
        return self.make_sound("Woof!")

a1 = Animal("leo", "lion")
a2 = Animal("Molly", "Cat")
a3 = Animal("Buddy", "dog")



d1 = Dog("Max")
print(a1.make_sound("Roar!")) #leo the lion says roar!
print(a2.make_sound("Meow!")) # Molly the cat says meow
print(a3.make_sound("Woof!")) # Buddy the dog says woof!
print(d1.bark())              # Max the dog says Woof!
print(d1.make_sound("Woof Woof!")) #Max the dog says woof woof !
print(d1.name) #Max
print(d1.species) #Dog
print(isinstance(d1, Dog))  #true
print(d1.species) #Dog
print(isinstance(d1, Animal))  #true
print(d1.species) #Dog
print(isinstance(a1, Dog)) #False





class Human:
    def __init__ (self, name, favcolor):
        self.name = name
        self.favcolor = favcolor

    def make_sound(self, sound):
        return f"{self.name} favourite color is {self.favcolor}  and is {age} years old. "

class Student(Human):
    def __init__ (self, name):
        super().__init__(name, "Student")

    def age(self):
        return self.make_age("14")

h1 = Human("Spider-man", "Red")
h2 = Human("Hulk", "green")
h3 = Human("Batman", "black")

print(h1.make_age("14"))