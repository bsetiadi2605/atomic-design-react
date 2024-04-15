import PageTempalate from "../../templates/pageTemplate";
import ImageMolecule from "../../../assets/molecule.png"

const LayoutMolecule = () => {
    return (
        <PageTempalate variant="primary">
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Molecules</h1>
                    <img src={ImageMolecule}></img>
                </div>
            </section>
        </PageTempalate>
    );
}

export default LayoutMolecule;