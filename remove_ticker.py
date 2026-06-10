import re
from pathlib import Path

SKIP = {'HomeClient.tsx'}

src = Path('frontend/src')
changed = []

for tsx in sorted(src.rglob('*.tsx')):
    if tsx.name in SKIP:
        continue

    text = tsx.read_text(encoding='utf-8')
    original = text

    # 1. Remove <ScrollingTicker /> (self-closing, with optional whitespace)
    text = re.sub(r'\n?\s*<ScrollingTicker\s*/>\n?', '\n', text)

    # 2. Remove ScrollingTicker import line
    text = re.sub(r"\nimport ScrollingTicker from '@/components/ScrollingTicker';\n", '\n', text)

    # 3. Remove inline scrolling ticker HTML block (multiline)
    #    Matches: <div className="our-scrolling-ticker"> ... </div> (outermost div)
    text = re.sub(
        r'\n?\s*<div className="our-scrolling-ticker">.*?</div>\s*</div>\s*</div>',
        '',
        text,
        flags=re.DOTALL
    )

    # 4. Catch any remaining standalone scrolling-ticker divs missed by pattern 3
    #    (pages that structure the inner divs differently)
    text = re.sub(
        r'\n?\s*<div className="our-scrolling-ticker">[\s\S]*?(?=\n\s*<(?:div|section|<>|\w))',
        '\n',
        text
    )

    if text != original:
        tsx.write_text(text, encoding='utf-8')
        changed.append(tsx.relative_to('.'))

print(f"Cleaned ticker from {len(changed)} files:")
for f in changed:
    print(f"  {f}")
