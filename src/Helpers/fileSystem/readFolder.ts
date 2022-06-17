import { readdirSync } from 'fs';

export const readFolder = (directory: string): string[] => readdirSync(directory);
