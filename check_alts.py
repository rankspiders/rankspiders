import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')

DECORATIVE = {
    'icon-sparkle.svg',
    'icon-growth-counter.svg',
    'icon-belief-fund.svg',
    'testimonial-quate.svg',
}

missing_alt = []
empty_content = []
empty_decorative = []

for tsx in sorted(Path('frontend/src').rglob('*.tsx')):
    text = tsx.read_text(encoding='utf-8')
    rel = str(tsx.relative_to('frontend/src'))

    for m in re.finditer(r'<img\b([^>]*?)/?>', text, re.DOTALL):
        attrs = m.group(1)
        src_m = re.search(r'src=["\']([^"\']+)["\']', attrs)
        alt_m = re.search(r'alt=["\']([^"\']*)["\']', attrs)
        src = src_m.group(1) if src_m else '(dynamic/variable)'
        fname = src.split('/')[-1]

        if alt_m is None:
            missing_alt.append(f'{rel}: {src}')
        elif alt_m.group(1) == '':
            if fname in DECORATIVE or not src_m:
                empty_decorative.append(f'{rel}: {src}')
            else:
                empty_content.append(f'{rel}: {src}')

print('=== MISSING alt attribute entirely ===')
for x in missing_alt:
    print(' ', x)
print(f'Total: {len(missing_alt)}')

print()
print('=== EMPTY alt on CONTENT images (needs text) ===')
for x in empty_content:
    print(' ', x)
print(f'Total: {len(empty_content)}')

print()
print(f'=== Empty alt on decorative icons (correct): {len(empty_decorative)} ===')
