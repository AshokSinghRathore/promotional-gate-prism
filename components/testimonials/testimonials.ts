export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageSrc: string;
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Dia Malhotra",
    role: "Vista Society President",
    quote:
      "Prism Gate has revolutionized our community management. Security and communication have never been more seamless!",
    rating: 4.9,
    imageSrc: "/dia-malhotra.jpg", // Keeping original image
  },
  {
    id: 2,
    name: "Anurag Vishwaas",
    role: "Society Secretary",
    quote:
      "Implementing Prism Gate was the best decision for our community. Managing visitor entries and society notices is now effortless!",
    rating: 5,
    imageSrc: "/anurag-vishwaas.jpg", // Keeping original image
  },
  {
    id: 3,
    name: "Sunita Sharma",
    role: "Resident",
    quote:
      "Thanks to Prism Gate, I feel safer and more connected with our society management. It's made our lives so much easier!",
    rating: 4.8,
    imageSrc: "/sunita-sharma.jpg", // Keeping original image
  },
];
