import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[780px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          src="/moletom-ai-side.png"
          width={800}
          height={800}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-24 right-24 h-12 flex items-center gap-2 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="text-sm flex h-full items-center justify-center rounded-full min-w-[110px] bg-red-800 px-4 font-semibold colo">
            R$ 129,00
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          width={400}
          height={400}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-8 right-8 h-12 flex items-center gap-2 max-w-[200px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="text-sm flex h-full items-center justify-center rounded-full min-w-[110px] bg-red-800 px-4 font-semibold colo">
            R$ 129,00
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          width={400}
          height={400}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-8 right-8 h-12 flex items-center gap-2 max-w-[200px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="text-sm flex h-full items-center justify-center rounded-full min-w-[110px] bg-red-800 px-4 font-semibold colo">
            R$ 129,00
          </span>
        </div>
      </Link>
    </div>
  )
}
