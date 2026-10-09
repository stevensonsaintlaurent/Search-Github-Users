import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/queries";
import { type User } from "@/types";
import UserCard from "../user/UserCard";
import StartsContainer from "./StartsContainer";
import ForkedRepos from "../charts/ForkedRepos";
import PopularRepos from "../charts/PopularRepos";
import UsedLanguages from "../charts/UsedLanguages";
import Loading from "./Loading";

type UserProfileProps = {
  userName: string;
};

export type UserData = {
  user: User;
};
export default function UserProfile({ userName }: UserProfileProps) {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <h2 className="text-2xl">user not found</h2>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />

      <StartsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguages repositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
}
