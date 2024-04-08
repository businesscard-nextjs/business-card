import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-white">
      <Image
        src="/images/not_found.svg"
        alt="Not Found"
        width={600}
        height={0}
        priority
        className="mr-10"
      />
      <Link
        href={"/"}
        className="button large active hover w-[240px] font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}
