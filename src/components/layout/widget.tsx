import Image from "next/image";
import Link from "next/link";

const Widget = ({ whatsapp_number }: { whatsapp_number: string }) => {
  if (!whatsapp_number) return null;
  return (
    <Link
      href={`https://wa.me/${whatsapp_number.replaceAll(" ", "")}`}
      target="_blank"
      className="fixed bottom-24 right-4 md:bottom-10 md:right-6 z-90"
    >
      <button
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition cursor-pointer"
      >
        <Image src={"/whatsapp.webp"} alt="whatsapp" width={25} height={25} />
      </button>
    </Link>
  );
};

export default Widget;
