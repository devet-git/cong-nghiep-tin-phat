"use client";
import joinClassNames from "@/utils/join-class-name";
import { ListBulletIcon, TruckIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);
  const categoryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      categoryRef.current && !categoryRef.current.contains(e.target as Node) && setIsShowCategory(false);
    }
    document.addEventListener("click", handleClickOutside);

    return () => document.addEventListener("click", handleClickOutside);
  }, []);

  const toggleCategory = () => setIsShowCategory((prev) => !prev);
  return (
    <header className="px-side">
      <section className="flex justify-between px-2 py-5 w-full ">
        <Image
          src="https://congnghieptinphat.com/wp-content/uploads/2022/12/logotp-1024x299.png"
          alt="logo"
          width={300}
          height={100}
        />
        <div className="flex gap-1">
          <div className="rounded-full p-2 bg-orange-500 h-fit">
            <TruckIcon className="h-9 w-9 text-white" />
          </div>
          <div className="flex flex-col">
            <span>Vận chuyển</span>
            <span>hàng tận nơi</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full p-2 bg-orange-500 h-fit">
            <PhoneIcon className="h-9 w-9 text-white" />
          </div>
          <div className="flex flex-col">
            <span>Quảng Ngãi</span>
            <span>0813839079</span>
          </div>
          <div className="flex flex-col">
            <span>Đăk Lăk</span>
            <span>0813839079</span>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full p-2 bg-orange-500 h-fit">
            <BanknotesIcon className="h-9 w-9 text-white" />
          </div>{" "}
          <div className="flex flex-col">
            <span>Thanh toán</span>
            <span>khi nhận hàng</span>
          </div>
        </div>
      </section>
      <div className="flex items-center gap-4 sticky top-0">
        <div className="category relative">
          <div
            ref={categoryRef}
            className="p-2 flex items-center gap-2 bg-orange-500 cursor-pointer text-white"
            onClick={toggleCategory}
          >
            <ListBulletIcon className="h-8 w-8" />
            Danh mục sản phẩm
          </div>
          <div className={joinClassNames(isShowCategory ? "block" : "hidden", "absolute bg-orange-200 z-10 w-full")}>
            <Link href="" className="block">
              1
            </Link>
            <Link href="" className="block">
              2
            </Link>
            <Link href="" className="block">
              3
            </Link>
            <Link href="" className="block">
              4
            </Link>
            <Link href="" className="block">
              5
            </Link>
          </div>
        </div>
        <nav className="flex gap-4 ">
          <Link href="">Giới thiệu</Link>
          <Link href="">Khuyến mãi</Link>
          <Link href="">Blog</Link>
          <Link href="">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
