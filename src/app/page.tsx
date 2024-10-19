import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-4 my-10 grid grid-cols-2 gap-4">
        <div>
          <Image
            src="/img/img1.png"
            alt="Image 1"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex justify-center">
            <a
              href="/model"
              className="text-[16px] font-bold leading-[20px] text-center text-[#024BAD]"
            >
              Album Cover Yeezus
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/img/img2.png"
            alt="Image 2"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex justify-center">
            <a
              href="/model"
              className="text-[16px] font-bold leading-[20px] text-center text-[#024BAD]"
            >
              Louis Vuitton Holographic Duffel Bag
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/img/img3.png"
            alt="Image 3"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex justify-center">
            <a
              href="/model"
              className="text-[16px] font-bold leading-[20px] text-center text-[#024BAD]"
            >
              Louis Vuitton Holographic Duffel Bag
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/img/img4.png"
            alt="Image 4"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex justify-center">
            <a
              href="/model"
              className="text-[16px] font-bold leading-[20px] text-center text-[#024BAD]"
            >
              Louis Vuitton Holographic Duffel Bag
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/img/img5.png"
            alt="Image 5"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex justify-center">
            <a
              href="/model"
              className="text-[16px] font-bold leading-[20px] text-center text-[#024BAD]"
            >
              Louis Vuitton Holographic Duffel Bag
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/img/img6.png"
            alt="Image 6"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex justify-center">
            <a
              href="/model"
              className="text-[16px] font-bold leading-[20px] text-center text-[#024BAD]"
            >
              Louis Vuitton Holographic Duffel Bag
            </a>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/img/hero.png"
          alt="Image 6"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <div className="flex justify-center">
          <a
            href="/model"
            className="text-[24px] font-bold leading-[20px] text-center text-[#024BAD]"
          >
            Off-White™ Mona Lisa Hoodie
          </a>
        </div>
      </div>
      <div className="my-10">
        <Image
          src="/img/qr.png"
          alt="QR"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <div className="flex justify-center">
          <a
            href="https://ar-code.com/mw3QkGasX?view=webar"
            className="text-[24px] font-bold leading-[20px] text-center text-[#024BAD]"
          >
            Example QR
          </a>
        </div>
      </div>
    </>
  );
}
