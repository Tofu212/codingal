import turtle


#creating canvas
turtle.Screen().bgcolor("orange")

sc = turtle.Screen()
sc.setup(400, 300)   #first argument is width, height

turtle.title("Welcome to Evin and Aaryavrat canvas of turtle")    #Setting up the title

#turtle obejct creation
board = turtle.Turtle()


for i in range(0, 4):
    board.forward(100)
    board.left(90)