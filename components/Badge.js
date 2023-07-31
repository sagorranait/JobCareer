import React from "react";
import { useRouter } from "next/router";

const Badge = ({ children, className }) => {
  const router = useRouter();

  const searchBadgeHandler = (data) => {
    router.push({
      pathname: '/works/search',
      query: { searched: data },
    });
  }

  return (
    <div
      className={`bg-primary/10 font-light w-fit px-2 py-1 rounded-full text-primary text-sm ${className}`}
      onClick={()=>searchBadgeHandler(children)}
    >
      <p>{children}</p>
    </div>
  );
};

export default Badge;
