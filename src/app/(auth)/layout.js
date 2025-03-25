import Image from "next/image";
export default function AuthLayout({ children }) {
  return (
    <main className="h-screen w-screen p-6 flex">
      <div className="flex-1 flex bg-red-50/20 justify-center items-center p-10">
        <Image
          className="w-full h-auto object-contain max-h-full"
          src={"/auth.png"}
          width={1000}
          height={1000}
          alt="Auth image"
        />
      </div>
      <div className="flex-1 flex justify-center items-center align-center p-10 ">
        {children}
      </div>
    </main>
  );
}
