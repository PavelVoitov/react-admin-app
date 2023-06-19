import {ListBase, ListToolbar, Pagination, Title} from "react-admin";
import {Card} from "@mui/material";
import { ReactElement, ReactNode} from "react";

export type CustomListProps = {
	children: ReactNode;
	actions?: false | ReactElement | undefined
	filters?: ReactElement | ReactElement[]
	title: string;
}

export const CustomList = ({ children, actions, filters, title, ...props }: CustomListProps) => (
	<ListBase {...props}>
		<Title title={title}/>
		<ListToolbar
			filters={filters}
		/>
		<Card>
			{children}
		</Card>
		<Pagination />
	</ListBase>
);
