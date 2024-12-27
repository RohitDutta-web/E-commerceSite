import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import "./slider.css"

const reviews = [
  "Shop the Future, Today",
  " Endless Choices Await!",
  "Shop the Future, Today",
  " Endless Choices Await!",
  
  

];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = () => {
  return (
    <figure
      className={cn(
        "banner-slider relative text-4xl w-64 font-['Oswald'] text-black cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]]",
      )}
    >
      Endless deals
    </figure>
    
  );
};




export function MarqueeDemo() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden text-2xl font-bold bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review} {...review} />
        ))}
      </Marquee>
    
      
    </div>
  );
}
