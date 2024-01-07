"use client";
import { AreaChart, Card, Title, DonutChart } from "@tremor/react";

const chartdata = [
	{
		date: "Jan 22",
		SemiAnalysis: 2890,
		"The Pragmatic Engineer": 2338,
		test: 2000,
	},
	{
		date: "Feb 22",
		SemiAnalysis: 2756,
		"The Pragmatic Engineer": 2103,
		test: 3000,
	},
	{
		date: "Mar 22",
		SemiAnalysis: 3322,
		"The Pragmatic Engineer": 2194,
		test: 4000,
	},
	{
		date: "Apr 22",
		SemiAnalysis: 3470,
		"The Pragmatic Engineer": 2108,
		test: 4000,
	},
	{
		date: "May 22",
		SemiAnalysis: 3475,
		"The Pragmatic Engineer": 1812,
		test: 4000,
	},
	{
		date: "Jun 22",
		SemiAnalysis: 3129,
		"The Pragmatic Engineer": 1726,
		test: 100,
	},
];

const cities = [
	{
		name: "New York",
		sales: 9800,
	},
	{
		name: "London",
		sales: 4567,
	},
	{
		name: "Hong Kong",
		sales: 3908,
	},
	{
		name: "San Francisco",
		sales: 2400,
	},
	{
		name: "Singapore",
		sales: 1908,
	},
	{
		name: "Zurich",
		sales: 1398,
	},
];

const valueFormatter = function (number) {
	return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export default function Dashboard() {
	return (
		<>
			<div className="flex flex-row">
				<div className="flex-1 w-full m-10">
					<Card>
						<Title>Newsletter revenue over time (USD)</Title>
						<AreaChart
							className="h-72 mt-4"
							data={chartdata}
							index="date"
							categories={[
								"SemiAnalysis",
								"The Pragmatic Engineer",
								"test",
							]}
							colors={["indigo", "cyan", "amber"]}
							valueFormatter={valueFormatter}
						/>
					</Card>
					<div className="grid grid-cols-3 gap-4 pt-5">
						<Card className="max-w-lg">
							<Title>Sales</Title>
							<DonutChart
								className="mt-6"
								data={cities}
								category="sales"
								index="name"
								valueFormatter={valueFormatter}
								colors={[
									"slate",
									"violet",
									"indigo",
									"rose",
									"cyan",
									"amber",
								]}
							/>
						</Card>
						<Card className="max-w-lg">
							<Title>Revenue</Title>
							<DonutChart
								className="mt-6"
								data={cities}
								category="sales"
								index="name"
								valueFormatter={valueFormatter}
								colors={[
									"slate",
									"violet",
									"indigo",
									"rose",
									"cyan",
									"amber",
								]}
							/>
						</Card>
						<Card className="max-w-lg">
							<Title>Sales</Title>
							<DonutChart
								className="mt-6"
								data={cities}
								category="sales"
								index="name"
								valueFormatter={valueFormatter}
								colors={[
									"slate",
									"violet",
									"indigo",
									"rose",
									"cyan",
									"amber",
								]}
							/>
						</Card>
						<Card className="max-w-lg">
							<Title>Sales</Title>
							<DonutChart
								className="mt-6"
								data={cities}
								category="sales"
								index="name"
								valueFormatter={valueFormatter}
								colors={[
									"slate",
									"violet",
									"indigo",
									"rose",
									"cyan",
									"amber",
								]}
							/>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
