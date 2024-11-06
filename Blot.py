in_filename = "input.txt"
out_filename = "output.txt"
line_spacing = 5
with open(f"{in_filename}", "r") as file:
    content = file.read()

with open(f"{out_filename}", "w") as file:
    file.write("const width = 125;\n")
    file.write("const height = 125;\n")
    file.write("const fontSize = 125;\n")
    file.write("setDocDimensions(width, height);\n")
    string = ""
    y = (content.count("\n") + 1) * line_spacing
    for i in content:
        if i == "\n":
            file.write(f"drawLines(bt.text(\"{string}\",[0,{y}],fontSize));\n")
            string = ""
            y -= line_spacing
        else:
            string += i
    y -= line_spacing
    file.write(f"drawLines(bt.text(\"{string}\",[0,{y}],fontSize));\n")


print(f"DONE : Saved as {out_filename}")