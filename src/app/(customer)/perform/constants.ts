import {TPeriodInput} from "@/components/constants";

export type TFairDetailBar = {
	label: string;
	unit: string;
	period: {
		startDate: Date | string | null,
		endDate: Date | string | null,
	};
	options: any;
}

export type TTopRanking = {
	period: TPeriodInput,
	options: any
}
