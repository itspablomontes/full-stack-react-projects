export default async function globalTeardown() {
	// @ts-ignore
	await global.__MONGOINSTANCE.stop();
}
