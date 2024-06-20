import {useState,useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import {EarthCanvas ,StarsCanvas} from './canvas/index.js'
import {SectionWrapper} from '../hoc/index.js'
import {slideIn} from '../utils/motion.js'



const Contact = () => {
  const formRef = useRef()
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);
  const handleChange = (e) =>{
    const {name,value}=e.target;
    setform({...form,[name]: value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setloading(true);

    emailjs.send('service_gzt3qbi','template_o8b372l',{
      from_name:form.name,
      to_name:'Abhinav',
      from_email:form.email,
      to_email:'agarg1_be22@thapar.edu',
      message: form.message,
    },
    'n8E1cuGK45C6ZR0LT').then(()=>{
      setloading(false);
      alert('Thank you. I will get to you as Soon as Possible');
      setform=
        ({
          name:'',
          email:'',
          message:'',
        })
    },(error)=>{
      setloading(false)

      console.log(error);

      alert('Something went wrong')
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">      
    <motion.div
        variants={slideIn('left',"tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}> get in touch </p>
        <h3 className={styles.sectionHeadText}> Contact. </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white reounde-ls outlined-none border-none font-medium"
            />
          </label>
            <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white reounde-ls outlined-none border-none font-medium"
            />
          </label>
           <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <input
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white reounde-ls outlined-none border-none font-medium"
            />
          </label>

          <button 
            type="submit"
            className="bg-tertiary outline-none w-fit font-bold text-white shadow-primary py-3 px-8 rounded-xl shadow-md "
          >
            {loading ? "Sending..." :"Send"}
          </button>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
          <StarsCanvas />
      </motion.div>
    </div>    
  )
}

export default SectionWrapper(Contact,"contact")
