import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  title: string;
  imgLink: string;
};
export default function Product({ title, imgLink }: ProductProps) {
  return (
    <div className=" p-3 w-fit text-center flex flex-col items-center">
      <Image src={imgLink} width={200} height={300} alt={`Product ${title}`}></Image>
      <p className="font-medium">{title}</p>
      <Link href={""} className="capitalize text-white bg-blue-500 px-3 py-1  block w-fit rounded-sm">
        Mua ngay
      </Link>
    </div>
  );
}
