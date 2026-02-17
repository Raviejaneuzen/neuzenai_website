
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const srcDir = path.join(process.cwd(), 'src');
const indexHtml = path.join(process.cwd(), 'index.html');

console.log("Starting scan...");

// 1. Get all files in public
let publicFiles = [];
try {
    publicFiles = fs.readdirSync(publicDir).filter(file => {
        const stat = fs.statSync(path.join(publicDir, file));
        return stat.isFile(); // Only files, not dirs
    });
} catch (e) {
    console.error("Error reading public dir:", e);
    process.exit(1);
}

console.log(`Found ${publicFiles.length} files in public.`);

// 2. Read all source content
let allSourceContent = "";

// Add index.html content
try {
    if (fs.existsSync(indexHtml)) {
        allSourceContent += fs.readFileSync(indexHtml, 'utf8');
    }
} catch (e) {
    console.error("Error reading index.html:", e);
}

// Recursive function to get content from src
function readDirRecursive(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            readDirRecursive(filePath);
        } else {
            // Read only text files (js, jsx, css, ts, tsx, html, json within src seems rare but okay)
            if (/\.(js|jsx|ts|tsx|css|scss|html|json)$/.test(file)) {
                allSourceContent += fs.readFileSync(filePath, 'utf8');
            }
        }
    }
}

try {
    readDirRecursive(srcDir);
} catch (e) {
    console.error("Error reading src dir:", e);
}

console.log(`Scanned source content (length: ${allSourceContent.length})`);

// 3. Check for usage
const unusedFiles = [];
const usedFiles = [];

for (const file of publicFiles) {
    // Simple inclusion check. 
    // We treat the file as unused if its name does NOT appear in the source content.
    // NOTE: This might miss dynamic imports like `img src={"/" + imageName}` but that's rare/bad practice usually.
    // Also, we search for the filename directly. e.g. "image.png".
    // If we have "images/image.png" in code and file is "image.png" in public root, "image.png" will match.
    // If we have "assets/image.png" in code... wait, these are in public root.

    if (!allSourceContent.includes(file)) {
        unusedFiles.push(file);
    } else {
        usedFiles.push(file);
    }
}

console.log("\n--- UNUSED FILES (Candidates for deletion) ---");
unusedFiles.forEach(f => console.log(f));

console.log("\n--- USED FILES ---");
usedFiles.forEach(f => console.log(f));
