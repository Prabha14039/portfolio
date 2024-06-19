import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'

import {styles} from '../styles'
import {experiences} from '../constants/constants.js'
import {SectionWrapper} from '../hoc'
import {textVariant} from '../utils/motion.js'


const ExperienceCard = ({experience})=>{
  <VerticalTimelineElement>
  </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       <p className = {styles.sectionSubText}
       >What I Have Done So Far</p>
       <h2 className={styles.sectionHeadText}
       >Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")
