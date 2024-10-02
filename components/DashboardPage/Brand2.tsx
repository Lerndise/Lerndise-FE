import LerndiseLogo2 from "@/public/LearndiseBrand2.svg";
import Image from "next/image";

const Brand2 = () => {
  return (
    <Image
      className='mt-1.5 h-[52px] w-[150px] object-contain '
      src={LerndiseLogo2}
      alt='Lerndise Logo'
    />
  );
};

export default Brand2;
