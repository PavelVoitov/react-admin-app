import {Layout, LayoutComponent} from 'react-admin';
import React from "react";
import {CustomMenu} from "Layout/CustomMenu/CustomMenu";

export const CustomLayout: LayoutComponent = () => (
	<Layout>
		<CustomMenu/>
	</Layout>
);