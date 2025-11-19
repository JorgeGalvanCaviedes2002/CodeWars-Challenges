import math

def binario_decimal(binary_array):
    equivalente = 0
    for i in range(len(binary_array)):
        equivalente += binary_array[i]*pow(2,((len(binary_array)-i)-1))
    
    return equivalente


def int32_to_ip(int32):
    #formamos un arreglo de 4 elementos, cada elemento son cadenas binarias de 8 bits
    finalString = ""
    reversedMatrix = []
    binaryMatrix = [] 
    for i in range(4):
        binaryArray = []
        for j in range(8):
            if int32%2==0:
                binaryArray = [0] + binaryArray
            else:
                binaryArray = [1] + binaryArray
            int32 = math.trunc(int32/2)
        binaryMatrix.append(binario_decimal(binaryArray))

    for i in range(4):
        reversedMatrix.append(binaryMatrix[(4-i)-1])
        finalString += str(reversedMatrix[i])+'.'   

    finalString = finalString.rstrip('.')

    return finalString