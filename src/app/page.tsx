"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Product from "@/components/Product";

export default function Home() {
  const imageSlideLinks = [
    "https://congnghieptinphat.com/wp-content/uploads/2023/02/slider_1.webp",
    "https://congnghieptinphat.com/wp-content/uploads/2023/02/slider_2.webp",
    "https://congnghieptinphat.com/wp-content/uploads/2023/02/slider_3.webp",
  ];
  const products = [
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
    {
      title: "ahihi",
      imgLink: "https://congnghieptinphat.com/wp-content/uploads/2022/03/GRILLKLENE-247x300.jpg",
    },
  ];
  return (
    <>
      <Header />
      <main className="">
        <div className="px-side">
          <section className="slider-image w-full">
            <Swiper
              className="cursor-grabbing"
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={1}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              speed={3000}
              loop
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {imageSlideLinks.map((link, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={link}
                    className="w-full"
                    width={0}
                    height={0}
                    layout="responsive"
                    objectFit="cover"
                    alt="slider image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <section className="image-show flex w-full">
            {imageSlideLinks.map((link, index) => (
              <div key={index} className="w-full relative h-[20vh]">
                <Image src={link} fill objectFit="contain" alt={`slider image ${index}`} />
              </div>
            ))}
          </section>
          <section className="slider-products pb-5">
            <Swiper
              className="cursor-grabbing"
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500 }}
              speed={1000}
              loop
            >
              {products.map((prod, index) => (
                <SwiperSlide key={index}>
                  <Product title={prod.title} imgLink={prod.imgLink} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
        <section className="bg-[#333A44] py-5 flex items-center justify-evenly text-white">
          <span className="flex items-center gap-2">
            <EnvelopeIcon className="h-7 w-7" />
            Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.
          </span>
          <div className="flex items-center gap-2">
            <input
              type="email"
              name="email"
              placeholder="Địa chỉ email"
              className="p-2 text-white bg-[#5C6169] focus:outline-none"
            />
            <button className="bg-[#0869BD] rounded p-2">Đăng ký</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

