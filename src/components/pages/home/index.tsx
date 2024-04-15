import SectionOne from "../../organisms/sectionOne";
import SectionTwo from "../../organisms/sectionTwo";
import PageTempalate from "../../templates/pageTemplate";

const Home = () => {
    return (
        <PageTempalate variant="primary">
            <SectionOne />
            <SectionTwo />
        </PageTempalate>
    );
}

export default Home;