import type { Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories);
  console.log(popularRepos);
  return <div>popular repositories will be displayed hereS</div>;
};

export default PopularRepos;
