from PIL import Image, ExifTags
import os

def resize_image(input_path, output_path, max_width):
    with Image.open(input_path) as img:
        # Handle image orientation based on EXIF data
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        
        exif = img._getexif()
        if exif is not None:
            orientation = exif.get(orientation)
            if orientation == 3:
                img = img.rotate(180, expand=True)
            elif orientation == 6:
                img = img.rotate(270, expand=True)
            elif orientation == 8:
                img = img.rotate(90, expand=True)

        width_percent = (max_width / float(img.size[0]))
        height_size = int((float(img.size[1]) * float(width_percent)))
        img = img.resize((max_width, height_size), Image.BILINEAR)
        img.save(output_path, 'JPEG', quality=80)  # Adjust quality as needed

def process_directory(input_dir, output_dir, max_width):
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.lower().endswith(('jpg', 'jpeg', 'png')):
                input_path = os.path.join(root, file)
                
                # Create corresponding output directory structure
                relative_path = os.path.relpath(root, input_dir)
                output_path_dir = os.path.join(output_dir, relative_path)
                if not os.path.exists(output_path_dir):
                    os.makedirs(output_path_dir)
                
                output_path = os.path.join(output_path_dir, file)
                resize_image(input_path, output_path, max_width)
                print(f'Resized and saved: {output_path}')

input_directory = 'C:/programin/Projects/four_years/public/assets/'
output_directory = 'C:/programin/Projects/four_years/public/assets/out/'
max_width = 800  # Adjust the width as needed

process_directory(input_directory, output_directory, max_width)
