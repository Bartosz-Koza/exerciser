import LoadingGif from '../public/loading2.gif'
import Image from 'next/image'

export default function Loader(){
    return(
        <div className='flex items-center justify-center h-[100vh]'>
            <Image
            src={LoadingGif}
            alt={"loading"}
            />
        </div>
    )
}