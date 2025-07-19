from main import parol


while True:
    ugad = int(input("Угадайте пароль: "))

    if ugad == parol:
        print("ДОСТУП РАЗРЕШЕН!!!")
    elif ugad < parol:
        print("Надо побольше число")
    elif ugad > parol:
        print("Надо по меньше")
    else:
        print("Доступ запрещен!")




