'use client';

import React from 'react';
import 'flowbite';
import {Datepicker} from "flowbite-react";

const OurDatePicker = () => {
	return (
		<>
			<Datepicker
				onSelect={(e) => console.info(e)}
				onChange={(e) => console.info(e)}
				onInput={(e) => console.info(e)}
				onSelectedDateChanged={(e) => console.info(e)}
			/>
		</>
	);
};

export default OurDatePicker;
