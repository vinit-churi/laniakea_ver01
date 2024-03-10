import { TAllProductsHeroImageType } from "@/types/common/types";

export const AllProductsHeroImages = [
  {
    id: 1,
    name: "newArrivals",
    title: "New Arrivals",
    description: "Discover our latest collection of stunning jewelry.",
    image: "/images/all_products_hero_background_01.jpg",
  },
  {
    id: 2,
    name: "exclusive",
    title: "Exclusive Collection",
    description:
      "Explore our exclusive line of unique and elegant jewelry pieces.",
    image: "/images/all_products_hero_background_02.jpg",
  },
  {
    id: 3,
    name: "diwali",
    title: "Diwali Special",
    description:
      "Celebrate Diwali with our exquisite jewelry crafted for the occasion.",
    image: "/images/all_products_hero_background_03.jpg",
  },
  // Add more objects for other scenarios
  {
    id: 4,
    name: "wedding",
    title: "Wedding Collection",
    description: "Discover the perfect jewelry for your special day.",
    image: "/images/all_products_hero_background_04.jpg",
  },
  {
    id: 5,
    name: "holidaySeason",
    title: "Holiday Season",
    description: "Elevate your holiday style with our festive jewelry designs.",
    image: "/images/all_products_hero_background_05.jpg",
  },
  {
    id: 6,
    name: "birthstones",
    title: "Birthstone Collection",
    description:
      "Find personalized jewelry with the perfect birthstone for your loved ones.",
    image: "/images/all_products_hero_background_06.jpg",
  },
];

const defaultHeroImage = {
  id: 0,
  name: "default",
  title: "All Products",
  description: "Explore our stunning collection of jewelry.",
  image: "/images/all_products_hero_background_07.jpg",
};

export const AllProductsHeroImageSelector = (
  slug: string,
): TAllProductsHeroImageType => {
  if (!slug || slug === "default") return defaultHeroImage;
  const heroSectionData =
    AllProductsHeroImages.find((item) => item.name === slug) ||
    defaultHeroImage;
  return heroSectionData;
};
