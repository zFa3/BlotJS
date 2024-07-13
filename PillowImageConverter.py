from PIL import Image 

### RECOMMENDED
### Use an image that is 480p or less ###

print("""
const width = 125;
const height = 125;

setDocDimensions(width, height);
""")
print("const x = 0\nconst y = 0")
print("const Poly = []")
image_file = Image.open("testimage.png") # open
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
print("bt.scale((Poly), [0.1, 0.1])")
print("bt.rotate(Poly, 180)")
print("drawLines(Poly)")
