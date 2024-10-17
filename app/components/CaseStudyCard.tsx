import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import CardButton from './CardButton'

const CaseStudyCard = ({ image, content }: { image: string, content: string }) => {
    return (
        <div className='flex flex-col rounded-t-2xl overflow-hidden max-w-96 mx-1'>
            <div>
                <Image src={image} width={500} height={500} alt='' />
            </div>
            <div className='p-7 md:p-8 bg-white/50 flex flex-col border rounded-b-2xl gap-y-2 border-white'>
                <p className="text-blue font-medium md:text-xs">CASE STUDY</p>
                <p className="text-stone-900 h-15 mb-2 leading-7 text-xl md:text-2xl font-medium line-clamp-2 whitespace-pre-wrap break-words">{content}</p>
                <CardButton title={"Read More"} Icon={<IoIosArrowForward />} />
            </div>
        </div>
    )
}

export default CaseStudyCard