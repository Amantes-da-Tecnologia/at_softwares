import Image from "next/image"
export default function TitleHero() {
    return (
        <section >
              <div>
                  <div className="flex justify-center items-center gap-7 mt-10 md:mt-20">
                    <div className="">
                      <h1 className="text-lg text-[20px] font-bold sm:text-3xl md:text-5xl">Desenvolvimento de Sites Sob a Medida para Você!</h1>
                      <p className="text-[8px] text-gray-400 md:text-lg mt-4">Criamos soluções digitais personalizadas, alinhadas às suas  necessidades, para transformar sua visão em realidade e impulsionar seu  negócio.</p>
                    </div>
                    <Image
                      src="device.svg"
                      alt="Device Image"
                      width={250}
                      height={80}
                    className="sm:w-86 md:w-[500px]"
                    />

                  </div>
                  <div className="flex gap-3 items-center mt-10">
                    <button className="border-[1px] bg-slate-800 text-[8px] p-1 text-white px-6 rounded-3xl md:w-36 md:h-10 md:text-base">Começar</button>
                    <button className="border-[1px] border-black text-[8px] p-1 px-6 rounded-3xl md:w-36 md:h-10 md:text-base">Saiba Mais</button>
                  </div>
              </div>

              <hr className="mt-32" />
        </section>
    )
}