import Page from "../components/Page";
import { getPage } from "../services/content";

const ContactPage = ({ content }) => {
    return (
        <Page
            title={content.meta__title}
            description={content.meta__description}
        >
            <div className="section py-14 md:py-20">
                <h1 className="h1">{content.title}</h1>
            </div>
        </Page>
    );
};

export const getStaticProps = async () => {
    const content = getPage("contact");

    return {
        props: { content },
    };
};

export default ContactPage;
