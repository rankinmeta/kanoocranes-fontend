import HighlightedTitle from "@/components/common/highlight-title"
import Tag from "@/components/common/tag"
import { extractHighlightText } from "@/lib/utils"

const EngineeringServicesSection = () => {
  return (
    <section className="relative bg-secondary text-white">
        {/* Circles */}
        <div className="hidden lg:grid absolute top-7 right-0 grid-cols-4 gap-2 after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:to-secondary after:z-10">
            {Array(8)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className="size-14 bg-[#03297a] rounded-full"
                    ></div>
                ))}
        </div>

        <div className="container container-padding-x py-10 md:py-20 flex flex-col justify-center items-center md:text-center">
            <div className="space-y-2 flex flex-col justify-center md:items-center">
                <Tag className="bg-white">Engineering services</Tag>
                <HighlightedTitle
                    title="Comprehensive engineering support"
                    highlights={extractHighlightText(
                        "Comprehensive engineering support"
                    )}
                />
                <p className="max-w-xl">Speak with our specialists to find the right crane solution for your project requirements, site conditions, and lifting challenges.</p>
            </div>

            <div className="flex w-full lg:grid grid-cols-4 gap-4 mt-6 lg:mt-10 overflow-x-scroll scrollbar-none">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
            </div>
        </div>
    </section>
  )
}

export default EngineeringServicesSection

function Card() {
    return (
        <div className="w-[80%] md:w-1/2 lg:w-auto shrink-0 border border-white/10 p-6 flex flex-col gap-10 rounded-md text-left hover:bg-[#041D54]">
            <h4 className="font-manrope font-medium text-lg">Lift Planning</h4>
            <p className="font-light">Detailed lift studies, load calculations, risk assessments, and execution planning for safe operations.</p>
        </div>
    )
}