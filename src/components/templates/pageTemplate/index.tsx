import Footer from "../../organisms/footer";
import Header from "../../organisms/header";

interface IPageTemplate {
    variant? : 'primary' | 'secondary'
    children? : any 
}

const PageTempalate = (value: IPageTemplate) => {

    const {
        variant = "primary",
        children
    } = value;

    return (
        <div className="flex flex-col">
            <Header />
            {children}
            {variant === "primary" && <Footer />}
        </div>
    );
}

export default PageTempalate;