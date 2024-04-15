import BaseButton from "../../atoms/button";

const SectionTwo = () => {
    return (
         <section className="bg-gray-900">
             <div className="py-8 px-4 mx-auto max-w-screen-xl text-end lg:py-16">
                 <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Informasi Tambahan</h1>
                 <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl">Istilah "Atomic" merujuk pada konsep bahwa komponen-komponen UI dibagi menjadi unit yang terkecil dan tidak dapat dibagi lagi, mirip dengan partikel dalam kimia. </p>
                 <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl">Dengan menggunakan Atomic Design, pengembang dan desainer dapat memecah desain UI menjadi komponen-komponen yang lebih kecil dan lebih mudah dikelola. Ini memungkinkan reusabilitas yang lebih besar, pemeliharaan yang lebih mudah, dan pengembangan yang lebih cepat karena komponen-komponen ini dapat digunakan kembali di berbagai bagian aplikasi tanpa harus membangun dari awal setiap kali.</p>
                 <div className="flex flex-row gap-2 justify-end">
                     <BaseButton variant="primary">Tombol 1</BaseButton>
                     <BaseButton variant="secondary">Tombol 2</BaseButton> 
                 </div>
             </div>
         </section>
    ); 
 }
 
 export default SectionTwo;