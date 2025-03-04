import Image from "next/image";

const Content = () => {
    return (
        <div className="w-full my-20">
            <h1 className="mb-20 font-bold text-center text-[35px] text-slate-600 md:text-[60px] xl:text-[90px]">
                Nuestros Estilos
            </h1>
            <div className="p-2">
                <div className="flex flex-col gap-5 justify-center items-center md:flex-row md:gap-10 xl:gap-24">
                    <Image src="/1.png" alt="productos_view_img" width={1000} height={1000} className="rounded-xl flex w-[400px]  hover:scale-95 xl:hover:scale-105 transition-all ease-in-out duration-500" />
                    <Image src="/2.png" alt="productos_view_img" width={1000} height={1000} className="rounded-xl flex w-[400px]  hover:scale-95 xl:hover:scale-105 transition-all ease-in-out duration-500" />
                </div>
                <div className="my-5 flex justify-center items-center md:my-16 xl:my-20">
                    <Image src="/3.png" alt="productos_view_img" width={1000} height={1000} className="rounded-xl flex  hover:scale-95 xl:hover:scale-105 transition-all ease-in-out duration-500" />
                </div>
            </div>
        </div>
    );
}

export default Content;
