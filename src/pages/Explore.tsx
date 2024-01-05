import {
    Card,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const yogaStyles = [
    {
        name: "Hatha Yoga",
        description: "Hatha yoga is a branch of yoga that emphasizes physical exercises to master the body along with mind exercises to withdraw it from external objects.",
    },
    {
        name: "Vinyasa Yoga",
        description: "Vinyasa is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath. Commonly referred to as “flow” yoga.",
    },
    {
        name: "Ashtanga Yoga",
        description: "Ashtanga yoga is a system of yoga recorded by the sage Vamana Rishi in the Yoga Korunta, an ancient manuscript said to contain lists of many different groupings of asanas, as well as highly original teachings on vinyasa, drishti, bandhas, mudras, and philosophy.",
    },
    {
        name: "Iyengar Yoga",
        description: "Iyengar Yoga, named after and developed by B. K. S. Iyengar, and described in his bestselling 1966 book Light on Yoga, is a form of Hatha yoga that has an emphasis on detail, precision and alignment in the performance of posture (asana) and breath control (pranayama).",
    },
    {
        name: "Bikram Yoga",
        description: "Bikram Yoga is a system of yoga that Bikram Choudhury synthesized from traditional hatha yoga techniques and popularized beginning in the early 1970s. All Bikram Yoga Beginning Series classes run for 90 minutes and consist of the same series of 26 postures, including two breathing exercises.",
    },
    {
        name: "Bikram Yoga",
        description: "Bikram Yoga is a system of yoga that Bikram Choudhury synthesized from traditional hatha yoga techniques and popularized beginning in the early 1970s. All Bikram Yoga Beginning Series classes run for 90 minutes and consist of the same series of 26 postures, including two breathing exercises.",
    },
];

const Explore = () => {
    return (
        // Explore section
        <div className='md:px-10'>
            {/* <h2 className='text-2xl md:text-4xl font-extrabold text-center mt-20'>Explore...</h2> */}
            <div className='flex flex-wrap justify-center items-center gap-6'>
                {
                    yogaStyles.map((style, index) => {
                        return (
                            <Card key={index} className='mt-10 h-96 w-80 flex flex-col items-center'>
                                <CardHeader>
                                    <CardTitle>{style.name}</CardTitle>
                                    {/* <CardDescription>{style.description}</CardDescription> */}
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <Button>Learn More</Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Explore