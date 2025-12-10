import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-white text-black">
      <section className="!bg-[linear-gradient(to_right,oklch(88.5%_0.113_316.7_/_0.7),oklch(79.5%_0.152_233.9_/_0.7),oklch(95.6%_0.172_106.3_/_0.7),oklch(76.2%_0.152_352.2_/_0.7),oklch(88.5%_0.113_316.7_/_0.7))] py-3 text-center">
        <div className="container">
          <p className="font-medium">
            <span className="max-sm:hidden">
              Introducing a completely redesigned interface —{" "}
            </span>
            <Link href="#" className="underline underline-offset-4">
              Explore the demo
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
