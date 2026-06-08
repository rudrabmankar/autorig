import Navbar from "../components/Navbar";

export function About() {
  return (
    <>
      <Navbar />

      <div className="page">

        <h1>About Us</h1>

        <p>
            AutoRig is an online motorcycle parts and accessories store dedicated to
            providing riders with high-quality products at affordable prices. We offer
            a wide range of motorcycle components including spark plugs, disc brakes,
            winglets, mirrors, brake pads, filters, and other essential parts required
            for maintenance and performance upgrades.
        </p>
        <p>
            At AutoRig, our mission is to make it easy for motorcycle enthusiasts to
            find reliable spare parts without the hassle of searching through multiple
            stores. We focus on delivering quality products, competitive pricing, and
            a simple shopping experience for every customer.
        </p>
        <p>
            Whether you are a daily commuter, a touring rider, or a motorcycle lover
            looking to enhance your bike's performance and appearance, AutoRig aims to
            be your trusted destination for motorcycle parts and accessories. We are
            committed to helping riders keep their motorcycles safe, efficient, and
            road-ready at all times.
        </p>

      </div>
    </>
  );
}

