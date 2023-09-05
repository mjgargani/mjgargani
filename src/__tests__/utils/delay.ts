/* eslint-disable no-promise-executor-return */
export const delay = async (ms: number) => new Promise((r) => setTimeout(r, ms));
