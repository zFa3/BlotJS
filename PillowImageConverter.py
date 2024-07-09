'''
from PIL import Image 
image_file = Image.open("testimage.jpg") # open
image_file = image_file.convert("1") # convert image to black and white
image_file.resize((125, 125)) # resize the image to fit within the bounds

new = True
count = 1

lines = ""
pixels = image_file.load()
prev = [-2, -2]
for j in range(image_file.height):
    for i in range(image_file.width):
        if new:
            new = False
            lines += f"\nconst line{count} = ["
        if not pixels[i, j]:
            lines += f"[{i}, {j}],[{i}, {j+1}],"
            if not(i == prev[0] + 1 or i == prev[0] - 1):
                lines += "]"
                new = True
                count += 1
            prev = [i, j]
lines += "]"
# image_file.save('result.png') # save result - not required
print(lines)
print(f"finalLines.push(", end = "")
for i in range(1, count + 1):
    print("line" + str(i) + ", ", end = "")
print(")")
'''

from PIL import Image 
print("offset_x = 0\noffset_y = 0")
image_file = Image.open("testimage.jpg") # open
image_file = image_file.convert("1") # convert image to black and white
image_file.resize((125, 125)) # resize the image to fit within the bounds
lines = "generated_polyline = ["
pixels = list(image_file.load())
for j in range(image_file.height):
    for i in range(image_file.width):
        if not pixels[i, j]:
            lines += f"[{i} + offset_x, {j} + offset_y],[{i} + offset_x, {j+1} + offset_y],"
lines += "]"
# image_file.save('result.png') # save result - not required
print(lines)
