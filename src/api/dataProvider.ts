import {DataProvider, fetchUtils} from "react-admin";
import {stringify} from "query-string";
import {apiUrl, instance} from "api/api";
import {AxiosResponse} from 'axios'

const httpClient = fetchUtils.fetchJson;

const token = localStorage.getItem('authToken');
// TypeScript's users must reference the type `DataProvider`
export const dataProvider: DataProvider = {
	getList: (resource, params) => {
		const {page, perPage} = params.pagination
		const { field, order } = params.sort;
		const query = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				sort: JSON.stringify([field, order]),
				range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
				filter: JSON.stringify(params.filter),
			}
		};
		if (resource === 'contacts') {
			return instance.get(`/test-api/${resource}`, query)
				.then((response: AxiosResponse) => {
					const { data, headers } = response;
					const total = parseInt(headers['content-range'].split('/').pop(), 10);

					return {
						data: data,
						total: total,
					};
				})
		} else if ((resource === 'contacts/industries')) {
			const query = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			return instance.get(`/test-api/${resource}`, query)
				.then((response: AxiosResponse) => {
					const { data } = response;
					const total = data.length
					return {
						data: data,
						total: total,
					};
				})
		} else if ((resource === 'contacts/countries')) {
			const query = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			return instance.get(`/test-api/${resource}`, query)
				.then((response: AxiosResponse) => {
					const { data } = response;
					const total = data.length
					return {
						data: data,
						total: total,
					};
				})
		} else return Promise.resolve({ data: [], total: 0 });
	},
	getOne: (resource: any, params: any,) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
			data: json,
		})),

	getMany: (resource, params) => {
		const query = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				filter: JSON.stringify({ request: params.ids }),
			}

		};
		return instance.get(`/test-api/${resource}`, query)
			.then((response: AxiosResponse) => {
				const { data } = response;
				const total = data.length
				return {
					data: data,
					total: total,
				};
			})
	},

	getManyReference: (): Promise<any> => {
		return Promise.resolve()
	},

	update: (resource: any, params: any) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`, {
			method: 'PUT',
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json })),

	updateMany: (resource: any, params: any) => {
		const query = {
			filter: JSON.stringify({ id: params.ids}),
		};
		return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
			method: 'PUT',
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json }));
	},

	create: (resource: any, params: any) =>
		httpClient(`${apiUrl}/${resource}`, {
			method: 'POST',
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({
			data: { ...params.data, id: json.id },
		})),

	delete: (resource: any, params: any) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`, {
			method: 'DELETE',
		}).then(({ json }) => ({ data: json })),

	deleteMany: (resource: any, params: any) => {
		const query = {
			filter: JSON.stringify({ id: params.ids}),
		};
		return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
			method: 'DELETE',
		}).then(({ json }) => ({ data: json }));
	}
};