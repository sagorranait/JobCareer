import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Badge = ({ children, className }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const capitalizeSkill = (skill) => {
    return skill
      .split(' ')
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
      .join(' ');
  };

  const searchBadgeHandler = async (data) => {
    setLoading(true);
    const capitalizedSkill = capitalizeSkill(data);
    await axios.get(`/api/jobs/search?skill=${capitalizedSkill}`)
    .then(res => {
      const serializedData = JSON.stringify(res.data);
      router.push({
        pathname: '/works/search',
        query: { searched: serializedData },
      });
      setLoading(false);
    })
    .catch(error => console.error(error));
  }

  return (
    <div
      className={`bg-primary/10 font-light w-fit px-2 py-1 rounded-full text-primary text-sm ${className}`}
      onClick={()=>searchBadgeHandler(children)}
    >
      <p>{loading ? 'Searching...' : children}</p>
    </div>
  );
};

export default Badge;
