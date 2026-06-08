const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/components');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/fontFamily:\s*['"][^'"]+['"],?\s*/g, '');
  content = content.replace(/fontStyle:\s*['"]italic['"],?\s*/g, '');
  content = content.replace(/fontWeight:\s*\d+,?\s*/g, '');
  fs.writeFileSync(file, content);
});
console.log('Fonts cleaned');
