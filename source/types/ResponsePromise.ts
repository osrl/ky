/**
Returns a `Response` object with `Body` methods added for convenience. So you can, for example, call `ky.get(input).json()` directly without having to await the `Response` first. When called like that, an appropriate `Accept` header will be set depending on the body method used. Unlike the `Body` methods of `window.Fetch`; these will throw an `HTTPError` if the response status is not in the range of `200...299`. Also, `.json()` will return an empty string if body is empty or the response status is `204` instead of throwing a parse error due to an empty body.
*/
import {KyResponse} from './response.js';

export interface ResponsePromise<T = any> extends Promise<KyResponse<T>> {
	arrayBuffer: () => Promise<ArrayBuffer>;

	blob: () => Promise<Blob>;

	formData: () => Promise<FormData>;

	/**
	Get the response body as JSON.

	@example
	```
	import ky from 'ky';

	const json = await ky(…).json();
	```
	*/
	json: () => Promise<T>;

	text: () => Promise<string>;
}
