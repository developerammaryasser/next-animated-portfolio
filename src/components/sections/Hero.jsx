import { hero } from "@/data"
import Image from "next/image"
import Button from "../elements/Button"
import Typography from "../elements/Typography"


const Hero = () => {

  return (
    <section className="py-8 md:py-12 lg:py-16 h-fit lg:h-[calc(100vh-5rem)]">
      <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center h-full text-center lg:text-start gap-y-16">
        <div className="w-full lg:w-11/12">
          <Image src={hero.heroImage} alt={hero.content.title}  width={500} height={500} className="object-cover"/>
        </div>
        <div className="flex flex-col items-stretch lg:items-start justify-start gap-y-12">
          <div className="flex flex-col items-stretch md:items-center lg:items-start justify-start gap-y-3">
          <Typography variant='h1' className="">{hero.content.title}</Typography>
          <Typography variant='p'>{hero.content.text}</Typography>
          </div>
          <div className=" flex flex-col lg:flex-row items-stretch lg:items-start lg:gap-x-4 lg:gap-y-0 gap-y-4">
            {
              hero.content.buttons.map(({id,variant,text,href}) => (
                <Button variant={variant} href={href} key={id}>{text}</Button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero