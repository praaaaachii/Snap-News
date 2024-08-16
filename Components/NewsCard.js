import Image from "next/image";

const NewsCard = ({ article }) => {
    return (
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg mb-10 w-64 h-64 pb-2">
        <Image
          src={article.urlToImage || "./fallback.png"}
          alt={article.title}
          width={550}
          height={500}
          className="h-32 object-cover"
          unoptimized={true}
        />
        <div className="h-6 text-sm font-semibold mt-4 mx-4 mb-3 text-gray-900 truncate">{article.title}</div>
        <div className="h-12 text-gray-500 mx-4 mb-4 text-xs overflow-clip flex flex-wrap text-ellipsis">{article.description}</div>
      </div>
    );
  };
 
export default NewsCard;