import React from 'react'

const About = () => {
  return (
    <div>
      <section className="bg-blue-900">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          About Biometacon Conference
        </h2>
        <p className="mt-4 text-white text-lg">
        The Department of Biochemical Engineering, HBTU Kanpur, proudly presents "BIO-METACON 2025," a premier international conference centered around the theme "Sustainable Innovation and Challenges: Recent Trends in Bioengineering." Scheduled for 3rd-5th March 2025, this event aims to foster discussions and collaborations among leading academics, researchers, and industry experts in the field of Bioengineering.
BIO-METACON 2025 will provide a dynamic platform to explore the latest advancements and emerging challenges in bioengineering, focusing on sustainable innovation in biotechnology, biochemical processes, and bio-product development. 
Attendees will have the opportunity to participate in keynote sessions, technical presentations, panel discussions, and workshops led by distinguished speakers from both academia and industry. The conference encourages knowledge exchange, networking, and collaboration to address critical global challenges such as climate change, sustainable development, and health care.
Join us at HBTU Kanpur to engage with thought leaders, share groundbreaking research, and contribute to shaping the future of bioengineering. 
        </p>
        <div className="mt-8">
          <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
            Learn more about us
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
          alt="About Us Image"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
