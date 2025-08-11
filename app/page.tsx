import { Link } from "lib/transition"
import Image from "next/image"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">workflows-go</h1>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        An open source implementation of event-driven workflows in Go.
      </p>
       
      <div className="flex flex-col items-center space-y-8">
        <Image 
          src={"/icon.png"} 
          alt="A white beaver on a black background with 'workflows-go' as a footer" 
          width={500} 
          height={500}
        />
        
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Dive into the docs!
        </Link>
      </div>
    </section>
  )
}