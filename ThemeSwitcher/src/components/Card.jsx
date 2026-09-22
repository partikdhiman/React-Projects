export default function Card() {
    return (
        <div
            className="
                w-full max-w-sm mx-auto
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-300
            "
        >

            <div className="bg-gray-50 dark:bg-gray-800 p-6">

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuTym-c8sEf1WDSWP3yUdnszNX7-hZ-TyZ2rSu7b5XA&s=10"
                    alt="iPhone 18"
                    className="
                        w-full h-64
                        object-contain
                        rounded-2xl
                        border border-gray-200 dark:border-gray-700
                        shadow-sm
                        hover:scale-105
                        transition-transform duration-300
                    "
                />

            </div>

            <div className="p-6">

                <div className="flex justify-between items-center mb-3">

                    <span className="
                        text-xs font-semibold
                        uppercase tracking-wider
                        text-blue-600
                    ">
                        New Arrival
                    </span>

                    <span className="
                        text-xs
                        text-gray-500
                        dark:text-gray-400
                    ">
                        Apple
                    </span>

                </div>

                <h2 className="
                    text-2xl font-semibold
                    text-gray-900 dark:text-white
                ">
                    iPhone 18
                </h2>

                <p className="
                    mt-2 text-sm leading-6
                    text-gray-500 dark:text-gray-400
                ">
                    Powerful performance, advanced camera system
                    and premium design for everyday use.
                </p>

                <div className="
                    mt-6 flex items-center justify-between
                ">

                    <div>
                        <p className="
                            text-xs
                            text-gray-500 dark:text-gray-400
                        ">
                            Starting from
                        </p>

                        <p className="
                            text-2xl font-bold
                            text-gray-900 dark:text-white
                        ">
                            ₹79,900
                        </p>
                    </div>

                    <button
                        className="
                            px-5 py-2.5
                            bg-blue-600 hover:bg-blue-700
                            text-white text-sm font-medium
                            rounded-xl
                            shadow-sm hover:shadow-lg
                            hover:scale-105
                            transition-all duration-200
                        "
                    >
                        Buy Now
                    </button>

                </div>

            </div>
        </div>
    );
}