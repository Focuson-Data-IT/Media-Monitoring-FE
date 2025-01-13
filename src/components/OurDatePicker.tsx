import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const customDatePickerStyles = {
	input: () =>
		`flex items-center justify-between rounded-2xl h-[42px] block w-full border border-gray-300 dark:border-gray-600 outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 px-4 text-sm transition-all`,
	calendar: () =>
		`rounded-2xl border border-gray-300 dark:border-gray-600 mt-2 shadow-lg dark:bg-gray-800 bg-white`,
	day: (state: { isSelected: boolean; isToday: boolean }) =>
		`cursor-pointer px-2 py-1 rounded-md ${
			state.isSelected
				? "bg-blue-500 text-white"
				: state.isToday
					? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
					: "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
		} hover:bg-gray-300 dark:hover:bg-gray-500`,
	popper: () => `absolute z-[9999]`,
};

const DateRangePicker: React.FC<{ applyCallback: void }> = ({applyCallback = null}) => {
	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
		null,
		null,
	]);
	const [startDate, endDate] = dateRange;

	return (
		<div className="flex flex-col">
			<div className="relative" style={{zIndex: 9999}}>
				<DatePicker
					selected={startDate}
					onChange={(v) => {
						setDateRange(v)
						applyCallback(v)
					}}
					startDate={startDate}
					endDate={endDate}
					selectsRange
					isClearable
					placeholderText="Select period"
					className={customDatePickerStyles.input()}
					calendarClassName={customDatePickerStyles.calendar()}
					dayClassName={(date) =>
						customDatePickerStyles.day({
							isSelected: !!(startDate && endDate && date >= startDate && date <= endDate),
							isToday: date.toDateString() === new Date().toDateString(),
						})
					}
					popperPlacement="bottom-start"
				/>
			</div>
		</div>
	);
};

export default DateRangePicker;
