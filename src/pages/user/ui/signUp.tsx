import { Button } from "@/src/shared/ui/button";
import cn from "clsx";
import Image from "next/image";

export default function SignUp({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        "max-w-4xl flex flex-col items-center h-screen mx-auto",
      )}
    >
      <div className="relative w-[100px] h-[100px] mt-32">
        <Image fill src="/logo.svg" alt="logo image" />
      </div>

      <div className="w-full flex flex-col max-w-[360px] mt-19.5">
        <div className="text-center text-lg font-bold">Sign up to continue</div>
        <div className="w-full flex flex-col gap-5 mt-8">
          <Button className="flex-1">Continue with email</Button>
          <Button variant="white" className="flex-1">
            Use phone number
          </Button>
        </div>
      </div>

      <div className="flex gap-8 text-red text-sm mt-auto pb-12">
        <a className="cursor-pointer">Terms of use</a>
        <a className="cursor-pointer">Privacy Policy</a>
      </div>
    </div>
  );
}
