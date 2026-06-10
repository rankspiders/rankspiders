import re
from pathlib import Path

# Image src -> alt text
# Empty string = keep alt="" (genuinely decorative, correct SEO practice)
ALT_MAP = {
    # Decorative icons — stay empty (screen readers skip them)
    '/images/icons/icon-sparkle.svg': '',
    '/images/icons/icon-growth-counter.svg': '',
    '/images/icons/icon-belief-fund.svg': '',
    '/images/icons/testimonial-quate.svg': '',

    # Interactive / inline icons with adjacent text — minimal label
    '/images/icons/icon-phone-white.svg': 'Call Rank Spiders',
    '/images/icons/icon-phone.svg': 'Phone',
    '/images/icons/icon-mail.svg': 'Email address',
    '/images/icons/icon-position.svg': 'Job position',
    '/images/icons/icon-location.svg': 'Office location',
    '/images/icons/icon-headset-gradiant.svg': 'Customer support contact',
    '/images/icons/icon-location-gradiant.svg': 'Rank Spiders office location',
    '/images/icons/icon-about-counter-1.svg': 'Years of digital marketing experience',
    '/images/icons/icon-about-counter-2.svg': 'Successful client campaigns delivered',
    '/images/icons/icon-offer-body-1.svg': 'Free digital marketing consultation',
    '/images/icons/icon-offer-body-2.svg': 'Flexible no-contract marketing plans',
    '/images/icons/icon-offer-body-3.svg': 'Proven results-driven marketing strategies',

    # Section / content images
    '/images/sections/digital-advantage-img-1.jpg': 'Rank Spiders digital marketing strategy and campaign execution',
    '/images/sections/digital-advantage-img-2.jpg': 'SEO and social media marketing performance metrics dashboard',
    '/images/sections/digital-advantage-img-3.jpg': 'Advanced technical SEO and web development expertise at Rank Spiders',
    '/images/sections/project-marketing-image.jpg': 'Rank Spiders client digital marketing campaign results',
    '/images/sections/project-highlight-image.jpg': 'Rank Spiders project highlights and client case study results',
    '/images/sections/service-single-image.jpg': 'Rank Spiders SEO audit and digital marketing services India',
    '/images/sections/approach-image.jpg': 'Rank Spiders strategic approach to digital marketing and business growth',
    '/images/sections/work-image-1.jpg': 'Digital marketing team working on client SEO and social media campaigns',
    '/images/sections/work-image-2.jpg': 'Web development and digital marketing strategy implementation at Rank Spiders',
    '/images/sections/promise-image.jpg': 'Rank Spiders commitment to transparent and measurable digital marketing results',
    '/images/sections/our-belief-image.png': 'Rank Spiders core values - data-driven digital marketing agency India',
    '/images/sections/offer-image.png': 'Rank Spiders free digital marketing consultation and service offers',
    '/images/sections/belief-graph-imge.png': 'Client business growth graph showing digital marketing ROI by Rank Spiders',
    '/images/sections/why-choose-image.png': 'Why choose Rank Spiders as your digital marketing agency in India',

    # Author / testimonial avatars
    '/images/authors/author-1.jpg': 'Client testimonial - Rank Spiders digital marketing agency India',
    '/images/authors/author-2.jpg': 'Happy client review - Rank Spiders digital marketing results',
    '/images/authors/author-3.jpg': 'Verified client success story - Rank Spiders India',

    # Team photos
    '/images/team/team-2.png': 'Brooklyn Simmons - Digital Marketing Specialist at Rank Spiders',

    # Gallery work samples
    '/images/gallery/gallery1.jpg': 'Rank Spiders social media marketing campaign work sample',
    '/images/gallery/gallery2.jpg': 'Rank Spiders Facebook and Instagram marketing project results',
    '/images/gallery/gallery3.jpg': 'Rank Spiders content marketing and SEO project sample',
    '/images/gallery/gallery4.jpg': 'Rank Spiders video and content production work',
    '/images/gallery/gallery5.jpg': 'Rank Spiders email marketing campaign design and results',
    '/images/gallery/gallery6.jpg': 'Rank Spiders email strategy and newsletter design work',
    '/images/gallery/gallery7.jpg': 'Rank Spiders link building and off-page SEO project',
    '/images/gallery/gallery8.jpg': 'Rank Spiders backlink acquisition and SEO authority building',
    '/images/gallery/gallery9.jpg': 'Rank Spiders SaaS and local business SEO case study',

    # Project / case study images
    '/images/projects/project-1.jpg': 'Rank Spiders case study - ecommerce SEO traffic growth',
    '/images/projects/project-2.jpg': 'Rank Spiders case study - local SEO domination for multi-location brand',
    '/images/projects/project-3.jpg': 'Rank Spiders web development and custom landing page project',
    '/images/projects/project-4.jpg': 'Rank Spiders landing page design and conversion rate optimisation',
    '/images/projects/project-5.jpg': 'Rank Spiders Meta Ads and PPC campaign case study',
    '/images/projects/project-6.jpg': 'Rank Spiders paid advertising ROI and performance tracking project',

    # Error page
    '/images/404-error-img.png': '404 - Page not found on Rank Spiders website',
}

src_dir = Path('frontend/src')
changed_files = []

for tsx in sorted(src_dir.rglob('*.tsx')):
    text = tsx.read_text(encoding='utf-8')
    original = text

    for img_path, alt_text in ALT_MAP.items():
        escaped = re.escape(img_path)
        # Handle: src="X" [other attrs] alt=""
        text = re.sub(
            rf'(src="{escaped}"[^>]*?)alt=""',
            lambda m, a=alt_text: m.group(1) + f'alt="{a}"',
            text
        )
        # Handle: alt="" [other attrs] src="X"
        text = re.sub(
            rf'alt=""([^>]*?src="{escaped}")',
            lambda m, a=alt_text: f'alt="{a}"' + m.group(1),
            text
        )

    if text != original:
        tsx.write_text(text, encoding='utf-8')
        changed_files.append(tsx.relative_to('.'))

print(f"Updated {len(changed_files)} files:")
for f in changed_files:
    print(f"  {f}")
