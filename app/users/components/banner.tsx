import Image from "next/image";
import "../../themes/animations.css";

import miniature from "@/public/imgs/miniature.svg"

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-full banner">
      <div className="w-full h-full max-h-[600px] bg-primary area">
        <div className="circles xl:pl-[220px] pt-16 max-h-[600px] flex items-center">
          <div className="w-full text-center md:text-left px-20 flex flex-row gap-10 items-center justify-between">
            <div className="flex flex-col gap-4">
              {children}
            </div>
            <Image
              width={400}
              height={400}
              alt="Imagem do banner"
              src={miniature}
              className="hidden lg:inline-block z-10"
            />
          </div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
    </div>
  );
}
