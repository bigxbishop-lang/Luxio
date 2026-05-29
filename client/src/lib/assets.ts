const SUPABASE_BASE =
  'https://xllmacobisbbmyggbkwo.supabase.co/storage/v1/object/public/Background';

// ── Background / character images ──────────────────────────────────────────
export const BACKGROUND_IMAGES = {
  image1: `${SUPABASE_BASE}/Background%20images/Image1.JPG`,
  image2: `${SUPABASE_BASE}/Background%20images/image2.jpg`,
};

// ── Gallery images (1–27) ───────────────────────────────────────────────────
// Supabase path: Background/Gallery/ (14)1.jpg  (note the leading space in some)
const galleryBase = `${SUPABASE_BASE}/Gallery`;

export const GALLERY_IMAGES: string[] = [
  `${galleryBase}/%201.jpg`,           // (1)1.jpg  — adjust if filenames differ
  ...Array.from({ length: 27 }, (_, i) =>
    `${galleryBase}/%20(${i + 1})1.jpg`
  ),
];

// Individual named exports for convenience
export const GALLERY = {
  img1:  `${galleryBase}/%20(1)1.jpg`,
  img2:  `${galleryBase}/%20(2)1.jpg`,
  img3:  `${galleryBase}/%20(3)1.jpg`,
  img4:  `${galleryBase}/%20(4)1.jpg`,
  img5:  `${galleryBase}/%20(5)1.jpg`,
  img6:  `${galleryBase}/%20(6)1.jpg`,
  img7:  `${galleryBase}/%20(7)1.jpg`,
  img8:  `${galleryBase}/%20(8)1.jpg`,
  img9:  `${galleryBase}/%20(9)1.jpg`,
  img10: `${galleryBase}/%20(10)1.jpg`,
  img11: `${galleryBase}/%20(11)1.jpg`,
  img12: `${galleryBase}/%20(12)1.jpg`,
  img13: `${galleryBase}/%20(13)1.jpg`,
  img14: `${galleryBase}/%20(14)1.jpg`,
  img15: `${galleryBase}/%20(15)1.jpg`,
  img16: `${galleryBase}/%20(16)1.jpg`,
  img17: `${galleryBase}/%20(17)1.jpg`,
  img18: `${galleryBase}/%20(18)1.jpg`,
  img19: `${galleryBase}/%20(19)1.jpg`,
  img20: `${galleryBase}/%20(20)1.jpg`,
  img21: `${galleryBase}/%20(21)1.jpg`,
  img22: `${galleryBase}/%20(22)1.jpg`,
  img23: `${galleryBase}/%20(23)1.jpg`,
  img24: `${galleryBase}/%20(24)1.jpg`,
  img25: `${galleryBase}/%20(25)1.jpg`,
  img26: `${galleryBase}/%20(26)1.jpg`,
  img27: `${galleryBase}/%20(27)1.jpg`,
};
