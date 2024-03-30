import Image from "next/image";

export default function Photo() {
  return (
    <Image
      src="/yomerito.png"
      width={1920}
      height={1080}
      alt="A picture of myself"
      className="rounded-md w-full h-full object-cover"
      loading="lazy"
    />
  );
}
