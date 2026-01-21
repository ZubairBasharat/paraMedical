export default function QuoteSection() {
  return (
    <section className="w-full bg-white">
      {/* Top Content Section */}
      <div className="w-full flex flex-row">
        <div className="hidden lg:flex lg:w-1/8 bg-custom-blue" />
        <div className="w-full lg:w-7/8 flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-16 gap-10">
          {/* Text Side */}
          <div className="md:w-2/3">
            <div className="text-custom-blue text-lg md:text-xl font-bold mb-6">
              <span className="text-4xl font-bold leading-none">&ldquo;</span>
              Home care is an incredibly important part of the health care
              system. The demand for our services and expertise is growing
              rapidly, and will only continue to grow as Canada’s population
              ages. As we work to meet this demand, we must prioritize patient
              experiences, and partner closely with our community caregivers to
              ensure the quality of care we provide is the best in the home care
              sector.
            </div>

            <div>
              <h3 className="text-black font-semibold text-lg">
                Katarina Busija
              </h3>
              <p className="text-gray-700 text-sm">
                Vice President and Chief Nursing Executive
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/images/Kat.png"
              alt="Katarina Busija"
              className="w-64 h-auto object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Bottom Colored Bars */}
      <div className="flex w-full h-24 lg:h-32">
        <div className="w-1/8 bg-custom-light-blue" />
        <div className="w-7/8 bg-custom-purple" />
      </div>
    </section>
  );
}
