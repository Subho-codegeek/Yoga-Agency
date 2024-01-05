import homeImage from '../assets/home.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "Question 1",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Question 2",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Question 3",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Question 4",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Question 5",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const Home = () => {
  return (
    <div className='md:mt-16 mt-10 flex flex-col justify-center items-center'>
      {/* Upper part */}
      <div className='flex flex-col md:flex-row px-10 justify-center md:justify-between'>
        <img src={homeImage} alt="homeImage" className='w-auto md:w-1/2' />
        <h2 className='md:text-end md:text-8xl text-6xl text-center font-extrabold self-center'>connecting you with yoga instructors.</h2>
      </div>

      {/* Middle part */}
      <div className='flex flex-col-reverse md:my-40 my-12 md:flex-row px-10 justify-center md:justify-between'>
        <div className='self-center'>
          <p className='md:text-5xl md:text-start text-center text-3xl font-semibold'> we make yoga accessible to all. choose from our selected list of instructors and start your yoga journey today.</p>
          <div className='flex md:flex-row flex-col gap-6 mt-10'>
            <Button>book instrctor</Button>
            <Button>explore yoga</Button>
          </div>
        </div>
        <img src={homeImage} alt="homeImage" className='w-auto md:w-1/2' />
      </div>

      {/* Frequently asked questions */}
      <div className='w-1/2'>
        <h2 className='text-2xl md:text-4xl font-extrabold text-center mt-14'>Frequently Asked Questions</h2>
        <Accordion type="single" className='mt-10' collapsible>
          {
            faqs.map((faq, index) => {
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      </div>
      <Footer />
    </div>
  )
}

export default Home