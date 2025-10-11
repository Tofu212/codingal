from abc import ABC

class Animal(ABC):
    def eatit(self):
        pass
    
    def sleeponit(self):
        pass


class water_animals(Animal):
    def __init__(self):
        pass
    def eatit(self, name, price):
        print(f"Hi I am eating {name} and {price}")

    def sleeponit(self):
        print("sleep on it")


wa = water_animals()
wa.eatit('Rhino', 3242323)
wa.sleeponit()