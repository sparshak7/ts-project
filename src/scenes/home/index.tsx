import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}>
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div className='md:-mt-20' initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
            <div className='relative'>
              <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className='text-sm mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero, nihil quae eligendi, dignissimos repellat molestiae, nemo delectus debitis neque recusandae fuga. Dicta, quam? Praesentium quod laboriosam expedita distinctio eligendi.
            Quaerat minima quod delectus illo voluptatum. Consectetur quo reprehenderit suscipit hic tenetur officiis exercitationem dolor maxime optio molestiae, veniam eligendi facilis blanditiis aut, omnis doloribus voluptates recusandae saepe ullam non.</p>
          </motion.div>
          <motion.div className='mt-8 gap-8 flex items-center' initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={()=> setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className='flex basis-3/5 md:z-10 justify-center md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {isAboveMediumScreens && 
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 justify-between gap-8 items-center'>
              <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" />
            </div>
          </div>
        </div>}
    </section>
  )
}

export default Home