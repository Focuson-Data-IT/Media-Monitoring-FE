export type OurDatePickerType = {
	doubleInput?: boolean;
	inputWidth?: string;
	singleDatePick?: boolean;
	minDate?: any;
	maxDate?: any;
	onChange?: any;
	style?: React.CSSProperties;
	placeholder?: string;
	value?: any;
	disabled?: boolean;
	applyCb?: any;
	type?: string;
	resetWhenOutside?: boolean;
	validationStyle?: object;
	validations?: ValidateResultType<any, any>;
	validationName?: string;
	cancelDefaultValue?: any;
};

export type ValidateResultType<TData, TErrors> = {
	valid: boolean,
	data: TData,
	errors: TErrors
}