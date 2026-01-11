import "./banner.css"
import ellipse from "../../assets/images/ellipse.png"
import doctor from "../../assets/images/banner-doctor.png"

const Banner = () => {
    return (
        <div className="banner-container container mx-auto flex-col lg:flex-row items-center justify-between gap-15 mt-10">

            <div className="banner-content w-full lg:w-1/2 px-8">

                <div className="banner-heading mb-5">
                    <h2 className="text-4xl lg:text-[52px] font-bold tracking-wider lg:leading-20">Every good thing starts with good health</h2>
                </div>

                <div className="banner-subheading">
                    <p className="font-medium text-base lg:text-lg">We are here to serve people with patient centered-care to deliver outstanding healthcare for better lives.</p>
                </div>

                <div className="banner-buttons">
                    <button className="banner-appointment-button py-3 px-5">Request appointment</button>
                    <button className="banner-learn-button py-3 px-5">Learn More</button>
                </div>

            </div>

            <div className="banner-graphic w-full lg:w-1/2 p-8">
                <img src={ellipse} alt="ellipse" />
                <img src={doctor} alt="doctor" className="absolute top-20 -left-28 " />
            </div>

        </div>
    )
}

export default Banner