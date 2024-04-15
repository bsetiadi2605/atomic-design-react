import PageTempalate from "../../templates/pageTemplate";
import ImageAtom from "../../../assets/atom.png"

const LayoutAtom = () => {
    return (
        <PageTempalate variant="primary">
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Atoms</h1>
                    <img src={ImageAtom}></img>
                </div>
            </section>
        </PageTempalate>
    );
}

export default LayoutAtom;