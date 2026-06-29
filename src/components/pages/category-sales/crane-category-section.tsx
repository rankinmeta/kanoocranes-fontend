import HighlightedTitle from '@/components/common/highlight-title'
import { StrapiImage } from '@/components/common/strapi-image'
import Tag from '@/components/common/tag'
import { cn, extractHighlightText } from '@/lib/utils'

const CraneCategorySection = ({theme}: {theme?: "dark" | "light"}) => {
  return (
    <section className={cn('bg-[#f5f5f5]', theme === "dark" && "bg-secondary text-white")}>
        <div className='container container-padding-x py-10 md:py-20'>
            <div className='space-y-2'>
                <Tag className={cn(theme === "dark" && "bg-white")}>Crane categories</Tag>
                <HighlightedTitle
                    title="Find the right <b>tower crane type</b>"
                    highlights={extractHighlightText(
                        "Find the right <b>tower crane type</b>"
                    )}
                />
            </div>

            <div className='grid md:grid-cols-4 gap-5 mt-10'>
                <Card theme={theme} />
                <Card theme={theme} />
                <Card theme={theme} />
                <Card theme={theme} />
            </div>
        </div>
    </section>
  )
}

export default CraneCategorySection

function Card({theme}: {theme?: "dark" | "light"}) {
    return (
        <div className={cn('bg-white flex flex-col md:items-center justify-center gap-3 p-6 rounded-md', theme === "dark" && "bg-[#041D54]")}>
            <StrapiImage
                src='http://localhost:3000/local/crane1.png'
                alt='crane'
                width={150}
                height={150}
                className='rounded-full aspect-square object-cover'
            />

            <div className='space-y-1 mt-4 md:mt-7'>
                <h4 className='text-lg font-manrope font-medium'>Flat-Top Tower Cranes</h4>
                <p className={cn('text-[#414651] text-sm leading-snug', theme === "dark" && "text-[#A4A7AE]")}>Ideal for urban environments and projects requiring multiple crane operations.</p>
            </div>
        </div>
    )
}