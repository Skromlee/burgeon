import { Link } from "react-router-dom";

const CTA = () => {
    return (
        // CTA Section
        <section id="cta" class="bg-brightRed">
            {/* <!-- Flex container --> */}
            <div class="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
                {/* <!-- Heading --> */}
                <h2 class="text-center text-5xl font-bold leading-tight text-white md:max-w-xl md:text-left md:text-4xl">
                    Simplyify how your team works today
                </h2>
                {/* <!-- Button --> */}
                <div>
                    <Link
                        to="/signup"
                        class="baseline rounded-full bg-white p-3 px-6 pt-2 text-brightRed shadow-2xl hover:bg-gray-300"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default CTA;
