import showcase from "../images/link-loom-bg.png";

export default function Showcase() {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
            LinkLoom: A fast & simple URL shortener
            </h1>
            <p className="lg:text-lg text-slate-400 mb-10">
            A URL Shortener for transforming long links into nice, memorable and trackable short URLs. Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos.
            </p>
            <button className="btn-cta rounded-lg w-full md:w-45">Pricing</button>
          </article>

          <article>
            <img src={showcase} alt="" />
          </article>
        </div>
      </section>
    </>
  );
}
