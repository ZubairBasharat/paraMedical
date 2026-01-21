import { Card, CardContent } from "@/components/ui/card";

interface CTAData {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ctas: CTAData[] = [
  {
    title: "Complimentary In-Home Care Assessment",
    description: "Let's get started today for a better tomorrow",
    link: "#",
    image: "/images/footer-cta-1.jpg",
  },
  {
    title: "Careers",
    description: "Be noticed. Be appreciated. Choose ParaMed.",
    link: "#",
    image: "/images/footer-cta-2.jpg",
  },
  {
    title: "Share your feedback",
    description: "Join our Patient and Family Advisory Council",
    link: "#",
    image: "/images/footer-cta-3.jpg",
  },
];

export function CTACards() {
  return (
    <div className="space-y-4">
      {ctas.map((cta) => (
        <a key={cta.title} href={cta.link} className="group block">
          <Card className="shadow-md hover:shadow-lg transition border-t-custom-purple border-l-0 border-r-0 border-b-0">
            <CardContent className="flex flex-row items-center gap-4 ">
              <img
                className="w-36 h-24 bg-cover bg-center rounded-b-md "
                style={{ backgroundImage: `url(${cta.image})` }}
                aria-hidden
              />
              <div>
                <div className="font-semibold text-black group-hover:text-custom-purple">
                  {cta.title}
                </div>
                <div className="text-sm text-custom-blue group-hover:text-custom-purple">
                  {cta.description}
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
