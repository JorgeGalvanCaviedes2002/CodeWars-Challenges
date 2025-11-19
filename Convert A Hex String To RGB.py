hexDecimal = {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,
              '8':8,'9':9,'A':10,'B':11,'C':12,'D':13,'E':14,'F':15}

def hex_to_int(number_array):
    hexadecimal = 0
    for i in range(len(number_array)):
        hexadecimal += number_array[i] * pow(16, len(number_array)-i-1)
    return hexadecimal    

def hex_string_to_RGB(hex_string): 
    if hex_string.startswith("#"):
        hex_string = hex_string[1:]
    
    my_string = hex_string.upper()
    decimalArray = [hexDecimal[c] for c in my_string]

    redArray = decimalArray[0:2]
    greenArray = decimalArray[2:4]
    blueArray = decimalArray[4:6]

    diccionarioRespuesta = {
        'r': hex_to_int(redArray),
        'g': hex_to_int(greenArray),
        'b': hex_to_int(blueArray)
    }

    return diccionarioRespuesta