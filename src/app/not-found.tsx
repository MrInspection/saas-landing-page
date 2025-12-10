import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <div className={"bg-[#09090B]"}>
        <div className={"container relative cursor-not-allowed py-8"}>
          <div className="flex h-[750px] shrink-0 items-center justify-center rounded-md border border-dashed">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <TriangleAlert className={"h-10 w-10 text-muted-foreground"} />
              <h3 className="mt-4 font-bold text-2xl text-muted-foreground">
                Page not found
              </h3>
              <p className="mt-2 mb-4 text-muted-foreground text-sm">
                This is perhaps a mistake, please come back at a later time =
                {"'"}(
              </p>
              <Link href={"/"} className={cn(buttonVariants(), "mt-3")}>
                Go back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
