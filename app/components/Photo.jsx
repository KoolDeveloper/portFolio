import Image from "next/image";

export default function Photo() {
  return (
    <Image
      src="/yomerito.png"
      width={1200}
      height={628}
      alt="A picture of myself"
      className="rounded-md w-full h-full object-scale-down"
      loading="lazy"
    />
  );
}
