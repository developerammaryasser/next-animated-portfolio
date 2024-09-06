import { about } from "@/data"

const Biography = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-y-4 py-16 text-slate-900">
        <h2 className="text-4xl font-bold text-center">Biography</h2>
        <p className="text-lg font-normal leading-relaxed text-center antialiased opacity-80 w-full md:w-3/4">
            {about.biography.text}
        </p>
    </div>
  )
}
export default Biography