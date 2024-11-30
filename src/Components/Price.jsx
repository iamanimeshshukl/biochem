import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    title: "Platinum Sponsorship",
    price: "₹5,00,000",
    benefits: [
      "Logo on the Backdrop",
      "Logo on the Entrance Gate",
      "One Banner Standee at the Entrance",
      "10 mins Speaker Slot",
      "10 Delegate Passes",
      "3x2 Display Space",
      "Stall for Exhibition"
    ],
  },
  {
    title: "Gold Sponsorship",
    price: "₹3,00,000",
    benefits: [
      "Logo on the Backdrop",
      "Logo on the Entrance Gate",
      "10 mins Speaker Slot",
      "5 Delegate Passes",
      "Stall for Exhibition"
    ],
  },
  {
    title: "Silver Sponsorship",
    price: "₹1,00,000",
    benefits: [
      "Logo on the Backdrop",
      "Logo on the Entrance Gate",
      "One Banner Standee at the Entrance",
      "3 Delegate Passes",
      "Stall for Exhibition"
    ],
  },
  {
    title: "Bronze Sponsorship",
    price: "₹50,000",
    benefits: [
      "Logo on the Backdrop",
      "Logo on the Entrance Gate",
      "1 Delegate Pass"
    ],
  },
];

const PricingCard = ({ title, price, benefits }) => (
  <motion.div
    className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8 border border-base-300 shadow-primary/10 border-primary/10"
    whileHover={{ scale: 1.05, rotateY: 5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="flex justify-center items-baseline my-9">
      <span className="mr-2 text-5xl font-extrabold">{title}</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
          </svg>
          <span className="text-base-content/80">{benefit}</span>
        </li>
      ))}
    </ul>
    <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
      {price}
    </button>
  </motion.div>
);

const Price = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="py-8 max-w-screen-xl lg:py-16">
        {/* Text */}
        <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Pricing Plans
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              benefits={plan.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
