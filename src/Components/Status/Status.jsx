const Status = () => {
  return (
    <div className="bg-linear-to-b from-[#632EE3] to-[#9F62F2]">
      <div className="max-w-360 mx-auto py-20">
        <h2 className="text-white font-bold text-5xl text-center">
          Trusted by Millions, Built for You
        </h2>

        <div className="mt-10 flex justify-between">
          <div className="text-center text-white">
            <p className="opacity-80">Total Downloads</p>
            <h2 className="font-extrabold text-[64px] ">29.6M</h2>
            <p className="opacity-80">21% more than last month</p>
          </div>

          <div className="text-center text-white">
            <p className="opacity-80">Total Reviews</p>
            <h2 className="font-extrabold text-[64px] ">906K</h2>
            <p className="opacity-80">46% more than last month</p>
          </div>

          <div className="text-center text-white">
            <p className="opacity-80">Active Apps</p>
            <h2 className="font-extrabold text-[64px] ">132+</h2>
            <p className="opacity-80">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
