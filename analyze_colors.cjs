const fs = require('fs');
const path = require('path');

const csvPath = 'color_usage.csv';
const outputPath = 'Project_Color_Analysis.md';

const fileContent = fs.readFileSync(csvPath, 'utf8');
const lines = fileContent.split('\n');

const colorMap = {};

// Regex for hex color
const hexRegex = /#([0-9a-fA-F]{3,6})\b/g;

// Helper to parse CSV line approximately
function parseCsvLine(line) {
    // Simple parser for standard CSV (handling quotes if simple)
    // PowerShell Export-Csv quotes strings.
    const parts = [];
    let current = '';
    let inQuote = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuote = !inQuote;
        } else if (char === ',' && !inQuote) {
            parts.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    parts.push(current);
    return parts.map(p => p.replace(/^"|"$/g, '').trim());
}

// Skip header
for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts = parseCsvLine(line);
    if (parts.length < 3) continue;

    const filePathAbsolute = parts[0];
    const lineNumber = parts[1];
    const content = parts[2];

    const filePath = path.relative(process.cwd(), filePathAbsolute).replace(/\\/g, '/');

    let match;
    while ((match = hexRegex.exec(content)) !== null) {
        let color = match[0].toUpperCase();

        // Normalize 3-digit hex to 6-digit
        if (color.length === 4) {
            color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
        }

        if (!colorMap[color]) {
            colorMap[color] = {
                count: 0,
                files: {}
            };
        }

        colorMap[color].count++;
        if (!colorMap[color].files[filePath]) {
            colorMap[color].files[filePath] = [];
        }
        // Store distinct lines or check duplicates
        if (!colorMap[color].files[filePath].includes(lineNumber)) {
            colorMap[color].files[filePath].push(lineNumber);
        }
    }
}

// Generate Markdown
let md = `# Project Color Analysis

This document provides a detailed analysis of all usage of hex color codes in the project.

**Total Unique Colors Found:** ${Object.keys(colorMap).length}

## Color Usage Summary Table

| Color Preview | Hex Code | Occurrences | Primary Files Used |
| :---: | :---: | :---: | :--- |
`;

const sortedColors = Object.keys(colorMap).sort((a, b) => colorMap[b].count - colorMap[a].count);

for (const color of sortedColors) {
    const info = colorMap[color];
    const fileCount = Object.keys(info.files).length;
    const topFiles = Object.keys(info.files).slice(0, 3).join('<br>');
    const more = fileCount > 3 ? `<br>+${fileCount - 3} more` : '';

    // Create a color preview square using a placeholder image service or just text description if markdown supported styles, but GitHub md doesn't support inline styles well. 
    // We can use a trick with placeholder images if needed, or just the code. 
    // Using a simple square character might work if colored? No.
    // Let's just list the Hex Code.

    // Actually, we can use a placeholder image service like shields.io or custom svg, but "Color Preview" might just be "Hex Code" for now if we can't render it.
    // A common trick is \`![](https://via.placeholder.com/15/RRGGBB/000000?text=+)\` but it requires internet.
    // I will just leave the preview column as the hex code again or blank. 

    // Let's try to use a simple HTML span if the viewer supports it, otherwise just the code.
    const preview = `<img src="https://placehold.co/20x20/${color.substring(1)}/${color.substring(1)}.png" width="20" height="20" />`;

    md += `| ${preview} | \`${color}\` | ${info.count} | ${topFiles}${more} |\n`;
}

md += `\n## Detailed Color Usage Breakdown\n`;

for (const color of sortedColors) {
    md += `### Color: \`${color}\`\n`;
    // md += `<div style="width:100px; height:20px; background-color:${color}; border:1px solid #000;"></div>\n\n`; // Inline styles might not render in all viewers
    md += `**Total Occurrences:** ${colorMap[color].count}\n\n`;
    md += `**Used in Files:**\n\n`;
    md += `| File Name | Line Numbers |\n`;
    md += `| :--- | :--- |\n`;

    for (const [file, lines] of Object.entries(colorMap[color].files)) {
        md += `| \`${file}\` | ${lines.join(', ')} |\n`;
    }
    md += `\n---\n`;
}

fs.writeFileSync(outputPath, md);
console.log('Analysis complete. Document saved to ' + outputPath);
