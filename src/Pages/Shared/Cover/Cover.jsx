import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="Our Menu"
            strength={-200}
        >
            <div>
                <div className="hero h-[700px] mb-14">
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" bg-opacity-30 bg-black max-w-6xl px-96 p-24">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{subtitle}</p>
                        </div>
                    </div>
                </div>

            </div>
        </Parallax>

    );
};

export default Cover;