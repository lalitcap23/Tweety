import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-white-300 w-1 hover:bg slate">
      {/* Corrected grid class and added flex for alignment */}
      <div className="grid grid-cols-12  ">
        <div className="col-span-1">
          <img
            src="https://avatars.githubusercontent.com/u/125788619?v=4"
            alt="user-image"
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h4>Lalitcap</h4>
          <p><pre>Is it just or the anybody .</pre></p>
 
          
          
 
        </div>
        <div className="col-span-4"></div>
        
        
        <div className="col-span-8"></div>
      </div>
    </div>
  );
};

export default FeedCard;