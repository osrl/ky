export interface KyResponse<T = any> extends Response {
	json: () => Promise<T>;
}
