import { IoIosArrowForward } from "react-icons/io";
import CardButton from "./CardButton";

type IconProps = {
    Icon: React.ReactNode;
    title: string
};
const SolutionsCard: React.FC<IconProps> = ({ Icon, title }) => {
    return (
        <div className={`min-h-60 p-6 w-full rounded-2xl border border-gray-200 space-y-4`}>
            <div className='bg-slate-200 rounded-md flex items-center justify-center w-8 h-8 text-2xl text-blue'>{Icon}</div>
            <div className='text-2xl w-full md:w-4/5 md:line-clamp-2 font-medium text-black'>{title}</div>
            <CardButton title={"Explore More"} Icon={<IoIosArrowForward />} />
        </div>
    )
}

export default SolutionsCard