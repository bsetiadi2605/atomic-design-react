import PageTempalate from "../../templates/pageTemplate";
import ImageTemplate from "../../../assets/templates.png";

const LayoutTemplate = () => {
    return (
        <PageTempalate variant="secondary">
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Templates</h1>
                    <img src={ImageTemplate}></img>
                </div>
            </section>
        </PageTempalate>
    );
}

export default LayoutTemplate;