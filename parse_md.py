import re
import json
import os

def parse_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    data = []
    current_category = None
    
    # Regex for category: ### Category Name
    category_pattern = re.compile(r'^###\s+(.+)')
    # Regex for channel: * **[Name](Link)** - Description
    # Note: Sometimes there might be variations, so we'll try to be robust.
    channel_pattern = re.compile(r'\*\s*\*\*\[(.*?)\]\((.*?)\)\*\*\s*-\s*(.*)')

    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        cat_match = category_pattern.match(line)
        if cat_match:
            current_category = {
                "category": cat_match.group(1).strip(),
                "channels": []
            }
            data.append(current_category)
            continue
            
        if current_category is not None:
            chan_match = channel_pattern.match(line)
            if chan_match:
                name = chan_match.group(1).strip()
                url = chan_match.group(2).strip()
                description = chan_match.group(3).strip()
                
                # Extract image/avatar placeholder logic could go here later, 
                # but for static site we'll use a default or fetch if possible.
                # For now just data.
                
                current_category['channels'].append({
                    "name": name,
                    "url": url,
                    "description": description
                })

    return data

if __name__ == "__main__":
    input_file = r"d:/IDE - My sites/YT recommendations/Yt Recommendations from Hitler.md"
    output_file = r"d:/IDE - My sites/YT recommendations/data.json"
    
    try:
        data = parse_markdown(input_file)
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4)
        print(f"Successfully converted {input_file} to {output_file}")
    except Exception as e:
        print(f"Error: {e}")
