import {AutocompleteInput, Datagrid, List, ReferenceInput, TextField, TextInput} from 'react-admin';
import {CustomMenu} from "Layout/CustomMenu/CustomMenu";


export const contactFilters = [
	<TextInput source="job_title" label="Search by job title" alwaysOn/>,
	<ReferenceInput source="country" reference="contacts/countries" label="Choose location" alwaysOn>
		<AutocompleteInput
			optionText="name"
			filterToQuery={(searchText: string) => ({name: searchText})}
		/>
	</ReferenceInput>,
	<ReferenceInput
		source="industry"
		reference="contacts/industries"
		label="Choose industry"
		alwaysOn
	>
		<AutocompleteInput
			optionText="name"
			filterToQuery={(searchText: string) => ({name: searchText})}
		/>
	</ReferenceInput>
];


export const ContactList = () => {
	return (
		<List>
			<CustomMenu/>
			<Datagrid>
				<TextField source="company"/>
				<TextField source="job_title"/>
				<TextField source="industry"/>
				<TextField source="country" label={"Location"}/>
			</Datagrid>
		</List>
	)
}


