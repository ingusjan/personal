import { Gauge, Recycle, Sparkle, TrendUp, Wrench } from "phosphor-react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const valueIconSize = 24;

  const values = [
    {
      title: "Scalability",
      color: "text-blue-200",
      icon: <TrendUp size={valueIconSize} />,
    },
    {
      title: "Performance",
      color: "text-green-200",
      icon: <Gauge size={valueIconSize} />,
    },
    {
      title: "Reusability",
      color: "text-yellow-200",
      icon: <Recycle size={valueIconSize} />,
    },
    {
      title: "Accessible UX/UI",
      color: "text-pink-200",
      icon: <Sparkle size={valueIconSize} />,
    },
  ];

  return (
    <div className="mt-3 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
      {values.map(({ title, color, icon }, i) => (
        <motion.div
          initial={{ marginTop: 10, opacity: "0%" }}
          animate={{ marginTop: 0, opacity: "80%" }}
          transition={{
            duration: 1,
            delay: 0.8 + i * 0.25,
            easings: "easeInOut",
          }}
          key={i}
          className={`${color} opacity-70 hover:opacity-100 transition flex items-center`}
        >
          {icon}
          <p className="ml-2 text-base">{title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreValues;
