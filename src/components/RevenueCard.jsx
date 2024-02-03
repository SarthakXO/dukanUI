const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-sm p-4">
      <div className="text-gray-400">{title}</div>
      <div className="flex justify-between pt-2">
        <div className="font-semibold text-4xl">₹{amount}</div>
        <div>
          {orderCount ? (
            <div className="flex text-blue-500">
              <div className="underline">{orderCount} orders</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
