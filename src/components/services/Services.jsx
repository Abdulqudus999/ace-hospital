import "./services.css"
import Service from "../service/Service"

const Services = () => {
  return (
    <div className="services-container container mx-auto px-4">
        <h3>Our Services</h3>

        <div className="services-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Service />
        </div>
    </div>
  )
}

export default Services