

const About = () => {
  return (
    <div className="bg-[#f7ecaf]" id="about">
    <div className="grid md:grid-cols-1 grid-cols-1 col-span-3 md:col-span-1 py-2">
     <div className=" md:justify-center grid space-y-6 text-center p-4">
        <h1 className="font-Athiti text-4xl underline">Who we are</h1>
       
        <p className=" w-full font-semibold"><span className=" font-Athiti text-[#36200F] text-xl">Inspire Her Africa</span> is an annual six-month comprehensive mentorship program designed to provide personalized guidance and support to African women who are seeking to improve their skills, knowledge, and career prospects.</p>
     
     </div>
     </div>
     <div className=" p-8">
     <div className=" bg-white rounded-2xl border-l-[20px] border-l-red-600">
     <div className=" text-center p-8">
        <h1  className="font-Athiti text-xl ">Our vision</h1>
        <p>To provide thorough mentorship, guidance, and networking opportunities that will inspire African women to pursue their passions, develop their skills, and become leaders in their professional spaces. We aim to create a safe community for African women to connect, learn, grow and encourage themselves to achieve their full potential. We aspire to be the leading mentorship group for African women looking to advance professionally.</p>
     </div>
     </div>
     </div>
     <div className=" p-8">
     <div className=" bg-white rounded-2xl border-l-[20px] border-l-blue-600">
        <div className=" text-center p-8">
            <h1 className=" font-Athiti text-xl">Our mission</h1>
            <p>Connecting Women To create a safe community for African women to connect, learn, grow and encourage themselves to achieve their full potential.</p>
        </div>
     </div>
     </div>
     <div className=" text-center">
     <h1 className="font-Athiti text-4xl underline">Meet Our Leaders</h1>
    </div>
    </div>
  )
}

export default About;