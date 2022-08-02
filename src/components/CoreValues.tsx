import { Gauge, Recycle, Sparkle, TrendUp } from "phosphor-react";

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
        <div key={i} className={`${color} flex items-center`}>
          {icon}
          <p className="ml-2 text-base">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
