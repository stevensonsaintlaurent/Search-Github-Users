import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

type StartsCardProps = {
  title: string;
  count: number;
};

const StartsCard = ({ title, count }: StartsCardProps) => {
  return (
    <Card>
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count} stars</CardDescription>
      </div>
    </Card>
  );
};

export default StartsCard;
