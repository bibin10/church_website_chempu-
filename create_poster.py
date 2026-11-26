import os
from PIL import Image, ImageDraw, ImageFont
import qrcode

def generate_launch_poster():
    # Target dimensions: High-Resolution Print Magazine Page (1240 x 1754 px - A4 format)
    W, H = 1240, 1754

    # Background: Nocturnal Sacred Sky or Sky Background
    if os.path.exists('assets/images/sky_background.jpg'):
        bg_sky = Image.open('assets/images/sky_background.jpg').resize((W, H), Image.Resampling.LANCZOS)
    else:
        bg_sky = Image.new('RGB', (W, H), (15, 28, 63))
    enhancer = Image.new('RGB', (W, H), (10, 22, 54))
    poster = Image.blend(bg_sky, enhancer, 0.65)

    draw = ImageDraw.Draw(poster, 'RGBA')

    # Fonts
    f_cinzel = lambda sz: ImageFont.truetype('assets/fonts/Cinzel.ttf', sz)
    f_georgia_b = lambda sz: ImageFont.truetype('georgiab.ttf', sz)
    f_georgia = lambda sz: ImageFont.truetype('georgia.ttf', sz)
    f_arial_b = lambda sz: ImageFont.truetype('arialbd.ttf', sz)
    f_arial = lambda sz: ImageFont.truetype('arial.ttf', sz)

    # Ornate Gold Filigree Borders
    draw.rectangle([45, 45, W - 45, H - 45], outline=(212, 163, 75, 230), width=4)
    draw.rectangle([58, 58, W - 58, H - 58], outline=(238, 197, 120, 150), width=1)
    draw.rectangle([68, 68, W - 68, H - 68], outline=(212, 163, 75, 80), width=2)

    # Corner decorative squares
    for cx, cy in [(45, 45), (W - 45, 45), (45, H - 45), (W - 45, H - 45)]:
        draw.rectangle([cx - 8, cy - 8, cx + 8, cy + 8], fill=(212, 163, 75, 255), outline=(255, 255, 255, 200))

    # 1. Header Eyebrow Pill
    pill_box = [W//2 - 290, 105, W//2 + 290, 145]
    draw.rounded_rectangle(pill_box, radius=20, fill=(15, 28, 63, 200), outline=(212, 163, 75, 200), width=2)
    draw.text((W//2, 125), "SANTHOM MARIA • SPECIAL DIGITAL ANNOUNCEMENT", fill=(238, 197, 120), font=f_arial_b(17), anchor='mm')

    # 2. Church Name
    draw.text((W//2, 190), "ST. THOMAS RC CHURCH CHEMPU", fill=(255, 255, 255), font=f_georgia_b(36), anchor='mm')
    draw.text((W//2, 232), "Archdiocese of Ernakulam-Angamaly • Estd. 1307 AD", fill=(212, 163, 75), font=f_arial(20), anchor='mm')

    # Decorative Cross separator
    draw.line([(W//2 - 200, 265), (W//2 - 30, 265)], fill=(212, 163, 75, 180), width=2)
    draw.text((W//2, 265), "+", fill=(238, 197, 120), font=f_georgia_b(24), anchor='mm')
    draw.line([(W//2 + 30, 265), (W//2 + 200, 265)], fill=(212, 163, 75, 180), width=2)

    # 3. Main Announcement Headline
    draw.text((W//2, 325), "OUR OFFICIAL PARISH WEBSITE", fill=(255, 255, 255), font=f_arial_b(28), anchor='mm')
    draw.text((W//2, 380), "IS NOW LIVE!", fill=(238, 197, 120), font=f_georgia_b(54), anchor='mm')
    draw.text((W//2, 435), "Connecting Parishioners Across the Globe With 700+ Years of Divine Grace", fill=(200, 215, 240), font=f_arial(20), anchor='mm')

    # 4. Showcase Church Facade Card
    facade_img = Image.open('assets/images/st_thomas_chempu_church_facade.jpg').convert('RGB')
    card_w, card_h = 920, 430
    card_x, card_y = (W - card_w) // 2, 480
    facade_cropped = facade_img.resize((card_w, card_h), Image.Resampling.LANCZOS)

    # Frame for the photo
    draw.rounded_rectangle([card_x - 6, card_y - 6, card_x + card_w + 6, card_y + card_h + 6], radius=16, fill=(15, 28, 63, 240), outline=(212, 163, 75, 240), width=3)
    poster.paste(facade_cropped, (card_x, card_y))

    # Photo banner ribbon at bottom of photo
    draw.rectangle([card_x, card_y + card_h - 48, card_x + card_w, card_y + card_h], fill=(10, 18, 42, 230))
    draw.text((W//2, card_y + card_h - 24), "Historic Sanctuary & Parish Center • Chempu, Vaikom", fill=(238, 197, 120), font=f_arial_b(18), anchor='mm')

    # 5. Features Grid
    features_y = 955
    feats = [
        ("Daily Mass Schedules", "Holy Qurbana timings, novenas and feast dates"),
        ("Parish History & Heritage", "Ancient 1307 AD foundation & sacred heritage"),
        ("Santhom Maria Flipbook", "Digital magazine edition with 3D page turns"),
        ("Community & Institutions", "Centenary LP School, Convent and Ministries")
    ]

    col_w = 440
    for idx, (head, desc) in enumerate(feats):
        fx = card_x + (idx % 2) * (col_w + 40)
        fy = features_y + (idx // 2) * 85
        draw.rounded_rectangle([fx, fy, fx + col_w, fy + 72], radius=10, fill=(15, 28, 63, 190), outline=(212, 163, 75, 120), width=1)
        # Gold icon bullet
        draw.ellipse([fx + 16, fy + 18, fx + 36, fy + 38], fill=(212, 163, 75, 255))
        draw.text((fx + 26, fy + 26), "*", fill=(15, 28, 63), font=f_arial_b(16), anchor='mm')
        
        # Use Cinzel font for Parish History & Heritage topic as requested
        if head == "Parish History & Heritage":
            draw.text((fx + 48, fy + 16), head, fill=(255, 255, 255), font=f_cinzel(16))
            draw.text((fx + 48, fy + 43), desc, fill=(180, 195, 220), font=f_cinzel(13))
        else:
            draw.text((fx + 48, fy + 16), head, fill=(255, 255, 255), font=f_arial_b(17))
            draw.text((fx + 48, fy + 42), desc, fill=(180, 195, 220), font=f_arial(14))

    # 6. QR Code & Web Access Box
    qr_y = 1165
    qr_box = [card_x, qr_y, card_x + card_w, qr_y + 355]
    draw.rounded_rectangle(qr_box, radius=18, fill=(15, 28, 63, 240), outline=(212, 163, 75, 255), width=2)

    # High-resolution QR code
    qr = qrcode.QRCode(version=1, box_size=8, border=2)
    qr.add_data("https://www.stthomasrcchurchchempu.in")
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="#0f1c3f", back_color="#ffffff").convert('RGB')
    qr_w, qr_h = 240, 240
    qr_resized = qr_img.resize((qr_w, qr_h), Image.Resampling.LANCZOS)

    qr_px = card_x + 40
    qr_py = qr_y + 40
    draw.rounded_rectangle([qr_px - 4, qr_py - 4, qr_px + qr_w + 4, qr_py + qr_h + 4], radius=10, fill=(255, 255, 255), outline=(212, 163, 75), width=2)
    poster.paste(qr_resized, (qr_px, qr_py))

    # QR Call to Action text
    tx_x = qr_px + qr_w + 35
    draw.text((tx_x, qr_y + 45), "SCAN TO VISIT THE PARISH PORTAL", fill=(238, 197, 120), font=f_arial_b(20))
    draw.text((tx_x, qr_y + 80), "Open your smartphone camera and scan this QR code", fill=(220, 230, 245), font=f_arial(16))
    draw.text((tx_x, qr_y + 110), "to access schedules, announcements and community updates.", fill=(180, 195, 220), font=f_arial(16))

    # Web Address Box
    link_box = [tx_x, qr_y + 155, tx_x + 550, qr_y + 225]
    draw.rounded_rectangle(link_box, radius=12, fill=(24, 46, 102), outline=(212, 163, 75), width=2)
    draw.text((tx_x + 20, qr_y + 172), "WEBSITE LINK:", fill=(238, 197, 120), font=f_arial_b(16))
    draw.text((tx_x + 20, qr_y + 196), "www.stthomasrcchurchchempu.in", fill=(255, 255, 255), font=f_georgia_b(22))

    draw.text((tx_x, qr_y + 250), "Available 24/7 on Smartphone, Tablet and Computer", fill=(170, 190, 220), font=f_arial(15))
    draw.text((tx_x, qr_y + 280), "Read Santhom Maria in 3D flipbook anywhere in the world!", fill=(212, 163, 75), font=f_arial_b(15))

    # 7. Bottom Parish Blessings Footer
    draw.line([(card_x, 1550), (card_x + card_w, 1550)], fill=(212, 163, 75, 120), width=1)
    draw.text((W//2, 1580), "ST. THOMAS SYRO-MALABAR ROMAN CATHOLIC CHURCH", fill=(255, 255, 255), font=f_georgia_b(20), anchor='mm')
    draw.text((W//2, 1612), "Chempu P.O., Vaikom, Kottayam District, Kerala - 686 608", fill=(212, 163, 75), font=f_arial(16), anchor='mm')
    draw.text((W//2, 1642), "A Publication of the Parish Media and Communications Council - Santhom Maria", fill=(150, 170, 200), font=f_arial(14), anchor='mm')
    draw.text((W//2, 1675), "Designed & Developed by Bibin Joseph", fill=(238, 197, 120), font=f_arial_b(16), anchor='mm')

    # Save Output Formats
    os.makedirs('assets/magazine/poster', exist_ok=True)
    poster_png = 'assets/magazine/poster/santhom_maria_website_launch_poster.png'
    poster_jpg = 'assets/magazine/poster/santhom_maria_website_launch_poster.jpg'
    poster_pdf = 'assets/magazine/poster/santhom_maria_website_launch_poster.pdf'

    poster.save(poster_png, 'PNG', optimize=True)
    poster.save(poster_jpg, 'JPEG', quality=95, optimize=True)
    poster.save(poster_pdf, 'PDF', resolution=150.0)

    print("Successfully generated high-resolution magazine poster!")
    print(f"PNG: {poster_png} ({os.path.getsize(poster_png)/1024:.1f} KB)")
    print(f"JPG: {poster_jpg} ({os.path.getsize(poster_jpg)/1024:.1f} KB)")
    print(f"PDF: {poster_pdf} ({os.path.getsize(poster_pdf)/1024:.1f} KB)")

if __name__ == '__main__':
    generate_launch_poster()
