import { BanknotesIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <footer className="">
      <section className="py-5 flex gap-5 px-side">
        <div className="max-w-md">
          <h2 className="text-xl font-bold">Về chúng tôi</h2>
          <div className="flex flex-col gap-3">
            <p>Công ty TNHH MTV TMDV Công Nghiệp Tín Phát</p>
            <p>MST:4300882783</p>
            <p>Địa chỉ: 115 Phạm Văn Đồng, Phường Nghĩa Chánh, Thành phố Quảng Ngãi, Tỉnh Quảng Ngãi</p>
            <p>Hotline/Zalo/Viber: 0934.216.257</p>
          </div>
        </div>
        <div className="w-1/4 prose">
          <h2 className="text-xl font-bold">Danh mục</h2>
          <div className="flex flex-col gap-3">
            <a href="">Trang chủ</a>
            <a href="">Sản phẩm</a>
            <a href="">Giới thiệu</a>
            <a href="">Tin tức</a>
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="text-xl font-bold ">Hỗ trợ khách hàng</h2>
          <div className="flex flex-col gap-3">
            <p>Chính sách bảo mật thông tin</p>
            <p>Chính sách giao nhận hàng</p>
            <p>Chính sách Bảo Hành - Đổi trả</p>
            <p>Chính sách thanh toán</p>
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="text-xl font-bold">Kết nối với chúng tôi</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87679.43230453599!2d109.20623651394706!3d13.783691679950033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6c65736eabd9%3A0xd362348e5af3d559!2zUXV5IE5oxqFuLCBCw6xuaCDEkOG7i25oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697701577316!5m2!1svi!2s"
              width="400"
              height="300"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-[#007AC9] flex flex-col justify-center gap-2 items-center py-5 text-white">
        <div className="flex gap-3">
          <TruckIcon className="h-10 w-10 text-gray-200" />
          <BanknotesIcon className="h-10 w-10 text-gray-200" />
        </div>
        <p>Copyright 2023 © congnghieptinphat.com</p>
      </section>
    </footer>
  );
}
