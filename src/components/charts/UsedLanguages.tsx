import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculatePopularLanguages(repositories);
  console.log(popularLanguages);
  return <div>used languages will be displayed here</div>;
};

export default UsedLanguages;
