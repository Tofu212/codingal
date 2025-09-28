class fruit:
    def __init__(self, n, c, t, r ):
        self.name = n
        self.colour = c
        self.taste = t
        self.condition = r

    def description(self):
        print("hello, I am " + self.name + " ,I am " + str(self.colour) + " colour and I taste " + self.taste +".")

    def ready(self):
        print("hello human, I am " + self.name + " , I am  " + self.condition + " ,eat me.")




apple_obj = fruit("Apple", "red", "sweet", "ripe")
banana_obj = fruit("banana", "yellow", "sweet", "ripe")



print(apple_obj.description())
print(banana_obj.ready())