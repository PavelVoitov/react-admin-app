import * as React from 'react';
import {AutocompleteInput, FilterForm, Menu, ReferenceInput, TextInput} from 'react-admin';

export const CustomMenu = () => {

	const filters = [
		<TextInput
			source="job_title"
			label="Search by job title"
			alwaysOn
		/>,
		<ReferenceInput
			source="country"
			reference="contacts/countries"
			label="Choose location"
			alwaysOn
		>
			<AutocompleteInput
				optionText="name"
				filterToQuery={(searchText) => ({ name: searchText })}
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
				filterToQuery={(searchText) => ({ name: searchText })}
			/>
		</ReferenceInput>]


	return (
		<Menu>
				<FilterForm filters={filters}/>
		</Menu>
	)
}
