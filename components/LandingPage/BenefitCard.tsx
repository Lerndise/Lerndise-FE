import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface BenefitCardProps {
  img: StaticImageData;
  title: string;
  text: string;
}

const BenefitCard = ({ img, title, text }: BenefitCardProps) => {
  return (
    <Card className="w-[270px]">
      <CardHeader className="">
        <div className="flex justify-center">
          <Image
            className="w-[200px] object-cover rounded-md"
            src={img}
            alt="Image"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-base font-bold text-lerndise-purple text-center h-auto flex items-center justify-center">
          {title}
        </h3>
        <p className="text-sm text-center">{text}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
