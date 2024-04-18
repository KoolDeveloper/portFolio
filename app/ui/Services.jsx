import DesertCity from "../components/myservices/walkerAnimation/DesertCity";
import Lake from "../components/myservices/walkerAnimation/Lake";

function Services() {
    return ( 
        <section className="w-1/2 mx-auto grid justify-center md:grid-cols-[repeat(2,400px)] gap-20">
            <Lake />
            <DesertCity />
        </section>
     );
}

export default Services;