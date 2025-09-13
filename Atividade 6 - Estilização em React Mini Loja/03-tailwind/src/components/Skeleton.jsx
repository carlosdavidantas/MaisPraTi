const Skeleton = ({ type = 'product', className = '' }) => {
  return (
    <div className={`bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm dark:shadow-slate-900/30 flex flex-col h-full ${className}`}>
      <div className="relative w-full pt-[100%] bg-gradient-to-r from-gray-200 dark:from-slate-600 via-gray-300 dark:via-slate-500 to-gray-200 dark:to-slate-600 bg-[length:200%_100%] animate-[skeleton_1.5s_infinite]"></div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="h-10 bg-gradient-to-r from-gray-200 dark:from-slate-600 via-gray-300 dark:via-slate-500 to-gray-200 dark:to-slate-600 bg-[length:200%_100%] animate-[skeleton_1.5s_infinite] rounded mb-2"></div>
        <div className="h-4 w-2/5 bg-gradient-to-r from-gray-200 dark:from-slate-600 via-gray-300 dark:via-slate-500 to-gray-200 dark:to-slate-600 bg-[length:200%_100%] animate-[skeleton_1.5s_infinite] rounded mb-2"></div>
        <div className="h-5 w-[30%] bg-gradient-to-r from-gray-200 dark:from-slate-600 via-gray-300 dark:via-slate-500 to-gray-200 dark:to-slate-600 bg-[length:200%_100%] animate-[skeleton_1.5s_infinite] rounded mb-4"></div>
        <div className="h-10 bg-gradient-to-r from-gray-200 dark:from-slate-600 via-gray-300 dark:via-slate-500 to-gray-200 dark:to-slate-600 bg-[length:200%_100%] animate-[skeleton_1.5s_infinite] rounded mt-auto"></div>
      </div>
    </div>
  );
};

export default Skeleton;