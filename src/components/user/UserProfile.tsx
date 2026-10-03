type UserProfileProps = {
  userName: string;
};

console.log("UserProfile component loaded");
export default function UserProfile({ userName }: UserProfileProps) {
  return <h1 className="text-2xl font-bold">{userName}</h1>;
}
