const SUPABASE_BASE =
  'https://xllmacobisbbmyggbkwo.supabase.co/storage/v1/object/public/Background';

const galleryBase = `${SUPABASE_BASE}/Gallery`;

export const BACKGROUND_IMAGES = {
  image1: `${SUPABASE_BASE}/Background%20images/Image1.JPG`,
  image2: `${SUPABASE_BASE}/Background%20images/image2.jpg`,
};

export const GALLERY_IMAGES: string[] = Array.from({ length: 27 }, (_, i) =>
  `${galleryBase}/%20(${i + 1})1.jpg`
);
