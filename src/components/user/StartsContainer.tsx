import StartsCard from "./StartsCard";

type StartsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

const StartsContainer = (props: StartsContainerProps) => {
  const { totalRepos, followers, following, gists } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8 w-full">
      <StartsCard title="Repositories" count={totalRepos} />
      <StartsCard title="Followers" count={followers} />
      <StartsCard title="Following" count={following} />
      <StartsCard title="Gists" count={gists} />
    </div>
  );
};

export default StartsContainer;
