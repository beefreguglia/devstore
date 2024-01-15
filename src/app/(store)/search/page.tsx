import Image from 'next/image'
import Link from 'next/link'

export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/`}
          className="group relative flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            width={400}
            height={400}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute bottom-8 right-8 h-12 flex items-center gap-2 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom never stop learning
            </span>
            <span className="text-sm flex h-full items-center justify-center min-w-[80px] rounded-full bg-red-800 px-4 font-semibold colo">
              R$ 129
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
