import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/queries";
import { type User } from "@/types";
import UserCard from "../user/UserCard";
import StartsContainer from "./StartsContainer";

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

  if (loading) return <p>Loading...</p>;
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
    </div>
  );
}
