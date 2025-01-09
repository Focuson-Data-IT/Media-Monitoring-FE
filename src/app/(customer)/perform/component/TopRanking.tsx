'use client'

const TopRanking = () => {
	const dummyRank = [
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		}, {
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		}, {
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},
		{
			username: 'agus',
			score: 87.20,
			url: 'instagra,com/p/asdasd'
		},


	]

	return (
		<div className="mb-12 rounded-lg bg-white dark:bg-darkblack-600 max-h-[415px] overflow-y-scroll">
			<div
				className="flex items-center justify-between border-b border-bgray-300 px-5 py-3 dark:border-darkblack-400">
				<h3 className="text-xl font-bold text-bgray-900 dark:text-white">Top Ranking</h3>
				<div className="date-filter relative">
					<button type="button" className="flex items-center space-x-1">
						<span className="text-base font-semibold text-bgray-900 dark:text-bgray-50">Score</span>
					</button>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="table-auto w-full overflow-y-scroll">
					<tbody>
					{dummyRank.map((v, key) => {
						return (
							<tr
								key={key}
								className="h-[20px] bg-white dark:bg-darkblack-600 cursor-pointer hover:bg-bgray-500 dark:hover:bg-bgray-500"

							>
								<td className="whitespace-nowrap rounded-l-lg px-4 text-sm font-medium w-auto">
						<span>
						<svg
							width="24"
							height="24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
						<path
							d="M12.0001 17.75L5.82808 20.995L7.00708 14.122L2.00708 9.25495L8.90708 8.25495L11.9931 2.00195L15.0791 8.25495L21.9791 9.25495L16.9791 14.122L18.1581 20.995L12.0001 17.75Z"
							fill="#F6A723"
							stroke="#F6A723"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						</svg>
						</span>
								</td>
								<td className="whitespace-nowrap text-sm text-gray-500 lg:w-auto flex-end">
									<div className="flex items-center gap-5">
										<div className="h-[35px] w-[35px]">
											<img
												className="w-full rounded-lg object-cover"
												src="assets/images/avatar/user-1.png"
												alt=""
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-sm font-bold text-bgray-900 dark:text-white">Abdur
												Rohman</h4>
											<div>
												<span className="text-sm font-medium text-bgray-700 dark:text-bgray-50">Finance managers • </span>
												<span className="text-gray-500">Jakarta, Indonesia • </span>
											</div>
										</div>
									</div>
								</td>
								<td className="whitespace-nowrap rounded-r-lg pr-5 text-sm text-gray-500 text-end">
									87.30
								</td>
							</tr>
						);
					})}
					</tbody>
				</table>
			</div>
		</div>


	)
}

export default TopRanking;
