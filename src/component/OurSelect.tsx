'use client';

import React from "react";
import Select from "react-select";

const customClassNames = {
	control: (state: any) =>
		`rounded-lg h-[42px] block w-full border-0 outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 p-2.5 text-sm`,
	input: (state: any) =>
		`rounded-lg text-gray-900 dark:text-white bg-transparent`,
	menu: (state: any) =>
		`bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 shadow-lg`,
	option: (state: any) =>
		`cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700`,
};

const OurSelect = () => {
	const dummyOptions = [
		{label: "Stockholm", value: "Stockholm"},
		{label: "Stockholm", value: "Stockholm"}
	]

	return (
		<Select
			classNames={customClassNames}
			components={{
				// DropdownIndicator: () => null,
				IndicatorSeparator: () => null,
				ClearIndicator: () => null

			}}
			className="z-10"
			options={dummyOptions}
			isMulti
			closeMenuOnSelect={false}
			hideSelectedOptions={false}
		/>
	);
};

export default OurSelect;
