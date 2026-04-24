import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-purple-100">
      <div className="flex justify-center flex-col gap-4">
        <h2 className="text-4xl font-bold">404 Not Found!</h2>
        <Link href={"/"} className="mx-auto">
          <button className="btn bg-linear-to-b from-[#632EE3] to-[#9F62F2] font-medium text-white">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
