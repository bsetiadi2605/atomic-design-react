import ImageAtomic from '../../../assets/atomic.png';

const SectionOne = () => {
   return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Apa itu Atomic Design</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Atomic Design adalah sebuah metodologi dalam desain UI (User Interface) yang dikembangkan oleh Brad Frost. Metodologi ini menggambarkan bagaimana kita seharusnya merancang dan membangun antarmuka pengguna dengan memecahnya menjadi bagian-bagian yang lebih kecil, mulai dari komponen sederhana hingga komponen yang lebih kompleks</p>
                <img src={ImageAtomic}></img>
            </div>
        </section>
   ); 
}

export default SectionOne;