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
            if not(i == prev[0]+1 or i == prev[0] - 1):
                lines += "]"
                new = True
                count += 1
            prev = [i, j]
lines += "]"
# image_file.save('result.png') # save result - not required
print(lines)
print(f"finalLines.push(", end = "")
for i in range(1, count+1):
    print("line"+str(i)+", ", end = "")
print(")")
'''

from PIL import Image 
print("const x = 0\nconst y = 0")
print("const Poly = []")
image_file = Image.open("testimage.jpg") # open
image_file = image_file.convert("1") # convert image to black and white
image_file.resize((125, 125)) # resize the image to fit within the bounds
lines = "const generated_polyline = ["
pixels = image_file.load()
for j in range(image_file.height):
    for i in range(image_file.width):
        if not pixels[i, j]:
            lines += f"[{i}+x, {j}+y],[{i}+x, {j+1}+y],"
lines += "]"
# image_file.save('result.png') # save result - not required
print(lines)
print("Poly.push(generated_polyline)")
print("bt.scale(Poly), [0.1, 0.1]")
print("drawLines(Poly)")
