import type { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos);
  return <div>repositories will be displayed here</div>;
};

export default ForkedRepos;
