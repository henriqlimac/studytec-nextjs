import Image from "next/image";

import miniature from "@/public/imgs/girl-studying.svg"

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-full px-5 pt-20 rounded-xl overflow-hidden">
      <div className="w-full bg-blue saturate-[1.3] h-[425px] flex flex-col justify-center rounded-xl overflow-hidden lg:overflow-visible">
        <div className="flex items-center justify-center">
          <div className="w-full text-center md:text-left px-20 flex flex-row gap-10 items-center justify-between">
            <div className="flex flex-col justify-center gap-4 relative z-50 max-w-[500px]">
              {children}
            </div>
            <Image
              width={490}
              height={490}
              alt="Imagem do banner"
              src={miniature}
              className="opacity-10 right-0 inline-block lg:opacity-100 z-10 absolute lg:right-[5%] xl:right-[10%] bottom-[-25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
