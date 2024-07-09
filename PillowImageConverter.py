from PIL import Image 
image_file = Image.open("testimage.jpg") # open
image_file = image_file.convert("1") # convert image to black and white
image_file.resize((125, 125)) # resize the image to fit within the bounds
lines = "generated_polyline = ["
pixels = list(image_file.load())
for j in range(image_file.height):
    for i in range(image_file.width):
        if not pixels[i, j]:
            lines += f"[{i}, {j}],[{i}, {j+1}],"
lines += "]"
# image_file.save('result.png') # save result - not required
print(lines)