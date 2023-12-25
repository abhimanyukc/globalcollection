import { StarIcon } from "@heroicons/react/24/solid";
//new name as emptystaricon
import { StarIcon as EmptyStarIcon} from "@heroicons/react/24/outline";

export default function Rating() {

    // we can programatically set how many filled stars 
    // and how many outlined Stars using {Array.from()} 
    // which allows to set the length of array and 
    // for maping over it we need index and 
    // return StarIcon from hero icon and 
    // since we r iterating we want key={index}

    return (
        <div className="flex items-center -ml-1">
            {Array.from({length: 4}).map((_, index) => (
                <StarIcon key={index} className="w-6 h-6 flex-shrink-0 text-yellow-420" />
            ))}
             {Array.from({length: 1}).map((_, index) => (
                <EmptyStarIcon key={index} className="w-5 h-5 flex-shrink-0 text-yellow-420" />
            ))}

        </div>
    )
}