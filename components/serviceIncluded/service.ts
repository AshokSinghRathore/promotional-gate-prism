export interface ServiceType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Visitor Management",
    description:
      "We use a six-digit passcode system for visitors, making it easy for guests to enter securely and ensuring smooth check-ins for everyone in our community.",
    imageSrc: "/visitor.jpg", // Replace with correct image path
  },
  {
    id: 2,
    title: "Delivery Management",
    description:
      "If you're not available to collect your packages, you can choose the 'Leave at Gate' option to have them securely left there for you.",
    imageSrc: "/delivery.jpg", // Replace with correct image path
  },
  {
    id: 3,
    title: "Daily Staff Management",
    description:
      "Prism Gate's SmartEye attendance system verifies staff check-in and check-out times using facial recognition technology.",
    imageSrc: "/staff.jpg", // Replace with correct image path
  },
  {
    id: 4,
    title: "Parking Management",
    description:
      "PrismGate's parking management system streamlines vehicle entry and exit, ensuring efficient and hassle-free parking experiences for all users.",
    imageSrc: "/parking.jpg", // Replace with correct image path
  },
  {
    id: 5,
    title: "Admin App",
    description:
      "The PrismGate admin app provides comprehensive management tools, allowing administrators to efficiently oversee all aspects of the society and its perations.",
    imageSrc: "/admin.jpg", // Replace with correct image path
  },
  {
    id: 6,
    title: "Amenities Management",
    description:
      "The Amenity Management feature in the PrismGate app facilitates seamless coordination and reservation of community amenities, enhancing residents' convenience and enjoyment.",
    imageSrc: "/amenity.jpg", // Replace with correct image path
  },
];
