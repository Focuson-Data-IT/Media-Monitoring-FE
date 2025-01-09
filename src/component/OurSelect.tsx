'use client';

import React from "react";
import Select from 'react-select';
import {TOurSelect} from "@/component/constants";

const customClassNames = {
	control: (state: any) =>
		`flex items-center justify-between rounded-2xl h-[42px] block w-full border ${
			state.isFocused
				? "border-gray-400 dark:border-gray-400"
				: "border-gray-300 dark:border-gray-600"
		} outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 px-4 text-sm`,
	input: (state: any) =>
		`text-gray-900 dark:text-white flex-grow`,
	menu: (state: any) =>
		`dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl mt-1 shadow-lg`,
	option: (state: any) =>
		`cursor-pointer px-4 py-2 flex items-center justify-center ${
			state.isFocused
				? "bg-gray-300 dark:bg-gray-500 text-gray-900 dark:text-white"
				: "bg-gray-500 dark:bg-gray-700 text-gray-900 dark:text-white"
		} hover:bg-gray-300 dark:hover:bg-gray-500`,
};

const OurSelect: React.FC<TOurSelect> = ({options, disabled}) => {
	const dummyOptions = [
		{label: "Stockholm", value: "Stockholm"},
		{label: "Stockholm2", value: "Stockholm2"}
	]
	//
	return (
		<Select
			classNames={customClassNames}
			components={{
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
