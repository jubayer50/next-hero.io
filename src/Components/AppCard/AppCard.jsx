import Image from "next/image";
import IconDownload from "@/assets/icon-downloads.png";
import IconRating from "@/assets/icon-ratings.png";
import Link from "next/link";

const AppCard = ({ app }) => {
  return (
    <div className="bg-white rounded-md p-4">
      <Link href={`/apps/${app.id}`} className="space-y-4 flex flex-col">
        <div className="bg-[#D9D9D9] rounded-md flex justify-center items-center py-15 flex-1">
          <Image src={app.image} alt={app.title} width={120} height={0}></Image>
        </div>

        <div className="space-y-4">
          <h3 className="text-[#001931] font-medium text-xl">{app.title}</h3>

          <div className="flex items-center justify-between">
            <div className="bg-[#F1F5E8] text-[#00D390] px-2.5 py-1.5 rounded-sm flex items-center gap-2 font-medium">
              <Image
                src={IconDownload}
                alt="Icon-Download"
                width={10}
                height={0}
                className=""
              ></Image>
              <p>{app.downloads}</p>
            </div>

            <div className="bg-[#FFF0E1] text-[#FF8811] px-2.5 py-1.5 rounded-sm flex items-center gap-2 font-medium">
              <Image
                src={IconRating}
                alt="Icon-Download"
                width={10}
                height={0}
                className=""
              ></Image>
              <p>{app.ratingAvg}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;

/*
{
    "image": "https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png",
    "title": "Instagram",
    "companyName": "Instagram",
    "id": 3,
    "description": "Instagram brings you closer to the people and things you love. Connect with friends, share what you're up to, or see what's new from others all over the world. Explore communities, share photos and videos, and express yourself with creative tools like Reels, Stories, and filters. Build your presence, follow your interests, and make your mark online.",
    "size": 130,
    "reviews": "160000K",
    "ratingAvg": 4.2,
    "downloads": "5000M",
    "ratings": [
        {
            "name": "1 star",
            "count": 8000000
        },
        {
            "name": "2 star",
            "count": 10000000
        },
        {
            "name": "3 star",
            "count": 22000000
        },
        {
            "name": "4 star",
            "count": 45000000
        },
        {
            "name": "5 star",
            "count": 75000000
        }
    ]
}
*/
