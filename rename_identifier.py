import os
import json

new_title = sys.argv[-1]

with open('./src-tauri/tauri.conf.json') as f:
    file = json.load(f)

file["tauri"]["bundle"]["identifier"] = new_title

with open('./src-tauri/tauri.conf.json') as fp:
    file = json.load(new_title, fp)
