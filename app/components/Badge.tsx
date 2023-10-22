import React from "react";
interface Badge {
  title: string;
  color?: string;
}

const Badge = ({ title, color }: Badge) => {
  const badgeColor = (color: string | undefined) => {
    switch (color) {
      case "green":
        return (
          <div className="text-green-700 bg-green-50 ring-green-600/20 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
            {title}
          </div>
        );
      case "blue":
        return (
          <div className="text-blue-700 bg-blue-50 ring-blue-600/20 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
            {title}
          </div>
        );
      default:
        return (
          <div className="text-indigo-700 bg-indigo-50 ring-indigo-600/20 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
            {title}
          </div>
        );
    }
  };

  return <>{badgeColor(color)}</>;
};

export default Badge;
