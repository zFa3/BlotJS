from PIL import Image 

brightness = {
    0: "##", 1: "~~"
    #0: "~~", 1: "....", 2: ",,,,", 3: "/\\/\\", 4: "??", 5: "++", 6: "())", 7: "##", 8: ";;;;", 9: "IIII"
}

file = open("output.txt", "w")
image_file = Image.open("testimage.png")
image_file = image_file.convert("1")
image_file.resize((125, 125))
pixels = image_file.load()
for j in range(image_file.height):
    for i in range(image_file.width):
        value = pixels[i, j]
        '''
        if value < 25: file.write(brightness[0]); continue
        if value < 50: file.write(brightness[1]); continue
        if value < 75: file.write(brightness[2]); continue
        if value < 100: file.write(brightness[3]); continue
        if value < 125: file.write(brightness[4]); continue
        if value < 150: file.write(brightness[5]); continue
        if value < 175: file.write(brightness[6]); continue
        if value < 200: file.write(brightness[7]); continue
        if value < 225: file.write(brightness[8]); continue
        else: file.write(brightness[9])
        '''
        if value < 225: file.write(brightness[0])
        else: file.write(brightness[1])
    file.write("\n")